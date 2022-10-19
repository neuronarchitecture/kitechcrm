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
const materialtitle = document.querySelector('.modal-title')
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
const btnpraddParts = document.querySelector('.btnpr-addParts');
// modaly view
const viewmodaly = document.querySelector('.view-modaly');
const viewmodalyForm = document.querySelector('.view-modaly .form');
const adminElement = document.querySelector('.adminelement')
const notadminElement = document.querySelectorAll('.notadmin')
const usertest = document.getElementById("usertest");
const partsName = document.querySelector('.partsName')
const materiallist = document.querySelector('.materiallist')
const substancelist = document.querySelector('#substancelist')
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
     <td>${doc.data().partName}</td>
      <td>${doc.data().partNumber}</td>
      <td>${doc.data().partSpecs}</td>
      <td>${doc.data().partMassgEA}</td>
      <td>${doc.data().partMassg}</td>
      <td>${doc.data().partMassPerc}</td>
      <td>${doc.data().reusedPart}</td>
        <td>${doc.data().supplierInfo}</td>
         <td>${doc.data().substancelist}</td>
      <td>
    <button type="button" id="btnprview" class="viewbtn btn btn-primary mr-2 " data-toggle="modal" data-target="#exampleModalScrollable">view</button>
        <button class="adminelement btnpr-edit"> <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#" ><i class="ri-pencil-line mr-0"></i></a></button>
         <button class="btnpr-addParts"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-add-circle-line"></i></a></button>
         
        <button class=" btnpr-delete"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a></button>
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);
  
 const viewbtn = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewbtn.addEventListener('click', ()=> {
  materialtitle.innerHTML = `${doc.data().partName}`
 const materiallist = document.querySelector('.materiallist')
 materiallist.innerHTML = " ";
    //click add parts button
 const setupMaterialUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const material = doc.data();
      console.log(material)
      const li = `
       <section class="content">
  <div class="accordion">
    <label class="accordion__item">
      <input type="checkbox" name="accordion">
      <div class="accordion__title">${doc.data().materialName}</div>
      <div class="accordion__content">
      <br/> <br/>
      <button type="button" id="btnprview" class="viewbtn btn btn-primary mr-2 " data-toggle="modal" data-target="#exampleModalScrollable">view</button>
        <button class="adminelement btnpr-edit"> <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#" ><i class="ri-pencil-line mr-0"></i></a></button>
         <button class="btnpr-addParts"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-add-circle-line"></i></a></button>
         
        <button class=" btnpr-delete"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a></button>
           <br/> <br/>
      Material Group: ${doc.data().materialGroup} <br/> <br/>
      Material Class ID: ${doc.data().materialClassId} <br/> <br/>
      Material Recycle Content: ${doc.data().materialRecycleContent} <br/> <br/>
      Material Recycle Type: ${doc.data().materialRecycleType} <br/> <br/>
      Material Mass (g): ${doc.data().materialMassg} <br/> <br/>
      Material Mass (%): ${doc.data().materialMassPerc} <br/> <br/>
      
    
      
    </label>
    
  </div>
</section>
      
      `;
      html+=li
    })

    materiallist.insertAdjacentHTML('beforeend', html)
  }
  
   db.collection('recycledparts').doc(`${doc.id}`).collection('materials').get().then(snapshot => {
    setupMaterialUI(snapshot.docs)
   })})

//add parts




//add materials 
 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addParts`);
btnpraddParts.addEventListener('click', () => {
  addmodalyPartsSingle.classList.add('modaly-show');

  addModalyParts.addmaterialName.value = '';

   addModalyParts.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(doc.id, " => ", doc.data());
  db.collection('recycledparts').doc(`${doc.id}`).collection('materials').add({
    materialName: addModalyParts.addmaterialName.value,
    materialGroup: addModalyParts.addmaterialGroup.value,
    materialClassId: addModalyParts.addmaterialClassID.value,
    materialRecycleContent: addModalyParts.addmaterialRecycleContent.value,
    materialRecycleType: addModalyParts.addmaterialRecycleType.value,
    materialMassg: addModalyParts.addmaterialMassg.value,
    materialMassPerc: addModalyParts.addmaterialMassPerc.value,
    
  })})

 

  })



   closebtn.addEventListener('click', () =>{
    addmodalyPartsSingle.classList.remove('modaly-show');
   })







  //add to subcollection
  // const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addParts`);
 
  

  // Click edit user
  const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprEdit.addEventListener('click', () => {
    editmodaly.classList.add('modaly-show');
    const editHeader = document.querySelector('.editheader')
    id = doc.id;
    editHeader.innerHTML = 'Edit ' + doc.data().partName
      editmodalyForm.editpartName.value = doc.data().partName;
    editmodalyForm.editpartNumber.value = doc.data().partNumber;
    editmodalyForm.editpartSpecs.value = doc.data().partSpecs;
    editmodalyForm.editpartMassgEA.value = doc.data().partMassgEA;
    editmodalyForm.editpartMassg.value = doc.data().partMassg;
     editmodalyForm.editpartMassPerc.value = doc.data().partMassPerc;
    editmodalyForm.editreusedPart.value = doc.data().reusedPart;
    editmodalyForm.editsupplierInfo.value = doc.data().supplierInfo;
     editmodalyForm.editsubstancelist.value = doc.data().substancelist;
    

    
    //edit the parts section
    


  });

  // Click delete user
  const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
  btnprDelete.addEventListener('click', () => {
    db.collection('recycledparts').doc(`${doc.id}`).delete().then(() => {
      console.log('Document succesfully deleted!');
    }).catch(err => {
      console.log('Error removing document', err);
    });
  });


   // get subcollection data 
  // const btnprget = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  // btnprget.addEventListener('click', () => {

  // db.collection('recycledparts').doc(`${doc.id}`).collection('parts').get()
  //   .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log( doc.data().partName);
  //       });
  //   })
  //   .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //   });
  // });

  
