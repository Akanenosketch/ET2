class test {

    constructor() {

        // mostrar boton de test una vez creada la clase de entidad
        this.mostrar_boton_test();
    }

    test_run() {

        document.getElementById('div_IU_test').style.display = 'block';
        document.getElementById('resultadodef').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadoprueba').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';

        this.resolve_def_test();
        this.resolve_pruebas();

        this.array_def = eval('def_tests_' + this.entidad);
        this.array_pruebas = eval('pruebas_' + this.entidad);
        this.array_pruebas_file = eval('pruebas_file_' + this.entidad);

        this.test_entidad();
        this.test_entidad_files();

        setLang();

    }

    resolve_def_test() {

        this.verificarDefTest();

    }

    resolve_pruebas() {

        this.verificarPruebas();
        this.verificarPruebas_file();

    }

    test_entidad() {



        // construyo el titulo de la tabla de muestra
        let salidatest = `<tr><th class='numDefTest'>NumDefTest</th><th class='numTest'>NumPrueba</th><th class='campo'>campo</th><th cass='prueba'>Prueba</th><th class='accion'>Accion</th><th class='valor'>valor</th><th class='respuestaTest'>Respuesta Test</th><th class='respuestaEsperada'>Respuesta esperada</th><th class='resultado'>Resultado</th></tr>`


        for (let i = 0; i < this.array_pruebas.length; i++) {

            //cargo formulario limpio
            this.cargar_formulario_html();

            // cargo el boton pq sino da un error en la funcion de dibujado del mensaje de error
            let botonsumit = document.createElement('input');
            botonsumit.id = 'submit_button';
            document.getElementById('IU_form').append(botonsumit);

            var campotest = this.array_pruebas[i][1];
            var numdeftest = this.array_pruebas[i][2];
            var numprueba = this.array_pruebas[i][3];
            var acciontest = this.array_pruebas[i][4];
            var valortest = this.array_pruebas[i][5];
            var respuestatest = this.array_pruebas[i][6];

            // recupero el test correspondiente a la prueba que realizo
            var def = this.devolver_def(numdeftest);

            // creo objeto html sino cargo el formulario (para crear cada elemento dinamicamente dentro del form)           

            //meto valor en objeto (esto depende del tipo de elemento de formulario)
            document.getElementById(campotest).value = valortest;

            //llamo a la funcion de validacion del campo según su accion
            if (acciontest == 'SEARCH') {
                var resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()')
            }
            else {
                //por si hay que distinguir la accion en las comprobaciones creo el atributo del objeto con la accion
                this.accion = acciontest;
                var resultadotest = eval('this.comprobar_' + campotest + '()');
            }

            // compruebo si el resultado del test y la respuesta esperada es la misma
            if (respuestatest == resultadotest) {
                var resultadoestetest = '<td class="CORRECTO">CORRECTO</td>';
            }
            else {
                var resultadoestetest = '<td class="INCORRECTO">INCORRECTO</td>';
            }

            // construyo la fila de salida de la prueba realizada
            var lineasalida = `<tr><td>` + numdeftest + `</td><td>` + numprueba + `</td><td>` + campotest + `</td><td>` + def[3] + `</td><td>` + acciontest + `</td><td>` + valortest + `</td><td>` + resultadotest + `</td><td>` + respuestatest + '(' + this.traduccion(respuestatest) + ')' + `</td>` + resultadoestetest + `</tr>`;
            salidatest += lineasalida;

        }

        // presento el resultado
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';

    }

    /*Función para obtener el valor de la cookie*/
    getCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }

        return null;

    }

    traduccion(codigo) {
        var lang = this.getCookie('lang');
        var traduccion;
        switch (lang) {
            case 'ES':
                traduccion = textos_ES;
                break;
            case 'EN':
                traduccion = textos_EN;
                break;
            default:
                traduccion = textos_ES;
                break;
        }
        return traduccion[codigo];
    }

    test_entidad_files() {

        let salidatest = `<tr><th class='numDef'>NumDefTest</th><th class='numTest'>NumPrueba</th><th class='campo'>Campo</th><th class='prueba'>Prueba</th><th class='accion'>Accion</th><th class='valor'>valor</th><th class='respuestaTest'>Respuesta Test</th><th class='respuestaEsperada'>Respuesta esperada</th><th class='resultado'>Resultado</th></tr>`

        for (let i = 0; i < this.array_pruebas_file.length; i++) {

            //cargo formulario limpio
            this.cargar_formulario_html();
            let botonsumit = document.createElement('input');
            botonsumit.id = 'submit_button';
            document.getElementById('IU_form').append(botonsumit);

            var campotest = this.array_pruebas_file[i][1];
            var numdeftest = this.array_pruebas_file[i][2];
            var numprueba = this.array_pruebas_file[i][3];
            var acciontest = this.array_pruebas_file[i][4];
            var clasedetest = this.array_pruebas_file[i][5];
            var valortest = this.array_pruebas_file[i][6];
            var respuestatest = this.array_pruebas_file[i][7];


            // creo objeto html sino cargo formulario           

            //construyo objeto file y relleno valor para prueba
            if (valortest.length != 0) {
                var file = new File([new ArrayBuffer(valortest[2])], valortest[0], { type: valortest[1], webkitRelativePath: "C:\\fakepath\\" + valortest[0] });

                // Create a data transfer object. Similar to what you get from a `drop` event as `event.dataTransfer`
                const dataTransfer = new DataTransfer();

                // Add your file to the file list of the object
                dataTransfer.items.add(file);

                // Save the file list to a new variable
                const fileList = dataTransfer.files;

                // Set your input `files` to the file list
                document.getElementById(campotest).files = fileList;
            }

            //llamo a funcion
            if (acciontest == 'SEARCH') {
                var resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()')
            }
            else {
                //por si hay que distinguir la accion en las comprobaciones creo el atributo del objeto con la accion
                this.accion = acciontest;
                var resultadotest = eval('this.comprobar_' + campotest + '()');
            }

            // compruebo si el resultado del test y la respuesta esperada es la misma
            if (respuestatest == resultadotest) {
                var resultadoestetest = '<td class="CORRECTO">CORRECTO</td>';
            }
            else {
                var resultadoestetest = '<td class="INCORRECTO">INCORRECTO</td>';
            }

            var lineasalida = `<tr><td>` + numdeftest + `</td><td>` + numprueba + `</td><td>` + campotest + `</td><td>` + clasedetest + `</td><td>` + acciontest + `</td><td>` + valortest + `</td>` + resultadotest + `</td><td>` + respuestatest + '(' + this.traduccion(respuestatest) + ')' + `</td><td>` + resultadoestetest + `</tr>`;
            salidatest += lineasalida;



        }

        // presento el resultado
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';

    }

    devolver_def(num_def) {

        for (let i = 0; i < this.array_def.length; i++) {
            if (this.array_def[i][2] == num_def) {
                return this.array_def[i];
            }
        }
    }



    verificarDefTest() {

        let probe_def = eval("def_tests_" + this.entidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th class='entidad'>Entidad</th><th class='campo'>Campo</th><th class='numDef'>Num. DefTest</th><th colspan='7' class='info'>Datos</th><th class='resultado'></th>";
        let salidalinea = '';

        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            filacorrecta = true;
            for (let i = 0; i < 7; i++) {
                salidalinea += '<td>' + typeof (element[i]) + '</td>';
            }
            if (
                (typeof (element[0]) == 'string') &&
                (typeof (element[1]) == 'string') &&
                (typeof (element[2]) == 'number') &&
                (typeof (element[3]) == 'string') &&
                (typeof (element[4]) == 'string') &&
                ((typeof (element[5]) == 'string') || (typeof (element[5]) == 'boolean')) &&
                (typeof (element[6]) == 'string')
            ) {
                salidalinea += '<td class="DefCorrect">CORRECTA</td>';
            }
            else {
                salidalinea += '<td class="ERROR">ERROR</td>';
                filacorrecta = false;
            }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });

        document.getElementById('tablaresultadostest').innerHTML += salidatabla;

        if (filacorrecta) {
            document.getElementById('resultadodef').className = 'DefTest_OK';
        } 
        else document.getElementById('resultadodef').className = 'DefTest_NG';

        document.getElementById('res_estructura_tests').className = 'DefTest_Title';

        document.getElementById('contenidoTests').style.display = 'block';

    }

    verificarPruebas() {

        let probe_def = eval("pruebas_" + this.entidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th class='entidad'>Entidad</th><th class='campo'>Campo</th><th class='numDef'>Num.Def</th><th class='numTest'>Num.Prob</th><th colspan='7' class='info'>Datos</th><th class='resultado'>Resultado</th>";
        let salidalinea = '';

        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            filacorrecta = true;
            for (let i = 0; i < 7; i++) {
                salidalinea += '<td>' + typeof (element[i]) + '</td>';
            }
            if (
                (typeof (element[0]) == 'string') &&
                (typeof (element[1]) == 'string') &&
                (typeof (element[2]) == 'number') &&
                (typeof (element[3]) == 'number') &&
                (typeof (element[4]) == 'string') &&
                (typeof (element[5]) == 'string') &&
                ((typeof (element[6]) == 'string') || (typeof (element[6]) == 'boolean'))
            ) {
                salidalinea += '<td class="DefCorrect">CORRECTA</td>';
            }
            else {
                salidalinea += '<td class="ERROR">ERROR</td>';
                filacorrecta = false;
            }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;

        if (filacorrecta) {
            document.getElementById('resultadoprueba').className = 'DefPrueba_OK';
        }
        else document.getElementById('resultadoprueba').className = 'DefPrueba_KO';

        document.getElementById('res_estructura_pruebas').className = 'DefPrueba_Title';

        document.getElementById('contenidoPruebas').style.display = 'block';

    }

    verificarPruebas_file() {

        let probe_def = eval("pruebas_file_" + this.entidad);
        let filacorrecta = true;

        let salidatabla = "<tr><th class='entidadFile'>Entidad</><th class='campoFile'>Campo</th><th class='numDefFile'>Num.Def</th><th class='numTestFile'>Num.Prob</th><th colspan='8' class='infoFile'>Datos</th><th class='resultado'></th>";
        let salidalinea = '';

        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>' + element[0] + '</td>';
            salidalinea += '<td>' + element[1] + '</td>';
            salidalinea += '<td>' + element[2] + '</td>';
            salidalinea += '<td>' + element[3] + '</td>';
            filacorrecta = true;
            for (let i = 0; i < 8; i++) {
                salidalinea += '<td>' + typeof (element[i]) + '</td>';
            }
            if (
                (typeof (element[0]) == 'string') &&
                (typeof (element[1]) == 'string') &&
                (typeof (element[2]) == 'number') &&
                (typeof (element[3]) == 'number') &&
                (typeof (element[4]) == 'string') &&
                (typeof (element[5]) == 'string') &&
                (typeof (element[6]) == 'object') &&
                ((typeof (element[7]) == 'string') || (typeof (element[7]) == 'boolean'))
            ) {
                salidalinea += '<td class="DefCorrect">CORRECTA</td>';
            }
            else {
                salidalinea += '<td class="ERROR">ERROR</td>';
                filacorrecta = false;
            }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;

        if (filacorrecta) {
            document.getElementById('resultadotest').className = 'DefUnitPruebas_OK';
        }
        else document.getElementById('resultadotest').className = 'DefUnitPruebas_KO';

        document.getElementById('res_pruebas').className = 'DefPruebaEntidad_Title';

        document.getElementById('contenidoPruebas').style.display = 'block';

    }

} //end class