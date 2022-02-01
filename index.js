



function scuberGreetingForFeet(distance) {

  if (distance <= 199) {
    return 'This one is on me!'
  } else if (distance >= 200 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (distance > 2500) {
    return 'No can do.'
  } 
}


function ternaryCheckCity(NYC) {
  // Write your code here!

  return NYC == 'NYC' ? "Ok, sounds good." : "No go.";
  
   


}

function switchOnCharmFromTip(tip) {

  switch (tip) {
    case 'generous':
      return 'Thank you so much.';

    case 'not as generous':
      return 'Thank you.';

    case 'thanks for everything':
      return 'Bye.';


  }

}

