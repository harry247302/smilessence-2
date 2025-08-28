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

const testimonials = [
  {
    name: "Suneet Kumar Singh",
    initials: "SK",
    content:
      "One of the best Dental Surgeons in Delhi NCR and also the most experienced one. I have visited multiple dentists before but he has a very jolly nature and he also educate you about the treatments and precautions for better gum and teeth health. I got dental implants done by him at his Palam Vihar Clinic in Gurgaon, though I stay in Delhi as someone suggested me from Dwarka. He has a completely different approach to his profession and we have become like friends now after multiple visits",
  },
  {
    name: "Abhilasha Srivastava",
    initials: "AS",
    content:
      "Thanks to Dr Vinayak who has done my dental implant so smoothly for which I was very scared. His way of making me comfortable and fear free was commendable. I am very happy with his knowledge and experience. My overall treatment was very good and I will highly recommend him fir those looking for dental implants and braces.",
  },
  {
    name: "Ritesh Singh",
    initials: "RS",
    content:
      "I was 23 when I decided to go for braces, and Dr. Vinayak made the journey so comfortable. He gave me the option of ceramic braces and explained the pros and cons very transparently. Over the course of 15 months, I could see gradual but consistent improvements. Now I smile with confidence and couldn’t be happier. His follow-up care is exceptional.",
  },
  {
    name: "Gauri Karkhanis",
    initials: "GK",
    content:
      "Highly recommend! I’m really grateful to have been treated by such a skilled and caring clinic. My journey with braces wasn’t just about straightening teeth, it was about gaining confidence and improving my overbite. Thanks to Dr. Vinayak, his incredible attention to detail and thoughtful approach, and also and the wonderful team, I now smile more freely and happily than ever before ",
  },
];


export default function TestimonialHomeOne({ style_2 }: StyleProps) {
  return (
    <>
      <div className="luminix-padding-section3 light-bg1">
        <div className="container">
          <div className="luminix-section-title center">
            {/* {style_2 ? null : <h6>[Client Reviews]</h6>} */}
            <h2 className="title" style={{fontSize:"50px",margin:"auto"}}>Our Happy Clients Say</h2>
            <p className="text2">
              We have completed our projects seriously and have many positive
              client reviews that prove our expertise. Some of them are also
              mentioned here.
            </p>
          </div>
        </div>
        <div className="container" style={{ width: "95%", margin: "auto" }}>
          <div className="testimonial-grid-responsive">
            {testimonials.slice(0,4).map((item, index) => (
              <div key={index} className="lumini-t-wrap card-responsive">
                <div className="luminix-t-header">
                  <Image width={140} height={24} src={rating_img} alt="rating" />
                </div>
                <div className="luminix-t-content">
                  <p>{item.content}</p>
                </div>
                <div className="luminix-t-author d-flex align-items-center gap-3 mt-3">
                  <div className="luminix-t-author-thumb">
                    <div className="testimonial-initials-circle">{item.initials}</div>
                  </div>
                  <div className="luminix-t-author-data">
                    <h6 className="mb-0">{item.name}</h6>
                    <p className="mb-0" style={{ fontSize: '0.95em', color: '#888' }}>Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Responsive styles */}
        <style jsx>{`
          .testimonial-grid-responsive {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-top: 30px;
          }
          .card-responsive {
            padding: 20px;
            border-radius: 12px;
            background-color: #fff;
            min-width: 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-initials-circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #007bff;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            font-weight: bold;
            text-transform: uppercase;
          }
          .luminix-t-content p {
            font-size: 1rem;
            margin-bottom: 0.7rem;
          }
          @media (max-width: 991px) {
            .testimonial-grid-responsive {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .card-responsive {
              padding: 16px;
            }
          }
          @media (max-width: 600px) {
            .testimonial-grid-responsive {
              grid-template-columns: 1fr;
              gap: 14px;
            }
            .card-responsive {
              padding: 10px;
              border-radius: 8px;
            }
            .testimonial-initials-circle {
              width: 44px;
              height: 44px;
              font-size: 0.95rem;
            }
            .luminix-t-content p {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}
