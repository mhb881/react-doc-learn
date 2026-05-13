function ManagingStatePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">状态管理</h1>
      <p className="mb-4">
        随着你的应用不断变大，更有意识的去关注应用状态如何组织，以及数据如何在组件之间流动会对你很有帮助。冗余或重复的状态往往是缺陷的根源。在本节中，你将学习如何组织好状态，如何保持状态更新逻辑的可维护性，以及如何跨组件共享状态。
      </p>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="mb-4">本章节：</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>如何将 UI 变更视为状态变更</li>
          <li>如何组织状态，避免冗余和重复</li>
          <li>如何使用“状态提升”在组件之间共享状态</li>
          <li>如何控制状态的保留或重置</li>
          <li>如何在函数中整合复杂的状态逻辑</li>
          <li>如何避免数据通过 prop 逐级透传</li>
          <li>如何随着应用的增长去扩展状态管理</li>
        </ol>
      </div>
    </div>
  );
}

export default ManagingStatePage;
