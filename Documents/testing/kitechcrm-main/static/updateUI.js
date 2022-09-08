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

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = firebase.firestore(app);


auth.onAuthStateChanged(user => {

    if(user) {
      
 const userRef = db.collection('users').where('userID', '==', user.uid).get()

userRef.then((querySnapshot) => {
  const fname = document.querySelector('.fname')
   const lname = document.querySelector('.lname')
    const uname = document.querySelector('.uname')
     const cname = document.querySelector('.cname')
      const add = document.querySelector('.add')
      const status = document.querySelector('.status')
      const phonenumber = document.querySelector('.phonenumber')
     const email = document.querySelector('.email')
      
       querySnapshot.forEach((doc) => {
          fname.value= doc.data().userFirstname
          lname.value= doc.data().userLastname
          uname.value= doc.data().userFirstname + ' ' + doc.data().userLastname
          cname.value= doc.data().userCompanyname
          add.value= doc.data().userAddone
          status.value= doc.data().userTitle
          phonenumber.value= doc.data().userPhone
          email.value= doc.data().userEmail
            // doc.data() is never undefined for query doc snapshots
         
        }); 
})

     }
    else {
        console.log("There's nothing here!")
    }
})

