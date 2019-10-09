$(document).ready(function(){
	let edit = false;
	console.log('Start JQuery in queryLibros!');
	listarLibros();
	listarCategoria();

	//agrega una categoria formulario libro
	$('#form-libro').submit(function (e){
		//Objeto creado para guardar los datos que quiero capturar y enviarlos a add-Category o edit-Category.
		const postData = {
			id: $('#libroId').val(),
			idCategoria: $('#Categoria-id').val(),
			titulo: $('#Titulo').val(),
			autor: $('#Autor').val(),
			edicion: $('#Edicion').val(),
			editorial: $('#Editorial').val()
		};
		
		let url = edit === false ? 'add-book.php':'edit-book.php'; //si edit = falso busca add-Category si no busca edit-Category.php(por si se me olvida esta notacion)
		edit = false;
		console.log(url);
		
		$.post(url, postData, function(response) {
			console.log(response);
			listarLibros();
			$('#form-libro').trigger('reset');
		});
		e.preventDefault(); //Cancela el comportamiento por defecto del la pagina
	});
	
	//Lista libros
	function listarLibros(){
		$.ajax({
		url: 'list-book.php',
		type: 'GET',
		success: function(response){
			let libro = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			libro.forEach(libro => {//Plbra libro guarda el valor desde list-book.php
				template += `
						<tr id="${libro.id_libro}" style="text-align: center">
							<!--<td>${libro.id}</td>-->
							<td id="2">${libro.autor}</td>
							<td id="2" name="2"> 
								<a id="2" href="#" class="itemTitulo">${libro.titulo}</a>
							</td>
							
							<td>${libro.edicion}</td>
							<td>${libro.titulo}</td>
							<td>${libro.nombre}</td>
							<td>
								<button class="book-delete btn btn-danger">
  									<i class="fas fa-trash"></i>
								</button>
							</td>
						</tr>
					`
				});
				$('#libros').html(template);
			} 
		}); 
	}
	//obtener el listado de categorias para agregar en el formulario de nuevo libro
	function listarCategoria(){
		$.ajax({
		url: 'list-categoria.php',
		type: 'GET',
		success: function(response){
			let categoria = JSON.parse(response)//Guarda el JSON en la variable libro, esta variable tiene todo
			let template
			
			categoria.forEach(categoria => {//cambiar esta linea en proximos codigos primera palabra
				template += `
						<option value="${categoria.id}">
							${categoria.nombre}</option>
					`
				});
				$('#Categoria-id').append(template);
			} 
		}); 
	}


	
	//Elimina una categoria al hacer click sobre el boton eliminar
	$(document).on('click', '.book-delete', function() {
		if (confirm('Estas seguro de querer eliminar?')) {
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('id');//Valor de id de categoria
			
			$.post('delete-book.php', {id}, function(response){
				listarLibros();
				console.log(response);
			})//Enviar info a delete-book.php
		}
	})

	//Modifica una categoria 
	$(document).on('click', '.itemTitulo', function(){
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('id');//sustituir por el id en la pag html el que esta oculto
		//alert(id);
		$.post('editSimple.php', {id}, function(response){
			//console.log(response);}
			alert(response);
			const book = JSON.parse(response);
			$('#libroId').val(book.id_libro);
			$('#Categoria-id').val(book.idCategoria);
			$('#Titulo').val(book.titulo);
			$('#Autor').val(book.autor);
			$('#Edicion').val(book.edicion);
			$('#Editorial').val(book.editorial);
			
			//$('#name').val(cat.Nombre);//Editar cat.Nombre con el valor Nombre de editSimple dentro del array.
			//$('#catId').val(cat.id);//Valor oculto en nuestro formulario de categoria
			edit = true;
		})
	});
});