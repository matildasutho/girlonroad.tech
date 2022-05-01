//function to open four new windows before proceeding to the next page
let funcArr = [
    function() {
        window.open("https://www.youtube.com/watch?v=Yo-lRAdQxFg", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=000,width=600,height=400");
        window.open("https://www.youtube.com/watch?v=H2REsVGanRw", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=200,left=0,width=400,height=300");
        window.open("corral.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=-200,right=0,width=300,height=200");
    },
    function() {
        window.open("spiral.html", "_self", "");
    }
];

let i = 0;

window.onload = function() {
    let btn = document.getElementsByTagName('a')[0];
    btn.onclick = function() {
        funcArr[i++ % funcArr.length](); // first call function and then, increment the value of i
    }
}