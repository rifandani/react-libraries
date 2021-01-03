import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <p className="mb-5 font-bold text-2xl">Libraries List</p>

      <Link href="/react-mapbox-gl">
        <a className="italic hover:text-blue-500 ">react-mapbox-gl</a>
      </Link>
    </div>
  );
};

export default IndexPage;
