// Generate a motivational, Joke and
const motivateTitle = [
  "Get up and do ",
  "Shake your self and ",
  "Just don't think about it and ",
];
const jokeTitle = [
  "Why was the math book sad?",
  "How do you organize a space party?",
  "Why couldn't the bicycle stand up by itself?",
];
const bookAnswer = [
  " Because it never could find X",
  " Because it is alone!",
  " Because it is't history",
];
const spacePartyAnswer = [
  " You have to planet in advance!",
  "Make sure to invite all the aliens and let them know it's out of this world.",
  "Just make sure your guests don't comet over-dressed or under-dressed!",
];
const bicycleAnswer = [
  "It was too tired!",
  "Because it was two-tired to even try.",
  "The bike was just trying to give its kickstand some exercise!",
];
const motivate1 = ["Hustle", "Accomplish", "Execute"];
const motivate2 = ["Move", "Groove", "Dance"];
const motivate3 = ["Act", "Jump", "React"];
const makeSentence = () => {
  let sentence1 = "";
  let sentence2 = "";
 
  const first = Math.floor(Math.random() * 3);
  console.log(first);
  sentence1 += motivateTitle[first];
  sentence2 += jokeTitle[first];
 
  if (first == 0) {
    const chooseFromBook = Math.floor(Math.random() * 3);
    sentence2 += bookAnswer[chooseFromBook]
  }else if(first == 1){
    const chooseFromSpaceParty = Math.floor(Math.random() * 3)
    sentence2 += spacePartyAnswer[chooseFromSpaceParty]
  }else if(first == 2){
    const chooseFromBicycle = Math.floor(Math.random() * 3)
    sentence2 += bicycleAnswer[chooseFromBicycle]
  }
  if (first == 0) {
    const chooseFromMotivate1 = Math.floor(Math.random() * 3);
    sentence1 += motivate1[chooseFromMotivate1]
  }else if(first == 1){
    const chooseFromMotivate2 = Math.floor(Math.random() * 3)
    sentence1 += motivate2[chooseFromMotivate2]
  }else if(first == 2){
    const chooseFromMotivate3 = Math.floor(Math.random() * 3)
    sentence1 += motivate3[chooseFromMotivate3]
  }
  console.log(sentence1)
  console.log(sentence2)
};
makeSentence();
