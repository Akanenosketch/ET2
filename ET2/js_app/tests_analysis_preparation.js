let def_tests_analysis_preparation = Array(
    //  id_analysis_preparation
    Array('analysis_preparation', 'id_analysis_preparation', 1, 'cumple tamaño mínimo', false, 'id_analysis_preparation_min_size_NG', 'El campo id_analysis_preparation debe de contener mínimo 1 dígito'),
    Array('analysis_preparation', 'id_analysis_preparation', 2, 'cumple tamaño máximo', false, 'id_analysis_preparation_max_size_NG', 'El campo id_analysis_preparation debe de contener máximo 11 dígitos'),
    Array('analysis_preparation', 'id_analysis_preparation', 3, 'contiene solo digitos', false, 'id_analysis_preparation_formato_NG', 'El campo id_analysis_preparation sólo puede contener números'),
    Array('analysis_preparation', 'id_analysis_preparation', 4, 'es numérico', true, 'id_analysis_preparation_is_numeric_OK', 'Éxito'),
    //name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 5, 'cumple tamaño mínimo', false, 'name_analysis_preparation_nim_size_NG', 'name_analysis_preparation debe de contener como minimo 8 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 6, 'cumple tamaño máximo', false, 'name_analysis_preparation_max_size_NG', 'name_analysis_preparation no debe de superar los 100 caracteres'),
    Array('analysis_preparation', 'name_analysis_preparation', 7, 'no tiene acentos ni ñ', false, 'name_analysis_preparation_format_NG', 'name_analysis_preparation no puede contener acentos, ni ñs ni ningun tipo de simbolo especial'),
    Array('analysis_preparation', 'name_analysis_preparation', 8, 'es alfabético', true, 'name_analysis_preparation_is_alphabetic_OK', 'Exito'),
    //description_analysis_preparation 
    Array('analysis_preparation', 'description_analysis_preparation', 9, 'cumple tamaño mínimo', false, 'description_analysis_min_size_NG', 'description_analysis_preparation debe de tener una longitud minima de 80 caracteres.'),
    Array('analysis_preparation', 'description_analysis_preparation', 10, 'cumple tamaño máximo', false, 'description_analysis_max_size_NG', 'description_analysis_preparation debe de tener una longitud maxima de 5000 caracteres.'),
    Array('analysis_preparation', 'description_analysis_preparation', 11, 'no tiene acentos ni ñ', false, 'description_analysis_format_NG', 'description_analysis_preparation no puede contener acntos ni ñs.'),
    Array('analysis_preparation', 'description_analysis_preparation', 12, 'es alfabético', true, 'description_analysis_is_alphabetic_OK', 'Exito'),
    //bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 13, 'cumple tamaño mínimo', false, 'bib_analysis_preparation_min_size_NG', 'bib_analysis_preparation debe de tener como minimo 6 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 14, 'cumple tamaño máximo', false, 'bib_analysis_preparation_max_size_NG', 'bib_analysis_preparation debe de tener como maximo 200 caracteres'),
    Array('analysis_preparation', 'bib_analysis_preparation', 15, 'es alfabético con espacios, acentos, signos de puntuacion o ñ', false, 'bib_analysis_preparation_format_NG', 'El nombre de bib_analysis_preparation no es válido, debe de ser alfabético y puede contener espacios, acentos, la letra ñ y signos de puntuación'),
    Array('analysis_preparation', 'bib_analysis_preparation', 16, 'es alfabético', true, 'bib_analysis_preparation_is_alphabetic_OK', 'Éxito'),
    //file_analysis_preparation
    Array('analysis_preparation', 'file_analysis_preparation', 17, 'cumple tamaño mínimo', false, 'file_analysis_preparation_min_size_NG', 'file_analysis_preparation debe de tener un nombre de minimo 7 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 18, 'cumple tamaño máximo', false, 'file_analysis_preparation_max_size_NG', 'file_analysis_preparation debe de tener un nombre de maximo 100 caracteres'),
    Array('analysis_preparation', 'file_analysis_preparation', 19, 'no contiene ñ, espacios, acentos ni otro tipo de caracteres', false, 'file_analysis_preparation_format_NG', 'file_analysis_format debe de tener un nombre que no contenga espacios, acentos, la letra ñ ni ningun tipo de caracter especial'),
    Array('analysis_prepatation', 'file_analysis_preparation', 20, 'es alfabetico', true, 'file_analysis_preparation_is_alphabetic_OK', 'Exito'),
);

let pruebas_analysis_preparation = Array(
    Array(),
    Array()




);

let pruebas_file_analysis_preparation = Array(
    Array(),
    Array()



);