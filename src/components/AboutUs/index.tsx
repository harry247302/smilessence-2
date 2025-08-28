import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutArea from "./AboutArea";
import VideoHomeThree from "../homes/home-3/VideoHomeThree";
import TeamHomeOne from "../homes/home-1/TeamHomeOne";
// import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";

 
const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="About Us" subtitle="About Us" bg_img="about-breadcrumb-bg" />
			<AboutArea />
			<FooterOne />		 
		</Wrapper>
	);
};

export default Aboutus;
