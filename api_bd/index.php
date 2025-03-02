<?php
require_once('conexion.php');
require_once('api.php');
require_once('cors.php');
//obteniedo el metodo http
$method = $_SERVER['REQUEST_METHOD'];

if($method == "GET") {
    if(!empty($_GET['idcultivo'])){
       $id = $_GET['idcultivo'];
       $json = null;
       $api = new Api();
       $vector = $api->getCultivo($id);
       $json = json_encode($vector);
       echo $json; 
    }else{
       $vector = array();
       $api = new Api();
       $vector = $api->getCultivos();
       $json = json_encode($vector);
       echo $json;
    }
   
}

if($method == "POST"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $nombrecultivo = $data['nombrecultivo'];
    $descripcion = $data['descripcion'];
    $api = new Api();
    $json = $api->addCultivos($nombrecultivo, $descripcion);
    echo $json;
}

if($method=="DELETE"){
    $json = null;
    $id = $_REQUEST['idcultivo'];
    $api = new Api();
    $json = $api->deleteCultivo($id);
    echo $json;
}

if($method == "PUT"){
    $json = null;
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['idcultivo'];
    $nombrecultivo = $data['nombrecultivo'];
    $descripcion = $data['descripcion'];
    $api = new Api();
    $json = $api->updateCultivo($id, $nombrecultivo, $descripcion);
    echo $json;
}



?>