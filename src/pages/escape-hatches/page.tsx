function EscapeHatchesPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">脱围机制（Escape Hatches）</h1>
      <p className="mb-4">
        有些组件可能需要控制和同步 React 之外的系统。例如，你可能需要使用浏览器
        API 聚焦输入框，或者在没有 React
        的情况下实现视频播放器，或者连接并监听远程服务器的消息。在本章中，你将学习到一些脱围机制，让你可以“走出”
        React 并连接到外部系统。大多数应用逻辑和数据流不应该依赖这些功能。
      </p>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="mb-4">本章节：</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>在不重新渲染的情况下“记住”信息</li>
          <li>访问 React 管理的 DOM 元素</li>
          <li>将组件与外部系统同步</li>
          <li>从组件中删除不必要的 Effect</li>
          <li>Effect 的生命周期与组件的生命周期有何不同</li>
          <li>防止某些值重新触发 Effect</li>
          <li>减少 Effect 重新执行的频率</li>
          <li>在组件之间共享逻辑</li>
        </ol>
      </div>
    </div>
  );
}

export default EscapeHatchesPage;
