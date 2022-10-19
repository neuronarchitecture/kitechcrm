

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

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);
const db = firebase.firestore(app);



const modalWrapper = document.querySelector('.modal-wrapper');
// modal add
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');

// modal edit
const editModal = document.querySelector('.edit-modal');
const editModalForm = document.getElementById('edit-product');

const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.table-users');

const productList = document.querySelector('.ligth-body');

const editButton = document.querySelector('.edit-list')

let id;


firebase.auth().onAuthStateChanged(user => {
 
})


// //get the list of products

// auth.onAuthStateChanged(user => {
//   if(user) {
//      const userEmailCard = document.getElementById('useremailcard')
//   userEmailCard.innerHTML = user.email
// db.collection('recycledproducts').onSnapshot(snapshot => {
// getProducts(snapshot.docs);

// })
//   } else {
//     userEmailCard.innerHTML = 'UNDEFINED'
//     getProducts([]);
//   }
// })



// const getProducts = (data) => {
//   let html = '';
//   data.forEach(doc => {
//     const product = doc.data();
//     console.log(doc.id)
//     const li = `
//     <tr>
//                             <td>
//                                 <!--<div class="checkbox d-inline-block">
//                                     <input type="checkbox" class="checkbox-input" id="checkbox2">
//                                     <label for="checkbox2" class="mb-0"></label>
//                                 </div>-->
//                             </td>
//                             <td>
//                                 <div class="d-flex align-items-center">
//                                     <img src="./01.jpg" class="img-fluid rounded avatar-50 mr-3" alt="image">
//                                     <div>
//                                         ${product.productName}
//                                     </div>
//                                 </div>
//                             </td>
//                             <td>${product.productSpecs}</td>
//                             <td>${product.productClass}</td>
//                             <td>${product.productNumber}</td>
//                             <td>${product.companyName}</td>
//                             <td id="idvalue">${doc.id}</td>
//                            <!--<td>$10.00</td>
//                             <td>10.0</td>--> 
//                             <td>
//                                 <div class="d-flex align-items-center list-action" >
//                                     <a class="badge badge-info mr-2"  data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
//                                         href="#"><i class="ri-eye-line mr-0"></i></a>
//                                     <a class="badge bg-success mr-2" class="btn btn-primary mt-2 edit-list" id="edit-list"  data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" 
//                                         href="#"><i class="ri-pencil-line mr-0"></i></a>
//                                     <a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
//                                         href="#"><i class="ri-delete-bin-line mr-0"></i></a>
//                                 </div>
//                             </td>
//                         </tr>
//     `;
//     html += li 
//   });

//   productList.innerHTML = html;

// }

//Add a new product 

const createProduct = document.getElementById('create-product');
const productName = document.getElementById('productName');
const productNumber = document.getElementById('productNumber');
const productSpecs = document.getElementById('productSpecs');
const productWeight = document.getElementById('productWeight');
const productClass = document.getElementById('productClass');
const companyName = document.getElementById('companyName');
const editForm = document.querySelector('.editForm')

// Edit a product 

const editproductName = document.getElementById("editproductName");
const editproductNumber = document.getElementById("editproductNumber");
const editproductSpecs = document.getElementById("editproductSpecs");
const editproductWeight = document.getElementById("editproductWeight");
const editproductClass = document.getElementById("editproductClass");
const editcompanyName = document.getElementById("editcompanyName");




// createProduct.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('recycledproducts').add({
//     productName: productName.value,
//     productNumber: productNumber.value,
//     productSpecs: productSpecs.value,
//     productWeight: productWeight.value,
//     productClass: productClass.value,
//     companyName: companyName.value
//   }).then(()=> {
//     createProduct.reset();
//   }).catch(err => {
//     alert("You can't access this feature! If you think this is an error, please contact the administrator.")
//   });
// })


firebase.auth().onAuthStateChanged(user => {
  const userEmailCard = document.getElementById('useremailcard')
  userEmailCard.innerHTML = user.email

})


