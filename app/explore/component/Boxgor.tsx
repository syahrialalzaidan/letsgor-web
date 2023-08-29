import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import { AiFillTag } from "react-icons/ai";


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
    <div className="p-2 pb-9 bg-white hover:bg-gray-200 cursor-pointer w-80 mb-8 rounded-md flex flex-col">
      <Image src={props.image} width={300} height={300} alt="dummy" />

      <div className="mb-10 mt-5 pl-2">
        <h1 className="text-2xl font-semibold">{props.name}</h1>
        <p className="text-sm">{props.address}</p>
      </div>

      <div className="flex flex-row items-center justify-center font-semibold gap-8">
        <div className="flex items-center gap-2">
          <GrLocation />
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
  );
}
