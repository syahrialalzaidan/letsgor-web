import { useState, useEffect } from "react";

interface BookingItem {
  lapangan: string;
  jam: string;
}

interface BookdetailsProps {
  details: BookingItem[];
}

const groupBookingsByLapangan = (
  bookings: BookingItem[]
): Map<string, string[]> => {
  const lapanganMap = new Map<string, string[]>();

  bookings.forEach((booking) => {
    if (!lapanganMap.has(booking.lapangan)) {
      lapanganMap.set(booking.lapangan, []);
    }
    const lapanganBookings = lapanganMap.get(booking.lapangan) || [];
    lapanganBookings.push(booking.jam);
    lapanganMap.set(booking.lapangan, lapanganBookings);
  });

  return lapanganMap;
};

const formatBookingTimes = (bookingTimes: string[]): string => {
  const sortedTimes = bookingTimes.sort();
  let formattedTimes = [];
  let start = sortedTimes[0];
  let end = sortedTimes[0];

  for (let i = 1; i < sortedTimes.length; i++) {
    if (parseInt(sortedTimes[i]) === parseInt(end) + 1) {
      end = sortedTimes[i];
    } else {
      formattedTimes.push(end === start ? start : `${start}-${end}`);
      start = sortedTimes[i];
      end = sortedTimes[i];
    }
  }
  formattedTimes.push(end === start ? start : `${start}-${end}`);

  return formattedTimes.join(", ");
};

const Bookdetails: React.FC<BookdetailsProps> = ({ details }) => {
  const lapanganMap = groupBookingsByLapangan(details);
  const [totalprice, setTotalprice] = useState(0);
  useEffect(() => {
    let total = 0;
    Array.from(lapanganMap.entries())
      .filter((_, index) => index > 0)
      .forEach(([, bookingTimes]) => {
        total += bookingTimes.length * 100000;
      });
    setTotalprice(total);
  }, [lapanganMap]);

  return (
    <div className="mt-14">
      <p className="text-2xl font-bold mb-9">Booking Details</p>

      {Array.from(lapanganMap.entries())
        .filter((_, index) => index > 0) // Exclude the first element
        .map(([lapangan, bookingTimes], index) => (
          <div key={index} className="flex justify-between text-2xl mb-10">
            <p>
              {lapangan} {formatBookingTimes(bookingTimes)}
            </p>
            <p>Rp {bookingTimes.length * 100000}</p>
            
          </div>
        ))}

      <div className="flex justify-between text-2xl mb-10">
        <p className="font-bold">Total Price</p>
        <p>Rp {totalprice}</p>
      </div>

      <button className="rounded-lg text-white font-bold w-full bg-[#00985B] px-80 py-7 text-2xl">
        Continue
      </button>
    </div>
  );
};

export default Bookdetails;
