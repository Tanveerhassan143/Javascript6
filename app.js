alert("welcome") 
document.write("<h1>Cc0 116850 Tanveer Hassan</h1>")
document.write("<hr>")
document.write("<br>")
document.write("<h1>Table</h1>")
var a = prompt("enter the numbr for table")
var b = prompt("enter the length of table")

for (var n = 1; n <= a; n++) {
    for (var n = 1; n <= b; n++) {
        for (var c = a * n; c <= a * n; c++) {
            document.write(a + "x" + n + "<br>" + "=" + c + "<br>")
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





// Revercing counting

document.write("<br>")
document.write("<hr>")
document.write("<h1>Revercing Counting</h1>")

var a = prompt("Enter the numbr for Revercing Counting")
for (var n = 15; n >= a; n--) {
    document.write(n + "<br>");
}


document.write("<br>")
document.write("<hr>")
document.write("<h1>Even number</h1>")


for (var a = 1; a <= 20; a++) {
    if (a % 2 == 0) {
        document.write(a + "<br>");

    }
}



document.write("<br>")
document.write("<hr>")
document.write("<h1>Even number</h1>")


for (var a = 1; a <= 20; a++) {
    if (a % 2 != 0) {
        document.write(a + "<br>");
    }
}




document.write("<br>")
document.write("<hr>")
document.write("<h1>series number</h1>")

var a = 20
for (var n = 2; n <= a; n += 2) {
    document.write(n + "K" + ",");
}







