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
const addPPmodaly = document.querySelector('.addPPmodaly')

// modaly edit
const editmodaly = document.querySelector('.edit-modaly');
const editmodalyForm = document.querySelector('.edit-modaly .form');
const btnprAdd = document.querySelector('.btnpr-add');
const tableUsers = document.querySelector('.table-users');
const editForm = document.querySelector('#editForm');

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

const checkpartdata = document.querySelector('.checkpartdata')
const addPart = document.querySelector('.addPart')
const partsTab = document.querySelector('#pills-contact-tab-fill')

//parts references 
    const supplierinfo = document.querySelector('#supplierinfo')
const partname = document.querySelector('#partname')
const quantity = document.querySelector('#quantity')
const partNumber = document.querySelector('#partNumber')
const partSpecs = document.querySelector('#partSpecs')
const partMassgEA = document.querySelector('#partMassgEA')
const partMassg = document.querySelector('#partMassg')
const partMassPerc = document.querySelector('#partMassPerc')
const partClass = document.querySelector('#partClass')
const companyName = document.querySelector('#companyName')

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
      <td>${doc.data().productMN}</td>
      <td>${doc.data().productWeight}</td>
      <td>${doc.data().productSize}</td>
        <td>${doc.data().registeredDate}</td>
           <td>${doc.data().productStatus}</td>
             <td>${doc.data().memo}</td>


    <td>
    <div class="btngroup">
     <span href="#" class="button btn-large viewbtn" data-toggle="modal" data-target="#exampleModalScrollable">View </span>
     <div class="button-dropdown">
        <a class="button toggle"></a>
        <ul class="dropdown">
          <li><a href="#" class="dropdown-link btnpr-edit">Edit</a></li>
          <li><a href="#" class="dropdown-link btnpr-addPP">Add New parts</a></li>
          <li><a href="#" class="dropdown-link btnpr-delete">Delete</a></li>
          <li><a href="#" class="dropdown-link">Download</a></li>
        </ul>
      </div>
    </div>
   
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);





   closebtn.addEventListener('click', () =>{
    addmodalyPartsSingle.classList.remove('modaly-show');
   })

// Click on view product button

  const viewpartspr = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewpartspr.addEventListener('click', ()=> {

  
   
      // Get a reference from the dom to the tree elements
     const treeproducttitle = document.querySelector('.treeproducttitle')
      const productCategory = document.querySelector('.productCategory')
       const productStatus = document.querySelector('.productStatus')
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
     productStatus.value =  doc.data().productStatus;
    

     
  })


