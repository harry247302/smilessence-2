

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
    <h3 style="color:#166280;font-size:22px;margin-top:20px">About Root Canal Treatment (RCT)</h3>
    
    <p>Root canal treatment—often referred to as RCT—removes the damaged pulp from a tooth to eliminate infection and alleviate pain. With advanced techniques and experienced specialists, Smilessence ensures a painless and minimally invasive experience. Modern instrumentation like nickel‑titanium rotary files, endodontic microscopes, micro‑irrigation brushes, and thermoplastic gutta‑percha fillings are used to provide effective, efficient care.</p>
  </div>

  <div>
    <h3 style="color:#166280;font-size:22px;margin-top:20px">When Do You Need RCT?</h3>
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
    <h3 style="color:#166280;font-size:22px;margin-top:20px">Step‑by‑Step Treatment Process</h3>
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
    <h3 style="color:#166280;font-size:22px;margin-top:20px" >Why Choose Us for RCT?</h3>
    <p>With over two decades of experience, our endodontists use the latest root canal technologies to ensure your treatment is virtually pain‑free. Advanced tools like endodontic microscopes, rotary NiTi files, micro‑irrigation brushes, and high‑quality filling materials are used for minimally invasive and accurate care.</p>
  </div>

  <div>
    <h3 style="color:#166280;font-size:22px;margin-top:20px" >Our Expertise</h3>
    <p>Dr. (Prof) Vineet Vinayak, an MDS in Conservative Dentistry & Endodontics, brings years of experience in root canal treatment and implantology. His training spans AIIMS Delhi and renowned institutions in the UK. Patients frequently praise the clinic for being painless, efficient, and caring. Many report comfort, quick recovery, and complete relief from pain—often in just one or two appointments.</p>
  </div>

  <div>
    <h3 style="color:#166280;font-size:22px;margin-top:20px"  style="color:#166280;font-size:22px;margin-top:20px" >Clinic Details & Timing</h3>
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
        <h6 style="color:#166280;font-size:22px;margin-top:20px" >What Is a Dental Implant?</h6>
        <p>Dental implants are the best solution available for missing tooth/teeth.
        Dental implants (either titanium posts or frames) are surgically placed into your jawbone.
        When they have been placed below your gums, they allow the team of Smilessence Specialist Dentists to put fixed teeth on them.</p>
      </div>

      <div>
        <h6 style="color:#166280;font-size:22px;margin-top:20px" >What Does A Final Dental Implant Look Like?</h6>
        <p>The dental tooth implant restoration has three parts:</p>
        <ul>
          <li><strong>Implant Base Part</strong> – Replaces Your Tooth Root</li>
          <li><strong>Implant Abutment Part</strong> – To support Your Final Crown</li>
          <li><strong>Implant Crown Part</strong> – To Make It Visible And Replace Your Tooth</li>
        </ul>
      </div>

      <div>
        <h6 style="color:#166280;font-size:22px;margin-top:20px" >Facts About Dental Implants That You Must Know...</h6>
        <ul>
          <li>Dental implants work like a permanent root for your teeth, just like your natural teeth.</li>
          <li>They are made of Titanium, which is strong and biocompatible with your body.</li>
          <li>An abutment connects the crown to the implant base.</li>
          <li>The entire system is lightweight and strong.</li>
          <li>Gives you the feel of real teeth – just like your natural ones.</li>
        </ul>
      </div>

      <div>
        <h6 style="color:#166280;font-size:22px;margin-top:20px" >Why Should I Go For A Dental Implant Treatment?</h6>
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
        <h6 style="color:#166280;font-size:22px;margin-top:20px" >What Are Dental Implants And Who Needs Them?</h6>
        <p>Dental implants have become one of the most effective treatments for getting rid of several dental health issues. They provide a permanent, fixed solution to replace multiple missing teeth and restore functionality and aesthetics.</p>
        <p>They are suitable for individuals who:</p>
        <ul>
          <li>Have lost one or more teeth due to decay, injury or other conditions</li>
          <li>Have sufficient bone to anchor the implants</li>
          <li>Are looking for a long-lasting, natural-looking tooth replacement option</li>
        </ul>
      </div>

      <div>
        <h6 style="color:#166280;font-size:22px;margin-top:20px" >More Services</h6>
        <ul>
          <li>Root Canal</li>
          <li>All on 4 Implants</li>
          <li>All on 6 Implants</li>
        </ul>
      </div>

      <div>
        <h6 style="color:#166280;font-size:22px;margin-top:20px" >Oral Tips</h6>
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
              <h6 style="color:#166280;font-size:22px;margin-top:20px" >All On 4 Implants Treatment.</h6>
              <p>All-on-4 Implants Is The Latest Dental Implant Technology That Requires Only Four Implants To Replace All Teeth In One Jaw.<br />Thus Instead of having one Implant for every missing tooth, Only Four Implants on your upper Jaw and Four Implants on your bottom Jaw will act as Anchors That once put in place will give You 12-14 Teeth in your upper Jaw and 12-14 Teeth in your low Jaw.</p>
            </div>
            <div>
              <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step By Step The Treatment Process</h6>
              <ul>
                <li><span>- Appointment # 1</span><p>Once you arrive at the clinic, Consultation, and Preliminary X Rays/ Impressions.</p></li>
                <li><span>- Appointment # 2</span><p>Surgical Placement of  All Four Implants Into The Jaw.</p></li>
                <li><span>- Appointment # 3</span><p>Fixing your new temporary provisional Teeth.</p></li>
                <li><span>- Appointment # 4</span><p>After your brief healing phase has occurred, Fix your new permanent final Teeth and you can leave The Clinic with a Brand new Set of Fixed Teeth.</p></li>
              </ul>
            </div>
            <div>
              <div>
                <h6 style="color:#166280;font-size:22px;margin-top:20px" >Advantages /benefits Of 4 On 1 Implants.</h6>
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
                <h6 style="color:#166280;font-size:22px;margin-top:20px" >Thus all-on-4 Implants Means.</h6>
                <ul>
                  <li>Less work for you when compared to other Implant-Supported treatments That require about six to eight Dental Implants.</li>
                  <li>Less invasive and reduced need for bone grafts.</li>
                  <li>Most cost-effective.</li>
                </ul>
              </div>
              <p>Smilessence The Specialist Dental Centre has all The modern and up-to-date advanced Implant Technologies, Expertise, and Equipment Since 2005 In its Options To replace missing teeth. At our specialized center, aided By Our Team Of Implant Specialists Since 2005, you Will Be Able To See That Natural Look as well as feel That Natural way just like your own Teeth In A short painless way.</p>
            </div>
            <div>
              <h3 style="color:#166280;font-size:22px;margin-top:20px" >Why All On 4 Implants are the Best?</h3>
              <p>The oral health of an individual plays a significant role in our quality of life. There are several treatment methods available right now based on the situation of the individuals. Some of the situations require people to opt for solutions relevant to the condition. Certain conditions related to oral health are so severe that the individual needs new a set of artificial teeth all over his/her jawbone. All on four is a treatment process widely used in such cases. It is a dental implant procedure that involves four dental implants and all the required artificial sets of teeth are fixed upon those four dental implants.
                Dental implants work as an artificial root for the human teeth upon which a crown or cap is fixed. Having individual implants work quite well for one or two implants. But there are some diseases when you have to replace multiple teeth adjacent to each other, and that approach won’t work much. All On Four dental implants work quite well in such cases. It is convenient, highly effective, and long-lasting. You will get to know whether you need these or not once you visit your dentist. So, it is only a matter of visiting the right dentist in order to get the best solution. When there is Smile Essence in your city, there is no need to go anywhere else. Smilessence has been one of the best options in Gurgaon for a long time. And they gained this status by satisfying a large number of customers with varying conditions related to their oral health. Make sure to log on to the website for more information about all On four implant costs.</p>
            </div>
          <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >How Do I Decide?</h6>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step By Step The Treatment Process:</h6>
    <ul>
    <span style="font-size:17px;color:#c90000">- Appointment #1</span>
      <li><p>Once you arrive at the clinic, Consultation, and preliminary x-rays/ impressions.</p></li>
      <span style="font-size:17px;color:#c90000">- Appointment #2</span>
      <li><p>Surgical placement of all six implants into the jaw.</p></li>
      <span style="font-size:17px;color:#c90000">- Appointment #3</span>
      <li><p>Fixing your new temporary provisional teeth.</p></li>
      <span style="font-size:17px;color:#c90000">- Appointment #4</span>
      <li><p>After your brief healing phase has occurred, Fix your new permanent final teeth and you can leave the clinic with a brand new set of fixed teeth.

