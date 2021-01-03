import Link from 'next/link';

const Back = () => {
  return (
    <div className="absolute t-0 l-0 p-5 border border-red-500">
      <Link href="/">
        <a className="italic text-gray-900 hover:text-red-300">Home</a>
      </Link>
    </div>
  );
};

export default Back;
