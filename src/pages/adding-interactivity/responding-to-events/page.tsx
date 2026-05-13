function Button({
  onClick,
  children,
  className,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick() {
    alert(`正在播放 ${movieName}`);
  }

  return (
    <Button className="primary-btn mr-4" onClick={handlePlayClick}>
      播放 "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button className="primary-btn" onClick={() => alert("正在上传！")}>
      上传图片
    </Button>
  );
}

export function Toolbar() {
  return (
    <div>
      <PlayButton movieName="魔女宅急便" />
      <UploadButton />
    </div>
  );
}

function RespondingToEventsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">响应事件</h1>
      <hr className="my-8 text-gray-300 " />
      <Toolbar />
    </div>
  );
}

export default RespondingToEventsPage;
