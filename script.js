//https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breed/Affenpinscher/images/random
//not quite right it's a concept
const userAction = async () => 
{
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    var breedArray = JSON.parse(myJson);
    return breedArray
}



  