//https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breed/Affenpinscher/images/random
//allows drop down menu to be uptodate if new breeds are added to the API
window.onload = async function dogAsync()
{
    const response = await fetch('https://dog.ceo/api/breeds/list/all'); //get API http response (for the breeds)
    const myJson = await response.json(); //extract JSON from the http response
    const breedArray = JSON.parse(JSON.stringify(myJson.message));

    const options = breedArray.map(e=>{return `<option value="${e}">${e}</option>`}) // create option tag to go into the select
    document.getElementById("dog-breeds").innerHTML = options; //insert new option into select
}

//https://api.chucknorris.io/
//https://api.chucknorris.io/jokes/categories
window.onload = async function chuckAsync()
{
    const response = await fetch('https://api.chucknorris.io/jokes/categories'); //get API http response (for the breeds)
    const myJson = await response.json(); //extract JSON from the http response
    const ChuckArray = JSON.parse(JSON.stringify(myJson));

    const options = ChuckArray.map(e=>{return `<option value="${e}">${e}</option>`}) // create option tag to go into the select
    document.getElementById("chuck-cat").innerHTML = options; //insert new option into select
}



  