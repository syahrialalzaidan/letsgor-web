import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineLeft,
  AiFillStar,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RiCoupon4Line } from "react-icons/ri";

export default function Payment() {
  return (
    <div>
      <div className="bg-[url('/payment/navbar-bg.svg')] h-20 bg-cover mb-10"></div>
      <div className="px-12 lg:px-24">
        <div className="flex gap-4 items-center">
          <Link href="/lapangan">
            <AiOutlineLeft className="text-2xl lg:text-5xl font-bold cursor-pointer" />
          </Link>
          <p className="text-lg lg:text-2xl font-bold">Booking Confirmation</p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white shadow-xl border border-gray-300 gap-8 rounded-lg my-11">
          <Image
            src="/payment/basket-payment.svg"
            width={505}
            height={312}
            alt="basket"
          />
          <div className="lg:py-8 py-1 px-4 flex flex-col gap-6">
            <div className="flex gap-8">
              <h1 className="text-2xl font-semibold">GOR Cisitu 55</h1>
              <div className="py-1 px-4 border border-[#00985B] text-[#00985B] w-32 flex justify-center items-center rounded-3xl">
                Badminton
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <IoLocationOutline className="text-[#0E8A76] text-xl" />
              <p className="text-lg">Jl. Cisitu Indah, No. 55, Coblong</p>
            </div>

            <div className="flex gap-2 items-center">
              <AiFillStar className="text-[#FED901] text-xl" />
              <p className="text-lg">
                5,0 <span className="text-gray-500">/ 5,0 (300 reviews)</span>
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <BsTelephoneFill className="text-black text-xl" />
              <p className="text-lg">+6281234567890</p>
            </div>

            <div className="flex gap-6 lg:gap-2 items-center">
              <BsCalendarDateFill className="text-[#00985B] text-xl" />
              <div className="flex flex-col">
                <p className="text-lg">Monday - Friday : 08:00 - 21:00</p>
                <p className="text-lg">Saturday - Sunday : 08:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-xl font-bold mb-3">Booking Details</h1>
        <div className="text-lg lg:text-xl mb-2 flex flex-col lg:flex-row justify-between">
          <p>Field Type</p>
          <p className="font-semibold">Lapangan 1, Lapangan 2</p>
        </div>

        <div className="text-lg lg:text-xl mb-2 flex flex-col lg:flex-row justify-between">
          <p>Date</p>
          <p className="font-semibold">07 June 2023</p>
        </div>

        <div className="text-lg lg:text-xl mb-14 flex flex-col lg:flex-row justify-between">
          <p>Time</p>
          <p className="font-semibold">14:00 - 16:00, 14:00 - 16:00</p>
        </div>

        <h1 className="text-xl font-bold mb-3">Promo</h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center lgjustify-between px-3 lg:px-6 py-5 rounded-md border border-gray-200 mb-16 shadow-xl">
          <div className="text-black/30 text-xl items-center flex gap-4 lg:gap-8 font-semibold">
            <RiCoupon4Line className="text-2xl" />
            <input
              type="text"
              placeholder="Add Promo"
              className="placeholder-black/30 focus:outline-none w-3/4"
            />
          </div>

          <p className="cursor-pointer text-[#0E8A76] text-xl font-semibold">
            Add
          </p>
        </div>

        <h1 className="text-xl font-bold mb-3">Payment Details</h1>
        <div className="text-lg lg:text-xl mb-2 flex justify-between">
          <p>Field Cost</p>
          <p className="font-semibold">Rp 200.000</p>
        </div>

        <div className="text-lg lg:text-xl mb-2 flex justify-between">
          <p>Discount</p>
          <p className="font-semibold text-[#0E8A76]">- Rp 0</p>
        </div>

        <div className="text-lg lg:text-xl mb-2 flex justify-between">
          <p>Biaya Admin 5%</p>
          <p className="font-semibold">Rp 10.000</p>
        </div>

        <hr />

        <div className="text-lg lg:text-xl mb-16 flex justify-between">
          <p>Total Payment</p>
          <p className="font-semibold">Rp 210.000</p>
        </div>

        <h1 className="text-xl font-bold mb-3">Payment Method</h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center lgjustify-between px-3 lg:px-6 py-5 rounded-md border border-gray-200 mb-16 shadow-xl">
          <div className="text-black/30 text-xl items-center flex gap-4 lg:gap-8 font-semibold">
            <AiOutlineDollarCircle className="text-2xl" />
            <input
              type="text"
              placeholder="Select Payment"
              className="placeholder-black/30 focus:outline-none w-3/4"
            />
          </div>

          <p className="cursor-pointer text-[#0E8A76] text-xl font-semibold">
            Change
          </p>
        </div>
      </div>
    </div>
  );
}
