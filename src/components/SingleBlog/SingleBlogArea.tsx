"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import service_data from "@/data/service-data";
import Head from "next/head";
import { MoveHorizontal } from "lucide-react";

const SingleBlogArea = () => {
  const slides = [
    {
      title: "Oral Tips",
      text: "Dentists say that the most important part of tooth care happens at home. Brushing and flossing properly, along with regular dental checkups, can help prevent tooth decay and gum disease.",
    },
    {
      title: "Oral Tips",
      text: "Dentists say that the most important part of tooth care happens at home. Brushing and flossing properly, along with regular dental checkups, can help prevent tooth decay and gum disease.",
    },
    {
      title: "Oral Tips",
      text: "Dentists say that the most important part of tooth care happens at home. Brushing and flossing properly, along with regular dental checkups, can help prevent tooth decay and gum disease.",
    },
  ];

  // State to keep track of the current active slide index.
  const [currentSlide, setCurrentSlide] = useState(0);

  // A function to handle navigation when a dot is clicked.
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // useEffect to handle auto-sliding of the carousel.
  // The interval will advance the slide every 5 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide, or wrap around to the first slide.
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5000ms (5 seconds)

    // Cleanup function to clear the interval when the component unmounts.
    // This prevents memory leaks.
    return () => clearInterval(interval);
  }, [slides.length]); // Dependency array ensures the effect runs only if the number of slides changes.

  // Get the current slide's data from the slides array.
  const currentSlideData = slides[currentSlide];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const beforeRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    const slider = sliderRef.current;
    const divider = dividerRef.current;
    const before = beforeRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !slider || !divider || !before) return;

      const rect = slider.getBoundingClientRect();
      const x = e.clientX - rect.left;

      if (x >= 0 && x <= rect.width) {
        divider.style.left = `${x}px`;
        before.style.width = `${x}px`;
      }
    };

    const handleMouseDown = () => {
      isDraggingRef.current = true;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    if (slider) {
      slider.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);

  return (
    <div className="luminix-padding-section" style={{paddingBottom:"0px !important"}}>
      <div className="container">
        <h3 className="text-center">
          Get the <span style={{ color: "#7ec9e4" }}>Best Treatment</span> for{" "}
          <span style={{ color: "#7ec9e4" }}>Oral Health</span> Issues at <br />{" "}
          Smilessence - The Specialist Dental Centre
        </h3>
        <p className="text-center w-64 mt-3">
          Dental health is something really important in order to maintain the
          quality of your life. Almost everyone has faced several issues in
          their daily lives. Different issues are related to different organs of
          the human body. Some may disturb us less while the other issues might
          be a nightmare. The biggest problem with our dental/oral health is the
          fact that we are not usually serious about it. The majority of people
          ignore symptoms associated with oral health. This is simply because
          people don’t face issues in the beginning but the problem might be
          severe later on. Your attention to the minute oral health issues is
          really important.Several people are willing to get themselves checked
          up but they are not able to do so because they are usually confused.
          But things will get really better once you have found the right
          option. Smilessence - The Specialist Dental Centre is the perfect
          blend of modern technology and highly-skilled individuals.
        </p>
      </div>
      <div className="container py-5">
        <div className="row">
          {service_data.map((service, index) => (
            <Link href={`service/${service?.service_title}`} key={index}>
              <div
                className="col-md-4 col-12 mb-4"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="card text-white service-card-responsive"
                  style={{
                    overflow: "hidden",
                    cursor: "pointer",
                    minHeight: 340,
                    position: "relative",
                  }}
                >
                  {/* Image block */}
                  <div
                    style={{
                      overflow: "hidden",
                      height: "300px",
                      position: "relative",
                    }}
                  >
                    {typeof service.default_image === "string" ? (
                      <img
                        src={service.default_image}
                        alt={service.service_title}
                        className="card-img"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          transform:
                            hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    ) : (
                      <Image
                        src={service.default_image}
                        alt={service.service_title}
                        width={400}
                        height={300}
                        className="card-img"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          transform:
                            hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                          transition: "transform 1.5s ease",
                        }}
                      />
                    )}

                    {/* Gradient overlay only at bottom */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "100%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 60%)",
                      }}
                    />
                  </div>

                  {/* Text content */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "1rem",
                      zIndex: 2,
                    }}
                  >
                    <h5 className="card-title">{service.service_title}</h5>
                    {/* <p className="card-text">{service.description}</p> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Inline responsive styles */}
        <style jsx>{`
          .service-card-responsive {
            min-width: 0;
          }

          @media (max-width: 991px) {
            .service-card-responsive {
              margin-bottom: 1.5rem !important;
            }
          }

          @media (max-width: 767px) {
            .card-img {
              height: 200px !important;
            }
          }

          @media (max-width: 600px) {
            .card-img {
              height: 140px !important;
              border-radius: 8px !important;
            }
          }
        `}</style>
      </div>
      {/* Before/After Slider */}
      <div>
        <div className="text-center py-5">
          <Head>
            <title>Smile Care</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>

          <h3 className="fw-bold">
            <span style={{ color: "#000" }}>Custom care</span>{" "}
            <span style={{ color: "#e50914" }}>for every patient</span>
          </h3>
          <p className="lead">
            See how a new <strong>smile can change your life</strong>
          </p>

          <div
            ref={sliderRef}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              margin: "40px auto",
              overflow: "hidden",
              cursor: "ew-resize",
            }}
          >
            {/* After Image (full background) */}
            <img
              src="/assets/images/teeth-slider/teeth-2.jpg"
              alt="After"
              style={{
                width: "100%",
                display: "block",
              }}
            />

            {/* Before image (top overlay) */}
            <div
              ref={beforeRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                overflow: "hidden",
                zIndex: 2,
              }}
            >
              <img
                src="/assets/images/teeth-slider/teeth-1.jpg"
                alt="Before"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Slider Divider */}
            <div
              ref={dividerRef}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // center the circle
                width: "40px",
                height: "40px",
                background: "#fff",
                borderRadius: "50%", // makes it circular
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 4px rgba(0,0,0,0.3)", // optional: adds some depth
                cursor: "pointer",
              }}
            >
              <MoveHorizontal size={16} />
            </div>
          </div>

          <button className="oral-tips-cta-btn">Get a smile</button>

          <style jsx>{`
            .oral-tips-cta-btn {
              // width: 100%;
              padding: 0px 5px;
              border-radius: 9999px;
              color: #1f2937;
              font-weight: 500;
              border: 2px solid #9ca3af;
              cursor: pointer;
              background-color: white;
              transition: background-color 0.2s, color 0.2s;
            }

            .oral-tips-cta-btn:hover {
              background-color: red;
              color: white;
              border: none;
            }
          `}</style>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            background: "url('./assets/images/oral-tips/bg1.jpg')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontFamily: "sans-serif",
            padding: "1rem",
            // zIndex: -9,
          }}
        >
          {/* The main card container with rounded corners and shadow. */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "1.5rem",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              maxWidth: "24rem",
              width: "100%",
              textAlign: "center",
              border: "1px solid #e5e7eb",
              transitionProperty: "all",
              transitionDuration: "300ms",
              transform: "scale(1)",
            }}
          >
            {/* Title section with a red "Oral" and black "Tips". */}
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              <span style={{ color: "#ef4444" }}>Oral</span>
              <span style={{ color: "#111827" }}> Tips</span>
            </h1>

            {/* The paragraph of text for the current slide. */}
            <p
              style={{
                fontSize: "1rem",
                color: "#4b5563",
                marginBottom: "2rem",
                lineHeight: "1.625",
              }}
            >
              {currentSlideData.text}
            </p>

            {/* Navigation dots for the carousel. */}
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

            {/* The call-to-action button. */}
            <button
              style={{
                width: "100%",
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                color: "#1f2937",
                fontWeight: "500",
                border: "2px solid #9ca3af",
                cursor: "pointer",
                transition: "background-color 0.2s",
                backgroundColor: "white",
              }}
            >
              Schedule now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogArea;
