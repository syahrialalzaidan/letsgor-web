import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white w-full h-[40vh]">
      <div className="w-full h-full px-[5%] pt-10 pb-5 flex flex-col text-center">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center flex-1 gap-7">
          <div className="flex items-center gap-2">
            <Image src={"/logo/Logo.svg"} alt="Logo" width={30} height={30} />
            <p className="font-semibold text-lg">LetsGOR</p>
          </div>
          <div className="flex flex-col md:flex-row font-semibold gap-3 md:gap-5 items-center text-white">
            <p className="hover:text-primary cursor-pointer">Beranda</p>
            <p className="hover:text-primary cursor-pointer">Layanan</p>
            <p className="hover:text-primary cursor-pointer">Fitur</p>
            <p className="hover:text-primary cursor-pointer">Kontak</p>
            <p className="hover:text-primary cursor-pointer">Masuk</p>
          </div>
        </div>
        <p className="text-sm">@2023 | Copyright LetsGOR</p>
      </div>
    </div>
  );
};

export default Footer;
