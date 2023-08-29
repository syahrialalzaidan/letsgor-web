import Boxgor from "@/app/explore/component/Boxgor";
import Link from "next/link";

const Recommend = () => {
  const data = [
    {
      name: "Pasaga",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/basket.svg",
    },
    {
      name: "Saraga",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/saraga.svg",
    },
    {
      name: "Taman Sport",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/tamansport.svg",
    },
    {
      name: "Gor Cisitu",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/gor cisitu.svg",
    },
    {
      name: "Gor PDAM",
      address: "Jl. Plesiran",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/gor pdam.svg",
    },
    {
      name: "OBC Sport Center",
      address: "Jl. Cimbel",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/obc.svg",
    },
  ];
  return (
    <div className="bg-[#F0FDF9] w-full min-h-screen">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-semibold text-primary text-center">
          Rekomendasi Lapangan Untukmu
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-10 mt-8">
          {data.map((place, index) => (
            <Boxgor
              key={index}
              name={place.name}
              address={place.address}
              distance={place.distance}
              rating={place.rating}
              price={place.price}
              image={place.image}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={"/explore"}>
            <button className="bg-primary font-semibold text-white px-6 py-3 rounded-md">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
