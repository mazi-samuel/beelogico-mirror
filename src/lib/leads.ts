import { createServerFn } from "@tanstack/react-start";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";
import { requireAdminMiddleware } from "@/lib/admin-auth";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  source: z.string().trim().max(100).optional(),
});

let tableReady: Promise<unknown> | null = null;

function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set — the leads database has not been provisioned yet.");
  }
  return neon(process.env.DATABASE_URL);
}

async function ensureTable(sql: ReturnType<typeof getSql>) {
  if (!tableReady) {
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT NOT NULL,
        phone TEXT,
        source TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
  }
  await tableReady;
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const sql = getSql();
    await ensureTable(sql);
    await sql`
      INSERT INTO leads (name, email, phone, source)
      VALUES (${data.name}, ${data.email}, ${data.phone || null}, ${data.source || "website"})
    `;
    return { ok: true as const };
  });

export type Lead = {
  id: number;
  name: string | null;
  email: string;
  phone: string | null;
  source: string | null;
  created_at: string;
};

export const getLeads = createServerFn({ method: "GET" })
  .middleware([requireAdminMiddleware])
  .handler(async (): Promise<Lead[]> => {
    const sql = getSql();
    await ensureTable(sql);
    const rows = await sql`
      SELECT id, name, email, phone, source, created_at
      FROM leads
      ORDER BY created_at DESC
    `;
    return rows as Lead[];
  });
