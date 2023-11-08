import { BiPhoneCall } from "react-icons/bi";

export default function Header() {
  return (
    <div className="h-full p-2 bg-primary grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center">
      <p></p>
      <p className="text-white font-bold">
        Empower Your Potential with Skill Spectrum - Broaden Your Horizons!
      </p>
      <p className="flex items-center text-white">
        <BiPhoneCall size={20} />
        <p>12345</p>
      </p>
    </div>
  );
}
