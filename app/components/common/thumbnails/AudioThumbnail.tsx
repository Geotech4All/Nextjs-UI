import React from "react";
import { FaFileAudio } from "react-icons/fa";

interface AudioProps {
  name?: string;
}
const AudioThumbnail: React.FC<AudioProps> = (props) => {
  const { name } = props;
  return (
    <div>
      <FaFileAudio />
      <p>{name}</p>
    </div>
  );
};

export default AudioThumbnail;
