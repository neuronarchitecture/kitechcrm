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
const partslist = document.querySelector('.partslist')
const subslist = document.querySelector('.subslist')
const supplierinfo = document.querySelector('#supplierinfo')
const partname = document.querySelector("#partname")
const checkpartdata = document.querySelector('.checkpartdata')

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
     <td><img src="./productimage.png" style="height: 60px;
    width: 60px;" alt=""></td>
     <td>${doc.data().productCategory}</td>
      <td>${doc.data().productName}</td>
      <td>${doc.data().productClass}</td>
      <td>${doc.data().productSpecs}</td>
      <td>${doc.data().productWeight}</td>
        <td>${doc.data().productNumber}</td>


    <td>
    <div class="btngroup">
     <span href="#" class="button btn-large viewbtn" data-toggle="modal" data-target="#exampleModalScrollable">View </span>
     <div class="button-dropdown">
        <a class="button toggle"></a>
        <ul class="dropdown">
          <li><a href="#" class="dropdown-link btnpr-edit">Edit</a></li>
          <li><a href="#" class="dropdown-link btnpr-delete">Delete</a></li>
          <li><a href="#" class="dropdown-link">Download</a></li>
        </ul>
      </div>
    </div>
   
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);


// var productsRef = db.collection("recycledproducts");
// productsRef.where("productName", "==", "testparts")
// .get()
// .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

//add parts
//  const btnpraddSubstances = document.querySelector(`[data-id='${doc.id}'] .btnpr-addSubs`);
// btnpraddSubstances.addEventListener('click', () => {
//   addmodalySubssSingle.classList.add('modaly-show');

//   addModalySubs.addmaterialName.value = '';

//    addModalyParts.addEventListener('submit', e => {
//   e.preventDefault();
//   // console.log(doc.id, " => ", doc.data());
//   db.collection('recycledproducts').doc(`${doc.id}`).collection('substances').add({
//     substanceName: addModalySubs.addmaterialName.value,
//     substanceGroup: addModalySubs.addmaterialGroup.value,
//     substanceClassId: addModalySubs.addmaterialClassID.value,
//     substanceRecycleContent: addModalySubs.addmaterialRecycleContent.value,
//     substanceRecycleType: addModalySubs.addmaterialRecycleType.value,
//     substanceMassg: addModalySubs.addmaterialMassg.value,
//     substanceMassPerc: addModalySubs.addmaterialMassPerc.value
    
  
//   })})

 

//   })







   closebtn.addEventListener('click', () =>{
    addmodalyPartsSingle.classList.remove('modaly-show');
   })

// Click on view product button

  const viewpartspr = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewpartspr.addEventListener('click', ()=> {

    //click add parts button
//  const setupPartsUI = (data) => {
//     let html = '';
//     data.forEach(doc=> {
//       const material = doc.data();
//       console.log(material)
//       const li = `
//        <tr data-id='${doc.id}'>
//       <td>${doc.data().materialGroup}</td>
//      <td>${doc.data().materialName}</td>
//       <td>${doc.data().materialClassId}</td>
//        <td>${doc.data().materialRecycleContent}</td>
//         <td>${doc.data().materialRecycleType}</td>
//          <td>${doc.data().materialMassg}</td>
//      <td>${doc.data().materialMassPerc}</td>
//       <td>
//         <div class="row">
      
//       <button class="adminelement btnpr-edit"> <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#" ><i class="ri-pencil-line mr-0"></i></a></button>
       
//         <button class=" btnpr-delete"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a></button>
//         </td>
//         </div>
      

      
    
//     </tr>
//       `;
//       html+=li
//     })

//     partslist.insertAdjacentHTML('beforeend', html)
  // }
  
  //  db.collection('recycledproducts').doc(`${doc.id}`).collection('materials').get().then(snapshot => {
  //   setupMaterialUI(snapshot.docs)
  //  })


   
   
      // Get a reference from the dom to the tree elements
     const treeproducttitle = document.querySelector('.treeproducttitle')
      const productCategory = document.querySelector('.productCategory')
       const productName = document.querySelector('.productName')
     const productClass = document.querySelector('.productClass')
     const productSpecs = document.querySelector('.productSpecs')
     const productWeight = document.querySelector('.productWeight')
     const productNumber = document.querySelector('.productNumber')
     
    // inject data from firebase document to the tree element and display them
     id = doc.id;
     
     treeproducttitle.innerHTML = 'View ' + doc.data().productName
      productCategory.value =   doc.data().productCategory;
       productName.value =   doc.data().productName;
     productClass.value =   doc.data().productClass;
      productSpecs.value =  doc.data().productSpecs;
       productWeight.value =  doc.data().productWeight;
     productNumber.value =  doc.data().productNumber;
    

     
  })


