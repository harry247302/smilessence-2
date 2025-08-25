"use client";
import VideoPopup from "@/modals/video-popup";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import advancedLaserIcon from "@/assets/images/v1/thumb-03.png";
import tScanIcon from "@/assets/images/v1/icon10.png";
import printerIcon from "@/assets/images/v1/icon11.png";
import scannerIcon from "@/assets/images/v1/icon12.png";
import thumb_img from "@/assets/images/v1/worldinfra1.jpg.jpeg";
import play_img from "@/assets/images/v2/play-btn1.svg";

export default function WhyChooseHomeOne() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const equipment = [
    { name: "Advanced Lasers", icon: advancedLaserIcon },
    { name: "T Scan System", icon: tScanIcon, active: true }, // active one
    { name: "3D Printer", icon: printerIcon },
    { name: "3 Shape Scanner", icon: scannerIcon },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === equipment.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 1 second

    return () => clearInterval(interval);
  }, [equipment.length]);

  return (
    <>
      <div
        className="luminix-padding-section"
        style={{
          position: "relative",
          backgroundImage: `url(${thumb_img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px", // adjust as needed
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Dark Overlay */}

        {/* Content on top */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
          }}
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="luminix-default-content">
                <h2 style={{ fontSize: "50px" }} className="title">Worldclass infrastructure</h2>
                <p className="text">
                  Maintaining good oral hygiene and oral health is an important
                  way to stay healthy, not just because you feel better and look
                  better with healthy teeth, but also because your dental health
                  is intricately tied to the health of other systems in your
                  body.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                    gap: "24px",
                    marginTop: "20px",
                  }}
                >
                  {equipment.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        borderRadius: "10px",
                        padding: "16px",
                        cursor: "pointer",
                        background:
                          index === activeIndex ? "white" : "rgba(255,255,255,0.1)",
                        boxShadow:
                          index === activeIndex ? "0px 4px 12px rgba(0,0,0,0.25)" : "none",
                        transition: "all 0.4s ease",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: index === activeIndex ? "black" : "white",
                        minHeight: "150px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <Image src={item.icon} alt={item.name} />
                      </div>
                      <p
                        style={{
                          fontSize: "17px",
                          textAlign: "center",
                          lineHeight: "25px",
                          fontWeight: 600,
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
