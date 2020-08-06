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



function get_info() {


    db.collection("others").doc("intro").get()
    .then(function (doc) {
        console.log("Document successfully read!");
        // PARENT
        var parent = document.getElementById("aboutMeContent");
        console.log(doc.data());
        var data = doc.data(); // returns document
        var text = data.value;

          // DOM BUILDING
          // Logic: tree simula ka sa parent papuntang child
          var par = document.createElement("p");
          par.innerHTML = text;
    
          // Append p to PARENT
          parent.appendChild(par);
    })
    .catch(function (error) {
        console.error("Error reading document: ", error);
    });



    db.collection("others").doc("details").get()
    .then(function (doc) {
        console.log("Document details successfully read!");
        // PARENT
        var parent1 = document.getElementById("nameDb");
        var parent2 = document.getElementById("ageDb");
        var parent3 = document.getElementById("locDb");
        console.log(doc.data());
        var data = doc.data(); // returns document
        var text1 = data.Name;
        var text2 = data.Age;
        var text3 = data.Location;
    
          // DOM BUILDING
          // Logic: tree simula ka sa parent papuntang child
          var par1 = document.createElement("p");
          var par2 = document.createElement("p");
          var par3 = document.createElement("p");
          
          par1.innerHTML = text1;
          par2.innerHTML = text2;
          par3.innerHTML = text3;
    
          // Append p to PARENT
          parent1.appendChild(par1);
          parent2.appendChild(par2);
          parent3.appendChild(par3);
    })
    .catch(function (error) {
        console.error("Error reading document: ", error);
    });

    db.collection("educations").get()
    .then(function (snapshot) {
      console.log("collection educations successfully read!"); 
      // PARENT
      var parent = document.getElementById("educContent");
    
      snapshot.forEach(function (doc) {
        console.log(doc.data());
        var data = doc.data(); // returns document
        var school = data.school;
        var year = data.year;
        var level = data.level;
        var description = data.description;

        // DOM BUILDING
        // Logic: tree simula ka sa parent papuntang child
        var div1 = document.createElement("div"); 
        var div2 = document.createElement("div"); 
        var div3 = document.createElement("div"); 
        var school_p = document.createElement("p");
        var year_p = document.createElement("p");
        var level_p = document.createElement("p");
        var descrip_p = document.createElement("p");
        var delete_btn = document.createElement("div");


        school_p.innerHTML = school;
        year_p.innerHTML = year;
        level_p.innerHTML = level;
        descrip_p.innerHTML = description;

        div1.setAttribute("class","educContent1");
        div2.setAttribute("id","eductContent1Left");
        div3.setAttribute("id","eductContent1Right");
        school_p.setAttribute("class","textStyleUpper");
        year_p.setAttribute("class","textStyleLower");
        level_p.setAttribute("class","textStyleUpper");
        descrip_p.setAttribute("class","textStyleLower");

        // var id = "'" + doc.id + "'";
        // delete_btn.setAttribute("class", "button2");
        // delete_btn.setAttribute("onclick", `delete_item(${id})`);
        // delete_btn.setAttribute("onmousedown","mDown(this)");
        // delete_btn.setAttribute("onmouseup","mUp(this)");
        // delete_btn.innerHTML = "Delete";
        
        // Append
        div2.appendChild(school_p);
        div2.appendChild(year_p);
        div2.appendChild(delete_btn);
        div3.appendChild(level_p);
        div3.appendChild(descrip_p);
        div1.appendChild(div2);
        div1.appendChild(div3);
        
        // Append div to PARENT
        parent.appendChild(div1);
      })
    });

    db.collection("organizations").get()
    .then(function (snapshot) {
      console.log("collection organizations successfully read!"); 
      // PARENT
      var parent = document.getElementById("orgContents");
     
      snapshot.forEach(function (doc) {
        console.log(doc.data());
        var data = doc.data(); // returns document
        var orgName = data.name;
        var orgPos = data.position;

        // DOM BUILDING
        // Logic: tree simula ka sa parent papuntang child
        var div = document.createElement("div"); 
        var name_p = document.createElement("p");
        var position_p = document.createElement("p");
        var delete_btn = document.createElement("div");


        name_p.innerHTML = orgName;
        position_p.innerHTML = orgPos;
        

        div.setAttribute("class","orgContent1");
        name_p.setAttribute("id","orgName");
        position_p.setAttribute("id","orgPosition");
        
        // Append
        div.appendChild(name_p);
        div.appendChild(position_p);
        div.appendChild(delete_btn);
        
        
        // Append div to PARENT
        parent.appendChild(div);
      })
    });



    db.collection("works").get()
    .then(function (snapshot) {
      console.log("collection works successfully read!"); 
      // PARENT
      var parent = document.getElementById("workContent");
     
      snapshot.forEach(function (doc) {
        console.log(doc.data());
        var data = doc.data(); // returns document
        var workName = data.name;
        var workLab = data.lab;
        var workYearS = data.year_start;
        
        // DOM BUILDING
        // Logic: tree simula ka sa parent papuntang child
        var div = document.createElement("div"); 
        var lab_p = document.createElement("p");
        var name_p = document.createElement("p");
        var year_start_p = document.createElement("p");
        var delete_btn = document.createElement("div");


        name_p.innerHTML = workName;
        lab_p.innerHTML = workLab;
        year_start_p.innerHTML = workYearS;
        

        div.setAttribute("class","workContent1");
        name_p.setAttribute("id","workOthers");
        lab_p.setAttribute("id","workLab");
        year_start_p.setAttribute("id","workOthers");       
        
        // Append
        div.appendChild(lab_p);
        div.appendChild(name_p);
        div.appendChild(year_start_p);
        div.appendChild(delete_btn);
        
        
        // Append div to PARENT
        parent.appendChild(div);

      })
    });




    db.collection("others").doc("link").get()
    .then(function (doc) {
        console.log("Document link successfully read!");
        // PARENT
        var parent = document.getElementById("linkIcons");

        console.log(doc.data());
        var data = doc.data(); // returns document

          // DOM BUILDING
          // Logic: tree simula ka sa parent papuntang child
          var box = document.createElement("div");
          var fb_div = document.createElement("div");
          var twitter_div = document.createElement("div");
          var github_div = document.createElement("div");
          var fb_a = document.createElement("a");
          var twitter_a = document.createElement("a");
          var github_a = document.createElement("a");
          
          box.setAttribute("id","linkIconsBox");
          fb_div.setAttribute("id","fb");
          twitter_div.setAttribute("id","twitter");
          github_div.setAttribute("id","github");
          fb_a.setAttribute("href",data.facebook);
          twitter_a.setAttribute("href",data.twitter);
          github_a.setAttribute("href",data.github);
          fb_a.setAttribute("class","fa fa-facebook");
          twitter_a.setAttribute("class","fa fa-twitter");
          github_a.setAttribute("class","fa fa-github");
    
          // Append p to PARENT
          fb_div.appendChild(fb_a);
          twitter_div.appendChild(twitter_a);
          github_div.appendChild(github_a)
          box.appendChild(fb_div);
          box.appendChild(twitter_div);
          box.appendChild(github_div);
          parent.appendChild(box);

    })
    .catch(function (error) {
        console.error("Error reading document: ", error);
    });


};

