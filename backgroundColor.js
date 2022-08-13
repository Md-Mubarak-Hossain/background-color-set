
// for background color
function set_background() {
    const paragraphs = document.getElementsByTagName('p');
    let i = prompt('Give your paragraph no,which paragraph background want to change:')
    let choiseColor = prompt('Enter your paragraph background color:');
    let firstparagraph = paragraphs[i];
    firstparagraph.style.backgroundColor = choiseColor;


}
// for heading text color
function set_headingColor() {
    const heading = document.getElementsByTagName('h1');
    let i = prompt('Enter the heading no which heading style do you want to change:')
    let choiseColor = prompt('Enter heading color: ')
    let heading1 = heading[i];
    heading1.style.color = choiseColor;
}

// function set_background() {
//     // now, get all the p elements in the document
//     const paragraphs = document.getElementsByTagName("p");

//     // get the second paragraph from the list
//     const secondParagraph = paragraphs[1];

//     // set the inline style
//     secondParagraph.style.background = "red";
// }
