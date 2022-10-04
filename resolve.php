<?php
   if(!$_GET['id']) {
       echo "error";
   } else {
       $id = $_GET['id'];
       $establishCon = @mysqli_connect("cmslamp14","nearmiss", "cHz4n3armiss2022", "nearmiss");
   
       $updateQuery = "UPDATE `nearMissFormData` SET `caseStatus` = 'Resolved' WHERE `nearMissID` = '$id'";
       $updateData = mysqli_query($establishCon, $updateQuery);
       
       if($updateData) {
           echo "<script>alert('You have successfully resolved this near-miss case!')</script>";
           echo "<script>location.href='adminpage.php'</script>";
           //header("location:adminpage.php"); 
       } else {
           echo "error";
       }
   }
   ?>