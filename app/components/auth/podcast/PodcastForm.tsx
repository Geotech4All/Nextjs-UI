import {
  DragDropFile,
  FormInput,
  PageWaterLoader,
  PodcastFormButton,
  StaffDropDownList,
  TextArea
} from "@app/components";
import { StaffType } from "@utils/graphql/codegen/graphql";
import { useCreatePodcast } from "@utils/graphql/hooks/podcast";
import { useAppDispatch } from "@utils/store/hooks";
import { prependPodcast } from "@utils/store/slices/podcastListSlice";
import React from "react";

const PodcastForm: React.FC = () => {
  const [create, { loading, data }] = useCreatePodcast();
  const [podcastAudio, setPodcastAudio] = React.useState<File>();
  const [host, setHost] = React.useState<StaffType>();
  const dispatch = useAppDispatch();
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const audioRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const getPodcast = (podcast: File): void => {
    setPodcastAudio(podcast);
  };

  const getHost = (host: StaffType): void => {
    setHost(host);
  };

  const fileChangeHandler = (): void => {
    if (audioRef.current.files !== null && audioRef.current.files.length > 0) {
      setPodcastAudio(audioRef?.current?.files[0]);
    }
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    if (host !== undefined) {
      void create({
        variables: {
          description: descRef.current?.value,
          title: titleRef.current?.value,
          hostId: host.staffId ?? "",
          audio: podcastAudio
        }
      }).then((resp) => {
        if (resp.data?.podcast.podcast !== undefined) {
          dispatch(prependPodcast(resp.data?.podcast.podcast));
        }
      });
    }
  };

  if (loading) {
    return <PageWaterLoader />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-ui-pink-20/40 flex gap-2 flex-col p-3 relative rounded focus-within:shadow-lg"
    >
      <div className="flex flex-col p-1 md:flex-row w-full">
        <fieldset className="w-full">
          <FormInput ref={titleRef} title="Podcast title" name="title" label="Title" />
          <TextArea
            ref={descRef}
            name="description"
            rows={7}
            title="Descripe podcast, What's it about"
            label="Description"
          />
        </fieldset>
        <fieldset className="w-full">
          <StaffDropDownList getHost={getHost} />
        </fieldset>
      </div>
      <DragDropFile
        onChange={fileChangeHandler}
        hasFile={podcastAudio !== null && podcastAudio !== undefined}
        fileName={podcastAudio?.name}
        ref={audioRef}
        getFile={getPodcast}
        name="podcast"
        prompt="Drag and drop audio or"
      />
      <PodcastFormButton>Save</PodcastFormButton>
    </form>
  );
};

export default PodcastForm;
