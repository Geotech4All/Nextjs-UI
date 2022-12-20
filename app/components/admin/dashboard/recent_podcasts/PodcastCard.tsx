import { PodcastTypeEdge } from "@utils/graphql/codegen/graphql";
import { BsCalendar3 } from "react-icons/bs";
import React from "react";

interface PodcastCardProps {
  podcast: PodcastTypeEdge;
}
const PodcastCard: React.FC<PodcastCardProps> = (props) => {
  const { podcast } = props;
  const dateAdded = podcast.node?.dateAdded as string;
  const date = dateAdded.split("T")[0];
  console.log(podcast.node);
  return (
    <article
      className={`
      shadow-mid text-white font-semibold
      flex flex-col overflow-hidden
      max-w-sm md:min-w-[25rem]  aspect-video rounded-3xl`}
    >
      <div className="p-4 flex flex-1 justify-between bg-purple-500">
        <address className="bg-white/50 h-fit p-0.5 rounded not-italic px-2">
          <a href={`mailto:${podcast.node?.host.email ?? ""}`}>
            {podcast.node?.host.fullName ?? "Host"}
          </a>
        </address>
        <time className="flex gap-2 items-center h-fit" dateTime={podcast.node?.dateAdded}>
          <BsCalendar3 />
          {date}
        </time>
      </div>
      <div className="flex flex-col flex-[0.5] shadow-lg bg-purple-600 p-3 items-end w-full">
        <h2 className="overflow-hidden text-ellipsis font-semibold font-sans">
          {podcast.node?.title}
        </h2>
        <div>{podcast.node?.description}</div>
      </div>
    </article>
  );
};

export default PodcastCard;
