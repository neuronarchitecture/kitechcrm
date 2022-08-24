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
// modaly add
const addmodaly = document.querySelector('.add-modaly');
const addModalyForm = document.querySelector('.add-modaly .form');

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
     <td>${doc.data().productCategory}</td>
      <td>${doc.data().productName}</td>
      <td>${doc.data().productClass}</td>
      <td>${doc.data().productSpecs}</td>
      <td>${doc.data().productWeight}</td>
        <td>${doc.data().productNumber}</td>
   
       <td>${doc.data().field}</td>
      <td>
              <button type="button" class="viewbtn btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollable">
                     view
                     </button>

    
        <button class="adminelement btnpr-edit"> <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#" ><i class="ri-pencil-line mr-0"></i></a></button>


        <button class=" btnpr-delete"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a></button>
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);

// Click on view product button

  const viewbtn = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewbtn.addEventListener('click', ()=> {
      // Get a reference from the dom to the tree elements
     const treeproducttitle = document.querySelector('.treeproducttitle')
      const productCategory = document.querySelector('.productCategory')
       const productName = document.querySelector('.productName')
     const productClass = document.querySelector('.productClass')
     const productSpecs = document.querySelector('.productSpecs')
     const productWeight = document.querySelector('.productWeight')
     const productNumber = document.querySelector('.productNumber')
     const viewpartName = document.querySelector('.viewpartName')
      const viewpartNumber = document.querySelector('.viewpartNumber')
    const viewpartSpecs = document.querySelector('.viewpartSpecs')
    const viewpartWeight = document.querySelector('.viewpartWeight')
    const viewpartMassg = document.querySelector('.viewpartMassg')
    const viewsupplierInfo = document.querySelector('.viewsupplierInfo')
    const viewpartMassPerc = document.querySelector('.viewpartMassPerc')
    const viewreusedPart = document.querySelector('.viewreusedPart')
    const viewmaterialGroup = document.querySelector('.viewmaterialGroup')
    const viewmaterialName = document.querySelector('.viewmaterialName')
    const viewmaterialClassID = document.querySelector('.viewmaterialClassID')
    const viewmaterialRecycleContent = document.querySelector('.viewmaterialRecycleContent')
    const viewmaterialMassg = document.querySelector('.viewmaterialMassg')
    const viewmaterialMassPerc = document.querySelector('.viewmaterialMassPerc')
    const viewmaterialRecycleType = document.querySelector('.viewmaterialRecycleType')
    const viewsubstanceName = document.querySelector('.viewsubstanceName')
    const viewcas = document.querySelector('.viewcas')
    const viewcrm = document.querySelector('.viewcrm')
    const viewrohs = document.querySelector('.viewrohs')
    const viewsubstanceMassg = document.querySelector('.viewsubstanceMassg')
    const viewsubstanceMassPerc = document.querySelector('.viewsubstanceMassPerc')
    // inject data from firebase document to the tree element and display them
     id = doc.id;
     viewpartWeight
     treeproducttitle.innerHTML = 'View ' + doc.data().productName
      productCategory.value =   doc.data().productCategory;
       productName.value =   doc.data().productName;
     productClass.value =   doc.data().productClass;
      productSpecs.value =  doc.data().productSpecs;
       productWeight.value =  doc.data().productWeight;
     productNumber.value =  doc.data().productNumber;
     viewpartName.value =  doc.data().PartName;
     viewpartNumber.value =  doc.data().partNumber;
     viewpartSpecs.value =  doc.data().partSpecs;
     viewpartWeight.value =  doc.data().partMassgEA;
     viewpartMassg.value =  doc.data().partMassg;
       viewsupplierInfo.value =  doc.data().supplierInfo;
     viewpartMassPerc.value =  doc.data().partMassPerc;
     viewreusedPart.value =  doc.data().reusedPart;
     viewmaterialGroup.value =  doc.data().materialGroup;
     viewmaterialName.value =  doc.data().materialName;
     viewmaterialClassID.value =  doc.data().materialClassID;
     viewmaterialRecycleContent.value =  doc.data().materialRecycleContent;
      viewmaterialMassg.value =  doc.data().materialMassg;
     viewmaterialMassPerc.value =  doc.data().materialMassPerc;
     viewmaterialRecycleType.value =  doc.data().materialRecycleType;
     viewsubstanceName.value =  doc.data().substanceName;
     viewcas.value =  doc.data().cas;
     viewcrm.value =  doc.data().crm;
      viewrohs.value =  doc.data().rohs;
     viewsubstanceMassg.value =  doc.data().substanceMassg;
     viewsubstanceMassPerc.value =  doc.data().substanceMassPerc;

     
  })
  

  // Click edit user
  const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprEdit.addEventListener('click', () => {
    editmodaly.classList.add('modaly-show');
    const editHeader = document.querySelector('.editheader')
    id = doc.id;
    editHeader.innerHTML = 'Edit ' + doc.data().productName
    editmodalyForm.productName.value = doc.data().productName;
    editmodalyForm.productSpecs.value = doc.data().productSpecs;
    editmodalyForm.productClass.value = doc.data().productClass;
    editmodalyForm.productWeight.value = doc.data().productWeight;
    editmodalyForm.productNumber.value = doc.data().productNumber;
    editmodalyForm.field.value = doc.data().field;
    editmodalyForm.productCategory.value = doc.data().productCategory;

    
    //edit the parts section
    editmodalyForm.PartName.value = doc.data().PartName;
    editmodalyForm.partNumber.value = doc.data().partNumber;
    editmodalyForm.partSpecs.value = doc.data().partSpecs;
    editmodalyForm.partMassgEA.value = doc.data().partMassgEA;
    editmodalyForm.partMassg.value = doc.data().partMassg;
    editmodalyForm.reusedPart.value = doc.data().reusedPart;
    editmodalyForm.supplierInfo.value = doc.data().supplierInfo;
    editmodalyForm.partMassPerc.value = doc.data().partMassPerc;
    editmodalyForm.reusedPart.value = doc.data().reusedPart;

    //edit the material section
    editmodalyForm.materialGroup.value = doc.data().materialGroup;
    editmodalyForm.materialName.value = doc.data().materialName;
    editmodalyForm.materialClassID.value = doc.data().materialClassID;
    editmodalyForm.materialRecycleContent.value = doc.data().materialRecycleContent;
    editmodalyForm.materialRecycleType.value = doc.data().materialRecycleType;
    editmodalyForm.materialMassg.value = doc.data().materialMassg;
    editmodalyForm.materialMassPerc.value = doc.data().materialMassPerc; 
    //edit the substance section

    editmodalyForm.substanceName.value = doc.data().substanceName;
    editmodalyForm.cas.value = doc.data().cas;
    editmodalyForm.crm.value = doc.data().crm;
    editmodalyForm.rohs.value = doc.data().rohs;
    editmodalyForm.substanceMassg.value = doc.data().substanceMassg;
    editmodalyForm.substanceMassPerc.value = doc.data().substanceMassPerc;
  });

  // Click delete user
  const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
  btnprDelete.addEventListener('click', () => {
    db.collection('recycledproducts').doc(`${doc.id}`).delete().then(() => {
      console.log('Document succesfully deleted!');
    }).catch(err => {
      console.log('Error removing document', err);
    });
  });


   // get subcollection data 
  const btnprget = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprget.addEventListener('click', () => {

  db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log( doc.data().partName);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  });

  


}
 





