// 主内容页面组件
const MainContent = () => {
  return (
    <div className="p-6">
      <h1 className="mb-10">Welcome to React Learning</h1>
      <p className="mb-4">
        Select a topic from the sidebar to begin your training.
      </p>
      <p>
        This application follows React official documentation structure to help
        you learn React step by step.
      </p>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="mb-4">How to use this app:</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Select a topic from the sidebar</li>
          <li>Choose a challenge under that topic</li>
          <li>Implement the solution according to React best practices</li>
          <li>Test your implementation</li>
        </ol>
      </div>
    </div>
  );
};

export default MainContent;
