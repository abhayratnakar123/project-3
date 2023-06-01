import React from "react";

export const Home = () => {
  return (
    <div className=" justify-around p-[5px] lg:flex-row bg-white lg:flex lg:justify-between sm:flex-col w-[11/12] max-w-[2000px] relative sm:overflow-x-hidden ">
      <div className="sm:ml-[0.2rem] flex flex-col lg:ml-5  sm:mt-5 lg:ml-20 lg:mt-0 lg:w-full sm:w-[91%] sm:w-[500px] lg:w-[500px] xl:w-[500px]">
        <div className="sm:flex-col lg:flex-row w-[107px] mt-10 sm:mt-0 lg:mt-10 lg:left-[100px] ">
          <img
            src="https://s3-alpha-sig.figma.com/img/e61b/6571/33af368e1471bcf0efe704356a08337d?Expires=1686528000&Signature=daRze9eAGqZTbT~YvpmBKVi-0k5a4CA93lBtaf2f50FjiLLSgYgcEQ7mJrICfAKd-fgaJuIO3pD3dh0Pix4S1VRzGnDTrLPi6DP6QLFOnYiK~VjcFlF5wds~CK~SF~yEyo4Z0xo4yrymr6Xdw9FfnrEAbSJflNOO-QatTK2-LSlB5QV0MMC1ayMKDHhBRaylIMqAPqrBBKZZwaNYstelgsQqbBHkDIVptyFTgOjs2v5XhRhGABbu5tqFhaFwXk340mg9LCZVhccYLXANeDpFrpjJRlxnMUBdT0atY0yk0TbtJMcM4CbHzeDakSD-SQkzJ-d6eM3RPbfvw69il9ZQzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          ></img>
        </div>

        <div className="lg:p-10 lg:mt-10 sm:mt-2 lg:mt-[100px] lg:p-2 lg:w-full sm:w-[400px] lg:w-[400px] xl:w-[400px] sm:p-[-0.5rem]">
          <h1 className="text-[62px] font-bold text-[#0E2368] leading-[69px]">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>

          <p className="lg:p-2 sm:p-5 sm:mt-[1.5rem] lg:mt-2 text-[#444957]">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>

          <button className="p-4 w-[190px] mt-10 text-white font-bold bg-[#E23744] rounded-full mb-10 ">
            Explore Now!
          </button>
        </div>
      </div>

      {/* circle */}
      <div className="lg:mt-0 lg:flex lg:flex-row  relative lg:w-[610px] items-center justify-center">
  <svg
    className="absolute z-10 lg:mt-[-16px]"
    viewBox="0 0 752 859"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
      fill="#E23744"
    />
  </svg>

  <img
    className="lg:mt-[-50px] lg:ml-0 lg:w-[600px]"
    alt="#"
    src="https://s3-alpha-sig.figma.com/img/c2a9/c613/9cad959fc06da22d2d90d91c2fed69db?Expires=1686528000&Signature=AMfgGfDzRzQxv5qt~ZKaCpdai0nzjK4bQa5EN4ftnuD3EtuAJoqp4fFXZ-z3~KiaNWRxCTM0aW-78Bd6NGCWjmjzU7BbaSgKy1nfOHM7NlyDCMPy-leyZUZ0rNyseQcsN52Rh8PpsY43~uLefujhBt3lBU1Qg8MtSWVBUTKAIEmzl9Lithee0h42JJ88QJfjxFxlmSQz1hM2bZXxQDoQ8eOJlEtHG8Ocxl~dXDh5XAqe8IahnFRUE-ysPnGbgnR9lwT01sa~WlF-peLJsSwshvGc9V-h-mM0BANI6dY-Y2RZpqU93nhR~vl6vLFzAG8TOHsGl~fw0r39E6fdarCYXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  />
</div>


    </div>
  );
};
