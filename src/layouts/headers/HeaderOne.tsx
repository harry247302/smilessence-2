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
import { useRouter } from "next/navigation";

export default function HeaderOne() {
  const { sticky } = useSticky();
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter()
  
  const handleClick = (value:string)=>{
  router.push(`${value}`)
}

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
          <div className="cotainer" style={{ width: "99%", margin: "auto" }}>
            <div className="luminix-header-info-wraper">
              <div className="luminix-header-info-wrap" style={{width:"100%"}} >
                <div className="luminix-header-info-data" style={{width:"100%"}}>
                  <ul style={{display:"flex",alignContent:"center",justifyContent:"space-between",width:"100%"}}>
                
                   <div>
                     <li >
                      <Image
                        width={17}
                        height={20}
                        src={location_icon}
                        alt="here is theme image"
                      />
                      SFF/ 102, KFF 102 KFF 103, Ansal Palam Triangle, (Next to
                      McDonald's) Palam Vihar, Gurgaon – 122017
                    </li>
                      
                   </div>
                      <div>
                         <li>
                      <Image
                        width={20}
                        height={21}
                        src={clock_icon}
                        alt="here is theme image"
                      />
                      Open All Days : 09:00am to 8:30pm
                    </li>
                      <li className="hide"> +91 9811 303 933</li>
                      </div>
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
                <div className="">
                  {/* <Link href="/"> */}
                  <Image
                    width={70}
                    src={logo_dark}
                    style={{ borderRadius: "100%" }}
                    alt="logo"
                  />
                  {/* <h5 className="m-2" style={{ color: "white" }}>
                    Smilessence
                  </h5> */}
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
                          <button
                            style={{ color: "white", fontWeight: "600" }}
                            onClick={()=>{handleClick(item.link)}}
                          >
                            {item.title}
                          </button>

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
                                        href={sub_item.link}
                                        className={`${
                                          sub_item.has_inner_dropdown
                                            ? "no-border"
                                            : ""
                                        }`}
                                      >
                                        {sub_item.title}
                                      </Link>
                                      {sub_item.has_inner_dropdown && (
                                        <ul className="sub-menu">
                                          {sub_item.sub_menus?.map(
                                            (inner_sub_item, inner_sub_i) => (
                                              <li key={inner_sub_i}>
                                                <Link
                                                  href={
                                                    inner_sub_item.link
                                                  }
                                                >
                                                  {inner_sub_item.title}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
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
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
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
