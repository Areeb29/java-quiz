function check(){
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var correct=0;

if(question1=="Islamabad"){
    correct++;
}
if(question2=="Cleverness"){
    correct++;
}

if(question3=="Beiging"){
    correct++;
}


var messages=["Great job dude","You need more practise","What are you doing"]
var pictures=["firt.gif","second.gif","third.gif"]
var range;

if(correct<1){
    range=2
}
if(correct>0 && correct<3){
    range=1
}
if(correct>2){
    range=0
}

document.getElementById("after_sumbit").style.visibility="visible";
document.getElementById("message").innerHTML=messages[range];
document.getElementById("num_correct").innerHTML="You got "+correct+" correct."
document.getElementById("picture").src=pictures[range]

}










