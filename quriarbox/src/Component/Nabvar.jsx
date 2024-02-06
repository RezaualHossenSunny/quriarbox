import React from "react";
import logo from "../assets/Logo.png";
const Nabvar = () => {
  return (
    <div>
      <div className="max-w-container mx-auto bg-white flex py-4">
        {/* logo */}
        <div className="w-1/4">
          <img src={logo} />
        </div>
        {/* logo  end*/}

        {/* navbar */}
        <div className="w-2/4 flex  justify-end py-4">
            <div className="">
                <ul className="list-none flex gap-6 text-base font-ral font-extrabold ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Our services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">What’s new?</a></li>
                   
                </ul>
            </div>
        </div>
        {/* navbar */}


  {/* button */}
        <div className="w-1/4 flex justify-end ">
            <div className="bg-[#FFE4D9] rounded-md" >
                <button className="py-3 px-5 text-xl font-bold text-[#F95C19] leading-normal not-italic">Contact us</button>
            </div>
        </div>


  {/* button */}
      </div>
    </div>
  );
};

export default Nabvar;
