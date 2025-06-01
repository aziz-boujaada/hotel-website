<?php 
  ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require_once "config.php";
if ($_SERVER['REQUEST_METHOD'] != 'PUT') {
    echo json_encode([ "success"=>false ,"message" => "Invalid Request method (put)"]);
    exit;
}
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email'], $data['state'])) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$new_status = $conn->real_escape_string($data['state']);

$stmt = $conn->prepare("UPDATE book_room SET status = ? WHERE email = ?");
$stmt->bind_param("ss", $new_status, $email);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Status updated successfully" ,"status"=> $new_status]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to update status"]);
}
$conn->close();
exit;

?>