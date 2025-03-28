import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Brand1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="cs_brands_area mt-5">
        <div className="container">
          <div className="cs_brands_wrapper cs_white_bg cs_heading_color cs_bg_filed" data-background="/assets/img/brand_bg_1.svg">
            <div className="cs_brand wow zoomIn">
                <img src="/assets/img/brands/3m-logo.png" alt="icon" width={120} height={120} />
            </div>
            <div className="cs_brand wow zoomIn">
            <img src="/assets/img/brands/bd-logo.webp" alt="icon" width={120} height={120} />
            </div>
            <div className="cs_brand wow zoomIn">
            <img src="/assets/img/brands/thule-logo.png" alt="icon" width={120} height={180} />
            </div>
            <div className="cs_brand wow zoomIn">
                <img src="/assets/img/brands/method-logo.png" alt="icon" width={120} height={190}/>
            </div>
            <div className="cs_brand wow zoomIn">
            <img src="/assets/img/brands/prestige-logo.png" alt="icon" width={120} height={200}/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Brand1;