</p></li>
    </ul>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Advantages / Benefits Of All On 6 Implants:</h6>
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
    <h3 style="color:#166280;font-size:22px;margin-top:20px">Importance of All On Six Implants</h4>
    <p>Dental implants play a huge role in the treatment of severe issues related to the oral health of individuals. Dentists come with varying treatment procedures to help people get rid of the underlying issue. In some cases, you can stop the decay of the teeth while there are some severe cases when a complete replacement is mandatory. Dental implants work the best in those cases. Dental implants play quite an important role in fixing such issues. But there are some limitations to this method as well. Certain issues related to oral health affect multiple teeth inside our mouth. In those cases, people might need multiple replacements.</p>
    <p>There are certain conditions in which the number of teeth to be replaced is quite high. That is why all On Four implants don’t work. Hence all On Six works the best in these cases. Let us discuss a bit about this implant technique before we start discussing anything else. In this technique, six implants are fixed in the jawbone of the individual. All On four implants work well in many cases but when the number of implants exceeds a certain limit, all On six implants are the only option.</p>
      <p>It is a method to create a permanent prosthesis that serves as a root for the tooth caps that will be mounted. It is versatile and will enhance your eating and speaking experience significantly. Apart from that, the recovery time is not much longer. This is one of the most important reasons why such a large number of people opt for All On Six dental implants. Smilessence is one of the prominent players in this field and you may consider them in case you need one. Get to know more about these implants like All On Six implants costs, etc. by visiting the website.</p>
    </div>

  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Advantages</h6>
    <ul>
      <li>Your  Denture is fixed to your jaws with implants.</li>
      <li>Allows you to use your denture just like your earlier original teeth.</li>
      <li>Better quality of life as well</li>
    </ul>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Fixing Dentures Using Full Jaw Implants</h6>
      <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 1</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >The First Step…</h6>
    <p>Clinical examination and scans are taken.</p>
    <img src="/assets/services/step1.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 2</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Fixing the Implants</h6>
    <p>Dental implants are placed to replace the lost teeth. By the time the implants are osseointegrating, you can immediately start wearing your earlier denture.</p>
   <img src="/assets/services/step2.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 3</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Fixing a Ball or Bar to Support Denture…</h6>
    <p>After osseointegration has taken place a ball or a bar is attached on top of the implants and the dentures are fixed.</p>
    <img src="/assets/services/step3.jpg" alt="Step 3 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 4</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Final Results…</h6>
    <p>The removable dentures are securely fixed on top of the implant with the ball/bar hence giving you the stability that is not there with your removable conventional dentures.</p>
    <img src="/assets/services/step4.jpg" alt="Step 3 Image" />
  </div>

  <div>
    <h3 style="color:#166280;font-size:22px;margin-top:20px">Having Troubles with Dentures? Here is How to Get Them Fixed?</h4>
    <p>Implants work as a nice means to solve some severe issues related to dental health. But it is not the case all the time. There are some cases when people start facing issues with the dentures that are fixed on implants. As implants are considered one of the most effective and permanent solutions. When someone starts facing even after opting for dental implants, this is really irritating trouble in many cases. Since we have found a large number of people looking for some solutions, in this case, we thought to give you some ideas about it. One of the most common issues that people face problem with dentures is damage and it needs to be fixed.</p>

    <p>It is very important to know the exact reason behind the underlying situation. The best thing you can do in this case is to visit a dentist. Once you visit the dentist, he/she will examine your situation and will come up with the right solution. There is always a need for some minor adjustments when someone gets dentures for the first time. And when the concerned person starts facing problems with it, the dentist will examine this situation precisely.</p>

    <p>You can get rid of this unfortunate situation with the help of Smilessence very easily. As they possess extensive experience and knowledge, they act as the best option for the majority of people who are looking for such services in or near Gurgaon. You may consider visiting the Smilessence website for getting more information about fixing dentures with implants costs.</p>

    <p>Many people who wear full or partial dentures are ideal candidates for this treatment simply because they are already used to dentures but want something more stable and permanent. The procedure can often be completed quickly and efficiently.</p>

    
  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Advantages</h6>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Placing The Teeth Implants For Fixed Bridge (The Procedure)…</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 1</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >First Step…</h6>
  <ul>
      <li>Clinical and X-ray evaluation is done.<li>
    </ul>   
    <img src="/assets/services/step5.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 2</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Fixing the implant…</h6>
 <ul>
      <li>
