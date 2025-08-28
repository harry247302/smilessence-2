import Breadcrumb from '@/common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper'

import JobListArea from './JobListArea'
import Gallery from './Gallery'
import FooterOne from '@/layouts/footers/FooterOne'
 

export default function Career() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Gallery" subtitle="Gallery" bg_img="career-breadcrumb-bg" />
      <Gallery />
      {/* <JobListArea /> */}
      {/* <CtaHomeTwo /> */}
      <FooterOne />
    </Wrapper>
  )
}