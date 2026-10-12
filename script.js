 function changeHeading() {
            document.getElementById("heading").textContent =
                "Welcome Book Lovers!";
        }

        function changeColor() {
            document.getElementById("book1").style.backgroundColor =
                "lightgreen";
            document.getElementById("book2").style.backgroundColor =
                "red";
            document.getElementById("book3").style.backgroundColor =
                "lightblue";
        }

        function toggleBooks() {
            document.getElementById("books").classList.toggle("hidden");
        }



 function requestBook(button) {
    button.textContent = "Request Sent";
    button.nextElementSibling.textContent = "Your request has been received!";
    }

function showBook() {
    var title = document.getElementById("bookTitle").value;

    if (title.trim() == "") {
        document.getElementById("bookResult").textContent = "Please enter a book title.";
    } else {
        document.getElementById("bookResult").textContent =
            "You entered: " + title + ". Book title submitted!";
    }
}

function changeBrowseColor() {
    document.getElementById("browseBook1").style.backgroundColor = "lightgreen";
    document.getElementById("browseBook2").style.backgroundColor = "red";
    document.getElementById("browseBook3").style.backgroundColor = "yellow";
    document.getElementById("browseBook4").style.backgroundColor = "lightblue";
}

function changeFormHeading() {
    document.getElementById("formHeading").style.fontSize = "30px";
}

function toggleForm() {
    document.getElementById("bookForm").classList.toggle("hidden");
}

function submitBook(event) {
    event.preventDefault();

    var name = document.getElementById("studentName").value;
    var title = document.getElementById("newBookTitle").value;
    var author = document.getElementById("author").value;
    var category = document.getElementById("category").value;
    var condition = document.getElementById("condition").value;
    var message = document.getElementById("formMessage");

    if (name == "" || title == "" || author == "" ||
        category == "" || condition == "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
    } else {
        message.textContent = "Thank you, " + name +
            "! Your book '" + title + "' has been listed.";
        message.style.color = "green";
    }
}
