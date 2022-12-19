import React from "react";

interface PodcastButtonProps {
  value?: string;
}

const PodcastFormButton: React.FC<PodcastButtonProps> = (props) => {
  const { value } = props;
  return <button value={value} type="submit" />;
};

export default PodcastFormButton;
