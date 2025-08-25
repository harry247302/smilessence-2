"use client"
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon'
import ServiceRightArrawIcon from '@/svg/ServiceRightArrawIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// images import  
import thumb1_img from "@/assets/images/v1/thumb-01.png";
import thumb2_img from "@/assets/images/v1/thumb-02.png";
import icon1_img from "@/assets/images/iconbox/09.png";
import icon2_img from "@/assets/images/iconbox/01.png";
import icon3_img from "@/assets/images/iconbox/03.png";
import icon4_img from "@/assets/images/iconbox/10.png";

export default function ServiceHomeOne() {
  return (
    <>
      <div className="luminix-padding-section2 light-bg1">
        <div className="container">
          <div className="luminix-section-title">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8 col-12 mb-2 mb-lg-0">
                <h6>[Our Services]</h6>
                <h3 className="title pb-0 ml-20">Providing our services worldwide</h3>
              </div>
              <div className="col-xl-5 col-lg-4 col-12 d-flex align-items-center justify-content-lg-end justify-content-center">
                <div className="luminix-title-btn">
                  <Link href="/" className="luminix-default-btn pill">View All Solution 
                    <RightArrawWhitIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 g-md-5">
            {/* Service Cards Responsive Grid */}
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div className="luminix-list-icon-wraper h-100 d-flex flex-column flex-md-row align-items-center align-items-md-start p-3 rounded-4 shadow-sm bg-white">
                <div className="luminix-list-icon-icon2 mb-2 mb-md-0 me-md-3">
                  <Image width={60} height={60} src={icon1_img} alt="here is theme image" />
                </div>
                <div className="luminix-list-icon-data flex-grow-1 text-center text-md-start">
                  <Link href="/">
                    <h5 className="mb-1">Root Canal</h5>
                  </Link>
                  <p className="mb-2">A root canal treats infected tooth pulp, relieving pain and saving natural teeth.</p>
                </div>
                <div className="luminix-list-icon-btn ms-md-3 mt-2 mt-md-0">
                  <Link href="/">
                    <ServiceRightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div className="luminix-list-icon-wraper h-100 d-flex flex-column flex-md-row align-items-center align-items-md-start p-3 rounded-4 shadow-sm bg-white">
                <div className="luminix-list-icon-icon2 mb-2 mb-md-0 me-md-3">
                  <Image width={60} height={60} src={icon2_img} alt="here is theme image" />
                </div>
                <div className="luminix-list-icon-data flex-grow-1 text-center text-md-start">
                  <Link href="/">
                    <h5 className="mb-1">Dental Implants</h5>
                  </Link>
                  <p className="mb-2">Dental implants replace missing teeth with durable, natural-looking solutions for long-lasting smiles.</p>
                </div>
                <div className="luminix-list-icon-btn ms-md-3 mt-2 mt-md-0">
                  <Link href="/">
                    <ServiceRightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div className="luminix-list-icon-wraper h-100 d-flex flex-column flex-md-row align-items-center align-items-md-start p-3 rounded-4 shadow-sm bg-white">
                <div className="luminix-list-icon-icon2 mb-2 mb-md-0 me-md-3">
                  <Image width={60} height={60} src={icon3_img} alt="here is theme image" />
                </div>
                <div className="luminix-list-icon-data flex-grow-1 text-center text-md-start">
                  <Link href="/">
                    <h5 className="mb-1">All On 4 Implants</h5>
                  </Link>
                  <p className="mb-2">All-on-4 implants restore a full arch of teeth using just four strategically placed implants.</p>
                </div>
                <div className="luminix-list-icon-btn ms-md-3 mt-2 mt-md-0">
                  <Link href="/">
                    <ServiceRightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div className="luminix-list-icon-wraper h-100 d-flex flex-column flex-md-row align-items-center align-items-md-start p-3 rounded-4 shadow-sm bg-white">
                <div className="luminix-list-icon-icon2 mb-2 mb-md-0 me-md-3">
                  <Image width={60} height={60} src={icon4_img} alt="here is theme image" />
                </div>
                <div className="luminix-list-icon-data flex-grow-1 text-center text-md-start">
                  <Link href="/">
                    <h5 className="mb-1">All On 6 Implants</h5>
                  </Link>
                  <p className="mb-2">All-on-6 implants provide a full-arch tooth replacement using six strong, securely placed implants.</p>
                </div>
                <div className="luminix-list-icon-btn ms-md-3 mt-2 mt-md-0">
                  <Link href="/">
                    <ServiceRightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive styles */}
        <style jsx>{`
          @media (max-width: 991px) {
            .luminix-section-title h3.title {
              font-size: 1.2rem !important;
            }
            .luminix-list-icon-wraper {
              padding: 1.1rem !important;
            }
          }
          @media (max-width: 767px) {
            .luminix-section-title h3.title {
              font-size: 1.05rem !important;
            }
            .luminix-list-icon-wraper {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              padding: 0.9rem !important;
            }
            .luminix-list-icon-data {
              text-align: center !important;
            }
            .luminix-list-icon-btn {
              margin-left: 0 !important;
              margin-top: 0.7rem !important;
            }
          }
          @media (max-width: 600px) {
            .luminix-section-title h3.title {
              font-size: 0.98rem !important;
            }
            .luminix-list-icon-wraper {
              padding: 0.7rem !important;
            }
            .luminix-list-icon-data p {
              font-size: 0.92rem !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
