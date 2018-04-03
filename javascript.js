function Add() {
	document.Compute.show.value +="+";
	//document.Compute.show.style.textAlign="right";

}
function Subtract() {
	document.Compute.show.value +='-';

}
function Multiply() {
	document.Compute.show.value +='*';

}
function Divide(){
    document.Compute.show.value +='/';
}
function Cancel(){
    document.Compute.show.value = "";
    document.Compute.out.value = "";
}
function Square(a){
	a = Number(a)
	var b = Number(b);
	b = a*a;
	document.Compute.out.value = (b);

}
function Sine(){
	document.Compute.show.value +='sin(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function sin(value){
	value = Number(value);
	var output = Math.sin(value * Math.PI/180);
	return output;
	//document.Compute.out.value = (output);
}
function Cosine(){
	document.Compute.show.value +='cos(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function cos(value){
	value = Number(value);
	var output = Math.cos(value * Math.PI/180);
	return output;
	//document.Compute.out.value = (output);
}
function Tangent(){
	document.Compute.show.value +='tan(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function tan(value){
	value = Number(value);
	var output = Math.sin(value * Math.PI/180) / Math.cos(value * Math.PI/180);
	return output;
	//document.Compute.out.value = (output);
}
function Logarithm(){
	document.Compute.show.value +='log(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function log(value){
	value = Number(value);
	var output = Math.log(value);
	return output;
	//document.Compute.out.value = (output);
}
function SquareRoot(){
	document.Compute.show.value +='sqrt(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function sqrt(value){
	value = Number(value);
	var output = Math.sqrt(value);
	return output;
	//document.Compute.out.value = (output);
}
function SinInv(){
	document.Compute.show.value +='sininvr(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function sininvr(value){
	value = Number(value);
	var output = Math.asin(value * Math.PI /180);
    output = output * Math.PI / 180;
	return output;
	//document.Compute.out.value = (output);
}
function CosInv(){
	document.Compute.show.value +='cosinvr(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function cosinvr(value){
	value = Number(value);
	var output = Math.acos(value * Math.PI/180);
	return output;
	//document.Compute.out.value = (output);
}
function TanInv(){
	document.Compute.show.value +='cos(';
	//document.Compute.out.value += Math.sin(document.Compute.show.value * Math.PI/180);
}
function taninvr(value){
	value = Number(value);
	var output = Math.atan(value*Math.PI/180);
	return output;
	//document.Compute.out.value = (output);
}
function BlowUpWhiteHouse(){}
