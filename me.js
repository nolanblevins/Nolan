me.js

<!DOCTYPE html>
<html>
<body>

<h1>External JavaScript</h1>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p><strong>Note:</strong> myFunction is stored in an external file called "myScript.js".</p>

<script src="myScript.js"></script>

</body>
</html>




<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html> 




<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Statements</h1>

<p>Statements are separated by semicolons.</p>

<p>The variables x, y, and z are assigned the values 5, 6, and 11:</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>




<!DOCTYPE html>
<html>
<body>

<h1>My Web Page</h1>

<p id="myPar">I am a paragraph.</p>
<div id="myDiv">I am a div.</div>


<p>
<button type="button" onclick="myFunction()">Try it</button>
</p>

<script>
function myFunction() {
    document.getElementById("myPar").innerHTML = "Hello Dolly.";
    document.getElementById("myDiv").innerHTML = "How are you?";
}
</script>

<p>When you click on "Try it", the two elements will change.</p>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h1 id="myH"></h1>
<p id="myP"></p>

<script>

document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

<p><strong>Note:</strong> The comment block is not executed.</p>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Operators</h1>

<p>The + operator concatenates (adds) strings.</p>

<p id="demo"></p>

<script>
var txt1 = "John";
var txt2 = "Doe";
document.getElementById("demo").innerHTML = txt1 + " " + txt2;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>the join() method joins array elements into a string.</p>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Click the button to get a time-based greeting:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
document.getElementById("demo").innerHTML = greeting;
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
}
document.getElementById("demo").innerHTML = "Today is " + day;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 2;
var len = cars.length;
var text = "";

for (; i < len; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>The typeof operator returns the type of a variable, object, function or expression.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
    typeof "john" + "<br>" +
    typeof 3.14 + "<br>" +
    typeof NaN + "<br>" +
    typeof false + "<br>" +
    typeof [1,2,3,4] + "<br>" +
    typeof {name:'john', age:34} + "<br>" +
    typeof new Date() + "<br>" +
    typeof function () {} + "<br>" +
    typeof myCar + "<br>" +
    typeof null;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Search a string for "w3Schools", and display the position of the match:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var str = "Visit W3Schools!"; 
    var n = str.search(/w3Schools/i);
    document.getElementById("demo").innerHTML = n;
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>

<p>
Activate debugging in your browser (Chrome, IE, Firefox) with F12, and select "Console" in the debugger menu.
</p>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html> 


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
</script>

</body>
</html> 


<!DOCTYPE html>
<html>
<body>

<p>Local "use strict" declaration.</p>

<p>Activate debugging in your browser to see the error report.</p>

<script>
y= 3.14;         // This will not cause an error.
myFunction();    // This will cause an error.

function myFunction() {
    "use strict";
    x = 3.14;
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<h1>My Web Page</h1>

<p>
The best place to break a code line is after an operator or a comma.
</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
    "Hello Dolly.";
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Setting a default value to a function parameter.</p>
<p id="demo"></p>

<script>
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }    
    return x * y;
}
document.getElementById("demo").innerHTML = myFunction(4);
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var x = 10;
var y = "5";
var z = x + y;
document.getElementById("demo").innerHTML = z;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var obj;
obj = document.getElementById("demo");
obj.innerHTML = " Hello";
</script>

</body>
</html> 


<!DOCTYPE html>
<html>
<body>

<h2>Create Object from JSON String</h2>

<p id="demo"></p>

<script>
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
</script>
</head>
<body>

<form name="myForm" action="demo_form.asp"
onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" min="100" max="300">
<button onclick="myFunction()">OK</button>

<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    } 
} 
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Creating a JavaScript Variable.</p>

<p id="demo"></p>

<script>
var person = "John Doe";
document.getElementById("demo").innerHTML = person;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>You can add new properties to existing objects.</p>

<p id="demo"></p>

<script>
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
person.nationality = "English";
document.getElementById("demo").innerHTML =
person.firstname + " is " + person.nationality + ".";
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Creating and using an object method.</p>

<p>An object method is stored as a function definition,
in an object property.</p>

<p id="demo"></p>

<script>
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.fullName();
</script>
</body>
</html>

<!DOCTYPE html>
<html>
<body>

<p>This example calls a function which performs a calculation, and returns the result:</p>

<p id="demo"></p>

<script>
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Setting a default value to a function parameter.</p>
<p id="demo"></p>

<script>
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }    
    return x * y;
}
document.getElementById("demo").innerHTML = myFunction(4);
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>
The global function (myFunction) returns the product of the arguments (a ,b):
</p>

<p id="demo"></p>

<script>
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(10, 2); 
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>A global function like myFunction() automatically becomes a window method.</p>

<p>myFunction() is the same as window.myFunction().</p>

<p id="demo"></p>

<script>
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = window.myFunction(10, 2); 
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>myObject.fullName() will return John Doe:</p>

<p id="demo"></p>

<script>
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
document.getElementById("demo").innerHTML = myObject.fullName(); 
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>A function can access variables defined inside the function:</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<p id="demo"></p>

<script>
function myFunction() {
    var a = 4;
    document.getElementById("demo").innerHTML = a * a;
} 

</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Counting with a local variable.</p>

<button type="button" onclick="myFunction()">Count!</button>

<p id="demo">0</p>

<script>
function add() {
    var counter = 0;
    return counter += 1;
}

function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Counting with a local variable.</p>

<button type="button" onclick="myFunction()">Count!</button>

<p id="demo">0</p>

<script>
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
"Screen width is " + screen.width;
</script>

</body>
</html>
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
"Available screen height is " + screen.availHeight;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
"Screen pixel depth is " + screen.pixelDepth;
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Are cookies enabled in your browser?</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML =
    "Cookies enabled is " + navigator.cookieEnabled;
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Click the button to display an alert box:</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    alert("I am an alert box!");
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a confirm box.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x;
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Click the button to demonstrate the prompt box.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<p>Click "Try it". Wait 3 seconds. Your page will alert "Hello".</p>

<p>When you close the alert box, an new alert box will appear in 3 seconds.</p>

<p>This will go on forever, until you close the window.</p>

<button onclick="setInterval(function(){alert('Hello')},3000);">Try it</button>

</body>
</html>


<!DOCTYPE html>
<html>
<head>
<script>

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

</script>
</head>
<body onload="checkCookie()">
</body>
</html>


<!DOCTYPE html>
<html>
<head>
<script
src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">
</script>
<script>
function myFunction() {
    $("#h01").html("Hello jQuery")
    }
$(document).ready(myFunction);
</script>
</head>
<body>
<h1 id="h01"></h1>
</body>
</html> 


<!DOCTYPE html>
<html>
<head>
<script
src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">
</script>
<script>
function myFunction() {
    $("#h01").attr("style","color:red").html("Hello jQuery")
}
$(document).ready(myFunction);
</script>
</head>
<body>
<h1 id="h01"></h1>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
<script
src="http://ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js">
</script>
<script>
function myFunction() {
    $("h01").insert("Hello Prototype!");
}
Event.observe(window, "load", myFunction);
</script>
</head>
<body>
<h1 id="h01"></h1>
</body>
</html> 
   