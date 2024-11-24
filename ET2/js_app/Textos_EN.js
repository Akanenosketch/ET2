let textos_EN = {

	// textos titulos
	"text_titulo_app": "IU ET2 Interface",
	"text_titulo_menu": "Menu Options",
	"text_titulo_pie": "Page Footer",
	"text_titulo_page_project": "Project Management Page",
	"text_titulo_page_analysis_preparation": "Analysis Management Page",
	"text_project": "Project",
	"text_analysis_prep": "Analysis Preparation",

	"DefTest_Title": "Verification table for structure testing of the test definitions",
	"DefPrueba_Title": "Verification table for structure testing of the test' tests",
	"DefPruebaEntidad_Title": "Table for test execution",

	"text_contenido_titulo_form_project_ADD": "Project Add Form",
	"text_contenido_titulo_form_project_EDIT": "Project Edit Form",
	"text_contenido_titulo_form_project_SEARCH": "Project Preparation Search Form",
	"text_contenido_titulo_form_project_SHOWCURRENT": "Project Preparation ShowCurrent Form",
	"text_contenido_titulo_form_project_DELETE": "Project Preparation Delete Form",
	"text_contenido_titulo_form_analysis_preparation_ADD": "Analysis Preparation Add Form",
	"text_contenido_titulo_form_analysis_preparation_EDIT": "Analysis Preparation Edit Form",
	"text_contenido_titulo_form_analysis_preparation_SEARCH": "Analysis Preparation Search Form",
	"text_contenido_titulo_form_analysis_preparation_SHOWCURRENT": "Analysis Preparation ShowCurrent Form",
	"text_contenido_titulo_form_analysis_preparation_DELETE": "Analysis Preparation Delete Form",

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
	// Analysis_preparation labels
	"label_id_analysis_preparation": "Analysis ID",
	"label_name_analysis_preparation": "Analysis name",
	"label_description_analysis_preparation": "Analysis Description",
	"label_bib_analysis_preparation": "Analysis BIB",
	"label_file_analysis_preparation": "Analysis file",
	"label_nuevo_file_analysis_preparation": "New analysis file",
	// Project labels
	"label_id_project": "Project ID",
	"label_name_project": "Project name",
	"label_start_date_project": "Project's start date",
	"label_end_date_project": "Project's end date",
	"label_responsable_project": "Project team leader",
	"label_organization_project": "Project organization",
	"label_description_project": "Project description",
	"label_file_project": "Project files",
	"label_code_project": "Project code",
	"label_acronym_project": "Project acronym",
	"label_id_sampling_methodology": "Sampling methodology ID",

	// Columnas de las tablas de definiciones y pruebas
	"entidad": "Entity",
	"campo": "Field",
	"prueba": "Test/Evaluation",
	"numDef": "Def.Number",
	"numTest": "Test Number",
	"info": "Information",
	"accion": "Action",
	"valor": "Value",
	"respuestaTest": "Test Response",
	"respuestaEsperada": "Expected Response",
	"resultado": "Result",
	"entidadFile": "File's Entity",
	"campoFile": "File's Field",
	"numDefFile": "File's Def.Number",
	"numTestFile": "File's Test Number",
	"infoFile": "File's Information",

	// Resultado de tests
	"CORRECTO": "CORRECT",
	"INCORRECTO": "INCORRECT",
	"ERROR": "ERROR",
	"DefCorrect": "CORRECT",

	'DefTest_OK': 'The structure of all Test definitions is correct',
	'DefTest_KO': 'The structure of all Test definitions is not correct, some are wrong',
	'DefPrueba_OK': 'The definition of all Test Cases is correct',
	'DefPrueba_KO': 'The definition of all Test Cases is not correct, some are wrong',
	'DefUnitPruebas_OK': 'All Unit Test results are correct',
	'DefUnitPruebas_KO': 'All Unit Test results are not correct, some are wrong',

	// errores de las validaciones de formulario
	// Project

	// id_project (SEARCH)
	"id_project_min_size_KO": "The Project ID introduced is too short, it must be 1 digit at minimum", //Este error posiblemente nunca salga, se ha introducido por si acaso
	"id_project_max_size_KO": "The Project ID introduced is too long , it must be 11 digits at maximum",
	"id_project_format_KO": "The Project ID introduced doesn't comply with the accepted format, only digits are allowed",

	// name_project (ADD/EDIT/SEARCH)
	"name_project_min_size_KO": "The Project name introduced is too short, it must be 15 characters at minimum",
	"name_project_max_size_KO": "The Project name introduced is too long, it must be 100 characters at maximum",
	"name_project_format_KO": "The Project name introduced doesn't comply with the accepted format, only alphabetic characters and spaces are allowed. Accents and the letter ñ are forbidden",

	// start_date_project (ADD/EDIT/SEARCH)
	"start_date_project_format_KO": "The Project's start date introduced doesnt comply with the accepted format, {dd/mm/yyyy} is the only format allowed",
	"start_date_project_valid_KO": "The Project's start date introduced is not a valid date, please check a calendar before adding a date",

	// end_date_project (ADD/EDIT/SEARCH)
	"end_date_project_format_KO": "The Project's end date introduced doesnt comply with the accepted format, {dd/mm/yyyy} is the only format allowed",
	"end_date_project_valid_KO": "The Project's end date introduced is not a valid date, please check a calendar before adding a date",
	"end_date_project_correct_KO": "The Project's end date introduced is lower than the Start Date, please take into account that negative time does not exist",

	// responsable_project (ADD/EDIT/SEARCH)
	"responsable_project_min_size_KO": "The Project team leader introduced is too short, it must be 6 characters at minimum",
	"responsable_project_max_size_KO": "The Project team leader introduced is too long, it must be 60 characaters at maximum",
	"responsable_project_format_KO": "The Project team leader introduced doesn't comply with the accepted format, only alphabetic characters (including the letter ñ), spaces and punctuation signs are allowed. Accents are forbidden",

	// organization_project (ADD/EDIT/SEARCH)
	"organization_project_min_size_KO": "The Project organization introduced is too short, it must be 6 characters at minimum",
	"organization_project_max_size_KO": "The Project oranization introduced is too long, it must be 100 characters at maximum",
	"organization_project_format_KO": "The Project organization introduced doesn't comply with the accepted format, only alphabetic characters (incuding the letter ñ), spaces and punctuation signs are allowed. Accents are forbidden",

	// description_project (ADD/EDIT/SEARCH)
	"description_project_min_size_KO": "The Project description introduced is too short, it must be 30 character at minimum",
	"description_project_max_size_KO": "The Project description introduced is too long, it must be 500 characters at maximum",
	"description_project_format_KO": "The Project description introduced doesn't comply with the accepted format, if you got this error I don't know what to tell you...",

	// file_project (ADD/EDIT)
	"nuevo_file_project_empty_KO": "You must attatch a file here, you can't leave this empty",
	"nuevo_file_project_max_size_file_KO": "The file attatched is too heave, it must be approximately 20MB at maximum",
	"nuevo_file_project_type_file_KO": "The format of the file attatched is not an accepted format, it must be one of the following formats: .pdf, .doc, .docx",
	"nuevo_file_project_format_name_file_KO": "The name of the file attatched doesn't comply with the accepted format, only alphabetic characters and dots are allowed. Spaces, accents, the letter ñ and punctuation signs are not allowed",
	"nuevo_file_project_min_size_KO": "The name of the file attatched is too short, it must be 7 characters at minimum",
	"nuevo_file_project_max_size_KO": "The name of the file attatched is too long, it must be 100 characters at maximum",

	// file_project (SEARCH)
	"file_project_format_KO": "The filename introduced doesn't comply with the accepted format, only alphabetic characters and dots are allowed. Spaces, accents, the letter ñ and punctuation signs are not allowed",
	"file_project_max_size_KO": "The filename introduced is too long, it must be 100 characters at maximum",

	// code_project (ADD/EDIT/SEARCH)
	"code_project_min_size_KO": "The Project code introduced is too short, it must be 6 characters at minimum",
	"code_project_max_size_KO": "The Project code introduced is too long, it must be 50 characters at maximum",
	"code_project_format_KO": "The Project code introduced doesn't comply with the accepted format, only alphabetic characters (including the letter ñ), spaces and punctuation signs are allowed. Accents are not allowed",

	// acronym_project (ADD/EDIT/SEARCH)
	"acronym_project_min_size_KO": "The Project acronym introduced is too short, it must be 6 characetrs at minimum",
	"acronym_project_max_size_KO": "The Project acronym introduced is too long, it must be 15 characters at maximum",
	"acronym_project_format_KO": "The Project acronym introduced doesn't comply with the accepted format, only alphabetic characters (including the letter ñ) and punctuation signs. Spaces and accents are not allowed",

	// id_sampling_methodology (ADD/EDIT/SEARCH)
	"id_sampling_methodology_min_size_KO": "The Sampling methodology ID is too short, it must be 1 digit at minimum (Sampling is not something you can do with magic)",
	"id_sampling_methodology_max_size_KO": "The Sampling methodology ID is too long, it must be 11 digits at maximum",
	"id_sampling_methodology_format_KO": "The Sampling methodology ID does not comply with the accepted format, only digits are allowed",

	// Analysis_preparation
	// id_analysis_preparation (SEARCH)
	"id_analysis_preparation_min_size_KO": "The Analysis ID introduced is too short, it must be 1 digit at minimum", //Este error posiblemente nunca salga, se ha introducido por si acaso
	"id_analysis_preparation_max_size_KO": "The Analysis ID introduced is too long, it must be 11 digits at maximum",
	"id_analysis_preparation_format_KO": "The Analysis ID introduced doesn't comply with the accpeted format, only digits are allowed",

	// name_analysis_preparation (ADD/EDIT/SEARCH)
	"name_analysis_preparation_min_size_KO": "The Analysis name is too short, it must be 8 characters at minimum",
	"name_analysis_preparation_max_size_KO": "The Analysis name is too long, it must be 100 characters maximum",
	"name_analysis_preparation_format_KO": "The Analysis name introduced doesn't comply with the accepted format, only alphabetic characters and spaces are allowed. Accents and the letter ñ are not allowed",

	// bib_analysis_preparation (ADD/EDIT/SEARCH)
	"bib_analysis_preparation_min_size_KO": "The Analysis BIB is too short, it must be 6 characters minimum",
	"bib_analysis_preparation_max_size_KO": "The Analysis BIB introduced is too long, it must be 200 characters at maximum",
	"bib_analysis_preparation_format_KO": "The Analysis BIB introduced doesn't comply with the accepted format, only alphabetical characters (the letter ñ included), accents, spaces and punctuation signs are allowed",

	// description_analysis_preparation (ADD/EDIT/SEARCH)
	"description_analysis_preparation_min_size_KO": "The Analysis description introduced is too short, it must be 80 characters at minimum",
	"description_analysis_preparation_max_size_KO": "The Analysis description introduced is too long, , it must be 5000 characters at maximum",
	"description_analysis_preparation_format_KO": "The Analysis description introduced doesn't comply with the accepted format, only alphabetic characters, spaces and punctuation signa are allowed. Accents and the letter ñ are not allowed",

	// file_analysis_preparation (ADD/EDIT)
	"nuevo_file_analysis_preparation_empty_KO": "You must attatch a file here, you can't leave this empty",
	"nuevo_file_analysis_preparation_max_size_file_KO": "The file attatched is too heave, it must be approximately 2 MB at maximum",
	"nuevo_file_analysis_preparation_type_file_KO": "The format of the file attatched is not an accepted format, it must be one of the following formats: .pdf, .doc, .docx",
	"nuevo_file_analysis_preparation_format_name_file_KO": "The name of the file attatched doesn't comply with the accepted format, only alphabetic characters and dots are allowed. Spaces, accents, the letter ñ and punctuation signs are not allowed",
	"nuevo_file_analysis_preparation_min_size_name_KO": "The name of the file attatched is too short, it must be 7 characters at minimum",
	"nuevo_file_analysis_preparation_max_size_name_KO": "The name of the file attatched is too long, it must be 100 characters at maximum",

	// file_analysis_preparation (SEARCH)
	"nuevo_file_analysis_preparation_format_KO": "The filename introduced doesn't comply with the accepted format, only alphabetic characters and dots are allowed. Spaces, accents, the letter ñ and punctuation signs are not allowed",
	"nuevo_file_analysis_preparation_max_size_KO": "The filename introduced is too long, it must be 100 characters at maximum",

	// errores del back
	//atributo forzado a nulo en EDIT o DELETE
	"id_project_es_nulo_KO": "<b>ERROR_ID_PROJECT_IS_NULL:</b> Please make sure the field <b>Project ID</b> is not empty",

	//atributo forzado a nulo en ADD o EDIT
	"name_project_es_nulo_KO": "<b>ERROR_NAME_PROJECT_IS_NULL:</b> Please make sure the field <b>Project name</b> is not empty",
	"start_date_project_es_nulo_KO": "<b>ERROR_START_DATE_PROJECT_IS_NULL:</b> Please make sure the field <b>Project start date</b> is not empty",
	"end_date_project_es_nulo_KO": "<b>ERROR_END_DATE_PROJECT_IS_NULL:</b> Please make sure the field <b>Project end date</b> is not empty",
	"responsable_project_es_nulo_KO": "<b>ERROR_RESPONSABLE_PROJECT_IS_NULL:</b> Please make sure the field <b>Project team leader</b> is not empty",
	"organization_project_es_nulo_KO": "<b>ERROR_ORGANIZATION_PROJECT_IS_NULL:</b> Please make sure the field <b>Project organization</b> is not empty",
	"description_project_es_nulo_KO": "<b>ERROR_DESCRIPTION_PROJECT_IS_NULL:</b> Please make sure the field <b>Project description</b> is not empty",
	"code_project_es_nulo_KO": "<b>ERROR_CODE_PROJECT_IS_NULL:</b> Please make sure the field <b>Project code</b> is not empty",
	"acronym_project_es_nulo_KO": "<b>ERROR_ACRONYM_PROJECT_IS_NULL:</b> Please make sure the field <b>Project acronym</b> is not empty",
	"id_sampling_methodology_es_nulo_KO": "<b>ERROR_ID_SAMPLING_METHODOLOGY_IS_NULL:</b> Please make sure the field <b>Sampling methodology ID</b> is not empty",

	//tipo incorrecto de fichero en ADD o EDIT
	"ERROR_UPLOAD_file_project_KO": "<b>ERROR:</b> Please make sure that the file format of the file/s attatched are one of the following: .pdf, .doc or .docx",

	/*
	A pesar del nombre, no es un error al forzar el atributo a nulo en ADD o EDIT, el back acepta ficheros nulos en ambas entidades.
	Este error ocurre al intentar editar una tupla de project que esté guardada sin file_project
	*/
	"file_project_es_nulo_KO": "<b>CRITICAL_ERROR:</b> Data cannot be modified",

	//analysis_preparation

	//atributo forzado a nulo en EDIT o DELETE
	"id_analysis_preparation_es_nulo_KO": "<b>ERROR_ID_ANALYSIS_PREPARARION_IS_NULL:</b> Please make sure the field <b>Analysis ID</b> is not empty",

	//atributo forzado a nulo en ADD o EDIT
	"name_analysis_preparation_es_nulo_KO": "<b>ERROR_NAME_ANALYSIS_PREPARATION_IS_NULL:</b> Please make sure the field <b>Analysis name<b/> is not empty",
	"description_analysis_preparation_es_nulo_KO": "<b>ERROR_DESCRIPTION_ANALYSIS_PREPARATION_IS_NULL:</b> Please make sure the field <b>Analysis description<b/> is not empty",
	"bib_analysis_preparation_es_nulo_KO": "<b>ERROR_BIB_ANALYSIS_PREPARATION_IS_NULL:</b> Please make sure the field <b>Analysis BIB<b/> is not empty",

	//tipo incorrecto de fichero en ADD o EDIT
	"ERROR_UPLOAD_file_analysis_preparation_KO": "<b>ERROR:</b> Please make sure that the file format of the file/s attatched are one of the following: .pdf, .doc or .docx",

	//no se si existe este error, existe el equivalente en project pero no parece que exista para analysis_preparation, no salta en los testeos
	"file_analysis_preparation_es_nulo_KO": "<b>CRITICAL_ERROR:</b> Data cannot be modified",

	/*OTROS*/

	//Fallo de SQL, posible forzarlo con datos validos: En description_project se acepta cualquier ascii, poner " dara error ya que el back intenta hacer INSERT/UPDATE [....] description_project=""", fallando
	//Este error también aparece si intentas poner emojis en description_project (los kaomojis los permite al usar caracteres =^-w-^=)
	"SQL_KO": "<b>SQL_ERROR:</b> Please make sure the data introduced is all correct. If this error keeps popping up, please try again later",

	//SEARCH no encuentra tuplas
	"RECORDSET_VACIO": "No data found"
}