"use client";

import Link from "next/link";
import style from "./SidebarMenuItem.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export default function SidebarMenuItem({
  path,
  icon,
  title,
  subTitle,
}: Props) {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      <span className={`${style.icon}`}>{icon}</span>
      <div className="flex flex-col">
        <span className={`${style.title}`}>{title}</span>
        <span className={`${style.subTitle}`}>{subTitle}</span>
      </div>
    </Link>
  );
}
