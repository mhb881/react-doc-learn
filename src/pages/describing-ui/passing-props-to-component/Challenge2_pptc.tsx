import type { Person } from "../../../types/types";

/*
在这个例子中，Avatar 接收一个数字 size prop，它决定了 <img> 的宽度和高度。在此示例中，size prop 设为 40。但是，如果你在新选项卡中打开图像，你会注意到图像本身更大（160 像素）。实际图像大小由你请求的缩略图大小决定。

更改 Avatar 组件，根据 size prop 请求最接近的图像尺寸。具体来说，如果 size 小于 90，则将 's'（“small”）而不是 'b'（“big”）传给 getImageUrl 函数。通过渲染不同 size prop 值的头像并在新选项卡中打开图像，来验证你的更改是否有效。
 */
function getImageUrl(person: Person, size: string) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({ person, size }: { person: Person; size: number }) {
  // 你还可以通过考虑 window.devicePixelRatio 来为高 DPI 屏幕显示更清晰的图像：
  const ratio = window.devicePixelRatio || 1;
  let imageSize = "s";
  if (size * ratio >= 90) {
    imageSize = "b";
  }
  console.log(size);

  // Tailwind 用 CSS height: auto 覆盖掉它
  return (
    <img
      className={`rounded-full aspect-square object-cover`}
      style={{ width: `${size}px`, height: `${size}px` }}
      src={getImageUrl(person, imageSize)}
      alt={person.name}
    />
  );
}

export function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <Avatar
        size={70}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <Avatar
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}

function Challenge2_pptc() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 2 个挑战 共 3 个挑战: 根据 props 调整图像大小
      </h1>
      <hr className="my-8 text-gray-300 " />
      <div className="flex flex-row gap-4 w-full">
        <Profile />
      </div>
    </div>
  );
}

export default Challenge2_pptc;
