
// Event handler for creating list of added goals
// Whenever the "Add to the list" Button is clicked, run the function 
document.getElementById("Btn").addEventListener('click', function (e) {
  e.preventDefault();


  // Get value of input text
  let input = document.getElementById("goal").value;

  // Create list item (<li>) element
  let li = document.createElement("li");

  if (input !== '') {
    // Add heading to the list of added goals
    document.getElementById("goalListHeading").style.visibility="hide";
  

    li.innerHTML = `<span class='goalText'> ${input}</span>  <button class='deleteMe'>Delete Goal</button> <button class='markCompleted'>Completed Goal</button> `;
    // li.innerHTML = `<span class='goalText'> ${input}</span> <button class='deleteMe'>Delete goal</button> <button class='markCompleted'>Complete goal</button>`;

    // Get <ol id="goalList">
    let ol = document.getElementById("goalList");
    

    ol.appendChild(li);
    ol.style.listStyleType="none";
  }

})


// Event handler for deleting added goals on "Delete goal" button click
// Whenever the "Delete goal" Button is clicked, run the function to remove goal from the list
// Use event delegation method to catch the element which was clicked
let olEl = document.getElementById("goalList");
olEl.addEventListener('click', function (e) {
  e.preventDefault();
  // Get li on which the 'Delete goal' button was clicked
  if (e.target.classList.contains('deleteMe')) {
    e.target.parentElement.remove(); //Remove parent element which is clicked <li> 
  }
})


// Event handler for marking added goals as complete on "Complete goal" button click
// Whenever the "Complete goal" Button is clicked, run the function to move goal from the list to completed goals list
// Use event delegation method to catch the element which was clicked
// let olEl = document.getElementById("goalList");
olEl.addEventListener('click', function (e) {
  e.preventDefault();
  // Get li on which the 'Complete goal' button was clicked
  if (e.target.classList.contains('markCompleted')) {
    //  When the complete goal button is clicked, the item is styled with a CSS text-decoration: line-through property
    // e.target.parentElement.style.textDecoration = "line-through";

    e.target.parentElement.remove();
    //And,  Also, this goal item is moved to list of Completed goals (items)

    // Add heading to the list of completed goals
    document.getElementById("compGoalListHeading").textContent = "Completed goals ";

    // Create list item (<li>) element
    let li = document.createElement("li");

    // Get text of clicked li
    li.innerHTML = `<span class='completedGoalsItems'>${e.target.previousElementSibling.previousElementSibling.textContent}</span> <button class='deleteCompleted'> Delete Goal </button>`;

    // Get <ol id="compGoalList">
    let ol = document.getElementById("compGoalList");

    ol.appendChild(li);
    ol.style.listStyleType="none";
    
  }

})


// Event handler for deleting added completed on "Delete completed goal" button click
// Whenever the "Delete completed goal" Button is clicked, run the function to remove completed goal from the list
// Use event delegation method to catch the element which was clicked
let olElComp = document.getElementById("compGoalList");
document.getElementById("compGoalList").style.textDecoration="line-through ";
olElComp.addEventListener('click', function (e) {
  e.preventDefault();
  // Get li on which the 'Delete completed goal' button was clicked
  if (e.target.classList.contains('deleteCompleted')) {
    e.target.parentElement.remove(); //Remove parent element which is clicked <li> 
  }
})
