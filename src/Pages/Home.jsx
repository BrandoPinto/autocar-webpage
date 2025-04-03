import About1 from '../Components/About/About1';
import BeforeAfter from '../Components/BeforeAfter/BeforeAfter';
import Blog3 from '../Components/Blog/Blog3';
import Choose1 from '../Components/Choose/Choose1';
import Contact1 from '../Components/ContactInfo/Contact1';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Pricing1 from '../Components/Pricing/Pricing1';
import Brand1 from '../Components/Brand/Brand1';
import Process from '../Components/Process/Process';
import Project2 from '../Components/Project/Project2';
import Services1 from '../Components/Services/Services1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';

import Counter1 from '../Components/Counter/Counter1';

const Home = () => {
	return (
		<div className="homepage">
			<HeroBanner1></HeroBanner1>
			<About1
				img1="/assets/img/about_img_1.jpg"
				img2="/assets/img/about_img_2.jpg"
				img3="/assets/img/about_img_3.jpg"
				expNumber="+8"
				expYers="Años"
				expTitle="de Experiencia"
				number="(+51) 913-944-963"
				subTitle="Acerca de Nosotros"
				Title="Pasión por proteger y personalizar tu auto"
				Content="En Autocar Servicio Automotriz nos especializamos en la instalación de accesorios, protección y personalización de vehículos. Con más de 8 años de experiencia, ofrecemos servicios de alta calidad como PPF, polarizados, undercoating y mucho más."
				feature1="Accesorios para Autos"
				feature2="Protección Premium PPF"
				listItem={[
					'Instalación profesional de polarizados',
					'Undercoating para protección contra corrosión',
					'Venta de accesorios personalizados',
					'Atención personalizada y asesoramiento experto',
				]}
			/>
			<Services1></Services1>
			<Brand1></Brand1>
			<Choose1
				img1="/assets/img/feature_img_1.jpg"
				content="En Autocar Servicio Automotriz cuidamos y personalizamos tu vehículo como se merece. Ofrecemos instalación de accesorios, protección de pintura (PPF), polarizados, undercoating y mucho más. Con nosotros, tu auto no solo se ve mejor, también está mejor protegido."
				btnName="¡Contáctanos!"
				btnUrl="/contacto"
				img2="/assets/img/feature_img_2.jpg"
				img3="/assets/img/feature_img_3.jpg"
			/>

			{/* 
			<BeforeAfter
				title="Proyecto undercoating reciente"
				subTitle="Antes y después"
				bgImg="/assets/img/before_after_bg_1.svg"
				beforeImg="/assets/img/after_img_1.jpg"
				afterTitle="Después"
				afterImg="/assets/img/before_img_1.jpg"
				beforeTitle="Antes"></BeforeAfter>
				*/}
			{/*<Contact1
                Title="Contact Information"
                subTitle="It is a long established fact that a reader be by the readable distracted  layout."
                address="2972 Westheimer Rd. <br/>Santa Ana, Illinois 5486"
                email="Cripar@gmail.com <br/>InfoCripar@gmal.com"
                number="(402) 4521 5458 44 <br/> (123) 2154 5464 55"
                clientNumber="5,400"
                img="/assets/img/contact_img_1.jpg"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book and Appointment"
            ></Contact1>*/}
			<Testimonial1
				subtitle="Testimonios"
				title="Lo que dicen nuestros clientes <br> Sobre nosotros"
				bgImg="/assets/img/testimonial_bg_1.png"></Testimonial1>
			<Project2></Project2>
			{/*<Pricing1></Pricing1>*/}
			{/* <Process></Process>*/}
			{/* <Blog3></Blog3>*/}
		</div>
	);
};

export default Home;