// Click add user button
btnprAdd.addEventListener('click', () => {
  addmodaly.classList.add('modaly-show');

  addModalyForm.productName.value = '';
  addModalyForm.productSpecs.value = '';
  addModalyForm.productClass.value = '';
  addModalyForm.productWeight.value = '';
  addModalyForm.productNumber.value = '';
  addModalyForm.field.value = '';
  addModalyForm.productCategory.value = '';


  // addModalyForm.PartName.value = '';
  //   addModalyForm.partNumber.value = '';
  //   addModalyForm.partSpecs.value = '';
  //   addModalyForm.partMassgEA.value ='';
  //   addModalyForm.partMassg.value = '';
  //   addModalyForm.reusedPart.value = '';
  //   addModalyForm.supplierInfo.value = '';
  //   addModalyForm.partMassgPerc.value = '';
  //   addModalyForm.reusedPart.value = '';
  
  
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
  db.collection('recycledproducts').add({
    productName: addModalyForm.productName.value,
    productSpecs: addModalyForm.productSpecs.value,
    productClass: addModalyForm.productClass.value,
    productWeight: addModalyForm.productWeight.value,
    productNumber: addModalyForm.productNumber.value,
    field: addModalyForm.field.value,
    productCategory: addModalyForm.productCategory.value,
    // PartName: addModalyForm.PartName.value,
    // partNumber: addModalyForm.partNumber.value,
    // partSpecs:addModalyForm.partSpecs.value,
    // partMassgEA:addModalyForm.partMassgEA.value,
    // partMassg:addModalyForm.partMassg.value,
    // reusedPart:addModalyForm.reusedPart.value,
    // supplierInfo:addModalyForm.supplierInfo.value,
    // partMassgPerc:addModalyForm.partMassgPerc.value,
    // reusedPart:addModalyForm.reusedPart.value,
  });
  modalyWrapper.classList.remove('modaly-show');
});


// Click submit in edit modaly
editmodalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('recycledproducts').doc(id).update({
    productName: editmodalyForm.productName.value,
    productSpecs: editmodalyForm.productSpecs.value,
    productClass: editmodalyForm.productClass.value,
    productWeight: editmodalyForm.productWeight.value,
    productNumber: editmodalyForm.productNumber.value,
    field: editmodalyForm.field.value,
    productCategory: editmodalyForm.productCategory.value,
    //Parts Section 
    PartName: editmodalyForm.PartName.value,
    partNumber: editmodalyForm.partNumber.value,
    partSpecs:editmodalyForm.partSpecs.value,
    partMassgEA:editmodalyForm.partMassgEA.value,
    partMassg:editmodalyForm.partMassg.value,
    reusedPart:editmodalyForm.reusedPart.value,
    supplierInfo:editmodalyForm.supplierInfo.value,
    partMassPerc:editmodalyForm.partMassPerc.value,
    reusedPart:editmodalyForm.reusedPart.value,
    // Material Section
     materialGroup:editmodalyForm.materialGroup.value,
    materialName:editmodalyForm.materialName.value,
    materialClassID:editmodalyForm.materialClassID.value,
    materialRecycleContent:editmodalyForm.materialRecycleContent.value,
    materialRecycleType:editmodalyForm.materialRecycleType.value,
    materialMassg:editmodalyForm.materialMassg.value,
    materialMassPerc:editmodalyForm.materialMassPerc.value,

    // Substance Section 

    
    substanceName:editmodalyForm.substanceName.value,
    cas:editmodalyForm.cas.value,
    crm:editmodalyForm.crm.value,
    rohs:editmodalyForm.rohs.value,
    substanceMassg:editmodalyForm.substanceMassg.value,
    substanceMassPerc:editmodalyForm.substanceMassPerc.value,
     
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