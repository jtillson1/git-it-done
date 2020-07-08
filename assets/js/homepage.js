var getUserRepos = function(user) {
    //format the gitub api url
    var apiUrl= "https://api.github.com/users/" + user + "/repos";
    //make request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data){
            console.log(data);
        })
    });
};
  
  
  var userFormEl = document.querySelector("#user-form");
  
  var nameInputEl = document.querySelector("#username");

  var formSubmitHandler = function(event) {
      event.preventDefault();
      //get value from input el
      var username = nameInputEl.value.trim();
        //check if theres a value in the usrname input
      if(username){
          getUserRepos(username);
          nameInputEl.value = "";
      }
      else{
          alert("please enter a github usrname");
      }
  };
  userFormEl.addEventListener("submit", formSubmitHandler);