<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET , POST , PUT , DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require_once 'config.php';


if($_SERVER['REQUEST_METHOD'] == 'GET'){
    
    //send statistics data to front-end 
    
       // select all rows to get data
    $query = "SELECT * FROM book_room";
    $statistics = $conn->query($query);
    
        //initialization statistics variables
        $numberOfClient = 0 ;
        $numberOfAdult = 0 ;
        $numberOfChildren = 0;
        $successReservation = 0;
        $deletedReservation = 0 ;
        $pendingReservation = 0;
        
        if($statistics->num_rows > 0){
    
            while($row = $statistics->fetch_assoc()){
                $numberOfClient++;
                $numberOfAdult += $row['adult'];
                $numberOfChildren += $row['children'];

                if($row['status'] == "Confirmed"){
                    $successReservation++;
                }
                if($row['status'] == "Deleted"){
                    $deletedReservation++;
                }
                if(strtolower($row['status']) == "pending"){
                    $pendingReservation++;
                }

        }

    
        echo json_encode([
            "clientNumber"=> $numberOfClient,
            "adultNumber"=> $numberOfAdult,
            "childrenNumber"=> $numberOfChildren,
            "successReservation"=> $successReservation,
             "deletedReservation"=> $deletedReservation,
             "pendingReservation"=>$pendingReservation,
          
        ]);
      }

}else{
    echo json_encode([ "success"=>false ,"message" => "Invalid Request method "]);
    exit;
}
?>