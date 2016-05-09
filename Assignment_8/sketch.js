/**
 * by Allison Parrish
 */
var RiTa = require('rita');
var lexicon = new RiTa.RiLexicon();
var rita = RiTa.RiTa;
var colorFrom, colorTo;
var rectStep = 10;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Click for fun", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(205,43,29);
  textAlign(CENTER, CENTER);
  var output = "There was a" + " " +
    lexicon.randomWord("jj") + " " + 
    lexicon.randomWord("nn") +  
    " in a tree, Whose " +
    lexicon.randomWord("nns") + " " + 
    "were lovely to see; " +
    "But the " + 
    lexicon.randomWord("nns") + " " +
    "of the air " +
    lexicon.randomWord("vbd") + " " +
    "them perfectly bare, " + " " +
    "To make themselves " +
    lexicon.randomWord("nns") + " " +
    "on that " + 
    lexicon.rhymes('tree')[3];
  text(output, 10, 10, width-20, height-20);
}
  

 
/*

function getNnRhyme(word) {
  var rhymes = lexicon.rhymes(word);
  return _.filter(rhymes, function(rhyme) {
    // only return rhymes that are tagged 'jj' (adjectives)
    return rita.getPosTags(rhyme)[0] === 'nn';
  });
}
*/

 /*There was an old man in a tree,
 Whose whiskers were lovely to see;
   But the birds of the air,
   Pluck'd them perfectly bare,
 To make themselves nests on that tree.*/
