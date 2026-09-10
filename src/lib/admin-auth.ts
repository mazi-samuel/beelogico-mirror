import { createMiddleware } from "@tanstack/react-start";
import { auth, clerkClient } from "@clerk/tanstack-react-start/server";

function getAllowedAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Real access control lives here, not in the UI. Anyone can hit a server
 * function's HTTP endpoint directly, bypassing whatever the React tree
 * renders — so every admin-only server function must attach this.
 */
export const requireAdminMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const allowedEmails = getAllowedAdminEmails();
    const user = await clerkClient().users.getUser(userId);
    const email = user.primaryEmailAddress?.emailAddress?.toLowerCase();

    if (!email || !allowedEmails.includes(email)) {
      throw new Error("Forbidden");
    }

    return next({ context: { adminEmail: email } });
  }
);
