import Link from "next/link";
import Image from "../components/Image";

const About = () => {
  return (
    <div>
      <Link href="/">
        <button>back</button>
      </Link>
      <p
        style={{
          color: "red",
        }}
      >
        About Me
      </p>

      <Image />
    </div>
  );
};

export default About;
