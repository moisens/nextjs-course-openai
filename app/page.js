import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-4 font-bold">Nextjs</h1>
      <Link href="/client" className="btn btn-accent">
        Get started
      </Link>
    </div>
  );
};
export default HomePage;
