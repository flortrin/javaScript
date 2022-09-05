const sumar = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2);
    }
    const dividir = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2);
    }
    const multiplicar = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2);
    }
    const restar = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2);
    }
    alert("¿que operación deseas realizar?");
    let operacion = prompt("1:suma, 2: división, 3: multiplicación, 4: resta");
    
    let numero1 = prompt("primer número");
    let numero2 = prompt("segundo número");

    if(operacion == 1){
        resultado = sumar(numero1,numero2)
        alert(`tu resultado es ${resultado}`);
    }
    
    else if(operacion == 2){
        resultado = dividir(numero1,numero2)
        alert(`tu resultado es ${resultado}`);
    }
    
    else if(operacion == 3){
        resultado = multiplicar(numero1,numero2)
        alert(`tu resultado es ${resultado}`);
    }
    else if(operacion == 4){
        resultado = restar(numero1,numero2)
        alert(`tu resultado es ${resultado}`);
    
    }
    
    else{
        alert("no se encontro la operación");
    }

    let resultadoNum = 'El resultado es';
    let num = 0;
    
    do {
    num = num + 1;
    resultadoNum = resultadoNum + num;
    } while (num < 30);
    
    console.log(resultadoNum);
    
    let frase = "Septiembre" + "<br>";
    let n = 1;
    while (n < 30 ) 
	{ 
	frase += "<br>" +  n + "<br>"; 
	n++;
	}
    document.writeln(frase);

 let trabajo = "240 minutos de trabajo";
 let estudio = "100 minutos de estudio";
 let tps = "100 minutos de limpieza";
 let tareas = "30 minutos de tareas";
 let descanso = "10 minutos de descanso";
 
 console.log("TAREAS");
 for (var i = 0; i < 14; i++){
     if (i == 0){
         console.group("semana 1")
     }
 console.groupCollapsed("dia " + (i+1));
 console.log("trabajo");
 console.log("descanso");
 console.log("estudio");
 console.log("limpieza");
 console.log("tareas");
 console.groupEnd();
 if (i == 6){
         console.groupEnd();
         console.groupCollapsed("semana 2")
     }
 }
 
 
 console.groupEnd();
 console.groupEnd();
 
 