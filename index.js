// Write youcr code here!
const mainElement = document.querySelector(`main#main`)
mainElement.remove();
const newHeader = document.createElement(`h1`)
newHeader.setAttribute(`id`,`victory`);
newHeader.innerHTML = `Your Name is the champion`