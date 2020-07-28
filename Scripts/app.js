// IIFE -Immediately Ivoked Function Expression
/*    JavaScript 
      Assignment 2
      Mini Portfolio
      Author: Shankar Sigdel
      Date:   2020-07-01
*/
"use strict";

// IIFE -Immediately Ivoked Function Expression
(function(){
    
    let title = document.title.toLowerCase();

    function highlightActiveLink() 
    {
        //console.log(`The title of the page is ${title}`);

        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
            {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }

    function addParagraphsToJumbotron() 
    {
        // step 1 hook into the spot (element) on the page
        let jumbotron = document.getElementsByClassName("jumbotron")[0];

        if (jumbotron) 
        {
            // step 2 create a new element
            let firstDiv = document.createElement("div");
            let firstParagraph = document.createElement("p");
            let secondParagraph = document.createElement("p");
            let thirdParagraph = document.createElement("p");
            let fourthParagraph = document.createElement("p");

            // step 3 configure the new element
            
            switch (title) {
                case "index":
                    firstDiv.innerHTML =
                `    
                <p align="center">
                    <img width="200" height="230"src="./images/shankar.jpg">
                </p>            
                <palign="right">
                    <h2 text-align="center" background-color= blue; > INTRODUCTION</h2>
                </p>
                <p>
                My Name is SHANKAR SIGDEL, Student ID is 301110925, The Course Code is COMP125-004. I Live in Scarborough, Ontario. I am a student of Centennial College, Software Engineering Technology, Second Semester. Software Engineering Technology is my second career of my education. My aim after the completion of this subject is to be established in the same field. I am entertaining this subject and professor as well. Some code references for this project are taken from class lectures of Prof. Tom .IT is really an interesting field to work in. I am expecting to entertain in this field in the future.
                </p>
                <p>
                <h2> MISSION STATEMENT</h2> Gain Knowledge on Technology and Work as A Leading Professinal with Sound Knowledge so that i can bring Change and Work with Innovative Ideas of Technology in the Work Place.
                </p>
                
                `;
                    break;
                case "project":
                    firstDiv.innerHTML =
                    `                
                    <p align="left">
                    This picture shows the pictures of the project that i have completed at Cencol.
                    <img src="./images/project1.png">
                    </p>
                    <p align="left">
                    This Project is about a Registration Form that i have completed in the guidence of professor at Cencol</p>
                    <img src="./images/project2.png">
                    </p>
                    <p align="left">
                    This Project is a big project that i have completed as an assignment at Cencol
                        <img src="./images/project3.png">
                    </p>
                                        
                    `;
                        break;
                default:
                    break;
            }           
            
            // step 4 attach the new element
            jumbotron.appendChild(firstDiv);

            // back to step 2 - create a new element
            let newDiv = document.createElement("div");

            // step 3 - configure    

            // step 4 attach the new element
            jumbotron.appendChild(newDiv);
            return true;
        }
        return false;
    }
  
    // named function
    function Start()
    {
       console.log('%cApp Started...', "color:white; font-size: 24px;");   

       let title = highlightActiveLink();

       let success = addParagraphsToJumbotron();

       if(success) 
       {
        console.log("successfully added paragraphs to jumbotron");
       }
       else
       {
        console.warn("content not added to jumbotron - does not exist");
       }

    } 

    window.addEventListener("load", Start);
})();
 
