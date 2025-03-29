let text3;
function thirdInput(){
    text3 = prompt("Enter the third number: ");
}

function isArmstrong(x){
    let strx = x.toString();
    let len = strx.length;
    let sum=0;
    for(let i=0;i<len;i++){
        sum += Number(strx[i])**len;
    }
    return sum==x
}

function isPrime(x){
    if(x<2) return false;
    if(x==2) return true;
    if(x%2==0) return false;

    let flag = true;
    for(let i=2;i<x;i++){
        if(x%i===0){
            flag=false;
            break;
        }
    }
    return flag;
}
function isRamanujanNumber(x) {
    let count = 0;

    for (let a = 1; a * a * a < x; a++) {
        let b = Math.cbrt(x - a * a * a);  x

        if (b > a && Number.isInteger(b)) { 
            count++;
        }

        if (count === 2) { 
            return true;
        }
    }

    return false;
}



function run(){

    let text1 = document.getElementById("one").value;
    let num1 = parseInt(text1);

    let text2  = document.getElementById("two").value;
    let num2 = parseInt(text2);

    let num3 = parseInt(text3);
    
    let results = [
        { num: num1, prime: isPrime(num1), armstrong: isArmstrong(num1), ramanujan: isRamanujanNumber(num1) },
        { num: num2, prime: isPrime(num2), armstrong: isArmstrong(num2), ramanujan: isRamanujanNumber(num2) },
        { num: num3, prime: isPrime(num3), armstrong: isArmstrong(num3), ramanujan: isRamanujanNumber(num3) }
    ];

    let output = "";

    results.forEach((res, index) => {
        output += `Number ${index + 1}: ${res.num}\n`;
        output += ` - Prime: ${res.prime}\n`;
        output += ` - Armstrong: ${res.armstrong}\n`;
        output += ` - Ramanujan: ${res.ramanujan}\n\n`;
    });


    let outputBox = document.getElementById("output");
    if (!outputBox) {
        let newTextbox = document.createElement("textarea");
        newTextbox.id = "output";
        newTextbox.rows = 10;
        newTextbox.cols = 40;
        document.body.append(newTextbox);
        outputBox = newTextbox;
    }
    outputBox.value = output;

    alert(output);

    document.writeln("<pre>" + output + "</pre>");
}
    