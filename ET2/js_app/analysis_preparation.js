class analysis_preparation extends EntidadAbstracta {


	constructor() {

		super();

		this.entidad = 'analysis_preparation';
		this.columnasamostrar = Array('id_analysis_preparation', 'name_analysis_preparation', 'description_analysis_preparation', 'bib_analysis_preparation', 'file_analysis_preparation');
		this.datosespecialestabla = Array('file_analysis_preparation');

		this.inicializar();

	}

	/*
	carga e inicialización del formulario de la clase
	*/

	cargar_formulario_html() {

		// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
		this.accion = '';

		let formulario = `
			<label id="label_id_analysis_preparation" class="label_id_analysis_preparation"></label>
			<input type="text" id="id_analysis_preparation" name="id_analysis_preparation" />
			<span id="div_error_id_analysis_preparation"></span>
			<br>

			<label id="label_name_analysis_preparation" class="label_name_analysis_preparation"></label>
			<input type="text" id="name_analysis_preparation" name="name_analysis_preparation" />
			<span id="div_error_name_analysis_preparation"></span>
			<br>

			<label id="label_description_analysis_preparation" class="label_description_analysis_preparation"></label>
			<input type="text" id="description_analysis_preparation" name="description_analysis_preparation" />
			<span id="div_error_description_analysis_preparation"></span>
			<br>

			<label id="label_bib_analysis_preparation" class="label_bib_analysis_preparation"></label>
			<input type="text" id="bib_analysis_preparation" name="bib_analysis_preparation" />
			<span id="div_error_bib_analysis_preparation"></span>
			<br>

			<label id="label_file_analysis_preparation" class="label_file_analysis_preparation"></label>
			<input type='text' id='file_analysis_preparation' name='file_analysis_preparation'></input>
			<span id="div_error_file_analysis_preparation"><a id="error_file_analysis_preparation"></a></span>
			<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/"><img src="./iconos/FILE.png" /></a>
			<label id="label_nuevo_file_analysis_preparation" class="label_nuevo_file_analysis_preparation"></label>
			<input type='file' id='nuevo_file_analysis_preparation' name='nuevo_file_analysis_preparation'></input>
			<span id="div_error_nuevo_file_analysis_preparation"><a id="error_nuevo_file_analysis_preparation"></a></span>
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

		//Eliminamos los campos innecesarios
		//Valor autoincremental
		document.getElementById('label_id_analysis_preparation').remove();
		document.getElementById('id_analysis_preparation').remove();
		//Ficheros
		document.getElementById('file_analysis_preparation').remove();
		document.getElementById('label_nuevo_file_analysis_preparation').remove();
		document.getElementById('link_file_analysis_preparation').remove();

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

		//Poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SEARCH';

		//Eliminar campos innecesarios
		document.getElementById('label_nuevo_file_analysis_preparation').remove();
		document.getElementById('nuevo_file_analysis_preparation').remove();
		document.getElementById('link_file_analysis_preparation').remove();

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

		// eliminamos los campos innecesarios
		document.getElementById('nuevo_file_analysis_preparation').remove();
		document.getElementById('label_nuevo_file_analysis_preparation').remove();

		// desactivo los campos necesarios
		document.getElementById('file_analysis_preparation').setAttribute('readonly', true);
		document.getElementById('id_analysis_preparation').setAttribute('readonly', true);

		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_file_analysis_preparation').href += parametros.file_analysis_preparation;

		// coloco las validaciones
		this.colocarvalidaciones('EDIT');

		document.getElementById('file_analysis_preparation').removeAttribute('onblur');

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

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_DELETE';

		//Eliminamos los elementos innecesarios
		document.getElementById('label_nuevo_file_analysis_preparation').remove();
		document.getElementById('nuevo_file_analysis_preparation').remove();

		this.rellenarvaloresform(parametros);

		document.getElementById('link_file_analysis_preparation').href += parametros.file_analysis_preparation;

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

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SHOWCURRENT';

		document.getElementById('label_nuevo_file_analysis_preparation').remove();
		document.getElementById('nuevo_file_analysis_preparation').remove();

		this.rellenarvaloresform(parametros);

		document.getElementById('link_file_analysis_preparation').href += parametros.file_analysis_preparation;

		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	/*
	comprobacion campos ADD, EDIT

	No se añade comprobaciones para id_analysis_preparation debido a que este valor es autoincremental
	*/

	comporbar_id_analysis_preparation() {
		//Al ser autoincremental no se realizan cambios
		return true;
	}

	comprobar_name_analysis_preparation() {

		if (!(this.validaciones.min_size('name_analysis_preparation', 8))) {
			this.mostrar_error_campo('name_analysis_preparation', 'name_analysis_preparation_min_size_KO');
			return 'name_analysis_prepration_min_size_KO';
		}
		if (!(this.validaciones.max_size('name_analysis_preparation', 100))) {
			this.mostrar_error_campo('name_analysis_preparation', 'name_analysis_preparation_max_size_KO');
			return 'name_analysis_preparation_max_size_KO'
		}
		if (!(this.validaciones.format('name_analysis_preparation', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('name_analysis_preparation', 'name_analysis_preparation_format_KO');
			return 'name_analysis_preparation_format_KO'
		}
		this.mostrar_exito_campo('name_analysis_preparation');
		return true;

	}

	comprobar_description_analysis_preparation() {

		if (!(this.validaciones.min_size('description_analysis_preparation', 80))) {
			this.mostrar_error_campo('description_analysis_preparation', 'description_analysis_preparation_min_size_KO');
			//return false;
			return 'description_analysis_preparation_min_size_KO';
		}
		if (!(this.validaciones.max_size('description_analysis_preparation', 5000))) {
			this.mostrar_error_campo('description_analysis_preparation', 'description_analysis_preparation_max_size_KO');
			//return false;
			return 'description_analysis_preparation_max_size_KO';
		}
		if (!(this.validaciones.format('description_analysis_preparation', '^[A-Za-z ]*$'))) {
			this.mostrar_error_campo('description_analysis_preparation', 'description_analysis_preparation_format_KO');
			//return false;
			return 'description_analysis_preparation_format_KO'
		}
		this.mostrar_exito_campo('description_analysis_preparation');
		return true;
	}

	comprobar_bib_analysis_preparation() {

		if (!(this.validaciones.min_size('bib_analysis_preparation', 6))) {
			this.mostrar_error_campo('bib_analysis_preparation', 'bib_analysis_preparation_min_size_KO');
			//return false;
			return 'bib_analysis_preparation_min_size_KO';
		}
		if (!(this.validaciones.max_size('bib_analysis_preparation', 200))) {
			this.mostrar_error_campo('bib_analysis_preparation', 'bib_analysis_preparation_max_size_KO');
			//return false;
			return 'bib_analysis_preparation_max_size_KO';
		}
		if (!(this.validaciones.format('bib_analysis_preparation', `^[A-Za-z áéíóúñÁÉÍÓÚÑ¿¡ !"#$%&'()*+,./:;<=>?@\[\\\]^_\`{|}~-]*$`))) {
			this.mostrar_error_campo('bib_analysis_preparation', 'bib_analysis_preparation_format_KO');
			//return false;
			return 'bib_analysis_preparation_format_KO';
		}
		this.mostrar_exito_campo('bib_analysis_preparation');
		return true;
	}

	comprobar_nuevo_file_analysis_preparation() {

		if (document.getElementById('nuevo_file_analysis_preparation').files.length == 0) {
			if (this.accion == 'EDIT') {
				return true;
			}
			else {
				if (this.accion = "ADD") {
					this.mostrar_error_campo('nuevo_file_analysis_preparation', 'nuevo_file_analysis_preparation_empty_KO');
					return 'nuevo_file_analysis_preparation_empty_KO';
				}
			}
		}

		// si tuviera un campo con multiples ficheros tendria que hacer un bucle para comprobar cada file[i]
		let mifichero = document.getElementById('nuevo_file_analysis_preparation').files[0];


		if (!(this.validaciones.max_size_file(mifichero, 2000000))) {
			this.mostrar_error_campo('nuevo_file_analysis_preparation', 'nuevo_file_analysis_preparation_max_size_file_KO');
			return 'nuevo_file_analysis_preparation_max_size_file_KO';
		}
		if (!(this.validaciones.type_file(mifichero, Array("application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")))) {
			this.mostrar_error_campo('nuevo_file_analysis_preparation', 'nuevo_file_analysis_preparation_type_file_KO');
			return 'nuevo_file_analysis_preparation_type_file_KO';
		}
		if (!(this.validaciones.format_name_file(mifichero, '[A-Za-z.]*$'))) {
			this.mostrar_error_campo('nuevo_file_analysis_preparation', 'nuevo_file_analysis_preparation_format_name_file_KO');
			return 'nuevo_file_analysis_preparation_format_name_file_KO';
		}
		if (!this.validaciones.min_size('nuevo_file_analysis_preparation', 7)) {
			this.mostrar_error_campo('nuevo_file_analysis_preparation', 'nuevo_file_analysis_preparation_min_size_name_KO');
			return 'nuevo_file_analysis_preparation_min_size_name_KO';
		}
		if (!this.validaciones.max_size('nuevo_file_analysis_preparation', 100)) {
			this.mostrar_error_campo('nuevo_file_analysis_preparation', 'nuevo_file_analysis_preparation_max_size_name_KO');
			return 'nuevo_file_analysis_preparation_max_size_name_KO';
		}

		this.mostrar_exito_campo('nuevo_file_analysis_preparation');
		return true;

	}

	comprobar_submit() {

		let result = (
			(this.comporbar_id_analysis_preparation()) &
			(this.comprobar_name_analysis_preparation()) &
			(this.comprobar_description_analysis_preparation()) &
			(this.comprobar_bib_analysis_preparation()) &
			(this.comprobar_nuevo_file_analysis_preparation())
		);

		result = Boolean(result);

		return result;

	}

	/*
	comprobacion campos SEARCH

	Para las operaciones sí que se debe de comprobar id_analysis_preparation
	*/

	comprobar_id_analysis_preparation_SEARCH() {

		if (!(this.validaciones.max_size('id_analysis_preparation', 11))) {
			this.mostrar_error_campo('id_analysis_preparation', 'id_analysis_preparation_max_size_KO');
			//return false;
			return 'id_analysis_preparation_max_size_KO'
		}
		if (!(this.validaciones.format('id_analysis_preparation', '[0-9]*$'))) {
			this.mostrar_error_campo('id_analysis_preparation', 'id_analysis_preparation_format_KO');
			//return false;
			return 'id_analysis_preparation_format_KO'
		}
		this.mostrar_exito_campo('id_analysis_preparation');
		return true;

	}

	comprobar_name_analysis_preparation_SEARCH() {

		if (!(this.validaciones.max_size('name_analysis_preparation', 100))) {
			this.mostrar_error_campo('name_analysis_preparation', 'name_analysis_preparation_max_size_KO');
			//return false;
			return 'name_analysis_preparation_max_size_KO'
		}
		if (!(this.validaciones.format('name_analysis_preparation', '[A-Za-z ]*$'))) {
			this.mostrar_error_campo('name_analysis_preparation', 'name_analysis_preparation_format_KO');
			//return false;
			return 'name_analysis_preparation_format_KO'
		}
		this.mostrar_exito_campo('name_analysis_preparation');
		return true;

	}

	comprobar_description_analysis_preparation_SEARCH() {

		if (!(this.validaciones.max_size('description_analysis_preparation', 5000))) {
			this.mostrar_error_campo('description_analysis_preparation', 'description_analysis_preparation_max_size_KO');
			//return false;
			return 'description_analysis_preparation_max_size_KO'
		}
		if (!(this.validaciones.format('description_analysis_preparation', '[A-Za-z ]*$'))) {
			this.mostrar_error_campo('description_analysis_preparation', 'description_analysis_preparation_format_KO');
			//return false;
			return 'description_analysis_preparation_format_KO'
		}
		this.mostrar_exito_campo('description_analysis_preparation');
		return true;
	}

	comprobar_bib_analysis_preparation_SEARCH() {

		if (!(this.validaciones.max_size('bib_analysis_preparation', 200))) {
			this.mostrar_error_campo('bib_analysis_preparation', 'bib_analysis_preparation_max_size_KO');
			//return false;
			return 'bib_analysis_preparation_max_size_KO'
		}
		if (!(this.validaciones.format('bib_analysis_preparation', `^[A-Za-z áéíóúñÁÉÍÓÚÑ¿¡ !"#$%&'()*+,./:;<=>?@\[\\\]^_\`{|}~-]*$`))) {
			this.mostrar_error_campo('bib_analysis_preparation', 'bib_analysis_preparation_format_KO');
			//return false;
			return 'bib_analysis_preparation_format_KO'
		}
		this.mostrar_exito_campo('bib_analysis_preparation');
		return true;
	}

	comprobar_file_analysis_preparation_SEARCH() {

		if (!(this.validaciones.max_size('file_analysis_preparation', 20))) {
			this.mostrar_error_campo('file_analysis_preparation', 'file_analysis_preparation_max_size_KO');
			//return false;
			return 'file_analysis_preparation_max_size_KO';
		}
		if (!(this.validaciones.format('file_analysis_preparation', '^[A-Za-z.]*$'))) {
			this.mostrar_error_campo('file_analysis_preparation', 'file_analysis_preparation_format_KO');
			//return false;
			return 'file_analysis_preparation_format_KO';
		}
		this.mostrar_exito_campo('file_analysis_preparation');
		return true;
	}


	comprobar_submit_SEARCH() {

		let result = (
			(this.comprobar_id_analysis_preparation_SEARCH()) &
			(this.comprobar_name_analysis_preparation_SEARCH()) &
			(this.comprobar_description_analysis_preparation_SEARCH()) &
			(this.comprobar_bib_analysis_preparation_SEARCH()) &
			(this.comprobar_file_analysis_preparation_SEARCH())
		);

		result = Boolean(result);

		return result;

	}

	/*
		metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	*/

	cambiardatosespecialestabla(atributo, valoratributo) {

		if (atributo == 'file_analysis_preparation') {

			if (valoratributo == '') {
				return "no hay fichero";
			}

			let texto = valoratributo;
			texto += `<a id="link_file_analysis_preparation`;
			texto += `_`;
			texto += valoratributo; //Para evitar ids duplicados
			texto += `" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;
			return texto;

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
			if (document.getElementById(campos[i].id).type != 'file') {
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