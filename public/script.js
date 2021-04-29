//function for displaying dropdown-list
function listTerms() {
  document.getElementById("dropdown-list").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var spring20 = '{ "classes" : [' +
'{ "description":"COMP313" , "credits":"3" , "grade":"A" },' +
'{ "description":"COMP320" , "credits":"3" , "grade":"B" },' +
'{ "description":"COMP324" , "credits":"3" , "grade":"A-" } ]}';

var fall20 = '{ "classes" : [' +
'{ "description":"ANTH100" , "credits":"3" , "grade":"B+" },' +
'{ "description":"MATH131" , "credits":"3" , "grade":"B" },' +
'{ "description":"FNAR 114" , "credits":"3" , "grade":"A" } ]}';

var spring19 = '{ "classes" : [' +
'{ "description":"INFS346" , "credits":"3" , "grade":"B" },' +
'{ "description":"PHIL101" , "credits":"3" , "grade":"A" },' +
'{ "description":"ITAL101" , "credits":"3" , "grade":"A" },' +
'{ "description":"COMP163" , "credits":"3" , "grade":"C+" } ]}';


function showGrades(clicked) {
    //alert(clicked);
    switch (clicked) {
      case "1": //spring2020
        //alert("spring2020");
        document.getElementById("title").innerHTML = "Spring 2021"
        clear();

        obj = JSON.parse(spring20);
        document.getElementById("desc").innerHTML = obj.classes[0].description;
        document.getElementById("credits").innerHTML = obj.classes[0].credits;
        document.getElementById("grades").innerHTML = obj.classes[0].grade;

        document.getElementById("desc2").innerHTML = obj.classes[1].description;
        document.getElementById("credits2").innerHTML = obj.classes[1].credits;
        document.getElementById("grades2").innerHTML = obj.classes[1].grade;

        document.getElementById("desc3").innerHTML = obj.classes[2].description;
        document.getElementById("credits3").innerHTML = obj.classes[2].credits;
        document.getElementById("grades3").innerHTML = obj.classes[2].grade;

        //gpa
        document.getElementById("taken").innerHTML = "112.000";
        document.getElementById("passed").innerHTML = "112.000";

        //units towards gpa
        document.getElementById("taken2").innerHTML = "1.000";
        document.getElementById("passed2").innerHTML = "1.000";
        document.getElementById("transfer").innerHTML = "15.000";

        document.getElementById("total").innerHTML = "376.950";
        document.getElementById("towards").innerHTML = "112.000";
        document.getElementById("gpa").innerHTML = "3.366";
        break;

      case "2":
        //alert("fall2020");
        document.getElementById("title").innerHTML = "Fall 2020"
        clear();
        obj = JSON.parse(fall20);
        document.getElementById("desc").innerHTML = obj.classes[0].description;
        document.getElementById("credits").innerHTML = obj.classes[0].credits;
        document.getElementById("grades").innerHTML = obj.classes[0].grade;

        document.getElementById("desc2").innerHTML = obj.classes[1].description;
        document.getElementById("credits2").innerHTML = obj.classes[1].credits;
        document.getElementById("grades2").innerHTML = obj.classes[1].grade;

        document.getElementById("desc3").innerHTML = obj.classes[2].description;
        document.getElementById("credits3").innerHTML = obj.classes[2].credits;
        document.getElementById("grades3").innerHTML = obj.classes[2].grade;

        //gpa
        document.getElementById("taken").innerHTML = "90.000";
        document.getElementById("passed").innerHTML = "90.000";

        //units towards gpa
        document.getElementById("taken2").innerHTML = "1.000";
        document.getElementById("passed2").innerHTML = "1.000";
        document.getElementById("transfer").innerHTML = "15.000";

        document.getElementById("total").innerHTML = "335.940";
        document.getElementById("towards").innerHTML = "100.000";
        document.getElementById("gpa").innerHTML = "3.359";
        break;

      case "3":
        document.getElementById("title").innerHTML = "Spring 2019"
        clear();
        obj = JSON.parse(spring19);
        document.getElementById("desc").innerHTML = obj.classes[0].description;
        document.getElementById("credits").innerHTML = obj.classes[0].credits;
        document.getElementById("grades").innerHTML = obj.classes[0].grade;

        document.getElementById("desc2").innerHTML = obj.classes[1].description;
        document.getElementById("credits2").innerHTML = obj.classes[1].credits;
        document.getElementById("grades2").innerHTML = obj.classes[1].grade;

        document.getElementById("desc3").innerHTML = obj.classes[2].description;
        document.getElementById("credits3").innerHTML = obj.classes[2].credits;
        document.getElementById("grades3").innerHTML = obj.classes[2].grade;

        document.getElementById("desc4").innerHTML = obj.classes[3].description;
        document.getElementById("credits4").innerHTML = obj.classes[3].credits;
        document.getElementById("grades4").innerHTML = obj.classes[3].grade;

        //gpa
        document.getElementById("taken").innerHTML = "85.000";
        document.getElementById("passed").innerHTML = "85.000";

        //units towards gpa
        document.getElementById("taken2").innerHTML = "1.000";
        document.getElementById("passed2").innerHTML = "1.000";
        document.getElementById("transfer").innerHTML = "15.000";

        document.getElementById("total").innerHTML = "287.940";
        document.getElementById("towards").innerHTML = "85.000";
        document.getElementById("gpa").innerHTML = "3.388";

        break;

      case "4":
        document.getElementById("title").innerHTML = "Fall 2019"
        clear();
        break;

      case "5":
        document.getElementById("title").innerHTML = "Spring 2018"
        clear();
        break;
    }

}

function clear() {
    //crude but had trouble using loops to clear td elements properly
    document.getElementById("desc").innerHTML = "";
    document.getElementById("credits").innerHTML = "";
    document.getElementById("grades").innerHTML = "";

    document.getElementById("desc2").innerHTML = "";
    document.getElementById("credits2").innerHTML = "";
    document.getElementById("grades2").innerHTML = "";

    document.getElementById("desc3").innerHTML = "";
    document.getElementById("credits3").innerHTML = "";
    document.getElementById("grades3").innerHTML = "";

    document.getElementById("desc4").innerHTML = "";
    document.getElementById("credits4").innerHTML = "";
    document.getElementById("grades4").innerHTML = "";

    document.getElementById("desc5").innerHTML = "";
    document.getElementById("credits5").innerHTML = "";
    document.getElementById("grades5").innerHTML = "";

    //gpa
    document.getElementById("taken").innerHTML = "";
    document.getElementById("passed").innerHTML = "";

    //units towards gpa
    document.getElementById("taken2").innerHTML = "";
    document.getElementById("passed2").innerHTML = "";
    document.getElementById("transfer").innerHTML = "";

    document.getElementById("total").innerHTML = "";
    document.getElementById("towards").innerHTML = "";
    document.getElementById("gpa").innerHTML = "";

}


//for database
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//    apiKey: "AIzaSyC-z98Nc4j11cPpC6eRqB3iQOSlQrfe7aA",
//    authDomain: "comp430-764fa.firebaseapp.com",
//    databaseURL: "https://comp430-764fa-default-rtdb.firebaseio.com",
//    projectId: "comp430-764fa",
//    storageBucket: "comp430-764fa.appspot.com",
//    messagingSenderId: "774865356524",
//    appId: "1:774865356524:web:63328ef09e7142cdf907c9",
//    measurementId: "G-NDEX7JKYRL"
//  };

  // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
