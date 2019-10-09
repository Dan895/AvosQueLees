<?php
	include('../conexionDB.php');
	$id = $_POST['id'];
    $idCategoria = $_POST['idCategoria'];
    $titulo = $_POST['titulo'];
    $edicion = $_POST['edicion'];
    $autor = $_POST['autor'];
    $editorial = $_POST['editorial'];

	$query = "UPDATE libros SET id_Categoria='$idCategoria', titulo='$titulo',edicion='$edicion',autor='$autor', editorial='$editorial' WHERE id_Libro = '$id'";
	$result = mysqli_query($connection, $query);
	if (!$result) {
		die('Ha ocurrido un error al modificar');
	}

	echo "Modificación Completa";
?>