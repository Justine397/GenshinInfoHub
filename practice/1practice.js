function showContent(tabId) {
    // Hide all tab contents
    var tabs = document.getElementsByClassName('content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';
}



function smoothScroll(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = event.currentTarget.getAttribute("href"); // Get the target section's id
    const targetSection = document.querySelector(targetId); // Get the target section element

// Scroll to the target section smoothly
targetSection.scrollIntoView({
    behavior: "smooth"
});
}
