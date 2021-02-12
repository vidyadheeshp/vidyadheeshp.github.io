<?php
// the message

$name = $_POST['contact_name'];
$contact_email = $_POST['contact_email'];

$msg = $_POST['contact_message'];
// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("vidyadheeshp@gmail.com","Mail From".$name." - ".$contact_email,$msg);
?>