"use client";

import Image from "next/image";
import { useState } from "react";

import blog15_img from "@/assets/images/blog/blog16.png";
import Link from "next/link";
import service_data from "@/data/service-data";

const SingleBlogArea = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div className="luminix-padding-section">
      <div className="container">
          <h3 className="text-center">Get the <span style={{color:"#7ec9e4"}}>Best Treatment</span> for <span style={{color:"#7ec9e4"}} >Oral Health</span>  Issues at <br /> Smilessence - The Specialist Dental Centre</h3>
      <p className="text-center w-64 mt-3" >Dental health is something really important in order to maintain the quality of your life. Almost everyone has faced several issues in their daily lives. Different issues are related to different organs of the human body. Some may disturb us less while the other issues might be a nightmare. The biggest problem with our dental/oral health is the fact that we are not usually serious about it. The majority of people ignore symptoms associated with oral health. This is simply because people don’t face issues in the beginning but the problem might be severe later on. Your attention to the minute oral health issues is really important.Several people are willing to get themselves checked up but they are not able to do so because they are usually confused. But things will get really better once you have found the right option. Smilessence - The Specialist Dental Centre is the perfect blend of modern technology and highly-skilled individuals.</p>
    
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
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 60%)",
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
    </div>
  );
};

export default SingleBlogArea;
