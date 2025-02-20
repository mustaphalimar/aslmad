"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Become an Instructor",
    link: "/instructor",
  },
];

const TopNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-gray-900 text-white px-6 ">
      <nav className="flex justify-start">
        <ul className="flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <li
                key={item.name}
                className={cn("py-3", {
                  "border-t border-t-orange-500": isActive,
                })}
              >
                <Link href={item.link} className="px-4">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default TopNav;
