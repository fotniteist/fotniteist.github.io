const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 45 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas","Basketball Man"];
const insertY = ["The soup kitchen", "Fortnite","The swamp"];
const insertZ = ["combusted","popped","melted","died"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if(customName.value !== ''){
        const name = customName.value;
        newStory = newStory.replace("Steven", name);

    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + "stone";
        const temperature = Math.round((94-32)* 5/9) + "centigrade";
        newStory = newStory.replace(":inserty:", weight);
        newStory = newStory.replace(":insertz:", temperature);
    }

    //make the story new story
    story.textContent = newStory;

    //show story
    story.style.visibility = "visible";

}