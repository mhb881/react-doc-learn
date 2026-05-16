/*
在此示例中，按钮切换 state 变量以在播放和暂停状态之间切换。 
然而，为了实际播放或暂停视频，切换状态是不够的。
你还需要在 <video> 的 DOM 元素上调用 play() 和 pause()。 向它添加一个 ref，并使按钮起作用。

对于额外的挑战，即使用户右键单击视频并使用内置浏览器媒体控件播放，也要使“播放”按钮与视频是否正在播放同步。 你可能需要在视频中监听 onPlay 和 onPause 才能做到这一点。
 */
import { useState, useRef } from "react";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    // videoRef.current?.[nextIsPlaying ? "play" : "pause"]();
    if (nextIsPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }

  function handleOnPlay() {
    setIsPlaying(true);
  }

  function handleOnPause() {
    setIsPlaying(false);
  }

  return (
    <>
      <button className="primary-btn mb-2" onClick={handleClick}>
        {isPlaying ? "暂停" : "播放"}
      </button>
      <video
        ref={videoRef}
        width="250"
        onPlay={handleOnPlay}
        onPause={handleOnPause}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

function Challenge1_mtdwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 4 个挑战: 播放和暂停视频</h1>
      <hr className="my-8 text-gray-300 " />
      <VideoPlayer />
    </div>
  );
}

export default Challenge1_mtdwr;
