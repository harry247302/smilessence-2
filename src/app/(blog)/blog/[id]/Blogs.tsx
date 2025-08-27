import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

import FooterTwo from "@/layouts/footers/FooterTwo";
import CtaHomeTwo from "@/components/homes/home-2/CtaHomeTwo";
import BlogArea from "@/components/blog/BlogArea";


 

export default function Blog() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Blog" subtitle="Blog" bg_img="blog-breadcrumb-bg" />
      <BlogArea/>
      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  )
}
