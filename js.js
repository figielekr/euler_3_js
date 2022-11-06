function runEuler() {
    let a = performance.now();
    let number = parseInt(document.getElementById("theNumber").value);
    let largestPrimeDivide = 1, x;
    let isPrime = Boolean(false);
    for (let i=1; i<=Math.sqrt(number); i=i+2){
        isPrime = true;
        /*console.log(i + " i first loop")*/
        if (number%i===0) {
            /*sprawdzamy czy podzielnik jest pierwszy*/
            for(let j=2; j<i ;j++){
                if (i % j === 0){
                    /*console.log(i + " i second loop")
                    console.log(j + " j second loop")*/
                    isPrime = false;
                    /*j=i-1;*/
                }
        }
            if(isPrime) {
                largestPrimeDivide = i;
                /*console.log(i + " last")*/
            }
        }
/*        console.log(largestPrimeDivide + "najwiekszy dzielnik")
        console.log(i + " i")*/
    }
    let b = performance.now();
    var c = (b-a);
    c = c.toFixed(2)

    document.getElementById("largest-prime").innerHTML=largestPrimeDivide;
    document.getElementById("time").innerHTML=c + " ms";

}