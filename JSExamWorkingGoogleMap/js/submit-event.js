(function(){ 
  var form = document.getElementById('login');       // Get form element

  addEvent(form, 'submit', function(e) {             // When user submits form
    e.preventDefault();                              // Stop it being sent
    var elements = this.elements;                    // Get all form elements
    var username = elements.username.value;          // Select username entered
	var pw = elements.pwd.value;
	if (username == 'username' && pw == 'pw'){
		
    var msg      = 'Welcome ' + username;            // Create welcome message
	window.location = 'themenu.html';
	}else{
	var msg = 'invalid login credentials, could be username or pw is wrong';
	}
    document.getElementById('main').textContent = msg; // Write welcome message
  });
}());