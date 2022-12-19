import { DragDropFile, FormInput, PodcastFormButton, StaffDropDownList, TextArea } from "@app/components";
import React from "react";

const PodcastForm: React.FC = () => {
  const [podcast, setPodcast] = React.useState<File>();
  const getPodcast = (podcast: File): void => {
    setPodcast(podcast);
  };

  console.log(podcast);
  return (
    <form className="bg-ui-pink-20/40 relative rounded focus-within:shadow-lg">
      <div className="flex flex-col p-1 md:flex-row w-full">
        <fieldset className="w-full">
          <FormInput title="Podcast title" name="title" label="Title" />
          <TextArea
            name="description"
            rows={7}
            title="Descripe podcast, What's it about"
            label="Description"
          />
        </fieldset>
        <fieldset className="w-full">
          <StaffDropDownList />
        </fieldset>
      </div>
      <DragDropFile getFile={getPodcast} name="podcast" prompt="Drag and drop audio or" />
      <PodcastFormButton>Save</PodcastFormButton>
    </form>
  );
};

export default PodcastForm;
