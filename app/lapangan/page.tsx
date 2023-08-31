import Lapangan from "./component/Lapangan";

export default function LapanganPage() {
  return (
    <div>
      <div className="bg-[url('/payment/navbar-bg.svg')] h-20 bg-cover mb-10"></div>

      <div className="lg:px-24 px-12 lg:py-12">
        <Lapangan />
      </div>
    </div>
  );
}
