var result = (function(sentence){
var square = Math.sqrt(sentence.length);
var row = Math.round(square);
var column = Math.ceil(square);
console.log(row);
console.log(sentence);
var newArray =[];
var count = 0;
for(var i=1;i<column;i++){
for(var j=count;j<sentence.length; j+=row){
newArray.push(sentence[j]);}
var count= count+1;
}