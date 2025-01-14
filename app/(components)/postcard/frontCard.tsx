import Image from "next/image";

export default function FrontCard() {
  return (
    <>
      <div className="relative bg-white shadow-xl md:w-[26rem] md:h-[13rem] rounded-2xl overflow-hidden">
        <Image
          src="https://s3-eu-west-1.amazonaws.com/public.creativemindclass.com/magazine/2021/07/small_image00003.jpg"
          alt="car!"
          width={500}
          height={260}
          className="object-cover z-0"
        />
        <div className="absolute z-[1] top-0 w-full h-full flex justify-end items-center p-1">
          <div className="bg-white h-full md:w-[14.25rem] md:rounded-[0.875rem] text-center text-xs box-border ">
            <p>write message</p>
          </div>
        </div>
      </div>
    </>
  );
}
