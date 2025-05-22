<?php 
  ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');


require_once "config.php";


if( $_SERVER['REQUEST_METHOD'] != 'POST'){
   echo json_encode(["success" => false , "message" => "invalid request method" ]);
   exit;
}
 $booking_id = $data['id'];
$insertStmt = $conn->prepare("SELECT * FROM book_room WHERE id = ?  ");
$insertStmt->bind_param("i" , $booking_id);
?>