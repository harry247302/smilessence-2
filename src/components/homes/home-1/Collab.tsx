import React from 'react'

import service_data_two from '@/data/service-data-two'
import RightArrawIcon from '@/svg/RightArrawIcon'
import Link from 'next/link'

const reviewCards = [
    {
        logo: "/assets/images/v2/google-removebg-preview.png", // Replace with your Google logo path

        description: "1,153 Google reviews For Cosmodontist",
    },
    {
        logo: "/assets/images/v2/practo.png", // Replace with your Practo logo path
        description: "244+ Practo Reviews For Cosmodontist",
    },
];

const Collab = () => {
    return (
        <section className="luminix-padding-section5">
            <div className="container">
                <div className="luminix-section-title center" >
                    {/* <h6>Our Services</h6> */}
                    <h2 style={{ fontSize: "50px" }}>5 Star Rated Dental Clinic in India</h2>
                </div >
                <div className="row">
                    {reviewCards.map((item, i) => (
                        <div key={i}  style={{ width: "300px", margin: "auto" }}>
                            <div className={`luminix-iconbox-wrap gap-5`} style={{ boxShadow:"5px 5px 10px #d5d5d5;" }}>
                                <div style={{ border: "0px solid black", display: "flex", justifyContent: 'center', alignContent: 'center' }}>
                                    <img src={item?.logo} style={{ width: "200px", margin: "auto" }} alt="" />
                                </div>
                                <div className="luminix-iconbox-content mt-5" >
                                    <p style={{textAlign:'center'}}>{item.description}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Collab
