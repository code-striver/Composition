let sandNode = document.getElementById('sandcounter')
let cementNode = document.getElementById('cementcounter')
let rodiNode = document.getElementById('rodicounter')
let cementPlus = document.getElementById('cementplus')
let cementMinus = document.getElementById('cementminus')
let sandPlus = document.getElementById('sandplus')
let sandMinus = document.getElementById('sandminus')
let rodiPlus = document.getElementById('rodiplus')
let rodiMinus = document.getElementById('rodiminus')
let ghaanButton = document.getElementById('ghaan')
let sandCounter = 0;
let cementCounter = 0;
let rodiCounter = 0;

cementPlus.addEventListener('click', function (){
    addMaterial("cement")
});
cementMinus.addEventListener('click', function(){
    removeMaterail("cement")
})

sandPlus.addEventListener('click', function(){
    addMaterial("sand")
})
sandMinus.addEventListener('click', function(){
    removeMaterail("sand")
})

rodiPlus.addEventListener('click', function(){
    addMaterial("rodi")
})
rodiMinus.addEventListener('click', function(){
    removeMaterail("rodi")
})

ghaanButton.addEventListener('click', ghanOver)

function addMaterial(material){
    if(material == "cement"){
        cementCounter+=1;
        return cementNode.innerHTML = cementCounter;
    }
    else if(material == "sand"){
        sandCounter += 1;
        return sandNode.innerHTML = sandCounter;
    }
    else if(material == "rodi"){
        rodiCounter += 1
        return rodiNode.innerHTML = rodiCounter
    }
}

function removeMaterail(material){
    if(material == "cement"){
        cementCounter -= 1;
        return cementNode.innerHTML = cementCounter;
    }
    else if(material == "sand"){
        sandCounter -= 1;
        return sandNode.innerHTML = sandCounter;
    }
    else if(material == "rodi"){
        rodiCounter -= 1;
        return rodiNode.innerHTML = rodiCounter;
    }
}

function ghanOver(){
    location.reload()
}
