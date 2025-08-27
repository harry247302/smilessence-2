"use client";
import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import researchData, { ResearchItem } from "../../data/research-data";

const Achievements: React.FC = () => {
  const handleOpenPdf = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="container py-5">
      <div className="row g-4">
        {researchData.map((item: ResearchItem, index: number) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div
              className="card shadow-sm border-0 h-100 text-center position-relative overflow-hidden"
              style={{ cursor: "pointer" }}
              onClick={() => handleOpenPdf(item.pdf)}
            >
              {/* Thumbnail */}
              {item.thumbnail && (
                <div className="thumb-wrapper position-relative">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-100 h-100 object-fit-cover"
                    unoptimized // needed for external absolute URLs
                  />
                </div>
              )}

              {/* Title */}
              <div className="card-body d-flex align-items-center justify-content-center ">
                <h6 className="fw-bold">{item.title}</h6>
              </div>

              {/* Footer */}
              <div
                className="card-footer fw-semibold"
                style={{
                  background: "#7ec9e4",
                  color: "white",
                }}
              >
                Open PDF
              </div>

              {/* Hover Overlay */}
              <div className="overlay d-flex align-items-center justify-content-center">
                <Plus size={48} color="white" strokeWidth={3} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .thumb-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .card img {
          transition: transform 0.4s ease;
        }
        .card:hover img {
          transform: scale(1.05);
        }
        .card .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
