const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const meme =
{
    image: document.getElementById('meme-image'),
    title: document.getElementById('meme-title'),
    author: document.getElementById('meme-author')
}


const categories =   //Esto es un objeto
{
    dogs: 
    {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs'),
    },
    cats: 
    {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats'),
    },
    mices: 
    {
        button: document.getElementById('mices-link'),
        content: document.getElementById('mices'),
    }
}

let dogList =   //Esto es un array de perritos
[
    {
        name: "Chichuahua",
        region: "Mexico",
        description: "A tiny noise dog.",
    },
    {
        name: "Beagle",
        region: "England",
        description: "A medium hunting dog.",
    },
    {
        name: "Pug",
        region: "Germany",
        description: "A small dog.",
    },
    {
        name: "Bulldog",
        region: "Mexico",
        description: "A medium hunting dog.",
    },
    {
        name: "German Shepherd",
        region: "Germany",
        description: "Big dog for farm work.",
    },
    {
        name: "Husky",
        region: "Siberia",
        description: "Big dog for recue work in gelid wather.",
    }
];

let catList =   //Esto es un array de gatitos
[
    {
        name: "Bengala",
        region: "USA",
        description: "A wild and exotic feline like leopards.",
    },
    {
        name: "Persa",
        region: "Italy",
        description: "It has a lot of fur.",
    },
    {
        name: "American Shorthair",
        region: "USA",
        description: "It is less square in shape than British shorthair cat.",
    },
    {
        name: "Siberiano",
        region: "Russia",
        description: "It has long, thick hair with brindle features and colors.",
    },
    {
        name: "Siamés",
        region: "Thailand",
        description: "It has an elegant, slim and flexible body.",
    },
    {
        name: "Angora",
        region: "Turkey",
        description: "It is an intelligent, curious, agile and regularly active cat.",
    }
];

let miceList =   //Esto es un array de roedores
[
    {
        name: "Hamster",
        region: "USA",
        description: "It is a small rodent.",
    },
    {
        name: "Squirrel",
        region: "USA",
        description: "Lives in trees and eats acorns.",
    },
    {
        name: "Gerbil",
        region: "Africa",
        description: "It is herbivorous and nocturnal.",
    },
    {
        name: "Hedgehog",
        region: "Europe",
        description: "Has spikes on the body.",
    },
    {
        name: "Guinea pig",
        region: "India",
        description: "It is a domestic rodent.",
    },
    {
        name: "Rat",
        region: "Africa",
        description: "It is a mostly gray rodent.",
    }
];

categories.dogs.button.onclick = ()=>
{
    //console.log(petList);
    //console.log(petList.innerHTML);

    console.log(dogList);
    if(categories.dogs.content.innerHTML)
    {
        categories.dogs.content.innerHTML = '';
        return;
    }
    dogList.forEach(dog =>
        {
        categories.dogs.content.innerHTML +=
        `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>descripction: ${dog.description}</div>
        </li>`;//ES6 Emacscript 6
        });
}

categories.cats.button.onclick = ()=>
{
    console.log(catList);
    if(categories.cats.content.innerHTML)
    {
        categories.cats.content.innerHTML = '';
        return;
    }
    catList.forEach(cat =>
        {
        categories.cats.content.innerHTML +=
        `<li>
            <span>${cat.name}</span>
            <div>region: ${cat.region}</div>
            <div>descripction: ${cat.description}</div>
        </li>`;//ES6 Emacscript 6
        });
}

categories.mices.button.onclick = ()=>
{
    console.log(miceList);
    if(categories.mices.content.innerHTML)
    {
        categories.mices.content.innerHTML = '';
        return;
    }
    miceList.forEach(mice =>
        {
        categories.mices.content.innerHTML +=
        `<li>
            <span>${mice.name}</span>
            <div>region: ${mice.region}</div>
            <div>descripction: ${mice.description}</div>
        </li>`;//ES6 Emacscript 6
        });
}
const GetMemes = async ()=>
{
    const data = await fetch('https://meme-api.herokuapp.com/gimme');
    const josonData = await data.json();
    const {url, author, nsfw, postLink,  spoiler, subreddit, title} = josonData;//Se puedee desestructurar un jason
    // console.log(data.json());
    meme.title.innerHTML = `title: ${title}`;
    meme.author.innerHTML = `author: ${author}`;
    console.log(author);
    meme.image.src = url;
}
GetMemes();