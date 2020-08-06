function mDown(obj){
  obj.style.backgroundColor = "#1A73E9";
};
function mUp(obj){
  obj.style.backgroundColor = "#4486F6";
};
function mOver(obj){
  obj.style.border="1px solid #C6C6C6";
  obj.style.color="black";
};
function mOut(obj){
  obj.style.border="none";
  obj.style.color="#72757A";
};


function getValues(){


    db.collection("others").doc("intro").get()
    .then(function (doc) {
        console.log("Document successfully read!")

        console.log(doc.data());
        var data = doc.data(); // returns document
        var text = data.value;
        document.getElementById("aboutMeUpdate").value = text;
      
    })
    .catch(function (error) {
        console.error("Error reading document: ", error);
    });

    db.collection("others").doc("details").get()
    .then(function (doc) {
        console.log("Document successfully read!")

        console.log(doc.data());
        var data = doc.data(); // returns document
        var text = data.Name;
        document.getElementById("nameUpdate").value = text;
      
    })
    .catch(function (error) {
        console.error("Error reading document: ", error);
    });
    db.collection("others").doc("details").get()
    .then(function (doc) {
        console.log("Document successfully read!")

        console.log(doc.data());
        var data = doc.data(); // returns document
        var text = data.Age;
        document.getElementById("ageUpdate").value = text;
      
    })
    .catch(function (error) {
        console.error("Error reading document: ", error);
    });
    db.collection("others").doc("details").get()
    .then(function (doc) {
        console.log("Document successfully read!")

        console.log(doc.data());
        var data = doc.data(); // returns document
        var text = data.Location;
        document.getElementById("locUpdate").value = text;
      
    })
    .catch(function (error) {
        console.error("Error reading document: ", error);
    });
};



function update() {
    // Add a new document in collection "cities"
    aboutMe = document.getElementById('aboutMeUpdate').value;
    name = document.getElementById('nameUpdate').value;
    age = document.getElementById('ageUpdate').value;
    loc = document.getElementById('locUpdate').value;


    db.collection("others").doc("intro").update({
      value: aboutMe
    })
      .then(function (docRef) {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

      db.collection("others").doc("details").update({
        Age: age,
        Name: name,
        Location: loc
      })
        .then(function (docRef) {
          console.log("Document successfully written!");
          alert("Successfully updated!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

       
  }


function changePage(){
  var queryString = decodeURIComponent(window.location.search);
  queryString = queryString.substring(1);
  var queries = queryString.split("&");
  console.log(queries);
  var email = queries[0];
  var password  = queries[1];
  var queryString =  "?" + email + "&" + password;
  window.location.href = "edit.html" + queryString;
}

$(document).ready(function(){

    getValues();

    $("#submitButton").click(function(){
        update();
    });
    $("#goBack").click(function(){
        changePage();
    });
  
  });
