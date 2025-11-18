import Image from "next/image";

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl =
        value?.asset?.url || value?.asset?._ref || "/default-image.jpg";

      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto"
          />
        </div>
      );
    },
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold text-[#102f35] my-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-[#411b3f] my-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold text-[#102f35] my-3">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-800 leading-relaxed my-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#102f35] pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 text-gray-800 my-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 text-gray-800 my-4">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => <li className="my-1">{children}</li>,
    number: ({ children }: any) => <li className="my-1">{children}</li>,
  },
};
