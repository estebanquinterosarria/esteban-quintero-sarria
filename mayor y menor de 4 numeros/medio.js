function resultado(){
    var a = parseInt(document.Form1.a1.value);
    var b = parseInt(document.Form1.b2.value);
    var c = parseInt(document.Form1.c3.value);
    var d = parseInt(document.Form1.d4.value);

    if(a<=b & a<=c & a<=d){
        document.write(" El numero menor es: "+a+"");
    }
     if(b<=a & b<=c & b<=d){
        document.write("El numero menor es: "+b+"");
    }
     if(c<=a & c<=b & c<=d){
        document.write("El numero menor es: "+c+"");
    }
     if(d<=a & d<=b & d<=c){
        document.write("El numero menor es: "+d+"");
    }
    
    if(a>=b & a>=c & a>=d){
        document.write("El numero mayor es: "+a+"");
    }
     if(b>=a & b>=c & b>=d){
        document.write("El numero mayor es: "+b+"");
    }
     if(c>=a & c>=b & c>=d){
        document.write("El numero mayor es: "+c+"");
    }
     if(d>=a & d>=b & d>=c){
        document.write("El numero mayor es: "+d+"");
    }
    
    if(a==b & a==c & a==d){
        document.write("son iguales: "+a+"");
    }
    
     if(c==a & b==c & b==d){
        document.write("son iguales: "+b+"");
    }
    
     if(c==a & c==b & c==d){
        document.write("son iguales: " +c+"");
    }
    
     if(d==a & d==b & d==c){
        document.write("son iguales: "+d+"");
     }
    }