import { RiSearchLine } from "react-icons/ri";

export default function search_input() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
        <RiSearchLine className="text-lg" />
      </div>
      <input
        type="text"
        name="search"
        className="text-sm rounded-[1rem]  block w-full pl-[4rem]  p-[1rem] bg-tertiary focus:border-transparent focus:outline-none"
        placeholder="Search message or users"
      />
    </div>
  );
}
