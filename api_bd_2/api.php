<?php
 
class Api{

public function getRiegos(){
     $vector = array();
     $conexion = new Conexion();
     $db = $conexion->getCon();
     $sql = "SELECT * FROM riegos";
     $consulta = $db->prepare($sql);
     $consulta->execute();
     while($fila = $consulta->fetch()) {
        $vector[] = array(
          "idriego" => $fila['idriego'],
          "nombre" => $fila['nombre'],
          "idculti" =>  $fila['idculti'],
          "nombreculti" => $fila['nombreculti'],
          "fecha" => $fila['fecha'],
          "horastart" => $fila['horastart'],
          "horaend" => $fila['horaend'],); }

     return $vector;
}

public function addRiegos($nombre, $idcultivo, $nombrecultivo, $fecha, $horastart, $horaend){
  
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "INSERT INTO riegos (nombre, idculti, nombreculti, fecha, horastart, horaend) VALUES (:nombre, :idculti, :nombreculti, :fecha, :horastart, :horaend)";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':nombre', $nombre);
  $consulta->bindParam(':idculti', $idcultivo);
  $consulta->bindParam(':nombreculti', $nombrecultivo);
  $consulta->bindParam(':fecha', $fecha);
  $consulta->bindParam(':horastart', $horastart);
  $consulta->bindParam(':horaend', $horaend);
  $consulta->execute();

  return '{"msg":"riego agregado"}';
}

public function deleteRiegos($idriego){
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "DELETE FROM riegos WHERE idriego=:idriego";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':idriego', $idriego); 
  $consulta->execute();

  return '{"msg":"riego eliminado"}';
}

public function getRiego($idriego){
  $vector = array();
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "SELECT idriego, nombre, idculti, nombreculti, fecha, horastart, horaend FROM riegos WHERE idriego=:idriego";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':idriego', $idriego);
  $consulta->execute();
  while($fila = $consulta->fetch()) {
     $vector[] = array(
        "idriego" => $fila['idriego'],
        "nombre" => $fila['nombre'],
        "idculti" => $fila['idculti'],
        "nombreculti" => $fila['nombreculti'],
        "fecha" => $fila['fecha'],
        "horastart" =>  $fila['horastart'],
        "horaend" => $fila['horaend']); }

  return $vector[0];
}

public function updateRiego($idriego, $nombre, $idculti, $nombreculti, $fecha, $horastart, $horaend){
  
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "UPDATE riegos SET nombre=:nombre, idculti=:idculti, nombreculti=:nombreculti, fecha=:fecha, horastart=:horastart, horaend=:horaend WHERE idriego=:idriego";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':idriego', $idriego);  
  $consulta->bindParam(':nombre', $nombre);
  $consulta->bindParam(':idculti', $idculti);
  $consulta->bindParam(':nombreculti', $nombreculti);
  $consulta->bindParam(':fecha', $fecha);
  $consulta->bindParam(':horastart', $horastart);
  $consulta->bindParam(':horaend', $horaend);
  $consulta->execute();

  return '{"msg":"riego actualizado"}';
}



}
?>