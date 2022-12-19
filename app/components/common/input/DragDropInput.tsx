import React from "react";
import { FaRegFileAudio } from "react-icons/fa";

interface DragDropFileProps {
  prompt?: string;
  name: string;
  getFile: (file: File) => void;
  hasFile: boolean;
  fileName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const DragDropFile = React.forwardRef<HTMLInputElement, DragDropFileProps>((props, ref) => {
  const [dragActive, setDragActive] = React.useState(false);
  const { name, prompt, getFile, hasFile, fileName, onChange } = props;

  const handleDrop: React.DragEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    if (event.dataTransfer.files?.[0] !== null) {
      const file = event.dataTransfer.files[0];
      getFile(file);
    }
  };
  const handleDrag: React.DragEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };
  return (
    <div className="relative w-full">
      {dragActive && (
        <div
          className="absolute rounded-md inset-0"
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
      {hasFile ? (
        <div className="border gap-2 rounded-md flex flex-col items-center p-3">
          <div className="text-[4rem]">
            <FaRegFileAudio />
          </div>
          <p>{fileName}</p>
        </div>
      ) : (
        <div onDragEnter={handleDrag} className="w-full p-2 px-3">
          <input
            onChange={onChange}
            ref={ref}
            onDrop={handleDrop}
            className="hidden"
            id={name}
            type="file"
            accept="audio/*"
          />
          <label
            className={`
              ${dragActive ? "border-ui-pink-50" : "border-black/10"}
              border-2 flex rounded-md items-center
              transition-all bg-ui-pink-20/60 w-full
              justify-center p-4 border-dashed`}
            htmlFor={name}
          >
            <div className="w-full text-black/60 flex items-center justify-center flex-col">
              <p>{prompt}</p>
              <label
                htmlFor={name}
                className="hover:underline transition-all cursor-pointer text-lg"
              >
                Upload File
              </label>
            </div>
          </label>
        </div>
      )}
    </div>
  );
});

DragDropFile.displayName = "DragDropFile";

export default DragDropFile;
