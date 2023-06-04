import { RiGroupLine } from "react-icons/ri";
import LastProfile from "../component/last_profile";
import SearchInput from "../component/search_input";

export default function chat() {
  return (
    <div className="w-[25%] bg-secondary h-screen py-[2rem] flex flex-col gap-[2rem]">
      <div className="flex flex-row items-center justify-between px-[2rem] text-md">
        <h1 className="text-xl font-bold">Group</h1>
        <RiGroupLine />
      </div>
      <div className="px-[2rem]">
        <SearchInput />
      </div>
      <div className="flex flex-col gap-[1rem] overflow-y-auto">
        <p className="text-lg font-semibold px-[2rem]">All Group</p>
        <LastProfile />
      </div>
    </div>
  );
}
