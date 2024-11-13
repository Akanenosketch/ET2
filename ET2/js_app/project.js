class project extends EntidadAbstracta {

	constructor() {

		super();

		this.entidad = 'project';
		this.columnasamostrar = Array('id_project', 'name_project', 'start_date_project', 'end_date_project', 'responsable_project', 'organization_project', 'description_project', 'file_project', 'code_project', 'acronym_project', 'id_sampling_methodology');

		this.inicializar();

	}

	cargar_formulario_html() {

		let formulario = `

			<label id="label_id_project" class="label_id_project">ID de proyecto</label>
			<input type="text" id="id_project" name="id_project" />
			<spam id="div_error_id_project"></span>
			<br>

			<label id="label_name_project" class="label_name_project">Nombre del Proyecto</label>
			<input type="text" id="name_project" name="name_project" />
			<spam id="div_error_name_project"></span>
			<br>

			<label id="label_start_date_project" class="label_start_date_project">Fecha de inicio del projecto</label>
			<input type="date" id="start_date_project" name="date_start_project" />
			<spam id="div_error_start_date_project"></span>
			<br>

			<label id="label_end_date_project" class="label_end_date_project">Fecha de fin del projecto</label>
			<input type="date" id="end_date_project" name="end_date_project" />
			<spam id="div_error_end_date_project"></span>
			<br>

			<label id="label_responsable_project" class="label_responsable_project">Nombre del Responsable</label>
			<input type="text" id="responsable_project" name="responsable_project" />
			<spam id="div_error_responsable_project"></span>
			<br>

			<label id="label_organization_project" class="label_organization_project">Nombre de la organización</label>
			<input type="text" id="organization_project" name="organization_project" />
			<spam id="div_error_organization_project"></span>
			<br>
			
			<label id="label_description_project" class="label_description_project">Descripción del proyecto</label>
			<input type="text" id="description_project" name="description_project" />
			<spam id="div_error_description_project"></span>
			<br>
			
			<label id="label_file_project" class="label_file_project">Documento relacionado con el projecto</label>
			<input type="file" id="file_project" name="file_project" />
			<spam id="div_error_file_project"></span>
			<br>

			<label id="label_code_project" class="label_code_project">Codigo del proyecto</label>
			<input type="file" id="code_project" name="code_project" />
			<spam id="div_error_code_project"></span>
			<br>

			<label id="label_acronym_project" class="label_acronym_project">Acrónimo del proyecto</label>
			<input type="file" id="acronym_project" name="acronym_project" />
			<spam id="div_error_acronym_project"></span>
			<br>

			<label id="label_id_sampling_methodology" class="label_id_sampling_methodology">ID de la metodología de procesamiento</label>
			<input type="file" id="id_sampling_methodology" name="id_sampling_methodology" />
			<spam id="div_error_id_sampling_methodology"></span>
			<br>
		`;

		document.getElementById("IU_form").innerHTML = formulario;

	}

	createForm_ADD() {

		if (eval(this.cargar_formulario_html())) {
			this.cargar_formulario_html();
		}


		//tratar validaciones
		//document.getElementById("id_funcionalidad").setAttribute("onblur","validar.comprobar_id_funcionalidad();");
		document.getElementById("id_project").setAttribute("onblur", "validar.comprobar_nombre_funcionalidad();");
		document.getElementById("name_project").setAttribute("onblur", "validar.comprobar_descrip_funcionalidad();");

		document.getElementById('label_id_funcionalidad').style.display = "none";
		document.getElementById('id_funcionalidad').style.display = "none";

		let boton = document.createElement('button');
		boton.type = 'submit';
		let imgsearch = document.createElement('img');
		imgsearch.src = './iconos/ADD.png';
		boton.append(imgsearch);
		document.getElementById('IU_form').append(boton);

		//document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_add";
		//document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_add";
		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.ADD();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_SEARCH() {

		if (eval(this.cargar_formulario_html())) {
			this.cargar_formulario_html();
		}

		//tratar validaciones
		document.getElementById("id_funcionalidad").setAttribute("onblur", "validar.comprobar_id_funcionalidad_SEARCH();");
		document.getElementById("nombre_funcionalidad").setAttribute("onblur", "validar.comprobar_nombre_funcionalidad_SEARCH();");
		document.getElementById("descrip_funcionalidad").setAttribute("onblur", "validar.comprobar_descrip_funcionalidad_SEARCH();");


		let boton = document.createElement('button');
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/SEARCH.png';
		boton.append(img);
		document.getElementById('IU_form').append(boton);

		//document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_search";
		//document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_search";
		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.SEARCH();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_DELETE(valoresfila) {

		if (eval(this.cargar_formulario_html())) {
			this.cargar_formulario_html();
		}

		//rellenar los datos
		document.getElementById('id_funcionalidad').value = valoresfila.id_funcionalidad;
		document.getElementById('nombre_funcionalidad').value = valoresfila.nombre_funcionalidad;
		document.getElementById('descrip_funcionalidad').value = valoresfila.descrip_funcionalidad;

		//tratar validaciones (NO HAY VALIDACIONES PORQUE NO SE PERMITE LA MODIFICACION DE DATOS)

		//poner no activos los campos

		document.getElementById('id_funcionalidad').setAttribute('readonly', true);
		document.getElementById('nombre_funcionalidad').setAttribute('readonly', true);
		document.getElementById('descrip_funcionalidad').setAttribute('readonly', true);


		let boton = document.createElement('button');
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/DELETE.png';
		boton.append(img);
		document.getElementById('IU_form').append(boton);

		//document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_delete";
		//document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_delete";
		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_SHOWCURRENT(valoresfila) {

		if (eval(this.cargar_formulario_html())) {
			this.cargar_formulario_html();
		}

		//rellenar los datos
		document.getElementById('id_project').value = valoresfila.id_project;
		document.getElementById('name_project').value = valoresfila.name_project;
		document.getElementById('start_date_project').value = valoresfila.start_date_project;
		document.getElementById('end_date_project').value = valoresfila.end_date_project;
		document.getElementById('responsable_project').value = valoresfila.responsable_project;
		document.getElementById('organization_project').value = valoresfila.organization_project;
		document.getElementById('description_project').value = valoresfila.description_project;
		document.getElementById('file_project').value = valoresfila.file_project;
		document.getElementById('code_project').value = valoresfila.code_project;
		document.getElementById('acronym_project').value = valoresfila.acronym_project;
		document.getElementById('id_sampling_methodology').value = valoresfila.id_sampling_methodology;


		//tratar validaciones (NO HAY VALIDACIONES PORQUE NO SE PERMITE LA MODIFICACION DE DATOS)

		//poner no activos los campos
		document.getElementById('id_project').setAttribute('readonly', true);
		document.getElementById('name_project').setAttribute('readonly', true);
		document.getElementById('start_date_project').setAttribute('readonly', true);
		document.getElementById('end_date_project').setAttribute('readonly', true);
		document.getElementById('responsable_project').setAttribute('readonly', true);
		document.getElementById('organization_project').setAttribute('readonly', true);
		document.getElementById('description_project').setAttribute('readonly', true);
		document.getElementById('file_project').setAttribute('readonly', true);
		document.getElementById('code_project').setAttribute('readonly', true);
		document.getElementById('acronym_project').setAttribute('readonly', true);
		document.getElementById('id_sampling_methodology').setAttribute('readonly', true);

		//document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_delete";
		//document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_delete";
		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "");
		document.getElementById("div_IU_form").style.display = 'block';

	}

	createForm_EDIT(valoresfila) {

		if (eval(this.cargar_formulario_html())) {
			this.cargar_formulario_html();
		}

		//rellenar los datos
		document.getElementById('id_funcionalidad').value = valoresfila.id_funcionalidad;
		document.getElementById('id_funcionalidad').setAttribute("readonly", true);
		document.getElementById('nombre_funcionalidad').value = valoresfila.nombre_funcionalidad;
		document.getElementById('descrip_funcionalidad').value = valoresfila.descrip_funcionalidad;

		//tratar validaciones 
		document.getElementById("id_funcionalidad").setAttribute("onblur", "validar.comprobar_id__funcionalidad();");
		document.getElementById("nombre_funcionalidad").setAttribute("onblur", "validar.comprobar_nombre_funcionalidad();");
		document.getElementById("descrip_funcionalidad").setAttribute("onblur", "validar.comprobar_descrip_funcionalidad();");


		let boton = document.createElement('button');
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/EDIT.png';
		boton.append(img);
		document.getElementById('IU_form').append(boton);

		//document.getElementById("class_contenido_titulo_form").class = "class_titulo_formulario_analysis_preparation_delete";
		//document.getElementById("class_contenido_titulo_form").innerHTML = "class_titulo_formulario_analysis_preparation_delete";
		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.EDIT();");
		document.getElementById("div_IU_form").style.display = 'block';

	}




}