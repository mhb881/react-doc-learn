import { Fragment } from "react/jsx-runtime";

/*
下面这个示例展示了立花北枝一首著名的俳句，它的每一行都由 <p> 标签包裹。你需要在段落之间插入分隔符 <hr />，最终的结果大概像这样：
<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>
一首俳句通常只有三行，但是你的解答应当适用于任何行数。注意，<hr /> 元素只应该在 <p> 元素 之间 出现，而不是在开头或结尾。
（这是一个比较少见的可以把数组索引用作 key 的例子，因为诗句之间的顺序必然是固定的。）
 */
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p>{line}</p>
          {index !== poem.lines.length - 1 && <hr />}
        </Fragment>
      ))}
    </article>
  );
}

function Challenge4_rl() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 4 个挑战 共 4 个挑战: 带有分隔符的列表</h1>
      <hr className="my-8 text-gray-300 " />
      <Poem />
    </div>
  );
}

export default Challenge4_rl;

/*
第二种答案
可以写一个循环，在循环的过程中把 <hr /> 和 <p>...</p> 插入到输出的数组：
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];

  // 填充输出的数组
  poem.lines.forEach((line, i) => {
    output.push(
      <hr key={i + '-separator'} />
    );
    output.push(
      <p key={i + '-text'}>
        {line}
      </p>
    );
  });
  // 移除第一个 <hr />
  output.shift();

  return (
    <article>
      {output}
    </article>
  );
}
  
原本使用诗句顺序索引作为 key 的方法已经行不通了，因为现在数组里同时包含了分隔符和诗句。
但是，你可以用添加后缀的形式给它们赋予独一无二的 key 值，比如 key={i + '-text'} 这样。
 */
