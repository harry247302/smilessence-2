"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Carousel } from "react-bootstrap";
import doctorData, { Doctor } from "@/data/doctor-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import AwardsCarousel from "../Awards/Awards";

export default function AboutArea() {
  return (
    <>
      {/* --- Existing About Section --- */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">From our family to yours</h4>
            <p>
              On Smilessence, you will find an abundance of information about
              our practice, procedures we provide, and dentistry in general.
            </p>
            <p>
              You can also schedule an appointment through our website or even
              by calling us on the mentioned numbers. We work hard to ensure
              your visit is comfortable and relaxing.
            </p>

            <div className="d-flex gap-4 mt-4">
              <div>
                <div className="d-flex align-items-center">
                  <h5
                    className="fw-bold mb-0"
                    style={{ color: "var(--accent-bg)" }}
                  >
                    <CountUp end={25} duration={3} />
                  </h5>
                  <span
                    className="fw-bold ms-1"
                    style={{ color: "var(--accent-bg)", fontSize: "1rem" }}
                  >
                    +
                  </span>
                </div>
                <p>Years of Experience</p>
              </div>

              <div>
                <div className="d-flex align-items-center">
                  <h5
                    className="fw-bold mb-0"
                    style={{ color: "var(--accent-bg)" }}
                  >
                    <CountUp end={50000} duration={4} separator="," />
                  </h5>
                  <span
                    className="fw-bold ms-1"
                    style={{ color: "var(--accent-bg)", fontSize: "1rem" }}
                  >
                    +
                  </span>
                </div>
                <p>Happy Patients</p>
              </div>

              <div>
                <div className="d-flex align-items-center">
                  <h5
                    className="fw-bold mb-0"
                    style={{ color: "var(--accent-bg)" }}
                  >
                    <CountUp end={14} duration={3} />
                  </h5>
                  <span
                    className="fw-bold ms-1"
                    style={{ color: "var(--accent-bg)", fontSize: "1rem" }}
                  >
                    +
                  </span>
                </div>
                <p>Treatments</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column gap-4">
            {/* Leading Edge */}
            <div className="text-start">
              <Image
                src="/assets/images/about-us/blub.png"
                alt="Leading Edge"
                width={60}
                height={60}
                className="mb-3"
              />
              <h5 className="fw-bold" style={{ color: "var(--accent-bg)" }}>
                Leading Edge
              </h5>
              <p className="mb-0">
                We at smilessence choose to be on the leading edge of our
                profession through constant association with leaders and
                teachers of excellence.
              </p>
            </div>

            {/* Open to Challenges */}
            <div className="text-start">
              <Image
                src="/assets/images/about-us/target.png"
                alt="Open to Challenges"
                width={60}
                height={60}
                className="mb-3"
              />
              <h5 className="fw-bold" style={{ color: "var(--accent-bg)" }}>
                Open to Challenges
              </h5>
              <p className="mb-0">
                We claim the privilege and responsibility to dream, to make
                things happen, and to resolve challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- New Doctor Bio Section --- */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <Image
                src="/assets/images/about-us/dr.sir.png"
                alt="Dr. Vineet Vinayak"
                width={400}
                height={400}
                className="rounded shadow-lg object-cover"
              />
            </div>
            {/* Left Side - Text */}
            <div className="col">
              <div className="content">
                {/* Scrollable bio box */}
                <div className="bio-scroll p-3">
                  <div className="quote mb-3">
                    <img
                      src="assets/images/about-us/quote.png"
                      alt="Quote Icon"
                    />
                  </div>

                  <p>
                    <strong>Dr. Vineet Vinayak</strong> graduated in 1997 from
                    Govt Dental College and Hospital, Amritsar, Punjab. After
                    working as Junior Resident (Dental OPD/Casualty) at All
                    India Institute of Medical Sciences (AIIMS), New Delhi, he
                    pursued his postgraduate Masters (MDS) in Endodontics from
                    Ragas Dental College, Chennai.
                  </p>
                  <p>
                    He worked as a Senior Resident at AIIMS, Delhi as a Root
                    Canal Specialist and later trained at renowned institutes in
                    the UK, including Cardiff Dental School (Wales), Eastman
                    Dental Institute (London), Kings Dental College (London),
                    and Edinburgh Dental College (Glasgow).
                  </p>
                  <p>
                    After clearing the International Qualifying Examinations
                    (Part A) under the General Dental Council, London, and
                    gaining specialization in implants—particularly zygomatic
                    implants for denture failure patients—Dr. Vinayak briefly
                    worked as a Consultant Endodontist at Apollo Clinic, East of
                    Kailash, New Delhi, and Aggarwal Hospital, Delhi. In 2005,
                    he co-founded his own Centre of Excellence with his wife,
                    Dr. Meenu Vinayak (MDS in Crowns, Bridges, and Dentures).
                  </p>

                  <h5>Career Highlights</h5>
                  <ul className="list-disc">
                    <li style={{ listStyle: "disc" }}>
                      Ex Junior Resident – AIIMS, New Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Senior Resident – AIIMS, New Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Consultant – Apollo Clinic, East of Kailash, New Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Consultant – Aggarwal Hospital, Shakti Nagar, Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Associate Professor – ESIC Govt Dental College &amp;
                      Hospital
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Edinburgh Dental Hospital
                    </li>
                  </ul>

                  <h5>Specialist Training</h5>
                  <ul className="list-disc">
                    <li style={{ listStyle: "disc" }}>
                      Eastman Dental Institute, London, UK
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Cardiff Dental Institute, Cardiff, Wales, UK
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Kings Dental Institute, London, UK
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Edinburgh Dental Hospital, Glasgow, UK
                    </li>
                  </ul>

                  <h5>Specialist Expertise (15+ Years)</h5>
                  <ul className="list-disc">
                    <li style={{ listStyle: "disc" }}>Endodontics</li>
                    <li style={{ listStyle: "disc" }}>
                      Root Canal Treatment (RCT)
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Dental Implants (including Zygomatic Implants)
                    </li>
                  </ul>

                  <div className="signature mt-3">
                    <img
                      src="assets/images/about-us/dr.sir.sign.png"
                      alt="Dr. Vineet Vinayak Signature"
                    />
                  </div>
                  <div className="designation">
                    <strong>BDS, MDS</strong> - Conservative Dentistry &amp;
                    Endodontics
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text */}
            <div className="col">
              <div className="content">
                {/* Scrollable bio box */}
                <div className="bio-scroll p-3">
                  <div className="quote mb-3">
                    <img
                      src="assets/images/about-us/quote.png"
                      alt="Quote Icon"
                    />
                  </div>

                  <p>
                    <strong>Dr. Meenu Jain Vinayak</strong> is a specialist in
                    crowns, bridges and dentures. She has worked with many
                    renowned organizations such as Apollo (East Kailash), Max
                    Hospital (Pritampura) and Aggarwal Hospital to name a few.
                    In 2005, she started her own Centre of Excellence along with
                    her husband Dr Vineet Vinayak, who is also an MDS with
                    specialization in root canal and dental implants.
                  </p>

                  <h5>Career Highlights</h5>
                  <ul className=" list-disc">
                    <li style={{ listStyle: "disc" }}>
                      Ex Consultant – Apollo East of Kailash, New Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Consultant – Max Hospital Pritampura, New Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Consultant – Apollo Clinic, East of Kailash, New Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Consultant – Aggarwal Hospital, New Delhi
                    </li>
                  </ul>

                  <h5>Specialist Expertise (15+ Years)</h5>
                  <ul className="list-disc">
                    <li style={{ listStyle: "disc" }}>
                      Consultant – Max Hospital Pritampura, New Delhi
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Crown Bridge & Dentures
                    </li>
                    <li style={{ listStyle: "disc" }}>
                      Denture and Full mouth Rehabilitation
                    </li>
                  </ul>

                  <div className="signature mt-3">
                    <img
                      src="assets/images/about-us/dr.mam.sign.png"
                      alt="Dr. Vineet Vinayak Signature"
                    />
                  </div>
                  <div className="designation">
                    <strong>BDS, MDS</strong> - BDS, MDS - Prosthodontist &
                    &amp; Crown Bridge
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-md-5 text-center">
              <Image
                src="/assets/images/about-us/dr.mam.png"
                alt="Dr. Meenu Jain Vinayak"
                width={400}
                height={400}
                className="rounded shadow-lg object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container text-center my-5">
        <h3>Certificates</h3>
      </div>
      <AwardsCarousel />

      {/* --- Our Dentists Section (Carousel) --- */}
      <section className="container py-5">
        <div className="text-center mb-4">
        <h2>Our Dentists</h2>
        <span>Our Dental Clinic has two dental experts available for your convenience:</span>
        </div>
        <Carousel interval={null} indicators={false} controls>
          {doctorData.map((doctor: Doctor) => (
            <Carousel.Item key={doctor.id}>
              <div className="row align-items-center">
                {/* Left - Image */}
                <div className="col-md-5 text-center">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={400}
                    className="rounded shadow-lg object-cover"
                  />
                  {doctor.profileUrl && (
                    <a
                      href={doctor.profileUrl}
                      download
                      className="btn btn-link mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Profile
                    </a>
                  )}
                </div>

                {/* Right - Info */}
                <div className="col-md-7 p-4 rounded text-black" >
                  <h4 className="fw-bold">{doctor.name}</h4>
                  <p>
                    <strong>Speciality:</strong> {doctor.speciality}
                  </p>
                  <p>
                    <strong>Education:</strong> {doctor.education}
                  </p>
                  <p>
                    <strong>Work Days:</strong> {doctor.workDays}
                  </p>
                  <p>
                    <strong>Time:</strong> {doctor.workTime}
                  </p>
                  <p>{doctor.bio}</p>

                  {/* Buttons */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex gap-3">
                      {doctor.socials?.facebook && (
                        <a
                          href={doctor.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                      )}
                      {doctor.socials?.twitter && (
                        <a
                          href={doctor.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                      )}
                      {doctor.socials?.instagram && (
                        <a
                          href={doctor.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                      )}
                      {doctor.socials?.youtube && (
                        <a
                          href={doctor.socials.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                      )}
                    </div>
                    <button className="btn btn-outline-light">
                      View Complete Profile
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

    </>
  );
}
