import React from "react";

interface BgImageProps {
  src: string;
  alt?: string;
  children?: React.ReactNode;
}
const BgImage: React.FC<BgImageProps> = (props) => {
  const { src, alt, children } = props;
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="relative w-full h-full">
          <div className="bg-black/50 z-[10] absolute inset-0" />
          <img className="object-cover h-full w-screen absolute inset-x-0" src={src} alt={alt} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default BgImage;
