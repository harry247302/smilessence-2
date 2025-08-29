
import portfolio_img_1 from "@/assets/images/team/doctor-vineet.jpg";
import portfolio_img_2 from "@/assets/images/team/doctor-meenu-vinayak.jpg";

import { StaticImageData } from "next/image";

interface PortfolioDataType {
    id: number;
    width: number;
    height: number;
    title: string;
    image: StaticImageData;
    href: string;
    categories: string[];
}[]

export const portfolio_data:PortfolioDataType[] = [
  {
    id: 1,
    width: 606,
    height: 656,
    title: "Market Analysis",
    image: portfolio_img_1,
    href: "/single-portfolio",
    categories: ["business",],
  },
  {
    id: 2,
    width: 606,
    height: 656,
    title: "Company",
    image: portfolio_img_2,
    href: "/single-portfolio",
    categories: ["development"],
  }
];


export default portfolio_data;