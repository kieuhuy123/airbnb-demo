import Image from "next/image";
import banner from "../public/image/banner.webp";
const Banner = () => {
  return (
    <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image src={banner} layout="fill" objectFit="corver" alt="banner" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
