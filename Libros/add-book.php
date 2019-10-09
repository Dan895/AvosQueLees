<?php
	include('../conexionDB.php');
	echo "add-book ingresa";
	if (isset($_POST['titulo'])) {
		$idCategoria = $_POST['idCategoria'];
		$titulo = $_POST['titulo'];
		$edicion = $_POST['edicion'];
		$autor = $_POST['autor'];
		$editorial = $_POST['editorial'];
		
		$query = "INSERT INTO libros (id_Categoria, titulo, edicion, autor, editorial) VALUES ('$idCategoria', '$titulo', '$edicion', '$autor', '$editorial')";
		$result = mysqli_query($connection, $query);
		if (!$result) {
			die('La consulta ha Fallado!!!'.$query);
		}
		echo "Libro agregado!!!";
	}
?>