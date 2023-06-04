import AllProfile from "../component/all_profile";
import SearchInput from "../component/search_input";

export default function contacts() {
  return (
    <div className="w-[25%] bg-secondary h-screen py-[2rem] flex flex-col gap-[2rem]">
      <h1 className="text-xl font-semibold px-[2rem]">Contacts</h1>
      <div className="px-[2rem]">
        <SearchInput />
      </div>
      <div className="flex flex-col gap-[1rem] overflow-y-auto">
        <p className="text-lg font-semibold px-[2rem]">All of your contact</p>
        <AllProfile />
      </div>
    </div>
  );
}
