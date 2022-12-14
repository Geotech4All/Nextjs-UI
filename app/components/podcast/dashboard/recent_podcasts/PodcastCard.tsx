import { PodcastTypeEdge } from "@utils/graphql/codegen/graphql";
import React from "react";

interface PodcastCardProps {
  podcast: PodcastTypeEdge;
}
const PodcastCard: React.FC<PodcastCardProps> = (props) => {
  const { podcast } = props;
  const dateAdded = podcast.node?.dateAdded as string;
  const date = dateAdded.split("T")[0];
  console.log(podcast.node?.host);
  return (
    <article className="shadow-mid p-4 max-w-sm aspect-video rounded-3xl">
      <div>
        <address>
          <a href={`mailto:${podcast.node?.host.email ?? ""}`}>
            {podcast.node?.host.fullName ?? "Host"}
          </a>
        </address>
      </div>
      <div className="flex flex-col items-end w-full">
        <h2 className="overflow-hidden text-ellipsis font-semibold font-sans">
          {podcast.node?.title}
        </h2>
        <time className="italic" dateTime={podcast.node?.dateAdded}>
          {date}
        </time>
      </div>
    </article>
  );
};

export default PodcastCard;
