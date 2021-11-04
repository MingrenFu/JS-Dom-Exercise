// JS Dom Exercise

// Function 1
// How many of the same HTML elements (<p> tags) are on the page:
const elementCounter = () => {
  const paragraphElement = document.getElementsByTagName("p");
  for (let i=0; i<paragraphElement.length; i++) {
    console.log(paragraphElement[i]);
  }
  console.log(paragraphElement.length)
  const elementCount1 = paragraphElement.length;
  document.getElementById("elementCountsDisplay").innerText += `There are ${elementCount1} paragraph tags on this page.`
}

document.getElementById('countElement1').addEventListener('click', e => {
  elementCounter();
})

// Function 2
// How many elements are inside of your first ID (#title is my first ID):
function firstIdElement (){
 console.log(document.querySelectorAll("#title .titleElement").length);
 const elementCount2 = document.querySelectorAll("#title h1").length;
 document.getElementById("firstIdElementDisplay").innerText += `There are ${elementCount2} element inside of the first ID.`
}

document.getElementById('countElement2').addEventListener('click', e => {
  firstIdElement();
})

// Function 3
// How many elements are inside of your second ID (#main_content is my second ID):
function secondIdElement (){
 console.log(document.querySelectorAll("#main_content .mainContentElement").length);
 let elementCount3 = document.querySelectorAll("#main_content .mainContentElement").length;
 document.getElementById("secondIdElementDisplay").innerText += `There are ${elementCount3} elements inside of the second ID.`
}

document.getElementById('countElement3').addEventListener('click', e => {
  secondIdElement();
})