// const btnpraddSubs = document.querySelector(`[data-id='${doc.id}'] .btnpr-addSubs`);
// btnpraddSubs.addEventListener('click', () => {
//   addmodalySubssSingle.classList.add('modaly-show');

//   addModalySubs.addsubstanceName.value = '';

//    addModalySubs.addEventListener('submit', e => {
//   e.preventDefault();
//   // console.log(doc.id, " => ", doc.data());
  
//   db.collection('recycledparts').doc(`${doc.id}`).collection('materials').doc(`${doc.id}`).collection('substances').add({
//     substanceName: addModalySubs.addsubstanceName.value,
//     cas: addModalySubs.addcas.value,
//     crm: addModalySubs.addcrm.value,
//     rohs: addModalySubs.addrohs.value,
//     substanceMassg: addModalySubs.addsubstanceMassg.value,
//     substanceMassPerc: addModalySubs.addsubstanceMassPerc.value,
//     materialMassPerc: addModalySubs.addmaterialMassPerc.value

//   })})

//   })
//    closebtn.addEventListener('click', () =>{
//     addmodalySubssSingle.classList.remove('modaly-show');
//    })

}
 





// Click add user button
btnprAdd.addEventListener('click', () => {
  addmodaly.classList.add('modaly-show');

  addModalyForm.addpartName.value = '';
  addModalyForm.addpartNumber.value = '';
  addModalyForm.addpartSpecs.value = '';
  addModalyForm.addpartMassgEA.value = '';
  addModalyForm.addpartMassg.value = '';
  addModalyForm.addpartMassPerc.value = '';
  addModalyForm.addreusedPart.value = '';
  addModalyForm.addsupplierInfo.value = '';
    addModalyForm.substancelist.value = '';


  
  
});

// User click anyware outside the modaly
window.addEventListener('click', e => {
  if(e.target === addmodaly) {
    addmodaly.classList.remove('modaly-show');
  }
  if(e.target === editmodaly) {
    editmodaly.classList.remove('modaly-show');
  }
  if(e.target === viewmodaly) {
    viewmodaly.classList.remove('modaly-show');
  }
   if(e.target === addmodalyPartsSingle) {
    addmodalyPartsSingle.classList.remove('modaly-show');
  }
});


// Get all users


// Real time listener
db.collection('recycledparts').onSnapshot(snapshot => {
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
  db.collection('recycledparts').add({
   partName: addModalyForm.addpartName.value,
    partNumber: addModalyForm.addpartNumber.value,
    partSpecs: addModalyForm.addpartSpecs.value,
    partMassgEA: addModalyForm.addpartMassgEA.value,
    partMassg: addModalyForm.addpartMassg.value,
    partMassPerc: addModalyForm.addpartMassPerc.value,
    reusedPart: addModalyForm.addreusedPart.value,
    supplierInfo: addModalyForm.addsupplierInfo.value,
    substancelist: addModalyForm.substancelist.value,
  });
  modalyWrapper.classList.remove('modaly-show');
});


// Click submit in edit modaly
editmodalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('recycledparts').doc(id).update({
 partName: editmodalyForm.editpartName.value,
    partNumber: editmodalyForm.editpartNumber.value,
    partSpecs: editmodalyForm.editpartSpecs.value,
    partMassgEA: editmodalyForm.editpartMassgEA.value,
    partMassg: editmodalyForm.editpartMassg.value,
    partMassPerc: editmodalyForm.editpartMassPerc.value,
    reusedPart: editmodalyForm.editreusedPart.value,
    supplierInfo: editmodalyForm.editsupplierInfo.value,
    substancelist: editmodalyForm.editsubstancelist.value,
  });
  editmodaly.classList.remove('modaly-show');
  });



  
    //click add subsctance button
   
 


 

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
    userTitleCard.innerHTML = 'Part Supplier'
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






 db.collection("substances")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().subtanceName}</option>
  `;
  addModalyForm.substancelist.insertAdjacentHTML('beforeend', tm);
  editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
