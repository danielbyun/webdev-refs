import Link from "next/link";

const Index = () => (
  <div>
    <h1>hello</h1>
    {/* <a href="./about">about</a> */}
    <Link href="./about">
      <button>about</button>
    </Link>
    <Link href="./robots">
      <button>robots</button>
    </Link>
  </div>
);

export default Index;
