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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = firebase.firestore(app)
const functions = firebase.functions(app)
const modalyWrapper = document.querySelector('.modaly-wrapper');
// modaly add
const addmodaly = document.querySelector('.add-modaly');
const addModalyForm = document.querySelector('.add-modaly .form');

// modaly edit
const editmodaly = document.querySelector('.edit-modaly');
const editmodalyForm = document.querySelector('.edit-modaly .form');

const btnprAdd = document.querySelector('.btnpr-add');

const treeviewy = document.getElementById('treeviewy');


let id;



// Create element and render users
const renderUser = (doc) => {


  const tr = `
  <ul>
    <li >
      <div class="treeviewy__level" data-level="A">
        <span class="level-title">${doc.data().productName}</span>
        <div class="treeviewy__level-btns">
          <div class="btn btn-default btn-sm level-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z" fill="rgba(84,159,255,1)"/></svg></span></div>
          <div class="btn btn-default btn-sm level-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" fill="rgba(253,8,8,1)"/></svg></span></div>
          <div class="btn btn-default btn-sm level-same"><span>Add Same Level</span></div>
          <div class="btn btn-default btn-sm level-sub"><span>Add Sub Level</span></div>
        </div>
      </div>
      <ul>
  

  `;
  treeviewy.insertAdjacentHTML('beforeend', tr);

  const td = `
  <template id="levelMarkup">
    <li>
      <div class="treeviewy__level" data-level="A">
        <span class="level-title">Level A</span>
        <div class="treeviewy__level-btns">
          <div class="btn btn-default btn-sm level-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z" fill="rgba(84,159,255,1)"/></svg></div>
          <div class="btn btn-default btn-sm level-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" fill="rgba(253,8,8,1)"/></svg></span></div>
          <div class="btn btn-default btn-sm level-same"><span>Add Same Level</span></div>
          <div class="btn btn-default btn-sm level-sub"><span>Add Sub Level</span></div>
        </div>
      </div>
      <ul>
      </ul>
</li>
</template>
  `;
    treeviewy.insertAdjacentHTML('afterend', td);

  // Click edit user


  // Click delete user
  

}

// User click anyware outside the modaly
window.addEventListener('click', e => {
  if(e.target === addmodaly) {
    addmodaly.classList.remove('modaly-show');
  }
  if(e.target === editmodaly) {
    editmodaly.classList.remove('modaly-show');
  }
});


// // Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//   console.log(doc.data());
//   })
// });

// Real time listener
db.collection('recycledproducts').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
      renderUser(change.doc);
    }
  })
})


// Click submit in edit modaly
editmodalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('users').doc(id).update({
    userFirstname: editmodalyForm.userFirstname.value,
    userLastname: editmodalyForm.userLastname.value,
    userEmail: editmodalyForm.userEmail.value,
    userID: editmodalyForm.userID.value,
  });
  
  editmodaly.classList.remove('modaly-show');
  
});

const editUI = ( user) => {
  console.log(user)
  const userTitle = document.getElementById('usertitle')
  userTitle.innerHTML = firebase.auth().currentUser.email
}
