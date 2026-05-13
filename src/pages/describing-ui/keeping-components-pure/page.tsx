function Cup({ guest }: { guest: number }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

function KeepingComponetsPurePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">保持组件纯粹</h1>
      <hr className="my-8 text-gray-300 " />
      <TeaSet />
    </div>
  );
}

export default KeepingComponetsPurePage;
