import React from "react";
import homeSvg from "../../../../../../assets/svg/navbar/home.svg";
import billingSvg from "../../../../../../assets/svg/navbar/billing.svg";
import accountSvg from "../../../../../../assets/svg/navbar/account.svg";
import logoutSvg from "../../../../../../assets/svg/navbar/logout.svg";
interface IMenuProps {
  title: string;
  icon: React.ReactNode;
}
export default function ProfileMenu() {
  const service_menu: IMenuProps[] = [
    {
      title: "Home",
      icon: <img src={homeSvg} alt="status" className="w-5 h-5" />,
    },
    {
      title: "Billing",
      icon: <img src={billingSvg} alt="community" className="w-5 h-5" />,
    },
    {
      title: "Accounts",
      icon: <img src={accountSvg} alt="knowledge" className="w-5 h-5" />,
    },
    {
      title: "Log Out",
      icon: <img src={logoutSvg} alt="service" className="w-5 h-5" />,
    },
  ];
  return (
    <div role="listbox" className="dropdown dropdown-end">
      <label>
        <button className="btn avatar btn-circle btn-ghost">
          <div className="w-10 rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/21959017?s=400&amp;u=1c2711bcd2713d682bf553835a6dce998c6fd49b&amp;v=4"
              loading="lazy"
              alt="profile-img"
            />
          </div>
        </button>
      </label>
      <ul
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-48"
        role="menu"
      >
        {service_menu.map((item, index) => {
          return (
            <li key={index} role="menuitem">
              <div>
                {item.icon}
                {item.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
