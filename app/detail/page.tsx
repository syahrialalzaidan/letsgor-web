"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

import { HiOutlineLocationMarker, HiStar, HiPhone } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuParkingCircle } from "react-icons/lu";
import { PiToilet } from "react-icons/pi";
import { MdOutlineMosque } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const Page = () => {
  const data = [
    "/lapangan/lapangan_1.jpg",
    "/lapangan/lapangan_2.jpg",
    "/lapangan/lapangan_3.jpg",
  ];

  const SwiperSlideElement = ({ src }: { src: string }) => {
    return (
      <SwiperSlide>
        <div className="w-full aspect-[6/4] md:aspect-[6/2] relative">
          <Image
            src={src}
            alt="atas"
            fill={true}
            className="object-cover w-full h-full"
          />
        </div>
      </SwiperSlide>
    );
  };

  const ReviewElement = () => {
    return (
      <div className="flex w-full gap-5 my-3 items-center">
        <div className="w-[20%] max-w-[5rem] aspect-square bg-primary rounded-full overflow-hidden relative">
          <Image src="/lapangan/komuk.jpg" fill={true} className="object-cover w-full h-full blur-md hover:blur-0 transition" alt="komuk"/>
        </div>
        <div>
          <div className="flex gap-3">
            <h1 className="font-medium text-lg">Gijax</h1>
            <span className="text-gray-400 font-normal">12 Juni 2023</span>
          </div>
          <div className="flex">
            <HiStar size={24} className="text-primary" />
            <HiStar size={24} className="text-primary" />
            <HiStar size={24} className="text-primary" />
            <HiStar size={24} className="text-primary" />
            <HiStar size={24} className="text-primary" />
          </div>
          <p className="text-sm md:text-base">Lapangannya bagus banget dan rapi. Aku senang deh</p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full bg-[#F0FDF9]">
      <div className="bg-[url('/payment/navbar-bg.svg')] h-20 bg-cover"></div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => SwiperSlideElement({ src: item }))}
      </Swiper>
      <div className="container px-[7%] mx-auto mb-14">
        <div>
          <div className="flex gap-5 mb-4 mt-8">
            <h1 className="font-semibold text-3xl">GOR Cisitu 55</h1>
            <div className="flex items-center">
              <div className="text-primary border-primary border-2 inline-block py-1 px-3 text-sm rounded-lg">
                Badminton
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 text-lg">
            <div className="flex gap-3">
              <HiOutlineLocationMarker size={24} className="text-primary" />
              <p>Jl. Cisitu Indah, No. 55, Coblong</p>
            </div>
            <div className="flex gap-3">
              <HiStar size={24} className="text-primary" />
              <p>
                5,0 / <span className="text-gray-400">5,0 (300 reviews)</span>
              </p>
            </div>
            <div className="flex gap-3">
              <HiPhone size={24} className="text-primary" />
              <p>+6281234567890</p>
            </div>
            <div className="flex gap-3">
              <AiOutlineCalendar size={24} className="text-primary" />
              <div className="flex flex-col">
                <p>Monday - Friday : 08:00 - 21:00</p>
                <p>Saturday - Sunday : 08:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-500/40 border-t-2 my-10" />
        <div>
          <h1 className="font-semibold text-2xl">Facilites</h1>
          <div className="flex text-lg gap-10 my-6 flex-wrap">
            <div className="flex text-primary font-semibold flex-col justify-center items-center">
              <LuParkingCircle size={64} className="h-20" />
              <p>Parking</p>
            </div>
            <div className="flex text-primary font-semibold flex-col justify-center items-center">
              <PiToilet size={64} className="h-20" />
              <p>Toilet</p>
            </div>
            <div className="flex text-primary font-semibold flex-col justify-center items-center">
              <AiOutlineShopping size={64} className="h-20" />
              <p>Pro Shop</p>
            </div>
            <div className="flex text-primary font-semibold flex-col justify-center items-center">
              <MdOutlineMosque size={64} className="h-20" />
              <p>Musholla</p>
            </div>
          </div>
        </div>
        <div className="border-gray-500/40 border-t-2 my-10" />
        <div>
          <h1 className="font-semibold text-2xl">
            Refund and Reschedule Policy
          </h1>
          <p className="text-lg my-2">
            Free refund on requests made 1 day before booking date <br />
            Free reschedule on requests made 1 day before booking date
          </p>
        </div>
        <div className="border-gray-500/40 border-t-2 my-10" />
        <div>
          <div className="flex items-center gap-5">
            <h1 className="font-semibold text-2xl">Location</h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.50114929393!2d107.6131694!3d-6.8755891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c79dfa6f6f%3A0x9d5e000c0598feb3!2sGor%20Cisitu%2055%20Bulutangkis%2C%20Dago!5e0!3m2!1sen!2sid!4v1693396808002!5m2!1sen!2sid"
            className="w-full aspect-[6/2] my-3"
            loading="lazy"
          ></iframe>
        </div>
        <div className="border-gray-500/40 border-t-2 my-10" />
        <div>
          <div className="flex flex-col md:flex-row items-start  md:items-center gap-5">
            <h1 className="font-semibold text-2xl">Reviews</h1>
            <div className="flex items-center gap-2 text-lg">
              <p>5.0</p>
              <div className="flex items-center">
                <HiStar size={24} className="text-primary" />
                <HiStar size={24} className="text-primary" />
                <HiStar size={24} className="text-primary" />
                <HiStar size={24} className="text-primary" />
                <HiStar size={24} className="text-primary" />
              </div>
              <p>(300)</p>
            </div>
          </div>
          <div className="flex flex-col my-4 gap-2">
            <ReviewElement />
            <ReviewElement />
            <ReviewElement />
          </div>
          <p className="text-primary font-medium text-xl">Read all reviews</p>
        </div>
        <div className="bg-gradient-to-r from-primary to-secondary to-[150%] w-full py-3 px-[5%] gap-5 rounded-lg mt-10 flex flex-col md:flex-row items-center justify-between text-white">
          <div>
            <h1 className="font-semibold text-xl md:text-2xl">Harga mulai dari</h1>
            <p className="font-normal text-lg md:text-2xl">
              Rp 70.000
              <span className="font-light text-white/70">/hour/field</span>
            </p>
          </div>
          <Link href="/lapangan">
            <div className="py-3 bg-white text-primary font-semibold px-8 text-xl cursor-pointer">
              BOOK
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
