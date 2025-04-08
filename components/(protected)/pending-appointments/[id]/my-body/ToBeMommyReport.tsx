const ToBeMommyReport = () => {
  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex flex-col gap-2 px-4">
        <div className="mb-2">
          <p className="font-sans font-semibold text-center text-turquoise-800  mb-1">
            What to Expect
          </p>
          <div className="border border-t-turquoise-200 w-1/2 mx-auto"></div>
        </div>
        <p className="font-sans tracking-tight text-turquoise-800">
          This is the first day of your last period — you’re not pregnant yet,
          but your body is preparing for ovulation.
        </p>
      </div>
    </div>
  );
};

export default ToBeMommyReport;
