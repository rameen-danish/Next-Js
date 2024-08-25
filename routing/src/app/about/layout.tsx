"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./about.css"

interface Children {
    children: string;
  }
export default function Layout({ children }:Children) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <h1 className="heading">About Me</h1>
            <div className="sub-header">
            <ul>
            <li><Link href="/about/personalinfo">Personal Information</Link></li> <br></br>
            <li><Link href="/about/aboutprojects">My Projects</Link></li>
            </ul>
            </div>
            {children}
        </div>
    )
}