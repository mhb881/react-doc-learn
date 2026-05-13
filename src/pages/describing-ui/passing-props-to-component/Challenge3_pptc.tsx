/*
从下面的代码中提取一个 Card 组件，并使用 children prop 将不同的 JSX 传递给它：
 */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border w-fit p-6">
      <div className="card-content text-center space-y-4 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function Profile() {
  return (
    <div className="space-y-4">
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}

function Challenge3_pptc() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 3 个挑战 共 3 个挑战: 在 children prop 中传递 JSX 代码
      </h1>
      <hr className="my-8 text-gray-300 " />
      <Profile />
    </div>
  );
}

export default Challenge3_pptc;
