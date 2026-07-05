interface BlogComment {
  name: string;
  comment: string;
  date: string;
}

export default function BlogComments({ comments }: { comments: BlogComment[] }) {
  if (!comments.length) return null;

  return (
    <section className="mb-16 border-t pt-10">
      <h2 className="mb-6 text-2xl font-bold text-[#102f35]">Reader comments</h2>
      <div className="space-y-6">
        {comments.map((item, index) => (
          <article
            key={`${item.name}-${item.date}-${index}`}
            className="rounded-xl border border-gray-100 bg-gray-50 p-5"
          >
            <p className="mb-2 font-semibold text-[#102f35]">{item.name}</p>
            <p className="mb-3 text-gray-700 leading-relaxed">{item.comment}</p>
            {item.date && (
              <p className="text-xs text-gray-500">
                {new Date(item.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
