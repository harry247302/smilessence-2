"use client";
import { ServiceItem } from "@/data/service-data";

import ContactForm from "@/form/ContactForm";
import { FC, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

interface ServiceProps {
  service: ServiceItem;
}
const ServiceArea: FC<ServiceProps> = ({ service }) => {
  console.log(service, "||||||||||||||||||||||||||||||||||||||");

  const slides = [
    {
      videoUrl: "https://www.youtube.com/watch?v=SFraNgfNx80",
      thumbnailUrl:
        "/assets/images/smilessence-video-testimonial/smilessence-video-testimonial-1.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=-b2phUBJOZQ",
      thumbnailUrl:
        "/assets/images/smilessence-video-testimonial/smilessence-video-testimonial-2.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=My440XFFrA8",
      thumbnailUrl:
        "/assets/images/smilessence-video-testimonial/smilessence-video-testimonial-3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5000ms (5 seconds)

    return () => clearInterval(interval);
  }, [slides.length]); // Dependency array ensures the effect runs only if the number of slides changes.

  const currentSlideData = slides[currentSlide];

  // dr slider

  const doctors = [
    {
      name: "Dr. (Prof) Vineet Vinayak",
      qualification: "BDS, MDS - Conservative Dentistry & Endodontics",
      specialty: "Speciality – Endodontist, RCT & Implant Specialist",
      timing: "Mon - Sun: 08:30 AM - 08:30 PM",
      image: "/assets/images/about-us/dr.sir.png",
    },
    {
      name: "Dr. (Prof) Meenu Vinayak",
      qualification: "BDS, MDS - Prosthodontist & Crown Bridge",
      specialty: "Speciality - Crown Bridge & Dentures",
      timing: "Mon - Sun: 09:00 AM - 08:30 PM",
      image: "/assets/images/about-us/dr.mam.png",
    },
  ];

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    padding: "0",
    borderRadius: "6px",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    maxWidth: "320px",
    margin: "auto",
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: "#7b7b7b",
    textAlign: "center",
    padding: "20px",
  };

  const nameStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "18px",
    margin: "0",
  };

  const subTextStyle: React.CSSProperties = {
    color: "#d32f2f",
    fontSize: "14px",
    marginBottom: "10px",
  };

  const bodyStyle: React.CSSProperties = {
    padding: "20px",
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#dfdfdf80",
  };

  const bulletStyle: React.CSSProperties = {
    color: "#d32f2f",
    marginRight: "8px",
  };

  const imgStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  };

  const centerImg: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  };

  return (
    <section className="luminix-padding-section">
      <div className="container">
        <div className="row g-5">
          {/* Left Content */}
          <div className="col-lg-8 col-12">
            {service ? (
              <>
                <h3>{service.service_title}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          {/* Right Content */}
          <div className="col-lg-4 col-12">
            <div className="contact-side-box d-flex flex-column align-items-center align-items-lg-stretch gap-4">
              <div
                className="luminix-contat-us-thumb w-100 d-flex justify-content-center"
                data-aos="fade-up"
                data-aos-duration="700"
              ></div>
              <div className="luminix-contact-box w-100 mt-3">
                <div className="luminix-contact-title mb-2"></div>
                <ContactForm />
              </div>

              {/* carousel area */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    background: "url('./assets/images/oral-tips/bg1.jpg')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    fontFamily: "sans-serif",
                    // padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "1.5rem",
                      maxWidth: "24rem",
                      width: "100%",
                      textAlign: "center",
                      transition: "all 300ms",
                      transform: "scale(1)",
                    }}
                  >
                    {/* Video Thumbnail with Play Button */}
                    <div
                      style={{
                        position: "relative",
                        marginBottom: "1.5rem",
                        borderRadius: "0.75rem",
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                      onClick={() => window.open(currentSlideData.videoUrl)}
                    >
                      <img
                        src={currentSlideData.thumbnailUrl}
                        alt="Video Thumbnail"
                        style={{
                          width: "100%",
                          display: "block",
                          height: "auto",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          borderRadius: "9999px",
                          padding: "1rem",
                        }}
                      >
                        <i
                          className="bi bi-play-fill"
                          style={{
                            color: "white",
                            fontSize: "2rem",
                            margin: "auto",
                          }}
                        ></i>
                      </div>
                    </div>

                    {/* Navigation Dots */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "1.5rem",
                        gap: "0.5rem",
                      }}
                    >
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          style={{
                            height: "0.5rem",
                            width: "0.5rem",
                            borderRadius: "50%",
                            transition: "background-color 0.3s ease-in-out",
                            backgroundColor:
                              currentSlide === index ? "#1f2937" : "#9ca3af",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => goToSlide(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* carousel end */}

              <div className="container">
                <div className="d-flex align-items-start justify-content-start w-100">
                  <img
                    src="/assets/images/smilessence-video-testimonial/contact-us.png"
                    alt="smilessence"
                    className="img-fluid w-100"
                  />
                </div>
              </div>

              <div className="container mt-5">
                <Carousel
                  indicators={false}
                  controls={true}
                  interval={3000}
                  wrap={true}
                  pause={false}
                >
                  {doctors.map((doctor, index) => (
                    <Carousel.Item key={index}>
                      <div style={cardStyle}>
                        <div style={headerStyle}>
                          <div style={centerImg}>
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              style={imgStyle}
                            />
                          </div>
                        </div>
                        <div style={bodyStyle}>
                          <p style={nameStyle}>{doctor.name}</p>
                          <p style={subTextStyle}>{doctor.qualification}</p>
                          <p>
                            <span style={bulletStyle}>•</span>
                            Speciality – {doctor.specialty}
                          </p>
                          <p>
                            <span style={bulletStyle}>•</span>
                            {doctor.timing}
                          </p>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
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
          h4,
          h6 {
            font-size: 1rem !important;
          }
          ul,
          p {
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
          h4,
          h6 {
            font-size: 0.95rem !important;
          }
          ul,
          p {
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
