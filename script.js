const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", 
function (){
    console.log("You clicked the dark mode button")
    //select the form element
    const formElement = document.querySelector(".forms", ".form-group");
    //add a class of .dark-mode to the form
    formElement.classList.toggle("dark-mode");
})

// Creating a constant to identify the query selector

const jordanModeButton = document.querySelector("#jordan-mode")

jordanModeButton.addEventListener("click",
function(){
    console.log("Jordan mode")
    const formElement2 = document.querySelector(".forms")
    formElement2.classList.toggle("jordan-mode")
})

// No constant created

// document.querySelector("#jordan-mode").addEventListener("click",
// function(){
//     console.log("Jordan mode")
//     const formElement2 = document.querySelector(".forms")
//     formElement2.classList.toggle("jordan-mode")
// })

document.querySelector("#submit-button").addEventListener("click",
function(){
    console.log("You don' submitted")
    // Get the values of the name and email input
    const nameInput = document.querySelector("#nameInput")
    const emailInput = document.querySelector("#emailInput")
    // console.log("Name input", nameInput)
    // console.log("Email input", emailInput)

    const nameValue = nameInput.value
    const emailValue = emailInput.value
    console.log(nameValue)
    console.log(emailValue)

    // Print those values to the DOM
    document.querySelector("#output-container").innerHTML += 
    `<div class="card" style="width: 18rem;">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB/CAMAAAAaVFYiAAAAaVBMVEX///8AAADy8vI0NDTIyMgHBwfNzc3q6urQ0NBxcXHT09P7+/uSkpJ1dXUjIyPm5uYWFhZXV1e5ubkvLy/AwMAcHBxBQUGwsLBRUVFLS0toaGiYmJgQEBDc3NyMjIyenp5/f39gYGCnp6d5iAFgAAADzUlEQVRoge2b65KiMBCFE9RBwRFv4A3Hy/s/5MroCsIJdJJurd3i/KTG+WrwpHO6k1HKTcnyPBjpm+a76TB0/CVOCjaLXFeUfn+9Cx2vM93Q/vgWdrhvom8aHWJ59nAO2TctAmn2xoS+KRc2Xhtb65UofdjK1non+ObDVQdcn+Xg2OcvWkqx191sPZB68Z0vvdBBht3ltodk4BMafC3BDmlsvZeAU+xWaCZhuTMRriMBOGGR33XlZwc7KvwsACet8kLf/PBwRoVP/jf4J197AFIj1pkfri5UuMBS+2yRWRLZqUR5/ejGQq2vMkHqo2FCkcrMVAhOsZxc37Dohkss8ru667tAXX+qK0plos3atZWdCk8I2ui5+HTCbPkskWYrlRg8//OGsYhS8QbkioXEXgYVXF+jbLoX6ZFMiqPT9knevOHLbihIjsfkLd+0SqLx16vGhWrPvqKI/z1El7S1vlQdcGE239g4+kOajznZgQ26EGOOCwa2cMa50Lctm3Fvndqz2eIUNbDXtOFgH93YLJ0LtVcA8o41wbYbYtLW0/IxcfKHNfEr/Acftucgtv1ggSAPy4992Vo7V3n6DMismaPlfYxeytHyDhUdyWk49cPDvmVqe7a30UtZW965oiNZtlEcRi81s8qUMYvRS21t6ix5sE+VxXzMKbq0ixxsGI1eimh5VqOXIlk+JLcmdkoJVZ5+kNNKypvPsu4qjyo6edpdgpBvOqs8ii4n+319EJ/A0w7Lo4w+oY58q/AAnvu2TqSR0XfkefMrXCHztFg+AZOeIoq4wQOwP6yMVR5Fl7wIYW5wFYGm3hhskNF/vyVHOHSQwfLI6Hd/usLhJgGzPFqZZ+UHh+dhoMpH4Md2sS88RpZvtK/I6M8jC3c4PIKtWz4A09z82W14wNUYVPna5TWj0b3hhqJZEcroJ8UDV6jKV7J813r0g0PLP18rMnqm+OAKHb0/LB+CEd9rc+kLR13A3fKEpegLNxcRwr7rDTdZHj2ul19/OLT8Em35jY2HAY4qyU41n63qn2OBo3uEqlH9Vs3PscCb95vyht9GYGTKAlfRqPZDk0ZmRAGTB97w9rH+COYMJngtK/3+mdXDG9xHc8Grff/8cR8/fC63DH6ED15W+fKYP748PmJI1Xzw5LGPXCpzknha9MULUz/BB78fgKfT1xlNsl5GxqkNI1zF0XJtNZzihFurh/fwHt7De3gP7+H/Ptx+5J3xXRZLrOEXNrbFrf6/Yrkk8xCaLLQpZWTbnmfnzBfiTvUWs0UD9v9MTqbZiKJ8sSEvsz9LbDmC/eWUVQAAAABJRU5ErkJggg==" class="card-img-top" alt="Person silhouette">
    <div class="card-body">
      <h5 class="card-title">${nameValue}</h5>
      <p class="card-text">${emailValue}</p>
    </div>
  </div>`

    const formElement2 = document.querySelector(".forms")
    // formElement2.classList.toggle("jordan-mode")
})

// No constant created

// document.querySelector("#jordan-mode").addEventListener("click",
// function(){
//     console.log("Jordan mode")
//     const formElement2 = document.querySelector(".forms")
//     formElement2.classList.toggle("jordan-mode")
// })

// document.querySelector("#submit-button").addEventListener("click",
// function(){
//     console.log("You don' submitted")
//     // Get the values of the name and email input
//     const nameInput = document.querySelector("#nameInput")
//     const emailInput = document.querySelector("#emailInput")
//     // console.log("Name input", nameInput)
//     // console.log("Email input", emailInput)

//     const nameValue = nameInput.value
//     const emailValue = emailInput.value
//     console.log(nameValue)
//     console.log(emailValue)
// })

// const messageForm = document.querySelector("#message")

// messageForm.addEventListener("keyup",
// function(){
//     const messageInput = document.querySelector("#message")
//     console.log("Look at you keying up")
//     const messageValue = messageInput.value
    
//     const articleInput1 = document.querySelector("#first-article")
//     const articleInput2 = document.querySelector("#second-article")

//     const articleValue1 = articleInput1.value
//     const articleValue2 = articleInput2.value

//     articleValue1 = messageValue
//     articleValue2 = messageValue
// })


document.querySelector("#message").addEventListener("keyup", function() {
    const messageInput = document.querySelector("#message")

    const messageValue = messageInput.value;

    document.querySelector("#first-article").textContent = messageValue
    document.querySelector("#second-article").textContent = messageValue
    
})
