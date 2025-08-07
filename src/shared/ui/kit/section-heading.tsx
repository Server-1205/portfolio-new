import { ReactNode } from "react";

type SectionHeadingProps = {
  supTitle: string;
  title: ReactNode;
  subTitle: string;
};

export const SectionHeading = ({
  supTitle,
  title,
  subTitle,
}: SectionHeadingProps) => {
  return (
    <div className="text-center mb-16 scroll-reveal">
      <div className="code-font text-accent mb-4">{supTitle}</div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        {title}
      </h2>
      <p className="text-xl text-white/60 max-w-3xl mx-auto">{subTitle}</p>
    </div>
  );
};
