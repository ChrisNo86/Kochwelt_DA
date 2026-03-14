document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});

// Header implement //

document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });
});


/* JS for Contact Side Send E-Mail */ 
function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://formspree.io/f/mlgplzob", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
  }

  // Ingredient Calculator 
  const ingredientTable = document.getElementById("ingredientTable");

  let ingredientList;

  let error = "Bitte geben Sie eine gültige Anzahl von 1 bis 20 ein.";

  // calculation for a single Portion
  if (ingredientTable) {
    ingredientList = ingredientTable.innerHTML;
  }

  // calculator for multiple Portions
  if (ingredientTable) {
    function calculatePortion(event) {
      event.preventDefault();
      let value = document.getElementById("portions").value;
      document.getElementById("error").innerHTML = "";

      if(value < 1 || value > 20) {
        value = 1; 
        document.getElementById("portions").value = 1;
        document.getElementById("error").innerHTML = error;
      }
      
      let newIngredientList = ingredientList.replaceAll(/\d+/g, (match) => {
        return parseInt(match) * value;
      });

      document.getElementById("ingredientTable").innerHTML = newIngredientList;
    }
  }