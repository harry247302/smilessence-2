
import { StaticImageData } from "next/image";
// importing images for blog posts
import blog_img_1 from "@/assets/images/blog/everything-you-need-to-know-before-starting-clear-aligners-s.jpg"
import blog_img_2 from "@/assets/images/blog/age-no-bar-braces-and-alligners-for-all-ages-s.jpg"
import blog_img_3 from "@/assets/images/blog/invisalign-alligners-the-invisible-braces-s.png"


interface BlogDataType {
    id: number;
    category: string;
    image: StaticImageData;
    title: string;
    author: string;
    date: string;
    aosDelay: string;
}[]




export const blog_data:BlogDataType[] = [
  {
    id: 1,
    category: "Business",
    image: blog_img_1,
    title: "Everything You Need to Know Before Starting Clear aligners.....",
    author: "admin",
    date: "July 2025",
    aosDelay: "500"
  },
  {
    id: 2,
    category: "Marketing",
    image: blog_img_2,
    title: "Age No Bar -- Braces and Alligners for All Ages...",
    author: "admin",
    date: "July 2025",
    aosDelay: "700"
  },
  {
    id: 3,
    category: "Finance",
    image: blog_img_3,
    title: "Greater financial flexibility for strategic planning",
    author: "admin", 
    date: "June 2025",
    aosDelay: "900"
  }
];

export default blog_data; 