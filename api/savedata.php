<?php

include 'connection.php';

$query = "INSERT INTO `formdata` (`formdata`) VALUES ('".addslashes(str_replace(array('\r\n', '\r', '\n', '\t'),"",json_encode($_POST['dataToBeSent'])))."')";

if(mysql_query($query)){
	$result['isDataSaved'] = true;
	echo json_encode($result);
}else{
	$result['isDataSaved'] = false;
	echo json_encode($result); 
}
?>