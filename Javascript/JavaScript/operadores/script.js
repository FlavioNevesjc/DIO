/*function inicio()
{*/
    var rN1 = 'menor';
    var rN2 = 'menor';
    var n1 = Number(prompt("Digitar o 1 numero: "));
    var n2 = Number(prompt("Digitar o 2 numero: "));
    var res = n1+n2;
    comparacao(n1,n2);
/*} */   


function comparacao(n1,n2)
{
    if (n1 === n2)
    {
        console.log("Numeros digitados são iguais, digitar novamente outros numeros.");
       /* inicio(); */
    }
    else
    {
        if ((n1+n2) >= 10)
        {
            rN1 = 'maior';
        }
        if ((n1+n2) >= 20)
        {
            rN2 = 'maior';
        }
        console.log("Os numeros "+ n1 +" e "+ n2 +" o não são iguais. Sua soma é "+ res +". Que é "+ rN1 +" que 10 e "+ rN2 +" que 20");
    }
}