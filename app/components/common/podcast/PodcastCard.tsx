import React from "react";
import { bgColors } from "./podcastUtils";
import type { BgCollor } from "./podcastUtils";
import { PodcastTypeEdge } from "@utils/graphql/codegen/graphql";
import { BsCalendar3 } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@utils/store/hooks";
import { selectPlayer, setPlayer } from "@utils/store/slices/playerSlice";

interface PodcastCardProps {
  podcast: PodcastTypeEdge;
}
const PodcastCard: React.FC<PodcastCardProps> = (props) => {
  const { podcast } = props;
  const dateAdded = podcast.node?.dateAdded as string;
  const date = dateAdded.split("T")[0];
  const color = selectRandom<BgCollor>(bgColors);
  const podcastCardRef = React.useRef() as React.MutableRefObject<HTMLElement>;

  const dispatch = useAppDispatch();
  const player = useAppSelector(selectPlayer);

  const clickHanler = React.useCallback(() => {
    if (player.colorSet !== true) {
      dispatch(setPlayer({ color, colorSet: true }));
    }
    dispatch(setPlayer({ src: podcast.node?.audio ?? "", playing: true }));
  }, [podcastCardRef.current]);

  return (
    <article
      ref={podcastCardRef}
      onClick={clickHanler}
      className={`
      hover:scale-105 transition-all hover:shadow-md hover:shadow-black/50
      shadow-mid text-white font-semibold cursor-pointer
      flex flex-col overflow-hidden
      max-w-full w-full  aspect-video rounded-3xl`}
    >
      <div className={`p-4 flex flex-1 justify-between ${color.lighter}`}>
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
      <div className={`flex flex-col flex-[0.5] shadow-lg ${color.darker} p-3 items-end w-full`}>
        <h2 className="overflow-hidden text-ellipsis font-semibold font-sans">
          {podcast.node?.title}
        </h2>
        <div>{podcast.node?.description}</div>
      </div>
    </article>
  );
};

export default PodcastCard;

function selectRandom<T>(ofVal: T[]): T {
  const index = Math.floor(Math.random() * ofVal.length);
  const selected = ofVal[index];
  return selected;
}
