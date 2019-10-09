<?php
	include('../conexionDB.php');
	$id = $_POST['id'];
    $rol = $_POST['rol'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $pass = md5($_POST['password']);

	$query = "UPDATE usuarios SET id_Rol=$rol, nombre =$nombre, telefono =$phone, contrasenia=$pass, email=$email WHERE id_Usuario = $id";
	echo $query;
	echo " ";
	$result = mysqli_query($connection, $query);
	echo $result;
	if (!$result) {
		die('Ha ocurrido un error al modificar'.mysqli_error());
	}

	echo "Modificación Completa";
?>