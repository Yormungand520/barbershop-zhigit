interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="gold-line mx-auto mb-6" />
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
