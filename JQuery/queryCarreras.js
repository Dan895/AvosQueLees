$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in queryCarreras!');
	listarCarreras();

	//agrega una categoria formulario libro
	$('#form-carreras').submit(function (e){
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#idCarrera').val(),
			carrera: $('#name').val()
		};
		
		let url = edit === false ? 'add-carreras.php':'edit-carreras.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		
		$.post(url, postData, function(response) {
			console.log(response);
			listarCarreras();
			$('#form-carreras').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});
	
	//Lista libros
	function listarCarreras(){
		$.ajax({
		url: 'list-carreras.php',
		type: 'GET',
		success: function(response){
			let carrera = JSON.parse(response)//Guarda el JSON en la variable carrera, esta variable tiene todo
			let template
			
			carrera.forEach(carrera => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<tr idCarrera="${carrera.id}" style="text-align: center">
							<td>${carrera.id}</td>
							<td> 
								<a href="#" class="itemCarrera">${carrera.carrera}</a>
							</td>
							<td>
								<button class="carrera-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#carreras').html(template);
			} 
		}); 
	}
	
	//Elimina una categoria al hacer click sobre el boton eliminar
	$(document).on('click', '.carrera-delete', function() {
		if (confirm('Estas seguro de querer eliminar?')) {
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('idCarrera');//Valor de id de categoria

			$.post('delete-carreras.php', {id}, function(response){
				listarCarreras();
				console.log(response);
			})//Enviar info a delete-book.php
		}
	})

	//Modifica una categoria 
	$(document).on('click', '.itemCarrera', function(){
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('idCarrera');//sustituir por el id en la pag html el que esta oculto
		$.post('editSimple.php', {id}, function(response){
			//console.log(response);
			const carrera = JSON.parse(response);
			$('#idCarrera').val(carrera.id);
			$('#name').val(carrera.carrera);
			edit = true;
		})
	});
});