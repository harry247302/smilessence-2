import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
// import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import SingleBlogArea from "./SingleBlogArea";
import { ServiceItem } from "@/data/service-data";
import { FC } from "react";
import FooterOne from "@/layouts/footers/FooterOne";

interface ServiceProps {
  data: ServiceItem[];
}

const SingleBlog: FC<ServiceProps>  = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" bg_img="singleblog-breadcrumb-bg" />
      <SingleBlogArea />
      {/* <CtaHomeTwo /> */}
      <FooterOne />
    </Wrapper>
  );
};

export default SingleBlog;