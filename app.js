$(document).ready(function() {
  $("#text-to-be-analysed").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-text");
    wordCounter(userInput);
      
  })

function wordCounter(content) {

	var wordCount = $(content).val().split(" ");
    $("dd.wordCount").html(wordCount.length);       
    
    
            
    function uniqueWords(value, index, array) { 
      return array.indexOf(value) === index;
      }
    
    var unique = wordCount.filter(uniqueWords); 
    $("dd.uniqueWordCount").html(unique.length); 
  
    
    var charCount = $(content).val().replace(/ /g,'').length;
    var averageWord =charCount/wordCount.length;
    $("dd.averageWordLength").html(averageWord.toFixed(0));
    
    var sentenceArray = $(content).val().split('\n');
    var sentenceCount = sentenceArray.length;
    var averageSentence =wordCount.length/sentenceCount;
    console.log(sentenceCount);
    console.log(averageSentence);
    
    $("dd.averageSentence").html(averageSentence.toFixed(0));



}
 })

        