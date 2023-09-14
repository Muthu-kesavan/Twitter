import React from 'react'

const Navbar = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-4 my-5 justify-center">
       <div className="mx-auto md:mx-0">
       <img src="/Twitter-Logo.png" 
            alt="Twitter logo"  
            width={"40px"} 
            className="ml-8"
            />
        </div>
        <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
            <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">Home</h2>
            </div>
            </div> 
            <div className="px-0 md:px-6 mx-auto">
                <p>search logo</p>
                <input type="text" className=" bg-blue-100 rounded-full py-2 px-8"/>
            </div>
        </div>
  );
};

export default Navbar;