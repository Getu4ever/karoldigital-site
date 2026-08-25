import Image from "next/image";

type ToolPageHeroProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ToolPageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  imageSrc,
  imageAlt,
}: ToolPageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-center justify-center pt-24 pb-14 text-center text-white md:min-h-[58vh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover brightness-[0.45]"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold-muted">
          {eyebrow}
        </p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          {titleAccent ? (
            <>
              <span className="text-white">{title} </span>
              <span className="text-brand-gold-muted">{titleAccent}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-100 md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
