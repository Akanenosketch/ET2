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
	// analysis_preparation labels
	"label_id_analysis_preparation": "ID de análisis",
	"label_name_analysis_preparation": "Nombre de análisis",
	"label_description_analysis_preparation": "Descripcion de análisis",
	"label_bib_analysis_preparation": "Bib de análisis",
	"label_file_analysis_preparation": "Archivos de análisis",
	"label_nuevo_file_analysis_preparation": "Nuevo archivo de análisis",
	// project labels
	"label_id_project": "ID de proyecto",
	"label_name_project": "Nombre de proyecto",
	"label_start_date_project": "Fecha de inicio",
	"label_end_date_project": "Fecha de finalización",
	"label_responsable_project": "Responsable de proyecto",
	"label_organization_project": "Orgnaización de proyecto",
	"label_description_project": "Descripción de proyecto",
	"label_file_project": "Archivo de proyecto",
	"label_code_project": "Código de proyecto",
	"label_acronym_project": "Acrónimo de proyecto",
	"label_id_sampling_methodology": "ID de metodología de muestreo",

	// Columnas de las tablas de definiciones y pruebas
	"entidad": "Entidad",
	"campo": "Campo",
	"prueba":"Prueba",
	"numDef": "Num.Def",
	"numTest": "Num.Prob",
	"info": "Información",
	"entidadFile": "Entidad archivo",
	"campoFile": "Campo archivo",
	"numDefFile": "Num.Def archivo",
	"numTestFile": "Num.Prob archivo",
	"infoFile": "Información archivo",


	// errores de las validaciones de formulario
	// Project

	// id_project (SEARCH)
	"id_project_min_size_KO": "El ID de proyecto introducido es muy corto, debe de tener como mínimo 1 dígito", //Este error posiblemente nunca salga, se ha introducido por si acaso
	"id_project_max_size_KO": "El ID de proyecto introducido es muy largo, debe de tener como máximo 11 dígitos",
	"id_project_format_KO": "El ID de proyecto introducido no cumple con el formato permitido, sólo se admiten dígitos",
	
	// name_project (ADD/EDIT/SEARCH)
	"name_project_min_size_KO": "El nombre de proyecto introducido es muy corto, debe de tener como mínimo 15 caracteres",
	"name_project_max_size_KO": "El nombre de proyecto introducido es muy largo, debe de tener como máximo 100 caracteres",
	"name_project_format_KO": "El nombre de proyecto introducido no cumple con el formato permitido, sólo se admiten caracteres alfabéticos y espacios (acentos y ñ no permitidos)",
	
	// start_date_project (ADD/EDIT/SEARCH)
	"start_date_project_format_KO": "El formato de la fecha de inicio no es correcto, el formato debe de ser {dd/mm/aaaa}",
	"start_date_project_valid_KO": "La fecha de inicio introducida no es válida, por favor introduce una fecha correcta",
	
	// end_date_project (ADD/EDIT/SEARCH)
	"end_date_project_format_KO": "El formato de la fecha de finalización no es correcto, el formato debe de ser {dd/mm/aaaa}",
	"end_date_project_valid_KO": "La fecha de finalización introducida no es válida, por favor introduce una fecha correcta",
	"end_date_project_correct_KO": "La fecha de finalización introducida no es superior a la de inicio, por favor entiende que no existe el tiempo negativo",
	
	// responsable_project (ADD/EDIT/SEARCH)
	"responsable_project_min_size_KO": "El responsable de proyecto introducido es muy corto debe de contener como mínimo 6 caracteres",
	"responsable_project_max_size_KO": "El responsable de proyecto introducido es muy largo, debe de contener como máximo 60 caracteres",
	"responsable_project_format_KO": "El responsable de proyecto introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ incluída), espacios y signos de puntuación (todo sin acentos)",
	
	// organization_project (ADD/EDIT/SEARCH)
	"organization_project_min_size_KO": "La organización de proyecto introducido es muy corto, debe de contener como mínimo 6 caracteres",
	"organization_project_max_size_KO": "La organización de proyecto introducido es muy largo, debe de contener como máximo 100 caracteres",
	"organization_project_format_KO": "La organización de proyecto introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ incluida), espacios y signos de puntuación (todo sin acentos)",
	
	// description_project (ADD/EDIT/SEARCH)
	"description_project_min_size_KO": "La descripción de proyecto introducido es muy corto, debe de contener como mínimo 30 carcateres",
	"description_project_max_size_KO": "La descripción de proyecto introducido es muy largo, debe de contener como máximo 500 caracteres",
	"description_project_format_KO": "La descripción de proyecto no cumple con el formato permitido, si ves este error no sé que decirte...",
	
	// file_project (ADD/EDIT)
	"nuevo_file_project_empty_KO": "Debes de adjuntar un fichero, no puedes dejar esto vacío, alcornoque",
	"nuevo_file_project_max_size_file_KO": "El archivo adjuntado es muy grande, debe de ser de máximo 20 MB (aprox)",
	"nuevo_file_project_type_file_KO": "El formato del archivo adjuntado no es un formato aceptado, debe de ser uno de los siguientes formatos .pdf, .doc, .docx",
	"nuevo_file_project_format_name_file_KO": "El nombre del fichero adjuntado no cumple con el formato permitido, solo se admiten caracteres alfabéticos y un punto para el formato, no se admiten acentos, espacios, la ñ y los signos de puntuación",
	"nuevo_file_project_min_size_name_KO": "El nombre del archivo adjuntado es muy corto, debe de contener como mínmo 7 caracteres",
	"nuevo_file_project_max_size_name_KO": "El nombre del archivo adjuntado es muy largo, debe de contener como máximo 100 caracteres",
	
	// file_project (SEARCH)
	"file_project_format_KO": "El nombre del fichero adjuntado no cumple con el formato permitido, solo se admiten caracteres alfabéticos y un punto para el formato, no se admiten acentos, espacios, la ñ y los signos de puntuación",
	"file_project_max_size_KO": "El nombre del archivo adjuntado es muy largo, debe de contener como máximo 100 caracteres",	

	// code_project (ADD/EDIT/SEARCH)
	"code_project_min_size_KO": "El código de proyecto introducido es muy corto, debe de contener como mínimo 6 caracteres",
	"code_project_max_size_KO": "El código de proyecto introducido es muy largo, debe de contener como máximo 50 caracteres",
	"code_project_format_KO": "El código de proyecto introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ incluida), espacios y signos de puntuación (todo sin acentos)",
	
	// acronym_project (ADD/EDIT/SEARCH)
	"acronym_project_min_size_KO": "El acrónimo de proyecto introducido es muy corto, debe de contener como mínimo 6 caracteres",
	"acronym_project_max_size_KO": "El acrónimo de proyecto introducido es muy largo, debe de contener como máximo 15 carateres",
	"acronym_project_format_KO": "El acrónimo de proyecto introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ incluída) y signos de puntuación (sin aceptos y sin espacios)",
	
	// id_sampling_methodology (ADD/EDIT/SEARCH)
	"id_sampling_methodology_min_size_KO": "El ID de metodología de muestreo introducido es muy corto, debe de contener como mínimo 1 dígito (no puedes establecerlo a nulo, el muestreo no se hace con magia)",
	"id_sampling_methodology_max_size_KO": "El ID de metodología de muestreo introducido es muy largo, debe de contener máximo 11 dígitos",
	"id_sampling_methodology_format_KO": "El ID de metodología de muestro introducido no cumple con el formato permitido, solo se admiten dígitos",

	// Analysis_preparation
	// id_analysis_preparation (SEARCH)
	"id_analysis_preparation_min_size_KO": "El ID de análisis introducido es muy corto, debe de tener como mínimo 1 dígito", //Este error posiblemente nunca salga, se ha introducido por si acaso
	"id_analysis_preparation_max_size_KO": "El ID de análisis introducido es muy largo, debe de tener como máximo 11 dígitos",
	"id_analysis_preparation_format_KO": "El ID de análisis introducido no cumple con el formato permitido, sólo se admiten dígitos",
	
	// name_analysis_preparation (ADD/EDIT/SEARCH)
	"name_analysis_preparation_min_size_KO": "El nombre de análisis introducido es muy corto, debe de tener como mínimo 8 caracteres",
	"name_analysis_preparation_max_size_KO": "El nombre de análisis introducido es muy largo, debe de tener como máximo 100 caracteres",
	"name_analysis_preparation_format_KO": "El nombre de análisis introducido no cumple con el formato permitido, sólo se admiten caracteres alfabéticos y espacios (acentos y ñ no permitidos)",
	
	// bib_analysis_preparation (ADD/EDIT/SEARCH)
	"bib_analysis_preparation_min_size_KO": "El BIB de análisis introducido es muy corto debe de contener como mínimo 6 caracteres",
	"bib_analysis_preparation_max_size_KO": "El BIB de análisis introducido es muy largo, debe de contener como máximo 200 caracteres",
	"bib_analysis_preparation_format_KO": "El BIB de análisis introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ y acentos incluídos), espacios y signos de puntuación",
	
	// description_analysis_preparation (ADD/EDIT/SEARCH)
	"description_analysis_preparation_min_size_KO": "La descripción de análisis introducido es muy corto, debe de contener como mínimo 80 caracteres",
	"description_analysis_preparation_max_size_KO": "La descripción de análisis introducido es muy largo, debe de contener como máximo 5000 caracteres",
	"description_analysis_preparation_format_KO": "La descripción de análisis introducido no cumple con el formato permitido, se admiten caracteres alfabéticos, espacios y signos de puntuación (todo sin acentos y sin ñ)",
	
	// file_analysis_preparation (ADD/EDIT)
	"nuevo_file_analysis_preparation_empty_KO": "Debes de adjuntar un fichero, no puedes dejar esto vacío, alcornoque",
	"nuevo_file_analysis_preparation_max_size_file_KO": "El archivo adjuntado es muy grande, debe de ser de máximo 20 MB (aprox)",
	"nuevo_file_analysis_preparation_type_file_KO": "El formato del archivo adjuntado no es un formato aceptado, debe de ser uno de los siguientes formatos .pdf, .doc, .docx",
	"nuevo_file_analysis_preparation_format_name_file_KO": "El nombre del fichero adjuntado no cumple con el formato permitido, solo se admiten caracteres alfabéticos y un punto para el formato, no se admiten acentos, espacios, la ñ y los signos de puntuación",
	"nuevo_file_analysis_preparation_min_size_name_KO": "El nombre del archivo adjuntado es muy corto, debe de contener como mínmo 7 caracteres",
	"nuevo_file_analysis_preparation_max_size_name_KO": "El nombre del archivo adjuntado es muy largo, debe de contener como máximo 100 caracteres",
	
	// file_analysis_preparation (SEARCH)
	"nuevo_file_analysis_preparation_format_KO": "El nombre del fichero adjuntado no cumple con el formato permitido, solo se admiten caracteres alfabéticos y un punto para el formato, no se admiten acentos, espacios, la ñ y los signos de puntuación",
	"nuevo_file_analysis_preparation_max_size_KO": "El nombre del archivo adjuntado es muy largo, debe de contener como máximo 100 caracteres",

	// errores del back
	//atributo forzado a nulo en EDIT o DELETE
	"id_project_es_nulo_KO": "<b>ERROR_ID_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>ID de proyecto</b> no esté vacio",

	//atributo forzado a nulo en ADD o EDIT
	"name_project_es_nulo_KO": "<b>ERROR_NAME_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Nombre de proyecto</b> no esté vacio",
	"start_date_project_es_nulo_KO": "<b>ERROR_START_DATE_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Fecha de inicio</b> no esté vacio",
	"end_date_project_es_nulo_KO": "<b>ERROR_END_DATE_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Fecha de finalización</b> no esté vacio",
	"responsable_project_es_nulo_KO": "<b>ERROR_RESPONSABLE_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Responsable de proyecto</b> no esté vacio",
	"organization_project_es_nulo_KO": "<b>ERROR_ORGANIZATION_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Organización de proyecto</b> no esté vacio",
	"description_project_es_nulo_KO": "<b>ERROR_DESCRIPTION_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Descripción de proyecto</b> no esté vacio",
	"code_project_es_nulo_KO": "<b>ERROR_CODE_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Código de proyecto</b> no esté vacio",
	"acronym_project_es_nulo_KO": "<b>ERROR_ACRONYM_PROJECT_ES_NULO:</b> Asegurese de que el campo <b>Acrónimo de proyecto</b> no esté vacio",
	"id_sampling_methodology_es_nulo_KO": "<b>ERROR_ID_SAMPLING_METHODOLOGY_ES_NULO:</b> Asegurese de que el campo <b>ID de metodología de muestreo</b> no esté vacio",

	//tipo incorrecto de fichero en ADD o EDIT
	"ERROR_UPLOAD_file_project_KO": "<b>ERROR:</b> Revise que el formato de los archivos adjuntados es correcto (.pdf, .doc. docx)",

	/*
	A pesar del nombre, no es un error al forzar el atributo a nulo en ADD o EDIT, el back acepta ficheros nulos en ambas entidades.
	Este error ocurre al intentar editar una tupla de project que esté guardada sin file_project
	*/
	"file_project_es_nulo_KO": "<b>ERROR_CRÍTICO:</b> Los datos no son editables",

	//analysis_preparation

	//atributo forzado a nulo en EDIT o DELETE
	"id_analysis_preparation_es_nulo_KO": "<b>ERROR_ID_ANALYSIS_PREPARARION_ES_NULO:</b> Asegurese de que el campo <b>ID de análisis</b> no esté vacio",

	//atributo forzado a nulo en ADD o EDIT
	"name_analysis_preparation_es_nulo_KO": "<b>ERROR_NAME_ANALYSIS_PREPARATION_ES_NULO:</b> Asegurese de que el campo <b>Nombre de análisis<b/> no esté vacio",
	"description_analysis_preparation_es_nulo_KO": "<b>ERROR_DESCRIPTION_ANALYSIS_PREPARATION_ES_NULO:</b> Asegurese de que el campo <b>Descripción de análisis<b/> no esté vacio",
	"bib_analysis_preparation_es_nulo_KO": "<b>ERROR_BIB_ANALYSIS_PREPARATION_ES_NULO:</b> Asegurese de que el campo <b>BIB de análisis<b/> no esté vacio",

	//tipo incorrecto de fichero en ADD o EDIT
	"ERROR_UPLOAD_file_analysis_preparation_KO": "<b>ERROR:</b> Revise que el formato de los archivos adjuntados es correcto (.pdf, .doc o .docx)",

	//no se si existe este error, existe el equivalente en project pero no parece que exista para analysis_preparation, no salta en los testeos
	"file_analysis_preparation_es_nulo_KO": "<b>ERROR_CRÍTICO:</b> Los datos no son editables",

	/*OTROS*/

	//Fallo de SQL, posible forzarlo con datos validos: En description_project se acepta cualquier ascii, poner " dara error ya que el back intenta hacer INSERT/UPDATE [....] description_project=""", fallando
	//Este error también aparece si intentas poner emojis en description_project (los kaomojis los permite al usar caracteres =^-w-^=)
	"SQL_KO": "<b>ERROR_SQL:</b> Revise que los datos introducidos son correctos. Si el error persiste intentelo de nuevo mas tarde.",

	//SEARCH no encuentra tuplas
	"RECORDSET_VACIO": "No se han encontrado datos"
}
