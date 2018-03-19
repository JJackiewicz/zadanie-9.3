var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', dinosaurUpperCase);

console.log(newText.slice(0, newText.length /2));