function delete_item(id) {
  db.collection("educations").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
    location.reload(true);
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });

  db.collection("works").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
    location.reload(true);
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });


  db.collection("organizations").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
    location.reload(true);
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
 
};


function loginUser(){

  
  var email = document.getElementById('emailInputBox').value;
  var password = document.getElementById('pswdInputBox').value;




  firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
      console.log("user signed in");

      var user = firebase.auth().currentUser;
      if(user != null){
          console.log(user.email);
          location.replace("edit.html");

          var queryString =  "?" + email + "&" + password;
          window.location.href = "edit.html" + queryString;

      }
  }).catch(function(err){
      if(err.code == "auth/wrong-password"){
          alert("wrong password");
          document.getElementById("pswdInputBox").value ="";


      }else{
          alert(err.message);
          document.getElementById("loginForm").reset();
      }
  });

};

function get_userInfo(){
  var email = document.getElementById('emailInputBox').value;
  var password = document.getElementById('pswdInputBox').value;

  var queryString = "?" + email + "&" + password;
  window.location.href = "edit.html" + queryString;
};


$(document).ready(function(){

  get_info();
  $("#PopUp").hide();
  $("#emailInputBox").val("");
  $("#pswdInputBox").val("");

  $("#logInButton").click(function(){
    $("#PopUp").show();
  });

  $("#login").click(function(){
    loginUser();
  });

  $("#close").click(function(){
    $("#PopUp").hide();
  });

});


