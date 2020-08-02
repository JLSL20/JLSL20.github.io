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

function add_education() {
    console.log("clicked add_contact")
    lab = document.getElementById('lab').value;
    name = document.getElementById('name').value;
    year_start = document.getElementById('ys').value;
    
  
    // Add a new document with a generated id.
    db.collection("works").add(
      {
        lab:lab,  
        name:name,
        year_start:year_start
      })
      .then(function (doc) {
        console.log("Document written with ID: ", doc.id);
        console.log(doc.name);
        alert("Successfully added!");
        document.getElementById("lab").value= "";
        document.getElementById("name").value= "";
        document.getElementById("ys").value= "";
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }


function changePage(){
    location.replace("edit.html");
}

$(document).ready(function(){

    $("#addButton").click(function(){
        add_education();
    });
    $("#goBack").click(function(){
        changePage();
    });
  
  });
