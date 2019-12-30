function msg(){
   
   var n= prompt("Enter The Number : ")
   var i,a=0,b=1 ,f=1;
   document.write("0,1")
   for(i=1;i<=n;i++)
   {
	   f=a+b;
	   a=b
	   b=f
       document.write(",",f);
   }
   
}