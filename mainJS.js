
function smoothScroll(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = event.currentTarget.getAttribute("href"); // Get the target section's id
    const targetSection = document.querySelector(targetId); // Get the target section element

// Scroll to the target section smoothly
targetSection.scrollIntoView({
    behavior: "smooth"
});
}

function createTaskCards(task1, task2) {
    // Function to create a task card
    function createCard(task) {
        let card = document.createElement('a');
        card.className = 'card';
        card.style.width = '13rem';
        card.style.marginRight = 'auto'; 
        card.style.marginBottom = '15px'; 
        card.href = task.link;

        let title = document.createElement('a');
        title.innerText = task.title;
        title.style.fontFamily = 'sans-serif';
        title.style.marginTop = '5px';
        title.style.textAlign = 'center';

        let image = document.createElement('img');
        image.src = task.imageSrc;
        image.alt = task.title;

        card.appendChild(title);
        card.appendChild(image);

        return card;
    }

    // Function to append task cards to the container
    function appendCards(container, tasks) {
        tasks.forEach(task => {
            let card = createCard(task);
            container.appendChild(card);
        });
    }

    // Get the card containers
    let cardContainer1 = document.getElementById('card-container1');
    let cardContainer2 = document.getElementById('card-container2');

    // Set CSS grid layout for card containers
    cardContainer1.style.display = 'grid';
    cardContainer1.style.gridTemplateColumns = 'repeat(4, 1fr)';
    cardContainer2.style.display = 'grid';
    cardContainer2.style.gridTemplateColumns = 'repeat(4, 1fr)';
    cardContainer1.style.padding = '25px';
    cardContainer2.style.padding = '25px'; 

    // Append task cards to the respective containers
    appendCards(cardContainer1, task1);
    appendCards(cardContainer2, task2);
}


var task1 = [
    {
        "title": "Barbara",
        "imageSrc": "img/test.jpg",
        "link": "Characters/All Characters/Barbara/barbara.html#barbara"
    },
    {
        "title": "Nigguang",
        "imageSrc": "img/test.jpg", 
        "link": "#nigguang"
    },
    {
        "title": "Colei",
        "imageSrc": "img/test.jpg", 
        "link": "#colei"
    },
    {
        "title": "Rosaria",
        "imageSrc": "img/test.jpg", 
        "link": "#rosaria"
    },
    {
        "title": "Xingqui",
        "imageSrc": "img/test.jpg", 
        "link": "#xingqui"
    },
    {
        "title": "Bennet",
        "imageSrc": "img/test.jpg", 
        "link": "#bennet"
    },
    {
        "title": "Razor",
        "imageSrc": "img/test.jpg", 
        "link": "#razor"
    },
    {
        "title": "Lisa",
        "imageSrc": "img/test.jpg",
        "link": "#lisa"
    },
    
];

var task2 = [
    {
        "title": "Keqing",
        "imageSrc": "img/test2.jpg",
        "link": "Characters/All Characters/Keqing/keqing.html#keqing"
    },
     {
         "title": "Jean",
         "imageSrc": "img/test2.jpg",
         "link": "#jean"
     },
     {
         "title": "Ayaka",
         "imageSrc": "img/test2.jpg", 
         "link": "#ayaka"
     },
     {
         "title": "Nilou",
         "imageSrc": "img/test2.jpg",
         "link": "#nilou"
     },
     {
         "title": "Ganyu",
         "imageSrc": "img/test2.jpg",
         "link": "#ganyu"
     },
     {
         "title": "Yoimiya",
         "imageSrc": "img/test2.jpg", 
         "link": "#yoimiya"
     },
     {
         "title": "Ei",
         "imageSrc": "img/test2.jpg", 
         "link": "#ei"
     },
     {
         "title": "Navia",
         "imageSrc": "img/test2.jpg", 
         "link": "#navia"
     }
];

// Call the function with the arrays
createTaskCards(task1, task2);


function showContent(tabId) {
    // Hide all tab contents
    var tabs = document.getElementsByClassName('content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    // Show the selected tab content
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }   
}