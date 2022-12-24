import { useAppSelector } from "@utils/store/hooks";
import { selectPlayer } from "@utils/store/slices/playerSlice";
import React from "react";

const MusicPlayer = React.forwardRef<HTMLDivElement>((props, ref) => {
  const player = useAppSelector(selectPlayer);
  return (
    <div className={`${player.color?.lighter ?? ""} p-5 fixed bottom-0 w-screen`} ref={ref}>
      <audio src="/music/Toxic.mp3" controls />
    </div>
  );
});

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;
