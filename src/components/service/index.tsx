"use client";

import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServiceArea from "./ServiceArea";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";

import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import service_data, { ServiceItem } from "@/data/service-data";

// interface ServiceProps {
//   service: ServiceItem[];
// }

const Service =   () => {
  const pathname = usePathname();
  const [service, setService] = useState<ServiceItem | null>(null); // Use single item, not array

  const lastSegment = decodeURIComponent(
    pathname.split("/").filter(Boolean).pop() || ""
  );

  useEffect(() => {
    const filtered = service_data.find(item => item.service_title === lastSegment);
    setService(filtered ?? null);
    // console.log(lastSegment, "=================service==================");
  }, [pathname]);
  return (
    <Wrapper>
      <HeaderOne />

      <Breadcrumb
        title={service?.service_title || "Service Details"}
        subtitle=""
        bg_img="service-breadcrumb-bg"
      />

      {service && <ServiceArea service={service} />}

      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  );
};

export default Service;
