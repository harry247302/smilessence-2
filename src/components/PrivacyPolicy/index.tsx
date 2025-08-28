
import Breadcrumb from '@/common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper'
import FooterOne from '@/layouts/footers/FooterOne'
import PrivacyPolicyArea from './PrivacyPolicyArea'
 

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Privacy Policy" subtitle="Privacy Policy" bg_img="termcondition-breadcrumb-bg" />
      <PrivacyPolicyArea />
      {/* <CtaHomeTwo /> */}
      <FooterOne />    
    </Wrapper>
  )
}
