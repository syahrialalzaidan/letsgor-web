import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0E8A76] to-[#0ABF73] relative overflow-hidden z-0">
      <div className="flex flex-col w-1/2 h-full justify-center px-[3%] items-start text-white">
        <h1 className="font-bold text-[3.4rem] leading-snug">
          Membantu Temukan Lapangan Impian.
        </h1>
        <p className="w-3/4 text-base my-6">
          <span className="font-bold">LetsGOR</span> hadir untuk mempermudah
          pemesanan lapangan tanpa perlu menunggu jawaban dari pemilik lapangan.
        </p>
        <div className="bg-white px-9 py-5 text-[#0E8A76] font-bold">
          Booking Lapangan
        </div>
      </div>
      <div className="absolute right-0 h-[120%] aspect-square top-[10%] -z-10">
        <Image
          src="/landing/Stadium.svg"
          alt="Stadium"
          fill={true}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 -z-20">
        <Image
          src="/landing/Dot.svg"
          alt="Stadium"
          fill={true}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
