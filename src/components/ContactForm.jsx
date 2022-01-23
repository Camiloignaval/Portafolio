import React, { useContext, useEffect, useState } from "react";
import "./contactForm.css";
import { init } from "@emailjs/browser";
init("user_cw684jlcfRffSYZ7foHbM");
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import gsap from "gsap/all";
import { DarkContext } from "../context/DarkContext";

const phoneRegExp = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

const schema = yup.object({
	name: yup.string().required("Nombre es necesario"),
	email: yup.string().email("Formato inválido").required("email es necesario"),
	phone: yup
		.string()
		.required("Télefono es necesario")
		.matches(phoneRegExp, "Numero es inválido (+569xxxxxxxx)"),
	subject: yup.string().required("Asunto es necesario"),
	text: yup.string().required("Escriba un mensaje porfavor"),
});

export const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [isMobile, setisMobile] = useState(false);

	// tomando desde provider si modo oscuro esta activado o no
	const { isDark } = useContext(DarkContext);

	// detectar si es mobile para agregar whatsapp
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	// Si esta cargando la peticion, muestra un spinner
	useEffect(() => {
		loading && Swal.showLoading();
	}, [loading]);

	useEffect(() => {
		const card = document.querySelector(".card-body");
		const name = document.querySelector("#name");
		const inpMail = document.querySelector("#inpEmail");
		const inpPhone = document.querySelector("#inpPhone");
		const inpSubject = document.querySelector("#inpSubject");
		const inpText = document.querySelector("#inpText");
		// obtener localstorage
		console.log(isDark);
		// const dark = localStorage.getItem("darkMode");
		if (isDark) {
			card.classList.add("dark");
			name.classList.add("dark");
			inpMail.classList.add("dark");
			inpPhone.classList.add("dark");
			inpSubject.classList.add("dark");
			inpText.classList.add("dark");
		} else {
			card.classList.remove("dark");
			name.classList.remove("dark");
			inpMail.classList.remove("dark");
			inpPhone.classList.remove("dark");
			inpSubject.classList.remove("dark");
			inpText.classList.remove("dark");
		}
	}, [isDark]);

	// animaciones gsap

	const timeline = gsap.timeline({ defaults: { opacity: 0, duration: 1 } });
	useEffect(() => {
		// cerrar nav
		document.querySelector(".navbar-toggler").classList.add("collapsed");
		document.querySelector("#navbarNav").classList.remove("show");
		// detectar si es mobil
		!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent,
		) && setisMobile(true);

		// animaciones gsap inicio
		timeline
			.from(".titulo", { y: -300, x: -100 })
			// .from(".carta", { x: 200, duration: 4 });
			.from(".inp", { x: -200, y: 100 }, "<")
			.from(".area", { x: 80, y: 100 }, "<")
			.from(".titulo2", { x: 80, y: -100 }, "<")
			.from(".datos", { x: 80, y: 100 }, "<")
			.from(".redes", { x: 20, y: 200 }, "<");
	}, []);

	const service_id = "service_i5jg3f3";
	const template_id = "template_hptyntl";
	const user_id = "user_cw684jlcfRffSYZ7foHbM";

	const onSubmit = (data) => {
		setLoading(true);
		emailjs.send(service_id, template_id, data, user_id).then(
			(result) => {
				setLoading(false);
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Gracias por contactarme, respondere a la brevedad posible!",
					showConfirmButton: false,
					timer: 3000,
				});
				reset();
			},
			(error) => {
				setLoading(false);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ha ocurrido un error, intenta denuevo porfavor!",
				});
			},
		);
	};

	return (
		<div className='contenedorForm'>
			<form onSubmit={handleSubmit(onSubmit)} className='contact-section my-5'>
				<div className='card'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='card-body form'>
								<h3 className='mt-4 titulo'>
									<i className='fas fa-envelope pr-2 carta'></i>Contáctame:
								</h3>

								<div className='row'>
									<div className='col-md-6'>
										<div className='md-form mb-0 inp'>
											<input
												placeholder='Nombre'
												type='text'
												className='form-control'
												name='name'
												id='name'
												{...register("name")}
											/>

											<p className='error'>{errors.name?.message}</p>
										</div>
									</div>

									<div className='col-md-6 inp'>
										<div className='md-form mb-0'>
											<input
												placeholder='Email'
												type='text'
												id='inpEmail'
												name='email'
												className='form-control'
												{...register("email")}
											/>

											<p className='error'>{errors.email?.message}</p>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-6 inp'>
										<div className='md-form mb-0'>
											<input
												placeholder='Teléfono de contacto'
												type='text'
												id='inpPhone'
												className='form-control'
												name='phone'
												{...register("phone")}
											/>

											<p className='error'>{errors.phone?.message}</p>
										</div>
									</div>

									<div className='col-md-6 inp'>
										<div className='md-form mb-0'>
											<input
												placeholder='Asunto'
												type='text'
												id='inpSubject'
												className='form-control'
												name='subject'
												{...register("subject")}
											/>

											<p className='error'>{errors.subject?.message}</p>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-12'>
										<div className='md-form mb-0 area'>
											<label htmlFor='inpText'>Mensaje</label>

											<textarea
												id='inpText'
												className='form-control md-textarea'
												rows='3'
												name='text'
												{...register("text")}
											></textarea>
											<p className='error'>{errors.text?.message}</p>

											<a className='btn-floating btn-lg blue'>
												<button className='enviarbtn'>
													<i
														type='submit'
														className='enviar fas fa-paper-plane'
													/>
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='col-lg-4'>
							<div className='card-body contact text-center h-100 white-text'>
								<h3 className='my-4 pb-2 titulo2'>Información de contacto</h3>
								<ul className='text-lg-left list-unstyled ml-4 datos'>
									<li>
										<p>
											<i className='fas fa-map-marker-alt pr-2'></i>Santiago,
											Chile
										</p>
									</li>
									<li>
										<p>
											<i className='fas fa-phone pr-2'></i>+ 56 9 54275898
										</p>
									</li>
									<li>
										<p>
											<i className='fas fa-envelope pr-2'></i>
											camiloignaval@gmail.com
										</p>
									</li>
								</ul>
								<hr className='hr-light my-4' />
								<ul className='list-inline text-center list-unstyled redes'>
									{!isMobile && (
										<li className='list-inline-item'>
											<a
												href='https://api.whatsapp.com/send?phone=56954275898'
												className='p-2 fa-lg tw-ic'
											>
												<i className='fab fa-whatsapp'></i>
											</a>
										</li>
									)}
									<li className='list-inline-item'>
										<a
											href='https://www.linkedin.com/in/camilo-valenzuela-barrios/'
											className='p-2 fa-lg li-ic'
										>
											<i className='fab fa-linkedin-in'></i>
										</a>
									</li>
									<li className='list-inline-item'>
										<a
											href='https://github.com/Camiloignaval'
											className='p-2 fa-lg ins-ic'
										>
											<i className='fab fa-github'> </i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
