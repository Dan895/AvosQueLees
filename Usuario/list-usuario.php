<?php 
  include('../conexionDB.php');

    $query = "SELECT * FROM usuarios";
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
          //'contra' => $row['contrasenia'],
          'email' => $row['email']
      );
    }
    $jsonStr = json_encode($json);
    echo $jsonStr;
?>