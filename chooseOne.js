var courses = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

var courses = { "4": ['1','2','3','4'], "6": ['1','2','3','4','5','6'], "10": ['1','2','3','4','5','6','7','8','9','10'], "16": ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'], "20": ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']}
 

function chooseOne(course) {
  var thisClass = courses[course];

  var n = thisClass.length;
  var which = Math.floor(Math.random() * n);

  print('Chosen: ' + thisClass[which]);

