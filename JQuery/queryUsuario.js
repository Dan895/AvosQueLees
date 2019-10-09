$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in queryUsuarios!');
	listarUsuarios();
	listarRol();
	
	//agrega una consulta del formulario
	$('#form-usu').submit(function (e){
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#idUsu').val(),
			rol: $('#idRol').val(),
			nombre: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			//password: $('#password').val()
		};
		
		let url = edit === false ? 'add-usuario.php':'edit-usuario.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		
		$.post(url, postData, function(response) {
			console.log(response);
			listarUsuarios();
			$('#form-usu').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});
	
	//Lista libros
	function listarUsuarios(){
		$.ajax({
		url: 'list-usuario.php',
		type: 'GET',
		success: function(response){
			let usu = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			usu.forEach(usu => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<tr idUsu="${usu.id}" style="text-align: center">
							<!--<td>${usu.id}</td>-->
							<!--<td>${usu.rol}</td>-->
							<td> 
								<a href="#" class="itemNombre">${usu.nombre}</a>
							</td>
							<td>${usu.telefono}</td>
							<!--<td>${usu.contra}</td>-->
							<td>${usu.email}</td>
							<td>
								<button class="usu-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#usuarios').html(template);
			} 
		}); 
	}

	function listarRol(){
		$.ajax({
		url: 'list-rol.php',
		type: 'GET',
		success: function(response){
			let rol = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			rol.forEach(rol => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<option value="${rol.id}">
							${rol.nombre}</option>
					`
				});
				$('#idRol').append(template);
			} 
		}); 
	}

	
	//Elimina una categoria al hacer click sobre el boton eliminar
	$(document).on('click', '.usu-delete', function() {
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
			//$('#password').val(usuario.contra);
			
			//$('#name').val(cat.Nombre);//Editar cat.Nombre con el valor Nombre de editSimple dentro del array.
			//$('#catId').val(cat.id);//Valor oculto en nuestro formulario de categoria
			edit = true;
		})
	});
});