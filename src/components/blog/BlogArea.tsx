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
      <div className="container">
        <div className="luminix-section-title">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <h6>[Our Latest News]</h6>
              <h2 style={{fontSize:"50px"}} className="title pb-0">Explore our latest blogs </h2>
            </div>
            <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
              <div className="luminix-title-btn">
                <Link href="/" className="luminix-default-btn">
                  View All Post 
                  <RightArrawWhitIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

      <div className="row blog-grid-responsive">
        {blog_data.map((item) => (
          <div className="col-xl-4 col-md-6 col-12 d-flex" key={item.id}>
            <div className="luminix-blog-wrap d-flex flex-column w-100 h-100" data-aos="fade-up" data-aos-duration={item.aosDelay}>
              {/* Blog Image */}
              <div className="luminix-blog-thumb">
                <Link href="/">
                  <Image
                    width={416}
                    height={300}
                    src={typeof item.image === 'string' ? item.image : item.image?.src}
                    alt={item.title}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 12 }}
                  />
                </Link>
                <div className="luminix-blog-frame">
                  {/* <Link href="/single-blog">{item.category}</Link> */}
                </div>
              </div>

              {/* Blog Content */}
              <div className="luminix-blog-content d-flex flex-column justify-between flex-grow-1">
                <div>
                  <div className="luminix-blog-meta">
                    <Link href="/blog">
                      <Image width={15} height={16} src={date_img} alt="Date" />
                      {item.date}
                    </Link>
                  </div>
                  <div className="title pt-0">
                    <h5 className="blog-title">
                      <Link href="/">{item.title}</Link>
                    </h5>
                  </div>
                </div>

                <div className="luminix-blog-btn mt-auto">
                  <Link href="/">
                    Read More
                    <RightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Responsive styles */}
      <style jsx>{`
        .blog-grid-responsive > div[class*='col-'] {
          margin-bottom: 32px;
        }
        @media (max-width: 991px) {
        .blog-grid-responsive > div[class*='col-'] {
            margin-bottom: 24px;
          }
        }
        @media (max-width: 767px) {
          .blog-grid-responsive {
            display: flex;
            flex-direction: column;
          }
          .blog-grid-responsive > div[class*='col-'] {
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 18px;
          }
          .luminix-blog-wrap {
            min-width: 0;
          }
        }
        @media (max-width: 600px) {
          .luminix-blog-wrap {
            padding: 0.5rem !important;
          }
          .luminix-blog-thumb img {
            border-radius: 8px !important;
          }
        }
      `}</style>

      </div>
    </div>
    </>
  )
}
