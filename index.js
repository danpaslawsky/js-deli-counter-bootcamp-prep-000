
function takeANumber(katzDeliLine, newPerson){
   katzDeliLine.push(newPerson);
   return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
 }
 
function nowServing(katzDeliLine){
   var lineFirst = "Currently serving";
   if (katzDeliLine.length > 0){
     var firstPerson = `${lineFirst} ${katzDeliLine[0]}.`;
        katzDeliLine.shift();
        return firstPerson;

   }
   else{
     return `There is nobody waiting to be served!`;
 }
}

function currentLine(line){
  var currentLine = "The line is currently: ";
  var count = 0;
  
for(var i = 0; i < line.length; ++i)
  if (line.length > 0){
    var katzLine = `${currentLine} ${line}`;
    return katzLine;
  
    
  }
  else{
    return `The line is currently empty.`;
  }
}