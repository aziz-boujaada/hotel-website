<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
require_once 'config.php';
$data = json_decode(file_get_contents("php://input"), true);
if ($_SERVER['REQUEST_METHOD'] ===  'POST') {

  if (!isset($data['username'], $data['email'], $data['password'], $data['confirm_password'])) {
    echo json_encode(["success" => false, "message" => "Missing require fields"]);
    exit;
  }


  $username = htmlspecialchars($data['username']);
  $email = htmlspecialchars($data['email']);
  $password  = htmlspecialchars($data['password']);
  $confirm_password = htmlspecialchars($data['confirm_password']);

  if (!preg_match("/^[a-zA-Z ]+$/", $username)) {
    echo json_encode(["success" => false, "message" => "username must contain letters only (No Numbers or Symbols) "]);
    exit;
  }

  if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "invalid email address"]);
    exit;
  }

  if (strlen($password) < 8) {
    echo json_encode(["success" => false, "message" => "Password too short, enter password longer than 8 characters"]);
    exit;
  }

  if ($confirm_password != $password) {
    echo json_encode(["success" => false, "message" => "password not match , enter the correct password"]);
    exit;
  }



  $checkEmail = $conn->prepare("SELECT id FROM users WHERE email = ?");
  $checkEmail->bind_param("s", $email);
  $checkEmail->execute();
  $checkEmail->store_result();
  if ($checkEmail->num_rows() > 0) {
    $conn->close();
    echo json_encode(["success" => false, "message" => "This email already exist"]);
    exit;
  }

  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  $sql = "INSERT INTO users ( username , email , password) VALUES (? , ? , ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $username, $email, $hashed_password);



  if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "You Registered successfully "]);
    $conn->close();
  } else {
    $conn->close();
    echo json_encode(["success" => false, "message" => "register failed "]);
  }
} else {
  echo json_encode(["success" => false, "message" => "Invalid Request Method"]);
}
