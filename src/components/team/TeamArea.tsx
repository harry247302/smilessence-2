

"use client";
import socialLinks from "@/data/socialLinks";
import team_data from "@/data/team-data";
import Image from "next/image";
import Link from "next/link";

import rating_img from "@/assets/images/v1/rating.svg";
const testimonials = [
  {
    name: "Suneet Kumar Singh",
    initials: "SK",
    content:
      "One of the best Dental Surgeons in Delhi NCR and also the most experienced one. I have visited multiple dentists before but he has a very jolly nature and he also educate you about the treatments and precautions for better gum and teeth health. I got dental implants done by him at his Palam Vihar Clinic in Gurgaon, though I stay in Delhi as someone suggested me from Dwarka. He has a completely different approach to his profession and we have become like friends now after multiple visits",
  },
  {
    name: "Abhilasha Srivastava",
    initials: "AS",
    content:
      "Thanks to Dr Vinayak who has done my dental implant so smoothly for which I was very scared. His way of making me comfortable and fear free was commendable. I am very happy with his knowledge and experience. My overall treatment was very good and I will highly recommend him fir those looking for dental implants and braces.",
  },
  {
    name: "Ritesh Singh",
    initials: "RS",
    content:
      "I was 23 when I decided to go for braces, and Dr. Vinayak made the journey so comfortable. He gave me the option of ceramic braces and explained the pros and cons very transparently. Over the course of 15 months, I could see gradual but consistent improvements. Now I smile with confidence and couldn’t be happier. His follow-up care is exceptional.",
  },
  {
    name: "Gauri Karkhanis",
    initials: "GK",
    content:
      "Highly recommend! I’m really grateful to have been treated by such a skilled and caring clinic. My journey with braces wasn’t just about straightening teeth, it was about gaining confidence and improving my overbite. Thanks to Dr. Vinayak, his incredible attention to detail and thoughtful approach, and also and the wonderful team, I now smile more freely and happily than ever before ",
  },
   {
    name: "Divya Chauhan",
    initials: "DC",
    content:
      "I visited Dr. Vineet Vinayak for all my dental concerns. The treatment provided is of excellent quality and handled by highly experienced doctors. Every procedure has been comfortable and virtually painless. The warm, homely environment of the clinic always makes me feel at ease.",
  },
   {
    name: "Manish Bhattacharjee",
    initials: "MB",
    content:
      "Got the dental braces done from Smilessence Dental Clinic and got general dental hygiene tips from them also. Will recommend them happily.",
  },
   {
    name: "Megha Singh",
    initials: "MS",
    content:      "Dr Vinayak is best at his job. Went to him for a dental implant procedure, and he did it so well. Happy with his expertise in dental surgery.",
  }
];
const TeamArea = () => {
  return (
    <div className="luminix-padding-section4">
      <div className="container">
        <div className=" ">
          <h2 style={{fontSize:"50px",textAlign:"center"}}>Meet our excellent team members</h2>
        </div>
         <div className="container" style={{ width: "95%", margin: "auto" }}>
          <div className="testimonial-grid-responsive">
            {testimonials.map((item, index) => (
              <div key={index} className="lumini-t-wrap card-responsive">
                <div className="luminix-t-header">
                  <Image width={140} height={24} src={rating_img} alt="rating" />
                </div>
                <div className="luminix-t-content">
                  <p>{item.content}</p>
                </div>
                <div className="luminix-t-author d-flex align-items-center gap-3 mt-3">
                  <div className="luminix-t-author-thumb">
                    <div className="testimonial-initials-circle">{item.initials}</div>
                  </div>
                  <div className="luminix-t-author-data">
                    <h6 className="mb-0">{item.name}</h6>
                    <p className="mb-0" style={{ fontSize: '0.95em', color: '#888' }}>Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Responsive styles */}
      

      </div>
    </div>
  );
};

export default TeamArea;