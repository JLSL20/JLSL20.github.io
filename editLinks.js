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
  
      db.collection("others").doc("link").get()
      .then(function (doc) {
          console.log("Document successfully read!")
  
          console.log(doc.data());
          var data = doc.data(); // returns document
          var text = data.facebook;
          document.getElementById("facebook").value = text;
        
      })
      .catch(function (error) {
          console.error("Error reading document: ", error);
      });
      db.collection("others").doc("link").get()
      .then(function (doc) {
          console.log("Document successfully read!")
  
          console.log(doc.data());
          var data = doc.data(); // returns document
          var text = data.twitter;
          document.getElementById("twitter").value = text;
        
      })
      .catch(function (error) {
          console.error("Error reading document: ", error);
      });
      db.collection("others").doc("link").get()
      .then(function (doc) {
          console.log("Document successfully read!")
  
          console.log(doc.data());
          var data = doc.data(); // returns document
          var text = data.github;
          document.getElementById("github").value = text;
        
      })
      .catch(function (error) {
          console.error("Error reading document: ", error);
      });
  };
  
  
  
  function update() {
      // Add a new document in collection "cities"
      facebook = document.getElementById('facebook').value;
      github = document.getElementById('github').value;
      twitter = document.getElementById('twitter').value;
  
  
        db.collection("others").doc("link").update({
          facebook: facebook,
          github: github,
          twitter: twitter
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
      location.replace("edit.html");
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