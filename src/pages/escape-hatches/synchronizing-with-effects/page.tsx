import { useState, useRef, useEffect } from "react";
import ChatRoom from "./ChatRoom";

function VideoPlayer({ src, isPlaying }: { src: string; isPlaying: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("调用 video.play()");
      ref.current?.play();
    } else {
      console.log("调用 video.pause()");
      ref.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={ref}
      src={src}
      className="rounded-2xl w-100 "
      loop
      playsInline
    />
  );
}

export function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col gap-2 items-start">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button className="primary-btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "暂停" : "播放"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}

function SynchronizingWithEffectsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">使用 Effect 进行同步</h1>
      <hr className="my-8 text-gray-300 " />
      <h2>示例：使用 useEffect 同步视频播放</h2>
      <App />
      <hr className="my-8 text-gray-300 " />
      <h2>示例：在显示时连接聊天室</h2>
      <ChatRoom />
    </div>
  );
}

export default SynchronizingWithEffectsPage;
