"use client";

import { useState } from "react";

export default function LikeButton({ slug, initialLikes }: { slug: string; initialLikes: number }) {
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
      onClick={handleLike}
      disabled={loading}
      className="mt-3 bg-[#102f35] text-white px-4 py-2 rounded-lg hover:bg-[#0d262b] transition disabled:opacity-50"
    >
      ❤️ {loading ? "Liking..." : `Like (${likes})`}
    </button>
  );
}
