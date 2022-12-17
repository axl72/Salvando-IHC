import proyectos from "../database/proyectos.json" assert { type: "json" };


const cargaProyectos = () => {
	const divProyectos = document.getElementById("proyectos");
	let html = "";
	
	proyectos.forEach((proyecto) => {
		html += `<div class="row">
			<div class="col-12">
					<div class="single-items">
							<div class="proy-cat">
									<div class="proyecto-block-thumb">
											<a>
													<img class="proyecto-imagen" alt="Imagen del curso DATABRICKS"
															src="${proyecto.imagen}">
											</a>
									</div>
									<div class="proyecto-datos">
											<h4 class="proyecto-titulo">
													<a>${proyecto.nombre}</a>
											</h4>
											<div class="proyecto-block-content">
													<div class="container-responsable">
															<div class="responsable-informacion">
																	<i class="fa-solid fa-user"></i>
																	${proyecto.responsable.nombre}
															</div>
															<div class="responsable-informacion">
																	<i class="fa-solid fa-envelope"></i>
																	${proyecto.responsable.correo}
															</div>
															<div class="responsable-informacion">
																	<i class="fa-solid fa-file"></i>
																	${proyecto.codigo}
															</div>
															<div class="responsable-informacion">
																	<i class="fa-solid fa-file"></i>
																	${proyecto.tipo}
															</div>
													</div>
													<div class="container-descripcion">
															<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquid in cupiditate eius
																	laudantium? Sit vero repudiandae officiis omnis voluptatem aut esse sint. Culpa ea consequuntur
																	labore quia, optio aliquid? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt in
																	corrupti ex rem ullam deleniti exercitationem, eligendi laboriosam ratione quas, quia quam
																	excepturi perferendis necessitatibus ut maxime magnam cumque possimus. Lorem ipsum dolor sit
																	amet
																	consectetur adipisicing elit. Architecto distinctio numquam qui aliquid ea quod officiis ex hic
																	odio a voluptatum harum necessitatibus quibusdam neque consequuntur maxime unde, tempora
																	blanditiis?</p>
													</div>
											</div>
									</div>
									<div class="footer-button d-grid gap-2 col-4 mx-auto">
											<a href="${proyecto.documento}" target="_blank" rel="noopener noreferrer">
												<button type="button" class="btn-detail">
													<i class="fa-sharp fa-solid fa-download"></i>
													<div class="informacion-proyecto">Más Información</div>
												</button>
											</a>
									</div>
							</div>
					</div>
			</div>
	</div>`;
	});

	divProyectos.innerHTML += html;
}

cargaProyectos();