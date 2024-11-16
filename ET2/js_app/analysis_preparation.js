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

			<label id="label_name_analysis_preparation" class="label_name_analysis_preparation"></label>
			<input type="text" id="name_analysis_preparation" name="name_analysis_preparation" />
			<spam id="div_error_name_analysis_preparation"></span>
			<br>

			<label id="label_description_analysis_preparation" class="label_description_analysis_preparation"></label>
			<input type="text" id="description_analysis_preparation" name="description_analysis_preparation" />
			<spam id="div_error_description_analysis_preparation"></span>
			<br>

			<label id="label_bib_analysis_preparation" class="label_bib_analysis_preparation"></label>
			<input type="text" id="bib_analysis_preparation" name="bib_analysis_preparation" />
			<spam id="div_error_bib_analysis_preparation"></span>
			<br>

			<label id="label_file_analysis_preparation" class="label_file_analysis_preparation"></label>
			<input type='text' id='file_analysis_preparation' name='file_analysis_preparation'></input>
			<span id="div_error_file_analysis_preparation"><a id="error_file_analysis_preparation"></a></span>
			<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/file_analysis_preparation/"><img src="./iconos/FILE.png" /></a>
			<label id="label_new_file_analysis_preparation" class="label_new_analysis_preparation"></label>
			<input type='file' id='new_file_analysis_preparation' name='new_file_analysis_preparation'></input>
			<span id="div_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
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


		//editar
		document.getElementById('label_file_analysis_preparation').remove();
		document.getElementById('file_analysis_preparation').remove();
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

		document.getElementById('label_file_analysis_preparation').remove();
		document.getElementById('file_analysis_preparation').remove();
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

		// desactivo los campos necesarios
		document.getElementById('file_analysis_preparation').setAttribute('readonly', true);
		document.getElementById('id_analysis_preparation').setAttribute('readonly', true);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.fechaNacimiento_persona.split('-');
		let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('fechaNacimiento_persona').value = fechaformateada;
		*/

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

		document.getElementById('label_new_file_analysis_preparation').remove();
		document.getElementById('new_file_analysis_preparation').remove();

		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.fechaNacimiento_persona.split('-');
		let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('fechaNacimiento_persona').value = fechaformateada;
		*/

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

		document.getElementById('label_new_file_analysis_preparation').remove();
		document.getElementById('new_analysis_preparation').remove();

		this.rellenarvaloresform(parametros);

		/*
		cambio presentacion fecha a formato dd/mm/aaaa directamente en codigo o reutilizando el metodo de cambio de presentacion en tabla
		*/
		/*
		let fech = parametros.fechaNacimiento_persona.split('-');
		let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
		document.getElementById('fechaNacimiento_persona').value = fechaformateada;
		*/

		document.getElementById('link_file_analysis_preparation').href += parametros.foto_persona;

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

	comprobar_name_analysis_preparation() {

		if (!(this.validaciones.min_size('name_analysis_preparation', 8))) {
			this.mostrar_error_campo('name_analysis_preparation', 'name_analysis_preparation_min_size_KO');
			return 'name_analysis_prepration_min_size_KO';
		}
		if (!(this.validaciones.max_size('name_analysis_preparation', 100))) {
			this.mostrar_error_campo('name_analysis_preparation', 'name_analysis_preparation_max_size_KO');
			return 'name_analysis_preparation_max_size_KO'
		}
		if (!(this.validaciones.format('name_analysis_preparation', '^[a-zA-z]+([\s][a-zA-Z]+)*$'))) {
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
		if (!(this.validaciones.format('description_analysis_preparation', '^[a-zA-z]+([a-zA-Z]+)*$'))) {
			this.mostrar_error_campo('description_analysis_preparation', 'description_analysis_preparation_format_KO');
			//return false;
			return 'description_analysis_preparation_format_KO'
		}
		this.mostrar_exito_campo('description_analysis_preparation');
		return true;
	}

	comprobar_bib_analysis_preparation() {

		if (!(this.validaciones.min_size('bib_analysis_prepraration', 5))) {
			this.mostrar_error_campo('bib_analysis_prepraration', 'bib_analysis_preparation_min_size_KO');
			//return false;
			return 'bib_analysis_preparation_min_size_KO';
		}
		if (!(this.validaciones.max_size('bib_analysis_prepraration', 20))) {
			this.mostrar_error_campo('bib_analysis_prepraration', 'bib_analysis_preparation_max_size_KO');
			//return false;
			return 'bib_analysis_preparation_max_size_KO';
		}
		if (!(this.validaciones.format('bib_analysis_prepraration', '^[^@]+@[^@]+\.[A-Za-z]{2,}$'))) {
			this.mostrar_error_campo('bib_analysis_prepraration', 'bib_analysis_preparation_format_KO');
			//return false;
			return 'bib_analysis_preparation_format_KO';
		}
		this.mostrar_exito_campo('bib_analysis_prepraration');
		return true;
	}

	comprobar_new_file_analysis_preparation() {

		if (document.getElementById('new_file_analysis_preparation').files.length == 0) {
			if (this.accion == 'EDIT') {
				return true;
			}
			else {
				if (this.accion = "ADD") {
					this.mostrar_error_campo('new_file_analysis_preparation', 'new_file_analysis_preparation_empty_KO');
					return 'new_file_analysis_preparation_empty_KO';
				}
			}
		}

		// si tuviera un campo con multiples ficheros tendria que hacer un bucle para comprobar cada file[i]
		let mifichero = document.getElementById('new_file_analysis_preparation').files[0];


		if (!(this.validaciones.max_size_file(mifichero, 20000))) {
			this.mostrar_error_campo('new_file_analysis_preparation', 'new_file_analysis_preparation_max_size_file_KO');
			return 'nuevo_foto_persona_max_size_file_KO';
		}
		if (!(this.validaciones.type_file(mifichero, Array("application/pdf", "application/msword")))) {
			this.mostrar_error_campo('new_file_analysis_preparation', 'new_file_analysis_preparation_type_file_KO');
			return 'new_file_analysis_preparation_type_file_KO';
		}
		if (!(this.validaciones.format_name_file(mifichero, '^[a-zA-z]+([a-zA-Z]+)*$'))) {
			this.mostrar_error_campo('new_file_analysis_preparation', 'new_file_analysis_preparation_format_name_file_KO');
			return 'new_file_analysis_preparation_format_name_file_KO';
		}
		if (!this.validaciones.min_size('new_file_analysis_preparation', 7)) {
			this.mostrar_error_campo('new_file_analysis_preparation', 'new_file_analysis_preparation_min_size_name_KO');
			return 'new_file_analysis_preparation_min_size_name_KO';
		}
		if (!this.validaciones.max_size('new_file_analysis_preparation', 100)) {
			this.mostrar_error_campo('new_file_analysis_preparation', 'new_file_analysis_preparation_max_size_name_KO');
			return 'new_file_analysis_preparation_max_size_name_KO';
		}

		this.mostrar_exito_campo('new_file_analysis_preparation');
		return true;

	}

	comprobar_submit() {

		let result = (
			(this.comprobar_name_analysis_preparation()) &
			(this.comprobar_description_analysis_preparation()) &
			(this.comprobar_bib_analysis_preparation()) &
			(this.comprobar_new_file_analysis_preparation())
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

	comprobar_apellidos_persona_SEARCH() {

		if (!(this.validaciones.max_size('apellidos_persona', 20))) {
			this.mostrar_error_campo('apellidos_persona', 'apellidos_persona_max_size_KO');
			//return false;
			return 'apellidos_persona_max_size_KO'
		}
		if (!(this.validaciones.format('apellidos_persona', '[A-Z\s]*$'))) {
			this.mostrar_error_campo('apellidos_persona', 'apellidos_persona_format_KO');
			//return false;
			return 'apellidos_persona_format_KO'
		}
		this.mostrar_exito_campo('apellidos_persona');
		return true;

	}

	comprobar_fechaNacimiento_persona_SEARCH() {

		if (!(this.validaciones.format('fechaNacimiento_persona', ''))) {
			this.mostrar_error_campo('fechaNacimiento_persona', 'fechaNacimiento_persona_format_KO');
			return 'fechaNacimiento_persona_format_KO';
		}

		this.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	comprobar_email_persona_SEARCH() {

		if (!(this.validaciones.max_size('email_persona', 20))) {
			this.mostrar_error_campo('email_persona', 'email_persona_max_size_KO');
			//return false;
			return 'email_persona_max_size_KO';
		}
		if (!(this.validaciones.format('email_persona', '^[a-zA-Z0-9.@_]{0,20}'))) {
			this.mostrar_error_campo('email_persona', 'email_persona_format_KO');
			//return false;
			return 'email_persona_format_KO';
		}
		this.mostrar_exito_campo('email_persona');
		return true;

	}

	comprobar_foto_persona_SEARCH() {

		if (!(this.validaciones.max_size('foto_persona', 20))) {
			this.mostrar_error_campo('foto_persona', 'foto_persona_max_size_KO');
			//return false;
			return 'foto_persona_max_size_KO';
		}
		if (!(this.validaciones.format('foto_persona', '[A-Z]+${,20}'))) {
			this.mostrar_error_campo('foto_persona', 'foto_persona_format_KO');
			//return false;
			return 'foto_persona_format_KO';
		}
		this.mostrar_exito_campo('foto_persona');
		return true;
	}


	comprobar_submit_SEARCH() {

		let result = (
			(this.comprobar_nombre_persona_SEARCH()) &
			(this.comprobar_apellidos_persona_SEARCH()) &
			(this.comprobar_email_persona_SEARCH()) &
			(this.comprobar_fechaNacimiento_persona_SEARCH())
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
			texto += `<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/file_analysis_preparation`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;

			return texto;

		}

	}

	/*
		metodo para validaciones especiales de atributos en los formularios
	*/

	validacionesespeciales(atributo, prueba) {

		if (atributo == 'fechaNacimiento_persona') {
			if (prueba == 'fechavalida') {
				let fecha = document.getElementById(atributo).value;
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


	/*

	crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';

		//construir tabla
		this.hacertabla();
		//construir select
		this.construirSelect();
		
		//ocultar segun columnasamostrar
		this.mostrarocultarcolumnas();

	}

	modificarcolumnasamostrar(atributo){


		let nuevascolumnas = Array();
		if (this.columnasamostrar.includes(atributo)){
			// borrar ese atributo
			for (let i=0;i<this.columnasamostrar.length;i++){
				if (this.columnasamostrar[i] == atributo){}
				else{
					nuevascolumnas.push(this.columnasamostrar[i]);
				}
			}
			this.columnasamostrar = nuevascolumnas;
		}
		else{
			// añadir
			this.columnasamostrar.push(atributo);
		}


		this.crearTablaDatos();
	}

	mostrarocultarcolumnas(){

		for (let columna of this.atributos){
			if (this.columnasamostrar.includes(columna)){}
			else{
				//document.querySelector("th[class='"+columna+" tabla-th-"+columna+"']").style.display = 'none';
				document.querySelector("th[class='"+columna+"']").style.display = 'none';
				let arraytds = document.querySelectorAll("td[class='tabla-td-"+columna+"']");
				for (let i=0;i<arraytds.length;i++){
					arraytds[i].style.display = 'none';
				}
			}
		}


	}

	construirSelect(){

		document.getElementById("seleccioncolumnas").innerHTML = '';
		
		let optionselect = '';
		for (let atributo of this.atributos){
			optionselect = document.createElement('option');
			optionselect.className = atributo;
			optionselect.innerHTML = atributo;
			optionselect.setAttribute("onclick","validar.modificarcolumnasamostrar('"+atributo+"');");
			if (this.columnasamostrar.includes(atributo)){
				optionselect.selected = true;
			}
			document.getElementById("seleccioncolumnas").append(optionselect);
		}
		setLang();
	}

	hacertabla(){

		// titulos

		document.getElementById("text_title_page").className = "text_titulo_page_"+this.entidad;
		document.getElementById('title_page').style.display = 'block';

		this.atributos = Object.keys(this.datos[0]);

		var textolineatitulos = '<tr>';

		for (let atributo of this.atributos){
		
			textolineatitulos += '<th class="'+atributo+'">'+atributo+'</th>';
	    
		}  
		    
		textolineatitulos += '<th colspan="3"></th>';
	    
		textolineatitulos += '</tr>';
	    
		let cabecera = document.getElementById("titulostablacabecera");
		cabecera.innerHTML = textolineatitulos;

		// filas

		var textolineadatos = ''; 

		for (let i=0;i<this.datos.length;i++){
	    
			textolineadatos += '<tr style="background-color:grey;">';

			for (let clave in this.datos[i]){

				if (this.datosespecialestabla.includes(clave)){
					let valorcolumna = this.cambiardatosespecialestabla(clave,this.datos[i][clave]);
					textolineadatos += '<td class="tabla-td-'+clave+'">'+valorcolumna+'</td>';
				}
				else{
					textolineadatos += '<td class="tabla-td-'+clave+'">'+this.datos[i][clave]+'</td>';
				}
	
			}
	
			// crear los td para cada boton de llamada a funcion de formulario de accion (EDIT, DELETE O SHOWCURRENT)
	
			let lineaedit = this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
			let lineadelete = this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
			let lineashowcurrent = this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));
	
			textolineadatos += lineaedit+lineadelete+lineashowcurrent;
	
			textolineadatos += '</tr>';
	
		}
		
		let cuerpo = document.getElementById('muestradatostabla');
		cuerpo.innerHTML = textolineadatos;

		setLang();

	}

	*/

}