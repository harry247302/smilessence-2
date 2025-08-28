import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SingleServiceArea from "./SingleServiceArea";

import FooterTwo from "@/layouts/footers/FooterTwo";
import FooterOne from "@/layouts/footers/FooterOne";

 

 
const BlogSingle = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Dynamic Blog" subtitle="Blog Details" bg_img="singleservice-breadcrumb-bg" />
      <SingleServiceArea />
  
      <FooterOne />      
    </Wrapper>
  );
};

export default BlogSingle;