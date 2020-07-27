"use strict";

// IIFE -Immediately Ivoked Function Expression
(function(){

    function highlightActiveLink(id) 
    {
        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {
         anchor.className = "nav-link";
        }

        for (const anchor of navAnchors) 
        {
            let anchorString = anchor.getAttribute("id");

            if (id === anchorString)
            {
                anchor.className = "nav-link active";
            }
        }
    }

    function validateForm()
    {
        let contact = new objects.Contact();

        let contactForm = document.forms[0];

        contactForm.noValidate = true;

        let errorMessage = document.getElementById("errorMessage");

        let firstName = document.getElementById("firstName");
        firstName.addEventListener("blur", (event) => 
        {
            if(firstName.value.length <= 2)
            {
                firstName.focus();
                errorMessage.hidden = false;
                errorMessage.textContent = "Invalid!! Enter more than 2 characters"; 
            }
            else
            {
                contact.firstName = firstName.value;
                errorMessage.hidden = true;
            }
        });

        let lastName = document.getElementById("lastName");
        lastName.addEventListener("blur", (event) => 
        {
            if(lastName.value.length <= 2)
            {
                lastName.focus();
                errorMessage.hidden = false;
                errorMessage.textContent = "Invalid! -- Enter more than 2 Characters!"; 
            }
            else
            {
                contact.lastName = lastName.value;
                errorMessage.hidden = true;
            }
        });

        let contactNumber = document.getElementById("contactNumber");
        contactNumber.addEventListener("blur", (event) =>
        {
            let contactNumberPattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
            if(!contactNumberPattern.test(contactNumber.value))
            {
                contactNumber.focus();
                errorMessage.hidden = false;
                errorMessage.textContent = "Invalid!! -- Please enter a Valid Contact Number"; 
            }
            else
            {
                contact.contactNumber = contactNumber.value;
                errorMessage.hidden = true;
            }
            
        });

        let emailAddress = document.getElementById("emailAddress");
        emailAddress.addEventListener("blur", (event) =>
        {
            let emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if(!emailPattern.test(emailAddress.value))
            {
                emailAddress.focus();
                errorMessage.hidden = false;
                errorMessage.textContent = "Invalid!! -- Please enter a Valid email address"; 
            }
            else
            {
                contact.emailAddress = emailAddress.value;
                errorMessage.hidden = true;
            }
            
        });

        let shortMessage = document.getElementById("shortMessage");
        shortMessage.addEventListener("blur", (event) => {
            contact.shortMessage = shortMessage.value;
        });
        
        // creates a "hook" or reference to the button element with an id of "submitButton"
        let submitButton = document.getElementById("submitButton");

        submitButton.addEventListener("click", (event) =>
        {
            event.preventDefault();
            console.log("Submit Button Clicked");

            console.log(contact.toString());

            console.log(contact.toJSON());

        });
    }

    function setPageContent(id)
    {
        document.title = id;

        window.history.pushState("", id, "/"+id.toLowerCase());

        highlightActiveLink(id);

         // content switcher
        switch(id)
        {
            case "Home":
                HomeContent();
                break;
            case "Contact":
                ContactContent();
                break;
            case "Project":
                ProjectContent();
                break;
            
        }

        loadFooter();
    }

    function InitializeSite()
    {
        console.info("Header");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/partials/header.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let header = document.getElementsByTagName("header")[0];

                let headerData = XHR.responseText;

                header.innerHTML = headerData;

                setPageContent("Home");

                let navLinks = document.getElementsByTagName("a");

                for (const link of navLinks) 
                {
                    link.addEventListener("click", (event) =>{
                        event.preventDefault();

                        let id = link.getAttribute("id");

                        setPageContent(id);

                    });
                }
            }
        });
    }

    function loadFooter()
    {
        console.info("Footer");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/partials/footer.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let footer = document.getElementsByTagName("footer")[0];

                let footerData = XHR.responseText;

                footer.innerHTML = footerData;
            }
        });
    }

    function ContactContent()
    {
        console.info("Contact");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/content/contact.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let main = document.getElementsByTagName("main")[0];

                let mainData = XHR.responseText;

                main.innerHTML = mainData;

                validateForm();
            }
        });
    }

    function HomeContent()
    {
        console.info("Home");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "/Views/content/home.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let main = document.getElementsByTagName("main")[0];

                let mainData = XHR.responseText;

                main.innerHTML =  `
                <br>  
                <p align="center">
                <h1 align="Center" background-color= blue;>MINI-PORTFOLIO</h1>
                </p>
                <p align="left">
                    <img width="200" height="230"src="./images/shankar.jpg">
                    
                </p>            
                <p align="center">
                    <h2 align="Center" background-color= blue;>INTRODUCTION</h2>
                </p>
                <p>
                My Name is SHANKAR SIGDEL, Student ID is 301110925, The Course Code is COMP125-004. I Live in Scarborough, Ontario. I am a student of Centennial College, Software Engineering Technology, Second Semester. Software Engineering Technology is my second career of my education. My aim after the completion of this subject is to be established in the same field. I am entertaining this subject and professor as well. Some code references for this project are taken from class lectures of Prof. Tom .IT is really an interesting field to work in. I am expecting to entertain in this field in the future.
                </p>
                <h2 align="Center"> MISSION STATEMENT</h2>
                <p>
                Gain Knowledge on Technology and Work as A Leading Professinal with Sound Knowledge so that i can bring Change and Work with Innovative Ideas of Technology in the Work Place.
                </p>
                <br>
                <br>
                 `;
            }
        });
    }

    function ProjectContent()
    {
        console.info("Project");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Views/content/project.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let main = document.getElementsByTagName("main")[0];

                let mainData = XHR.responseText;

                main.innerHTML = 
                    `                
                    <p align="left">
                    <h1 align="Center">LIST OF THE THREE PROJECTS</h1>
                    <br>
                    <h2>Project-One</h2>
                    This picture shows the pictures of the project that i have completed at Cencol.
                    <img src="./images/project1.png"style="width:100%">
                    
                    </p>
                    <p align="left">
                   
                    <h2>Project-Two</h2>
                    This Project is about a Registration Form that i have completed in the guidence of professor at Cencol</p>
                    <img src="./images/project2.png" style="width:100%">
                    </p>
                    <p align="left">
                    
                    <h2>Project-Three</h2>
                    This Project is a big project that i have completed as an assignment at Cencol
                        <img src="./images/project3.png" style="width:100%">
                        <h3>Above Mentioned Pictures are the Screenshot of the projects that I have Completed.</h3>
                        <br>
                        <br>
                    </p>
                                        
                `;
            }
        });
    }
  
    function Start()
    {
      //  console.log('%cApp Started...', "color:white; font-size: 24px;");   

        InitializeSite();
    } 


    window.addEventListener("load", Start);

})();
