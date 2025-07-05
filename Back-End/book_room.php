<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');


 $request_method =  $_SERVER['REQUEST_METHOD']; 
                 // ------------------------ ADD NEW RESERVATION --------------- //
  $data = json_decode(file_get_contents("php://input"), true);
   if($request_method == 'POST'){
       require_once "config.php";


    if (!isset($data['username'], $data['email'], $data['check_in'], $data['check_out'], $data['adult'], $data['room_type'] )) {
        echo json_encode(["success" => false, "message" => "Missing require fields"]);
        exit;
    }

    $username = $conn->real_escape_string($data['username']);
    $email = $conn->real_escape_string($data['email']);
    $adult = (int)$data['adult'];
    $children = isset($data['children']) ? (int)$data['children'] : 0;
    $room_type =$data['room_type'];
    $book_state = $data['state'];


  

    if(!preg_match("/^[a-zA-Z ]+$/" ,$username)){
        echo json_encode(["success" => false ,"message" => "username must be contain letter only (no numbers or symbols)" ]);
        exit;
    }

    if(!filter_var($data['email'] , FILTER_VALIDATE_EMAIL)){
        echo json_encode(["success" => false , "message" => "invalid email address"]);
        exit;
    }


    $check_in = strtotime($data['check_in']);
    $check_out = strtotime($data['check_out']);
    if($check_in >= $check_out){
        echo json_encode(["success" => false, "message" =>"Check-out date must be after the check-in date"]);
        exit;
    }

    $check_in_formatted = date("Y-m-d" , $check_in);
    $check_out_formatted = date("Y-m-d" , $check_out);

    $checkEmail = $conn->prepare("SELECT id FROM book_room WHERE email = ?");
    $checkEmail->bind_param("s" , $email);
    $checkEmail->execute();
    $checkEmail->store_result();
    if($checkEmail->num_rows() == 3){
        $conn->close();
        echo json_encode(["success" => false, "message" => "This Email Used 3 times Try With Other Email  "]);
        exit;
    }
    

    $sql = "INSERT INTO book_room (username ,email , check_in , check_out , adult , children ,room_type , status )VALUES(? ,? , ? , ?  , ? , ? , ? , ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssiiss", $username, $email,$check_in_formatted, $check_out_formatted , $adult, $children , $room_type , $book_state);
    if ($stmt->execute()){
     
        echo json_encode(["success" => true, "message" => ""]);
        $conn->close();
    }else {
        $conn->close();
        echo json_encode(["success" => false, "message" => "reservation failed"]);
        exit;
    }
                     
}
    


