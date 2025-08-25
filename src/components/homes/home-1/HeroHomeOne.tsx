"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RightArrawWhitIcon from "@/svg/RightArrawWhitIcon";

export default function HeroHomeOne() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="position-relative vh-100 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src="/assets/images/hero/hero-01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.5)" }}
        ></div>

        {/* Content */}
        <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 text-center text-white px-3">
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            className="display-3 fw-bold mb-3"
          >
            Best Family Dentist in India
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="900"
            className=" fw-bold text-white mb-3"
          >
            Best Family Dentist in India
          </h3>

          <p
            data-aos="fade-up"
            data-aos-duration="1100"
            style={{ width: "40%" }}
            className="lead mb-4"
          >
            Yes, we are talking about Smilessence. It is a one-stop solution to
            all your issues related to dental health. Whether you have got one
            issue or you want to opt for a routine check-up for keeping the
            issues at bay, Smilessence is the best option
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-duration="700">
            <Link
              href="/service"
              className="luminix-default-btn pill luminix-hero-btn inline-flex items-center"
            >
              View Our Services
              <RightArrawWhitIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* <div className="container z-5  top-12 inset-0 z-20 flex items-center h-full">
          <div className="text-black">
            <h5 data-aos="fade-up" data-aos-duration="700">
              [Welcome to Luminix]
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              className="hero-title"
            >
              Grow & manage your business
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text max-w-xl"
            >
              Welcome to luminix, a leading consulting firm with a strong
              history of excellence and innovation. With a passion for
              precision, efficiency and commitment to quality, we strive for
              outstanding service.
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-duration="700">
              <Link
                href="/service"
                className="luminix-default-btn pill luminix-hero-btn inline-flex items-center"
              >
                View Our Services
                <RightArrawWhitIcon />
              </Link>
            </div>
          </div>
        </div>  */}
    </>
  );
}
