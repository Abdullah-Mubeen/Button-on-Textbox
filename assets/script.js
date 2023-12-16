const slider = document.getElementById("slider");
const leftBox = document.getElementById("leftBox");
const rightBox = document.getElementById("rightBox");
const container = document.getElementById("containerSliderTextBox");

let isResizing = false;

slider.addEventListener("mousedown", (event) => {
  isResizing = true;
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.removeEventListener("mousemove", handleMouseMove);
  });
});

function handleMouseMove(event) {
  if (isResizing) {
    const containerRect = container.getBoundingClientRect();
    const newPosition =
      (event.clientX - containerRect.left) / containerRect.width;

    // Limit the resizing within 25% to 50% of the container width
    const newWidthPercent = Math.min(Math.max(newPosition * 100, 25), 50);

    leftBox.style.width = newWidthPercent + "%";
    rightBox.style.width = 100 - newWidthPercent + "%";

    // Move the button to the left based on the slider position
    const buttonPosition = newWidthPercent / 2;
    sampleTextButton.style.left = `calc(${buttonPosition}% + 12px)`; // Adjust 12px for button padding
  }
}

//** Get references to the text area and button
const textArea = document.getElementById("leftBox");
const sampleTextButton = document.getElementById("sampleTextButton");

let typingTimer; //** Variable to hold the timer for detecting typing

//** Function to show sample text and hide the button
sampleTextButton.addEventListener("click", () => {
  //** Add your sample text here
  const sampleText = "This is a sample text paragraph.";

  //** Append the sample text to the text area
  textArea.value = sampleText;

  //** Hide the button
  sampleTextButton.style.display = "none";

  //** Clear the typing timer if it's active
  clearTimeout(typingTimer);
});

//** Event listener to show the button when text is cleared
textArea.addEventListener("input", () => {
  if (textArea.value === "") {
    //** Set a timer to hide the button after 1 second of inactivity
    typingTimer = setTimeout(() => {
      sampleTextButton.style.display = "block";
    }, 1000);
  } else {
    //** If the user is typing, hide the button immediately
    sampleTextButton.style.display = "none";
  }
});

function changeTab(tabId, clickedTab) {
  // Remove the 'active_tab' class from all tabs
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active_tab"));

  // Add the 'active_tab' class to the clicked tab
  clickedTab.classList.add("active_tab");

  // Add your logic to handle the tab change (e.g., show/hide content related to the tab)
  console.log("Tab changed to:", tabId);
}

function toggleDropdown(dropdownTab) {
  var dropdownContent = dropdownTab.querySelector(".dropdown-content");
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";

  // Close the dropdown when clicking outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown_tab")) {
      var dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
      });
    }
  };
}

function toggleDropdown(tab) {
  tab.classList.toggle("dropdown-tab-open");
  var arrowIcon = tab.querySelector(".bx");

  if (tab.classList.contains("dropdown-tab-open")) {
    arrowIcon.classList.remove("bx-chevron-down");
    arrowIcon.classList.add("bx-chevron-up");
    // Add event listener to close dropdown when clicking outside
    document.addEventListener("click", closeDropdownOnClickOutside);
  } else {
    arrowIcon.classList.remove("bx-chevron-up");
    arrowIcon.classList.add("bx-chevron-down");
    // Remove event listener when dropdown is closed
    document.removeEventListener("click", closeDropdownOnClickOutside);
  }
}

function selectMenu(menuItem) {
  var allItems = document.querySelectorAll(".dropdown-item");
  allItems.forEach(function (item) {
    item.classList.remove("selected");
  });
  menuItem.classList.add("selected");
}

function closeDropdownOnClickOutside(event) {
  var dropdownTab = document.querySelector(".dropdown_tab");
  if (!dropdownTab.contains(event.target)) {
    dropdownTab.classList.remove("dropdown-tab-open");
    var arrowIcon = dropdownTab.querySelector(".bx");
    arrowIcon.classList.remove("bx-chevron-up");
    arrowIcon.classList.add("bx-chevron-down");
    document.removeEventListener("click", closeDropdownOnClickOutside);
  }
}
