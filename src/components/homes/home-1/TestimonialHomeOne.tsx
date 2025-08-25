"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface StyleProps {
  style_2?: boolean;
}

// images import
import rating_img from "@/assets/images/v1/rating.svg";
import quote1_img from "@/assets/images/v1/quote1.svg";
import test2_img from "@/assets/images/v1/test2.png";
import test1_img from "@/assets/images/v1/test1.png";
import test3_img from "@/assets/images/v1/test3.png";
import test4_img from "@/assets/images/v1/test4.png";

export default function TestimonialHomeOne({ style_2 }: StyleProps) {
  return (
    <>
      <div className="luminix-padding-section3 light-bg1">
        <div className="container">
          <div className="luminix-section-title center">
            {/* {style_2 ? null : <h6>[Client Reviews]</h6>} */}
            <h3 className="title">Hear what our happy clients say</h3>
            <p className="text2">
              We have completed our projects seriously and have many positive
              client reviews that prove our expertise. Some of them are also
              mentioned here.
            </p>
          </div>
        </div>
        <Slider
          slidesToShow={3}
          slidesToScroll={1}
          arrows={false}
          autoplay={true}
          dots={true}
          centerMode={true}
          speed={500}
          centerPadding="180px"
          lazyLoad="progressive"
          responsive={[
            {
              breakpoint: 1349,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerPadding: "100px",
              },
            },
            {
              breakpoint: 0,
              settings: {
                slidesToShow: 1,
                centerPadding: "0px",
              },
            },
          ]}
          className="luminix-testimonial-slider"
        >
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image
                width={140}
                height={24}
                src={rating_img}
                alt="here is theme image"
              />
              {/* <Image
                width={56}
                height={42}
                src={quote1_img}
                alt="here is theme image"
              /> */}
            </div>
            <div className="luminix-t-content">
              <p>
                “One of the best Dental Surgeons in Delhi NCR and also the most
                experienced one. I have visited multiple dentists before but he
                has a very jolly nature and he also educate you about the
                treatments and precautions for better gum and teeth health. I
                got dental implants done by him at his Palam Vihar Clinic in
                Gurgaon, though I stay in Delhi as someone suggested me from
                Dwarka. He has a completely different approach to his profession
                and we have become like friends now after multiple visits”
              </p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#007bff", // you can change to any color
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  SK {/* example initials */}
                </div>
              </div>
              <div className="luminix-t-author-data">
                <h6>Suneet Kumar Singh</h6>
                <p>Client</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image
                width={140}
                height={24}
                src={rating_img}
                alt="here is theme image"
              />
              <Image
                width={56}
                height={42}
                src={quote1_img}
                alt="here is theme image"
              />
            </div>
            <div className="luminix-t-content">
              <p>
                “Thanks to Dr Vinayak who has done my dental implant so smoothly
                for which I was very scared. His way of making me comfortable
                and fear free was commendable. I am very happy with his
                knowledge and experience. My overall treatment was very good and
                I will highly recommend him fir those looking for dental
                implants and braces.”
              </p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#007bff", // you can change to any color
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  AS {/* example initials */}
                </div>
              </div>
              <div className="luminix-t-author-data">
                <h6>Abhilasha Srivastava</h6>
                <p>Client</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image
                width={140}
                height={24}
                src={rating_img}
                alt="here is theme image"
              />
              <Image
                width={56}
                height={42}
                src={quote1_img}
                alt="here is theme image"
              />
            </div>
            <div className="luminix-t-content">
              <p>
                “I was 23 when I decided to go for braces, and Dr. Vinayak made
                the journey so comfortable. He gave me the option of ceramic
                braces and explained the pros and cons very transparently. Over
                the course of 15 months, I could see gradual but consistent
                improvements. Now I smile with confidence and couldn’t be
                happier. His follow-up care is exceptional.”
              </p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#007bff", // you can change to any color
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  RS {/* example initials */}
                </div>
              </div>
              <div className="luminix-t-author-data">
                <h6>Ritesh Singh</h6>
                <p>Client</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image
                width={140}
                height={24}
                src={rating_img}
                alt="here is theme image"
              />
              <Image
                width={56}
                height={42}
                src={quote1_img}
                alt="here is theme image"
              />
            </div>
            <div className="luminix-t-content">
              <p>
                Highly recommend! I’m really grateful to have been treated by
                such a skilled and caring clinic. My journey with braces wasn’t
                just about straightening teeth, it was about gaining confidence
                and improving my overbite. Thanks to Dr. Vinayak, his incredible
                attention to detail and thoughtful approach, and also and the
                wonderful team, I now smile more freely and happily than ever
                before 😁
              </p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#007bff", // you can change to any color
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  GK {/* example initials */}
                </div>
              </div>
              <div className="luminix-t-author-data">
                <h6>Gauri Karkhanis</h6>
                <p>Client</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
