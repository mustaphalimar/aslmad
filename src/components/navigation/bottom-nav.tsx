"use client";
import { Bell, Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import NavigationMenuComponent from "./navigation-menu";

const BottomNav = () => {
  return (
    <div className="w-full p-6 border-b flex justify-between">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <p className="text-3xl font-bold">Aslmad</p>
        </Link>
        <NavigationMenuComponent />
        <div className="flex items-center border shadow-sm rounded-sm px-2">
          <Search strokeWidth={1.2} size={20} />
          <Input
            className="w-[400px] px-2 border-none shadow-none outline-none"
            placeholder="What do you want to learn?.."
          />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-5">
          <Bell strokeWidth={1.5} size={20} />
          <Heart strokeWidth={1.5} size={20} />
          <ShoppingCart strokeWidth={1.5} size={20} />
        </div>
        <div className="flex items-center gap-2 ">
          <Link
            href="/sign-up"
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            Create account
          </Link>
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BottomNav;
