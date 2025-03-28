import { Link } from 'react-router-dom';

const Footer1 = () => {
	return (
		<footer
			className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg"
			data-src="assets/img/footer_bg.jpg">
			<div className="container">
				<div className="cs_footer_newsletter cs_style_1">
					<div className="cs_footer_newsletter_left cs_accent_bg cs_center">
						<img
							src="/assets/logo/logotipo.png"
							alt="Logo"
							className="wow fadeInLeft"
						/>
					</div>
					<div className="cs_footer_newsletter_right">
						<h3 className="cs_fs_24 cs_semibold cs_white_color mb-0">
							Comunícate con nosotros para empezar a trabajar con tu carro
						</h3>
						<form action="#" className="cs_footer_newsletter_form">
							<input type="text" placeholder="Ingresa tu email" />
							<button className="cs_btn cs_style_1">
								<span>Enviar</span>
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="cs_main_footer cs_white_color">
				<div className="container">
					<div className="cs_footer_row">
						<div className="cs_footer_col">
							<div className="cs_footer_widget">
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
									Nosotros
								</h2>
								<div className="cs_footer_widget_seperator">
									<span className="cs_accent_bg"></span>
									<span className="cs_white_bg"></span>
									<span className="cs_white_bg"></span>
								</div>
								<div className="cs_text_widget">
									<p>
										Somos una empresa especialista en accesorios y equipamiento
										automotriz.
									</p>
								</div>
								<div className="cs_social_btns cs_style_1">
									<a href="https://www.instagram.com/autocar.arequipa/" target='_blank' className="cs_social_btn cs_center">
										<i className="bi bi-instagram"></i>
									</a>
									<a href="https://api.whatsapp.com/send?phone=51941035240&text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20...%20%F0%9F%9A%98"  target='_blank' className="cs_social_btn cs_center">
										<i className="bi bi-whatsapp"></i>
									</a>
									<a href="https://www.facebook.com/profile.php?id=61573022467310" target='_blank' className="cs_social_btn cs_center">
										<i className="bi bi-facebook"></i>
									</a>
									<a href="https://www.tiktok.com/@autocar.automotriz" target='_blank' className="cs_social_btn cs_center">
										<i className="bi bi-tiktok"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="cs_footer_col">
							<div className="cs_footer_widget">
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
									Explora
								</h2>
								<div className="cs_footer_widget_seperator">
									<span className="cs_accent_bg"></span>
									<span className="cs_white_bg"></span>
									<span className="cs_white_bg"></span>
								</div>
								<ul className="cs_footer_menu">
									<li>
										<Link to="/">Inicio</Link>
									</li>
									<li>
										<Link to="/nosotros">Nosotros</Link>
									</li>
									<li>
										<Link to="#">Servicios</Link>
									</li>
									<li>
										<Link to="/contacto">Contáctanos</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="cs_footer_col">
							<div className="cs_footer_widget">
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
									Contáctanos
								</h2>
								<div className="cs_footer_widget_seperator">
									<span className="cs_accent_bg"></span>
									<span className="cs_white_bg"></span>
									<span className="cs_white_bg"></span>
								</div>
								<ul className="cs_footer_contact_list cs_mp_0">
									<li>
										<i className="bi bi-geo-alt-fill"></i>
										Av. Emmel 204, Yanahuara, Arequipa.
									</li>
									<li>
										<i className="bi bi-telephone-fill"></i>
										<a href="tel:+(51)-941-035-240">+(51)-941-035-240</a> <br />
										<a href="tel:+(163)-5565-07989">+(51)-913-944-963</a>
									</li>
									<li>
										<i className="bi bi-envelope-fill"></i>
										<a href="mailto:atencionalcliente@autocarautomotriz.com">
											atencionalcliente@autocarautomotriz.com
										</a>{' '}
										<br />
										<a href="mailto:ventas@autocarautomotriz.com">
											ventas@autocarautomotriz.com
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cs_footer_col">
							<div className="cs_footer_widget">
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
									Horarios:
								</h2>
								<div className="cs_footer_widget_seperator">
									<span className="cs_accent_bg"></span>
									<span className="cs_white_bg"></span>
									<span className="cs_white_bg"></span>
								</div>
								<ul className="cs_working_hours">
									<li>
										<span>Lunes - Viernes</span>
										<span>8:00AM - 6:00PM</span>
									</li>
									<li>
										<span>Sábados</span>
										<span>8:00 AM - 2:00 PM</span>
									</li>
									<li>
										<span>Domingos</span>
										<span>Cerrado</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cs_footer_bottom cs_white_color">
				<div className="container">
					<div className="cs_footer_bottom_in">
						<div className="cs_footer_copyright">
							Copyright © {new Date().getFullYear()}{' '}
							<a href="#">Autocar Servicio Automotriz</a>. Todos los derechos
							reservados.
						</div>
						{/* 
              <div>
                <img src="/assets/img/payment_card.svg" alt="" />
              </div>*/}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer1;
