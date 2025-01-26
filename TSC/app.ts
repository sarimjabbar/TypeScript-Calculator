var final:any = '';
var target:any = document.getElementById("target");
function addvalue(value:string) {
    final += value;
    target.textContent = final;
}
 
function calc() {
    final = eval(final);
    target.textContent = final;
}
 