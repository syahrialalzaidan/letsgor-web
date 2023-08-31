import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

interface BoxgorProps {
  name: string;
  address: string;
  distance: string;
  rating: string;
  price: string;
  image: string;
}

export default function Boxgor(props: BoxgorProps) {
  return (
    <Link href="/detail">
      <div className="pt-2 pb-9 bg-white hover:bg-gradient-to-br from-primary to-black to-[220%] hover:drop-shadow-xl hover:scale-[102%] hover:text-white cursor-pointer w-80 mb-8 rounded-md flex flex-col transition-all">
        <div className="relative w-[95%] mx-auto aspect-[4/3]">
          <Image
            src={props.image}
            fill={true}
            className="object-cover w-full h-full"
            alt="dummy"
          />
        </div>

        <div className="mb-10 mt-5 pl-4">
          <h1 className="text-2xl font-semibold">{props.name}</h1>
          <p className="text-sm">{props.address}</p>
        </div>

        <div className="flex flex-row items-center justify-center font-semibold gap-8 bg-white text-black px-2 py-3">
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker />
            <p>{props.distance}</p>
          </div>

          <div className="flex items-center gap-2">
            <AiFillStar />
            <p>{props.rating}</p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <AiFillTag />
              <p>{props.price}</p>
            </div>
            <p className="font-normal">per jam</p>
          </div>
        </div>
      </div>
    </Link>

  );
}
