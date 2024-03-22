
var n=31
if(n<=30) {
    console.log("nao pode casar")
}   else { 
    console.log("pode casar")
} 
    const prompt= require("prompt-sync")({sigint:true});
    var num1=Number(prompt("digite o num1"));
    var num2=Number(prompt("digite o num2"));
    var num3=Number(prompt("digite o num3"));
         if(num1>=num2&&num1>=num3){
            maior=num1;
            console.log("O maior numero eh ", num1)
        }   else if (num2>=num1&&num2>=num3){
            maior=num2;
            console.log("O maior numero eh ", num2)
        }   else {
            maior=num3;
            console.log("O maior numero eh ", num3)
    
        return console.log("o maior numero e" + maior);
        }