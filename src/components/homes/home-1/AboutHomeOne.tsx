 
import Count from '@/common/count'
import counter_data from '@/data/counter-data'
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// images import  
import about_img from "@/assets/images/about-us/about-01.png";
import icon1_img from "@/assets/images/about-us/icon1.svg"; 

export default function AboutHomeOne() {
  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="luminix-about-thumb" data-aos="fade-up" data-aos-duration="700">
                <Image width={500} height={520} src={about_img} alt="here is theme image" />
                {/* <div className="luminix-about-card">
                  <h2 className="">12+</h2>
                  <h5>Years of experience</h5>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="luminix-default-content">
                {/* <h6>[About Us]</h6> */}
                <h2 className="title">From our family to yours</h2>
                <p className="text">On Smilessence, you will find an abundance of information about our practice, procedures we provide, and dentistry in general.</p>
                                <p className="text">You can easily schedule an appointment through our website at any time, making the process simple and convenient for you. If you prefer a more personal touch, you can also reach out to us directly by calling the numbers provided, and our friendly team will be more than happy to assist you. From the very first interaction, our goal is to make your experience smooth, welcoming, and stress-free. We truly value your trust, and we work hard every day to ensure that every visit is not only comfortable but also relaxing and reassuring, so that you feel completely at ease throughout your time with us.</p>

                {/* <div className="luminix-list-icon-content">
                  <ul>
                    <li>
                      <Image width={25} height={24} src={icon1_img} alt="here is theme image" />
                      Improve customer experience
                    </li>
                    <li>
                      <Image width={25} height={24} src={icon1_img} alt="here is theme image" />
                      Leverage digital marketing
                    </li>
                    <li>
                      <Image width={25} height={24} src={icon1_img} alt="here is theme image" />
                      Expand product or service range
                    </li>
                  </ul>
                </div> */}
                {/* <div className="mt-50">
                  <Link href="/about-us" className="luminix-default-btn pill">About Us 
                    <RightArrawWhitIcon />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <section className="luminix-counter-wrap">
            {counter_data.map((item, i) => (
              <div key={i} className="luminix-counter-item">
                <h3 className="luminix-counter-data" aria-label="322K+" style={{fontSize: '3rem'}}>
                  <Count number={item.value} /> {item.text}
                </h3>
                <p>{item.label}</p>
              </div>
            ))} 
          </section>
        </div>
      </div>
    </>
  )
}
