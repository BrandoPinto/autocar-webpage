import About1 from '../Components/About/About1';
import Brand1 from '../Components/Brand/Brand1';
import BreadCumb from '../Components/Common/BreadCumb';
import Process2 from '../Components/Process/Process2';
import Team1 from '../Components/Team/Team1';
import Counter1 from '../Components/Counter/Counter1';

const AboutPage = () => {
	return (
		<div>
			<BreadCumb
				bgImg="/assets/img/page_heading_1.png"
				Title="Acerca de Nosotros"></BreadCumb>
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
			<Brand1></Brand1>
			<Counter1></Counter1>
			<Process2></Process2>
		</div>
	);
};

export default AboutPage;
