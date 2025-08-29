
import socialLinksFooter from '@/data/socialLinksFooter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



// images import   
import logo_white1_img from "@/assets/images/logo/logo-dark.png";
import location_img from "@/assets/images/iconbox/location.svg";
import mail_img from "@/assets/images/iconbox/mail.svg";
import call_img from "@/assets/images/iconbox/call.svg";
import clock_img from "@/assets/images/iconbox/clock.svg";

export default function FooterOne() {
  return (
    <>
      <footer
        className="luminix-footer-section1"
        style={{
          position: 'relative',
          backgroundImage: `url('/assets/images/footer/footer-image.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          listStyle: 'none !important',
        }}
      >
        {/* Fullscreen overlay */}
        <div
          style={{
            background: '#02232f',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        ></div>

        {/* Content container should be above the overlay */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="luminix-footer-one">
            <div className="row">
              <div className="col-xxl-4 col-xl-6 col-md-6">
                <div className="luminix-foter-textarea" style={{ fontSize: "15px" }}>
                  {/* <Link href="/"> */}
                  <Image width={90} height={90} style={{ borderRadius: "100px" }} src={logo_white1_img} alt="Logo" />
                  {/* </Link> */}
                  <p style={{ color: "white" }}>
                    To achieve sustainable growth and success, we run businesses that must consistently adapt to
                    competitive innovations, operational efficiencies and client-centric strategies.
                  </p>
                  <div className="luminix-social-wrap wrap2">
                    <ul>
                      {socialLinksFooter.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href} target="_blank" dangerouslySetInnerHTML={{ __html: link.svg }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ fontSize: "15px" }} className="col-xxl-2 col-xl-6 col-md-6">
                <div className="luminix-footer-menu ml-15 ml-50">
                  <div className="luminix-footer-title">
                    <h5>Our Pages</h5>
                  </div>
                  <ul className='list-unstyled'>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">Who we are</Link>
                    </li>
                    <li>
                      <Link href="/certificates">Certificates</Link>
                    </li>
                    <li>
                      <Link href="/service">Service</Link>
                    </li>
                     <li>
                      <Link href="/contact-us">Dental Implants</Link>
                    </li>
                    <li>
                      <Link href="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                      <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ fontSize: "15px" }} className="col-xxl-3 col-xl-6 col-md-6">
                <div className="luminix-footer-menu2 ml-24">
                  <div className="luminix-footer-title">
                    <h5>Contact Info</h5>
                  </div>
                  <ul className='list-unstyled'>
                    <li>
                      <Image width={22} height={25} src={location_img} alt="here is theme image" />
                      SFF/ 102, KFF 102 KFF 103, Ansal Palam Triangle, (Next to McDonald's) Palam Vihar, Gurgaon – 122017
                    </li>
                    <li>
                      <a href="mailto:drvineetvinayak@outlook.com">
                        <Image width={25} height={21} src={mail_img} alt="here is theme image" />
                        drvineetvinayak@outlook.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+088">
                        {/* <Image width={24} height={25} src={call_img} alt="here is theme image" /> */}
                        <strong> For Appointment With Specialists</strong>
                       
                      </a>
                    </li>
                    <li>
                      <a href="tel:+088">
                      
                       <strong>Tel. :</strong>  0124 4088 333, 4072724 <br />
                       <strong>Mob. :</strong>  +91 9811303933
                      </a>
                    </li>
                    <li>
                      <Image width={25} height={26} src={clock_img} alt="here is theme image" />
                      Open All Days : 09:00am to 8:30pm
                    </li>
                  </ul>
                </div>
              </div>
              {/* other columns remain unchanged */}

              <div className="col-xxl-3 col-xl-6 col-md-6">
                <div className="luminix-footer-menu2 ml-50 mb-0">
                  <div className="luminix-footer-title">
                    <h5>Newsletter</h5>
                  </div>
                  <div className="luminix-subscription-field" style={{ fontSize: "15px" }}>
                    <p>Stay updated with our latest news</p>
                    <form>
                      <input type="email" placeholder="Your Email Address" />
                      <button className="subcription-btn2 pill" type="submit">Subscribe now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="luminix-footer-bottom-text">
            <p> <a href="/terms-and-conditions">Terms & Condition</a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="/privacy-and-policy">Privacy and Policy</a> </p>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by Smilessence - The Specialist Dental Centre</p>
          </div>
        </div>
      </footer>

    </>
  )
}
