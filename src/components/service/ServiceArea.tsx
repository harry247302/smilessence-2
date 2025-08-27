"use client"
import Link from "next/link";
import Image from "next/image";
// import ContactForm from '@/form/ContactForm';
import service_data, { ServiceItem } from "@/data/service-data";
import RightArrawSmallIcon from "@/svg/RightArrawSmallIcon";
import contact2_img from "@/assets/images/contact-us/contact2.png";
import call_img from "@/assets/images/contact-us/call.svg";
import email_img from "@/assets/images/contact-us/email.svg";
import location_img from "@/assets/images/contact-us/location.svg";
import ContactForm from "@/form/ContactForm";
import service_data_two from "@/data/service-data-two";
import { FC, useEffect, useState } from "react";
import { log } from "node:console";
import { usePathname } from "next/navigation";
interface ServiceProps {
  service: ServiceItem;
}
const ServiceArea: FC<ServiceProps> = ({service}) => {
  console.log(service,"||||||||||||||||||||||||||||||||||||||");
  


  return (
    <section className="luminix-padding-section">
      <div className="container">
        <div className="row g-5">
          {/* Left Content */}
          <div className="col-lg-8 col-12">
            {service ?  (
              <>
                <h3>{service.service_title}</h3>
                <div dangerouslySetInnerHTML={{ __html: service.description }} />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          {/* Right Content */}
          <div  className="col-lg-4 col-12">
            <div className="contact-side-box d-flex flex-column align-items-center align-items-lg-stretch gap-4">
              <div
                className="luminix-contat-us-thumb w-100 d-flex justify-content-center"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                {/* You can add an image or any other content here */}
              </div>
              <div className="luminix-contact-box w-100 mt-3">
                <div className="luminix-contact-title mb-2">
                  {/* Optional Title for Contact Form */}
                  {/* <h2 className="title pb-0 pt-0">Fill the form below:</h2> */}
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        

      </div>
      {/* Responsive styles */}
      <style jsx>{`
        .luminix-padding-section {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .contact-side-box {
          min-width: 0;
        }
        @media (max-width: 991px) {
          .luminix-padding-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          h2 {
            font-size: 1.5rem !important;
          }
        }
        @media (max-width: 767px) {
          .luminix-padding-section {
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
          }
          h2 {
            font-size: 1.2rem !important;
          }
          h4, h6 {
            font-size: 1rem !important;
          }
          ul, p {
            font-size: 0.97rem !important;
          }
          .contact-side-box {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1.2rem !important;
          }
        }
        @media (max-width: 600px) {
          .luminix-padding-section {
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
          }
          h2 {
            font-size: 1.05rem !important;
          }
          h4, h6 {
            font-size: 0.95rem !important;
          }
          ul, p {
            font-size: 0.93rem !important;
          }
          .luminix-contat-us-thumb img {
            max-width: 100% !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceArea;
