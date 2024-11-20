class project extends EntidadAbstracta {

	constructor() {

		super();

		this.entidad = 'project';
		this.columnasamostrar = Array('id_project', 'name_project', 'responsable_project', 'organization_project', 'description_project', 'start_date_project', 'end_date_project', 'code_project', 'acronym_project', 'id_sampling_methodology');
		this.datosespecialestabla = Array('start_date_project', 'end_date_project', 'file_project');

		this.inicializar();

	}

	/*
	carga e inicialización del formulario de la clase
	*/

	cargar_formulario_html() {

		// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
		this.accion = '';

		let formulario = `

			<label id="label_id_project" class="label_id_project">ID de proyecto</label>
			<input type="text" id="id_project" name="id_project" />
			<span id="div_error_id_project"></span>
			<br>

			<label id="label_name_project" class="label_name_project">Nombre del Proyecto</label>
			<input type="text" id="name_project" name="name_project" />
			<span id="div_error_name_project"></span>
			<br>

			<label id="label_start_date_project" class="label_start_date_project">Fecha de inicio del projecto</label>
			<input type="text" id="start_date_project" name="date_start_project" />
			<span id="div_error_start_date_project"></span>
			<br>

			<label id="label_end_date_project" class="label_end_date_project">Fecha de fin del projecto</label>
			<input type="text" id="end_date_project" name="end_date_project" />
			<span id="div_error_end_date_project"></span>
			<br>

			<label id="label_responsable_project" class="label_responsable_project">Nombre del Responsable</label>
			<input type="text" id="responsable_project" name="responsable_project" />
			<span id="div_error_responsable_project"></span>
			<br>

			<label id="label_organization_project" class="label_organization_project">Nombre de la organización</label>
			<input type="text" id="organization_project" name="organization_project" />
			<span id="div_error_organization_project"></span>
			<br>
			
			<label id="label_description_project" class="label_description_project">Descripción del proyecto</label>
			<input type="text" id="description_project" name="description_project" />
			<span id="div_error_description_project"></span>
			<br>
			
			<label id="label_file_project" class="label_file_project"></label>
			<input type='text' id='file_project' name='file_project'></input>
			<span id="div_error_file_project"><a id="error_file_project"></a></span>
			<a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/"><img src="./iconos/FILE.png" /></a>
			<label id="label_nuevo_file_project" class="label_nuevo_file_project"></label>
			<input type='file' id='nuevo_file_project' name='nuevo_file_project'></input>
			<span id="div_error_nuevo_file_project"><a id="error_nuevo_file_project"></a></span>
			<br>

			<label id="label_code_project" class="label_code_project">Codigo del proyecto</label>
			<input type="text" id="code_project" name="code_project" />
			<span id="div_error_code_project"></span>
			<br>

			<label id="label_acronym_project" class="label_acronym_project">Acrónimo del proyecto</label>
			<input type="text" id="acronym_project" name="acronym_project" />
			<span id="div_error_acronym_project"></span>
			<br>

			<label id="label_id_sampling_methodology" class="label_id_sampling_methodology">ID de la metodología de procesamiento</label>
			<input type="text" id="id_sampling_methodology" name="id_sampling_methodology" />
			<span id="div_error_id_sampling_methodology"></span>
			<br>

		`;

		document.getElementById("IU_form").innerHTML = formulario;

	}

	/*
	creacion de formularios
	*/

	createForm_ADD() {

		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_ADD';


		//Ocultamos los campos innecesarios
		//Autoincremental
		document.getElementById('label_id_project').remove();
		document.getElementById('id_project').remove();
		//file_proyect
		document.getElementById('label_file_project').remove();
		document.getElementById('file_project').remove();
		document.getElementById('link_file_project').remove();

		this.colocarvalidaciones('ADD');

		this.colocarboton('ADD');

		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.ADD();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SEARCH() {

		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SEARCH';

		//Eliminamos los elementos no necesarios
		//file_project
		document.getElementById('label_nuevo_file_project').remove();
		document.getElementById('nuevo_file_project').remove();
		document.getElementById('link_file_project').remove();

		this.colocarvalidaciones('SEARCH');

		this.colocarboton('SEARCH');

		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.SEARCH();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_EDIT(parametros) {

		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'EDIT';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_EDIT';

		// relleno los valores de los atributos
		this.rellenarvaloresform(parametros);

		// elimino los campos innecesarios
		document.getElementById('label_nuevo_file_project').remove();
		document.getElementById('nuevo_file_project').remove();

		// desactivo los campos necesarios
		document.getElementById('file_project').setAttribute('readonly', true);
		document.getElementById('id_project').setAttribute('readonly', true);

		document.getElementById('start_date_project').value = this.cambiardatosespecialestabla('start_date_project', parametros.start_date_project);
		document.getElementById('end_date_project').value = this.cambiardatosespecialestabla('end_date_project', parametros.end_date_project);

		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_file_project').href += parametros.file_project;



		// coloco las validaciones
		this.colocarvalidaciones('EDIT');

		document.getElementById('file_project').removeAttribute('onblur');

		// coloco el boton
		this.colocarboton('EDIT');

		// pongo valores a los onsubmit y action
		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.EDIT();");

		// pongo visible el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_DELETE(parametros) {

		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_DELETE';

		document.getElementById('label_nuevo_file_project').remove();
		document.getElementById('nuevo_file_project').remove();

		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.start_date_project.split('-');
		let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('start_date_project').value = fechaformateada;
		*/

		document.getElementById('start_date_project').value = this.cambiardatosespecialestabla('start_date_project', parametros.start_date_project);
		document.getElementById('end_date_project').value = this.cambiardatosespecialestabla('end_date_project', parametros.end_date_project);

		document.getElementById('link_file_project').href += parametros.file_project;

		// pongo no activos todos los campos
		this.ponernoactivoform();

		this.colocarboton('DELETE');


		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SHOWCURRENT(parametros) {

		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SHOWCURRENT';

		document.getElementById('label_nuevo_file_project').remove();
		document.getElementById('nuevo_file_project').remove();

		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.start_date_project.split('-');
		let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('start_date_project').value = fechaformateada;
		*/

		document.getElementById('start_date_project').value = this.cambiardatosespecialestabla('start_date_project', parametros.start_date_project);
		document.getElementById('end_date_project').value = this.cambiardatosespecialestabla('end_date_project', parametros.end_date_project);

		document.getElementById('link_file_project').href += parametros.file_project;

		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	/*
	comprobacion campos ADD, EDIT
	*/

	/**
	 * Es un valor incremental por lo tanto no se necesita validar al ser generado por el propio backend
	 * 
	 * @returns true 
	 */
	comprobar_id_project() {

		return true;

	}

	/**
	 * Minimo 15 y max 100 caracteres
	 * Se permiten caracteres alfabeticos y espacios
	 * No permite los acentos ni ñ
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_name_project() {

		if (!(this.validaciones.min_size('name_project', 15))) {
			this.mostrar_error_campo('name_project', 'name_project_min_size_KO');
			//return false;
			return 'name_project_min_size_KO';
		}
		if (!(this.validaciones.max_size('name_project', 100))) {
			this.mostrar_error_campo('name_project', 'name_project_max_size_KO');
			//return false;
			return 'name_project_max_size_KO'
		}
		if (!(this.validaciones.format('name_project', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('name_project', 'name_project_format_KO');
			//return false;
			return 'name_project_format_KO'
		}
		this.mostrar_exito_campo('name_project');
		return true;
	}

	/**
	 * Formato de fehca permitido: dd/mm/aaaa
	 * Debe de ser una fecha válida (no puede ser por ejemplo 29/02/2003)
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */	
	comprobar_start_date_project() {

		if (!(this.validaciones.format('start_date_project', '[0-9]{2,}[/][0-9]{2,}[/][0-9]{4,}'))) {
			this.mostrar_error_campo('start_date_project', 'start_date_project_format_KO');
			return 'start_date_project_format_KO';
		}
		if (!(this.validacionesespeciales('start_date_project',null, 'fechavalida'))) {
			this.mostrar_error_campo('start_date_project', 'start_date_project_valid_KO');
			return 'start_date_project_valid_KO';
		}
		this.mostrar_exito_campo('start_date_project');
		return true;

	}

	/**
	 * Formato de fehca permitido: dd/mm/aaaa
	 * Debe de ser una fecha válida (no puede ser por ejemplo 29/02/2003)
	 * La fecha de fin de proyecto debe de ser igual o superior a la fecha introducida en start_date_proyect
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_end_date_project() {

		if (!(this.validaciones.format('end_date_project', '[0-9]{2,}[/][0-9]{2,}[/][0-9]{4,}'))) {
			this.mostrar_error_campo('end_date_project', 'end_date_project_format_KO');
			return 'end_date_project_format_KO';
		}
		if (!(this.validacionesespeciales('end_date_project', null, 'fechavalida'))) {
			this.mostrar_error_campo('end_date_project', 'end_date_project_valid_KO');
			return 'end_date_project_valid_KO';
		}
		if (!(this.validacionesespeciales('start_date_project', 'end_date_project','fechasuperior'))) {
			this.mostrar_error_campo('end_date_project', 'end_date_project_correct_KO');
			return 'end_date_project_correct_KO';
		}
		this.mostrar_exito_campo('end_date_project');
		return true;

	}

	/**
	 * Minimo 6 y max 50 caracteres
	 * Se permiten caracteres alfabeticos, ñ, espacios y signos de puntuacion
	 * No permite los acentos
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_responsable_project() {

		if (!(this.validaciones.min_size('responsable_project', 6))) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_min_size_KO');
			//return false;
			return 'responsable_project_min_size_KO';
		}
		if (!(this.validaciones.max_size('responsable_project', 60))) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_max_size_KO');
			//return false;
			return 'responsable_project_max_size_KO';
		}
		if (!(this.validaciones.format('responsable_project', `^[A-Za-z áéíóúñÁÉÍÓÚ]*$`))) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_format_KO');
			//return false;
			return 'responsable_project_format_KO';
		}
		this.mostrar_exito_campo('responsable_project');
		return true;
	}

	/**
	 * Minimo 6 y max 100 caracteres
	 * Se permiten caracteres alfabeticos, ñ, espacios y acentos
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_organization_project() {

		if (!(this.validaciones.min_size('organization_project', 6))) {
			this.mostrar_error_campo('organization_project', 'organization_project_min_size_KO');
			//return false;
			return 'organization_project_min_size_KO';
		}
		if (!(this.validaciones.max_size('organization_project', 100))) {
			this.mostrar_error_campo('organization_project', 'organization_project_max_size_KO');
			//return false;
			return 'organization_project_max_size_KO';
		}
		if (!(this.validaciones.format('organization_project', `^[A-Za-z áéíóúñÁÉÍÓÚ]*$`))) {
			this.mostrar_error_campo('organization_project', 'organization_project_format_KO');
			//return false;
			return 'organization_project_format_KO';
		}
		this.mostrar_exito_campo('organization_project');
		return true;
	}

	/**
	 * Minimo 30 y max 500 caracteres
	 * Permite cualquier tipo de caracter ASCII
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_description_project() {

		if (!(this.validaciones.min_size('description_project', 30))) {
			this.mostrar_error_campo('description_project', 'description_project_min_size_KO');
			//return false;
			return 'description_project_min_size_KO';
		}
		if (!(this.validaciones.max_size('description_project', 500))) {
			this.mostrar_error_campo('description_project', 'description_project_max_size_KO');
			//return false;
			return 'description_project_max_size_KO';
		}
		if (!(this.validaciones.format('description_project', '^[^]*$'))) {
			this.mostrar_error_campo('description_project', 'description_project_format_KO');
			//return false;
			return 'description_project_format_KO';
		}
		this.mostrar_exito_campo('description_project');
		return true;
	}

	/**
	 * Minimo 7 y max 100 caracteres
	 * Se permiten caracteres alfabeticos y un punto
	 * No permite los acentos, los espacios, la ñ ni los signos de puntuacion (menos el punto)
	 * Tamaño máximo de 2000000 bytes
	 * Solo se admiten pdfs, .doc y .docx (word 2007 y word actual)
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_nuevo_file_project() {

		if (document.getElementById('nuevo_file_project').files.length == 0) {
			if (this.accion == 'EDIT') {
				return true;
			}
			else {
				if (this.accion = "ADD") {
					this.mostrar_error_campo('nuevo_file_project', 'nuevo_file_project_empty_KO');
					return 'nuevo_file_project_empty_KO';
				}
			}
		}

		// si tuviera un campo con multiples ficheros tendria que hacer un bucle para comprobar cada file[i]
		let mifichero = document.getElementById('nuevo_file_project').files[0];


		if (!(this.validaciones.max_size_file(mifichero, 2000000))) {
			this.mostrar_error_campo('nuevo_file_project', 'nuevo_file_project_max_size_file_KO');
			return 'nuevo_file_project_max_size_file_KO';
		}
		if (!(this.validaciones.type_file(mifichero, Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")))) {
			this.mostrar_error_campo('nuevo_file_project', 'nuevo_file_project_type_file_KO');
			return 'nuevo_file_project_type_file_KO';
		}
		if (!(this.validaciones.format_name_file(mifichero, '[A-Za-z.]*$'))) {
			this.mostrar_error_campo('nuevo_file_project', 'nuevo_file_project_format_name_file_KO');
			return 'nuevo_file_project_format_name_file_KO';
		}
		if (!this.validaciones.min_size('nuevo_file_project', 7)) {
			this.mostrar_error_campo('nuevo_file_project', 'nuevo_file_project_min_size_name_KO');
			return 'nuevo_file_project_min_size_name_KO';
		}
		if (!this.validaciones.max_size('nuevo_file_project', 100)) {
			this.mostrar_error_campo('nuevo_file_project', 'nuevo_file_project_max_size_name_KO');
			return 'nuevo_file_project_max_size_name_KO';
		}

		this.mostrar_exito_campo('nuevo_file_project');
		return true;

	}

	/**
	 * Minimo 6 y max 50 caracteres
	 * Se permiten caracteres alfabeticos, ñ, espacios y signos de puntuacion
	 * No permite los acentos
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_code_project() {

		if (!(this.validaciones.min_size('code_project', 6))) {
			this.mostrar_error_campo('code_project', 'code_project_min_size_KO');
			//return false;
			return 'code_project_min_size_KO';
		}
		if (!(this.validaciones.max_size('code_project', 50))) {
			this.mostrar_error_campo('code_project', 'code_project_max_size_KO');
			//return false;
			return 'code_project_max_size_KO';
		}
		if (!(this.validaciones.format('code_project', `^[A-Za-z ñÑ¿¡ !"#$%&'()*+,./:;<=>?@\[\\\]^_\`{|}~-]*$`))) {
			this.mostrar_error_campo('code_project', 'code_project_format_KO');
			//return false;
			return 'code_project_format_KO';
		}
		this.mostrar_exito_campo('code_project');
		return true;
	}

	/**
	 * Minimo 6 y max 15 caracteres
	 * Se permiten caracteres alfabeticos, ñ y signos de puntuacion
	 * No permite los acentos ni espacios
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_acronym_project() {

		if (!(this.validaciones.min_size('acronym_project', 6))) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_min_size_KO');
			//return false;
			return 'acronym_project_min_size_KO';
		}
		if (!(this.validaciones.max_size('acronym_project', 50))) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_max_size_KO');
			//return false;
			return 'acronym_project_max_size_KO';
		}
		if (!(this.validaciones.format('acronym_project', `^[A-Za-zñÑ¿¡!"#$%&'()*+,./:;<=>?@\[\\\]^_\`{|}~-]*$`))) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_format_KO');
			//return false;
			return 'acronym_project_format_KO';
		}
		this.mostrar_exito_campo('acronym_project');
		return true;
	}

	comprobar_id_sampling_methodology() {

		if (!(this.validaciones.min_size('id_sampling_methodology', 1))) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_min_size_KO');
			//return false;
			return 'id_sampling_methodology_min_size_KO';
		}
		if (!(this.validaciones.max_size('id_sampling_methodology', 11))) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_max_size_KO');
			//return false;
			return 'id_sampling_methodology_max_size_KO';
		}
		if (!(this.validaciones.format('id_sampling_methodology', '^[0-9]*$'))) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_format_KO');
			//return false;
			return 'id_sampling_methodology_format_KO';
		}
		this.mostrar_exito_campo('id_sampling_methodology');
		return true;
	}


	comprobar_submit() {

		let result = (
			(this.comprobar_id_project()) &
			(this.comprobar_name_project()) &
			(this.comprobar_start_date_project()) &
			(this.comprobar_end_date_project()) &
			(this.comprobar_responsable_project()) &
			(this.comprobar_organization_project()) &
			(this.comprobar_description_project()) &
			(this.comprobar_nuevo_file_project()) &
			(this.comprobar_code_project()) &
			(this.comprobar_acronym_project()) &
			(this.comprobar_id_sampling_methodology())
		);

		result = Boolean(result);

		return result;

	}

	/*
	comprobacion campos SEARCH
	*/

	/**
	 * Max 11
	 * Solo están permitidos los digitos
	 * 
	 * @returns true 
	 */
	comprobar_id_project_SEARCH() {

		if (!(this.validaciones.max_size('id_project', 8))) {
			this.mostrar_error_campo('id_project', 'id_project_max_size_KO');
			//return false;
			return 'id_project_max_size_KO'
		}
		if (!(this.validaciones.format('id_project', '^[0-9]*$'))) {
			this.mostrar_error_campo('id_project', 'id_project_format_KO');
			//return false;
			return 'id_project_format_KO'
		}
		this.mostrar_exito_campo('id_project');
		return true;

	}

	/**
	 * Max 100 caracteres
	 * Se permiten caracteres alfabeticos y espacios
	 * No permite los acentos ni ñ
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */
	comprobar_name_project_SEARCH() {

		if (!(this.validaciones.max_size('name_project', 20))) {
			this.mostrar_error_campo('name_project', 'name_project_max_size_KO');
			//return false;
			return 'name_project_max_size_KO'
		}
		if (!(this.validaciones.format('name_project', '[A-Z\s]*$'))) {
			this.mostrar_error_campo('name_project', 'name_project_format_KO');
			//return false;
			return 'name_project_format_KO'
		}
		this.mostrar_exito_campo('name_project');
		return true;

	}

	/**
	 * Formato de fehca permitido: dd/mm/aaaa
	 * Debe de ser una fecha válida (no puede ser por ejemplo 29/02/2003)
	 * 
	 * @returns true si cumple todas validaciones, sino le devuelve el correspondiente el error
	 */	
	comprobar_start_date_project_SEARCH() {

	if(document.getElementById('start_date_project').value != null){
		if (!(this.validaciones.format('start_date_project', '[0-9]{2,}[/][0-9]{2,}[/][0-9]{4,} '))) {
			this.mostrar_error_campo('start_date_project', 'start_date_project_format_KO');
			return 'start_date_project_format_KO';
		}
		if (!(this.validacionesespeciales('start_date_project',null, 'fechavalida'))) {
			this.mostrar_error_campo('start_date_project', 'start_date_project_valid_KO');
			return 'start_date_project_valid_KO';
		}

	}


		this.mostrar_exito_campo('start_date_project');
		return true;
	}

	comprobar_end_date_project_SEARCH() {

		if (!(this.validaciones.format('end_date_project', ''))) {
			this.mostrar_error_campo('end_date_project', 'end_date_project_format_KO');
			return 'end_date_project_format_KO';
		}

		this.mostrar_exito_campo('end_date_project');
		return true;
	}

	comprobar_responsable_project_SEARCH() {

		if (!(this.validaciones.max_size('responsable_project', 20))) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_max_size_KO');
			//return false;
			return 'responsable_project_max_size_KO';
		}
		if (!(this.validaciones.format('responsable_project', '^[a-zA-Z0-9.@_]{0,20}'))) {
			this.mostrar_error_campo('responsable_project', 'responsable_project_format_KO');
			//return false;
			return 'responsable_project_format_KO';
		}
		this.mostrar_exito_campo('responsable_project');
		return true;

	}

	comprobar_organization_project_SEARCH() {

		if (!(this.validaciones.max_size('organization_project', 20))) {
			this.mostrar_error_campo('organization_project', 'organization_project_max_size_KO');
			//return false;
			return 'organization_project_max_size_KO';
		}
		if (!(this.validaciones.format('organization_project', '^[a-zA-Z0-9.@_]{0,20}'))) {
			this.mostrar_error_campo('organization_project', 'organization_project_format_KO');
			//return false;
			return 'organization_project_format_KO';
		}
		this.mostrar_exito_campo('organization_project');
		return true;

	}

	comprobar_description_project_SEARCH() {

		if (!(this.validaciones.max_size('description_project', 20))) {
			this.mostrar_error_campo('description_project', 'description_project_max_size_KO');
			//return false;
			return 'description_project_max_size_KO';
		}
		if (!(this.validaciones.format('description_project', '^[a-zA-Z0-9.@_]{0,20}'))) {
			this.mostrar_error_campo('description_project', 'description_project_format_KO');
			//return false;
			return 'description_project_format_KO';
		}
		this.mostrar_exito_campo('description_project');
		return true;

	}

	comprobar_file_project_SEARCH() {

		if (!(this.validaciones.max_size('file_project', 20))) {
			this.mostrar_error_campo('file_project', 'file_project_max_size_KO');
			//return false;
			return 'file_project_max_size_KO';
		}
		if (!(this.validaciones.format('file_project', '[A-Z]+${,20}'))) {
			this.mostrar_error_campo('file_project', 'file_project_format_KO');
			//return false;
			return 'file_project_format_KO';
		}
		this.mostrar_exito_campo('file_project');
		return true;
	}

	//max 50 y permite alfabeticos, signos de puntuacion ñ y espacios, no se permiten los acentos
	comprobar_code_project_SEARCH() {

		if (!(this.validaciones.max_size('code_project', 20))) {
			this.mostrar_error_campo('code_project', 'code_project_max_size_KO');
			//return false;
			return 'code_project_max_size_KO';
		}
		if (!(this.validaciones.format('code_project', '^[a-zA-Z0-9.@_]{0,20}'))) {
			this.mostrar_error_campo('code_project', 'code_project_format_KO');
			//return false;
			return 'code_project_format_KO';
		}
		this.mostrar_exito_campo('code_project');
		return true;

	}


	//max 15 y solo se admiten alfabeticos, ñ y signos de puntuacion, prohibido espacios y acentos 
	comprobar_acronym_project_SEARCH() {

		if (!(this.validaciones.max_size('acronym_project', 15))) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_max_size_KO');
			//return false;
			return 'acronym_project_max_size_KO';
		}
		if (!(this.validaciones.format('acronym_project', `^[A-Za-zñÑ¿¡!"#$%&'()*+,./:;<=>?@\[\\\]^_\`{|}~-]*$`))) {
			this.mostrar_error_campo('acronym_project', 'acronym_project_format_KO');
			//return false;
			return 'acronym_project_format_KO';
		}
		this.mostrar_exito_campo('acronym_project');
		return true;

	}

	comprobar_id_sampling_methodology_SEARCH() {

		if (!(this.validaciones.max_size('id_sampling_methodology', 20))) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_max_size_KO');
			//return false;
			return 'id_sampling_methodology_max_size_KO';
		}
		if (!(this.validaciones.format('id_sampling_methodology', '^[0-9]*$'))) {
			this.mostrar_error_campo('id_sampling_methodology', 'id_sampling_methodology_format_KO');
			//return false;
			return 'id_sampling_methodology_format_KO';
		}
		this.mostrar_exito_campo('id_sampling_methodology');
		return true;

	}

	comprobar_submit_SEARCH() {

		let result = (
			(this.comprobar_id_project_SEARCH()) &
			(this.comprobar_name_project_SEARCH()) &
			(this.comprobar_start_date_project_SEARCH()) &
			(this.comprobar_end_date_project_SEARCH()) &
			(this.comprobar_responsable_project_SEARCH()) &
			(this.comprobar_organization_project_SEARCH()) &
			(this.comprobar_description_project_SEARCH()) &
			(this.comprobar_file_project_SEARCH()) &
			(this.comprobar_code_project_SEARCH()) &
			(this.comprobar_acronym_project_SEARCH()) &
			(this.comprobar_id_sampling_methodology_SEARCH())
		);

		result = Boolean(result);

		return result;

	}

	/*
		metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	*/

	cambiardatosespecialestabla(atributo, valoratributo) {

		if (atributo == 'file_project') {

			if (valoratributo == '') {
				return "no hay fichero";
			}
			let texto = valoratributo;
			texto += `<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;

			return texto;

		}

		if (atributo == 'start_date_project') {

			let fech = valoratributo.split('-');
			let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
			return fechaformateada;

		}

	}

	/*
		metodo para validaciones especiales de atributos en los formularios
	*/

	validacionesespeciales(atributo1, atributo2, prueba) {

		if ((atributo1 == 'start_date_project' || atributo1 == 'end_date_project') && atributo2 == null) {
			if (prueba == 'fechavalida') {
				let fecha = document.getElementById(atributo1).value;
				let fechaf = fecha.split("/");
				let day = fechaf[0];
				let month = fechaf[1];
				let year = fechaf[2];
				let date = new Date(year, month, '0');
				if ((day - 0) > (date.getDate() - 0)) {
					return false;
				}
				return true;
			}
		}
		if (atributo1 == 'start_date_project' && atributo2 == 'end_date_project') {
			if (prueba == 'fechasuperior') {
				if(document.getElementById(atributo1.value)!= null || document.getElementById(atributo2.value)!= null){
					let fecha1 = document.getElementById(atributo1).value;
					let fecha2 = document.getElementById(atributo2).value;
					let fechaf1 = fecha1.split("/");
					let fechaf2 = fecha2.split("/");
					let dateStart = new Date(fechaf1[2], fechaf1[1]-1 ,fechaf1[0]);
					console.log(dateStart);
					let dateEnd = new Date(fechaf2[2], fechaf2[1]-1, fechaf2[0]);
					console.log(dateEnd);
					if (dateEnd < dateStart) return false;
					return true;
				}else return true;

			}
		}

	}

	/*
	metodos auxiliares
	*/
	colocarboton(accion) {

		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		//divboton.stype.display = 'block';
		document.getElementById('IU_form').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/' + accion + '.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);

	}

	rellenarvaloresform(parametros) {

		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			if (document.getElementById(campos[i].id).type == 'file') {

			}
			else {
				document.getElementById(campos[i].id).value = parametros[campos[i].id];
			}
		}
	}

	colocarvalidaciones(accion) {

		let evento;
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file')) {
				evento = 'onblur';
			}
			else {
				evento = 'onchange';
			}
			if (accion == 'SEARCH') {
				document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '_' + accion + '();');
			}
			else {
				document.getElementById(campos[i].id).setAttribute(evento, 'validar.comprobar_' + campos[i].id + '();');
			}

		}
	}

	ponernoactivoform() {
		//obtener campos del formulario
		let campos = document.forms['IU_form'].elements;
		//recorrer todos los campos
		for (let i = 0; i < campos.length; i++) {
			document.getElementById(campos[i].id).setAttribute('readonly', true);
		}
	}

}