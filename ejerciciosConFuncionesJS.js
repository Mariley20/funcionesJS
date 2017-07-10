
//ejercicios1
console.log("ejercicios1");
function ejercicio1(num){
	var num1 = "'"+num+"'";
	num2 = num1.split("");
	var numInvertido = num1.split("").reverse();
	//console.log(num2 +"_"+numInvertido);
	var c = 0;
	for(var i in num2){
		if(num2[i] != numInvertido[i]){
			c++;
		}
	}
	if(c>0){
		console.log(num +" no es numero capicua \n");
	}else{
		console.log(num +" si es capicua \n");
	}

}
ejercicio1(112211);

//---------------------------------ejercicios 2
console.log("ejercicios2")

function ejercicio2(num1, num2){
	var respuesta = Math.pow(num1, num2);
	return num1 + " ^ " + num2 + " = " +respuesta + "\n";
}
console.log(ejercicio2(2, 3));

//---------------------------------ejercicios3
console.log("ejercicios 3")
function ejercicios3(string, letra){
	var repeticion=0;
	var cadena = string.join("");
	for(i=0;i<cadena.length;i++){
		if(cadena.charAt(i) == letra){
			repeticion++;
		}
	}
	console.log(string);
	console.log("la letra "+letra+ " se repite "+ repeticion+" veces \n");
}
ejercicios3(["murcielago","pato","zebra","caballo"], "a");

//-----------------------------ejericcio 4
console.log("ejercicios 4")
function ejercicio4(string){
	var cadena = string.split(" ");
	var  longitud = cadena.length;
	console.log(string);
	console.log("tiene "+longitud+" palabras \n")
}
ejercicio4("el mundo es tan cruel");

//---------------------------ejercicio 5
console.log("ejercicios 5")
function ejercicio5(string){
	var maximo = 0; 
	for (var i = 0; i < string.length; i++) {
		var longitud = string[i].split("").length;
		maximo = Math.max(maximo, longitud);
	}
	console.log(string);
	console.log("La palabra mas larga contiene "+maximo + " letras \n");
}
ejercicio5(["gato", "perro", "cocodrilo", "leon"]);

//---------------------------------------------------ejercicios 6
console.log("ejercicios 6")
function ejercicio6(string){
	var vocales = ["a", "e", "i", "o", "u"];
	var repeticion=0;
	var cadena = string.join("");
	for(var i in vocales){
		for(var j in cadena){
			if(cadena.charAt(j) == vocales[i]){
				repeticion++;
			}
		}
	}
	console.log(string);
	console.log("contiene "+ repeticion+" vocales \n");
}

ejercicio6(["ojo", "mouse", "lapiz"]);

//-----------------------------------------------------ejercicios 7
console.log("ejercicios 7")
function ejercicio7(numInicio, numFin){
	var numInicio = Math.min(numInicio, numFin);
	var sumar = 0;
	for(var i = numInicio; i <= numFin; i++){
		if(i % 2 != 0){
			sumar += i;
		}
	}
	console.log("La suma de los numeros impares ("+numInicio+" a "+numFin+") es "+sumar+"\n");
}
ejercicio7(1, 7);

//----------------------------------------------ejercicio 8
console.log("ejercicios 8")
function ejercicio8(string){
	var maximo = 0; 
	for (var i = 0; i < string.length; i++) {
		var longitud = string[i].split("").length;
		maximo = Math.max(maximo, longitud);
	}
	var palabraLarga = string.filter(function(i){
		var a = i.split("").length;
		return maximo == a;
	});
	console.log(string);
	console.log("es la palabra mas larga "+palabraLarga+" \n");
}

ejercicio8(["jirafa", "leon", "gato","murcielago", "rata"])

//------------------------------------------------------ejercicio 9

console.log("ejercicios 9");

function ejercicio9(string){
	var invertido = string.split("").reverse();
	console.log(string+" invertido diria "+invertido.join("")+" \n");
}

ejercicio9("roma");

//------------------------------------ejercicios 10

console.log("ejercicios 10")

function ejercicio10(num){
	var linea = "";
	
	for(var i = num; i > 0; i--){
		var comillas = "/";
		for(var j = 0; j < i; j++){
			linea += "_";
			comillas += "'";
		}
		linea += comillas + "\\";
	}
console.log("si yo digo "+num + " sale \n"+linea)
}
ejercicio10(4)