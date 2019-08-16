
<?php
if (isset($_POST["data"])){
$data = "%{$_POST['data']}%";
$data = trim($data);
$data = htmlspecialchars($data);

if (strlen($data) <=3){
    echo "err";
}

else {
    $host = "mysql.cba.pl";
    $db_user = "filmy99";	
    $db_password = "Pocahontas8899";
    $db_name = "martakaszuba";

$conn = new mysqli($host, $db_user, $db_password, $db_name);
    $conn->set_charset("utf8");
    if ($conn->connect_error){
        echo "err";
        die;
    }
    $stmtpre = $conn->prepare("SELECT * FROM tyt3 WHERE tyt LIKE ?");
    $stmtpre->bind_param("s", $data);
    $stmtpre->execute();
    $result = $stmtpre->get_result();
    if ($result->num_rows === 0) {
        echo "err";
        $stmtpre->close();
        $conn->close();
        die;
    }
    else {
        while ($row = $result->fetch_assoc()) {
			$arr["id"] = $row['id'];
			$arr["tyt"] = $row['tyt'];
            $arr["img"] = $row['img'];
            $arr["rate"] = $row['rate'];
            $arr["link"] = $row['link'];
            $arr["count"] = $row['liczba'];
			$finalArr[] = $arr;
		  }
		    $g = json_encode($finalArr);
		    print_r($g);
            $stmtpre->close();
            $conn->close();
    }
}
}
?>
