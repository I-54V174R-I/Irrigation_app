<?php
require_once('conexion.php');
require_once('api.php');
require_once('cors.php');
//obteniedo el metodo http
$method = $_SERVER['REQUEST_METHOD'];

if($method == "GET") {
    if(!empty($_GET['idriego'])){
       $id = $_GET['idriego'];
       $json = null;
       $api = new Api();
       $vector = $api->getRiego($id);
       $json = json_encode($vector);
       echo $json; 
    }else{
       $vector = array();
       $api = new Api();
       $vector = $api->getRiegos();
       $json = json_encode($vector);
       echo $json;
    }
   
}

if($method == "POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $nombre = $data['nombre'];
    $idcultivo = $data['idculti'];
    $nombrecultivo = $data['nombreculti'];
    $fecha = $data['fecha'];
    $horastart = $data['horastart'];
    $horaend = $data['horaend'];
    $api = new Api();
    $json = $api->addRiegos($nombre, $idcultivo, $nombrecultivo, $fecha, $horastart, $horaend);
    echo $json;
}

if($method=="DELETE"){
    $json = null;
    $id = $_REQUEST['idriego'];
    $api = new Api();
    $json = $api->deleteRiegos($id);
    echo $json;
}

if($method == "PUT"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['idriego'];
    $nombre = $data['nombre'];
    $idculti = $data['idculti'];
    $nombreculti = $data['nombreculti'];
    $fecha = $data['fecha'];
    $horastart = $data['horastart'];
    $horaend = $data['horaend'];
    $api = new Api();
    $json = $api->updateRiego($id, $nombre, $idculti, $nombreculti, $fecha, $horastart, $horaend);
    echo $json;
}



?>