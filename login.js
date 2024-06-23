const loginControl = (function () {
   const loadEventListeners = function () {
      document.getElementById('loginBtn').addEventListener('click', logIn);
   }

   const logIn = function (e) {
      let username = document.getElementById('loginUsername').value;
      let password = document.getElementById('loginPassword').value;

      const user = mainDataControl.getUserByUsername(username);

      console.log(user);

      if (user == null) {
         alert('That username does not exist. please enter another one.');
      } else if (user.password == password) {
         mainDataControl.setCurrentUser(user);
         window.location.href = 'dashboard.html';
      } else {
         alert('The password you entered is incorrect.');
      }
      e.preventDefault()
   };

   return {
      init: function () {
         loadEventListeners();
      }
   }
})()

loginControl.init();