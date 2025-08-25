import blog_data from '@/data/blog-data';
import RightArrawIcon from '@/svg/RightArrawIcon';
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; 

// images import  
import icon1_img from "@/assets/images/blog/icon1.svg";
import date_img from "@/assets/images/blog/date.svg";

export default function BlogHomeOne() {
  return (
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
      <div className="row">
  {blog_data.map((item) => (
    <div className="col-xl-4 col-md-6 d-flex" key={item.id}>
      <div className="luminix-blog-wrap d-flex flex-column w-100" data-aos="fade-up" data-aos-duration={item.aosDelay} style={{ height: "100%" }}>
        {/* Blog Image */}
        <div className="luminix-blog-thumb">
          <Link href="/">
            <Image width={416} height={300} src={item.image} alt={item.title} />
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

      </div>
    </div>
  );
}
