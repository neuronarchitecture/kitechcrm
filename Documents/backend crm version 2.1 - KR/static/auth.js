const firebaseConfig = {
  apiKey: "AIzaSyAq2QjImxRXEtRHN-N6u2YEod-wUJMtI1s",
  authDomain: "projectcrm-f4e5f.firebaseapp.com",
  databaseURL: "https://projectcrm-f4e5f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectcrm-f4e5f",
  storageBucket: "projectcrm-f4e5f.appspot.com",
  messagingSenderId: "404890912341",
  appId: "1:404890912341:web:5b129be76ccdfeba8c76dc",
  measurementId: "G-TL8J23TNZE"
};



// Initialize Firebase

const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

auth.onAuthStateChanged(user => {
    if(user) {
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin
            editUI(user)
        })
    }
    else {
        console.log("There's nothing here!")
    }
})

const editUI = (user) => {
  if (user) {
    const userTitleCard = document.getElementById('usertitle')
    if(user.admin) {
      const adminElement = document.querySelectorAll('.adminelement');
    adminElement.forEach(item => item.style.display = 'block');
      userTitleCard.innerHTML = 'Product Manufacturer'
      console.log("This User is an admin")
    } else {
       const userTitleCard = document.getElementById('usertitle')
        adminElement.forEach(item => item.style.display = 'none');
    userTitleCard.innerHTML = 'Viewer'
    }

  } else {
   
    console.log("not an admin")
  }
}