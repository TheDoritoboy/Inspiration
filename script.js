//https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breed/Affenpinscher/images/random
//not quite right it's a concept
const userAction = async () => 
{
    const breedLoc = document.getElementById("dog-breeds");
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    let breedArray = JSON.parse(myJson);
    
    breedArray.array.forEach(element => 
    {
        i+=0
        elem = document.createElement("option");
        elem.id = 'myID' + i;
        elem.innerHTML = element;
        breedLoc.insertAdjacentElement('afterbegin',elem,document.body.childNodes[0]);
       // < value="reeses">Reeses</option> 
    });

}



  