function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/745z9mb8O/model.json', modelReady);


}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
    console.error;
}