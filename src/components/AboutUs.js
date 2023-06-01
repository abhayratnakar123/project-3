import React from "react";

export const AboutUs = () => {
  return (
    <div>
      <div className="flex mt-20 justify-center items-center lg:w-full h-full bg-gray-100">
        <div className="lg:flex lg:flex-row lg:w-full justify-center items-center">
          <img
            className="w-full h-[auto] lg:w-[400px] lg:h-[467px] object-cover hidden sm:block"
            alt=""
            src="https://s3-alpha-sig.figma.com/img/5b80/babf/a1ef27ac038072c6f30264ab0d7bc72d?Expires=1686528000&Signature=lARTaFPsLzrkOVS3475Y64CF7DT7Bihj5wDkcByICVvy23310jU2oLWyc5p0Xsm8EkY8l6XhwRvUE-I0vUbikpS9MCs0PxryhvI~fVulLVlCvFL6H6PgPoSEneXYGKOSv3xFIgezIEbZXS3JcmZ-gq3SVvH-T8PEM1JY4DN4mJc~qk7OhrKbsxn2zBoV7MLyhRvJZE7N~q8J0GSy13504-VjGzyY5Z~lWnjwBdftYwtJ0isK8PFkDoPB3AA2dodDRlJZgmJ0Wj9BmNmZr6i67ZSDz6YCdqrZ2i21rK2sZOnOxv-097IrJaMBY3W0TmC5q6It0qwFta8-1kOvfU4zsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />

          <div className="w-full md:w-[600px] mt-10 md:mt-0 p-[20px] md:p-[70px]">
            <h1 className="text-[#0E2368] text-[45px] leading-[27px] font-bold">
              About Us
            </h1>
            <p className="mt-4 md:mt-9 text-[#444957]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <button className="w-[132px] h-[42px] mt-4 md:mt-9 text-white bg-[#E23744] rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
