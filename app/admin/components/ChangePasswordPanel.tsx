"use client";

import { useState, useTransition } from "react";
import { adminChangePasswordAction } from "@/app/admin/actions/auth";

export default function ChangePasswordPanel() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setError(null);
          setMessage(null);
        }}
        className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold hover:bg-white/10"
      >
        Change password
      </button>

      {message ? (
        <p className="absolute right-0 top-full z-10 mt-2 whitespace-nowrap rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800">
          {message}
        </p>
      ) : null}

      {open ? (
        <div className="absolute right-0 z-20 mt-3 w-80 rounded-2xl border border-gray-100 bg-white p-4 text-[#102f35] shadow-xl">
          <p className="mb-3 text-sm font-semibold">Change password</p>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              setMessage(null);
              setError(null);
              startTransition(async () => {
                const result = await adminChangePasswordAction(formData);
                if (result.ok) {
                  setMessage("Password updated.");
                  setOpen(false);
                  e.currentTarget.reset();
                } else {
                  setError(result.error);
                }
              });
            }}
          >
            <label className="block text-xs">
              <span className="mb-1 block font-semibold">Current password</span>
              <input
                type="password"
                name="currentPassword"
                required
                autoComplete="current-password"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              />
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-semibold">New password</span>
              <input
                type="password"
                name="newPassword"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              />
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-semibold">
                Confirm new password
              </span>
              <input
                type="password"
                name="confirmPassword"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
              />
            </label>
            {error ? <p className="text-xs text-red-600">{error}</p> : null}
            <div className="flex gap-2 pt-1">
              <button
                type="submit"
                disabled={pending}
                className="flex-1 rounded-full bg-[#102f35] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
              >
                {pending ? "Saving…" : "Save"}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
