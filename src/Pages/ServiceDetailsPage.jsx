import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from '../Components/Project/Project1';
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";

const ServiceDetailsPage = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/assets/img/page_heading_1.png"
                Title="Detalle de Servicio"
            ></BreadCumb> 
            <ServiceDetails></ServiceDetails>      
            <Project1/>     
        </div>
    );
};

export default ServiceDetailsPage;