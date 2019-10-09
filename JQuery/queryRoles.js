$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in queryCarreras!');
	listarRoles();

	//agrega un registro
	$('#form-roles').submit(function (e){
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#idRol').val(),
			nombreRol: $('#nombreRol').val(),
			descripcion: $('#descripcion').val()
		};
		
		let url = edit === false ? 'add-roles.php':'edit-roles.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		
		$.post(url, postData, function(response) {
			console.log(response);
			listarRoles();
			$('#form-roles').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});
	
	//Lista 
	function listarRoles(){
		$.ajax({
		url: 'list-roles.php',
		type: 'GET',
		success: function(response){
			let roles = JSON.parse(response)//Guarda el JSON en la variable roles, esta variable tiene todo
			let template
			
			roles.forEach(roles => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<tr idRol="${roles.id}" style="text-align: center">
							<td>${roles.id}</td>
							<td> 
								<a href="#" class="itemRol">${roles.nombreRol}</a>
							</td>
							<td>${roles.descripcion}</td>
							<td>
								<button class="rol-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#roles').html(template);
			} 
		}); 
	}
	
	//Elimina una categoria al hacer click sobre el boton eliminar
	$(document).on('click', '.rol-delete', function() {
		if (confirm('Estas seguro de querer eliminar?')) {
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('idRol');//Valor de id de categoria

			$.post('delete-roles.php', {id}, function(response){
				listarRoles();
				console.log(response);
			})//Enviar info a delete-book.php
		}
	})

	//Modifica una categoria 
	$(document).on('click', '.itemRol', function(){
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('idRol');//sustituir por el id en la pag html el que esta oculto
		$.post('editSimple.php', {id}, function(response){
			//console.log(response);
			const rol = JSON.parse(response);
			$('#idRol').val(rol.id);
			$('#nombreRol').val(rol.nombreRol);
			$('#descripcion').val(rol.descripcion);
			edit = true;
		})
	});
});