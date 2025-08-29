"use client";
import menu_data from "@/data/menu-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface OffCanvasProps {
  setOpenMenu: (value: boolean) => void;
  openMenu: boolean;
}

const OffCanvas = ({ setOpenMenu, openMenu }: OffCanvasProps) => {
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menu: string) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  return (
    <>
      <div

        className={`luminix-menu-wrapper ${openMenu ? "luminix-body-visible" : ""
          }`}
      >
        <div className="luminix-menu-area d-flex" style={{
          backgroundImage: `url("/assets/images/portfolio/17658.webp")`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
        }}>
          {/* LEFT SIDE IMAGE + CONTACT INFO */}
          <div className="hide-navbar col-md-6 d-flex align-items-center justify-content-center bg-cover text-white p-4 position-relative"
            style={{
              backgroundImage: `url("/assets/images/portfolio/young-female-patient-visiting-dentist-office.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: "20px",
              borderRadius: "12px", width: "400px", border: "0.1px solid white"
            }} className="   text-dark py-5 ">
              <h5 className="fw-bold text-uppercase" style={{ fontSize: "10px", textAlign: "center" }}>Contact</h5>
              <p className="mb-1 mt-3" style={{ textAlign: "center", fontSize: "15px" }}>
                A – 738, Sushant Lok 1 Rd, Block A,<br />
                Sushant Lok Phase I, Sector 43, <br />
                Gurugram, Haryana 122001
              </p>
              <p className="" style={{ textAlign: "center", fontSize: "15px" }}>+91-9650440004</p>
              <div className="mb-3" style={{ textAlign: "center", fontSize: "15px" }}>
                <Link style={{ color: "black" }} href="#">Careers</Link> |{" "}
                <Link style={{ color: "black" }} href="#">Contact</Link> |{" "}
                <Link style={{ color: "black" }} href="#">FAQ’s</Link>
              </div>



              {/* Button */}
              <div className="d-flex justify-content-center">
                <button style={{ fontWeight: "100", fontSize: "12px", width: "200px", margin: "auto" }} className="btn btn-dark  ">
                  Book an Appointment
                </button>
              </div>
            </div>


          </div>
          {/* CLOSE BUTTON */}
          <button
            className="position-absolute top-0 start-0 m-3 rounded-circle"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255,255,255,0.2)", width: "40px", height: "40px"
            }}
            onClick={() => setOpenMenu(false)}
          >
            ✕
          </button>
          {/* RIGHT SIDE NAVIGATION */}
          <div
            className="col-md-6 w-100 d-flex align-items-center justify-content-center ">
            <div className="luminix-mobie-menu w-75">
              <ul className="list-unstyled">
                {menu_data.map((item, i) => (
                  <li
                    key={i}
                    className={`d-flex align-items-center gap-2 p-2 mb-2 rounded ${navTitle === item.title ? "bg-light fw-bold" : ""
                      }`}
                  >
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      backgroundColor: "#f9f9f9",
                      cursor: "pointer"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>
                    </div>

                    <Link
                      className="bg"
                      style={{ fontSize: "13px" }}
                      href={item.link}
                      onClick={() => openMobileMenu(item.title)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
