import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import Achievements from "./Achievements";
import FooterOne from "@/layouts/footers/FooterOne";


export default function AchievementsPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Our Research" subtitle="Our Research" bg_img="blog-breadcrumb-bg" />
      <Achievements />
      <FooterOne />
    </Wrapper>
  )
}