//add parts 
 const btnpredit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
const addPart = document.querySelector('.addPart')
btnpredit.addEventListener('click', () => {
    console.log(doc.id, " => ", doc.data());
   addPart.addEventListener('click', e => {
  e.preventDefault();

  db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').add({
    partNumber: partNumber.value,
    partSpecs: partSpecs.value,
    partMassgEA: partMassgEA.value,
    partMassg: partMassg.value,
    partMassPerc: partMassPerc.value,
    reusedPart: partClass.value,
    companyName: companyName.value,
    
  })
  // materialtitle.innerHTML = `${doc.data().partName}`

    //view parts list for a single product
 

})
})


   btnpredit.addEventListener('click', () => {
     const partslist = document.querySelector('.partslist')
 partslist.innerHTML = "";
 const setupPartsUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const parts = doc.data();
      console.log(parts)
      const pl = `
    <tr data-id='${doc.id}'>
     <td><img src="./productimage.png" style="height: 60px;
    width: 60px;" alt=""></td>
     <td>${doc.data().companyName}</td>
      <td>${doc.data().partMassPerc}</td>
      <td>${doc.data().partMassg}</td>
      <td>${doc.data().partMassgEA}</td>
      <td>${doc.data().partNumber}</td>
        <td>${doc.data().partSpecs}</td>
         <td>${doc.data().reusedPart}</td>


    <td>
    <div class="btngroup">
     <span href="#" class="button btn-large viewbtn" data-toggle="modal" data-target="#exampleModalScrollable">View </span>
     <div class="button-dropdown">
        <a class="button toggle"></a>
        <ul class="dropdown">
          <li><a href="#" class="dropdown-link btnpr-edit">Edit</a></li>
          <li><a href="#" class="dropdown-link btnpr-delete">Delete</a></li>
          <li><a href="#" class="dropdown-link">Download</a></li>
        </ul>
      </div>
    </div>
   
      </td>
    </tr>
      `;
      html+=pl
    })

    partslist.insertAdjacentHTML('beforeend', html)
  }
  
   db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').get().then(snapshot => {
    setupPartsUI(snapshot.docs)
   })
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
    editmodalyForm.productCategory.value = doc.data().productCategory;
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


  //  // get subcollection data 
  // const btnprget = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  // btnprget.addEventListener('click', () => {

  // db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').get()
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

  addModalyForm.productName.value = '';
  addModalyForm.productSpecs.value = '';
  addModalyForm.productClass.value = '';
  addModalyForm.productWeight.value = '';
  addModalyForm.productNumber.value = '';
  
  addModalyForm.productCategory.value = '';


  
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
    
    productCategory: addModalyForm.productCategory.value,

    

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
    productCategory: editmodalyForm.productCategory.value,
   
     
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
    // firstcreation.innerHTML = "Since "  + firstcreationtime;
    // userDisplay.innerHTML = userDisplayName;
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




 db.collection("recycledparts")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const td = `
      <option>${doc.data().partName}</option>
  `;
  partsName.insertAdjacentHTML('beforeend', td);
  editpartsName.insertAdjacentHTML('beforeend', td);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });



  db.collection("recycledparts")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().supplierInfo}</option>
  `;

   supplierinfo.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  

    db.collection("recycledparts")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().partName}</option>
  `;

   partname.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

const partNumber = document.querySelector('#partNumber')
const partSpecs = document.querySelector('#partSpecs')
const partMassgEA = document.querySelector('#partMassgEA')
const partMassg = document.querySelector('#partMassg')
const partMassPerc = document.querySelector('#partMassPerc')
const partClass = document.querySelector('#partClass')
const companyName = document.querySelector('#companyName')

checkpartdata.addEventListener('click', () => {
 
  const partsRef = db.collection("recycledparts")
    partsRef.where("supplierInfo", "==", supplierinfo.value).where("partName", "==", partname.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          partNumber.value = doc.data().partNumber
          partSpecs.value = doc.data().partSpecs
          partMassgEA.value = doc.data().partMassgEA
          partMassg.value = doc.data().partMassg
          partMassPerc.value = doc.data().partMassPerc
          partClass.value = doc.data().reusedPart
          companyName.value = doc.data().companyName

        });
    })
  
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
})






//   var productsRef = db.collection("recycledparts");
// productsRef.where("productName", "==", "testparts")
// .get()
// .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

// 
