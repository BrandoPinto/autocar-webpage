import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Contact = () => {
	return (
		<section>
			<div className="cs_height_120 cs_height_lg_80"></div>
			<div className="container">
				<div className="row cs_gap_y_50">
					<div className="col-lg-7">
						<div className="cs_contact_desc">
							<h3 className="cs_fs_24 cs_mb_33">Información de contacto</h3>
							<div className="cs_contact_info_grid">
								{/* Información de contacto */}
								<div className="cs_iconbox cs_style_5">
									<div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
										<i className="bi bi-telephone-inbound-fill"></i>
									</div>
									<div className="cs_iconbox_info">
										<h3 className="cs_fs_18 cs_semibold cs_mb_2">
											Números de celular :
										</h3>
										<a href="#">+51 913 944 963</a>
										<br />
										<a href="#">+51 941 035 240</a>
									</div>
								</div>
								<div className="cs_iconbox cs_style_5">
									<div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
										<i className="bi bi-envelope-fill"></i>
									</div>
									<div className="cs_iconbox_info">
										<h3 className="cs_fs_18 cs_semibold cs_mb_2">
											Correo Electrónico :
										</h3>
										<a href="mailTo:atencionalcliente@autocarautomotriz.com">
											atencionalcliente@autocarautomotriz.com
										</a>
										<br />
										<a href="mailTo:ventas@autocarautomotriz.com">
											ventas@autocarautomotriz.com
										</a>
									</div>
								</div>
								<div className="cs_iconbox cs_style_5">
									<div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
										<i className="bi bi-geo-alt-fill"></i>
									</div>
									<div className="cs_iconbox_info">
										<h3 className="cs_fs_18 cs_semibold cs_mb_2">
											Dirección :
										</h3>
										<p className="mb-0">
											Av. Emmel 204, Yanahuara, <br /> Arequipa, Perú.
										</p>
									</div>
								</div>
								<div className="cs_iconbox cs_style_5">
									<div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
										<i className="bi bi-watch"></i>
									</div>
									<div className="cs_iconbox_info">
										<h3 className="cs_fs_18 cs_semibold cs_mb_2">Horario :</h3>
										<p className="mb-0">
											Lunes a Viernes : 8:00 - 18:00 <br /> Sáb 8:00 - 14:00.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="row">
							<div className="col-md-6 col-12 mb-3">
								<div className="cs_sidebar_widget cs_accent_bg mx-2">
									<div className="cs_card cs_style_6">
										<h3 className="cs_fs_30 cs_white_color cs_mb_30">
											Instagram
										</h3>
										<div className="cs_card_icon cs_center cs_mb_32">
											<i
												className="bi bi-instagram"
												style={{ fontSize: '80px', color: 'white' }}></i>
										</div>
										<Link to="https://www.instagram.com/autocar.arequipa/" target='_blank' className="cs_card_btn">
											<span>Contactar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-12 mb-3">
								<div className="cs_sidebar_widget cs_accent_bg mx-2">
									<div className="cs_card cs_style_6">
										<h3 className="cs_fs_30 cs_white_color cs_mb_30">
											Facebook
										</h3>
										<div className="cs_card_icon cs_center cs_mb_32">
											<i
												className="bi bi-facebook"
												style={{ fontSize: '80px', color: 'white' }}></i>
										</div>
										<Link to="https://www.facebook.com/profile.php?id=61573022467310" target='_blank' className="cs_card_btn">
											<span>Contactar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-12 mb-3">
								<div className="cs_sidebar_widget cs_accent_bg mx-2">
									<div className="cs_card cs_style_6">
										<h3 className="cs_fs_30 cs_white_color cs_mb_30">
											WhatsApp
										</h3>
										<div className="cs_card_icon cs_center cs_mb_32">
											<i
												className="bi bi-whatsapp"
												style={{ fontSize: '80px', color: 'white' }}></i>
										</div>
										<Link to="https://api.whatsapp.com/send?phone=51941035240&text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20...%20%F0%9F%9A%98" target='_blank' className="cs_card_btn">
											<span>Contactar</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-12 mb-3">
								<div className="cs_sidebar_widget cs_accent_bg mx-2">
									<div className="cs_card cs_style_6">
										<h3 className="cs_fs_30 cs_white_color cs_mb_30">
											TikTok
										</h3>
										<div className="cs_card_icon cs_center cs_mb_32">
											<i
												className="bi bi-tiktok"
												style={{ fontSize: '80px', color: 'white' }}></i>
										</div>
										<Link to="https://www.tiktok.com/@autocar.automotriz" target='_blank' className="cs_card_btn">
											<span>Contactar</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cs_height_120 cs_height_lg_80"></div>
			<div className="cs_navigation_map wow fadeInUp">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.6518309200421!2d-71.54508962803803!3d-16.394798076214677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b4bb7b904c9%3A0xeb1af7d4f1887dbb!2sAutocar%20Servicio%20Automotriz!5e0!3m2!1ses-419!2spe!4v1743081651687!5m2!1ses-419!2spe"
					allowFullScreen=""
					loading="lazy"></iframe>
			</div>
		</section>
	);
};
export default Contact;
