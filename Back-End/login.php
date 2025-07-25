<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
//config database
require_once 'config.php';

$data = json_decode(file_get_contents("php://input"), true);


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
   
    
    
    $email = htmlspecialchars($data['email']);
    $password = htmlspecialchars($data['password']);
    
    if(empty($email) || empty($password)){
        echo json_encode(["success" => false , "message" => "Missing require fields"]);
        exit;
    }
        $stmt = $conn->prepare("SELECT password , email FROM users WHERE email = ?");
        $stmt->bind_param("s" , $email);
        $stmt->execute();
        $stmt->store_result();

        if($stmt->num_rows() > 0){
            $stmt->bind_result( $hash_password , $email);
            $stmt->fetch();

            if(password_verify($password , $hash_password)){
                session_start();
                $_SESSION['email'] = $email;
                echo json_encode(["success" => true , "message" => "You login with successfully"]);
               
            }else{
                echo json_encode(["success" => false , "message" => "incorrect password" ]);
                exit;
            }
        }else{
            echo json_encode(["success" => false , "message" => "No user found with this email"]);
            exit;
        }
        $stmt->close();
    
}else{
     echo json_encode(["success" => false , "message" => "Invalid request method"]);
     exit;
}

?>