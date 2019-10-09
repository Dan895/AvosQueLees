<?php
	include('../conexionDB.php');

	if (isset($_POST['id'])) { //buscar que vengan los campos requeridos 
		$usu = $_POST['id'];
		$libro = $_POST['libro'];
		$parametro = $_POST['parametro'];
		$carrera = $_POST['carrera'];
		$semestre = $_POST['semestre'];
		$fechaIn = $_POST['fechaIn'];
		$fechaOut = $_POST['fechaOut'];
		$observaciones = $_POST['observaciones'];
		
		$query = "INSERT INTO prestamos (id_Usuario, id_Libro, id_Parametro, id_Carrera, id_Semestre, fecha_Entrada, fecha_Salida, observaciones) VALUES ('$usu','$libro','$parametro','$carrera','$semestre','$fechaIn','$fechaOut','$observaciones')";

		$result = mysqli_query($connection, $query);
		
		if (!$result) {
			die('La consulta ha Fallado!!!').mysql_error();
		}
		echo "Prestamo agregado!!!";
	}
?>