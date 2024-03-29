import Link from "next/link";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-[#F0FDF9] py-20 flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="md:text-[2.5rem] text-3xl text-primary font-semibold">
            Layanan Kami
          </h1>
          <p className="text-black md:text-lg my-2">
            LetsGOR hadir menjadi solusi bagi kamu
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-5 px-7 my-10">
          <ServiceCard service="LetsBook" />
          <ServiceCard service="LetsHealthy" />
          <ServiceCard service="LetsCommunity" />
        </div>
      </div>
    </div>
  );
};

export default Services;