The 2 implants are installed.    <li>
This is normally done in a single session.
      </li>
      
    </ul>   
     <img src="/assets/services/step6.jpg" alt="Step 2 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 3</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Fixing the Bridge…</h6>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 4</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >End Results…</h6>
    <ul>
      <li>
          The new bridge will handle all the pressure that your strong, natural back teeth were able to do earlier. This allows you to eat whatever you desire.
      </li>
      
    </ul>
    <img src="/assets/services/step8.jpg" alt="Step 4 Image" />
  </div>

  <div>
    <h3 style="color:#166280;font-size:22px;margin-top:20px">What Should You Know About Multiple Teeth Replacement?</h4>
    <p>Teeth replacement works as a nice and versatile solution when it comes to getting rid of some severe dental health issues. The process is quite nice and convenient for people with several teeth missing. This process is often known as “the fixed bridge” process. The bridge contains replacement teeth fixed on dental implants that are embedded into the jawbone for permanent support. The implants are placed in the gaps of the missing teeth and act as artificial roots. Once your jaw heals, the bridge is attached and your smile is restored. This process can be performed in either the upper or lower jaws depending on the situation.</p>

    <p>This is how a number of people who are left with all their teeth need teeth replacement. But they don’t want to go through a complete denture or may feel they are cumbersome. But getting implants for missing teeth is a very convenient way to fix this issue. The process has gotten very popular over the past few decades. A fixed bridge that is supported by dental implants offers great convenience to those who want a stable and long-lasting solution. One more advantage is that these implants look and feel like your original teeth.</p>

    <p>You have to follow the same pattern in case of teeth replacement as well. Whether you need a single replacement or multiple ones, a dental implant gives the best results.</p>

    <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Advantages</h6>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Placing The Single Implant (The Procedure)…</h6>

    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 1</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >First Step…</h6>
    <ul>
    <li>The dentist makes a clinical examination and takes x-rays of the area to prepare for the procedure.</li>
    <ul/>
    <img src="/assets/services/step9.jpg" alt="Step 1 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 2</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Fixing the Single Implant…</h6>
    <ul>
    <li>The implant is installed.</li>
    <li>A cover/suturing material is also being done then a healing abutment or cover screw is placed on and left undisturbed to heal/integrate with the jawbone.</li>
    <li>For medically loaded implants are done when a temporary crown is loaded onto the implant immediately.</li>
    <ul/>
    <img src="/assets/services/step10.jpg" alt="Step 2 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 3</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Fixing the New Crown…</h6>
    <ul>
     <li>The final step is finalizing and placing the permanent crown on the implant. The new tooth is installed permanently.</li>
   
    <ul/>
    <img src="/assets/services/step11.jpg" alt="Step 3 Image" />
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 4</h6>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >End Results…</h6>
    <ul>
        <li>The new tooth should function just like a natural tooth.</li>

    <ul/>
    <img src="/assets/services/step12.jpg" alt="Step 4 Image" />
  </div>

  <div>
    <h3 style="color:#166280;font-size:22px;margin-top:20px">Know the Cost of Single Tooth Implant In Gurgaon</h4>
    <p>Teeth replacement has become one of the most common procedures to help people get rid of certain chronic issues with dental health. We are going to talk a bit about single tooth implants in this article. There is a huge number of people who are looking about the cost that will go into it in particular cases. A lot depends on the level of damage, placement area, and such other conditions. If someone wants a rough estimate, this process would cost somewhere between ₹18,000 to ₹60,000 or more. This might seem a bit costly but it is the best solution one can opt for when dealing with a single tooth replacement.</p>

    <p>There are some who want to know what you can do with your dental set in light of such situations. In case you are left with a single tooth gap that might be spoiling your smile or overall dental condition, single tooth implants are the best way out. This is a complete process that lets you have a very similar replacement as that of the lost natural tooth. This is why it has gained so much popularity among people who are not okay with dentures. This gives you your smile back with all the style and confidence that you need. You can enjoy your food and smile in public without any hesitation. Once the crown is placed on the implant, you are good to go for years and will have a complete feel of a natural tooth with no extra worries. We hope you get the best value out of your time and money through this process.</p>

    <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >As good as your natural teeth</h6>
    <p>A dental implant is strong and stable. Hence it makes your final replaced lost tooth look, feel, and function just like a natural tooth.</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Long term solution</h6>
    <p>Implants will last many years. With good care, implants can last a lifetime.</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Regain your natural smile</h6>
    <p>A face without teeth often appears sunken and sad. <span style="color:#e74c3c;">Dental implants</span> help in maintaining the natural shape of your face.</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Protect Healthy Bone</h6>
    <p>After you have got a tooth or teeth extracted, leaving any empty spaces in your mouth can cause loss and deterioration of the jawbone.</p>
    <p>Dental implants are the only procedure that preserves and stimulates natural bone thus preventing bone loss.</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Improved Speech</h6>
    <p>With most removable dentures, the teeth often slip within the mouth giving you slurred speech. <br />Dental implants allow you to speak without the worry that any teeth might slip.</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Eat your favorite foods</h6>
    <p>You can enjoy most of the foods you love without hesitation. You can bite naturally and eat most of the things your heart desires without feeling uncomfortable.</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Improved comfort</h6>
    <p>As these implants become an integral part of you, you will not feel the discomfort of foreign removable dentures.</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Improved oral health</h6>
    <p>Dental implants do not need reducing or trimming of your other teeth, which a dental bridge requires. Thus since more of your own teeth are left intact it indirectly improves your long-term oral health.</p>
  </div>

  <p><strong>Smilessence The Specialist Dental Centre</strong> is India’s best dental implant center, situated in Palm Vihar Gurgaon. Our clinic is renowned across the world as a destination for world-class dentistry, with most of our patients flying to us from abroad.</p>

  <p>Read More about<a href="#"> Dental Implants Types and Advantages</a></p>

  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
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
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 1</h6>
    <h5>First Evaluation Clinically and x-ray</h5>
    <p>A panoramic x-ray and oral examination are done to determine the implant site and your bone condition</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 2</h6>
    <h5>Preparing The Implant Site</h5>
    <p>If there is still a broken or carious tooth present, the tooth will be removed.</p>

    <p>If immediate implants are to be done it’s dependent it depends on the presence of any infection and your bone condition.</p>

    <p>If immediate implants are not suited, the site would be left to heal for about a few weeks to 2-3 months.</p>

    <p>In patients where there is less bone structure, bone grafting may be recommended as an additional procedure and after the bone grafting the implant site may be left to heal for a few weeks to 2-3 months.</p>

    <p>Once healthy bone material has been established and the site is ready, the implant is ready to be put into place</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 3</h6>
    <h5>Placing The Implant</h5>
    <ul>
      <li>
        <p> The bone is prepared,…….the implant is embedded …….. the tissue is sutured.</p>
      </li>
    </ul>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 4</h6>
    <h5>Healing Process(Osseointegration of your Implant With The Bone)</h5>
    <ul>
      <li> The implant is left to integrate and heal with the jaw bone.</li>
      <li> If the immediately loaded implant is being done …………….we go to step 5.</li>
      <li>If the immediately loaded implant is not being done…………..the implant is left to osseointegrate for about 3 to 6 months before step 5 is done.</li>
    </ul>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 5</h6>
    <h5>Attaching The Abutment</h5>
    <p>When Osseointegration has been achieved ready, an abutment will be attached to the implant and this will act as a support for the new crown or bridge or denture</p>
  </div>

  <div>
    <h6 style="color:#166280;font-size:22px;margin-top:20px" >Step 6</h6>
    <h5>Placing The Crown or Bridge or Denture</h5>
    <p>Impressions are taken and the crown/bridge or overdenture is made and fixed.</p>
  </div>

  <p> Everything You Need To Know<a href="#"> About Dental Implant Surgery.</a></p>

  <p><strong>Smilessence The Specialist Dental Centre</strong> is India’s best dental implant center, situated in Palam Vihar Gurgaon. Our clinic is renowned across the world as a destination for world-class dentistry, with most of our patients flying to us from abroad.</p>

 <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
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
  <h3 style="color:#166280;font-size:27px" className="mb-4">Astra Tech Implants</h3>
  <img src="/assets/services/roxolid-dental-implants.jpg" alt="Astra Tech Implants" className="img-fluid mb-3" />
  <p>Dentsply Astra Tech dental implant system is a uniquely shaped, patented implant. It is specifically designed for tighter connections which reduce micro-movement. The implant has  <span style="color:#166280;font-weight:600">Astra Tech featured OsseoSpeed™</span> which is a unique fluoride-modified nanostructure implant surface that stimulates early bone formation and provides stronger bone-to-implant bonding and <span style="color:#166280;font-weight:600">MicroThread™</span>, which are minute threads on the implant neck that offer the best load distribution</p>

  <div>
    <h3 style="color:#166280;font-size:27px" className="mb-4">Straumann SLA Implants</h3>
    
    <p style="margin-top:10px">The Straumann SLA dental implant System is one of the most established and longest-standing ranges of dental implants designed for long-lasting and esthetic tooth replacement solutions used to replace individual teeth, carry multi-unit bridges and attach fixed or removable full dentures.</p>
    <img  src="/assets/services/straumann-SLA-implants.jpg" alt="SLActive Surface" className="img-fluid mb-3" />
    <p style="margin-top:10px">In 1994, ITI Straumann developed the ground-breaking SLA surface that reduced the average healing time from 12 weeks (TPS surface) to only 6-8 weeks. Shortly after its introduction, the macro- and microstructured, osteoconductive SLA surface became the gold standard in implant technology.
          <p>Roughened surfaces of the Straumann SLA implants have shown advantages over smooth surfaces in terms of better osseointegration, enhanced bone-to-implant contact as well as better biomechanical and functional stability.</p>
    </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">SLActive Implants</h3>
    
    <p>The SLActive surface takes the proven concept of SLA one step further to set the new surface benchmark.</p>
        <img  src="/assets/services/SLActive-implants (1).jpg" alt="SLActive Surface" className="img-fluid mb-3" />
      <p>SLActive is based on the scientifically proven SLA surface topography but exhibits a fundamentally improved surface chemistry.</p>
    <p>Due to its ideal conditioning, the chemically active and hydrophilic SLActive surface significantly promotes the initial healing reaction allowing a faster osseointegration process and higher implant stability.</p>
  </div>

  <div>
    <h3 style="color:#166280;font-size:27px;margin-top:20px" className="mb-4">Bone Level Implants</h3>
    <p>The <span style="color:#166280;font-weight:600" >Straumann®</span>Bone Level Implant provides you with a solution for all bone-level treatments. </br> These implants are designed based on the latest technology and scientific research on biological principles. This facilitates predictable esthetic results and high success rates across indications.</p>

    <h6 style="color:#166280;font-size:22px;margin-top:20px"  style="color:#166280;font-size:20px">The Straumann Bone Level Implant:</h6>
    
    <ul>
    <li>Provides surgical and restorative simplicity for all kinds of indications.</li>
    <li>Reduces screw component complexity.</li>
    <li>Supports bone preservation and ensures predictable aesthetic results.</li>
    </ul>
    <img src="/assets/services/the-straumann-bone-level-implant (1).jpg" alt="Bone Level Implants" className="img-fluid mb-3" />
    <img src="/assets/services/the-straumann-bone-level-implant (1).jpg" alt="Bone Level Implants" className="img-fluid mb-3" />
  </div>

  <div>
    <h3  style="color:#166280;font-size:27px;margin-top:20px"  className="mb-4">Roxolid Dental Implants</h3>
    <p>Roxolid implant is a homogenous metallic alloy composed of the elements titanium and zirconium. Roxolid is thus a new DNA material for dental implants.</p>

    <p>These two metallic alloy elements provide a higher tensile strength compared to pure titanium.</p>

    
    <p>The higher tensile strength thus enables small diameter implants to be placed with more confidence.</p>
    

    <h6 style="color:#166280;font-size:22px;margin-top:20px"  style="color:#166280;font-size:20px">Roxolid dental implants allow:</h6>
     <ul style="margin-top:12px">
      <li>More confidence in small diameter implants due to high strength with excellent osseointegration.</li>
      <li>The flexibility of having more treatment options because Roxolid provides a wider choice of treatment options with small diameter implants allowing optimal treatment in specific clinical situations.</li>
      
    </ul>

    <img style="margin-top:15px" src="/assets/services/asdf.jpg" alt="Roxolid Dental Implants" className="img-fluid mb-3" />

    <p> Having Troubles with Dentures:<a style="color:red" href=""> Here is How to Get Them Fixed?</a> </p>
  </div>
