"use client";
import PaginationLeftIcon from '@/svg/PaginationLeftIcon';
import PaginationRightIcon from '@/svg/PaginationRightIcon';
import RightArrawSmallIcon from '@/svg/RightArrawSmallIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import blog_img_1 from "@/assets/images/blog/everything-you-need-to-know-before-starting-clear-aligners-s.jpg"
import blog_img_2 from "@/assets/images/blog/age-no-bar-braces-and-alligners-for-all-ages-s.jpg"
import blog_img_3 from "@/assets/images/blog/invisalign-alligners-the-invisible-braces-s.png"

// images import  
import blog4_img from "@/assets/images/blog/blog4.png";
import icon1_img from "@/assets/images/blog/icon1.svg";
import date_img from "@/assets/images/blog/date.svg";
import blog10_img from "@/assets/images/blog/blog10.png";  
import blog9_img from "@/assets/images/blog/blog9.png";  
import line1_img from "@/assets/images/blog/line1.svg";
import line3_img from "@/assets/images/blog/line3.svg";
import blog11_img from "@/assets/images/blog/blog11.png"; 
import blog12_img from "@/assets/images/blog/blog12.png"; 
import blog13_img from "@/assets/images/blog/blog13.png"; 
import line2_img from "@/assets/images/blog/line2.svg";
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon';
// import blog_data from '@/data/blog-data';

import { StaticImageData } from "next/image";
import RightArrawIcon from '@/svg/RightArrawIcon';

   interface BlogDataType {
    id: number;
    category: string;
    image: StaticImageData;
    title: string;
    author: string;
    date: string;
    aosDelay: string;
}[]

  export const blog_data:BlogDataType[] = [
  {
    id: 1,
    category: "Business",
    image: blog_img_1,
    title: "Everything You Need to Know Before Starting Clear aligners.....",
    author: "admin",
    date: "July 2025",
    aosDelay: "500"
  },
  {
    id: 2,
    category: "Marketing",
    image: blog_img_2,
    title: "Age No Bar -- Braces and Alligners for All Ages...",
    author: "admin",
    date: "July 2025",
    aosDelay: "700"
  },
  {
    id: 3,
    category: "Finance",
    image: blog_img_3,
    title: "Greater financial flexibility for strategic planning",
    author: "admin", 
    date: "June 2025",
    aosDelay: "900"
  }
];



export default function BlogArea() {
  console.log(blog_data);
  return (
    <>
   <div className="luminix-padding-section4 light-bg1">
      Blog content
    </div>
    </>
  )
}
