let textos_ES = {

	// textos titulos
	"text_titulo_app": "Interfaz ET2 IU",
	"text_titulo_menu": "Opciones de Menú",
	"text_titulo_pie": "Pie de página",
	"text_project": "Proyecto",
	"text_analysis_prep": "Analisis",
	"res_estructura_tests": "Tabla verificacion estructura de test",
	"resultadodef": "formato correcto estructura definicion tests",
	"res_estructura_pruebas": "Tabla verificacion estructura de pruebas",
	"resultadoprueba": "formato correcto estructura pruebas",
	"res_pruebas": "Tabla ejecución de pruebas",
	"resultadotest": "Resultado ejecucion pruebas",
	"text_contenido_titulo_form_project_ADD": "Formulario para añadir un nuevo proyecto",
	"text_contenido_titulo_form_project_EDIT": "Formulario para editar un proyecto existente",
	"text_contenido_titulo_form_project_SEARCH": "Formulario para buscar un proyecto",
	"text_contenido_titulo_form_project_SHOWCURRENT": "Vista de proyecto",
	"text_contenido_titulo_form_project_DELETE": "Formulario para eliminar un proyecto",
	"text_contenido_titulo_form_analysis_preparation_ADD": "Formulario para añadir un nuevo análisis",
	"text_contenido_titulo_form_analysis_preparation_EDIT": "Formulario para editar un analisis existente",
	"text_contenido_titulo_form_analysis_preparation_SEARCH": "Formulario para buscar un análisis",
	"text_contenido_titulo_form_analysis_preparation_SHOWCURRENT": "Vista de análisis",
	"text_contenido_titulo_form_analysis_preparation_DELETE": "Formulario para eliminar un análisis",

	// atributos
	//Entidad analysis preparation
	"id_analysis_preparation": "ID de análisis",
	"name_analysis_preparation": "Nombre de análisis",
	"description_analysis_preparation": "Descripción de análisis",
	"bib_analysis_preparation": "BIB de análisis",
	"file_analysis_preparation": "Archivo de análisis",
	//Entidad project
	"id_project": "ID de proyecto",
	"name_project": "Nombre de proyecto",
	"start_date_project": "Fecha de inicio",
	"end_date_project": "Fecha de finalización",
	"responsable_project": "Responsable de proyecto",
	"organization_project": "Organización de proyecto",
	"description_project": "Descripción del proyecto",
	"file_project": "Archivo de proyecto",
	"code_project": "Código de proyecto",
	"acronym_project": "Acrónimo de proyecto",
	"id_sampling_methodology": "ID de metodología de muestreo",

	// labels
	"label_id_analysis_preparation": "ID de análisis",
	"label_name_analysis_preparation": "Nombre de análisis",
	"label_description_analysis_preparation": "Descripcion de análisis",
	"label_bib_analysis_preparation": "Bib de análisis",
	"label_file_analysis_preparation": "Archivos de análisis",
	"label_nuevo_file_analysis_preparation": "Nuevo archivo de análisis",
	"label_id_project":"ID de proyecto",
	"label_name_project":"Nombre de proyecto",
	"label_start_date_project":"Fecha de inicio",
	"label_end_date_project":"Fecha de finalización",
	"label_responsable_project":"Responsable de proyecto",
	"label_organization_project":"Orgnaización de proyecto",
	"label_description_project":"Descripción de proyecto",
	"label_file_project":"Archivo de proyecto",
	"label_code_project":"Código de proyecto",
	"label_acronym_project":"Acrónimo de proyecto",
	"label_id_sampling_methodology":"ID de metodología de muestreo",

	// errores del back
	//atributo forzado a nulo en EDIT o DELETE
    "id_project_es_nulo_KO"             : "Se ha producido un error grave, asegurese de que el campo Identificador no este vacio",
    
    //atributo forzado a nulo en ADD o EDIT
    "name_project_es_nulo_KO"           : "Se ha producido un error grave,asegurese de que el campo Nombre Proyecto no este vacio",
    "start_date_project_es_nulo_KO"     : "Se ha producido un error grave,asegurese de que el campo Fecha de Inicio no este vacio",
    "end_date_project_es_nulo_KO"       : "Se ha producido un error grave,asegurese de que el campo Fecha de Fin no este vacio",//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    "responsable_project_es_nulo_KO"    : "Se ha producido un error grave,asegurese de que el campo Responsable no este vacio",//NOTA, las fechas se envian con offsets, saltan errores no relacionados con la ET2 si se fuerza a enviar 1 solo caracter,pero se envia 
    "organization_project_es_nulo_KO"   : "Se ha producido un error grave,asegurese de que el campo Organizacion no este vacio",
    "description_project_es_nulo_KO"    : "Se ha producido un error grave,asegurese de que el campo Descripcion no este vacio",
    "code_project_es_nulo_KO"           : "Se ha producido un error grave,asegurese de que el campo Codigo Proyecto no este vacio",
    "acronym_project_es_nulo_KO"        : "Se ha producido un error grave,asegurese de que el campo Acronimo Proyecto no este vacio",
    "id_sampling_methodology_es_nulo_KO": "Se ha producido un error grave,asegurese de que el campo Id Metodologia de Sampleo no este vacio",

    //tipo incorrecto de fichero en ADD o EDIT
    "ERROR_UPLOAD_file_project_KO"      : "Se ha producido un error grave,asegurese de que el archivo subido sea del tipo correcto (.pdf,.doc o .docx)",
    
    /*
    A pesar del nombre, no es un error al forzar el atributo a nulo en ADD o EDIT, el back acepta ficheros nulos en ambas entidades.
    Este error ocurre al intentar editar una tupla de project que este guardada sin file_project
    */
    "file_project_es_nulo_KO"           : "Se ha producido un error critico, los datos no son editables", 
   
    //analysis_preparation
   
    //atributo forzado a nulo en EDIT o DELETE
    "id_analysis_preparation_es_nulo_KO"            : "Se ha producido un error grave,asegurese de que el campo Identificador no este vacio",

    //atributo forzado a nulo en ADD o EDIT
    "name_analysis_preparation_es_nulo_KO"          : "Se ha producido un error grave,asegurese de que el campo Nombre Analisis no este vacio",
    "description_analysis_preparation_es_nulo_KO"   : "Se ha producido un error grave,asegurese de que el campo Descripcion no este vacio",
    "bib_analysis_preparation_es_nulo_KO"           : "Se ha producido un error grave,asegurese de que el campo Bibliografia no este vacio",
    
    //tipo incorrecto de fichero en ADD o EDIT
    "ERROR_UPLOAD_file_analysis_preparation_KO"     : "Se ha producido un error grave,asegurese de que el archivo subido sea del tipo correcto (.pdf,.doc o .docx)",
    
    //no se si existe este error, existe el equivalente en project pero no parece que exista para analysis_preparation, no salta en los testeos
    "file_analysis_preparation_es_nulo_KO"          : "Se ha producido un error critico, los datos no son editables", 

    /*OTROS*/

    //Fallo de SQL, posible forzarlo con datos validos: En description_project se acepta cualquier ascii, poner " dara error ya que el back intenta hacer INSERT/UPDATE [....] description_project=""", fallando
    "SQL_KO"            : "Se ha producido un error, revise que los datos son correctos. Si el error persiste intentelo de nuevo mas tarde",
    
    //SEARCH no encuentra tuplas
    "RECORDSET_VACIO"   : "No se han encontrado datos"
}
