var courses = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

var courses = { "4sides": ['1','2','3','4'], "cmp112": ['Thaddeus Albert','Dan Amador','Bruce Anderson','Zachary Aring','Benjamin Davisson','Jace Horner','Carl Jones','Kyle Lowtharp','Declan McCarron','Collin Mullis','Yemi Ogunbameru','Andrew Ribicki','Christian Sexton','Houston Shimala','Ryan Slipher','Jared Smith','Ashlee Troop'], "cmp344": ['Craig Austgen','Daniel Davis','Dylan Gainey','Lucas Grube','Eric Heinzman','Katelyn Herre','Phillip Hofer','Andrew Klump','Ryan Postma','Nathan Samano','Danilo Zekovic'], "cmp341": ['Craig Austgen','Lucas Grube','Eric Heinzman','Phillip Hofer','Nathan Samano','Danilo Zekovic']}
 

function chooseOne(course) {
  var thisClass = courses[course];

  var n = thisClass.length;
  var which = Math.floor(Math.random() * n);

  print('Chosen: ' + thisClass[which]);

