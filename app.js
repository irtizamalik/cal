<!DOCTYPE html>
<!-- saved from url=(0051)file:///C:/Users/Tajirz/Desktop/aniq%20c/index.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./Document_files/style.css">
</head>
<body>


    <h1>کیلکولیٹر</h1>
    <div class="conatiner">

        <div class="cal-box">
   
        <form name="calculator">
   
       <input id="display" type="text" name="display" placeholder="0" readonly="">
   
       <br>
   
       <input class="button" type="button" value="7" onclick="calculator.display.value +=&#39;7&#39;">
       <input class="button" type="button" value="8" onclick="calculator.display.value +=&#39;8&#39;">
       <input class="button" type="button" value="9" onclick="calculator.display.value +=&#39;9&#39;">
       <input class="button mathbutton" type="button" value="+" onclick="calculator.display.value +=&#39;+&#39;">
         
       <br>
   
       <input class="button" type="button" value="4" onclick="calculator.display.value +=&#39;4&#39;">
       <input class="button" type="button" value="5" onclick="calculator.display.value +=&#39;5&#39;">
       <input class="button" type="button" value="6" onclick="calculator.display.value +=&#39;6&#39;">
       <input class="button mathbutton" type="button" value="-" onclick="calculator.display.value +=&#39;-&#39;">
   
       <br>
   
       <input class="button" type="button" value="1" onclick="calculator.display.value +=&#39;1&#39;">
       <input class="button" type="button" value="2" onclick="calculator.display.value +=&#39;2&#39;">
       <input class="button" type="button" value="3" onclick="calculator.display.value +=&#39;3&#39;">
       <input class="button mathbutton" type="button" value="x" onclick="calculator.display.value +=&#39;*&#39;">
         
       <br>
   
       <input class="button clearbutton" type="button" value="c" onclick="calculator.display.value =&#39;&#39;">
       <input class="button" type="button" value="0" onclick="calculator.display.value +=&#39;0&#39;">
       <input class="button mathbutton" type="button" value="=" onclick="calculator.display.value = eval 
       (calculator.display.value)">
       <input class="button mathbutton" type="button" value="/" onclick="calculator.display.value +=&#39;/&#39;">
   
       <br>
   
        </form>    

</div></div></body></html>