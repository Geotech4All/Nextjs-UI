import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@utils/store/hooks";
import { selectPlayer } from "@utils/store/slices/playerSlice";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const MusicPlayer = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [playing, setPlaying] = React.useState(false);
  const player = useAppSelector(selectPlayer);
  const audioRef = React.useRef() as React.MutableRefObject<HTMLAudioElement>;
  const [audio, setAudio] = React.useState({
    duration: "0:00"
  });

  function audioPlayHandler(): void {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      void audioRef.current.play();
      setPlaying(true);
    }
  }

  React.useEffect(() => {
    console.log(audioRef.current);
    if (audioRef.current.duration > 0) {
      const durr = (audioRef.current.duration / 60).toFixed(2);
      const duration = durr.split(".").join(":");
      setAudio((curr) => ({ ...curr, duration }));
    }
  }, [audioRef.current]);

  return (
    <motion.div
      initial={{ bottom: -100 }}
      animate={{ bottom: 5, transition: { duration: 0.3 } }}
      className={`${
        player.color?.lighter ?? ""
      } p-3 fixed bottom-2 left-1/2 shadow-md shadow-black/80
      flex items-center gap-4 transition-all
      -translate-x-1/2 w-[97vw] sm:max-w-[90vw] rounded-2xl`}
      ref={ref}
    >
      <button
        onClick={audioPlayHandler}
        className={`
        text-5xl text-white ${player.color?.darker ?? ""}
        aspect-square rounded-full flex items-center justify-center shadow-md`}
      >
        {playing ? <BsFillPauseFill /> : <BsFillPlayFill />}
      </button>
      <div>
        <time>{audio.duration}</time>
      </div>
      <audio className="hiden" ref={audioRef} src="/music/Toxic.mp3" />
    </motion.div>
  );
});

MusicPlayer.displayName = "MusicPlayer";

export default MusicPlayer;
