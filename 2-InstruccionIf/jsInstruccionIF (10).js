function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom = Math.floor((Math.random() * 10) + 1);
	if(numeroRandom >= 9)
	{
		alert("Se saco un " + numeroRandom + " EXCELENTE.");
	}
	
	if((numeroRandom >= 4) && (numeroRandom < 9))
			{
			alert("Se saco un " + numeroRandom + " APROBO.");
			}
			else
			{
			alert("Se saco un " + numeroRandom + " Vamos, la proxima se puede.");
			}
	


}//FIN DE LA FUNCIÓN