
function getRandomInt(min,max){
   min=Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max-min) + min);
  
}

function getMax(array){
  var max= array[0];

  for(i=0;i <array.length; i++)

      if( max < array[i])
          max=array[i];

      return max;
}

function getMin(array){

  var min= array[0];

  for(i=0;i <array.length; i++)

      if(array[i] < min)
          min=array[i];

      return min;
}

function getRandomArray(length , min , max){

  var array= new Array(length);
  var i=0;
 
  while(i < length){
 
     array[i]= getRandomInt(min, max);
     i++;
  }
  return array;
 }

 array = getRandomArray(6,0,100);

 for(let i=0 ; i < array.length ; i++){
  document.writeln(array[i] + "<br>");
}

var arraySorted= array.sort(function(a,b){
  return (a-b)
});

document.writeln("<br>" + "Here are the numbers sorted: " +  arraySorted );


