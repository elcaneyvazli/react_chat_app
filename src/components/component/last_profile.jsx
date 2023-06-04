export default function last_profile() {
  const chat = [
    {
      id: 1,
      name: "John Doe",
      img: "./img/avatar1.jpg",
      message: "Okey",
      time: "02:50 PM",
    },
    {
      id: 2,
      name: "Peter Doe",
      img: "./img/avatar2.jpg",
      message: "Yes, I am fine",
      time: "13:34 PM",
    },
    {
      id: 3,
      name: "Garry Doe",
      img: "./img/avatar3.jpg",
      message: "Yes I am fine, what about you?",
      time: "20:56 PM",
    },
    {
      id: 4,
      name: "Robert Doe",
      img: "./img/avatar4.jpg",
      message: "Sure, I will be there in 20 minutes",
      time: "23:45 PM",
    },
  ];

  return (
    <>
      {chat.map((item) => (
        <div
          className="flex flex-row justify-between items-start py-[1rem] hover:bg-tertiary"
          key={item.id}
        >
          <div className="flex flex-row items-center gap-[1rem] pl-[2rem] ">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full">
              <img
                src={item.img}
                alt=""
                className="w-[100%] h-[100%] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[]">
              <h1 className="text-md font-bold">{item.name}</h1>
              <p className="text-sm">{item.message}</p>
            </div>
          </div>
          <p className="text-xs pr-[2rem] ">{item.time}</p>
        </div>
      ))}
      ;
    </>
  );
}
