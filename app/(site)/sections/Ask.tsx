import { HiOutlineOfficeBuilding, HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

const Ask = () => {
  return (
    <div className="w-full min-h-[90vh] bg-[url('/landing/Lari.svg')] bg-cover bg-no-repeat flex items-center">
      <div className="flex w-full flex-col md:flex-row gap-10 h-full px-[5%] py-16 md:py-10 items-center justify-between">
        <div className="md:w-1/2 w-full flex flex-col justify-center text-white px-3">
          <h1 className="font-semibold text-2xl md:text-4xl">
            Lelah menerima puluhan chat pelanggan? Kontak kami!
          </h1>
          <p className="font-medium text-lg mt-4">Kontak</p>
          <div className="flex flex-col gap-3 mb-4 mt-1 text-sm md:text-base">
            <div className="flex gap-3">
              <HiOutlineOfficeBuilding size={24} />
              <p>Jl. Sekeloa, Gg. Loa</p>
            </div>
            <div className="flex gap-3">
              <BsTelephone size={24} />
              <p>022-1234-5678</p>
            </div>
            <div className="flex gap-3">
              <HiOutlineMail size={24} />
              <p>letsgor.id@gmail.com</p>
            </div>
          </div>
          <p className="font-medium text-lg">Social Media</p>
          <div className="flex gap-2 mt-1">
            <Link href={"https://instagram.com/letsgor.id"} target="_blank">
              <AiOutlineInstagram size={24} />
            </Link>
            <Link href={"https://twitter.com/xmriz"}>
              <AiOutlineTwitter size={24} />
            </Link>
            <Link href={"https://facebook.com/xmriz"}>
              <AiOutlineFacebook size={24} />
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xl flex justify-center items-center">
          <div className="w-full bg-white rounded-lg py-10 px-8 md:px-12 flex flex-col text-center gap-3">
            <h1 className="text-primary font-semibold text-2xl md:text-4xl mb-2 line-clamp-2">
              ada pertanyaan..?
            </h1>
            <input
              type="text"
              className="bg-gray-300 p-2 md:p-4 text-sm md:text-base"
              placeholder="Masukan email anda disini..."
            />
            <input
              type="text"
              className="bg-gray-300 p-2 md:p-4 text-sm md:text-base"
              placeholder="Masukan pertanyaan anda disini..."
            />
            <button className="bg-primary text-white font-semibold py-2 md:py-4">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
