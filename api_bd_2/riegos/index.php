<?php

//conexion a la base datos utilizando pdo
$host = "127.0.0.1";  //127.0.0.1 0 localhost
$db = "irrigacion";      //base de datos de mysql
$user = "root";       // usuario de mysql
$password = "";       //contraseña de mysql

$db = new PDO("mysql:host=$host;dbname=$db;", $user, $password);


$vector = array();
$sql = "SELECT * FROM riegos";
$consulta = $db->prepare($sql); 
$consulta->execute();

    
    while($fila = $consulta->fetch()) 
    {
       $vector[] = array(
         "idriego" => $fila['idriego'],
         "nombre" => $fila['nombre'],
         "idculti" =>  $fila['idculti'],
         "nombreculti" => $fila['nombreculti'],
         "fecha" => $fila['fecha'],
         "horastart" => $fila['horastart'],
         "horaend" => $fila['horaend']); 
    }
    
   $json = json_encode($vector);
   echo $json;
  
?>    