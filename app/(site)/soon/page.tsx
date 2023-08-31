import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-5xl text-white">Coming Soon!</h1>
        <Link href="/">
          <div className="px-7 py-2 cursor-pointer bg-white rounded-md text-primary font-semibold text-2xl hover:scale-[102%] transition">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
