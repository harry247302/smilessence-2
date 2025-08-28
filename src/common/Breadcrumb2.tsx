import { log } from "console";
import Image from "next/image";
import Link from "next/link";

type BreadcrumbProps = {
  title: string;
  subtitle: string;
  bg_img?: string;
}


const Breadcrumb2 = ({ title, subtitle, bg_img }: BreadcrumbProps) => {
  console.log(bg_img,"-------------------------------")
  return (
    <>
      <div className={`breadcrumb-wrapperr`} style={{backgroundImage: `url(${bg_img}`,backgroundPosition: "center", backgroundSize: "contain",backgroundRepeat:" no-repeat"}}>
        <div className="containe">

          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">{title}</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Image width={9} height={16} src="/assets/images/breadcrumb/right-arrow.svg" alt="right-arrow" /></li>
                    <li aria-current="page">{subtitle}</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Breadcrumb2;