
var hangman=[];
var count;
var wrongAnswer=document.getElementById("wronganswer");
var guess=document.getElementById("letter");
var answerWrite=document.getElementById("answer");
var enter=document.getElementById("enter");
var counter=document.getElementById("counter");




enter.addEventListener('click',function(event)
{
    
    

        var letter=guess.value;
        for(var i=0;i<randomWords.length;i++)

        {
            if(randomWords[i]===letter)
            {
                answer[i]=letter;
            }
            else
            {
                hangman[i]=letter;
            }
        }
        count++;
        counter.innerHTML="No Of Clicks"+count;
        
        var result=answer.join( " " );
        var wrongResult=hangman.join( " " )
        answerWrite.innerHTML=result;
        wrongAnswer.innerHtml=wrongResult;


});


