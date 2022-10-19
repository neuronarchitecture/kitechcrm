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

const tableUsers = document.querySelector('.table-users');


let id;



// Create element and render users
const renderUser = (doc) => {


  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().userFirstname}</td>
      <td>${doc.data().userLastname}</td>
      <td>${doc.data().userEmail}</td>
      <td>${doc.data().userID}</td>
      <td>
        <button type="button" class="viewbtn btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollable">
                     view
                     </button>  
        <button class=" btnpr-edit"> <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#" ><i class="ri-pencil-line mr-0"></i></a></button>


        <button class=" btnpr-delete"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a></button>


      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);

  // Click edit user
  const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprEdit.addEventListener('click', () => {
    editmodaly.classList.add('modaly-show');
    const editHeader = document.querySelector('.editheader')
    id = doc.id;
    editHeader.innerHTML = 'Edit ' + doc.data().userFirstname
    editmodalyForm.userFirstname.value = doc.data().userFirstname;
    editmodalyForm.userLastname.value = doc.data().userLastname;
    editmodalyForm.userEmail.value = doc.data().userEmail;
    editmodalyForm.userID.value = doc.data().userID;

  });

  // Click delete user
  const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
  btnprDelete.addEventListener('click', () => {
    db.collection('users').doc(`${doc.id}`).delete().then(() => {
      console.log('Document succesfully deleted!');
    }).catch(err => {
      console.log('Error removing document', err);
    });
  });

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
db.collection('users').onSnapshot(snapshot => {
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

const adminForm = document.querySelector('.admin-actions');
const makeAdmin = document.getElementById('makeAdmin');
makeAdmin.addEventListener('click', e=> {
  e.preventDefault;
  const adminEmail = document.querySelector('.admin-email').value
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole({email: adminEmail}).then(result => {
    console.log(result);
  })
})

