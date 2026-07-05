import Image from "next/image";
import type { ReactNode } from "react";

export const PortableTextComponents = {
  types: {
    image: ({ value }: { value?: { asset?: { url?: string }; alt?: string } }) => {
      const imageUrl = value?.asset?.url;
      if (!imageUrl) return null;

      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={800}
            height={500}
            className="h-auto w-full rounded-lg"
          />
        </div>
      );
    },
    table: ({ value }: { value?: { rows?: { cells?: string[] }[] } }) => {
      const rows = value?.rows || [];
      if (!rows.length) return null;

      const [head, ...body] = rows;

      return (
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200">
            {head?.cells?.length ? (
              <thead className="bg-gray-50">
                <tr>
                  {head.cells.map((cell, index) => (
                    <th
                      key={index}
                      className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-[#102f35]"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {(head?.cells?.length ? body : rows).map((row, rowIndex) => (
                <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                  {(row.cells || []).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-200 px-4 py-3 text-sm text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
    customHtml: ({ value }: { value?: { html?: string } }) => {
      if (!value?.html) return null;

      return (
        <div
          className="my-6"
          dangerouslySetInnerHTML={{ __html: value.html }}
        />
      );
    },
  },

  block: {
    h1: ({ children }: { children?: ReactNode }) => (
      <h2 className="my-6 text-3xl font-bold text-[#102f35] md:text-4xl">{children}</h2>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="my-4 text-2xl font-semibold text-[#411b3f] md:text-3xl">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="my-3 text-xl font-semibold text-[#102f35] md:text-2xl">{children}</h3>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="my-4 leading-relaxed text-gray-800">{children}</p>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="my-4 border-l-4 border-[#102f35] pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="my-4 ml-6 list-disc text-gray-800">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="my-4 ml-6 list-decimal text-gray-800">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => <li className="my-1">{children}</li>,
    number: ({ children }: { children?: ReactNode }) => <li className="my-1">{children}</li>,
  },
};
