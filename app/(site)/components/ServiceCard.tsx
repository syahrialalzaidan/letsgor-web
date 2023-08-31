import {
  BsFillCalendarWeekFill,
  BsFillHeartPulseFill,
  BsFillPeopleFill,
} from "react-icons/bs";

const ServiceCard = ({ service }: { service: string }) => {
  const getIcon = () => {
    if (service === "LetsBook") {
      return <BsFillCalendarWeekFill size={38}/>;
    } else if (service === "LetsHealthy") {
      return <BsFillHeartPulseFill size={38}/>;
    } else {
      return <BsFillPeopleFill size={38}/>;
    }
  };

  const getDesc = () => {
    if (service === "LetsBook") {
      return "Memesan lapangan dengan cepat tanpa perlu menunggu dan mencari kontak pemilik lapangan";
    } else if (service === "LetsHealthy") {
      return "Mempertemukan kedua belah pihak yang sama-sama membutuhkan partner berolahraga";
    } else {
      return "Pertemukan dirimu dengan komunitaspecinta olahraga yang sama sepertimu";
    }
  };
  return (
    <div className="bg-white shadow-lg w-full lg:w-[30%] cursor-pointer text-primary flex flex-col justify-center items-center py-14 px-10 gap-2 text-center rounded-lg group hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition">
      <h1 className="font-semibold text-[1.7rem]">{service}</h1>
      <div className="text-white bg-primary p-4 rounded-full flex justify-center my-2 group-hover:bg-white group-hover:text-primary transition">
        {getIcon()}
      </div>
      <p className="text-sm">{getDesc()}</p>
    </div>
  );
};

export default ServiceCard;
