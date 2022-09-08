
const auth = firebase.auth();
const db = firebase.firestore();
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
const addPart = document.querySelector('.addPart')
const partsTab = document.querySelector('#pills-contact-tab-fill')

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
    console.log(doc.data())
  const tr = `
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

    <button type="button" id="btnprview" class="viewbtn btn btn-primary mr-2 " data-toggle="modal" data-target="#exampleModalScrollable">view</button>
        <button class="adminelement btnpr-edit"> <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#" ><i class="ri-pencil-line mr-0"></i></a></button>
         <button class="btnpr-addParts"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-add-circle-line"></i></a></button>
         
        <button class="btnppdelete" ><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a></button>
      </td>
    </tr>
  `;
  partslist.insertAdjacentHTML('beforeend', tr);


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



db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').onSnapshot(snapshot => {
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



   closebtn.addEventListener('click', () =>{
    addmodalyPartsSingle.classList.remove('modaly-show');
   })

// Click on view product button

  const viewpartspr = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewpartspr.addEventListener('click', ()=> {

   
   
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

 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addPP`);
btnpraddParts.addEventListener('click', () => {
  addPPmodaly.classList.add('modaly-show');

 

   addPart.addEventListener('click', e => {
  e.preventDefault();
  // console.log(doc.id, " => ", doc.data());
  db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').add({
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



//    btnpredit.addEventListener('click', () => {
//      const partslist = document.querySelector('.partslist')
//  partslist.innerHTML = "";
//  const setupPartsUI = (data) => {
//     let html = '';
//     data.forEach(doc=> {
//       const parts = doc.data();
//       console.log(parts)
//       const pl = `
//     <tr data-id='${doc.id}'>
//      <td><img src="./productimage.png" style="height: 60px;
//     width: 60px;" alt=""></td>
//      <td>${doc.data().companyName}</td>
//       <td>${doc.data().partMassPerc}</td>
//       <td>${doc.data().partMassg}</td>
//       <td>${doc.data().partMassgEA}</td>
//       <td>${doc.data().partNumber}</td>
//         <td>${doc.data().partSpecs}</td>
//          <td>${doc.data().reusedPart}</td>

//   <td>

//     <button type="button" id="btnprview" class="viewbtn btn btn-primary mr-2 " data-toggle="modal" data-target="#exampleModalScrollable">view</button>
//         <button class="adminelement btnpr-edit"> <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#" ><i class="ri-pencil-line mr-0"></i></a></button>
//          <button class="btnpr-addParts"><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-add-circle-line"></i></a></button>
         
//         <button class="btnpp-delete" ><a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line mr-0"></i></a></button>
//       </td>
//     </tr>
//       `;
//       html+=pl
//     })

//     partslist.insertAdjacentHTML('beforeend', html)
//   }
  
//    db.collection('recycledproducts').doc(`${doc.id}`).collection('parts').get().then(snapshot => {
//     setupPartsUI(snapshot.docs)
//    })
//     })






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


  // btnpDelete.addEventListener('click', () => {
    
  //   console.log("hello world!")
  
  
  // });

const addProduct = document.querySelector('.addProduct')

// Click submit in add modaly
addProduct.addEventListener('click', e => {
  e.preventDefault();
  db.collection('recycledproducts').add({
    productName: addModalyForm.productName.value,
    productSpecs: addModalyForm.productSpecs.value,
    productClass: addModalyForm.productClass.value,
    productWeight: addModalyForm.productWeight.value,
    productNumber: addModalyForm.productNumber.value,
    
    productCategory: addModalyForm.productCategory.value,

    

  });

  setTimeout(closeForm, 3500);
 function closeForm() {
 modalyWrapper.classList.remove('modaly-show');
}

 
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

