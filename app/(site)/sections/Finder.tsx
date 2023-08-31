import SearchBar from "../components/SearchBar";

const Finder = () => {
  return (
    <div className="w-full min-h-[70vh] bg-[url('/landing/Lapangan.jpg')] bg-no-repeat bg-cover bg-top py-10">
      <div className="container mx-auto px-7 text-white text-center flex flex-col justify-center items-center h-full">
        <h1 className="font-semibold text-3xl md:text-4xl">
          Temukan Partner dan Lapangan Pilihanmu
        </h1>
        <p className="mt-3">
          Sekarang Anda dapat menemukan partner olahraga yang cocok dan lapangan
          yang sesuai untukmu
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Finder;
