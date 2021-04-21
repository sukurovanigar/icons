var Nummer = document.getElementById("number").value;
function findFactors(num) {
    var res = [];
    for (var i = 2; i <= num; i++) {
        if (!(num % i)) {
            res[res.length] = i;// Es zeigt wie viel kan man ein Zahl teilen (Factoren)
        }
    }
    return res;
}
function test(n){
   var n = Nummer;
var i=[];
var a=0;
if(!(n % 2)){
    return false;
    // n/2==a;
    // i[i.length]+=a;
}else{
    return true;
    // 3n+1==a;
    // i[i.length]+=a;
}return ;
}
