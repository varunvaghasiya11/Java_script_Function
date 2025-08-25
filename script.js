// gretting
function gretting(){
    document.write("Good Morning");
}
gretting();

document.write("<br/>");

// area of circle

function circle(r){
    var area = 3.14 * r * r;
    return area;
}

var ans = circle(5);
document.write("area of circle :- ",ans);

document.write("<br/>");

// area of Triangle

function triangle(l,h){
    var area = (l*h)/2;
    return area;
}
var ans = triangle(5,4);
document.write("area of triangle :- ",ans);

document.write("<br/>");

// area of Ractangle

function Ractangle(l,h){
     var area = (l*h);
     return area;
}
var ans = Ractangle(6,5);
document.write("area of ractangle :- ",ans);

document.write("<br/>");

// formula 1

let formula = (a,b,c) => {
    return ((b*b)*(4*a*c))/(2*a);
}
var ans = formula(5,6,7);
document.write("answer of formula :- ",ans);

document.write("<br/>");

// formula 2 (a*a) + (2*a*b) + (b*b)
let formula2 = (a,b) =>{
    return (a*a) + (2*a*b) + (b*b);
}
var ans = formula2(3,4);
document.write("answer of formula2 :- ",ans);

document.write("<br/>");

// F to c

let celsius = (f)=>{
    return (f-32)/1.8;
}
var ans = celsius(50);
document.write("celsius is :- ",ans);

document.write("<br/>");

// C to f

let Fahrenheit = (c)=>{
    return (c*1.8)+32;
}
var ans = Fahrenheit(50);
document.write("Fahrenheit is :- ",ans);

document.write("<br/>");

//even_odd

function even_odd(v){
    if(v%2==0){
        document.write(v+" is Even Number");
    }else{
        document.write(v+" is odd Number");
    }
}
even_odd(4);

document.write("<br/>");

//swap number

function swap(a,b){
    document.write("Before swap "+ a +" & "+ b + "<br/>");
    a = a+b;
    b = a-b;
    a = a-b;
    document.write("After swap "+ a + " & " + b);
}
swap(3,4);