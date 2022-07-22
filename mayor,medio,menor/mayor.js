function resultado() {
    var a = parseInt(document.Form1.a1.value);
    var b = parseInt(document.Form1.b2.value);
    var c = parseInt(document.Form1.c3.value);
    
   
    if(a<b & b<c){
	
        document.write(" menor:"+a+""); // LO QUE SE MUESTRA EN PANTALLA , VARIABLE QUE SE INGRESA POR TECLADO
        document.write(" intermedio:"+b+""); // LO QUE SE MUESTRA EN PANTALLA , VARIABLE QUE SE INGRESA POR TECLADO
        document.write(" mayor:"+c+"");} // LO QUE SE MUESTRA EN PANTALLA , VARIABLE QUE SE INGRESA POR TECLADO
        else if(a<c & c<b){ // SI A ES MENOR QUE C Y C ES MENOR QUE B
        
        document.write(" menor"+a+"");
        document.write(" intermedio"+c+"")
        document.write(" mayor"+b+"");}
        else if(c<a & a<b){ //SI C ES MENOR QUE Y A ES MENOR QUE B
            
        document.write(" menor"+c+"");
        document.write(" intermedio"+a+"");
        document.write(" mayor"+b+"");}
        else if(b<a & a<c){//SI B ES MENOR A Y A ES MENOR QUE C 
        
        document.write(" menor" +b+"");
        document.write(" intermedio"+a+"");
        document.write(" mayor"+c+"");}
        else if(b<c & c<a){ //SI B ES MENOR QUE C Y C ES MENOR QUE A 
        
        document.write(" menor"+b+"");
        document.write(" intermedio"+c+"");
        document.write(" mayor"+a+"");}
        else if(c<b & b<a){ //SI C ES MENOR QUE B Y B ES IGUAL QUE A
        
        document.write(" menor:"+c+"");
        document.write(" intermdio"+b+"");
        document.write(" mayor"+a+"");}

        if(a==b & b==c){ //SI A ES IGUAL QUE B O B ES IGUAL QUE C HAGGA ESTA ACCION
	
            document.write("son igual:"+a+"");} // LO QUE SE MUESTRA EN PANTALLA , VARIABLE QUE SE INGRESA POR TECLADO
        
            else if(a==c & c==b){
            
            document.write("son igual :"+b+"");}
            
            else if(c==a & a==b){
                
            document.write("son igual:"+c+"");}
            
            
            else if(b==a & a==c){
            
            document.write("son igual:"+a+"");}
        
            
            else if(b==c & c==a){
            
            document.write("son igual:"+b+"");}
            
            
            else if(c==b & b==a){
            
            document.write("son igual:"+c+"");}
        
        
    
        }