 
import React from 'react'; 
import Image from 'next/image'; 
import ContactForm from '@/form/ContactForm';
 
// images import  
import contact3_img from "@/assets/images/contact-us/contact3.png";
import call_img from "@/assets/images/contact-us/call.svg";
import email_img from "@/assets/images/contact-us/email.svg";
import location_img from "@/assets/images/contact-us/location.svg"; 
 
export default function ContactArea() {
 

  return (
    <>
      <div className="luminix-padding-section4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="luminix-contact-us-thumb" >
                {/* <Image width={526} height={632} src={contact3_img} alt="here is theme image" /> */}
                <img src="/assets/images/contact-us/contact3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="luminix-contact-box">
                <div className="luminix-contact-title">
                  <h2 className="title pb-0 pt-0">Fill the form below:</h2>
                </div> 
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="luminix-contact-us-info-box">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap" style={{backgroundColor: '#02232f'}}>
                  <div className="luminix-contact-us-info-icon">
                    <Image width={34} height={34} src={call_img} alt="here is theme image" />
                  </div>
                  <div className="luminix-contact-us-info-data" style={{height: '160px'}}>
                    <h5>Call Us</h5>

                    <a href="tel:+911244088333">+91 124 4088333</a>
                    <a href="tel:+919811334633">+91 9811334633</a>
                    <a href="tel:+919811303933">+91 9811303933</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap" style={{backgroundColor: '#02232f'}}>
                  <div className="luminix-contact-us-info-icon">
                    <Image width={39} height={30} src={email_img} alt="here is theme image" />
                  </div>
                  <div className="luminix-contact-us-info-data" style={{height: '160px'}}>
                    <h5>Send Email</h5>
                    <a href="mailto:name@gamil.com">drvineetvinayak@outlook.com</a>
                    {/* <a href="mailto:name@gamil.com">example@gmail.com</a> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap" style={{backgroundColor: '#02232f'}}>
                  <div className="luminix-contact-us-info-icon">
                    <Image width={28} height={35} src={location_img} alt="here is theme image" />
                  </div>
                  <div className="luminix-contact-us-info-data" style={{height: '160px'}}>
                    <h5>Office Address</h5>
                    <span style={{fontSize:"21px !important"}}>SFF/ 102, KFF 102 KFF 103, <br /> Ansal Palam Triangle, <br />(Next to McDonald's) <br />Palam Vihar, <br />Gurgaon – 122017</span>
                   
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
