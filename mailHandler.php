<?php
	// if(isset($_POST['submit'])){
	// 	$name=$_POST['name'];
	// 	$email=$_POST['email'];
	// 	$message=$_POST['message'];

	// 	$to='ehsaanali123@gmail.com'; // Receiver Email ID, Replace with your email ID
	// 	$subject='Form Submission';
	// 	$message="Name :".$name."\n"."Wrote the following :"."\n\n".$message;
	// 	$headers="From: ".$email;

	// 	if(mail($to, $subject, $message, $headers)){
	// 		echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
	// 	}
	// 	else{
	// 		echo "Something went wrong!";
	// 	}
	// }

	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		$email=$_POST['email'];
		$message=$_POST['message'];

		$mailTo = "info@ehsaanali.co.uk";
		$headers = "From: ".$email;
		$txt = "You have received an email from ".$name.".\n\n".$message;


		mail($mailTo, $txt, $headers);
		header("Location: index.html?mailsend");
	}

?>