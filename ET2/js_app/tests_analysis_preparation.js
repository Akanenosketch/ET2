let def_tests_analysis_preparation = Array(
    //SEARCH
    Array("analysis_preparation", "id_analysis_preparation", 1, "Cumple tamaño maximo 11", "SEARCH", "id_analysis_preparation_max_size_KO", 'El Identificador supera el tamaño permitido, debe tener como mucho longitud 11.'),
    Array("analysis_preparation", "id_analysis_preparation", 2, "Cumple tener solo digitos", "SEARCH", "id_analysis_preparation_format_KO", 'El Identificador no cumple el formato correcto, debe estar compuesto unicamente por digitos sin 0s a la izquierda.'),
    Array("analysis_preparation", "id_analysis_preparation", 3, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true, 'El Identificador es correcto'),


    //Campo = `name_analysis_preparation` varchar(100) NOT NULL UNIQUE,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD
    Array("analysis_preparation", "name_analysis_preparation", 4, "Cumple tamaño minimo 8", "ADD", 'name_analysis_preparation_min_size_KO', 'El Nombre Analisis es demasiado corto, debe tener al menos longitud 8.'),
    Array("analysis_preparation", "name_analysis_preparation", 5, "Cumple tamaño maximo 100", "ADD", 'name_analysis_preparation_max_size_KO', 'El Nombre Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "name_analysis_preparation", 6, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "ADD", 'name_analysis_preparation_format_KO', 'El Nombre Analisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "name_analysis_preparation", 7, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true, 'El Nombre Analisis es correcto'),


    //EDIT
    Array("analysis_preparation", "name_analysis_preparation", 8, "Cumple tamaño minimo 8", "EDIT", 'name_analysis_preparation_min_size_KO', 'El Nombre Analisis es demasiado corto, debe tener al menos longitud 8.'),
    Array("analysis_preparation", "name_analysis_preparation", 9, "Cumple tamaño maximo 100", "EDIT", 'name_analysis_preparation_max_size_KO', 'El Nombre Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "name_analysis_preparation", 10, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "EDIT", 'name_analysis_preparation_format_KO', 'El Nombre Analisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "name_analysis_preparation", 11, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true, 'El Nombre Analisis es correcto'),


    //SEARCH
    Array("analysis_preparation", "name_analysis_preparation", 12, "Cumple tamaño maximo 100", "SEARCH", 'name_analysis_preparation_max_size_KO', 'El Nombre Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "name_analysis_preparation", 13, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "SEARCH", 'name_analysis_preparation_format_KO', 'El Nombre Analisis no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "name_analysis_preparation", 14, "Cumple todo (tener hasta 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true, 'El Nombre Analisis es correcto'),


    //Campo = `description_analysis_preparation` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
    Array("analysis_preparation", "description_analysis_preparation", 15, "Cumple tamaño minimo 80", "ADD", 'description_analysis_preparation_min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 80.'),
    Array("analysis_preparation", "description_analysis_preparation", 16, "Cumple tamaño maximo 5000", "ADD", 'description_analysis_preparation_max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("analysis_preparation", "description_analysis_preparation", 17, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "ADD", 'description_analysis_preparation_format_KO', 'La Descripcion no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "description_analysis_preparation", 18, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true, 'La Descripcion es correcta'),


    //EDIT
    Array("analysis_preparation", "description_analysis_preparation", 19, "Cumple tamaño minimo 80", "EDIT", 'description_analysis_preparation_min_size_KO', 'La Descripcion es demasiado corta, debe tener al menos longitud 80.'),
    Array("analysis_preparation", "description_analysis_preparation", 20, "Cumple tamaño maximo 5000", "EDIT", 'description_analysis_preparation_max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("analysis_preparation", "description_analysis_preparation", 21, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "EDIT", 'description_analysis_preparation_format_KO', 'La Descripcion no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "description_analysis_preparation", 22, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true, 'La Descripcion es correcta'),


    //SEARCH
    Array("analysis_preparation", "description_analysis_preparation", 23, "Cumple tamaño maximo 5000", "SEARCH", 'description_analysis_preparation_max_size_KO', 'La Descripcion supera el tamaño permitido, debe tener como mucho longitud 5000.'),
    Array("analysis_preparation", "description_analysis_preparation", 24, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "SEARCH", 'description_analysis_preparation_format_KO', 'La Descripcion no cumple el formato correcto, debe contener solo letras y espacios sin acentos ni ñ.'),
    Array("analysis_preparation", "description_analysis_preparation", 25, "Cumple todo (tener hasta 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true, 'La Descripcion es correcta'),


    //Campo = `bib_analysis_preparation` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 200

    //ADD
    Array("analysis_preparation", "bib_analysis_preparation", 26, "Cumple tamaño minimo 6", "ADD", 'bib_analysis_preparation_min_size_KO', 'La Bibliografia es demasiado corta, debe tener al menos longitud 6.'),
    Array("analysis_preparation", "bib_analysis_preparation", 27, "Cumple tamaño maximo 200", "ADD", 'bib_analysis_preparation_max_size_KO', 'La Bibliografia supera el tamaño permitido, debe tener como mucho longitud 200.'),
    Array("analysis_preparation", "bib_analysis_preparation", 28, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación", "ADD", 'bib_analysis_preparation_format_KO', 'La Bibliografia no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.'),
    Array("analysis_preparation", "bib_analysis_preparation", 29, "Cumple todo (tener entre 6 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "ADD", true, 'La Bibliografia es correcta'),


    //EDIT
    Array("analysis_preparation", "bib_analysis_preparation", 30, "Cumple tamaño minimo 6", "EDIT", 'bib_analysis_preparation_min_size_KO', 'La Bibliografia es demasiado corta, debe tener al menos longitud 6.'),
    Array("analysis_preparation", "bib_analysis_preparation", 31, "Cumple tamaño maximo 200", "EDIT", 'bib_analysis_preparation_max_size_KO', 'La Bibliografia supera el tamaño permitido, debe tener como mucho longitud 200.'),
    Array("analysis_preparation", "bib_analysis_preparation", 32, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación", "EDIT", 'bib_analysis_preparation_format_KO', 'La Bibliografia no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.'),
    Array("analysis_preparation", "bib_analysis_preparation", 33, "Cumple todo (tener entre 6 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "EDIT", true, 'La Bibliografia es correcta'),


    //SEARCH
    Array("analysis_preparation", "bib_analysis_preparation", 34, "Cumple tamaño maximo 200", "SEARCH", 'bib_analysis_preparation_max_size_KO', 'La Bibliografia supera el tamaño permitido, debe tener como mucho longitud 200.'),
    Array("analysis_preparation", "bib_analysis_preparation", 35, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación", "SEARCH", 'bib_analysis_preparation_format_KO', 'La Bibliografia no cumple el formato correcto, debe contener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación.'),
    Array("analysis_preparation", "bib_analysis_preparation", 36, "Cumple todo (tener hasta 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "SEARCH", true, 'La Bibliografia es correcta'),


    //Campo = `file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT

    //SEARCH
    Array("analysis_preparation", "file_analysis_preparation", 37, "Cumple tamaño de nombre maximo 100", "SEARCH", 'file_analysis_preparation_max_size_KO', 'El nombre del Archivo Analisis supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "file_analysis_preparation", 38, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios", "SEARCH", 'file_analysis_preparation_format_KO', 'El nombre del Archivo Analisis no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("analysis_preparation", "file_analysis_preparation", 39, "Cumple todo (tener hasta 100 caracteres alfabeticos y puntos sin acentos,ñ o espacios)", "SEARCH", true, 'El Archivo Analisis es correcto'),


    //Campo = `nuevo_file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 40, "Cumple no ser un fichero vacio", "ADD", 'nuevo_file_analysis_preparation_empty_KO', 'El Nuevo Archivo no puede estar vacio, debe enviarse un archivo'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)", "ADD", 'nuevo_file_analysis_preparation_max_size_file_KO', 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)", "ADD", 'nuevo_file_analysis_preparation_type_file_KO', 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "ADD", 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 44, "Cumple tamaño de nombre minimo 7", "ADD", 'nuevo_file_analysis_preparation_min_size_KO', 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 45, "Cumple tamaño de nombre maximo 100", "ADD", 'nuevo_file_analysis_preparation_max_size_KO', 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, "Cumple todo", "ADD", true, 'El Nuevo Archivo es correcto'),


    //EDIT
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 47, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)", "EDIT", 'nuevo_file_analysis_preparation_max_size_file_KO', 'El Nuevo Archivo supera el tamaño permitido, debe pesar menos de 2 MB.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 48, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)", "EDIT", 'nuevo_file_analysis_preparation_type_file_KO', 'El Nuevo Archivo no es del tipo correcto, debe ser .pdf,.doc o .docx'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "EDIT", 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre del Nuevo Archivo no cumple el formato correcto, debe contener solo letras y puntos sin acentos ni ñ ni espacios ni signos de puntuacion.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, "Cumple tamaño de nombre minimo 7", "EDIT", 'nuevo_file_analysis_preparation_min_size_KO', 'El nombre del Nuevo Archivo es demasiado corto, debe tener al menos longitud 7.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 51, "Cumple tamaño de nombre maximo 100", "EDIT", 'nuevo_file_analysis_preparation_max_size_KO', 'El nombre del Nuevo Archivo supera el tamaño permitido, debe tener como mucho longitud 100.'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 52, "Cumple todo", "EDIT", true, 'El Nuevo Archivo es correcto'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, "Cumple ser un fichero vacio", "EDIT", true, 'El Nuevo Archivo es correcto')
);

let pruebas_analysis_preparation = Array(

    // id_analysis_preparation SEARCH
    Array("analysis_preparation", "id_analysis_preparation", 1, 1, "SEARCH", "2".repeat(12), "id_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 1, 2, "SEARCH", "2".repeat(13), "id_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 1, 3, "SEARCH", "15".repeat(6), "id_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 3, "SEARCH", "UNTEXTO", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 4, "SEARCH", "11.9", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 5, "SEARCH", "11/9", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 6, "SEARCH", "-1", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 7, "SEARCH", "0", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 8, "SEARCH", "01", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 3, 9, "SEARCH", "2".repeat(1), true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 10, "SEARCH", "2".repeat(11), true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 11, "SEARCH", "4514", true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 12, "SEARCH", "", true),

    // name_analysis_preparation ADD
    

);

let pruebas_file_analysis_preparation = Array(
    Array(),
    Array()



);