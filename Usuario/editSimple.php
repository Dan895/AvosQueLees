<?php 
	include('../conexionDB.php');

	if (isset($_POST['id'])) {
		$id = $_POST['id'];
  		$query = "SELECT * FROM usuarios WHERE id_Usuario = $id";
  		$result = mysqli_query($connection, $query);

  		if(!$result) {
    		die('Consulta Fallida'. mysqli_error($connection));
		}

		$json = array();
  		while($row = mysqli_fetch_array($result)) {
    		$json[] = array(
      		'id' => $row['id_Usuario'],
          'rol' => $row['id_Rol'],
          'nombre' => $row['nombre'],
          'telefono' => $row['telefono'],
          'contra' => $row['contrasenia'],
          'email' => $row['email']
   			);
  		}
  		$jsonStr = json_encode($json[0]);
  		echo $jsonStr;	
	}
?>