//add parts 
 const btnpredit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);

 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addPP`);
btnpraddParts.addEventListener('click', () => {
  addPPmodaly.classList.add('modaly-show');

 

   addPart.addEventListener('click', e => {
  e.preventDefault();
  // console.log(doc.id, " => ", doc.data());
  db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').add({
    partname: partname.value,
    supplierinfo: supplierinfo.value,
    quantity: quantity.value,
    partNumber: partNumber.value,
    partSpecs: partSpecs.value,
    partMassgEA: partMassgEA.value,
    partMassg: partMassg.value,
    partMassPerc: partMassPerc.value,
    reusedPart: partClass.value,
    companyName: companyName.value,
    
  })
  const addPPForm = document.querySelector('.addPPForm')
setTimeout(resetForm, 5000);
 function resetForm() {
addPPForm.reset();
}


})
  })

 const viewbtn = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
   viewbtn.addEventListener('click', () => {
     const partslist = document.querySelector('.partslist')
 partslist.innerHTML = "";
 const setupPartsUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const parts = doc.data();
      console.log(parts)
      const pl = `
    
    
     <td>${doc.data().partname}</td>
      <td>${doc.data().partSpecs}</td>
         <td>${doc.data().partMassgEA}</td>
           <td>${doc.data().quantity}</td>
     <td>${doc.data().partMassg}</td>
   
         <td>${doc.data().reusedPart}</td>
          <td>${doc.data().companyName}</td>
         

 
    </tr>
      `;
      html+=pl
    })

    partslist.insertAdjacentHTML('beforeend', html)
  }
  
   db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').get().then(snapshot => {
    setupPartsUI(snapshot.docs)
    
    let btnppDelete = document.querySelectorAll(".btnppdelete");
    for (let i = 0; i < btnppDelete.length; i++) {
      let deleteData = btnppDelete[i].getAttribute("data-id");
 btnppDelete[i].addEventListener('click', () => {

   let tr = document.getElementById(deleteData);
 
    
      tr.remove(tr);
   db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').doc(deleteData).delete().then(() => {
      console.log('Document succesfully deleted!');
    })
 
    .catch(err => {
      console.log('Error removing document', err);
    });
  })
}



 
   })
   

    })


  // Click edit user
  const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprEdit.addEventListener('click', () => {
    editmodaly.classList.add('modaly-show');
    const editHeader = document.querySelector('.editheader')
    id = doc.id;
    editHeader.innerHTML = 'Edit ' + doc.data().productName
     editmodalyForm.productCategory.value = doc.data().productCategory;
    editmodalyForm.productName.value = doc.data().productName;
       editmodalyForm.editmodelName.value = doc.data().productMN;
    editmodalyForm.productWeight.value = doc.data().productWeight;
    editmodalyForm.editproductSize.value = doc.data().productSize;
    editmodalyForm.editregisteredDate.value = doc.data().registeredDate;
    editmodalyForm.editproductStatus.value = doc.data().productStatus;
      editmodalyForm.editMemo.value = doc.data().memo;
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


// document.addEventListener('DOMContentLoaded', function() {
  
//     // db.collection('recycledproducts').doc(`${doc.id}`).delete().then(() => {
//     //   console.log('Document succesfully deleted!');
//     // }).catch(err => {
//     //   console.log('Error removing document', err);
//     // });
//   });
// })

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
 addModalyForm.productCategory.value = '';
  addModalyForm.productName.value = '';
  addModalyForm.productMN.value = '';
  addModalyForm.productWeight.value = '';
  addModalyForm.productSize.value = '';
   addModalyForm.registeredDate.value = '';
  addModalyForm.productStatus.value = '';
    addModalyForm.memo.value = '';


  
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

   if(e.target === addPPmodaly) {
    addPPmodaly.classList.remove('modaly-show');
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


  // btnpDelete.addEventListener('click', () => {
    
  //   console.log("hello world!")
  
  
  // });

const addProduct = document.querySelector('.addProduct')

// Click submit in add modaly
addProduct.addEventListener('click', e => {
  e.preventDefault();
  db.collection('recycledproducts').add({
    productCategory: addModalyForm.productCategory.value,
    productName: addModalyForm.productName.value,
    productMN: addModalyForm.productMN.value,
    productWeight: addModalyForm.productWeight.value,
    productSize: addModalyForm.productSize.value,
    registeredDate: addModalyForm.registeredDate.value,
    productStatus: addModalyForm.productStatus.value,
    memo: addModalyForm.memo.value

    

  });

  setTimeout(closeForm, 3500);
 function closeForm() {
 modalyWrapper.classList.remove('modaly-show');
}

 
});


// Click submit in edit modaly
editForm.addEventListener('click', e => {
  e.preventDefault();
  db.collection('recycledproducts').doc(id).update({
    productCategory: editmodalyForm.productCategory.value,
    productName: editmodalyForm.productName.value,
    productMN: editmodalyForm.editmodelName.value,
    productWeight: editmodalyForm.productWeight.value,
    productSize: editmodalyForm.editproductSize.value,
    registeredDate: editmodalyForm.editregisteredDate.value,
   productStatus: editmodalyForm.editproductStatus.value,
   memo: editmodalyForm.editMemo.value
     
  });
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




//  db.collection("recycledparts")
//     .get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//            const td = `
//       <option>${doc.data().partName}</option>
//   `;
//   partsName.insertAdjacentHTML('beforeend', td);
//   editpartsName.insertAdjacentHTML('beforeend', td);
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

const multiParts = document.querySelector('.multiParts')

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
      <option value="${doc.data().partName} ">${doc.data().partName}</option>
  `;
multiParts.insertAdjacentHTML('beforeend', tm);
   partname.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


checkpartdata.addEventListener('click', () => {
 
  const partsRef = db.collection("recycledparts")
    partsRef.where("supplierInfo", "==", supplierinfo.value).where("partName", "==", partname.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
             partname.value = doc.data().partname
          supplierinfo.value = doc.data().supplierinfo
            quantity.value = doc.data().quantity
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
document.querySelector('.multiParts').onclick =  function() {
    var selected = [];
    for (var option of document.querySelector('.multiParts').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
const docData = {AddedParts: selected}
const addPProduct = document.querySelector('.addPartsProduct');
addPProduct.addEventListener('click', ()=> {
db.collection("recycledproducts").doc("KjIkTS9Cl3RYKGbZDm3h").update(docData);
})





  //  for (var i = 0; i < selected.length; i++) {
  //       console.log("Current item: " + selected[i]);
  //     const docRef = db.collection("recycledparts").where("partName" , "==", selected[i])
  //     docRef.get()
  //    .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.data());
  //       });
  //   })
  //   .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //   });
  //     }





  // console.log(element)
  // console.log(typeof element)
  // const docRef = db.collection("recycledparts").where("partName" , "==", multiParts.value)
  //        docRef.get()
  //    .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.data());
  //       });
  //   })
  //   .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //   });

  
}
//     const addPProduct = document.querySelector('.addPartsProduct');
 
//  for (const el of selected) {
//   const docRef = db.collection('recycledparts').document(`${el}`)
//         docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });  }

  



