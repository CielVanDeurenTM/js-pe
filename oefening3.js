const questions = [
  'Where did Frodo destroy the One Ring?',
  'What is Batman\'s real name?',
  'Which company developed the video game Minecraft?',
  'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
  'Who likes to jump around on his tail in the Winnie The Pooh stories?'];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger'];

function oefening3(){
  document.querySelector('.oefening3').innerHTML ="";
  let yourAnswer = [];
  for (let i = 0; i < questions.length; i++) {
    yourAnswer[i] = prompt(questions[i]);
  }
  for (let i = 0; i < questions.length; i++) {
    if (yourAnswer[i] == answers[i]){
      const newdiv = document.createElement('div');
      newdiv.classList.add( 'card', 'cardbody', 'm-1', 'p-2');
      newdiv.innerHTML ='<h4>' + questions[i] + '</h4>'+'\nYou answered: '+ yourAnswer[i];
      newdiv.style.backgroundColor = "green";
      newdiv.style.textAlign = 'center';
      newdiv.style.color ='white';
      
      document.querySelector('.oefening3').appendChild(newdiv);
    }
    else{
      const newdiv = document.createElement('div');
      newdiv.innerHTML ='<h4>'+ questions[i]+'</h4>'+'You answered: '+ yourAnswer[i] +'<br>'+'correct answer: '+ answers[i];
      newdiv.classList.add( 'card', 'cardbody', 'm-1', 'p-2');
      newdiv.style.backgroundColor = "red";
      newdiv.style.textAlign = 'center';
      newdiv.style.color ='white';
      
      document.querySelector('.oefening3').appendChild(newdiv);
    }
  } 
}