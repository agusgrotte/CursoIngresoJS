
function mostrar()
{
var persona1;
var persona2;
var edad1;
var edad2;
var sumaedad;

persona1 = prompt("ingrese su nombre");
edad1 = prompt("ingrese su edad");
persona2 = prompt("ingrese su nombre");
edad2 = prompt("ingrese su edad");

edad1 = parseInt(edad1);
edad2 = parseInt(edad2);


sumaedad = (edad1 + edad2);

alert("ustedes son "+ persona1 + " y "+ persona2 + " y sus edades son " + edad1 + " y " +edad2+ ", y la suma de sus edades es " + sumaedad);

}
