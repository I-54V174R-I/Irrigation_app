<?php
class Conexion
{
    public function getCon()
    {
        $host = "localhost";
        $db = "irrigacion";
        $user = "root";
        $pass = "";
        $db = new PDO("mysql:host=$host;dbname=$db;" , $user, $pass);
        return $db;
    }
}
?>