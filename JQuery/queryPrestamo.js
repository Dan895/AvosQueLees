$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in queryPrestamo!');
	//Fuciones que se cargan a listas desplegables al cargar la página
	listarUsuarios();
	listarLibro();
	listarCarrera();
	listarSemestre();
	listarUsu();
	listrarParam();
	listarPrestamos();
	
	Date.prototype.toDateInputValue = (function() {
	    var local = new Date(this);
	    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	    return local.toJSON().slice(0,10);
	});

	var dias = 6;
    $('#fechaInput').val(new Date().toDateInputValue());
 	//alert( new Date().toDateOutputValue());// (3*24*60*60*1000));
	
	//agrega una consulta del formulario
	$('#form-prestamo').submit(function (e){
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#idUsu').val(),
			libro: $('#idLibro').val(),
			parametro: $('#idParametro').val(),
			carrera: $('#idCarrera').val(),
			semestre: $('#idSemestre').val(),
			fechaIn: $('#fechaInput').val(), 
			fechaOut: $('#fechaOutput').val(),
			observaciones: $('#observaciones').val()
		};
		let url = edit === false ? 'add-prestamo.php':'edit-prestamo.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		console.log(postData);
		$.post(url, postData, function(response) {
			console.log(response);
			listarUsuarios();
			listarPrestamos();//quitar si no va aqui
			$('#form-prestamo').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});
	//Lista Prestamos 
	function listarPrestamos(){
		$.ajax({
		url: 'list-param.php',
		type: 'GET',
		success: function(response){
			let parametro = JSON.parse(response)//Guarda el JSON en la variable parametro, esta variable tiene todo
			let template
			
			parametro.forEach(parametro => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<tr idParametro="${parametro.id}" style="text-align: center">
							<td>${parametro.id}</td><!--quitar el td y poner un <input> -->
							<td> 
								<a href="#" class="itemNombre">${parametro.nombre}</a>
							</td>
							<td>${parametro.validacion}</td>
							<td>${parametro.descripcion}</td>
							<td>
								<button class="param-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#parametros').html(template);
			} 
		}); 
	}
	
	//Lista lista Usuarios
	function listarUsuarios(){
		$.ajax({
		url: 'list-prestamo.php',
		type: 'GET',
		success: function(response){
			let pres = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			console.log(pres)
			let template
			
			pres.forEach(pres => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<tr idPres="${pres.id}" style="text-align: center">
							<td>${pres.nombreUsu}</td>
							<td> 
								<a href="#" class="itemNombre">${pres.titulo}</a>
							</td>
							<td>${pres.nombre}</td>
							<td>${pres.nombreCarrera}</td>
							<td>${pres.numeroSemestre}</td>
							<td>${pres.fechaEntrada}</td>
							<td>${pres.fechaSalida}</td>
							<!--<td>${pres.observaciones}</td>-->
							<td>
								<button class="pres-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#prestamos').html(template);
			} 
		}); 
	}

	function listarLibro(){
		$.ajax({
		url: 'list-libro.php',
		type: 'GET',
		success: function(response){
			let libro = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			libro.forEach(libro => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<option value="${libro.id}">
							${libro.titulo}</option>
					`
				});
				$('#idLibro').append(template);
			} 
		}); 
	}

	function listarCarrera(){
		$.ajax({
		url: 'list-carrera.php',
		type: 'GET',
		success: function(response){
			let carrera = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			carrera.forEach(carrera => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<option value="${carrera.id}">
							${carrera.titulo}</option>
					`
				});
				$('#idCarrera').append(template);
			} 
		}); 
	}
	//
	function listarSemestre(){
		$.ajax({
		url: 'list-semestre.php',
		type: 'GET',
		success: function(response){
			let semestre = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			semestre.forEach(semestre => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<option value="${semestre.id}">
							${semestre.titulo}</option>
					`
				});
				$('#idSemestre').append(template);
			} 
		}); 
	}
	//funcion Usuario
	function listarUsu(){
		$.ajax({
			url: 'list-Usu.php',
			type: 'GET',
			success: function(response){
				let usu = JSON.parse(response)
				let template
				
				usu.forEach(usu => {
					template += `
						<option value="${usu.id}">
							${usu.nombre}</option>
					`
				});
				$('#idUsu').append(template);
			}
		});
	}

	//funcion Parametro
	function listrarParam(){
		$.ajax({
			url: 'list-Parametro.php',
			type: 'GET',
			success: function(response){
				let param = JSON.parse(response)
				let template
				
				param.forEach(param => {
					//console.log(param.validacion)Funciona pero mustra todo lo que hay, solo necesitamos uno por vez
					template += `
						<option value="${param.id}">
							${param.validacion} </option>
							
					`
				});
				$('#idParametro').append(template);
			}
		});
	}
	//días de prestamo conforme al valor de los días en Parametro
	$("#idParametro").focusout(function(){
		var dias = $("#idParametro").val();
		console.log(dias)
		Date.prototype.toDateOutputValue = (function() {
	    	var local = new Date(this);
	    	local.setMinutes((this.getMinutes() + (parseInt(dias)*24*60)) - this.getTimezoneOffset());

	    	return local.toJSON().slice(0,10);
		});

		$('#fechaOutput').val(new Date().toDateOutputValue());
    	
  	});

	//Elimina una categoria al hacer click sobre el boton eliminar
	$(document).on('click', '.pres-delete', function() {
		if (confirm('Estas seguro de querer eliminar?')) {
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('idUsu');//Valor de id de categoria

			$.post('delete-usuario.php', {id}, function(response){
				listarUsuarios();
				console.log(response);
			})//Enviar info a delete-usuario.php
		}
	})

	//Modifica una categoria 
	$(document).on('click', '.itemNombre', function(){
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('idUsu');//sustituir por el id en la pag html el que esta oculto
		$.post('editSimple.php', {id}, function(response){
			//console.log(response);
			const usuario = JSON.parse(response);
			$('#idUsu').val(usuario.id);
			$('#idRol').val(usuario.rol);
			$('#name').val(usuario.nombre);
			$('#email').val(usuario.email);
			$('#phone').val(usuario.telefono);
			$('#password').val(usuario.contra);
			
			//$('#name').val(cat.Nombre);//Editar cat.Nombre con el valor Nombre de editSimple dentro del array.
			//$('#catId').val(cat.id);//Valor oculto en nuestro formulario de categoria
			edit = true;
		})
	});
});