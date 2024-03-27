// Function to show content based on tabId
function showContent(tabId) {
    // Construct the full URL using window.location.origin and the relative path from the link property
    let fullUrl = window.location.origin + tabId;
    
    // Navigate to the constructed URL
    window.location.href = fullUrl;
}

// Array of tasks with titles and image sources
var tasks1 = [

    // 4-STARS CHAR

    {
        "title": "Barbara",
        "imageSrc": "img/test.jpg", // Example image source for "home" task
        "link": "./All Characters/Barbara/Overview/index.html#barbara"
    },
    {
        "title": "Nigguang",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
        "link": "#nigguang"
    },
    {
        "title": "Colei",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
        "link": "#colei"
    },
    {
        "title": "Rosaria",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
        "link": "#rosaria"
    },
    {
        "title": "Xingqui",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
        "link": "#xingqui"
    },
    {
        "title": "Bennet",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
        "link": "#bennet"
    },
    {
        "title": "Razor",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
        "link": "#razor"
    },
    {
        "title": "Lisa",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
        "link": "#lisa"
    },
];

var tasks2 = [
    // 5-STARS
    {
        "title": "Keqing",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#keqing"
    },
    {
        "title": "Jean",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#jean"
    },
    {
        "title": "Ayaka",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#ayaka"
    },
    {
        "title": "Nilou",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#nilou"
    },
    {
        "title": "Ganyu",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#ganyu"
    },
    {
        "title": "Yoimiya",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#yoimiya"
    },
    {
        "title": "Ei",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#ei"
    },
    {
        "title": "Navia",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
        "link": "#navia"
    }

];

// Variable to hold the container for task cards
let cardContainer1;
let cardContainer2;

// Function to create a task card and append it to the card container
let createTaskCard1 = (task1) => {

    // Create a div element for the card
    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer'; // Set class for styling

    // Create a div element for the card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body'; // Set class for styling
    card.style.width = '13rem'; // Set width of the card
    card.style.marginRight = 'auto'; // Set right-margin of the card
    card.style.marginBottom = '15px'; // Set bottom-margin of the card

    // Create an anchor element for the clickable title
    let titleLink = document.createElement('a');
    titleLink.innerText = task1.title; // Set the text content   
    titleLink.href = task1.link; // Set the link URL (you can replace '#' with your desired URL)
    titleLink.className = 'card-title'; // Set class for styling
    titleLink.style.textDecoration = 'none';
    titleLink.style.textAlign = 'center'; // Center the text

    // Create an img element for the task image
    let image = document.createElement('img');
    image.src = task1.imageSrc; // Set the image source
    image.className = 'card-image'; // Set class for styling
    image.style.width = '100%'; // Set width of the image

    // Append title and image elements to the card body
    cardBody.appendChild(titleLink);
    cardBody.appendChild(image);

    // Append card body to the card
    card.appendChild(cardBody);

    // Append card to the card container
    cardContainer1.appendChild(card);

}
    
let createTaskCard2 = (task2) => {

    // Create a div element for the card
    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer'; // Set class for styling

    // Create a div element for the card body
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body'; // Set class for styling
    card.style.width = '13rem'; // Set width of the card
    card.style.marginRight = 'auto'; // Set right-margin of the card
    card.style.marginBottom = '15px'; // Set bottom-margin of the card

    // Create an anchor element for the clickable title
    let titleLink = document.createElement('a');
    titleLink.innerText = task2.title; // Set the text content 
    titleLink.href = task2.link; // Set the link URL (you can replace '#' with your desired URL)
    titleLink.className = 'card-title'; // Set class for styling
    titleLink.style.textDecoration = 'none';
    titleLink.style.textAlign = 'center'; // Center the text
    
    
    // Create an img element for the task image
    let image = document.createElement('img');
    image.src = task2.imageSrc; // Set the image source
    image.className = 'card-image'; // Set class for styling
    image.style.width = '100%'; // Set width of the image

    // Append title and image elements to the card body
    cardBody.appendChild(titleLink);
    cardBody.appendChild(image);

    // Append card body to the card
    card.appendChild(cardBody);

    // Append card to the card container
    cardContainer2.appendChild(card);

    }

//Function to initialize the list of tasks
let initListOfTasks1 = () => {
    // Check if cardContainer already exists
    if (cardContainer1) {
        // If it exists, replace it with the existing one
        document.getElementById('card-container1').replaceWith(cardContainer1);
        return;
    }

    // Get the card container element from the DOM
    cardContainer1 = document.getElementById('card-container1');

    // Set CSS grid layout for the card container
    cardContainer1.style.display = 'grid';
    cardContainer1.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Arrange in 4 columns
    cardContainer1.style.padding = '30px'; // Center the cards horizontally


    // Iterate through the tasks array and create a card for each task
    tasks1.forEach((task1) => {
        createTaskCard1(task1);
    });
};

let initListOfTasks2 = () => {
    // Check if cardContainer already exists
    if (cardContainer2) {
        // If it exists, replace it with the existing one
        document.getElementById('card-container2').replaceWith(cardContainer2);
        return;
    }

    // Get the card container element from the DOM
    cardContainer2 = document.getElementById('card-container2');

    // Set CSS grid layout for the card container
    cardContainer2.style.display = 'grid';
    cardContainer2.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Arrange in 4 columns
    cardContainer2.style.padding = '30px'; // Center the cards horizontally


    // Iterate through the tasks array and create a card for each task
    tasks2.forEach((task2) => {
        createTaskCard2(task2);
    });
};

// Call the initListOfTasks function to initialize the list of tasks
initListOfTasks1();
initListOfTasks2();

document.querySelectorAll('.card-title').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        // Extract the tab ID from the href attribute
        let tabId = item.getAttribute('href').substring(1);
        showContent(tabId); // Call the showContent function with tabId
    });
});