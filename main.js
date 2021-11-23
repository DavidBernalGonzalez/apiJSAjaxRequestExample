// HTML TAGs elements
const form = document.getElementById('form'); // select the TAG HTML with id FORM , in this case <form id="form"></form>
const body = document.body; // select body TAG <body></body>
const IP = document.getElementById('IP'); // select the TAG HTML with id IP, in this case <input required name="IP" id="IP"></input>

// EVENTS
form.addEventListener('submit', function (event) {
    if (IP.value != null) {
        // Prepare the end point to call the API  
        const endPoint = 'http://worldtimeapi.org/api/ip/' + IP.value; //Example: http://worldtimeapi.org/api/ip/37.15.249.46

        event.preventDefault(); // Stop the reload page when the user click in the button submit of the form.

        // Make a GET Request
        axios.get(endPoint)
            .then(function (response) {

                // Remove the form
                form.remove();

                // Get day of the week to the response data
                var dayOfWeek = response.data.day_of_week;

                // Creating the message
                var message = '';
                if (dayOfWeek != null) {
                    if (dayOfWeek === 6 || dayOfWeek === 7) {
                        var message = "Disfruta del fin de semana";
                    } else {
                        var message = "Hoy toca trabajar, te deseo un excelente día"
                    }
                }

                // Creating the DIV
                var newDiv = document.createElement("div");
                // Adding the property id with newDiv value
                newDiv.setAttribute("id", "newDiv");

                // Creating a node with the message value
                var newTxtContent = document.createTextNode(message);

                // Adding the node newTxtContent under the div
                newDiv.appendChild(newTxtContent);

                // Creating a break line
                var breakLine = document.createElement("br");
                // Adding the breakLine under the div
                newDiv.appendChild(breakLine);

                // Creating a img
                var img = document.createElement("img");
                img.src = "https://img.icons8.com/carbon-copy/100/000000/return.png";
                img.width = "50";
                img.height = "50";
                img.setAttribute("id", "return");

                // Adding the img under the div
                newDiv.appendChild(img); //añade texto al div creado.

                // Adding the div (with txt + br + img) into the body
                body.appendChild(newDiv);

                // Event click img
                imgReturn = document.getElementById("return");
                if (imgReturn) {
                    imgReturn.addEventListener('click', function (event) {
                        location.reload();
                    });
                }
            })
            .catch(function (error) {
                // handle error
                alert(error);
            })
            .then(function () {
                // always executed
                console.log("Request closed!");
            });
    }
});