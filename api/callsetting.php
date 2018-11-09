<?php

include 'connection.php';

$query = "SELECT 
		`users`.`userid`,
		`users`.`name`,
		`users`.`email`,
		`users`.`hash`,
		`phonenumber`.`pid`,
		`phonenumber`.`phonenumber`,
		`phonenumber`.`SID`,
		`phonenumber`.`numbertype`
		 FROM users join phonenumber ON `users`.`userid` = `phonenumber`.`userid`
		 WHERE `users`.`hash` ='".mysql_real_escape_string($_POST['uhash'])."' and `phonenumber`.`SID` = '".mysql_real_escape_string($_POST['usid'])."' ";


// check for the return row here if they are greater than 1

if($row=mysql_query($query)){

	if($r_row = mysql_fetch_row($row)){
		$result['status'] = true;
		echo json_encode($result);	
	}

}
else
{
	$result['status'] = false;
	echo json_encode($result); 
}


?>