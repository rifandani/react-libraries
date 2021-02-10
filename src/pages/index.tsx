import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <p className="mb-5 text-2xl font-bold">Libraries List</p>

      <Link href="/react-mapbox-gl">
        <a className="italic hover:text-blue-500 ">react-mapbox-gl</a>
      </Link>

      <Link href="/react-leaflet">
        <a className="italic hover:text-blue-500 ">react-leaflet</a>
      </Link>

      <Link href="/next-auth">
        <a className="italic hover:text-blue-500 ">next-auth</a>
      </Link>
    </div>
  );
};

export default IndexPage;
