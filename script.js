function calculateWeight(){

let tailLength = document.getElementById("tailLength").value;

if(tailLength === ""){
document.getElementById("output").innerText = "Enter tail length";
return;
}

tailLength = parseFloat(tailLength);

let weight = -48.79 + (2.17 * tailLength);

document.getElementById("output").innerText =
"Estimated Weight: " + weight.toFixed(2) + " kg";

}
