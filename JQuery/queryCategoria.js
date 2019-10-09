$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in queryCategorias!');
	listarCategorias();

	//agrega una categoria
	$('#form-clasif').submit(function (e){
		
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#catId').val(),
			name: $('#name').val()
		};
		
		let url = edit === false ? 'add-Category.php':'edit-Category.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		
		$.post(url, postData, function(response) {
			console.log(response);
			listarCategorias();
			$('#form-clasif').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});

	//Lista las categorias
	function listarCategorias(){
		$.ajax({
		url: 'list-category.php',
		type: 'GET',
		success: function(response){
			let categorias = JSON.parse(response)
			let template
			categorias.forEach(categorias => {
				template += `
						<tr CatId="${categorias.id}" style="text-align: center">
							<td>${categorias.id}</td>
							<!--<td>${categorias.Nombre}</td> funcion original--> 
							<td> 
								<a href="#" class="itemNombre">${categorias.Nombre}</a>
							</td>
							<td>
								<button class="category-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#categorias').html(template);
			} 
		}); 
	} 
	//Elimina una categoria al hacer click sobre el boton eliminar
	$(document).on('click', '.category-delete', function() {
		if (confirm('Estas seguro de querer eliminar?')) {
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('CatId');//Valor de id de categoria

			$.post('delete-Category.php', {id}, function(response){
				listarCategorias();
				console.log(response);
			})//Enviar info a delete-Category.php
		}
	})
	//Modifica una categoria 
	$(document).on('click', '.itemNombre', function(){
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('CatId');
		$.post('editSimple.php', {id}, function(response){
			//console.log(response);
			const cat = JSON.parse(response);
			$('#name').val(cat.Nombre);//Editar cat.Nombre con el valor Nombre de editSimple dentro del array.
			$('#catId').val(cat.id);//Valor oculto en nuestro formulario de categoria
			edit = true;
		})
	});
});