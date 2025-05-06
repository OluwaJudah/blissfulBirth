const BlockData = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className="basis-1/2 h-[138px] rounded-3xl bg-turquoise-200 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <p className="font-sans text-black text-base tracking-tight leading-none">
          {title}
        </p>
        <span className="font-mono font-bold text-black text-3xl tracking-tight leading-none">
          {data}
        </span>
      </div>
    </div>
  );
};

export default BlockData;