// Create element and render users
const renderProducts = doc => {
  console.log(doc.data)
  const tr = `
    <tr>
                            <td>
                                <!--<div class="checkbox d-inline-block">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>-->
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="./01.jpg" class="img-fluid rounded avatar-50 mr-3" alt="image">
                                    <div id="productNameVal">
                                       ${doc.data().productName}
                                    </div>
                                </div>
                            </td>
                            <td>  ${doc.data().productSpecs}</td>
                            <td>  ${doc.data().productClass}</td>
                            <td>  ${doc.data().productNumber}</td>
                            <td>  ${doc.data().productWeight}</td>
                            <td>  ${doc.data().companyName}</td>
                            <td id="idvalue" data-value="${doc.id}" ">${doc.id}</td>
                           <!--<td>$10.00</td>
                            <td>10.0</td>--> 
                            <td>
                                <div class="d-flex align-items-center list-action" >
                                    <a class="badge badge-info mr-2"  data-toggle="tooltip" data-placement="top" title="" data-original-title="View"
                                        href="#"><i class="ri-eye-line mr-0"></i></a>
                                    <a class="badge bg-success mr-2" class="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModalScrollableEDIT" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" 
                                        href="#" ><i class="ri-pencil-line mr-0"></i></a>
                                    <a class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                        href="#"><i class="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
  `;
  productList.insertAdjacentHTML('beforeend', tr)

 

    // Click edit user

}


//   // Click edit user
// function setId(doc) {
//  editBtn = document.querySelector(`[data-id='${doc.id}'] .edit-list`);
//   editBtn.addEventListener('click', (doc) => {

//     id = doc.id;
//     editModalForm.editproductName.value = doc.data().productName;
//     editModalForm.editproductSpecs.value = doc.data().productSpecs;
//     editModalForm.editproductClass.value = doc.data().productClass;
//     editModalForm.editproductNumber.value = doc.data().productNumber;
//     editModalForm.editcompanyName.value = doc.data().companyName;

//   });
// }

 

//   // Click delete user
//   const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
//   btnDelete.addEventListener('click', () => {
//     db.collection('recycledproducts').doc(`${doc.id}`).delete().then(() => {
//       console.log('Document succesfully deleted!');
//     }).catch(err => {
//       console.log('Error removing document', err);
//     });
//   });

// }

// // Click add user button
// btnAdd.addEventListener('click', () => {
//   addModal.classList.add('modal-show');

//   addModalForm.productName.value = '';
//   addModalForm.productMaterial.value = '';
//   addModalForm.productQuantity.value = '';
//   addModalForm.productMatter.value = '';
// });

// // User click anyware outside the modal
// window.addEventListener('click', e => {
//   if(e.target === addModal) {
//     addModal.classList.remove('modal-show');
//   }
//   if(e.target === editModal) {
//     editModal.classList.remove('modal-show');
//   }
// });


  // const updateProduct = async(id, updates) => {
  //   await firestore.collection('recycledproducts').doc(id).update(updates)
  //   const doc = await firestore.collection('recycledproducts').doc(id).get();
  //   const editproduct = {
  //     id: doc.id,
  //     ...doc.data(),
  //   }
  // }

// Get all users
db.collection('recycledproducts').get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
  
    }
)
  // btnEdit.addEventListener('click', () => {
  //   console.log("I'm working!")

  //   id = doc.id;

  //   editproductName.value = doc.data().productName;
  //   editproductSpecs.value = doc.data().productSpecs;
  //   editproductClass.value = doc.data().productClass;
  //   editproductNumber.value = doc.data().productNumber;
  //   editcompanyName.value = doc.data().companyName;


  // // });
  // })
});

// Real time listener
db.collection('recycledproducts').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderProducts(change.doc);
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
      renderProducts(change.doc);
    }
  })
})

// // Click submit in add modal
// addModalForm.addEventListener('submit', e => {
//   e.preventDefault();
//   db.collection('recycledproducts').add({
//     productName: addModalForm.productName.value,
//     productMaterial: addModalForm.productMaterial.value,
//     productQuantity: addModalForm.productQuantity.value,
//     productMatter: addModalForm.productMatter.value,
//   });
//   modalWrapper.classList.remove('modal-show');
// });

// Click submit in edit modal
editModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('recycledproducts').doc(id).update({
    editproductName: editModalForm.editproductName.value,
    editproductSpecs: editModalForm.editproductSpecs.value,
    editproductNumber: editModalForm.editproductNumber.value,
    editproductClass: editModalForm.editproductClass.value,
    editproductWeight: editModalForm.editproductWeight.value,
    editcompanyName: editModalForm.editcompanyName.value,
  });
  }) 
  
// // });
// editIcon = document.getElementById("edit-list");
// editIcon.addEventListener('click', e=> {
//   updateId = e.target.parentelement.getAttribute('data-id');
//   console.log(updateId)
// })
// editButton.addEventListener('click', (e)=> {
//     updatedProductName = document.getElementById("editproductName").value
//     db.collection('recycledproducts').doc(updateId).update
// })


