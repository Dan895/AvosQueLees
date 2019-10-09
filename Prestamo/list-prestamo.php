<?php 
	include('../conexionDB.php');

  	$query = "SELECT pre.id_Prestamo, usu.nombre as usuNombre, l.titulo, p.nombre, c.nombre_Carrera, s.numero_Semestre, pre.fecha_Entrada, pre.fecha_Salida
    FROM prestamos pre 
    INNER JOIN usuarios usu
    ON pre.id_Usuario = usu.id_Usuario
    INNER JOIN libros l
    ON pre.id_Libro = l.id_Libro
    INNER JOIN parametros p
    ON pre.id_Parametro = p.id_Parametro
    INNER JOIN carreras c
    ON pre.id_Carrera = c.id_Carrera
    INNER JOIN semestres s
    ON pre.id_Semestre = s.id_Semestre";

  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
          'id' => $row ['id_Prestamo'],
      		'nombreUsu' => $row['usuNombre'],
      		'titulo' => $row['titulo'],
          'nombre' => $row['nombre'],
          'nombreCarrera' => $row['nombre_Carrera'],
          'numeroSemestre' => $row['numero_Semestre'],
          'fechaEntrada' => $row['fecha_Entrada'],
          'fechaSalida' => $row['fecha_Salida']
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>