function calculate(a, b) {
    if (a < 0 || b > 10500 || isNaN(a) || isNaN(b)|| a+b>999999) {
        return false;
    }
    return a + b;
}
function minus(a,b) {
    if(a<b || isNaN(a)|| isNaN(b)){
        return false;
    }
    return a-b;
}
function divide(a,b) {
    if(b==0||a<=0){
        return false;
    }
    return a/b;

}