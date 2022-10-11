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
const db = firebase.firestore(app);
const functions = firebase.functions();
const modalyWrapper = document.querySelector('.modaly-wrapper');
const userroledisplay = document.querySelector('.userroledisplay')
// modaly add
const addmodaly = document.querySelector('.add-modaly');
const addmodalyPartsSingle = document.querySelector('.addPartmodaly');
const addmodalySubssSingle = document.querySelector('.addSubsmodaly');
const addModalyForm = document.querySelector('.add-modaly .form');
const addModalyParts = document.querySelector('.addPartmodaly .form');
const addModalySubs = document.querySelector('.addSubsmodaly .form');
const closebtn = document.querySelector('.action-button-close')

// modaly edit
const editmodaly = document.querySelector('.edit-modaly');
const editmodalyForm = document.querySelector('.edit-modaly .form');
const btnprAdd = document.querySelector('.btnpr-add');
const tableUsers = document.querySelector('.table-users');

// modaly view
const viewmodaly = document.querySelector('.view-modaly');
const viewmodalyForm = document.querySelector('.view-modaly .form');
const adminElement = document.querySelector('.adminelement')
const notadminElement = document.querySelectorAll('.notadmin')
const usertest = document.getElementById("usertest");
const partsName = document.querySelector('.partsName')
const editpartsName = document.querySelector('.editpartsName')
const materiallist = document.querySelector('.materiallist')
const subslist = document.querySelector('.subslist')

let id;


// const renderTest = doc => {
// //   console.log(doc)
// //   const tl = `
// //  <a class="mb-1 " id="usertest" > ${doc.data().productClass}</a>
// //   `
// //     usertest.insertAdjacentHTML('beforeend', tl);
// // }

