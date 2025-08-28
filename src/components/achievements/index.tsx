import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import Achievements from "./Achievements";
import FooterOne from "@/layouts/footers/FooterOne";


export default function AchievementsPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Our Achievements" subtitle="Our Achievements" bg_img="singlecareer-breadcrumb-bg" />
      <Achievements />
      <FooterOne />
    </Wrapper>
  )
}
