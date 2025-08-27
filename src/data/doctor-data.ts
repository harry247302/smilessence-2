export interface Doctor {
  id: number;
  name: string;
  speciality: string;
  education: string;
  workDays: string;
  workTime: string;
  bio: string;
  image: string;
    profileUrl?: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    [key: string]: string | undefined; // allow extra socials if needed
  };
}

const doctorData: Doctor[] = [
  {
    id: 1,
    name: "Dr. (Prof) Vineet Vinayak",
    speciality: "Crown, Bridges & Dentures",
    education: "BDS, MDS - Conservative Dentistry & Endodontics",
    workDays: "Mon - Sun",
    workTime: "08:30 AM - 08:30 PM",
    bio: `Dr. Vineet Vinayak graduated in 1996 from Govt Dental College and Hospital, Amritsar, Punjab.
          After working as Junior Resident (Dental OPD/ Casualty) at All India Institute of Medical Sciences (AIIMS) New Delhi, he went on to do his postgraduate masters (specialization) in Endodontics (MDS) from Ragas Dental College, Chennai.`,
    image: "/assets/images/about-us/dr.sir.png",
     profileUrl: "https://www.smilessence.co.in/assets/dr.profile.pdf", 
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
  {
    id: 2,
    name: "Dr. (Prof) Meenu Vinayak",
    speciality: "Prosthodontist, Cosmetic/Aesthetic Dentist",
    education: "BDS, MDS - Prosthodontist & Crown Bridge",
    workDays: "Mon - Sun",
    workTime: "09:00 AM - 08:30 PM",
    bio: `Dr Meenu Jain Vinayak is a specialist in crowns, bridges and dentures. She has worked with many renowned organizations such as Apollo (East Kailash), Max Hospital (Pritampura) and Aggarwal Hospital to name a few. In 2005, she started her own Centre of Excellence along with her husband Dr Vineet Vinayak, who is also an MDS with specialization in the root canal and dental implants.`,
    image: "/assets/images/about-us/dr.mam.png",
    //  profileUrl: "https://www.smilessence.co.in/assets/dr.profile.pdf", 
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
];

export default doctorData;
