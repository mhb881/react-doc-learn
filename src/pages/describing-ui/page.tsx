const DescribingUiPage = () => {
  return (
    <div className="p-6">
      <h1 className="mb-10">描述 UI</h1>
      <p className="mb-4">
        React 是一个用于构建用户界面（UI）的 JavaScript
        库，用户界面由按钮、文本和图像等小单元内容构建而成。React
        帮助你把它们组合成可重用、可嵌套的 组件。从 web
        端网站到移动端应用，屏幕上的所有内容都可以被分解成组件。在本章节中，你将学习如何创建、定制以及有条件地显示
        React 组件。
      </p>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="mb-4">本章节：</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>How to create and nest components</li>
          <li>How to add markup and styles</li>
          <li>How to display data</li>
          <li>How to render conditions and lists</li>
          <li>How to respond to events and update the screen</li>
          <li> How to share data between components</li>
        </ol>
      </div>
    </div>
  );
};

export default DescribingUiPage;
