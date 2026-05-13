const AddingInteractivityPage = () => {
  return (
    <div className="p-6">
      <h1 className="mb-10">描述 UI</h1>
      <p className="mb-4">
        界面上的控件会根据用户的输入而更新。例如，点击按钮切换轮播图的展示。在
        React
        中，随时间变化的数据被称为状态（state）。你可以向任何组件添加状态，并按需进行更新。在本章节中，你将学习如何编写处理交互的组件，更新它们的状态，并根据时间变化显示不同的效果。
      </p>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="mb-4">本章节：</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>如何处理用户发起的事件</li>
          <li>如何用状态使组件“记住”信息</li>
          <li>React 是如何分两个阶段更新 UI 的</li>
          <li>为什么状态在你改变后没有立即更新</li>
          <li>如何排队进行多个状态的更新</li>
          <li>如何更新状态中的对象</li>
          <li>如何更新状态中的数组</li>
        </ol>
      </div>
    </div>
  );
};

export default AddingInteractivityPage;
