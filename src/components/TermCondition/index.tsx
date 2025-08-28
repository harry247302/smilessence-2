
import Breadcrumb from '@/common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper'
import TermConditionArea from './TermConditionArea'
// import CtaHomeTwo from '../homes/home-2/CtaHomeTwo'
// import FooterTwo from '@/layouts/footers/FooterTwo'
import FooterOne from '@/layouts/footers/FooterOne'
 

export default function TermCondition() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Term & Conditions" subtitle="Term & Conditions" bg_img="termcondition-breadcrumb-bg" />
      <TermConditionArea />
      {/* <CtaHomeTwo /> */}
      <FooterOne />    
    </Wrapper>
  )
}
