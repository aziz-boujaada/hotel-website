<?php



 require_once __DIR__ . '/vendor/autoload.php';
 $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
 $dotenv->load();

 if($_SERVER['REQUEST_METHOD']== 'OPTIONS'){
   header("Access-Control-Allow-Origin:*");
   header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
   header("Access-Control-Allow-Headers: Content-Type");
   exit;
}
   $host = $_ENV['DB_HOST'];
   $username= $_ENV['DB_USERNAME'];
   $password = $_ENV['DB_PASSWORD'];
   $nameDb = $_ENV['DB_NAME'];

   $conn = new mysqli($host , $username , $password , $nameDb);
   if($conn->connect_error){
      die(json_encode(["success" => false , "message" => "database connection failed"]));
   }

?>