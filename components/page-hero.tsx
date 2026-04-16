type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="space-y-3 py-8">
      <p className="section-title">{label}</p>
      <h1 className="text-3xl font-semibold leading-tight">{title}</h1>
      <p className="max-w-prose text-sm leading-7 text-point">{description}</p>
    </section>
  );
}
