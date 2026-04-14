type TProps = {
  heading: string;
  content?: string | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-14 text-center">
      <div className="text-primary/80 mb-3 text-xs font-semibold uppercase tracking-[0.25em]">
        Section
      </div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {heading}
      </h2>
      {content && (
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base">
          {content}
        </p>
      )}
    </div>
  );
};
