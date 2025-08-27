

import { StaticImageData } from "next/image";

// importing images for services
import service_img_1 from "@/assets/service/root-canal -smilessence.jpg";
import service_img_2 from "@/assets/images/service/icon4.svg";
import service_img_3 from "@/assets/images/service/icon5.svg";
import service_img_4 from "@/assets/images/service/icon6.svg";
import service_img_5 from "@/assets/images/service/icon1.svg";
import service_img_6 from "@/assets/images/service/icon2.svg";
import service_img_7 from "@/assets/images/service/icon7.svg";
import service_img_8 from "@/assets/images/service/icon8.svg";
import service_img_9 from "@/assets/images/service/icon9.svg";

export interface ServiceItem {
  id: number;
  service_title: string;
  default_image: string;
  banner_image: string;
  description: string;
  service_title_url: string;
  upload_icon: string;
  order: number;
  status: boolean;
  display: boolean;
}

export const service_data: ServiceItem[] = [
  {
    id: 0,
    service_title: "Cloud Solutions",
    default_image: "/assets/services/root-canal-smilessence.jpg",
    banner_image: "/assets/services/banner/root-canal -banner (1).jpg",
    description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">Root Canal Treatment in Gurgaon – Painless and Precise</h3>

  <div>
    <h6>About Root Canal Treatment (RCT)</h6>
    <p>Root canal treatment—often referred to as RCT—removes the damaged pulp from a tooth to eliminate infection and alleviate pain. With advanced techniques and experienced specialists, Smilessence ensures a painless and minimally invasive experience. Modern instrumentation like nickel‑titanium rotary files, endodontic microscopes, micro‑irrigation brushes, and thermoplastic gutta‑percha fillings are used to provide effective, efficient care.</p>
  </div>

  <div>
    <h6>When Do You Need RCT?</h6>
    <ul>
      <li>Severe tooth pain</li>
      <li>Pain on chewing or applying pressure</li>
      <li>Radiating pain to jaw or intermittent discomfort</li>
      <li>Throbbing pain when lying down</li>
      <li>Swollen gums around a tooth</li>
      <li>Sensitivity to hot or cold</li>
      <li>Discoloration of the tooth (dark or blue hue)</li>
    </ul>
  </div>

  <div>
    <h6>Step‑by‑Step Treatment Process</h6>
    <ul>
      <li><span>Step 1 – Diagnosis & Cleaning</span>
        <p>Consultation, X‑ray, rubber dam isolation, local anesthesia, opening and removal of infected pulp, cleaning and sterilization of root canals.</p>
      </li>
      <li><span>Step 2 – Cleaning & Shaping</span>
        <p>Precise shaping and cleaning of the canals using rotary instruments.</p>
      </li>
      <li><span>Step 3 – Filling</span>
        <p>The empty canals are filled with biocompatible materials such as thermoplastic gutta‑percha to seal and protect the tooth.</p></li>
    </ul>
  </div>

  <div>
    <h6>Why Choose Us for RCT?</h6>
    <p>With over two decades of experience, our endodontists use the latest root canal technologies to ensure your treatment is virtually pain‑free. Advanced tools like endodontic microscopes, rotary NiTi files, micro‑irrigation brushes, and high‑quality filling materials are used for minimally invasive and accurate care.</p>
  </div>

  <div>
    <h4>Our Expertise</h4>
    <p>Dr. (Prof) Vineet Vinayak, an MDS in Conservative Dentistry & Endodontics, brings years of experience in root canal treatment and implantology. His training spans AIIMS Delhi and renowned institutions in the UK. Patients frequently praise the clinic for being painless, efficient, and caring. Many report comfort, quick recovery, and complete relief from pain—often in just one or two appointments.</p>
  </div>

  <div>
    <h6>Clinic Details & Timing</h6>
    <p>Smilessence – The Specialist Dental Centre is located at SFF‑102, Ansal Palam Triangle, Palam Vihar, Gurgaon – 122017. The clinic is open daily from 09:00 AM to 08:30 PM. You can reach us for appointments via phone or online booking.</p>
  </div>
</div>
`,
    service_title_url: "/services/cloud",
    upload_icon: "/icons/cloud.svg",
    order: 1,
    status: true,
    display: true,
  },
  {
    id: 1,
    service_title: "Dental Implants",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/dental-implants-banner.jpg",
    default_image: "/assets/services/dental-implants-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 1,
    display: true,
    status: true,
    description: `
    <div class="col-lg-8 col-12">
      <h3 class="mb-4">What Are Dental Implants</h3>

      <div>
        <h6>What Is a Dental Implant?</h6>
        <p>Dental implants are the best solution available for missing tooth/teeth.
        Dental implants (either titanium posts or frames) are surgically placed into your jawbone.
        When they have been placed below your gums, they allow the team of Smilessence Specialist Dentists to put fixed teeth on them.</p>
      </div>

      <div>
        <h6>What Does A Final Dental Implant Look Like?</h6>
        <p>The dental tooth implant restoration has three parts:</p>
        <ul>
          <li><strong>Implant Base Part</strong> – Replaces Your Tooth Root</li>
          <li><strong>Implant Abutment Part</strong> – To support Your Final Crown</li>
          <li><strong>Implant Crown Part</strong> – To Make It Visible And Replace Your Tooth</li>
        </ul>
      </div>

      <div>
        <h6>Facts About Dental Implants That You Must Know...</h6>
        <ul>
          <li>Dental implants work like a permanent root for your teeth, just like your natural teeth.</li>
          <li>They are made of Titanium, which is strong and biocompatible with your body.</li>
          <li>An abutment connects the crown to the implant base.</li>
          <li>The entire system is lightweight and strong.</li>
          <li>Gives you the feel of real teeth – just like your natural ones.</li>
        </ul>
      </div>

      <div>
        <h6>Why Should I Go For A Dental Implant Treatment?</h6>
        <ul>
          <li>If you have missing tooth/teeth</li>
          <li>If you have a considerable amount of bone</li>
          <li>If you want the look and feel of natural teeth</li>
          <li>If you want long-term tooth replacement that mimics your natural teeth</li>
          <li>If you want to improve your speech, look and chewing</li>
          <li>If you simply want to enjoy the food you love again</li>
        </ul>
      </div>

      <div>
        <h6>What Are Dental Implants And Who Needs Them?</h6>
        <p>Dental implants have become one of the most effective treatments for getting rid of several dental health issues. They provide a permanent, fixed solution to replace multiple missing teeth and restore functionality and aesthetics.</p>
        <p>They are suitable for individuals who:</p>
        <ul>
          <li>Have lost one or more teeth due to decay, injury or other conditions</li>
          <li>Have sufficient bone to anchor the implants</li>
          <li>Are looking for a long-lasting, natural-looking tooth replacement option</li>
        </ul>
      </div>

      <div>
        <h6>More Services</h6>
        <ul>
          <li>Root Canal</li>
          <li>All on 4 Implants</li>
          <li>All on 6 Implants</li>
        </ul>
      </div>

      <div>
        <h6>Oral Tips</h6>
        <p>Ultrasonic irrigator has been proved for remarkable cleaning efficiency in the field of endodontics. But its role in endodontic treatment has been understated.</p>
      </div>
    </div>
  `
  },
  {
    id: 1,
    service_title: "All on 4 Implants",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/all-on-four-dental-implants-banner.jpg",
    default_image: "/assets/services/all-on-four-dental-implants-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
    description: `<div className="col-lg-8 col-12">
            <h3  className="mb-4">All On Four Implants in Gurgaon, India.</h3>
            <div>
              <h6>All On 4 Implants Treatment.</h6>
              <p>All-on-4 Implants Is The Latest Dental Implant Technology That Requires Only Four Implants To Replace All Teeth In One Jaw.<br />Thus Instead of having one Implant for every missing tooth, Only Four Implants on your upper Jaw and Four Implants on your bottom Jaw will act as Anchors That once put in place will give You 12-14 Teeth in your upper Jaw and 12-14 Teeth in your low Jaw.</p>
            </div>
            <div>
              <h6>Step By Step The Treatment Process</h6>
              <ul>
                <li><span>- Appointment # 1</span><p>Once you arrive at the clinic, Consultation, and Preliminary X Rays/ Impressions.</p></li>
                <li><span>- Appointment # 2</span><p>Surgical Placement of  All Four Implants Into The Jaw.</p></li>
                <li><span>- Appointment # 3</span><p>Fixing your new temporary provisional Teeth.</p></li>
                <li><span>- Appointment # 4</span><p>After your brief healing phase has occurred, Fix your new permanent final Teeth and you can leave The Clinic with a Brand new Set of Fixed Teeth.</p></li>
              </ul>
            </div>
            <div>
              <div>
                <h6>Advantages /benefits Of 4 On 1 Implants.</h6>
                <ul>
                  <li>Can be anchored in better quality bone wherever available.</li>
                  <li>Reduced need for bone grafting as maximum available bone can be used.</li>
                  <li>Fixed as well as removable Final Prosthesis/dentures/ Teeth can be Placed Providing you with flexible solutions.</li>
                  <li>Shorter Treatment Time.</li>
                  <li>Immediate loading is feasible in most cases hence you do not need to wait for A longer time to get final Fixed Dentures/ Teeth as Implants start fusing to your bone and are able To get Immediate Denture stability from the very first day.</li>
                  <li>All On 4 guide can help in much more accurate Implant Placement.</li>
                  <li>Higher Patient Satisfaction As You can start functioning sooner immediate improvement In Eating, speech, And Facial Esthetics.</li>
                  <li>More cost-effective alternative as compared to other Implant Treatment Options.</li>
                  <li>Least invasive technique for full mouth rehabilitation.</li>
                </ul>
              </div>
              <div>
                <h6>Thus all-on-4 Implants Means.</h6>
                <ul>
                  <li>Less work for you when compared to other Implant-Supported treatments That require about six to eight Dental Implants.</li>
                  <li>Less invasive and reduced need for bone grafts.</li>
                  <li>Most cost-effective.</li>
                </ul>
              </div>
              <p>Smilessence The Specialist Dental Centre has all The modern and up-to-date advanced Implant Technologies, Expertise, and Equipment Since 2005 In its Options To replace missing teeth. At our specialized center, aided By Our Team Of Implant Specialists Since 2005, you Will Be Able To See That Natural Look as well as feel That Natural way just like your own Teeth In A short painless way.</p>
            </div>
            <div>
              <h4>Why All On 4 Implants are the Best?</h4>
              <p>The oral health of an individual plays a significant role in our quality of life. There are several treatment methods available right now based on the situation of the individuals. Some of the situations require people to opt for solutions relevant to the condition. Certain conditions related to oral health are so severe that the individual needs new a set of artificial teeth all over his/her jawbone. All on four is a treatment process widely used in such cases. It is a dental implant procedure that involves four dental implants and all the required artificial sets of teeth are fixed upon those four dental implants.
                Dental implants work as an artificial root for the human teeth upon which a crown or cap is fixed. Having individual implants work quite well for one or two implants. But there are some diseases when you have to replace multiple teeth adjacent to each other, and that approach won’t work much. All On Four dental implants work quite well in such cases. It is convenient, highly effective, and long-lasting. You will get to know whether you need these or not once you visit your dentist. So, it is only a matter of visiting the right dentist in order to get the best solution. When there is Smile Essence in your city, there is no need to go anywhere else. Smilessence has been one of the best options in Gurgaon for a long time. And they gained this status by satisfying a large number of customers with varying conditions related to their oral health. Make sure to log on to the website for more information about all On four implant costs.</p>
            </div>
            <div>
              <h6>What is dental implants?</h6>
              <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
            </div>
            <div>
              <h6>Will general anaesthesia be administered to me during the procedure?</h6>
              <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
            </div>
            <div>
              <h6>What is the failure rate of immediate dental implants?</h6>
              <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
            </div>
            <div>
              <h6>How long do Basal implants last?</h6>
              <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
            </div>
            <div>
              <h6>How do I care for my new set of permanent teeth ?</h6>
              <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
            </div>
          </div>`,
  },
  {
    id: 1,
    service_title: "All On 6 Implants",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/all-on-four-dental-implants-smilessence.jpg",
    default_image: "/assets/services/all-on-four-dental-implants-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
    description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">All On Six Implants in Gurgaon, India</h3>

  

  <div>
    <h6>How Do I Decide?</h6>
      <p style={{fontSize:"10px"}} className="mb-4">So if you have</p>
    <ul>
      <li>Absolutely No teeth left in your jaw?</li>
      <li>You had to take off many teeth or shift to your plate or denture?</li>
      <li>You are sick and tired of wearing a removable denture that is so loose that it slips out whenever you talk or eat simply because your jawbone is now so weak and less that it cannot support even your old dentures…..</li>
    </ul>
    <p>Then you may start to feel you have lesser options to bring back your functional teeth for chewing, esthetics, and talking.</p>
    <p>Among such limited conditions, One of the best options is all on six implants. Thus instead of having multiple implants for every missing tooth, only six implants on your upper jaw and six implants on your bottom jaw will act as anchors that once put in place will give you 12-14 teeth in your upper jaw and 12-14 teeth in your low jaw.</p>
  </div>

  <div>
    <h6>Step By Step The Treatment Process:</h6>
    <ul>
      <li><span>- Appointment #1</span><p>Once you arrive at the clinic, Consultation, and preliminary x-rays/ impressions.</p></li>
      <li><span>- Appointment #2</span><p>Surgical placement of all six implants into the jaw.</p></li>
      <li><span>- Appointment #3</span><p>Fixing your new temporary provisional teeth.</p></li>
      <li><span>- Appointment #4</span><p>After your brief healing phase has occurred, Fix your new permanent final teeth and you can leave the clinic with a brand new set of fixed teeth.

</p></li>
    </ul>
  </div>

  <div>
    <h6>Advantages / Benefits Of All On 6 Implants:</h6>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
      <li style={{ listStyleType: "disc", paddingLeft: "20px" }} >Can Be Anchored In Almost All Types Of Bone Quality Available.</li>
      <li>Fixed As Well As Removable Final Prosthesis/dentures/ Teeth Can Be Placed Providing You With Flexible Solutions.</li>
      <li>Quick Loading Feasible In Most Cases Hence You Do Not Need To Wait For A Longer Time To Get Final Fixed Dentures/ Teeth As Implants Start Fusing To Your Bone And are Able To Get Immediate Denture Stability From The Very First Day.</li>
      <li>All On 6 Guide Can Help In Much More Accurate Implant Placement. hence Will Be A Painless Process That Can Even Be Done Flapless.</li>
      <li>Higher Patient Satisfaction As You Can Start Functioning Sooner .immediate Improvement In Eating, speech, And Facial Esthetics.</li>
      <li>More Cost-Effective Alternative As Compared To Having Multiple Implants In Your Mouth For Each Replaced Tooth.</li>
      <li>Even In Cases Of Poor Bone Quality With Very Minimal Or No Options Available, This Is A Simpler Process With Good Prognosis And Surgical Predictability. Hence Is A Less Invasive Technique For Full Mouth Rehabilitation.</li>
    </ul>
  </div>

  <div>
    <h4>Importance of All On Six Implants</h4>
    <p>Dental implants play a huge role in the treatment of severe issues related to the oral health of individuals. Dentists come with varying treatment procedures to help people get rid of the underlying issue. In some cases, you can stop the decay of the teeth while there are some severe cases when a complete replacement is mandatory. Dental implants work the best in those cases. Dental implants play quite an important role in fixing such issues. But there are some limitations to this method as well. Certain issues related to oral health affect multiple teeth inside our mouth. In those cases, people might need multiple replacements.</p>
    <p>There are certain conditions in which the number of teeth to be replaced is quite high. That is why all On Four implants don’t work. Hence all On Six works the best in these cases. Let us discuss a bit about this implant technique before we start discussing anything else. In this technique, six implants are fixed in the jawbone of the individual. All On four implants work well in many cases but when the number of implants exceeds a certain limit, all On six implants are the only option.</p>
      <p>It is a method to create a permanent prosthesis that serves as a root for the tooth caps that will be mounted. It is versatile and will enhance your eating and speaking experience significantly. Apart from that, the recovery time is not much longer. This is one of the most important reasons why such a large number of people opt for All On Six dental implants. Smilessence is one of the prominent players in this field and you may consider them in case you need one. Get to know more about these implants like All On Six implants costs, etc. by visiting the website.</p>
    </div>

  <div>
    <h6>What is a dental implant?</h6>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h6>Will general anaesthesia be administered for the implant procedure?</h6>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h6>What is the failure rate of immediate dental implants?</h6>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h6>How long do Basal implants last?</h6>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h6>How do I care for my new set of permanent teeth?</h6>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>
`,
  },
  {
    id: 1,
    service_title: "Fixing Dentures With Implants",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/fixing-dentures-with-implants-banner.jpg",
    default_image: "/assets/services/fixing-dentures-with-implants-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
    description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">Fixing Dentures With Implants</h3>

  <div>
    <h6>Advantages</h6>
    <ul>
      <li>Your  Denture is fixed to your jaws with implants.</li>
      <li>Allows you to use your denture just like your earlier original teeth.</li>
      <li>Better quality of life as well</li>
    </ul>
  </div>

  <div>
    <h6>Fixing Dentures Using Full Jaw Implants</h6>
      <h6>Step 1</h6>
    <h6>The First Step…</h6>
    <p>Clinical examination and scans are taken.</p>
    <img src="/assets/services/step1.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6>Step 2</h6>
    <h6>Fixing the Implants</h6>
    <p>Dental implants are placed to replace the lost teeth. By the time the implants are osseointegrating, you can immediately start wearing your earlier denture.</p>
   <img src="/assets/services/step2.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6>Step 3</h6>
    <h6>Fixing a Ball or Bar to Support Denture…</h6>
    <p>After osseointegration has taken place a ball or a bar is attached on top of the implants and the dentures are fixed.</p>
    <img src="/assets/services/step3.jpg" alt="Step 3 Image" />
  </div>

  <div>
    <h6>Step 4</h6>
    <h6>Final Results…</h6>
    <p>The removable dentures are securely fixed on top of the implant with the ball/bar hence giving you the stability that is not there with your removable conventional dentures.</p>
    <img src="/assets/services/step4.jpg" alt="Step 3 Image" />
  </div>

  <div>
    <h4>Having Troubles with Dentures? Here is How to Get Them Fixed?</h4>
    <p>Implants work as a nice means to solve some severe issues related to dental health. But it is not the case all the time. There are some cases when people start facing issues with the dentures that are fixed on implants. As implants are considered one of the most effective and permanent solutions. When someone starts facing even after opting for dental implants, this is really irritating trouble in many cases. Since we have found a large number of people looking for some solutions, in this case, we thought to give you some ideas about it. One of the most common issues that people face problem with dentures is damage and it needs to be fixed.</p>

    <p>It is very important to know the exact reason behind the underlying situation. The best thing you can do in this case is to visit a dentist. Once you visit the dentist, he/she will examine your situation and will come up with the right solution. There is always a need for some minor adjustments when someone gets dentures for the first time. And when the concerned person starts facing problems with it, the dentist will examine this situation precisely.</p>

    <p>You can get rid of this unfortunate situation with the help of Smilessence very easily. As they possess extensive experience and knowledge, they act as the best option for the majority of people who are looking for such services in or near Gurgaon. You may consider visiting the Smilessence website for getting more information about fixing dentures with implants costs.</p>

    <p>Many people who wear full or partial dentures are ideal candidates for this treatment simply because they are already used to dentures but want something more stable and permanent. The procedure can often be completed quickly and efficiently.</p>

    

    <div>
      <h6>What is a dental implant?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>Will general anaesthesia be administered for the entire procedure?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>What is the failure rate of immediate dental implants?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>How long do Basal implants last?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement</p>
    </div>

    <div>
      <h6>How do I care for my new set of permanent teeth ?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>
  </div>
</div>

`,
  },
  {
    id: 1,
    service_title: "Multiple Teeth Replacement",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/multiple-teeth-replacement-by-implants-banner.jpg",
    default_image: "/assets/services/multiple-teeth-replacement-by-implants-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
    description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">Multiple Teeth Replacement By Implants (Implants for Fixing Bridges)</h3>

  <div>
    <h6>Advantages</h6>
    <ul>
      <li>The best solution in cases where there are missing teeth gaps at the ends of your jaw or where one or more natural teeth present for making fixed bridge.</li>
      <li>A stable solution that lets you eat what you want.</li>
      <li>Better strength than wearing dentures.</li>
      <li>Better stability than wearing dentures.</li>
      <li>Prevents bone loss.</li>
      <li>Decreases your risks.</li>
      <li>Restores your natural smile.</li>
      <li>long-lasting solution.</li>
      <li>Builds up your self-confidence and improves your quality of life.</li>
            <li>Saves your adjacent teeth.</li>

    </ul>
  </div>

  <div>
    <h6>Placing The Teeth Implants For Fixed Bridge (The Procedure)…</h6>
    <h6>Step 1</h6>
    <h6>First Step…</h6>
  <ul>
      <li>Clinical and X-ray evaluation is done.<li>
    </ul>   
    <img src="/assets/services/step5.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6>Step 2</h6>
    <h6>Fixing the implant…</h6>
 <ul>
      <li>
The 2 implants are installed.    <li>
This is normally done in a single session.
      </li>
      
    </ul>   
     <img src="/assets/services/step6.jpg" alt="Step 2 Image" />
  </div>

  <div>
    <h6>Step 3</h6>
    <h6>Fixing the Bridge…</h6>
    <ul>
      <li>
The final step is the making and placing of the bridge.      </li>
       <li>
The new bridge is installed permanently.
      </li>
      
    </ul>
    <img src="/assets/services/step7.jpg" alt="Step 3 Image" />
  </div>

  <div>
    <h6>Step 4</h6>
    <h6>End Results…</h6>
    <ul>
      <li>
          The new bridge will handle all the pressure that your strong, natural back teeth were able to do earlier. This allows you to eat whatever you desire.
      </li>
      
    </ul>
    <img src="/assets/services/step8.jpg" alt="Step 4 Image" />
  </div>

  <div>
    <h4>What Should You Know About Multiple Teeth Replacement?</h4>
    <p>Teeth replacement works as a nice and versatile solution when it comes to getting rid of some severe dental health issues. The process is quite nice and convenient for people with several teeth missing. This process is often known as “the fixed bridge” process. The bridge contains replacement teeth fixed on dental implants that are embedded into the jawbone for permanent support. The implants are placed in the gaps of the missing teeth and act as artificial roots. Once your jaw heals, the bridge is attached and your smile is restored. This process can be performed in either the upper or lower jaws depending on the situation.</p>

    <p>This is how a number of people who are left with all their teeth need teeth replacement. But they don’t want to go through a complete denture or may feel they are cumbersome. But getting implants for missing teeth is a very convenient way to fix this issue. The process has gotten very popular over the past few decades. A fixed bridge that is supported by dental implants offers great convenience to those who want a stable and long-lasting solution. One more advantage is that these implants look and feel like your original teeth.</p>

    <p>You have to follow the same pattern in case of teeth replacement as well. Whether you need a single replacement or multiple ones, a dental implant gives the best results.</p>

    <div>
      <h6>What is a dental implant?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>Will general anaesthesia be administered for the entire procedure?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>What is the failure rate of immediate dental implants?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>How long do Basal implants last?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>How do I care for my new set of permanent teeth?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>
  </div>
</div>`

  },

  {
    id: 1,
    service_title: "Single Missing Tooth Implant",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/multiple-teeth-replacement-by-implants-banner.jpg",
    default_image: "/assets/services/single-implant-for-single-missing-tooth-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
   description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">Single Implant for Single Missing Tooth</h3>

  <div>
    <h6>Advantages</h6>
    <ul>
      <li>Strong & Good stability.</li>
      <li>Adjacent teeth are safe and not touching.</li>
      <li>Prevents bone loss.</li>
      <li>Prevents the healthy adjacent teeth from drifting into the space of the missing tooth.</li>
      <li>Gives a natural function.</li>
      <li>Long lasting solution & time safe fix.</li>
      <li>Can be used to correct & amend the ‘space not what you want.</li>
      <li>You can eat what you want.</li>
    </ul>
  </div>

  <div>
    <h6>Placing The Single Implant (The Procedure)…</h6>

    <h6>Step 1</h6>
    <h6>First Step…</h6>
    <ul>
    <li>The dentist makes a clinical examination and takes x-rays of the area to prepare for the procedure.</li>
    <ul/>
    <img src="/assets/services/step9.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6>Step 2</h6>
    <h6>Fixing the Single Implant…</h6>
    <ul>
    <li>The implant is installed.</li>
    <li>A cover/suturing material is also being done then a healing abutment or cover screw is placed on and left undisturbed to heal/integrate with the jawbone.</li>
    <li>For medically loaded implants are done when a temporary crown is loaded onto the implant immediately.</li>
    <ul/>
    <img src="/assets/services/step10.jpg" alt="Step 2 Image" />
  </div>

  <div>
    <h6>Step 3</h6>
    <h6>Fixing the New Crown…</h6>
    <ul>
     <li>The final step is finalizing and placing the permanent crown on the implant. The new tooth is installed permanently.</li>
   
    <ul/>
    <img src="/assets/services/step11.jpg" alt="Step 3 Image" />
  </div>

  <div>
    <h6>Step 4</h6>
    <h6>End Results…</h6>
    <ul>
        <li>The new tooth should function just like a natural tooth.</li>

    <ul/>
    <img src="/assets/services/step12.jpg" alt="Step 4 Image" />
  </div>

  <div>
    <h4>Know the Cost of Single Tooth Implant In Gurgaon</h4>
    <p>Teeth replacement has become one of the most common procedures to help people get rid of certain chronic issues with dental health. We are going to talk a bit about single tooth implants in this article. There is a huge number of people who are looking about the cost that will go into it in particular cases. A lot depends on the level of damage, placement area, and such other conditions. If someone wants a rough estimate, this process would cost somewhere between ₹18,000 to ₹60,000 or more. This might seem a bit costly but it is the best solution one can opt for when dealing with a single tooth replacement.</p>

    <p>There are some who want to know what you can do with your dental set in light of such situations. In case you are left with a single tooth gap that might be spoiling your smile or overall dental condition, single tooth implants are the best way out. This is a complete process that lets you have a very similar replacement as that of the lost natural tooth. This is why it has gained so much popularity among people who are not okay with dentures. This gives you your smile back with all the style and confidence that you need. You can enjoy your food and smile in public without any hesitation. Once the crown is placed on the implant, you are good to go for years and will have a complete feel of a natural tooth with no extra worries. We hope you get the best value out of your time and money through this process.</p>

    <div>
      <h6>What is a dental implant?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>Will general anaesthesia be administered for the entire procedure?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>What is the failure rate of immediate dental implants?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>How long do Basal implants last?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>

    <div>
      <h6>How do I care for my new set of permanent teeth?</h6>
      <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys, that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
    </div>
  </div>
</div>`

  },

  {
    id: 1,
    service_title: "Advantages of Implants",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/advantages-of-implants-banner.jpg",
    default_image: "/assets/services/advantages-of-implants-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">Advantages of Implants</h3>

  <div>
    <h6>As good as your natural teeth</h6>
    <p>A dental implant is strong and stable. Hence it makes your final replaced lost tooth look, feel, and function just like a natural tooth.</p>
  </div>

  <div>
    <h6>Long term solution</h6>
    <p>Implants will last many years. With good care, implants can last a lifetime.</p>
  </div>

  <div>
    <h6>Regain your natural smile</h6>
    <p>A face without teeth often appears sunken and sad. <span style="color:#e74c3c;">Dental implants</span> help in maintaining the natural shape of your face.</p>
  </div>

  <div>
    <h6>Protect Healthy Bone</h6>
    <p>After you have got a tooth or teeth extracted, leaving any empty spaces in your mouth can cause loss and deterioration of the jawbone.</p>
    <p>Dental implants are the only procedure that preserves and stimulates natural bone thus preventing bone loss.</p>
  </div>

  <div>
    <h6>Improved Speech</h6>
    <p>With most removable dentures, the teeth often slip within the mouth giving you slurred speech. <br />Dental implants allow you to speak without the worry that any teeth might slip.</p>
  </div>

  <div>
    <h6>Eat your favorite foods</h6>
    <p>You can enjoy most of the foods you love without hesitation. You can bite naturally and eat most of the things your heart desires without feeling uncomfortable.</p>
  </div>

  <div>
    <h6>Improved comfort</h6>
    <p>As these implants become an integral part of you, you will not feel the discomfort of foreign removable dentures.</p>
  </div>

  <div>
    <h6>Improved oral health</h6>
    <p>Dental implants do not need reducing or trimming of your other teeth, which a dental bridge requires. Thus since more of your own teeth are left intact it indirectly improves your long-term oral health.</p>
  </div>

  <p><strong>Smilessence The Specialist Dental Centre</strong> is India’s best dental implant center, situated in Palm Vihar Gurgaon. Our clinic is renowned across the world as a destination for world-class dentistry, with most of our patients flying to us from abroad.</p>

  <p>Read More about<a href="#"> Dental Implants Types and Advantages</a></p>

  <div>
    <h5 style={{color:"black"}} >What is dental implant?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>Will general anaesthesia be administered for the entire procedure?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>What is the failure rate of immediate dental implants?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>How long do basal implants last?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>How do I care for my new set of permanent teeth?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`


  },


  {
    id: 1,
    service_title: "How An Implant Procedure",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/advantages-of-implants-banner.jpg",
    default_image: "/assets/services/how-an-implant-prodedure-smilessence (1).jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">How An Implant Is Placed( The Procedure)</h3>

  <p>Here is a step-by-step explanation of how an implant will be placed:</p>

  <div>
    <h6>Step 1</h6>
    <h5>First Evaluation Clinically and x-ray</h5>
    <p>A panoramic x-ray and oral examination are done to determine the implant site and your bone condition</p>
  </div>

  <div>
    <h6>Step 2</h6>
    <h5>Preparing The Implant Site</h5>
    <p>If there is still a broken or carious tooth present, the tooth will be removed.</p>

    <p>If immediate implants are to be done it’s dependent it depends on the presence of any infection and your bone condition.</p>

    <p>If immediate implants are not suited, the site would be left to heal for about a few weeks to 2-3 months.</p>

    <p>In patients where there is less bone structure, bone grafting may be recommended as an additional procedure and after the bone grafting the implant site may be left to heal for a few weeks to 2-3 months.</p>

    <p>Once healthy bone material has been established and the site is ready, the implant is ready to be put into place</p>
  </div>

  <div>
    <h6>Step 3</h6>
    <h5>Placing The Implant</h5>
    <ul>
      <li>
        <p> The bone is prepared,…….the implant is embedded …….. the tissue is sutured.</p>
      </li>
    </ul>
  </div>

  <div>
    <h6>Step 4</h6>
    <h5>Healing Process(Osseointegration of your Implant With The Bone)</h5>
    <ul>
      <li> The implant is left to integrate and heal with the jaw bone.</li>
      <li> If the immediately loaded implant is being done …………….we go to step 5.</li>
      <li>If the immediately loaded implant is not being done…………..the implant is left to osseointegrate for about 3 to 6 months before step 5 is done.</li>
    </ul>
  </div>

  <div>
    <h6>Step 5</h6>
    <h5>Attaching The Abutment</h5>
    <p>When Osseointegration has been achieved ready, an abutment will be attached to the implant and this will act as a support for the new crown or bridge or denture</p>
  </div>

  <div>
    <h6>Step 6</h6>
    <h5>Placing The Crown or Bridge or Denture</h5>
    <p>Impressions are taken and the crown/bridge or overdenture is made and fixed.</p>
  </div>

  <p> Everything You Need To Know<a href="#"> About Dental Implant Surgery.</a></p>

  <p><strong>Smilessence The Specialist Dental Centre</strong> is India’s best dental implant center, situated in Palam Vihar Gurgaon. Our clinic is renowned across the world as a destination for world-class dentistry, with most of our patients flying to us from abroad.</p>

  <div>
    <h5>What is dental implants?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>Will general anaesthesia be administered to for during the procedure?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>What is the failure rate of immediate dental implants?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>How long do Basal implants last?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>

  <div>
    <h5>How do I care for my new set of permanent teeth?</h5>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`



  },


    {
    id: 1,
    service_title: "Astra Tech Implants",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/astratech-implants-banner.jpg",
    default_image: "/assets/services/astratech-implants-smilessence (1).jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 className="mb-4">Astra Tech Implants</h3>
  <p>Dentsply Astra dental implant system is a uniquely indexed, patented implant. It is specifically designed for tighter connections which reduce micro-movement. This implant also has a surface and thread design which maintains the bone level around the implant much better than other implants. The unique feature of OsseoSpeed surface treatment enhances the healing and bonding process while increasing bone formation. This implant also features MicroThread – a micro thread design at the top of the implant which reduces the load distributed on the bone during function.</p>

  <div>
    <h3 className="mb-4">Straumann SLA Implants</h3>
    <p>The Straumann SLA dental implant System is one of the most established and longest-standing systems in the market. Designed for long-term predictable results, the SLA system is well documented with many years of research and data for numerous dental features.</p>
  </div>

  <div>
    <h3 className="mb-4">SLAactive Implants</h3>
    <p>Straumann developed the groundbreaking SLA surface that reduced the average healing time from 12 weeks (SLA surface) to 6-8 weeks. Shortly after, the introduction of chemically and micro-activated SLActive surface became the gold standard in implant dentistry.</p>

    <p>The benefits of the Straumann SLA/SLActive surface technology are shown in reference studies and clinical trials, which enhance the bone-implant contact as well as faster osseointegration with more predictable results.</p>
  </div>

  <div>
    <h3 className="mb-4">SLActive Implants</h3>
    <p>The SLActive surface takes the proven concept of SLA one step further as the new surface becomes:</p>
    <ul>
      <li>More chemically active and hydrophilic</li>
      <li>Stable and consistent healing environment, even in compromised bone</li>
    </ul>

    <p>Due to this best combination, the chemically active and hydrophilic SLActive surface significantly improves the initial healing reaction allowing a faster osseointegration process and higher implant predictability.</p>
  </div>

  <div>
    <h3 className="mb-4">Bone Level Implants</h3>
    <p>The Straumann® Bone Level Implant provides you with a solution for all bone-level treatments. The Bone Level implant design is based on the latest technology and scientific know-how in implant dentistry regarding biological principles, thus facilitating predictable esthetic and functional results for every indication and patient situation.</p>

    <h6>The Straumann Bone Level implant:</h6>
    <ul>
      <li>Provides surgical and restorative simplicity for all kinds of indications.</li>
      <li>Reduces screw component complexity.</li>
      <li>Supports bone preservation and ensures predictable aesthetic results.</li>
    </ul>
  </div>

  <div>
    <h3 className="mb-4">Roxolid Dental Implants</h3>
    <p>Roxolid material is a high-performance metallic alloy composed of the elements titanium and zirconium. Roxolid is more than a noble metal for dental implants.</p>

    <p>This new metallic alloy enables higher-grade performance for dental implants:</p>
    <ul>
      <li>Roxolid has better strength than titanium and smaller implants to be placed with more confidence and higher success rates.</li>
    </ul>

    <p><strong>Smaller implants also mean:</strong></p>
    <ul>
      <li>The dentist can use a smaller implant due to high strength and better osseointegration.</li>
      <li>The flexibility of having more treatment options because Roxolid provides a wider choice of treatment options with small diameter implants allowing optimal treatment in specific clinical situations.</li>
    </ul>
  </div>

  <div>
    <h6>Having Troubles with Dentures: Here is How to Get Them Fixed?</h6>

    <p>What is dental implant?</p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p>Will general anaesthesia be administered for the entire procedure?</p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p>What is the failure rate of immediate dental implants?</p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p>How long do Basal implants last?</p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p>How do I care for my new set of permanent teeth?</p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`




  },
];

export default service_data;