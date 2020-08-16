import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Robots = ({ robots }) => {
  return (
    <div>
      <h1>robots</h1>
      <Link href="/">
        <button>Go back home</button>
      </Link>
      <div>
        {robots.map((robot) => (
          <li key={robot.id}>
            <Link href={`robots/${robot.id}`}>
              <a>{robot.name}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

Robots.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
  return {
    robots: data,
  };
};

export default Robots;
