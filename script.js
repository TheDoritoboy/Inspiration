//https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breed/Affenpinscher/images/random
//allows drop down menu to be up t odate if new categories are added
window.onload = async function dropDownAsync()
{
//Dog API
    const response = await fetch('https://dog.ceo/api/breeds/list/all'); //get API http response  (for the breeds)
    const myJson = await response.json(); //extract JSON from the http response
    const breedArray = Object.keys(myJson.message);
    const options = breedArray.map(e=>{return `<option value="${e}">${e}</option>`}) // create option tag to go into the select
    document.getElementById("dog-breeds").innerHTML = options; //insert new option into select

//Chuck Noris API
    const responseChuck = await fetch('https://api.chucknorris.io/jokes/categories'); //get API http response (for the breeds)
    const myJsonChuck = await responseChuck.json(); //extract JSON from the http response
    const ChuckArray = JSON.parse(JSON.stringify(myJsonChuck));
    const optionsChuck = ChuckArray.map(e=>{return `<option value="${e}">${e}</option>`}) // create option tag to go into the select
    document.getElementById("chuck-cat").innerHTML = optionsChuck; //insert new option into select

}

    async function inspirationData () {
    const dogInput = "https://dog.ceo/api/breed/" + document.getElementById("dog-breeds").value + "/images/random";
    const chuckInput = "https://api.chucknorris.io/jokes/random?category=" + document.getElementById("chuck-cat").value;
    const dogImgSrc = await fetch(dogInput);
    const myJsonDog = await dogImgSrc.json();
    const chuckJokeSrc = await fetch(chuckInput);
    const myJsonChuck = await dchuckJokeSrc.json();
}

function inspirationButton () {
    const dogImg = document.getElementById("pup").setAttribute(src , inspirationData.dogImgSrc);
    
}


  