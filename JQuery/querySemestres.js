$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in querySemestres!');
	listarSemestres();

	//agrega una categoria formulario libro
	$('#form-semestres').submit(function (e){
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#semestreId').val(),
			semestre: $('#semestre').val()
		};
		
		let url = edit === false ? 'add-semestre.php':'edit-semestre.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		
		$.post(url, postData, function(response) {
			console.log(response);
			listarSemestres();
			$('#form-semestres').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});
	
	//Lista semestres
	function listarSemestres(){
		$.ajax({
		url: 'list-semestre.php',
		type: 'GET',
		success: function(response){
			let semestre = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			semestre.forEach(semestre => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<tr semestreId="${semestre.id}" style="text-align: center">
							<!--<td>${semestre.id}</td>-->
							<td> 
								<a href="#" class="itemSemestre">${semestre.numeroSemestre}</a>
							</td>
							<td>
								<button class="param-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#semestres').html(template);
			} 
		}); 
	}

	
	//Elimina una semestre al hacer click sobre el boton eliminar
	$(document).on('click', '.param-delete', function() {
		if (confirm('Estas seguro de querer eliminar?')) {
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('semestreId');//Valor de id de semestre
			
			$.post('delete-semestre.php', {id}, function(response){
				listarSemestres();
				console.log(response);
			})//Enviar info a delete-semestre.php
		}
	})

	
	//Modifica un semestre 
	$(document).on('click', '.itemSemestre', function(){
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('semestreId');//sustituir por el id en la pag html el que esta oculto
		alert(id);
		$.post('editSimple.php', {id}, function(response){
			//console.log(response);
			const smt = JSON.parse(response);
			$('#semestreId').val(smt.id);
			$('#semestre').val(smt.semestre);
			edit = true;
		})
	});  
});