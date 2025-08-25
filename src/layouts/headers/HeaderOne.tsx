"use client";
import OffCanvas from "@/common/OffCanvas";
import menu_data from "@/data/menu-data";
import socialLinks from "@/data/socialLinks";
import useSticky from "@/hooks/use-sticky";
import RightArrawIcon from "@/svg/RightArrawIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// images import
import mail_icon from "@/assets/images/iconbox/mail.svg";
import location_icon from "@/assets/images/iconbox/location.svg";
import clock_icon from "@/assets/images/iconbox/clock.svg";
import logo_dark from "@/assets/images/logo/logo-dark.png";
import call_icon from "@/assets/images/iconbox/call-icon.svg";
import { Phone } from "lucide-react";

export default function HeaderOne() {
  const { sticky } = useSticky();
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`site-header luminix-header-section ${
          sticky ? "sticky-menu" : ""
        }`}
        id="sticky-menu position-absolute"
      >
        <div className="luminix-header-top bg-accent">
          <div className="cntainer" style={{ width: "99%", margin: "auto" }}>
            <div className="luminix-header-info-wraper">
              <div className="luminix-header-info-wrap">
                <div className="luminix-header-info-data">
                  <ul>
                    {/* <li>
                      <a href="mailto:name@email.com">
                        <Image
                          width={20}
                          height={16}
                          src={mail_icon}
                          alt="here is theme image"
                        />
                        support@gmail.com
                      </a>
                    </li> */}
                    <li>
                      <Image
                        width={17}
                        height={20}
                        src={location_icon}
                        alt="here is theme image"
                      />
                      SFF/ 102, KFF 102 KFF 103, Ansal Palam Triangle, (Next to
                      McDonald's) Palam Vihar, Gurgaon – 122017
                    </li>
                  </ul>
                </div>
              </div>
              <div className="luminix-header-info-and-social">
                <div className="luminix-header-info-data">
                  <ul>
                    <li>
                      <Image
                        width={20}
                        height={21}
                        src={clock_icon}
                        alt="here is theme image"
                      />
                      Open All Days : 09:00am to 8:30pm
                    </li>
                  </ul>
                </div>
                <div className="luminix-header-info-data">
                  <ul>
                    <li>+91 9811 303 933</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`cntainer transition-all duration-600  ${
            scrolled ? "bg-accent  shadow-md" : "bg-transparent"
          }`}
        >
          <div style={{ width: "90%", margin: "auto" }} className="cntainer">
            <div className="row gx-3 align-items-center justify-content-between">
              <div className="col-8 col-sm-auto ">
                <div className="header-logo1 d-flex justify-content-center align-items-center *:">
                  {/* <Link href="/"> */}
                  <Image
                    width={70}
                    src={logo_dark}
                    style={{ borderRadius: "100%" }}
                    alt="logo"
                  />
                  <h5 className="m-2" style={{ color: "white" }}>
                    Smilessence
                  </h5>
                  {/* </Link> */}
                </div>
              </div>
              <div className="col">
                <div className="luminix-main-menu-item">
                  <nav className="main-menu menu-style1 d-none d-xl-block menu-left">
                    <ul>
                      {menu_data.map((item, i) => (
                        <li
                          key={i}
                          className={`${
                            item.has_dropdown ? "menu-item-has-children" : ""
                          }`}
                        >
                          <Link
                            style={{ color: "white", fontWeight: "600" }}
                            href="/"
                          >
                            {item.title}
                          </Link>

                          {item.has_dropdown && (
                            <ul className="sub-menu">
                              {item.sub_menus?.map((sub_item, sub_i) => {
                                if ("has_inner_dropdown" in sub_item) {
                                  return (
                                    <li
                                      key={sub_i}
                                      className={`${
                                        sub_item.has_inner_dropdown
                                          ? "menu-item-has-children"
                                          : ""
                                      }`}
                                    >
                                      <Link
                                        href="/"
                                        className={`${
                                          sub_item.has_inner_dropdown
                                            ? "no-border"
                                            : ""
                                        }`}
                                      >
                                        {sub_item.title}
                                      </Link>
                                      {/* {sub_item.has_inner_dropdown && (
                                        <ul className="sub-menu">
                                          {sub_item.sub_menus?.map(
                                            (inner_sub_item, inner_sub_i) => (
                                              <li key={inner_sub_i}>
                                                <Link
                                                  href={
                                                   "#"
                                                  }
                                                >
                                                  {inner_sub_item.title}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )} */}
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={sub_i}>
                                      <Link href={ "#"}>
                                        {sub_item.title}
                                      </Link>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="luminix-header-info-wraper2">
                  <Link
                    style={{
                      // padding: "7px 30px",
                      backgroundColor: "white",
                    }}
                    className={`  container transition-all duration-600  ${
                      scrolled
                        ? "   text-black shadow-md rounded-5"
                        : "bg-transparent text-black"
                    }`}
                    href="/"
                  >
                    <p
                      style={{
                        color: "#7ec9e4",
                        padding: "5px 30px",
                        // fontWeight: 600,
                        borderRadius: "100px",
                        backgroundColor: "white",
                      }}
                    >
                      {" "}
                      Book An Appointment
                    </p>
                    {/* <RightArrawIcon /> */}
                  </Link>
                </div>
                <div className="luminix-header-menu">
                  <nav className="navbar site-navbar justify-content-between">
                    <button
                      className="luminix-menu-toggle d-inline-block d-xl-none"
                      onClick={() => setOpenMenu(!openMenu)}
                    >
                      <span></span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <OffCanvas setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </>
  );
}
