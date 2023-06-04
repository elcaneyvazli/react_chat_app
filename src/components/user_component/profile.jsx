import { BsFillRecordCircleFill } from "react-icons/bs";
import {
  RiUser2Line,
  // RiArrowDownSFill,
  RiArrowDropRightFill,
} from "react-icons/ri";
import { useState } from "react";

export default function Profile() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="max-w-[25%] bg-secondary h-screen p-[2rem] flex flex-col gap-[2rem] overflow-y-auto">
      <h1 className="text-xl font-bold">My Profile</h1>
      <div className="flex flex-col items-center justify-center gap-[1rem] py-[1rem]">
        <div className="w-[10rem] h-[10rem] rounded-full">
          <img
            src="./img/profile.jpg"
            alt=""
            className="h-[100%] w-[100%] rounded-full object-cover"
          />
        </div>

        <p className="text-lg font-semibold">John Doe</p>
        <div className="flex flex-row items-center gap-[1rem]">
          <BsFillRecordCircleFill className="text-active" />
          <p className="text-md">Active</p>
        </div>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        dolorum dolore ducimus aliquid consectetur incidunt mollitia modi
      </p>
      <div className="bg-white px-[2rem] py-[1rem] flex flex-col gap-[2rem] cursor-pointer">
        <div
          className="flex flex-row items-center justify-between"
          onClick={handleShow}
        >
          <div className="text-sm flex flex-row item items-center gap-[1rem]">
            <RiUser2Line />
            <p className="text-md select-none">About</p>
          </div>
          <RiArrowDropRightFill
            className={show ? "text-lg transform rotate-[90deg]" : "text-lg"}
          />
        </div>
        {show && (
          <div className="flex flex-col items-start gap-[2rem]">
            <div className="flex flex-col">
              <p className="text-text text-sm">Name</p>
              <p className="text-sm text-black font-bold">John Doe</p>
            </div>
            <div className="flex flex-col">
              <p className="text-text text-sm">Number</p>
              <p className="text-sm text-black font-bold">+994518234567</p>
            </div>
            <div className="flex flex-col">
              <p className="text-text text-sm">Email</p>
              <p className="text-sm text-black font-bold">johndoe@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <p className="text-text text-sm">Location</p>
              <p className="text-sm text-black font-bold">Sumgait,Azerbaijan</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
