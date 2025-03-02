<?php
 
class Api{

public function getCultivos(){
     $vector = array();
     $conexion = new Conexion();
     $db = $conexion->getCon();
     $sql = "SELECT * FROM cultivos";
     $consulta = $db->prepare($sql);
     $consulta->execute();
     while($fila = $consulta->fetch()) {
        $vector[] = array(
          "idcultivo" => $fila['idcultivo'],
          "nombrecultivo" => $fila['nombrecultivo'],
          "descripcion" =>  $fila['descripcion']); }

     return $vector;
}

public function addCultivos($nombrecultivo, $descripcion){
  
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "INSERT INTO cultivos (nombrecultivo, descripcion) VALUES (:nombrecultivo,:descripcion)";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':nombrecultivo', $nombrecultivo);
  $consulta->bindParam(':descripcion', $descripcion);
  $consulta->execute();

  return '{"msg":"cultivo agregado"}';
}

public function deleteCultivo($idcultivo){
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "DELETE FROM cultivos WHERE idcultivo=:idcultivo";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':idcultivo', $idcultivo); 
  $consulta->execute();

  return '{"msg":"cultivo eliminado"}';
}

public function getCultivo($idcultivo){
  $vector = array();
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "SELECT idcultivo, nombrecultivo, descripcion FROM cultivos WHERE idcultivo=:idcultivo";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':idcultivo', $idcultivo);
  $consulta->execute();
  while($fila = $consulta->fetch()) {
     $vector[] = array(
       "idcultivo" => $fila['idcultivo'],
       "nombrecultivo" => $fila['nombrecultivo'],
       "descripcion" =>  $fila['descripcion']); }

  return $vector[0];
}

public function updateCultivo($idcultivo, $nombrecultivo, $descripcion){
  
  $conexion = new Conexion();
  $db = $conexion->getCon();
  $sql = "UPDATE cultivos SET nombrecultivo=:nombrecultivo, descripcion=:descripcion WHERE idcultivo=:idcultivo";
  $consulta = $db->prepare($sql);
  $consulta->bindParam(':idcultivo', $idcultivo);  
  $consulta->bindParam(':nombrecultivo', $nombrecultivo);
  $consulta->bindParam(':descripcion', $descripcion);
  $consulta->execute();

  return '{"msg":"cultivo actualizado"}';
}



}
?>