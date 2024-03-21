import { NavLink, Outlet } from "react-router-dom";
import CurrentUser from "../CurrentUser/CurrentUser";

// Define an array of navigation items
const navItems = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Timesheet", link: "/timesheet" },
  { label: "Accounts", link: "/accounts" },
  { label: "Settings", link: "/settings" },
];

function SideNav() {
  return (
    <div className="flex flex-1 h-full">
      {" "}
      <nav className="flex flex-col items-center p-6  py-40">
        <CurrentUser />
        <ul className="gap-6 grow justify-center flex flex-col">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) => {
                  if (isActive) return "text-white text-xl";
                  return "text-gray-500 text-xl"; // Default text color
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <section className="grow p-6 h-full">
        <div className="bg-white p-4  rounded-lg h-full">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default SideNav;
