import { useState } from "react";
import { submitLead } from "@/lib/leads";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadCaptureForm({ source = "website" }: { source?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  if (status === "success") {
    return (
      <p className="text-sm font-medium text-secondary">
        Thanks — you're on the list. We'll be in touch.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row sm:flex-wrap gap-3"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setError(null);

        const formData = new FormData(e.currentTarget);
        try {
          await submitLead({
            data: {
              name: (formData.get("name") as string) || "",
              email: (formData.get("email") as string) || "",
              phone: (formData.get("phone") as string) || "",
              source,
            },
          });
          setStatus("success");
        } catch (err) {
          setStatus("error");
          setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        }
      }}
    >
      <input
        name="name"
        type="text"
        placeholder="Full name"
        required
        className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition text-sm"
      />
      <input
        name="email"
        type="email"
        placeholder="Email address"
        required
        className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition text-sm"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition text-sm"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-6 py-3 rounded-md bg-secondary text-white font-semibold hover:bg-orange-600 transition disabled:opacity-60 whitespace-nowrap"
      >
        {status === "submitting" ? "Submitting…" : "Sign up"}
      </button>
      {status === "error" && (
        <p className="basis-full text-sm text-red-500">{error}</p>
      )}
      <p className="basis-full text-xs text-muted-foreground">
        By signing up you agree to receive occasional emails from JTL. Unsubscribe anytime.
      </p>
    </form>
  );
}
