import Image from "next/image";
import { IoBaseball, IoBrowsersOutline, IoCart, IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCart/>,
    title: "Counter",
    subTitle: "Contador Client Side",
  },  {
    path: "/dashboard/pokemons",
    icon: <IoBaseball/>,
    title: "Pokemons",
    subTitle: "Generacion estatica",
  },
];

export default function Sidebar() {
  return (
    <div>
      <div
        id="menu"
        className="bg-gray-900 min-h-screen h-full z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
            <IoLogoReact className="mr-2" />
            Dash<span className="text-blue-500">Board</span>.
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your actions and activities
          </p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Welcome back,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                src="https://avatars.githubusercontent.com/u/13608736"
                alt="Avatar"
                width={50}
                height={50}
              />
            </span>
            <span className="text-sm md:text-base font-bold">
              Alejandro Piacquadio
            </span>
          </a>
        </div>

        <div id="nav" className="w-full px-6">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
