import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon'
import ServiceRightArrawIcon from '@/svg/ServiceRightArrawIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// images import  
import thumb1_img from "@/assets/images/v1/thumb-01.png";
import thumb2_img from "@/assets/images/v1/thumb-02.png";
import icon1_img from "@/assets/images/iconbox/icon1.svg";
import icon2_img from "@/assets/images/iconbox/icon2.svg";
import icon3_img from "@/assets/images/iconbox/icon3.svg";
import icon4_img from "@/assets/images/iconbox/icon4.svg";

export default function ServiceHomeOne() {
  return (
    <>
      <div className="luminix-padding-section2 light-bg1">
        <div className="container">
          <div className="luminix-section-title">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <h6>[Our Services]</h6>
                <h3 className="title pb-0 ml-20">Providing our services worldwide</h3>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="luminix-title-btn">
                  <Link href="/" className="luminix-default-btn pill">View All Solution 
                    <RightArrawWhitIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-6">
              <div className="luminix-about-thumb" data-aos="fade-up" data-aos-duration="700">
                <Image width={500} height={499} src={thumb1_img} alt="here is theme image" />
                <div className="luminix-service-card">
                  <Image width={280} height={280} src={thumb2_img} alt="here is theme image" />
                </div>
              </div>
            </div> */}
           <div className="row">
  {/* Card 1 */}
  <div className="col-lg-6 col-md-6 mb-5 ">
    <div className="luminix-list-icon-wraper">
      <div className="luminix-list-icon-wrap">
        <div className="luminix-list-icon-icon2">
          <Image width={60} height={60} src={icon1_img} alt="here is theme image" />
        </div>
        <div className="luminix-list-icon-data">
          <Link href="/">
            <h5>Root Canal</h5>
          </Link>
          <p>A root canal treats infected tooth pulp, relieving pain and saving natural teeth.</p>
        </div>
      </div>
      <div className="luminix-list-icon-btn">
        <Link href="/">
          <ServiceRightArrawIcon />
        </Link>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="col-lg-6 col-md-6 ">
    <div className="luminix-list-icon-wraper">
      <div className="luminix-list-icon-wrap">
        <div className="luminix-list-icon-icon2">
          <Image width={60} height={60} src={icon2_img} alt="here is theme image" />
        </div>
        <div className="luminix-list-icon-data">
          <Link href="/">
            <h5>Dental Implants</h5>
          </Link>
          <p>Dental implants replace missing teeth with durable, natural-looking solutions for long-lasting smiles.</p>
        </div>
      </div>
      <div className="luminix-list-icon-btn">
        <Link href="/">
          <ServiceRightArrawIcon />
        </Link>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="col-lg-6 col-md-6 " >
    <div className="luminix-list-icon-wraper">
      <div className="luminix-list-icon-wrap">
        <div className="luminix-list-icon-icon2">
          <Image width={60} height={60} src={icon3_img} alt="here is theme image" />
        </div>
        <div className="luminix-list-icon-data">
          <Link href="/">
            <h5>All On 4 Implants</h5>
          </Link>
          <p>All-on-4 implants restore a full arch of teeth using just four strategically placed implants.</p>
        </div>
      </div>
      <div className="luminix-list-icon-btn">
        <Link href="/">
          <ServiceRightArrawIcon />
        </Link>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="col-lg-6 col-md-6 ">
    <div className="luminix-list-icon-wraper">
      <div className="luminix-list-icon-wrap">
        <div className="luminix-list-icon-icon2">
          <Image width={60} height={60} src={icon4_img} alt="here is theme image" />
        </div>
        <div className="luminix-list-icon-data">
          <Link href="/">
              <h5>All On 6 Implants</h5>
          </Link>
          <p>All-on-6 implants provide a full-arch tooth replacement using six strong, securely placed implants.</p>
        </div>
      </div>
      <div className="luminix-list-icon-btn">
        <Link href="/">
          <ServiceRightArrawIcon />
        </Link>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  )
}
