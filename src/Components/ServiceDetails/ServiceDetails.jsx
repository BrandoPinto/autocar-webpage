import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../Data/services1.json';

const ServiceDetails = () => {
	const { id } = useParams(); // Obtener el ID del servicio desde la URL
	const [service, setService] = useState(null);

	useEffect(() => {
		const selectedService = data.find((item) => item.id === parseInt(id));
		setService(selectedService);
	}, [id]);

	if (!service) {
		return (
			<div>
				<h1 className="text-4xl mt-4 font-bold mb-4 text-accent">SERVICIO NO ENCONTRADO</h1>
			</div>
		);
	}

	return (
		<section>
			<div className="cs_height_120 cs_height_lg_80"></div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						{/*
						<div className="cs_banner">
							<img
								src="/assets/img/service_banner.jpg"
								alt="Service Banner"
								className="w-100 rounded-2xl shadow-lg"
							/>
						</div> */}
					</div>
					<div className="cs_height_40 cs_height_lg_20"></div>
					<div className="col-xl-8 col-lg-7">
						<div className="cs_service_details">
							<h1 className="text-4xl font-bold mb-4 text-accent">
								{service.title}
							</h1>
							<div className="row align-items-start mb-4">
								<div className="col-md-8">
									<p className="text-lg mt-3 text-gray-700 leading-relaxed">
										{service.desc}
									</p>
								</div>
								<div className="col-md-4">
									<div className="cs_pricing_table cs_style_1 active">
										<div className="cs_pricing_head cs_radius_50">
											<div className="cs_pricing_head_inner cs_radius_50 cs_white_bg text-center p-2">
												<h2 className="cs_price_value cs_fs_56 cs_accent_color mt-4">
													S/ {service.price}
												</h2>
												<p className="cs_pricing_head_subtitle cs_fs_14 text-uppercase cs_accent_color mb-2">
													Precio a partir de
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h2 className="text-2xl font-semibold mt-8 mb-4 text-accent">
								Características
							</h2>
							<ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_font cs_mp_0">
								{service.features.map((feature, index) => (
									<li
										key={index}
										className="d-flex align-items-center gap-3 mb-2">
										<span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
											<i className="bi bi-check"></i>
										</span>
										<span className="text-gray-700">{feature}</span>
									</li>
								))}
							</ul>
							<h2 className="text-2xl font-semibold mt-8 mb-4 mt-4 text-accent">
								Galería
							</h2>
							<div className="row">
								{service.additionalImages.map((image, index) => (
									<div key={index} className="col-6 mb-3">
										<img
											src={image}
											alt={`Img Adicional ${index + 1}`}
											className="w-100 h-auto object-cover rounded-xl shadow"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<aside className="col-xl-4 col-lg-5">
						<div className="cs_sidebar cs_style_1">
							<div className="cs_sidebar_widget cs_accent_bg_light position-relative">
								<div className="cs_separator"></div>
								<h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">
									Más Servicios
								</h3>
								<ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
									{[...data]
										.sort(() => Math.random() - 0.5) // Orden aleatorio
										.slice(0, 5) // Selecciona los primeros 5 elementos
										.map((item) => (
											<li key={item.id}>
												<Link to={item.btnLink}>
													<span>{item.title}</span>
													<span>
														<i className="bi bi-arrow-right"></i>
													</span>
												</Link>
											</li>
										))}
								</ul>
							</div>

							<div className="cs_sidebar_widget cs_accent_bg">
								<div className="cs_card cs_style_6">
									<h3 className="cs_fs_30 cs_white_color cs_mb_30">
										¿Deseas más información?
									</h3>
									<div className="cs_card_icon cs_center cs_mb_32">
										<img
											src="/assets/img/icons/phone-call_2.svg"
											alt="Phone Icon"
										/>
									</div>
									<p className="cs_white_color cs_mb-5">Llama Ahora</p>
									<a
										href="#"
										className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23">
										+51 913-944-963
									</a>
									<p className="cs_card_subtitle cs_white_color cs_mb_33">
										Ofrecemos servicios de calidad garantizada con atención
										personalizada.
									</p>
									<Link to="/contact" className="cs_card_btn">
										<span>Cotiza Ahora</span>
										<span>
											<i className="bi bi-arrow-right"></i>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</div>
			<div className="cs_height_120 cs_height_lg_80"></div>
		</section>
	);
};

export default ServiceDetails;
