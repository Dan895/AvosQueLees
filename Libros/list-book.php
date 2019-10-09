<?php 
	include('../conexionDB.php');

  	$query = "SELECT l.autor, l.edicion, l.Editorial, l.id_libro, l.titulo, c.nombre FROM `libros` as l 
join categoria as c on l.id_Categoria = c.id_Categoria";
  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
      		'autor' => $row['autor'],
      		'edicion' => $row['edicion'],
          'id_libro' => $row['id_libro'],
          'titulo' => $row['titulo'],
          'nombre' => $row['nombre'],
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>