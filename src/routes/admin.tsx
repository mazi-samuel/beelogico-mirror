import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ClerkProvider, Show, SignIn, UserButton } from "@clerk/tanstack-react-start";
import { getLeads, type Lead } from "@/lib/leads";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — JTL" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

// Clerk is scoped to this route only (not the root layout) so regular site
// visitors never load Clerk's script or get its cookies — only people who
// actually navigate to /admin do.
function AdminPage() {
  return (
    <ClerkProvider>
      <main className="min-h-screen pt-32 pb-20 px-6 bg-soft">
        <div className="mx-auto max-w-5xl">
          <Show when="signed-out">
            <div className="mx-auto max-w-sm">
              <h1 className="mb-6 text-center text-2xl font-bold">Admin sign in</h1>
              <SignIn />
            </div>
          </Show>
          <Show when="signed-in">
            <AdminDashboard />
          </Show>
        </div>
      </main>
    </ClerkProvider>
  );
}

function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getLeads()
      .then(setLeads)
      .catch((err) => {
        const message = err instanceof Error ? err.message : "";
        setError(
          message === "Forbidden"
            ? "Your account isn't authorized to view this page."
            : "Could not load leads."
        );
      });
  }, []);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Leads</h1>
        <UserButton />
      </div>

      {error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          {error}
        </p>
      )}

      {!error && !leads && <p className="text-muted-foreground">Loading…</p>}

      {leads && (
        <div className="overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-card text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Phone</th>
                <th className="px-4 py-3 font-semibold">Source</th>
                <th className="px-4 py-3 font-semibold">Received</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t border-border/40">
                  <td className="px-4 py-3">{lead.name || "—"}</td>
                  <td className="px-4 py-3">{lead.email}</td>
                  <td className="px-4 py-3">{lead.phone || "—"}</td>
                  <td className="px-4 py-3">{lead.source || "—"}</td>
                  <td className="px-4 py-3">{new Date(lead.created_at).toLocaleString()}</td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-muted-foreground">
                    No leads yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
