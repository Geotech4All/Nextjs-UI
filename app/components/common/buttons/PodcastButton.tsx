import React from "react";

interface PodcastButtonProps {
  children?: React.ReactNode;
}

const PodcastFormButton: React.FC<PodcastButtonProps> = (props) => {
  const { children } = props;
  return (
    <button className="flex p-1 px-4 items-center justify-center bg-ui-pink-40 rounded" type="submit">
      {children}
    </button>
  );
};

export default PodcastFormButton;
