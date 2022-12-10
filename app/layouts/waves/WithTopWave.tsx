import { TopWave } from "@app/components";
import React from "react";

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const TopWaveLayout: React.FC<LayoutProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <section
      className="relative min-w-[100vw] flex flex-col items-center justify-center min-h-screen"
      {...rest}
    >
      <TopWave />
      {children}
    </section>
  );
};

export default TopWaveLayout;
