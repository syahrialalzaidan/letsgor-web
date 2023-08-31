import Lapangan from "./component/Lapangan";

export default function LapanganPage() {
  return (
    <div>
      <div className="bg-[url('/payment/navbar-bg.svg')] h-20 bg-cover mb-10"></div>

      <div className="px-[5%] pb-12">
        <Lapangan />
      </div>
    </div>
  );
}
