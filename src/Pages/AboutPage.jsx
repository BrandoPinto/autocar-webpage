import About1 from "../Components/About/About1";
import Brand1 from "../Components/Brand/Brand1";
import BreadCumb from "../Components/Common/BreadCumb";
import Process2 from "../Components/Process/Process2";
import Team1 from "../Components/Team/Team1";
import Counter1 from "../Components/Counter/Counter1";

const AboutPage = () => {
    return (
        <div>
           <BreadCumb
                bgImg="/assets/img/page_heading_1.png"
                Title="Acerca de Nosotros"
            ></BreadCumb>            
            <About1
                img1="/assets/img/about_img_1.jpg"
                img2="/assets/img/about_img_2.jpg"
                img3="/assets/img/about_img_3.jpg"
                expNumber="+5"
                expYers="Años"
                expTitle="Experiencia"
                number="(51) 913-944-963"
                subTitle="Acerca de Nosotros"
                Title="Descripción de nosotros"
                Content="Somos una empresa especialista en accesorios y equipamiento automotriz."
                feature1="Característica 1"
                feature2="Característica 2"
                listItem={[
                    'Detalle caracteristica',
					'Detalle caracteristica',
					'Detalle caracteristica',
                ]}
                avatar="/assets/img/avatar_1.png"
                name="Ronald Richards"
                designation="Founder CEO"
            ></About1>         
            <Brand1></Brand1>
            <Counter1></Counter1>
            <Process2></Process2>           
        </div>
    );
};

export default AboutPage;