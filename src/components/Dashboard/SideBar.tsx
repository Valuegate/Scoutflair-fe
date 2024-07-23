import React, { useState } from "react";
import Logo from "../reusable/Logo";

interface iNavItem {
  name: string;
  icon: string;
}

const SideBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const insight: iNavItem[] = [
    {
      name: "Overview",
      icon: "./icons/Overview Icon.svg",
    },
    {
      name: "Analytics",
      icon: "./icons/Analytics Icon.svg",
    },
  ];

  const main: iNavItem[] = [
    {
      name: "Profile",
      icon: "./icons/Profile Icon.svg",
    },
    {
      name: "Tactics",
      icon: "./icons/Tactic Icon.svg",
    },
    {
      name: "Matches",
      icon: "./icons/Matches Icon.svg",
    },
    {
      name: "Academies",
      icon: "./icons/Academic Icon.svg",
    },
    {
      name: "Football Clubs",
      icon: "./icons/Footbal Club Icon.svg",
    },
  ];

  const resources: iNavItem[] = [
    {
      name: "Messages",
      icon: "./icons/Messages Icon.svg",
    },
    {
      name: "Notifications",
      icon: "./icons/Notifications Icon.svg",
    },
    {
      name: "Settings",
      icon: "./icons/Settings Icon.svg",
    },
  ];

  return (
    <div className="w-full md:w-[336px] h-[100vh] scrollbar-custom overflow-y-scroll overflow-x-hidden flex flex-col rounded-tr-3xl rounded-br-3xl bg-[#041931] shadow-lg">
      <Logo />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="opacity-[0.72] text-[12px] text-white pl-6">
            <p>INSIGHTS</p>
          </div>
          {insight.map((insight, i) => {
            return (
              <NavComponent
                key={i}
                item={insight}
                active={currentIndex === i}
                setActive={() => {
                  setCurrentIndex(i);
                }}
              />
            );
          })}
        </div>

        <hr className="border-white border-opacity-[0.56]" />

        <div className="flex flex-col gap-2">
          <div className="opacity-[0.72] text-[12px] text-white pl-6">
            <p>MAIN</p>
          </div>
          {main.map((insight, i) => {
            return (
              <NavComponent
                key={i}
                item={insight}
                active={currentIndex === i + 2}
                setActive={() => {
                  setCurrentIndex(i + 2);
                }}
              />
            );
          })}
        </div>

        <hr className="border-white border-opacity-[0.56]" />

        <div className="flex flex-col gap-2">
          <div className="opacity-[0.72] text-[12px] text-white pl-6">
            <p>RESOURCES</p>
          </div>
          {resources.map((insight, i) => {
            return (
              <NavComponent
                key={i}
                item={insight}
                active={currentIndex === i + 7}
                setActive={() => {
                  setCurrentIndex(i + 7);
                }}
              />
            );
          })}
        </div>
        
        <hr className="border-white border-opacity-[0.56]" />

        <div
          className={`text-[16px] leading-5  px-6 py-2 flex gap-2 items-center font-bold cursor-pointer text-white`}
          onClick={() => {}}
        >
          <img
            src="./icons/Sign Out Icon.svg"
            alt="sign out"
            className="size-6"
          />
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

const NavComponent: React.FC<{
  item: iNavItem;
  active: boolean;
  setActive: () => void;
}> = ({ item, active, setActive }) => {
  return (
    <div
      className={`text-[16px] leading-5 border-white border-x-0 border-y-[1px] px-6 py-2 flex gap-2 items-center font-bold cursor-pointer text-white relative ${
        active ? " border-opacity-20" : "border-opacity-0"
      }`}
      style={{
        background: active
          ? "linear-gradient(128.61deg, rgba(1,14,29,0.24) -10.42%, rgba(255,255,255,0.24) 140.66%) "
          : "none",
      }}
      onClick={setActive}
    >
      <img src={item.icon} alt={item.name} className="size-6" />
      <p>{item.name}</p>
    </div>
  );
};

export default SideBar;
