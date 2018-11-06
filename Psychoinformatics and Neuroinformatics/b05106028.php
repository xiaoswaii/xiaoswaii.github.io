<!DOCTYPE html>
<html>
<head>
</head>
<body>
<?php
$t1_response=$_POST["t1_response"];
$t2_response=$_POST["t2_response"];
$t3_response=$_POST["t3_response"];
$t1_rt=$_POST["t1_rt"];
$t2_rt=$_POST["t2_rt"];
$t3_rt=$_POST["t3_rt"];
$counter = 0;
$ans = ($t1_rt + $t2_rt +$t3_rt)/3;
if($t1_response=="diff"){
	$counter++;
}
if($t2_response=="same"){
	$counter++;
}
if($t3_response=="same"){
	$counter++;
}
echo "正確率";
echo (($counter/3)*100);
echo "%";
echo "<br>";
echo "平均毫秒：",$ans,"ms";
?>
</body>
</html>
