var index = 0;
function color() {
    var col = ["red", "green", "orange", "blue", "black", "purple", "yellow"];
    var containers = document.getElementsByClassName("container");
    
    // Set the background color using the color from the array
    containers[0].style.backgroundColor = col[index];
    
    // Increment the index and reset if it exceeds the length of the array
    index = (index + 1) % col.length;
}