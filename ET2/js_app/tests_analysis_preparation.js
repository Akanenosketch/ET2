let def_tests_analysis_preparation = Array(
    
    // id_analysis_preparation SEARCH
    Array("analysis_preparation", "id_analysis_preparation", 1, "Cumple tamaño maximo 11", "SEARCH", "id_analysis_preparation_max_size_KO", 'El ID de análisis introducido es muy largo, debe de tener como máximo 11 dígitos'),
    Array("analysis_preparation", "id_analysis_preparation", 2, "Cumple tener solo digitos", "SEARCH", "id_analysis_preparation_format_KO", 'El ID de análisis introducido no cumple con el formato permitido, sólo se admiten dígitos'),
    Array("analysis_preparation", "id_analysis_preparation", 3, "Cumple todo (tener hasta 11 digitos)", "SEARCH", true, 'El ID de análisis es correcto'),

    // name_analysis_preparation ADD
    Array("analysis_preparation", "name_analysis_preparation", 4, "Cumple tamaño minimo 8", "ADD", 'name_analysis_preparation_min_size_KO', 'El nombre de análisis introducido es muy corto, debe de tener como mínimo 8 caracteres'),
    Array("analysis_preparation", "name_analysis_preparation", 5, "Cumple tamaño maximo 100", "ADD", 'name_analysis_preparation_max_size_KO', 'El nombre de análisis introducido es muy largo, debe de tener como máximo 100 caracteres'),
    Array("analysis_preparation", "name_analysis_preparation", 6, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "ADD", 'name_analysis_preparation_format_KO', 'El nombre de análisis introducido no cumple con el formato permitido, sólo se admiten caracteres alfabéticos y espacios (acentos y ñ no permitidos)'),
    Array("analysis_preparation", "name_analysis_preparation", 7, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true, 'El nombre de análisis es correcto'),

    // name_analysis_preparation EDIT
    Array("analysis_preparation", "name_analysis_preparation", 8, "Cumple tamaño minimo 8", "EDIT", 'name_analysis_preparation_min_size_KO', 'El nombre de análisis introducido es muy corto, debe de tener como mínimo 8 caracteres'),
    Array("analysis_preparation", "name_analysis_preparation", 9, "Cumple tamaño maximo 100", "EDIT", 'name_analysis_preparation_max_size_KO', 'El nombre de análisis introducido es muy largo, debe de tener como máximo 100 caracteres'),
    Array("analysis_preparation", "name_analysis_preparation", 10, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "EDIT", 'name_analysis_preparation_format_KO', 'El nombre de análisis introducido no cumple con el formato permitido, sólo se admiten caracteres alfabéticos y espacios (acentos y ñ no permitidos)'),
    Array("analysis_preparation", "name_analysis_preparation", 11, "Cumple todo (tener entre 8 y 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true, 'El nombre de análisis es correcto'),

    // name_analysis_preparation SEARCH
    Array("analysis_preparation", "name_analysis_preparation", 12, "Cumple tamaño maximo 100", "SEARCH", 'name_analysis_preparation_max_size_KO', 'El nombre de análisis introducido es muy largo, debe de tener como máximo 100 caracteres'),
    Array("analysis_preparation", "name_analysis_preparation", 13, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "SEARCH", 'name_analysis_preparation_format_KO', 'El nombre de análisis introducido no cumple con el formato permitido, sólo se admiten caracteres alfabéticos y espacios (acentos y ñ no permitidos)'),
    Array("analysis_preparation", "name_analysis_preparation", 14, "Cumple todo (tener hasta 100 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true, 'El nombre de análisis es correcto'),

    // description_analysis_preparation ADD
    Array("analysis_preparation", "description_analysis_preparation", 15, "Cumple tamaño minimo 80", "ADD", 'description_analysis_preparation_min_size_KO', 'La descripción de análisis introducida es muy corta, debe de contener como mínimo 80 caracteres'),
    Array("analysis_preparation", "description_analysis_preparation", 16, "Cumple tamaño maximo 5000", "ADD", 'description_analysis_preparation_max_size_KO', 'La descripción de análisis introducida es muy larga, debe de contener como máximo 5000 caracteres'),
    Array("analysis_preparation", "description_analysis_preparation", 17, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "ADD", 'description_analysis_preparation_format_KO', 'La descripción de análisis introducida no cumple con el formato permitido, se admiten caracteres alfabéticos, espacios y signos de puntuación (todo sin acentos y sin ñ)'),
    Array("analysis_preparation", "description_analysis_preparation", 18, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "ADD", true, 'La descripción de análisis es correcta'),

    // description_analysis_preparation EDIT
    Array("analysis_preparation", "description_analysis_preparation", 19, "Cumple tamaño minimo 80", "EDIT", 'description_analysis_preparation_min_size_KO', 'La descripción de análisis introducida es muy corta, debe de contener como mínimo 80 caracteres'),
    Array("analysis_preparation", "description_analysis_preparation", 20, "Cumple tamaño maximo 5000", "EDIT", 'description_analysis_preparation_max_size_KO', 'La descripción de análisis introducida es muy larga, debe de contener como máximo 5000 caracteres'),
    Array("analysis_preparation", "description_analysis_preparation", 21, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "EDIT", 'description_analysis_preparation_format_KO', 'La descripción de análisis introducida no cumple con el formato permitido, se admiten caracteres alfabéticos, espacios y signos de puntuación (todo sin acentos y sin ñ)'),
    Array("analysis_preparation", "description_analysis_preparation", 22, "Cumple todo (tener entre 80 y 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "EDIT", true, 'La descripción de análisis es correcta'),

    // description_analysis_preparation SEARCH
    Array("analysis_preparation", "description_analysis_preparation", 23, "Cumple tamaño maximo 5000", "SEARCH", 'description_analysis_preparation_max_size_KO', 'La descripción de análisis introducida es muy larga, debe de contener como máximo 5000 caracteres'),
    Array("analysis_preparation", "description_analysis_preparation", 24, "Cumple tener solo caracteres alfabeticos y espacios, sin acentos ni ñ", "SEARCH", 'description_analysis_preparation_format_KO', 'La descripción de análisis introducida no cumple con el formato permitido, se admiten caracteres alfabéticos, espacios y signos de puntuación (todo sin acentos y sin ñ)'),
    Array("analysis_preparation", "description_analysis_preparation", 25, "Cumple todo (tener hasta 5000 caracteres alfabeticos y espacios sin acentos ni ñ)", "SEARCH", true, 'La descripción de análisis es correcta'),

    // bib_analysis_preparation ADD
    Array("analysis_preparation", "bib_analysis_preparation", 26, "Cumple tamaño minimo 6", "ADD", 'bib_analysis_preparation_min_size_KO', 'El BIB de análisis introducido es muy corto debe de contener como mínimo 6 caracteres'),
    Array("analysis_preparation", "bib_analysis_preparation", 27, "Cumple tamaño maximo 200", "ADD", 'bib_analysis_preparation_max_size_KO', 'El BIB de análisis introducido es muy largo, debe de contener como máximo 200 caracteres'),
    Array("analysis_preparation", "bib_analysis_preparation", 28, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación", "ADD", 'bib_analysis_preparation_format_KO', 'El BIB de análisis introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ y acentos incluídos), espacios y signos de puntuación'),
    Array("analysis_preparation", "bib_analysis_preparation", 29, "Cumple todo (tener entre 6 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "ADD", true, 'El BIB de análisis es correcto'),

    // bib_analysis_preparation EDIT
    Array("analysis_preparation", "bib_analysis_preparation", 30, "Cumple tamaño minimo 6", "EDIT", 'bib_analysis_preparation_min_size_KO', 'El BIB de análisis introducido es muy corto debe de contener como mínimo 6 caracteres'),
    Array("analysis_preparation", "bib_analysis_preparation", 31, "Cumple tamaño maximo 200", "EDIT", 'bib_analysis_preparation_max_size_KO', 'El BIB de análisis introducido es muy largo, debe de contener como máximo 200 caracteres'),
    Array("analysis_preparation", "bib_analysis_preparation", 32, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación", "EDIT", 'bib_analysis_preparation_format_KO', 'El BIB de análisis introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ y acentos incluídos), espacios y signos de puntuación'),
    Array("analysis_preparation", "bib_analysis_preparation", 33, "Cumple todo (tener entre 6 y 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "EDIT", true, 'El BIB de análisis es correcto'),

    // bib_analysis_preparation SEARCH
    Array("analysis_preparation", "bib_analysis_preparation", 34, "Cumple tamaño maximo 200", "SEARCH", 'bib_analysis_preparation_max_size_KO', 'El BIB de análisis introducido es muy largo, debe de contener como máximo 200 caracteres'),
    Array("analysis_preparation", "bib_analysis_preparation", 35, "Cumple tener solo caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación", "SEARCH", 'bib_analysis_preparation_format_KO', 'El BIB de análisis introducido no cumple con el formato permitido, se admiten caracteres alfabéticos (ñ y acentos incluídos), espacios y signos de puntuación'),
    Array("analysis_preparation", "bib_analysis_preparation", 36, "Cumple todo (tener hasta 200 caracteres alfabéticos con acentos, ñ, espacios y signos de puntuación)", "SEARCH", true, 'El BIB de análisis es correcto'),

    // file_analysis_preparation SEARCH
    Array("analysis_preparation", "file_analysis_preparation", 37, "Cumple tamaño de nombre maximo 100", "SEARCH", 'file_analysis_preparation_max_size_KO', 'El nombre del archivo adjuntado es muy largo, debe de contener como máximo 100 caracteres'),
    Array("analysis_preparation", "file_analysis_preparation", 38, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios", "SEARCH", 'file_analysis_preparation_format_KO', 'El nombre del fichero adjuntado no cumple con el formato permitido, solo se admiten caracteres alfabéticos y un punto para el formato, no se admiten acentos, espacios, la ñ y los signos de puntuación'),
    Array("analysis_preparation", "file_analysis_preparation", 39, "Cumple todo (tener hasta 100 caracteres alfabeticos y puntos sin acentos,ñ o espacios)", "SEARCH", true, 'El archvio de análisis es correcto'),

    // nuevo_file_analysis_preparation ADD
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 40, "Cumple no ser un fichero vacio", "ADD", 'nuevo_file_analysis_preparation_empty_KO', 'Debes de adjuntar un fichero, no puedes dejar esto vacío'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)", "ADD", 'nuevo_file_analysis_preparation_max_size_file_KO', 'El archivo adjuntado es muy grande, debe de ser de máximo 20 MB (aprox)'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)", "ADD", 'nuevo_file_analysis_preparation_type_file_KO', 'El formato del archivo adjuntado no es un formato aceptado, debe de ser uno de los siguientes formatos .pdf, .doc, .docx'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "ADD", 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre del fichero adjuntado no cumple con el formato permitido, solo se admiten caracteres alfabéticos y un punto para el formato, no se admiten acentos, espacios, la ñ y los signos de puntuación'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 44, "Cumple tamaño de nombre minimo 7", "ADD", 'nuevo_file_analysis_preparation_min_size_KO', 'El nombre del archivo adjuntado es muy corto, debe de contener como mínmo 7 caracteres'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 45, "Cumple tamaño de nombre maximo 100", "ADD", 'nuevo_file_analysis_preparation_max_size_KO', 'El nombre del archivo adjuntado es muy largo, debe de contener como máximo 100 caracteres'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, "Cumple todo", "ADD", true, 'El Nuevo Archivo es correcto'),

    // nuevo_file_analysis_preparation EDIT
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 47, "Cumple tamaño de fichero menor a 2000000 Bytes (2 MB)", "EDIT", 'nuevo_file_analysis_preparation_max_size_file_KO', 'El archivo adjuntado es muy grande, debe de ser de máximo 20 MB (aprox)'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 48, "Cumple tipo correcto de fichero (.pdf, .doc, .docx)", "EDIT", 'nuevo_file_analysis_preparation_type_file_KO', 'El formato del archivo adjuntado no es un formato aceptado, debe de ser uno de los siguientes formatos .pdf, .doc, .docx'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, "Cumple tener solo caracteres alfabeticos y puntos sin acentos,ñ o espacios de nombre", "EDIT", 'nuevo_file_analysis_preparation_format_name_file_KO', 'El nombre del fichero adjuntado no cumple con el formato permitido, solo se admiten caracteres alfabéticos y un punto para el formato, no se admiten acentos, espacios, la ñ y los signos de puntuación'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, "Cumple tamaño de nombre minimo 7", "EDIT", 'nuevo_file_analysis_preparation_min_size_KO', 'El nombre del archivo adjuntado es muy corto, debe de contener como mínmo 7 caracteres'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 51, "Cumple tamaño de nombre maximo 100", "EDIT", 'nuevo_file_analysis_preparation_max_size_KO', 'El nombre del archivo adjuntado es muy largo, debe de contener como máximo 100 caracteres'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 52, "Cumple todo", "EDIT", true, 'El nuevo archivo de análisis es correcto'),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, "Cumple ser un fichero vacio", "EDIT", true, 'El nuevo archivo de análisis es correcto')
);

let pruebas_analysis_preparation = Array(

    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,Valor, Mensaje Respuesta)
    //Campo = `id_analysis_preparation` int(11) NOT NULL AUTOINCREMENT, dígitos min 1 max 11
    //Autoincrementable = no se va a comprobar en el add, se comprobara en el edit aunque no hace falta ya que el usuario no puede modificar salvo mediante consola el valor (que ya deberia ser correcto) y se comprobara en el search

    //SEARCH
    Array("analysis_preparation", "id_analysis_preparation", 1, 1, "SEARCH", "2".repeat(12), "id_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 1, 2, "SEARCH", "2".repeat(13), "id_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "id_analysis_preparation", 2, 3, "SEARCH", "texto", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 4, "SEARCH", "11.9", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 5, "SEARCH", "11/99", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 6, "SEARCH", "-95682", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 7, "SEARCH", "0", "id_analysis_preparation_format_KO"),
    Array("analysis_preparation", "id_analysis_preparation", 2, 8, "SEARCH", "01", "id_analysis_preparation_format_KO"),

    Array("analysis_preparation", "id_analysis_preparation", 3, 9, "SEARCH", "2".repeat(1), true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 10, "SEARCH", "549268", true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 11, "SEARCH", "451984", true),
    Array("analysis_preparation", "id_analysis_preparation", 3, 12, "SEARCH", "", true),


    //Campo = `name_analysis_preparation` varchar(100) NOT NULL UNIQUE,  alfabéticos y espacios sin acentos ni ñ, min 8 max 100

    //ADD
    Array("analysis_preparation", "name_analysis_preparation", 4, 13, "ADD", "a".repeat(7), "name_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 4, 14, "ADD", "a".repeat(6), "name_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 4, 15, "ADD", "ayayaya", "name_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 5, 16, "ADD", "a".repeat(101), "name_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 5, 17, "ADD", "a".repeat(102), "name_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 6, 18, "ADD", "Análisis", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 6, 19, "ADD", "Análisis de sangre de ñu", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 6, 20, "ADD", "Lanzamiento de cohete numero 55555", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 6, 21, "ADD", "After this. Lemme tell you. Im going to sleep.", "name_analysis_preparation_format_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 7, 22, "ADD", "awa".repeat(9), true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 23, "ADD", "awa".repeat(8), true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 24, "ADD", "a".repeat(99), true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 25, "ADD", "a".repeat(100), true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 26, "ADD", "Buenas noches me voy a mimir", true),
    Array("analysis_preparation", "name_analysis_preparation", 7, 27, "ADD", "Analisis Calificaciones Fantasma", true),


    //EDIT
    Array("analysis_preparation", "name_analysis_preparation", 8, 28, "EDIT", "a".repeat(7), "name_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 8, 29, "EDIT", "a".repeat(6), "name_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 8, 30, "EDIT", "", "name_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 9, 31, "EDIT", "a".repeat(101), "name_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 9, 32, "EDIT", "a".repeat(102), "name_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 10, 33, "EDIT", "Análisis", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 10, 34, "EDIT", "Análisis de sangre", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 10, 35, "EDIT", "Lanzamiento de cohete numero 55555", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 10, 36, "EDIT", "After this. Lemme tell you. Im going to sleep.", "name_analysis_preparation_format_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 11, 37, "EDIT", "ewe".repeat(9), true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 38, "EDIT", "ewe".repeat(8), true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 39, "EDIT", "a".repeat(99), true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 40, "EDIT", "a".repeat(100), true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 41, "EDIT", "Buenas noches me voy a mimir", true),
    Array("analysis_preparation", "name_analysis_preparation", 11, 42, "EDIT", "Analisis Calificaciones Fantasma", true),

    //SEARCH
    Array("analysis_preparation", "name_analysis_preparation", 12, 43, "SEARCH", "a".repeat(101), "name_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 12, 44, "SEARCH", "a".repeat(102), "name_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 13, 45, "SEARCH", "Análisis", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 13, 46, "SEARCH", "Análisis de sangre de ñu", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 13, 47, "SEARCH", "Yendo al infierno parte 4756812", "name_analysis_preparation_format_KO"),
    Array("analysis_preparation", "name_analysis_preparation", 13, 48, "SEARCH", "YIPEEEEEEEEEEEEEEE!!!!!!", "name_analysis_preparation_format_KO"),

    Array("analysis_preparation", "name_analysis_preparation", 14, 49, "SEARCH", "a".repeat(1), true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 50, "SEARCH", "a".repeat(8), true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 51, "SEARCH", "a".repeat(99), true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 52, "SEARCH", "a".repeat(100), true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 53, "SEARCH", "YIPEEEEEEEEEEE", true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 54, "SEARCH", "A mimir de una vez les gooooo", true),
    Array("analysis_preparation", "name_analysis_preparation", 14, 55, "SEARCH", "", true),


    //Campo = `description_analysis_preparation` varchar(5000) NOT NULL,  alfabéticos y espacios sin acentos ni ñ, min 80 max 5000

    //ADD
    Array("analysis_preparation", "description_analysis_preparation", 15, 56, "ADD", "a".repeat(79), "description_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 15, 57, "ADD", "a".repeat(76), "description_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 15, 58, "ADD", "", "description_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 16, 59, "ADD", "a".repeat(5001), "description_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 16, 60, "ADD", "a".repeat(5002), "description_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 17, 61, "ADD", "Análisis".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 17, 62, "ADD", "Analisis de sangre de ñu proveniente del infierno".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 17, 63, "ADD", "voladizo no identificado numero 74857964465786".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 17, 64, "ADD", "Analisis.".repeat(10), "description_analysis_preparation_format_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 18, 65, "ADD", "a".repeat(89), true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 66, "ADD", "a".repeat(80), true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 67, "ADD", "a".repeat(4999), true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 68, "ADD", "a".repeat(5000), true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 69, "ADD", "AA mimir yipeeeeeeeee".repeat(10), true),
    Array("analysis_preparation", "description_analysis_preparation", 18, 70, "ADD", "Analisis Calificaciones Fantasma".repeat(10), true),

    //EDIT
    Array("analysis_preparation", "description_analysis_preparation", 19, 71, "EDIT", "a".repeat(79), "description_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 19, 72, "EDIT", "a".repeat(76), "description_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 19, 73, "EDIT", "", "description_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 20, 74, "EDIT", "a".repeat(5001), "description_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 20, 75, "EDIT", "a".repeat(5002), "description_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 21, 76, "EDIT", "Análisis".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 21, 77, "EDIT", "Analisis de sangre de ñu proveniente del infierno".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 21, 78, "EDIT", "voladizo no identificado numero 74857964465786".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 21, 79, "EDIT", "Analisis.".repeat(10), "description_analysis_preparation_format_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 22, 80, "EDIT", "a".repeat(89), true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 81, "EDIT", "a".repeat(80), true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 82, "EDIT", "a".repeat(4999), true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 83, "EDIT", "a".repeat(5000), true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 84, "EDIT", "AA mimir yipeeeeeeeee".repeat(10), true),
    Array("analysis_preparation", "description_analysis_preparation", 22, 85, "EDIT", "Analisis Calificaciones Fantasma".repeat(10), true),

    //SEARCH
    Array("analysis_preparation", "description_analysis_preparation", 23, 86, "SEARCH", "a".repeat(5001), "description_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 23, 87, "SEARCH", "a".repeat(5002), "description_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 24, 88, "SEARCH", "Análisis".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 24, 89, "SEARCH", "Analisis de sangre de ñu proveniente del infierno".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 24, 90, "SEARCH", "voladizo no identificado numero 74857964465786".repeat(10), "description_analysis_preparation_format_KO"),
    Array("analysis_preparation", "description_analysis_preparation", 24, 91, "SEARCH", "Analisis.".repeat(10), "description_analysis_preparation_format_KO"),

    Array("analysis_preparation", "description_analysis_preparation", 25, 92, "SEARCH", "a".repeat(1), true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 93, "SEARCH", "a".repeat(80), true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 94, "SEARCH", "a".repeat(4999), true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 95, "SEARCH", "a".repeat(5000), true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 96, "SEARCH", "AA mimir yipeeeeeeeee".repeat(10), true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 97, "SEARCH", "Analisis Calificaciones Fantasma".repeat(10), true),
    Array("analysis_preparation", "description_analysis_preparation", 25, 98, "SEARCH", "", true),


    //Campo = `bib_analysis_preparation` varchar(200) NOT NULL,  alfabéticos con acentos, ñ, espacios y signos de puntuación, min 6 max 200

    //ADD
    Array("analysis_preparation", "bib_analysis_preparation", 26, 99, "ADD", "a".repeat(5), "bib_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 26, 100, "ADD", "a".repeat(4), "bib_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 26, 101, "ADD", "", "bib_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 27, 102, "ADD", "a".repeat(201), "bib_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 27, 103, "ADD", "a".repeat(202), "bib_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 28, 104, "ADD", "123456", "bib_analysis_preparation_format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 28, 105, "ADD", "Holi holi, solo quiero decir que quiero dormir & never wake up uwu", "bib_analysis_preparation_format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 28, 106, "ADD", "HiHi\tEsto deberia hacer un kawasaki", "bib_analysis_preparation_format_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 29, 107, "ADD", "No one will bother reading this from what i know", true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 108, "ADD", "a".repeat(6), true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 109, "ADD", "a".repeat(7), true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 110, "ADD", "w".repeat(200), true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 111, "ADD", "w".repeat(199), true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 112, "ADD", `|`.repeat(10), true),
    Array("analysis_preparation", "bib_analysis_preparation", 29, 113, "ADD", "After this project I will gladly go to sleep!", true),

    //EDIT
    Array("analysis_preparation", "bib_analysis_preparation", 30, 114, "EDIT", "w".repeat(5), "bib_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 30, 115, "EDIT", "a".repeat(4), "bib_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 30, 116, "EDIT", "", "bib_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 31, 117, "EDIT", "a".repeat(201), "bib_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 31, 118, "EDIT", "a".repeat(202), "bib_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 32, 119, "EDIT", "123456", "bib_analysis_preparation_format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 32, 120, "EDIT", "Holi holi, solo quiero decir que quiero dormir & never wake up uwu", "bib_analysis_preparation_format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 32, 121, "EDIT", "HiHi\tEsto deberia hacer un kawasaki", "bib_analysis_preparation_format_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 33, 122, "EDIT", "!?!?!?!??!", true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 123, "EDIT", "a".repeat(6), true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 124, "EDIT", "a".repeat(7), true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 125, "EDIT", "a".repeat(200), true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 126, "EDIT", "a".repeat(199), true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 127, "EDIT", `ñÑ !: {~¡«»¿áéíóúÁÉÍÓÚ`, true),
    Array("analysis_preparation", "bib_analysis_preparation", 33, 128, "EDIT", "After this project I will gladly go to sleep!", true),

    //SEARCH
    Array("analysis_preparation", "bib_analysis_preparation", 34, 129, "SEARCH", "a".repeat(201), "bib_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 34, 130, "SEARCH", "a".repeat(202), "bib_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 35, 131, "SEARCH", "123456", "bib_analysis_preparation_format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 35, 132, "SEARCH", "Holi holi, solo quiero decir que quiero dormir & never wake up uwu", "bib_analysis_preparation_format_KO"),
    Array("analysis_preparation", "bib_analysis_preparation", 35, 133, "SEARCH", "Saludos\tEsto deberia petar", "bib_analysis_preparation_format_KO"),

    Array("analysis_preparation", "bib_analysis_preparation", 36, 134, "SEARCH", ".;.,.,.,.,.;:;,.", true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 135, "SEARCH", "a".repeat(6), true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 136, "SEARCH", "a".repeat(1), true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 137, "SEARCH", "a".repeat(200), true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 138, "SEARCH", "a".repeat(199), true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 139, "SEARCH", `ñÑ !: {~¡«»¿áéíóúÁÉÍÓÚ`, true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 140, "SEARCH", "After this project I will gladly go to sleep!", true),
    Array("analysis_preparation", "bib_analysis_preparation", 36, 141, "SEARCH", "", true),


    //Campo = `file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el ADD, readonly en EDIT

    //SEARCH
    Array("analysis_preparation", "file_analysis_preparation", 37, 142, "SEARCH", "a".repeat(101), "file_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 37, 143, "SEARCH", "a".repeat(102), "file_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "file_analysis_preparation", 38, 144, "SEARCH", "archivo45", "file_analysis_preparation_format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 145, "SEARCH", "Estoy cansadísima jefe", "file_analysis_preparation_format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 146, "SEARCH", "Saludos\tEsto deberia hacer BOOM", "file_analysis_preparation_format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 147, "SEARCH", "archivoÑeñeñ", "file_analysis_preparation_format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 148, "SEARCH", "un archivo normal", "file_analysis_preparation_format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 149, "SEARCH", "ñeñeñeñeñeñe wiiiii", "file_analysis_preparation_format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 150, "SEARCH", "archivo_pdf", "file_analysis_preparation_format_KO"),
    Array("analysis_preparation", "file_analysis_preparation", 38, 151, "SEARCH", "archivo/archiva", "file_analysis_preparation_format_KO"),

    Array("analysis_preparation", "file_analysis_preparation", 39, 152, "SEARCH", "a".repeat(6), true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 153, "SEARCH", "a".repeat(1), true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 154, "SEARCH", "a".repeat(100), true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 155, "SEARCH", "a".repeat(99), true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 156, "SEARCH", `fichero.pdf`, true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 157, "SEARCH", "fichero.png", true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 158, "SEARCH", "", true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 159, "SEARCH", "fic.h.e.ro.png", true),
    Array("analysis_preparation", "file_analysis_preparation", 39, 160, "SEARCH", "ficheroName", true)
);

let pruebas_file_analysis_preparation = Array(

    //Formato test:Array(Entidad,Campo,Numero Test,Numero Prueba, Accion,parametro a probar,Valor, Mensaje Respuesta)
    //Campo = `nuevo_file_analysis_preparation` varchar(100) NOT NULL,  alfabéticos sin acentos ni ñ ni espacios min 7 max 100. Solo pdf, doc o docx y tamaño de fichero menor de 2000000 bytes.
    //No se lee en el SEARCH

    //ADD
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 40, 161, "ADD", "Existe", Array(), "nuevo_file_analysis_preparation_empty_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, 162, "ADD", "max_size_file", Array("filename", Array("application/pdf"), 3000000), "nuevo_file_analysis_preparation_max_size_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, 163, "ADD", "max_size_file", Array("filename", Array("application/pdf"), 2000000), "nuevo_file_analysis_preparation_max_size_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 41, 164, "ADD", "max_size_file", Array("filename", Array("application/pdf"), 2000001), "nuevo_file_analysis_preparation_max_size_file_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 165, "ADD", "type_file", Array("filename", Array("image/jpeg"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 166, "ADD", "type_file", Array("filename", Array("application/octet-stream"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 167, "ADD", "type_file", Array("filename", Array("text/plain"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 42, 168, "ADD", "type_file", Array("filename", Array("image/png"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 169, "ADD", "format_name_file", Array("archivo45", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 170, "ADD", "format_name_file", Array("Holi holi, solo quiero decir que quiero dormir & never wake up uwur", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 171, "ADD", "format_name_file", Array("Saludos\tEsto deberia petar", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 172, "ADD", "format_name_file", Array("archivoÑeñeñ", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 173, "ADD", "format_name_file", Array("archivoá", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 174, "ADD", "format_name_file", Array("archivo_pdf", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 175, "ADD", "format_name_file", Array("archivo a", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 43, 176, "ADD", "format_name_file", Array("archivo/archivar", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 44, 177, "ADD", "min_size", Array("a".repeat(6), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 44, 178, "ADD", "min_size", Array("a".repeat(4), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 45, 179, "ADD", "max_size", Array("a".repeat(101), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 45, 180, "ADD", "max_size", Array("a".repeat(10134), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 181, "ADD", "OK", Array("t".repeat(14), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 182, "ADD", "OK", Array("t".repeat(14), Array("application/pdf"), 1000000), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 183, "ADD", "OK", Array("t".repeat(14), Array("application/pdf"), 1999999), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 184, "ADD", "OK", Array("a".repeat(13), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 185, "ADD", "OK", Array("a".repeat(13), Array("application/msword"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 186, "ADD", "OK", Array("a".repeat(13), Array("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 187, "ADD", "OK", Array("fichero.pdf", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 188, "ADD", "OK", Array("fichero.png", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 189, "ADD", "OK", Array("fic.h.e.ro.png", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 190, "ADD", "OK", Array("ficheroName", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 191, "ADD", "OK", Array("a".repeat(7), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 192, "ADD", "OK", Array("a".repeat(8), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 193, "ADD", "OK", Array("a".repeat(100), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 46, 194, "ADD", "OK", Array("a".repeat(99), Array("application/pdf"), 1234), true),


    //EDIT
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 47, 195, "EDIT", "Empty", Array(), true),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 48, 197, "EDIT", "max_size_file", Array("filename", Array("application/pdf"), 2000000), "nuevo_file_analysis_preparation_max_size_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 48, 198, "EDIT", "max_size_file", Array("filename", Array("application/pdf"), 2000001), "nuevo_file_analysis_preparation_max_size_file_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 199, "EDIT", "type_file", Array("filename", Array("image/jpeg"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 200, "EDIT", "type_file", Array("filename", Array("application/octet-stream"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 201, "EDIT", "type_file", Array("filename", Array("text/plain"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 49, 202, "EDIT", "type_file", Array("filename", Array("image/png"), 1234), "nuevo_file_analysis_preparation_type_file_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 203, "EDIT", "format_name_file", Array("archivo45", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 204, "EDIT", "format_name_file", Array("Holi holi, solo quiero decir que quiero dormir & never wake up uwu", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 205, "EDIT", "format_name_file", Array("Saludos\tEsto deberia petar", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 206, "EDIT", "format_name_file", Array("archivoÑeñeñeñeñeñeñe", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 207, "EDIT", "format_name_file", Array("archivoá", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 208, "EDIT", "format_name_file", Array("archivo_pdf", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 209, "EDIT", "format_name_file", Array("archivo a", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 50, 210, "EDIT", "format_name_file", Array("archivo/archivar", Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_format_name_file_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 51, 211, "EDIT", "min_size", Array("a".repeat(6), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_min_size_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 51, 212, "EDIT", "min_size", Array("a".repeat(4), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_min_size_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 52, 213, "EDIT", "max_size", Array("a".repeat(101), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_max_size_KO"),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 52, 214, "EDIT", "max_size", Array("a".repeat(10134), Array("application/pdf"), 1234), "nuevo_file_analysis_preparation_max_size_KO"),

    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 215, "EDIT", "OK", Array("a".repeat(14), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 216, "EDIT", "OK", Array("b".repeat(14), Array("application/pdf"), 1000000), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 217, "EDIT", "OK", Array("c".repeat(14), Array("application/pdf"), 1999999), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 218, "EDIT", "OK", Array("d".repeat(13), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 219, "EDIT", "OK", Array("e".repeat(13), Array("application/msword"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 220, "EDIT", "OK", Array("f".repeat(13), Array("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 221, "EDIT", "OK", Array("fichero.pdf", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 222, "EDIT", "OK", Array("fichero.png", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 223, "EDIT", "OK", Array("fic.h.e.ro.png", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 224, "EDIT", "OK", Array("ficheroName", Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 225, "EDIT", "OK", Array("a".repeat(7), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 226, "EDIT", "OK", Array("b".repeat(8), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 227, "EDIT", "OK", Array("b".repeat(100), Array("application/pdf"), 1234), true),
    Array("analysis_preparation", "nuevo_file_analysis_preparation", 53, 228, "EDIT", "OK", Array("a".repeat(99), Array("application/pdf"), 1234), true)
);