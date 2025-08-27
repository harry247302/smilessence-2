
import socialLinks from '@/data/socialLinks';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface StyleProps {
  style_2?: boolean;
}


// images import  
import team1_img from "@/assets/images/team/team1.png";
import team2_img from "@/assets/images/team/doctor-meenu-vinayak.jpg";
import team3_img from "@/assets/images/team/doctor-vineet.jpg";
import team4_img from "@/assets/images/team/team4.png";



export default function TeamHomeOne({ style_2 }: StyleProps) {
  return (
    <>
     <div className="luminix-padding-section4">
  <div className="container">
    <div className="luminix-section-title center">
      <h2 className="itle" style={{fontSize:"50px"}}>Our Dentists</h2>
      <p className="text2">
Our Dental Clinic has two dental experts available for your convenience:      </p>
    </div>

    {/* Center the cards using justify-content-center */}
    <div className="row justify-content-center" >
      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="luminix-team-wrap" data-aos="fade-up" data-aos-duration="700">
          <div className="luminix-team-thumb">
            <Image width={306} height={400} src={team2_img} alt="here is theme image" />
            <div className="luminix-team-content">
              <Link href="/single-team">
                <h5>Dr. (Prof) Meenu Vinayak</h5>
              </Link>
              <p >BDS, MDS - Prosthodontist & Crown Bridge</p>
              <div className="luminix-team-social">
                <ul>
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} target="_blank" dangerouslySetInnerHTML={{ __html: link.svg }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-lg-6 col-md-6">
        <div className="luminix-team-wrap" data-aos="fade-up" data-aos-duration="900">
          <div className="luminix-team-thumb">
            <Image width={306} height={400} src={team3_img} alt="here is theme image" />
            <div className="luminix-team-content">
              <Link href="/single-team">
                <h5>Dr. (Prof) Vineet Vinayak</h5>
              </Link>
              <p >BDS, MDS - Conservative Dentistry & Endodontics</p>
              <div className="luminix-team-social">
                <ul>
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} target="_blank" dangerouslySetInnerHTML={{ __html: link.svg }} />
                    </li>
                  ))}
                </ul>
              </div>
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
