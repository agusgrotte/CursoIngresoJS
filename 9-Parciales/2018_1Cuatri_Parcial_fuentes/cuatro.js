function mostrar()
{
var productos;
var precio;
var formadepago;
tarjeta = parseInt(tarjeta);
precio = parseInt(precio);
var tarjeta = 





productos= prompt("¿Cuantos productos compro?");
precio= prompt("ingrese el valor del producto");
formadepago= prompt("¿efectivo o tarjeta?");


if((productos = 1) && (formadepago == "tarjeta"))
	{
		alert("debe pagar con recargo " + tarjeta);
	}
if((productos = 1) && (formadepago == "efectivo"))

{

alert("debe pagar "+ precio);
	
}





}
