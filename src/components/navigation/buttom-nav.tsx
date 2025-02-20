"use client";
import Image from "next/image";
import Link from "next/link";
import NavigationMenuComponent from "./navigation-menu";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const ButtomNav = () => {
  return (
    <div className="w-full p-6 border-b flex">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <p className="text-2xl font-bold">Aslmad</p>
        </Link>
        <NavigationMenuComponent />
        <div className="flex items-center border shadow-sm rounded-sm px-2">
          <Search strokeWidth={1.2} size={20} />
          <Input
            className="w-[300px] px-2 border-none shadow-none outline-none"
            placeholder="What do you want to learn?.."
          />
        </div>
      </div>
    </div>
  );
};
export default ButtomNav;
