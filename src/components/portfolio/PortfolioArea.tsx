"use client";
import portfolio_data from "@/data/portfolio-data";
import RightArrawWhitIcon from "@/svg/RightArrawWhitIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export const portfolio_filters = [
  { label: "All", value: "*" },
  { label: "Business", value: "business" },
  { label: "Consulting", value: "consultancy" },
  { label: "Creative", value: "security" },
];




export default function PortfolioArea() {

  const [activeFilter, setActiveFilter] = useState("*");

  const filteredData = activeFilter === "*"
    ? portfolio_data
    : portfolio_data.filter(item => item.categories.includes(activeFilter));



  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <div className="luminx-section-title ">
            <h2 style={{fontSize:"50px",textAlign:"center"}}>Dedicated Team of International Customer Care</h2>
            <p style={{textAlign:"center",marginTop:"10px"}}>At Smilessence - The Specialist Dental Centre, we have a dedicated team along with experienced support staff who carefully plan and coordinate treatments for our international patients, including visitors from overseas and NRIs. Our facilitation team consists of the clinic director, a dental tourism coordinator, an organizer, and a supervising doctor who together ensure smooth planning and exceptional care for every patient.</p>
            <div className="luminix-portfolio-menu mt-50">
              <ul id="watch-filter-gallery" className="option-set clear-both" data-option-key="filter">
                {/* {portfolio_filters.map((filter, i) => (
                  <li
                    key={filter.value}
                    className={`wow fadeInUpX ${activeFilter === filter.value ? "active" : ""}`}
                    data-wow-delay={`0.${i + 1}s`}
                    onClick={() => setActiveFilter(filter.value)}
                    style={{ cursor: "pointer" }}
                  >
                    {filter.label}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
          <div className="row luminix-portfolio-column" id="luminix-portfolio-grid">

            {filteredData.map((item) => (
              <div key={item.id} className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 collection-grid-item ${item.categories.join(" ")}`}>
                <div className="luminix-p-wrap wrap2">
                  <div className="luminix-p-thumb">
                    <Image width={item.width} height={item.height} src={item.image} alt={item.title} />
                    {/* <div className="luminix-p-content">
                      <h5>{item.title}</h5>
                      <div className="luminix-p-btn">
                        <Link href={item.href}>
                          <RightArrawWhitIcon />
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}



          </div>
        </div>
      </div>
    </>
  )
}
