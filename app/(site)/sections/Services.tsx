import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="w-full h-screen bg-[#F0FDF9] pt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-[2.5rem] text-primary font-semibold">
            Layanan Kami
          </h1>
          <p className="text-black text-lg my-2">
            LetsGOR hadir menjadi solusi bagi kamu
          </p>
        </div>
        <div className="flex flex-wrap justify-around px-7 my-10">
          <ServiceCard service="LetsBook" />
          <ServiceCard service="LetsHealthy" />
          <ServiceCard service="LetsCommunity" />
        </div>
      </div>
    </div>
  );
};

export default Services;
