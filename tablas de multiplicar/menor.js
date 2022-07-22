function tablademultiplicar(){
    var a = parseInt(document.Form1.a1.value);
    while(a<1 || a>10);
     for (var i=1; i<=10; i++)
    {
        document.write("     "+a+"x"+i+"="+a*i+"<br>");
    }
    var capa_result=document.getElementById("resultado");
    capa_result.innerHTML= a;
}
