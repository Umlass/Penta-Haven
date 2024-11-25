function updateImages(selectId, imageId) {
    const selectElement = document.getElementById(selectId);
    const imageElement = document.getElementById(imageId);
    
    // Get the selected value
    const selectedValue = selectElement.value;

    // Update the image source based on the selected value
    if (selectedValue) {
        imageElement.src = `${selectedValue.toLowerCase().replace(/ /g, "_")}.JPG`;
        imageElement.style.display = 'block';
    } else {
        imageElement.src = '';
        imageElement.style.display = 'none';
    }
}

function getSelectedView(roomIndex) {
    const viewElements = document.getElementsByName(`view${roomIndex}`);
    for (let i = 0; i < viewElements.length; i++) {
        if (viewElements[i].checked) {
            return viewElements[i].value;
        }
    }
    return 'No view selected';
}

function bookRoom(roomType, price, beddingId, blanketId, pillowId, roomIndex) {
    const bedding = document.getElementById(beddingId).value;
    const blanket = document.getElementById(blanketId).value;
    const pillow = document.getElementById(pillowId).value;
    const view = getSelectedView(roomIndex);

    alert(`You have booked a ${roomType} for ₱${price}.\nBedding: ${bedding}\nBlanket: ${blanket}\nPillow: ${pillow}\nView: ${view}`);
}
