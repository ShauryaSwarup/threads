"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Bottombar() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <section className='bottombar'>
            <div className='bottombar_container'>
                {sidebarLinks.map((link, i) => {
                    const isActive =
                        (link.route.length > 1
                            ? pathname.includes(link.route)
                            : false) || pathname === link.route;
                    return (
                        <Link
                            href={link.route}
                            key={i}
                            className={`bottombar_link ${
                                isActive ? "bg-primary-500" : ""
                            }`}
                        >
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                                {link.label.split(" ")[0]}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
