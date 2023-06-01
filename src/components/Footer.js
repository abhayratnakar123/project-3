import React from 'react'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer class=" p-10 lg:flex-row lg:justify-evenly p-5 bg-[#F8F8F8] text-white py-8 mt-10 sm:flex sm:flex-col ">
    <div class="flex justify-center lg:ml-[108px]  mb-6 sm:ml-0">
      <img 
        className="lg:w-[250px] mt-4 sm:[9rem]"
        src="https://s3-alpha-sig.figma.com/img/e61b/6571/33af368e1471bcf0efe704356a08337d?Expires=1686528000&Signature=daRze9eAGqZTbT~YvpmBKVi-0k5a4CA93lBtaf2f50FjiLLSgYgcEQ7mJrICfAKd-fgaJuIO3pD3dh0Pix4S1VRzGnDTrLPi6DP6QLFOnYiK~VjcFlF5wds~CK~SF~yEyo4Z0xo4yrymr6Xdw9FfnrEAbSJflNOO-QatTK2-LSlB5QV0MMC1ayMKDHhBRaylIMqAPqrBBKZZwaNYstelgsQqbBHkDIVptyFTgOjs2v5XhRhGABbu5tqFhaFwXk340mg9LCZVhccYLXANeDpFrpjJRlxnMUBdT0atY0yk0TbtJMcM4CbHzeDakSD-SQkzJ-d6eM3RPbfvw69il9ZQzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Company Logo"
      />
    </div>
    
    <div class="mt-4 sm:ml-0  w-[205px]">
      <h3 class="text-lg font-bold mb-2 text-[#0E2368]">Contact Us</h3>
      <p class="text-[#646874] mb-4">Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, 
      Phartosh Gate near YTM Market, XYZ-343434</p>
      <p class="text-[#646874]">Email: info@example.com</p>
      <p class="text-[#646874]">Phone: 123-456-7890</p>
    </div>
    
    <div class="mt-4">
      <h3 class="text-[#0E2368] font-bold mb-2">More About Us</h3>
      <ul class="text-[#646874]">
        <li class="mt-2">About Us</li>
        <li class="mt-2">Career</li>
        <li class="mt-2">Contact Us</li>
        <li class="mt-2">Products</li>
      </ul>
    </div>
    
    <div class="mt-4">
      <h3 class="text-lg font-bold mb-2 text-[#0E2368]">Social Links</h3>
      <ul class="flex justify-center gap-5">
        <li className='text-[#0E2368]'><a href="#"><BsFacebook/></a></li>
        <li className='text-[#0E2368]'><a href="#"><BsTwitter/></a></li>
        <li className='text-[#0E2368]'><a href="#"><BsInstagram/></a></li>
        <li className='text-[#0E2368]'><a href="#"><BsLinkedin/></a></li>
      </ul>
    </div>
  </footer>
  
  )
}
