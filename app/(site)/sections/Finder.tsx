import SearchBar from "../components/SearchBar";

const Finder = () => {
  return (
    <div className="w-full h-[70vh] bg-[url('/landing/Lapangan.jpg')] bg-no-repeat bg-cover">
      <div className="container mx-auto px-7 text-white text-center flex flex-col justify-center items-center h-full">
        <h1 className="font-semibold text-4xl">
          Temukan Partner dan Lapangan Pilihanmu
        </h1>
        <p>
          Sekarang Anda dapat menemukan partner olahraga yang cocok dan lapangan
          yang sesuai untukmu
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Finder;
