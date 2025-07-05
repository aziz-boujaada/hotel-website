 <?php
 
 header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
 
$data = json_decode(file_get_contents("php://input") , true);
$request_method = $_SERVER['REQUEST_METHOD'];

if($request_method == 'GET'){
   require_once 'config.php';
      $selectedBook = "SELECT * FROM book_room";
   $selectToUpdate = $conn->query($selectedBook);

   $reservation = [] ;
    if($selectToUpdate->num_rows > 0){
       while($row = $selectToUpdate->fetch_assoc()){
        $reservation[] = [
        "id"=> $id =  $row['id'],
       "username"=> $username = $row['username'],
        "email"=> $mail = $row['email'],
       "check_in"=> $check_in_formatted = $row['check_in'],
        "check_out"=>$check_out_formatted = $row['check_out'],
        "adult"=>$adult = $row['adult'],
        "children"=>$children = $row['children'],
        "room_type"=>$room_type = $row['room_type'],
        "state"=>$status = $row['status'],
        ];
       }
       echo json_encode(["success"=> true , "data"=> $reservation ]);
    }else{
        echo json_encode(["success"=> false , "message" => "No reservation found" ]);
    }
 }
 elseif($request_method == 'PUT'){
 require_once 'config.php';
 
     if (!isset ($data['id'], $data['username'], $data['email'], $data['check_in'], $data['check_out'], $data['adult'], $data['room_type'])) {
        echo json_encode(["success" => false, "message" => "Missing required fields for update"]);
        exit;
    }

    $id = (int)$data['id'];
    $username = $conn->real_escape_string($data['username']);
    $email = $conn->real_escape_string($data['email']);
    $adult = (int)$data['adult'];
    $children = isset($data['children']) ? (int)$data['children'] : 0;
    $room_type = $conn->real_escape_string($data['room_type']);
    $book_state = $conn->real_escape_string($data['state'] ?? "pending");

    if (!preg_match("/^[a-zA-Z ]+$/", $username)) {
        echo json_encode(["success" => false, "message" => "Username must contain letters only"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email address"]);
        exit;
    }

    $check_in = strtotime($data['check_in']);
    $check_out = strtotime($data['check_out']);
    if ($check_in >= $check_out) {
        echo json_encode(["success" => false, "message" => "Check-out must be after check-in"]);
        exit;
    }

    $check_in_formatted = date("Y-m-d", $check_in);
    $check_out_formatted = date("Y-m-d", $check_out);
     

    $stmt = $conn->prepare("UPDATE book_room SET username = ? , email = ? , check_in = ? , check_out = ? , adult = ? , children = ? ,room_type = ? , status = ?  WHERE id = ? ");
    $stmt->bind_param("ssssiissi" , $username , $email, $check_in_formatted , $check_out_formatted , $adult , $children , $room_type , $book_state , $id);

      if($stmt->execute()){
        echo json_encode(["success" => true , "message" => "Booking update successfully"]);
      }else{
        echo json_encode(["success" => false , "message" => "failed to update booking"]);
      }
}else{
    
    echo json_encode([ "success"=>false ,"message" => "Invalid Request method (put)"]);
    exit;
}
?>