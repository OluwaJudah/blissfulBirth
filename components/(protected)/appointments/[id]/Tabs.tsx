import Image from "next/image";

const Tabs = () => {
  
  return (
    <div className="flex flex-col gap-[35px] px-3">
      <div className="flex justify-between space-x-5 w-full">
        <div className="flex place-items-center basis-1/2 h-[80px] p-3 rounded-2xl bg-pinklet-200 shadow-2xl">
          <div className="flex items-center">
            <Image src="/baby_2.png" height={100} width={45} alt="Baby 2" />
            <span>My Baby</span>
          </div>
        </div>
        <div className="flex place-items-center basis-1/2 h-[80px] p-3 rounded-2xl bg-pinklet-100">
          <div className="flex items-center">
            <Image src="/pregnant_4.png" height={100} width={45} alt="Baby 2" />
            <span>My Body</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
