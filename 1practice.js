function showContent(tabId) {
    // Hide all tab contents
    var tabs = document.getElementsByClassName('content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';
}

// Array of tasks with titles and image sources
var tasks1 = [

    // 4-STARS CHAR

    {
        "title": "Barbara",
        "imageSrc": "img/test.jpg", // Example image source for "home" task
    },
    {
        "title": "Nigguang",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
    },
    {
        "title": "Colei",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
    },
    {
        "title": "Rosaria",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
    },
    {
        "title": "Xingqui",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
    },
    {
        "title": "Bennet",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
    },
    {
        "title": "Razor",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
    },
    {
        "title": "Lisa",
        "imageSrc": "img/test.jpg", // Example image source for "city" task
    },
];

var tasks2 = [
    // 5-STARS
    {
        "title": "Keqing",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
    },
    {
        "title": "Jean",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
    },
    {
        "title": "Ayaka",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
    },
    {
        "title": "Nilou",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
    },
    {
        "title": "Ganyu",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
    },
    {
        "title": "Yoimiya",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
    },
    {
        "title": "Ei",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
    },
    {
        "title": "Navia",
        "imageSrc": "img/test2.jpg", // Example image source for "city" task
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

    // Create an h5 element for the task title
    let title = document.createElement('h5');
    title.innerText = task1.title; // Set the text content
    title.className = 'card-title'; // Set class for styling
    title.style.textAlign = 'center'; // Set center text

    // Create an img element for the task image
    let image = document.createElement('img');
    image.src = task1.imageSrc; // Set the image source
    image.className = 'card-image'; // Set class for styling
    image.style.width = '100%'; // Set width of the image

    // Append title and image elements to the card body
    cardBody.appendChild(title);
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

    // Create an h5 element for the task title
    let title = document.createElement('h5');
    title.innerText = task2.title; // Set the text content
    title.className = 'card-title'; // Set class for styling
    title.style.textAlign = 'center'; // Set center text

    // Create an img element for the task image
    let image = document.createElement('img');
    image.src = task2.imageSrc; // Set the image source
    image.className = 'card-image'; // Set class for styling
    image.style.width = '100%'; // Set width of the image

    // Append title and image elements to the card body
    cardBody.appendChild(title);
    cardBody.appendChild(image);

    // Append card body to the card
    card.appendChild(cardBody);

    // Append card to the card container
    cardContainer2.appendChild(card);

    }

// Function to initialize the list of tasks
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

function smoothScroll(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = event.currentTarget.getAttribute("href"); // Get the target section's id
    const targetSection = document.querySelector(targetId); // Get the target section element

// Scroll to the target section smoothly
targetSection.scrollIntoView({
    behavior: "smooth"
});
}
