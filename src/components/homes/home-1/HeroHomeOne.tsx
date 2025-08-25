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
      <section className="position-relative min-vh-100 overflow-hidden d-flex align-items-center" style={{ minHeight: '100vh' }}>
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover", minHeight: '100%', minWidth: '100%' }}
        >
          <source src="/assets/images/hero/hero-01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.5)", minHeight: '100%', minWidth: '100%' }}
        ></div>

        {/* Content */}
        <div
          className="position-relative d-flex flex-column justify-content-center align-items-center w-100 h-100 text-center text-white px-3"
          style={{ zIndex: 2 }}
        >
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            className="fw-bold mb-3"
            style={{
              fontSize: '2.2rem',
              lineHeight: 1.1,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              maxWidth: '95vw',
            }}
          >
            Best Family Dentist in India
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="900"
            className="fw-bold text-white mb-3"
            style={{
              fontSize: '1.2rem',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              maxWidth: '90vw',
            }}
          >
            Best Family Dentist in India
          </h3>

          <p
            data-aos="fade-up"
            data-aos-duration="1100"
            className="lead mb-4 mx-auto"
            style={{
              width: '100%',
              maxWidth: 600,
              fontSize: '1rem',
              textShadow: '0 1px 4px rgba(0,0,0,0.2)',
            }}
          >
            Yes, we are talking about Smilessence - The Specialist Dental Centre. It is a one-stop solution to
            all your issues related to dental health. Whether you have got one
            issue or you want to opt for a routine check-up for keeping the
            issues at bay, Smilessence - The Specialist Dental Centre is the best option
          </p>
          <div className="mt-4 mt-md-5" data-aos="fade-up" data-aos-duration="700">
            <Link
              href="/service"
              className="luminix-default-btn pill luminix-hero-btn d-inline-flex align-items-center px-4 py-2"
              style={{ fontSize: '1rem', borderRadius: 30 }}
            >
              View Our Services
              <RightArrawWhitIcon />
            </Link>
          </div>
        </div>

        {/* Responsive styles */}
        <style jsx>{`
          @media (max-width: 991px) {
            h1 {
              font-size: 1.7rem !important;
            }
            h3 {
              font-size: 1rem !important;
            }
            p.lead {
              font-size: 0.95rem !important;
              max-width: 90vw !important;
            }
          }
          @media (max-width: 600px) {
            h1 {
              font-size: 1.2rem !important;
            }
            h3 {
              font-size: 0.9rem !important;
            }
            p.lead {
              font-size: 0.9rem !important;
              max-width: 98vw !important;
            }
            .luminix-default-btn {
              font-size: 0.95rem !important;
              padding: 0.5rem 1.2rem !important;
            }
          }
        `}</style>
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
