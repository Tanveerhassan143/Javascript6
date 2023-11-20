alert("welcome")
document.write("<h1>Table</h1>")
var a = prompt("enter the numbr for table")
var b = prompt("enter the length of table")

for (var n = 1; n <= a; n++) {
    for (var n = 1; n <= b; n++) {
        for (var c = a * n; c <= a * n; c++) {
            document.write(a + "x" + n + "<br>"  + "=" + c+ "<br>")
        }
    }

}
document.write("<br>")
document.write("<hr>")
document.write("<h1>Counting</h1>")

var a = prompt("enter the numbr for Counting")
for (var n = 1; n <= a; n++) {
    document.write(n + "<br>");
}





// Revecing counting

document.write("<br>")
document.write("<hr>")
document.write("<h1>Revcing Counting</h1>")

var a = prompt("Enter the numbr for Revercing Counting")
for (var n = 15; n >= a; n--) {
    document.write(n + "<br>");
}


document.write("<br>")
document.write("<hr>")
document.write("<h1>Even number</h1>")

var a = 17
for (var n =2; n <= a; n+=2) {
    document.write(n + "<br>");
}



document.write("<br>")
document.write("<hr>")
document.write("<h1>series number</h1>")

var a = 20
for (var n =2; n <= a; n+=2) {
    document.write(n+"K" +"," );
}






