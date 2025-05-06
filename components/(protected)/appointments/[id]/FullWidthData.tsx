const FullWidthData = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className="flex justify-between p-6 bg-turquoise-200 rounded-3xl">
      <p className="font-sans text-black text-lg tracking-tight leading-none">
        {title}
      </p>
      <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
        {data}
      </p>
    </div>
  );
};

export default FullWidthData;
