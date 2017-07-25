function openTab(event, tabNumber) {
    const tabContent = document.getElementsByClassName('individual-tab-content');
    const tabButtons = document.getElementsByClassName('tab-buttons');

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace("active", "");
    }

    document.getElementById(tabNumber).style.display = "flex";
    event.currentTarget.className += " active";
}

function openTabSmall(event, tabNumber) {
    const tabContent = document.getElementsByClassName('individual-tab-content');
    const tabButtons = document.getElementsByClassName('tab-buttons');

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace("active", "");
    }

    document.getElementById(tabNumber).style.display = "flex";
    event.currentTarget.className += " active";
}