// Create element and render users
const renderUser = doc => {
  const tr = `
   
   
     
       <tr data-id='${doc.id}'>
      <td>${doc.data().selectiveMaterials}</td>
     <td>${doc.data().reusability}</td>
      <td>${doc.data().recyclability}</td>
       <td>${doc.data().recoverability}</td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);

//add parts
//  const btnpradd'substances' = document.querySelector(`[data-id='${doc.id}'] .btnpr-addSubs`);
// btnpradd'substances'.addEventListener('click', () => {
//   addmodalySubssSingle.classList.add('modaly-show');

//   addModalySubs.addmaterialName.value = '';

//    addModalyParts.addEventListener('submit', e => {
//   e.preventDefault();
//   // console.log(doc.id, " => ", doc.data());
//   db.collection('substances').doc(`${doc.id}`).collection('substances').add({
//     substanceName: addModalySubs.addmaterialName.value,
//     substanceGroup: addModalySubs.addmaterialGroup.value,
//     substanceClassId: addModalySubs.addmaterialClassID.value,
//     substanceRecycleContent: addModalySubs.addmaterialRecycleContent.value,
//     substanceRecycleType: addModalySubs.addmaterialRecycleType.value,
//     substanceMassg: addModalySubs.addmaterialMassg.value,
//     substanceMassPerc: addModalySubs.addmaterialMassPerc.value
    
  
//   })})

 

//   })







// Click on view product button

 


  // Click edit user
  // const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  // btnprEdit.addEventListener('click', () => {
  //   editmodaly.classList.add('modaly-show');
  //   const editHeader = document.querySelector('.editheader')
  //   id = doc.id;
  //   editHeader.innerHTML = 'Edit ' + doc.data().subtanceName
  //   editmodalyForm.editsubstanceName.value = doc.data().subtanceName;
  //   editmodalyForm.editcas.value = doc.data().casnumber;
  //   editmodalyForm.editcrm.value = doc.data().crm;
  //   editmodalyForm.editrohs.value = doc.data().rohs;
  //   editmodalyForm.editsubstanceMassg.value = doc.data().substancemassg;
  //   editmodalyForm.editsubstanceMassPerc.value = doc.data().substancemassperc;
    
    

    
  //   //edit the parts section
    

   

  // });

  

  // Click delete user
  // const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
  // btnprDelete.addEventListener('click', () => {
  //   db.collection('substances').doc(`${doc.id}`).delete().then(() => {
  //     console.log('Document succesfully deleted!');
  //   }).catch(err => {
  //     console.log('Error removing document', err);
  //   });
  // });


  //  // get subcollection data 
  // const btnprget = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  // btnprget.addEventListener('click', () => {

  // db.collection('substances').doc(`${doc.id}`).collection('parts').get()
  //   .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         conso
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.data().partName);
  //       });
  //   })
  //   .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //   });
  // });

  


}
 




// Click add user button
btnprAdd.addEventListener('click', () => {
  addmodaly.classList.add('modaly-show');

//   addModalyForm.substanceName.value = '';
//   addModalyForm.cas.value = '';
//   addModalyForm.crm.value = '';
//   addModalyForm.rohs.value = '';
//   addModalyForm.substanceMassg.value = '';
//   addModalyForm.substanceMassPerc.value = '';



    
        
        // Get the form and file field

		/**
		 * Log the uploaded file to the console
		 * @param {event} Event The file loaded event
		 */
		function logFile (event) {
      event.preventDefault()
			let str = event.target.result;
			let json = JSON.parse(str);
			console.log('string', str);
			console.log('json', json);
for(let i = 0; i < json.length; i++) {
    let obj = json[i];


      
       db.collection('selectivematerials').add({
     selectiveMaterials: obj.selectiveMaterials,
            reusability: obj.reusabiity,
            recyclability: obj.recyclability,
            recoverability:obj.recoverability,
          
        
       
        }) .then(()=> {
      console.log("Documents Added!")
    });
}


		}

		/**
		 * Handle submit events
		 * @param  {Event} event The event object
		 */
		function handleSubmit (event) {

			// Stop the form from reloading the page
			event.preventDefault();

			// If there's no file, do nothing
			if (!file.value.length) return;

			// Create a new FileReader() object
			let reader = new FileReader();

			// Setup the callback event to run when the file is read
			reader.onload = logFile;

			// Read the file
			reader.readAsText(file.files[0]);


    
		}


		let form = document.querySelector('#upload');
		let file = document.querySelector('.filey');
		// Listen for submit events
		form.addEventListener('submit', handleSubmit);



  
});

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
db.collection('selectivematerials').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
        // renderTest(change.doc);
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
        // renderTest(change.doc);
    }
  })
})

// Click submit in add modaly
addModalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('substances').add({
    subtanceName: addModalyForm.substanceName.value,
    casnumber: addModalyForm.cas.value,
    crm: addModalyForm.crm.value,
    rohs: addModalyForm.rohs.value,
    substancemassg: addModalyForm.substanceMassg.value,
    
    substancemassperc: addModalyForm.substanceMassPerc.value,

    

  });
  modalyWrapper.classList.remove('modaly-show');
});

// Click submit in edit modaly
editmodalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('substances').doc(id).update({
    subtanceName: editmodalyForm.editsubstanceName.value,
    casnumber: editmodalyForm.editcas.value,
    crm: editmodalyForm.editcrm.value,
    rohs: editmodalyForm.editrohs.value,
    substancemassg: editmodalyForm.editsubstanceMassg.value,
    substancemassperc: editmodalyForm.editsubstanceMassPerc.value,
   


     
  });
    
  editmodaly.classList.remove('modaly-show');
  });


firebase.auth().onAuthStateChanged(user => {
  const userEmailCard = document.getElementById('useremailcard')
 
  userEmailCard.innerHTML = user.email
  
})

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
     const notadminElement = document.querySelectorAll('.notadmin')
     
      
    if(user.admin) {
      // document.addEventListener('DOMContentLoaded', ()=> {
        
      // })
    const firstcreation = document.getElementById('lastsignin')
     const userDisplay = document.getElementById('userDisplay')
      const adminElement = document.querySelectorAll('.adminelement');
    adminElement.forEach(item => item.style.display = 'flex');
     notadminElement.forEach(item => item.style.display = 'none');
     
      userTitleCard.innerHTML = 'Product Manufacturer'
      console.log("This User is an admin")
      const firstcreationtime = firebase.auth().currentUser.metadata.creationTime
      const userDisplayName = firebase.auth().currentUser.displayName
    console.log(user.metadata.lastSignInTime)
    console.log(firebase.auth().currentUser.displayName)
    firstcreation.innerHTML = "Since "  + firstcreationtime;
    userDisplay.innerHTML = userDisplayName;
    } else {
       const userTitleCard = document.getElementById('usertitle')
       
       const lastsignin = document.getElementById('lastsignin')
        const adminElement = document.querySelectorAll('.adminelement');
        const notadminElement = document.querySelectorAll('.notadmin')
    adminElement.forEach(item => item.style.display = 'none');
    notadminElement.forEach(item => item.style.display = 'flex');
    lastsignindata = firebase.auth().currentUser.metadata.lastSignInTime
    console.log(lastsignindata)
    // notadminElement.style.display = 'flex'
    userTitleCard.innerHTML = 'Viewer'
     lastsignin.innerHTML = ''

    }

  } else {
   
    console.log("not an admin")
  }
}






