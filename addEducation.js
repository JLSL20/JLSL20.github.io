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
    description = document.getElementById('descrip').value;
    level = document.getElementById('level').value;
    school = document.getElementById('school').value;
    year = document.getElementById('year').value;
    
  
    // Add a new document with a generated id.
    db.collection("educations").add(
      {
        description:description,
        level:level,
        school:school,
        year:year,
      })
      .then(function (doc) {
        console.log("Document written with ID: ", doc.id);
        console.log(doc.name);
        alert("Successfully added!");
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