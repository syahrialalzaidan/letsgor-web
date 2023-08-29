import { HiOutlineOfficeBuilding, HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Ask = () => {
  return (
    <div className="w-full h-[90vh] bg-[url('/landing/Lari.svg')] bg-cover bg-no-repeat">
      <div className="flex h-full w-full px-[5%]">
        <div className="w-1/2 flex flex-col justify-center text-white">
          <h1 className="font-semibold text-4xl">
            Lelah menerima puluhan chat pelanggan? Kontak kami!
          </h1>
          <p className="font-medium text-lg mt-4">Kontak</p>
          <div className="flex flex-col gap-3 mb-4 mt-1">
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
              <p>letsgor@gmail.com</p>
            </div>
          </div>
          <p className="font-medium text-lg">Social Media</p>
          <div className="flex gap-2 mt-1">
            <AiOutlineFacebook size={24} />
            <AiOutlineTwitter size={24} />
            <AiOutlineInstagram size={24} />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center px-14">
          <div className="w-full bg-white py-10 px-10 flex flex-col text-center gap-3">
            <h1 className="text-primary font-semibold text-4xl mb-2">ada pertanyaan..?</h1>
            <input type="text" className="bg-gray-300 py-4 px-4" placeholder="Masukan email anda disini..." />
            <input type="text" className="bg-gray-300 py-4 px-4" placeholder="Masukan pertanyaan anda disini..." />
            <button className="bg-primary text-white font-semibold py-4">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;
