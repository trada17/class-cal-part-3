function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText-num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText-num;
    }
    else{
        document.getElementById("output-value").innerText-getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleSrting("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replae(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
if(this.id=="clear"){
    printHistory("");
    printOutput("");
}
else if(this.id=="backspace"){
    var output=reverseNumberFormat(getOutput()).toString();
    if(output){//if output has a value
        output= output.substr(0,output.lenght-1);
        printOutput(output);
    }
}
else{
    var output=getOutput();
    var history=getHistory();
    if(output==""&&history!=""){
        history= history.substr(0,history.lenght-1);
    }
}
   
    if(output!="" || history!=""){
        output= output==""?output:reverseNumberFormat(output);
        history-history+output;
        if(this.id=="="){
            var result=eval(history);
            printOutput(result);
            printHistory("");
        }
        else{
            history=history+this.id;
            printHistory(history);
            printOutput
        }
    }
});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){//if output is a number
            output=output+this.id;
            printOutput(output);
        }
    });
}