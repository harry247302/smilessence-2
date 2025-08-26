import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import Awards from "./Awards";


export default function AwardsPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Our Awards" subtitle="Our Awards" bg_img="blog-breadcrumb-bg" />
      <Awards />
      <FooterOne />
    </Wrapper>
  )
}
