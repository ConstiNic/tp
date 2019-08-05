var ArEur= 49.53;
var ArDol=44.53;
var EurDol=0.9;
var EurRu =79.14;
var DolRu = 70.82;
var ArRu= 1.56;
var bot;
var rupias=1.59;
if (typeof bot !== null) {
/*rec1*/function Euro1(valNum) {

document.getElementById("output1").innerHTML=valNum / ArEur + " euros";
}

    
/*rec3*/function Euro2(valNum) {

document.getElementById("output2").innerHTML=valNum * EurDol + " euros";
}
 /*rec9_5*/function Euro3(valNum) {

document.getElementById("output9").innerHTML=valNum /EurRu  + " euros";
}
   

/*rec2*/ function Dolar1(valNum) {

document.getElementById("output3").innerHTML=valNum / ArDol + " dolares";
}

/*rec3_5*/function Dolar2(valNum) {

document.getElementById("output3_5").innerHTML=valNum / EurDol + " dolares";
}

/*rec9*/function Dolar3(valNum) {

document.getElementById("output9_5").innerHTML=valNum / DolRu + " dolares";
}


/*rec4*/function Peso1(valNum) {

document.getElementById("output4").innerHTML=valNum * ArEur + " pesos";
}

    /*rec5*/function Peso2(valNum) {

document.getElementById("output5").innerHTML=valNum * ArDol + " pesos";
}
/*rec8*/function Peso3(valNum) {

document.getElementById("output8").innerHTML=valNum / ArRu + " pesos";
}

/*rec10*/function Rupia1(valNum) {

document.getElementById("output10").innerHTML=valNum * ArRu + " rupias";
}

/*rec7*/function Rupia2(valNum) {

document.getElementById("output7").innerHTML=valNum * DolRu + " rupias";
}

/*rec6*/function Rupia3(valNum) {

document.getElementById("output6").innerHTML=valNum * EurRu + " rupias";
}

    
    
}