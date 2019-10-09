$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in queryParametros!');
	listarParametros();

	//agrega una categoria formulario libro
	$('#form-Parametros').submit(function (e){
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#idParametro').val(),
			nombre: $('#Name').val(),
			validacion: $('#Validacion').val(),
			descripcion: $('#Descripcion').val()
		};
		
		let url = edit === false ? 'add-param.php':'edit-param.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		
		$.post(url, postData, function(response) {
			console.log(response);
			listarParametros();
			$('#form-Parametros').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});
	
	//Lista libros
	function listarParametros(){
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

	
	//Elimina un parametro al hacer click sobre el boton eliminar
	$(document).on('click', '.param-delete', function() {
		if (confirm('Estas seguro de querer eliminar?')) {
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('idParametro');//Valor de id de parametro

			$.post('delete-param.php', {id}, function(response){
				listarParametros();
				console.log(response);
			})//Enviar info a delete-book.php
		}
	}) 

	//Modifica un parametro 
	$(document).on('click', '.itemNombre', function(){
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('idParametro');//sustituir por el id en la pag html el que esta oculto
		$.post('editSimple.php', {id}, function(response){
			//console.log(response);
			const param = JSON.parse(response);
			$('#idParametro').val(param.id);
			$('#Name').val(param.nombre);
			$('#Validacion').val(param.validacion);
			$('#Descripcion').val(param.descripcion);
			edit = true;
		})
	});  
});