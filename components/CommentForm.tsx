"use client";

import { useState } from "react";

export default function CommentForm({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const comment = formData.get("comment");

    try {
      const res = await fetch("/api/comment", {        // 👈 singular
        method: "POST",
        body: JSON.stringify({ name, email, comment, slug }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setSuccess("Thank you! Your comment is submitted and awaiting approval.");
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-white border border-gray-300 p-6 rounded-xl shadow-sm"
    >
      <h3 className="text-xl font-semibold text-[#102f35] mb-4">
        Leave a Comment
      </h3>

      {/* NAME */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Your name"
        />
      </div>

      {/* EMAIL */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded-lg px-3 py-2"
          placeholder="you@example.com"
        />
      </div>

      {/* COMMENT */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Comment</label>
        <textarea
          name="comment"
          required
          rows={4}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Write your comment..."
        ></textarea>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#102f35] text-white px-5 py-2 rounded-lg hover:bg-[#0c242a] transition disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Comment"}
      </button>

      {success && <p className="text-green-600 mt-3">{success}</p>}
      {error && <p className="text-red-600 mt-3">{error}</p>}
    </form>
  );
}
