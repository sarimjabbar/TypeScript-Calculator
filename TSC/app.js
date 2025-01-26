var totalvalue = '';
var target = document.getElementById("target");
function addvalue(value) {
    totalvalue += value;
    target.textContent = totalvalue;
}
function clearDis(value) {
    totalvalue = value;
    target.textContent = totalvalue;
}
function calcul() {
    totalvalue = eval(totalvalue);
    target.textContent = totalvalue;
}
