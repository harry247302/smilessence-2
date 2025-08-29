import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
// import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import PortfolioArea from "./PortfolioArea";
import FooterOne from "@/layouts/footers/FooterOne";



export default function Portfolio() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="International Services" subtitle="International Services" bg_img="portfolio-breadcrumb-bg" />
      <PortfolioArea />
      {/* <CtaHomeTwo /> */}
      <FooterOne/>
    </Wrapper>
  )
}
