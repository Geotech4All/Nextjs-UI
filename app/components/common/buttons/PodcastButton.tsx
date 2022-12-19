import React from "react";

interface PodcastButtonProps {
  children?: React.ReactNode;
}

const PodcastFormButton: React.FC<PodcastButtonProps> = (props) => {
  const { children } = props;
  return (
    <button
      className={`
      flex self-end mr-3 justify-self-end
      p-1 px-5 transition-all items-center
      hover:bg-ui-pink-50 active:bg-ui-pink-50
      justify-center bg-ui-pink-40 rounded`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PodcastFormButton;