<div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`





  },



   {
    id: 1,
    service_title: "Child Dentistry",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/child-dentistry-banner.jpg",
    default_image: "/assets/services/child-dentistry-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 style="color:#166280;font-size:27px" className="mb-4">Know about Child Dentistry and the Best Options Available in Gurgaon</h3>
  <p>Keeping ourselves healthy should be a priority. Taking care of your health means you are considering the needs of each and every organ of your body. We all use to take care of it over time but when we are kids, a knowledgeable elder person is needed for that and our parents do this job exceptionally. Talking of the common issues that children face, issues related to teeth and gums are the most common ones. It is mainly because of the love of children for items like chocolate, ice cream, etc. This is the main reason why a large number of people are always looking for the best options when it comes to child dentistry. In case you are also searching for the same, we have got enough help for you.</p>

  <div>
    <h3 style="color:#166280;font-size:27px" className="mb-4">What is Child dentistry?</h3>
    
    <p style="margin-top:10px"> <strong> Child dentistry</strong> or <strong> Pediatric dentistry</strong>  is a branch of dentistry that takes care of oral issues occurring in children till they are adolescents. The dentists in this field have expertise in taking care of oral health issues during different stages of their childhood. It is a common misconception among some parents that such issues will get away because these teeth are not permanent but those parents are wrong.</p>
    <p style="margin-top:10px">
There are several cases when children acquire an oral disease that becomes permanent trouble for them. Even if the issue is temporary in nature, it is going to cause a certain level of discomfort to your children. It is definitely going to affect the usual lifestyle of a child. That is the main reason why you have to take care of such issues minutely. And you will get plenty of help from the child dentistry experts in this regard.</p>

  </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">What can you expect from them?</h3>
    
    <p>It is essential to have some idea about the services you are going to get from these dentists before you visit them. Having some idea about it will also help you a lot in choosing the right option based on the particular situation of your child. We are dedicating this section of the article to explaining the way these dentists will facilitate your children with different solutions.</p>
    <p>First, these dentists are able to perform oral health exams to get precise ideas about certain risks. Here, they are mainly concerned about caries in mother and child. This is a vital thing to care about and it is not something you will get to know on your own. So, you should pay a visit to the expert in order to get a clear idea about it.</p>
    <p>This is the place that has all the modern resources along with skilled professionals to give you the best results for the perfect and healthy teeth of your child. We help all those who are searching for things like <span style="color:#166280;font-weight:600">child dentistry in Gurgaon.</span> </p>
  </div>

 
 

  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`





  },


  {
    id: 1,
    service_title: "Gum Treatment",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/gum-treatment-banner.jpg",
    default_image: "/assets/services/gum-treatment-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 style="color:#166280;font-size:27px" className="mb-4">Gum Diseases Treatment in Gurgaon, India</h3>
  <p>There is nothing more valuable than a healthy body in this world. There are some organs that are more susceptible to acquiring issues as compared to others and we tend to ignore the symptoms in the beginning. Issues related to oral health are something like that. There are a variety of problems we face that are related to our oral health. Among all of them, the issues related to gums are quite common. There is a large number of things you need to know about in order to keep your gums healthy. Since this is going to be about gum diseases, let's start with a brief introduction to the topic.</p>

  <div>
    <h3 style="color:#166280;font-size:27px" className="mb-4">What you should know about these common gum diseases?</h3>
    
    <p style="margin-top:10px">There are mainly two types of diseases that may occur in our gums i.e. Periodontitis and gingivitis. Both these diseases are collectively called gum diseases. There are some things worth knowing in order to get some idea about it in the early stages. Gum disease is something that occurs as a result of some infection or inflammation. The infection/inflammation is harmful to the supporting tissues of the human teeth and the gums as well. Both these diseases are quite common in adults and these can be cured, prevented, or reduced based on the specific situation of the individual. Let us talk about these both briefly.</p>
  </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">Gingivitis</h3>
    
    <p>It is often considered a mild form of the disease. But it may have severe effects on your gums if you leave it unattended for long. The dentists say that it happens in the majority of cases as a result of poor oral hygiene. Some other factors like substance abuse, smoking, decreased immunity, etc. might also be a reason in some cases.</p>
    <p>Its major symptoms include <span style="color:#166280;font-weight:600">bleeding gums</span> and swollen gums, bright red or purple-red gums, sore mouth, etc. The preventive measures that you should opt for include following proper oral hygiene. Healthy oral hygiene consists of things like brushing our teeth twice a day and getting them cleaned by experts every six months, etc. Though the effects of this disease reduce once a professional take care of it but it may come back if you don't stick to strict and proper oral hygiene.</p>
  </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">Periodontitis</h3>
    <p>Let us talk about the other one. Periodontitis occurs when the gingivitis is left untreated over time. And this is something serious as the dentists always warn about it. It occurs when the plaque spreads below the gum line, it will reach the jaw bone and may lead to the breakdown of teeth. In the majority of cases, periodontitis causes the supporting gums to pull back and gaps are formed between teeth. In certain cases, such teeth need to be removed because they become very loose over time.</p>
    <p>Its major symptoms include swollen or tender gums and the formation of pus around the teeth and gums. This can also be prevented by following proper oral hygiene guidelines as we have already mentioned above. One thing we would like to add here. It is nice to get your teeth professionally cleaned at least every six months. But those who have a dry mouth usually or take blood pressure medicines or smoke should get their teeth cleaned even more often.</p>
        <p>
You can take care of your oral health very easily by being in contact with the right  <span style="color:#166280;font-weight:600">dental clinic in Gurgaon</span>  . And we have got a nice solution for you in this regard, let us talk about that.
</p>
    </div>


      <div>
    <h3 style="color:#166280;font-size:27px;margin-top:20px">Final thoughts</h3>
    <p>People are living a very busy life right now and that is why they might not be able to find enough time to take care of everything on their own. But opting for a routine checkup with a skilled dentist will be highly appropriate and fruitful for you. In case you are looking for the best, we have got a nice solution and it is called   <span style="color:#166280;font-weight:600">Smilessence - The Specialist Dental Centre</span>  ..</p>
    <p>All those who want to know about  <span style="color:#166280;font-weight:600">gum disease treatment in Gurgaon</span>  should consider this option for sure. It is the perfect combination of highly modern resources along with experienced experts. Visit our dental clinic in  <span style="color:#166280;font-weight:600"> Palam Vihar</span> Gurgaon for more information about other essentials like costs, facilities available, etc.</p>
    </div>



  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`





  },

  
  {
    id: 1,
    service_title: "Porcelain Crown & Bridges",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/porcelain-crown-bridges-banner.jpg",
    default_image: "/assets/services/porcelain-crown-bridges-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 style="color:#166280;font-size:27px" className="mb-4">Dental Crowns and Bridges Treatment in Gurgaon, India</h3>
  <p>Dental issues are among the most annoying ones when it comes to impacting your lifestyle. Apart from making you uncomfortable while smiling in front of others or raising many issues while you chew food, the problems that you will face from dental issues are quite severe. Thanks to the advancements in this field over the past few decades, dentists are now able to solve the majority of issues conveniently and give you the perfect and confident smile back. Let us get to the main subject under consideration i.e. the importance of crowns, especially the <span style="color:#166280;font-weight:600"> porcelain crown bridges.</span> </p>

  <div>
    <h3 style="color:#166280;font-size:27px" className="mb-4">Why do we need Dental Crowns?</h3>
    
    <p style="margin-top:10px">There are several cases when the tooth of an individual gets damaged over time. And it may not be due to some underlying issue always. In some cases, it is because of tooth decay while in others the shape of teeth changes due to consistent usage over time. In order to stop the teeth from damaging further, the dentists opt for what we call crowns. Crowns are nothing but a cover made up of strong and resistant material to protect the damaged or deformed teeth from external things and give a <span style="color:#166280;font-weight:600"> natural appearance to the teeth.</span> </p>
  </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">How does the dental crown help people?</h3>
    
    <p>When any part of our teeth gets damaged, the damage will start increasing over time if you don’t pay much attention to it. This is the main reason why you have to opt for solutions like teeth crowns. Teeth crowns are very helpful in stopping further damage to your natural teeth. These crowns are fixed on your damaged teeth and cover the teeth completely hence saving the teeth from all the external agencies that might cause further damage. In certain cases, the teeth of a person get damaged as a result of some accident or other injuries. In that case, the damaged teeth are not going to gain their original form on their own. And that is where crowns may help the teeth a lot in <span style="color:#166280;font-weight:600">  covering the damaged tooth</span>. It will not only look normal but also help the individuals while chewing food.</p>
        <p>There are several other situations where crowns help people with dental issues. Some diseases cause the teeth to get extremely discolored. Tooth crowns are highly helpful in that case as well. If there is a need for a large filling in a tooth, it will leave a little portion of the actual tooth visible from the outside. Such a situation is highly inconvenient and looks inappropriate. You may opt for crowns, in this case, to give a proper shape to the deformed tooth. Some dental issues damage the teeth completely and that is when people have to opt for dental implants. Dental implants are fixed to the jaw bone by replacing the actual root of the tooth. Tooth crowns are fixed on the dental implants in place of the natural teeth. As a result of that, the person is able to use his/her artificial tooth the way he or did his natural teeth.</p>

    </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">Reasons why porcelain crowns are the best?</h3>
    <p>Porcelain crowns are the best in many ways because they come with several features that people already need. The first thing that people want with crowns is a natural appearance. And this is exactly what people get porcelain crowns. Porcelain crowns appear very much similar to the adjacent teeth and that is why you get a perfectly natural feel with these ones.</p>
    </div>


      <div>
    <h3 style="color:#166280;font-size:27px;margin-top:20px">Why should you choose Smilessence?</h3>
    <p> <span style="color:#166280;font-weight:600"> Smilessence - The Specialist Dental Centre</span>  is not a new name when it comes to providing the best-in-class services in this category. The first thing you need to know about us is the fact that we have over 15+ years of experience in this field. Whether your teeth need a porcelain crown or any other thing, our experienced dentists are able to give you the best results. Visit our <span style="color:#166280;font-weight:600">  dental clinic in Palam Vihar Gurgaon</span>  for more information.</p>
    </div>



  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`





  },


  
  {
    id: 1,
    service_title: "Digital Dental X-Rays",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/digital-x-rays-banner.jpg",
    default_image: "/assets/services/digital-x-rays-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 style="color:#166280;font-size:27px" className="mb-4">A Basic Guide to Digital Dental X-Rays</h3>
  <p>Dental health issues are quite common these days. There is a large number of things that put our dental health at risk right now. The main reason behind such issues can be accredited to our changed lifestyle as compared to older times. In earlier times, people used to consume mainly those food items that came directly out of the farm. Right now, the majority of things that we or others consume are quite high in sugar. Some of the most common items in this category include ice-creams, chocolates, etc. Almost all the items in this category are quite harmful to our teeth. This article is going to be about dental health and digital dental x-rays. <span style="color:#166280;font-weight:600">digital dental x-rays..</span> </p>

  <div>
    <h3 style="color:#166280;font-size:27px" className="mb-4">Why should you take care of it?</h3>
    
    <p style="margin-top:10px">Being healthy is highly important because of a large number of reasons. But health is something entirely related to your whole body. If you are more concerned about a particular organ of your body while you are not caring about the other, you are not a healthy person. Apart from it, you are also doing injustice to your body. And when you face issues with your oral health, it becomes a nightmare. There is a large number of reasons why oral health issues can be a major setback for the quality of life. </p>
    <p style="margin-top:10px">Dental issues create quite a bit of issues for your mental and physical health. So, taking care of your oral health, in particular, is quite an important thing to care about. But you can’t get proper help everywhere. In order to get things done, you must reach the right institution for taking care of dental health. Getting the right treatment is an easy thing only if you reach the right institution. Your problems will start to fade immediately once you reach the right dentist. But there are some things you need to care about when it comes to choosing the right institution. Since we are here to talk about the right institutions, let us get started with that discussion first.</p>
  </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">How does the dental crown help people?</h3>
    
    <p>When any part of our teeth gets damaged, the damage will start increasing over time if you don’t pay much attention to it. This is the main reason why you have to opt for solutions like teeth crowns. Teeth crowns are very helpful in stopping further damage to your natural teeth. These crowns are fixed on your damaged teeth and cover the teeth completely hence saving the teeth from all the external agencies that might cause further damage. In certain cases, the teeth of a person get damaged as a result of some accident or other injuries. In that case, the damaged teeth are not going to gain their original form on their own. And that is where crowns may help the teeth a lot in <span style="color:#166280;font-weight:600">  covering the damaged tooth</span>. It will not only look normal but also help the individuals while chewing food.</p>
        <p>There are several other situations where crowns help people with dental issues. Some diseases cause the teeth to get extremely discolored. Tooth crowns are highly helpful in that case as well. If there is a need for a large filling in a tooth, it will leave a little portion of the actual tooth visible from the outside. Such a situation is highly inconvenient and looks inappropriate. You may opt for crowns, in this case, to give a proper shape to the deformed tooth. Some dental issues damage the teeth completely and that is when people have to opt for dental implants. Dental implants are fixed to the jaw bone by replacing the actual root of the tooth. Tooth crowns are fixed on the dental implants in place of the natural teeth. As a result of that, the person is able to use his/her artificial tooth the way he or did his natural teeth.</p>

    </div>

  <div>
  <h3 style="color:#166280;font-size:27px;margin-top:20px">What is a digital dental x-ray?</h3>
    <p>Knowing about the digital dental x-ray is highly important before we start talking about anything else. Modern medical science has been very effective for a large number of reasons. The amount of radiation that a patient is normally exposed to is high in case of the <span style="color:#166280;font-weight:600"> digital dental x-rays</span> as compared to conventional x-rays. But the <span style="color:#166280;font-weight:600"> digital dental x-rays</span>  holds several advantages over the conventional ones.</p>
        <p>The use of <span style="color:#166280;font-weight:600"> digital dental x-rays</span> arises when the dentist is unable to see the underlying disease related to the teeth and the surrounding tissues through normal oral examinations. These <span style="color:#166280;font-weight:600"> digital dental x-rays</span> techniques let the dentists look more closely into this situation and hence enable them to come up with relevant solutions. There is a large number of benefits for dentists when it comes to using diagnostic techniques like <span style="color:#166280;font-weight:600"> digital dental x-rays</span>.
        <p>Some of the most common problems that a <span style="color:#166280;font-weight:600"> digital dental x-rays</span> can detect include the following:</p>
      <ul>
      
      <li>It helps a lot in detecting tooth decay that is not visible through usual oral examinations.</li>  
      <li>Facilitates as a significant help in a number of dental procedures i.e. tooth braces, dentures, dental implants, etc.</li>
      </ul>
    </div>


      <div>
    <h3 style="color:#166280;font-size:27px;margin-top:20px">A better option for you in this case</h3>
    <p> In case you are searching for a better option when it comes to getting the <span style="color:#166280;font-weight:600">  best digital dental X-ray</span>  in Gurgaon,  <span style="color:#166280;font-weight:600"> Smilessence - The Specialist Dental Centre</span>  is here for your help. It is full of highly skilled dentists and hence works as a perfect place for all your needs when it comes to maintaining your dental health. Your city might seem to fill with enough clinics in terms of dental health but  <span style="color:#166280;font-weight:600"> Smilessence - The Specialist Dental Centre</span>  is above the normal ones in many ways. Be it the availability of skilled dentists, or the use of ultra-modern sets of equipment, everything is available. It can be your one-stop solution to all your needs regarding dental health. In case you are also among the ones searching for digital <span style="color:#166280;font-weight:600">  dental x-ray prices.</span></p>
    </div>



  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`





  },


    {
    id: 1,
    service_title: "Teeth Braces",
    service_title_url: "/images/banners/cloud-banner.jpg",
    banner_image: "/assets/services/banner/braces-banner.jpg",
    default_image: "/assets/services/braces-smilessence.jpg",
    upload_icon: "/icons/dental-implant.svg",
    order: 2,
    display: true,
    status: true,
description: `<div className="col-lg-8 col-12">
  <h3 style="color:#166280;font-size:27px" className="mb-4">What Should You Know About Teeth Braces?</h3>
  <p>There are some problems related to human teeth that are not entirely the fault of the individual. In the majority of cases, the reason for dental issues is believed to be a lack of proper oral hygiene or the consumption of food items that are not healthy for oral health. But there are some cases when the individual is not responsible for the oral health-related issues. Let us talk about a condition called Malocclusion. Malocclusion is a condition when the alignment of the teeth is not right. In some cases, it is due to genetics, while in others it might be due to an accident or something like that. The most effective and commonly used method used to care for this situation is a teeth brace. Though there are surgical methods available as well dentists opt for that in severe conditions. We are going to talk a lot about <span style="color:#166280;font-weight:600"> teeth braces</span>, So, let us get started without further delay. </p>

  <div>
    <h3 style="color:#166280;font-size:27px" className="mb-4">What are teeth braces?</h3>
    
    <p style="margin-top:10px">There has been significant innovation in the field of teeth braces over the past few years. In earlier times,  <span style="color:#166280;font-weight:600"> teeth braces</span> were considered to be highly uncomfortable to wear. If you take a closer look, you will find that teeth braces are used mostly by adolescents. Since the earlier versions of
<span style="color:#166280;font-weight:600"> teeth braces</span> are made from metals, the majority of people considered these braces to be not much good-looking. Apart from that, the braces were not so easy to fix on the human teeth. The presence of metal contraptions in the <span style="color:#166280;font-weight:600"> teeth braces</span> often led to other issues inside the mouth.</p>


<p style="margin-top:10px">
But the situation has changed a lot now. Now there are braces that are less noticeable as compared to the older ones. In fact, these braces are significantly less-noticeable if you compare these with older braces. And apart from that, the availability of options has also increased a lot now. There have been a lot of improvements in this field whether you talk about the size, effectiveness, or anything else.</p>


<p style="margin-top:10px">
The <span style="color:#166280;font-weight:600"> teeth braces</span> of this age are not only made of metals. They can be made up of ceramic, plastic, metal, or a combination of them. These braces are quite small as compared to the conventional ones. The reduction in the size of these braces has given the dentists enough freedom to fit these braces in the back of the teeth as well. Having these braces on at the back of the teeth is extremely favorable for individuals.
</p>

  <p style="margin-top:10px">The majority of people themselves lack self-esteem when the metal braces are visible in the front of the teeth. But now the problems are not so evident with braces. There are several other types of braces as well that are even more convenient for individuals. Invisible braces have also become one of the most popular options right now. Though these are a little expensive as compared to the other braces they are almost invisible to others. This is the most significant reason why people are opting for <span style="color:#166280;font-weight:600"> invisible braces</span>.</p>
  
</div>




  <div>



  <h3 style="color:#166280;font-size:27px;margin-top:20px">Smilessence for the best teeth braces</h3>
    
<p style="margin-top:10px"> <span style="color:#166280;font-weight:600">  Smilessence - The Specialist Dental Centre </span> providing highly effective treatments for oral health issues. They have housed together some of the best dentists in the town and that is the main reason why you may count on them for the best solutions. When it comes to teeth braces, you will be able to get a variety of solutions based on your particular condition. In case you need one, visiting them would be the best thing for you to get some ideas about the next steps. In fact, you should visit <span style="color:#166280;font-weight:600">  www.smilessence.co.in</span> if you want to know more about <span style="color:#166280;font-weight:600">  teeth braces cost in Gurgaon</span>.</p>
    </div>


  <div style="margin-top:20px">

    <p style="color:black;margin-bottom:0px" ><strong>What is a dental implant?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prostheses (replacement teeth) that are made to match your natural teeth. They are made from biologically neutral pure Titanium or titanium alloys accepted by the human body, fusing with the jawbone to form a secure base for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px"  ><strong>Will general anaesthesia be administered for the entire procedure?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>What is the failure rate of immediate dental implants?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How long do Basal implants last?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>

    <p style="color:black;margin-bottom:0px" ><strong>How do I care for my new set of permanent teeth?</strong></p>
    <p>Dental implants provide a strong foundation for permanent or removable prosthesis (replacement teeth) that are made to match your natural teeth. They are manufactured from biologically neutral pure Titanium or titanium alloys,that is accepted by the human body and these implants fuse with the jawbone to form a secure foundation for tooth replacement.</p>
  </div>
</div>`





  },
];

export default service_data;