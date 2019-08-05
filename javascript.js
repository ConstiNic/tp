var Euros= 49.53;
var Dolars=44.53;
var bot;

if (typeof bot!== null) {
/*rec1*/function Euro1(valNum) {

document.getElementById("output1").innerHTML=valNum / Euros + " euros";
}

    
/*rec3*/function Euro2(valNum) {

document.getElementById("output2").innerHTML=valNum * 0.90 + " euros";
}
    
}
/*rec2*/ function Dolar1(valNum) {

document.getElementById("output3").innerHTML=valNum / Dolars + " dolares";
}

/*rec3_5*/function Dolar2(valNum) {

document.getElementById("output3_5").innerHTML=valNum / 0.90 + " dolares";
}


/*rec4*/function Peso1(valNum) {

document.getElementById("output4").innerHTML=valNum * Euros + " pesos";
}




/*rec5*/function Peso2(valNum) {

document.getElementById("output5").innerHTML=valNum * Dolars + " pesos";
}


/*<div id="registro"> 
    <h1>Registro</h1>
    <table border="5" id="table">
    <tr id="tabla_arriba">
      <td bgcolor="gainsboro">x</td>    
        
    </tr>
        <tr id="tabla_abajo">
      <td bgcolor="gainsboro">w</td>    
        
    </tr>
    </table>
    </div>*/
