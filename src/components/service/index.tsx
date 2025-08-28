"use client";

import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb2 from "@/common/Breadcrumb2";
import ServiceArea from "./ServiceArea";

import service_data, { ServiceItem } from "@/data/service-data";

// Utility function to normalize strings (slugify)
const normalize = (str: string) =>
  str.toLowerCase().replace(/[\s\-]+/g, "").replace(/[^\w]/g, "");

const Service: FC = () => {
  const pathname = usePathname();
  const [service, setService] = useState<ServiceItem | null>(null);

  const lastSegment = decodeURIComponent(
    pathname.split("/").filter(Boolean).pop() || ""
  );

  useEffect(() => {
    const normalizedSegment = normalize(lastSegment);

    const matchedService = service_data.find(
      (item) => normalize(item.service_title) === normalizedSegment
    );

    setService(matchedService ?? null);
  }, [pathname]);

  return (
    <Wrapper>
      <HeaderOne />

      <Breadcrumb2
        title={service?.service_title || "Service Details"}
        subtitle="Service Details"
        bg_img={service?.banner_image}
      />

      {service ? (
        <ServiceArea service={service} />
      ) : (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>Service not found</h2>
          <p>Please check the URL or return to the homepage.</p>
        </div>
      )}

      <FooterOne />
    </Wrapper>
  );
};

export default Service;
