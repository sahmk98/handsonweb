
function mul(a) {
    return function (b){
        return function (c) {
            return a*b*c;
        }
    }
}
document.querySelector('button').addEventListener('click',()=>{
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = document.getElementById('num3').value;
    

    let x= mul(a)(b)(c);
    console.log(x);

    let h1 = document.createElement('h1');
    h1.innerText=x;
    document.getElementById('output').appendChild(h1);
   
});


