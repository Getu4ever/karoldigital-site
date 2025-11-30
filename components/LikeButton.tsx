"use client";

import { useState } from "react";

export default function LikeButton({
  slug,
  initialLikes,
}: {
  slug: string;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [loading, setLoading] = useState(false);

  async function handleLike() {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/like", {
        method: "POST",
        body: JSON.stringify({ slug }),
      });

      const data = await res.json();
      if (data.likes !== undefined) {
        setLikes(data.likes);
      }
    } catch (err) {
      console.error("Like error:", err);
    }

    setLoading(false);
  }

  return (
    <button
      type="button"
      onClick={handleLike}
      disabled={loading}
      className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full shadow-sm hover:bg-gray-200 transition disabled:opacity-50"
    >
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#444"
        viewBox="0 0 24 24"
      >
        <path d="M9 22H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h4v13zm2-13.9V22h8.2c1.2 0 2.2-.8 2.4-2l1.4-7c.3-1.6-.9-3-2.4-3h-5.5l.7-3.4.1-.5c0-.8-.3-1.5-.8-2.1L14 2l-5 6.1z"/>
      </svg>

      {/* Text + count */}
      <span className="text-gray-700 font-medium">
        {loading ? "Liking..." : `Like (${likes})`}
      </span>
    </button>
  );
}
