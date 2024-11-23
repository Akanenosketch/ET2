let def_tests_project = Array(

// id_project SEARCH
Array("project", "id_project", 1, "Cumple tamaño maximo 11", "SEARCH", "id_project_max_size_KO", 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.'),
Array("project", "id_project", 2, "Cumple tener solo digitos", "SEARCH", "id_project_format_KO", 'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
Array("project", "id_project", 3, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true, 'El Identificador es correcto'),

// name_project ADD
Array("project", "name_project", 4, "Cumple tamaño minimo 15", "ADD", 'name_project_min_size_KO', 'El Nombre Proyecto es demasiado corto, debe tener al menos longitud 15.'),
Array("project", "name_project", 5, "Cumple tamaño maximo 100", "ADD", 'name_project_max_size_KO', 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "name_project", 6, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "ADD", 'name_project_format_KO', 'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
Array("project", "name_project", 7, "Cumple todo (tener entre 15 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true, 'El Nombre Proyecto es correcto'),

// name_project EDIT
Array("project", "name_project", 8, "Cumple tamaño minimo 15", "EDIT", 'name_project_min_size_KO', 'El Nombre Proyecto es demasiado corto, debe tener al menos longitud 15.'),
Array("project", "name_project", 9, "Cumple tamaño maximo 100", "EDIT", 'name_project_max_size_KO', 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "name_project", 10, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "EDIT", 'name_project_format_KO', 'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
Array("project", "name_project", 11, "Cumple todo (tener entre 15 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true, 'El Nombre Proyecto es correcto'),

// name_project SEARCH
Array("project", "name_project", 12, "Cumple tamaño maximo 100", "SEARCH", 'name_project_max_size_KO', 'El Nombre Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "name_project", 13, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "SEARCH", 'name_project_format_KO', 'El Nombre Proyecto no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
Array("project", "name_project", 14, "Cumple todo (tener hasta 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true, 'El Nombre Proyecto es correcto'),

// start_date_project ADD
Array("project", "start_date_project", 15, "Cumple tener formato dd/mm/aaaa", "ADD", 'start_date_project_format_KO', 'El formato de la Fecha de Inicio es incorrecto, debe seguir un formato dd/mm/yyyy.'),
Array("project", "start_date_project", 16, "Cumple tener una fecha valida", "ADD", 'start_date_project_valid_KO', 'El valor de la Fecha de Inicio es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
Array("project", "start_date_project", 17, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "ADD", true, 'La Fecha de Inicio es correcta'),

// start_date_project EDIT
Array("project", "start_date_project", 18, "Cumple tener formato dd/mm/aaaa", "EDIT", 'start_date_project_format_KO', 'El formato de la Fecha de Inicio es incorrecto, debe seguir un formato dd/mm/yyyy.'),
Array("project", "start_date_project", 19, "Cumple tener una fecha valida", "EDIT", 'start_date_project_valid_KO', 'El valor de la Fecha de Inicio es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
Array("project", "start_date_project", 20, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "EDIT", true, 'La Fecha de Inicio es correcta'),

// start_date_project SEARCH
Array("project", "start_date_project", 21, "Cumple tener formato dd/mm/aaaa o una substring o ser vacio", "SEARCH", 'start_date_project_format_SEARCH_KO', 'El formato de la Fecha de Inicio es incorrecto, debe ser al menos una parte de una fecha dd/mm/yyyy.'),
Array("project", "start_date_project", 22, "Cumple todo (tener formato dd/mm/aaaa o una substring o ser vacio)", "SEARCH", true, 'La Fecha de Inicio es correcta'),

// end_date_project ADD
Array("project", "end_date_project", 23, "Cumple tener formato dd/mm/aaaa", "ADD", 'end_date_project_format_KO', 'El formato de la Fecha de Fin es incorrecto, debe seguir un formato dd/mm/yyyy.'),
Array("project", "end_date_project", 24, "Cumple tener una fecha valida", "ADD", 'end_date_project_valid_KO', 'El valor de la Fecha de Fin es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
Array("project", "end_date_project", 25, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "ADD", true, 'La Fecha de Fin es correcta'),

// end_date_project EDIT
Array("project", "end_date_project", 26, "Cumple tener formato dd/mm/aaaa", "EDIT", 'end_date_project_format_KO', 'El formato de la Fecha de Fin es incorrecto, debe seguir un formato dd/mm/yyyy.'),
Array("project", "end_date_project", 27, "Cumple tener una fecha valida", "EDIT", 'end_date_project_valid_KO', 'El valor de la Fecha de Fin es incorrecto, debe ser una fecha existente en el calendario gregoriano.'),
Array("project", "end_date_project", 28, "Cumple todo (tener una fecha valida en formato dd/mm/aaaa)", "EDIT", true, 'La Fecha de Fin es correcta'),

// end_date_project SEARCH 
Array("project", "end_date_project", 29, "Cumple tener formato dd/mm/aaaa o una substring o ser vacio", "SEARCH", 'end_date_project_format_SEARCH_KO', 'El formato de la Fecha de Fin es incorrecto, debe ser al menos una parte de una fecha dd/mm/yyyy.'),
Array("project", "end_date_project", 30, "Cumple todo (tener formato dd/mm/aaaa o una substring o ser vacio)", "SEARCH", true, 'La Fecha de Fin es correcta'),

// responsable_project ADD
Array("project", "responsable_project", 31, "Cumple tamaño minimo 6", "ADD", 'responsable_project_min_size_KO', 'El Responsable es demasiado corto, debe tener al menos longitud 6.'),
Array("project", "responsable_project", 32, "Cumple tamaño maximo 60", "ADD", 'responsable_project_max_size_KO', 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.'),
Array("project", "responsable_project", 33, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios", "ADD", 'responsable_project_format_KO', 'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
Array("project", "responsable_project", 34, "Cumple todo (tener entre 6 y 60 caracteres alfabéticos con acentos, ñ y espacios)", "ADD", true, 'El Responsable es correcto'),

// responsable_project EDIT
Array("project", "responsable_project", 35, "Cumple tamaño minimo 6", "EDIT", 'responsable_project_min_size_KO', 'El Responsable es demasiado corto, debe tener al menos longitud 6.'),
Array("project", "responsable_project", 36, "Cumple tamaño maximo 60", "EDIT", 'responsable_project_max_size_KO', 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.'),
Array("project", "responsable_project", 37, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios", "EDIT", 'responsable_project_format_KO', 'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
Array("project", "responsable_project", 38, "Cumple todo (tener entre 6 y 60 caracteres alfabéticos con acentos, ñ y espacios)", "EDIT", true, 'El Responsable es correcto'),

// responsable_project SEARCH
Array("project", "responsable_project", 39, "Cumple tamaño maximo 60", "SEARCH", 'responsable_project_max_size_KO', 'El Responsable supera el tamaño permitido, debe tener como mucho longitud 60.'),
Array("project", "responsable_project", 40, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios", "SEARCH", 'responsable_project_format_KO', 'El Responsable no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
Array("project", "responsable_project", 41, "Cumple todo (tener hasta 60 caracteres alfabéticos con acentos, ñ y espacios)", "SEARCH", true, 'El Responsable es correcto'),

// organization_project ADD
Array("project", "organization_project", 42, "Cumple tamaño minimo 6", "ADD", 'organization_project_min_size_KO', 'La Organizacion es demasiado corta, debe tener al menos longitud 6.'),
Array("project", "organization_project", 43, "Cumple tamaño maximo 100", "ADD", 'organization_project_max_size_KO', 'La Organizacion supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "organization_project", 44, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios", "ADD", 'organization_project_format_KO', 'La Organizacion no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
Array("project", "organization_project", 45, "Cumple todo (tener entre 6 y 100 caracteres alfabéticos con acentos, ñ y espacios)", "ADD", true, 'La Organizacion es correcta'),

// organization_project EDIT
Array("project", "organization_project", 46, "Cumple tamaño minimo 6", "EDIT", 'organization_project_min_size_KO', 'La Organizacion es demasiado corta, debe tener al menos longitud 6.'),
Array("project", "organization_project", 47, "Cumple tamaño maximo 100", "EDIT", 'organization_project_max_size_KO', 'La Organizacion supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "organization_project", 48, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios", "EDIT", 'organization_project_format_KO', 'La Organizacion no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
Array("project", "organization_project", 49, "Cumple todo (tener entre 6 y 100 caracteres alfabéticos con acentos, ñ y espacios)", "EDIT", true, 'La Organizacion es correcta'),

// organization_project SEARCH
Array("project", "organization_project", 50, "Cumple tamaño maximo 100", "SEARCH", 'organization_project_max_size_KO', 'La Organizacion supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "organization_project", 51, "Cumple tener solo caracteres alfabéticos con acentos, ñ y espacios", "SEARCH", 'organization_project_format_KO', 'La Organizacion no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ y espacios.'),
Array("project", "organization_project", 52, "Cumple todo (tener hasta 100 caracteres alfabéticos con acentos, ñ y espacios)", "SEARCH", true, 'La Organizacion es correcta'),

// description_project ADD
Array("project", "description_project", 53, "Cumple tamaño minimo 30", "ADD", 'description_project_min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 30.'),
Array("project", "description_project", 54, "Cumple tamaño maximo 500", "ADD", 'description_project_max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 500.'),
Array("project", "description_project", 55, "Cumple todo (tener entre 30 y 500 caracteres ascii)", "ADD", true, 'La Descripcion es correcta'),

// description_project EDIT
Array("project", "description_project", 56, "Cumple tamaño minimo 30", "EDIT", 'description_project_min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 30.'),
Array("project", "description_project", 57, "Cumple tamaño maximo 500", "EDIT", 'description_project_max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 500.'),
Array("project", "description_project", 58, "Cumple todo (tener entre 30 y 500 caracteres ascii)", "EDIT", true, 'La Descripcion es correcta'),

// description_project SEARCH
Array("project", "description_project", 59, "Cumple tamaño maximo 500", "SEARCH", 'description_project_max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 500.'),
Array("project", "description_project", 60, "Cumple todo (tener hasta 500 caracteres ascii)", "SEARCH", true, 'La Descripcion es correcta'),

// code_project ADD
Array("project", "code_project", 61, "Cumple tamaño minimo 6", "ADD", 'code_project_min_size_KO', 'El Codigo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
Array("project", "code_project", 62, "Cumple tamaño maximo 50", "ADD", 'code_project_max_size_KO', 'El Codigo Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.'),
Array("project", "code_project", 63, "Cumple tener solo caracteres alfabéticos con ñ, espacios y signos de puntuación", "ADD", 'code_project_format_KO', 'El Codigo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.'),
Array("project", "code_project", 64, "Cumple todo (tener entre 6 y 50 caracteres alfabéticos con ñ, espacios y signos de puntuación)", "ADD", true, 'El Codigo Proyecto es correcto'),

// code_project EDIT
Array("project", "code_project", 65, "Cumple tamaño minimo 6", "EDIT", 'code_project_min_size_KO', 'El Codigo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
Array("project", "code_project", 66, "Cumple tamaño maximo 50", "EDIT", 'code_project_max_size_KO', 'El Codigo Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.'),
Array("project", "code_project", 67, "Cumple tener solo caracteres alfabéticos con ñ, espacios y signos de puntuación", "EDIT", 'code_project_format_KO', 'El Codigo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.'),
Array("project", "code_project", 68, "Cumple todo (tener entre 6 y 50 caracteres alfabéticos con ñ, espacios y signos de puntuación)", "EDIT", true, 'El Codigo Proyecto es correcto'),

// code_project SEARCH
Array("project", "code_project", 69, "Cumple tamaño maximo 50", "SEARCH", 'code_project_max_size_KO', 'El Codigo Proyecto supera el tamaño permitido, debe tener como mucho longitud 50.'),
Array("project", "code_project", 70, "Cumple tener solo caracteres alfabéticos con ñ, espacios y signos de puntuación", "SEARCH", 'code_project_format_KO', 'El Codigo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ, espacios y signos de puntuación, sin acentos.'),
Array("project", "code_project", 71, "Cumple todo (tener hasta 50 caracteres alfabéticos con ñ, espacios y signos de puntuación)", "SEARCH", true, 'El Codigo Proyecto es correcto'),

// acronym_project ADD
Array("project", "acronym_project", 72, "Cumple tamaño minimo 6", "ADD", 'acronym_project_min_size_KO', 'El Acronimo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
Array("project", "acronym_project", 73, "Cumple tamaño maximo 15", "ADD", 'acronym_project_max_size_KO', 'El Acronimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.'),
Array("project", "acronym_project", 74, "Cumple tener solo caracteres alfabéticos con ñ y signos de puntuación", "ADD", 'acronym_project_format_KO', 'El Acronimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.'),
Array("project", "acronym_project", 75, "Cumple todo (tener entre 6 y 15 caracteres alfabéticos con ñ y signos de puntuación)", "ADD", true, 'El Acronimo Proyecto es correcto'),

// acronym_project EDIT
Array("project", "acronym_project", 76, "Cumple tamaño minimo 6", "EDIT", 'acronym_project_min_size_KO', 'El Acronimo Proyecto es demasiado corto, debe tener al menos longitud 6.'),
Array("project", "acronym_project", 77, "Cumple tamaño maximo 15", "EDIT", 'acronym_project_max_size_KO', 'El Acronimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.'),
Array("project", "acronym_project", 78, "Cumple tener solo caracteres alfabéticos con ñ y signos de puntuación", "EDIT", 'acronym_project_format_KO', 'El Acronimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.'),
Array("project", "acronym_project", 79, "Cumple todo (tener entre 6 y 15 caracteres alfabéticos con ñ y signos de puntuación)", "EDIT", true, 'El Acronimo Proyecto es correcto'),

// acronym_project SEARCH
Array("project", "acronym_project", 80, "Cumple tamaño maximo 15", "SEARCH", 'acronym_project_max_size_KO', 'El Acronimo Proyecto supera el tamaño permitido, debe tener como mucho longitud 15.'),
Array("project", "acronym_project", 81, "Cumple tener solo caracteres alfabéticos con ñ y signos de puntuación", "SEARCH", 'acronym_project_format_KO', 'El Acronimo Proyecto no cumple el formato correcto, debe contener solo caracteres alfabéticos con ñ y signos de puntuación, sin acentos ni espacios.'),
Array("project", "acronym_project", 82, "Cumple todo (tener hasta 15 caracteres alfabéticos con ñ y signos de puntuación)", "SEARCH", true, 'El Acronimo Proyecto es correcto'),

// id_sampling_project ADD
Array("project", "id_sampling_methodology", 83, "Cumple tamaño minimo 1", "ADD", 'id_sampling_methodology_min_size_KO', 'El Id Metodologia de Muestreo no puede estar vacio, debe tener al menos longitud 1.'),
Array("project", "id_sampling_methodology", 84, "Cumple tamaño maximo 11", "ADD", 'id_sampling_methodology_max_size_KO', 'El Id Metodologia de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.'),
Array("project", "id_sampling_methodology", 85, "Cumple tener solo digitos", "ADD", 'id_sampling_methodology_format_KO', 'El Id Metodologia de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
Array("project", "id_sampling_methodology", 86, "Cumple todo (tener entre 1 y 11 digitos)", "ADD", true, 'El Id Metodologia de Muestreo es correcto'),

// id_sampling_project EDIT
Array("project", "id_sampling_methodology", 87, "Cumple tamaño minimo 1", "EDIT", 'id_sampling_methodology_min_size_KO', 'El Id Metodologia de Muestreo no puede estar vacio, debe tener al menos longitud 1.'),
Array("project", "id_sampling_methodology", 88, "Cumple tamaño maximo 11", "EDIT", 'id_sampling_methodology_max_size_KO', 'El Id Metodologia de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.'),
Array("project", "id_sampling_methodology", 89, "Cumple tener solo digitos", "EDIT", 'id_sampling_methodology_format_KO', 'El Id Metodologia de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
Array("project", "id_sampling_methodology", 90, "Cumple todo (tener entre 1 y 11 digitos)", "EDIT", true, 'El Id Metodologia de Muestreo es correcto'),

// id_sampling_project SEARCH
Array("project", "id_sampling_methodology", 91, "Cumple tamaño maximo 11", "SEARCH", 'id_sampling_methodology_max_size_KO', 'El Id Metodologia de Muestreo supera el tamaño permitido, debe tener como mucho longitud 11.'),
Array("project", "id_sampling_methodology", 92, "Cumple tener solo digitos", "SEARCH", 'id_sampling_methodology_format_KO', 'El Id Metodologia de Muestreo no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
Array("project", "id_sampling_methodology", 93, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true, 'El Id Metodologia de Muestreo es correcto'),

// file_project SEARCH
Array("project", "file_project", 94, "Cumple tamaño de nombre maximo 100", "SEARCH", 'file_project_max_size_KO', 'El nombre del Archivo Proyecto supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "file_project", 95, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios", "SEARCH", 'file_project_format_KO', 'El nombre del Archivo Proyecto no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
Array("project", "file_project", 96, "Cumple todo (tener hasta 100 caracteres alfabeticos y puntos sin acentos,ñ o espacios)", "SEARCH", true, 'El Archivo Proyecto es correcto'),

//nuevo_file_project ADD
Array("project", "nuevo_file_project", 97, "Cumple no ser un fichero vacio", "ADD", 'nuevo_file_project_empty_KO', 'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo'),
Array("project", "nuevo_file_project", 98, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)", "ADD", 'nuevo_file_project_max_size_file_KO', 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
Array("project", "nuevo_file_project", 99, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)", "ADD", 'nuevo_file_project_type_file_KO', 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
Array("project", "nuevo_file_project", 100, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "ADD", 'nuevo_file_project_format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
Array("project", "nuevo_file_project", 101, "Cumple tamaño de nombre minimo 7", "ADD", 'nuevo_file_project_min_size_KO', 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
Array("project", "nuevo_file_project", 102, "Cumple tamaño de nombre maximo 100", "ADD", 'nuevo_file_project_max_size_KO', 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "nuevo_file_project", 103, "Cumple todo", "ADD", true, 'El Nuevo Archivo es correcto'),

// nuevo_file_project EDIT
Array("project", "nuevo_file_project", 104, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)", "EDIT", 'nuevo_file_project_max_size_file_KO', 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
Array("project", "nuevo_file_project", 105, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)", "EDIT", 'nuevo_file_project_type_file_KO', 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
Array("project", "nuevo_file_project", 106, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "EDIT", 'nuevo_file_project_format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
Array("project", "nuevo_file_project", 107, "Cumple tamaño de nombre minimo 7", "EDIT", 'nuevo_file_project_min_size_KO', 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
Array("project", "nuevo_file_project", 108, "Cumple tamaño de nombre maximo 100", "EDIT", 'nuevo_file_project_max_size_KO', 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
Array("project", "nuevo_file_project", 109, "Cumple todo", "EDIT", true, 'El Nuevo Archivo es correcto'),
Array("project", "nuevo_file_project", 110, "Cumple ser un fichero vacio", "EDIT", true, 'El Nuevo Archivo es correcto')

);

let pruebas_project = Array(
    Array(),
    Array()
    



);

let pruebas_file_project = Array(
    Array(),
    Array()



);