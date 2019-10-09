<?php

	$usuario = "root";
	$password = "usbw";
	$servidor = "localhost";
	$basededatos = "avosquelees";

	$connection = mysqli_connect($servidor, $usuario, $password) or die ("No se puede conectar a la Base de datos".mysql_error());
	$db = mysqli_select_db($connection, $basededatos) or die ( "Problemas al conectar la base de datos".mysql_error());
?>