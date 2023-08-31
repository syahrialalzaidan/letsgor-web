"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0E8A76] to-[#0ABF73] relative overflow-hidden z-0">
      <div className="flex flex-col w-full md:w-1/2 h-full justify-start pt-[30%] md:justify-center px-[7%] items-start text-white">
        <h1 className="font-bold text-5xl md:text-[3.4rem] leading-snug">
          Membantu Temukan Lapangan Impian.
        </h1>
        <p className="w-full md:w-3/4 text-base my-6">
          <span className="font-bold">LetsGOR</span> hadir untuk mempermudah
          pemesanan lapangan tanpa perlu menunggu jawaban dari pemilik lapangan.
        </p>
        <div
          className="cursor-pointer bg-white px-9 py-5 text-[#0E8A76] font-bold"
          onClick={() => router.push("/explore")}
        >
          Booking Lapangan
        </div>
      </div>
      <div className="absolute right-0 h-1/2 md:h-[120%] aspect-square md:top-[10%] -bottom-[15%] -z-10">
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
