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
const addmodalyPartsSingle = document.querySelector('.addPartMatmodaly');
const addmodalySubssSingle = document.querySelector('.addSubsmodaly');
const addModalyForm = document.querySelector('.add-modaly .form');
const addModalyParts = document.querySelector('.addPartMatmodaly .form');
const editMatmodaly = document.querySelector('.editMatmodaly')
const addModalySubs = document.querySelector('.addSubsmodaly .form');
const subsmodalclose = document.querySelector('#subsmodalclose')

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

const subslist = document.querySelector('.subslist')
const addPartsForm = document.querySelector('#addPartsForm')

// materials edit references

let PMmaterialGroup = document.getElementById('PMmaterialGroup')
let PMmaterialName = document.getElementById('PMmaterialName')
let PMmaterialClassID = document.querySelector('#PMmaterialClassID')
let PMmaterialRecycleContent = document.getElementById('PMmaterialRecycleContent')
let PMMaterialRecycleType = document.getElementById('PMMaterialRecycleType')
let PMmaterialMassg = document.getElementById('PMmaterialMassg')
 let PMMaterialMassPerc = document.getElementById('PMMaterialMassPerc')
 let editMat = document.getElementById('editMat')

//substances references
 let addSubs = document.getElementById('addSubs')
 let getSubsname = document.getElementById('getSubsname')
 let getsubstancelist = document.querySelector('.getsubstancelist')
  let getsubstancetype = document.querySelector('.getsubstancetype')
  let addcas = document.querySelector('.addcas')
  let addcrm = document.querySelector('.addcrm')
  let addrohs = document.querySelector('.addrohs')
  let addsubstanceMassg = document.querySelector('.addsubstanceMassg')
  let addsubstanceMassPerc = document.querySelector('.addsubstanceMassPerc')
 let substancelisttable = document.querySelector('.substancelisttable')
 let delSubs = document.getElementById('delSubs')

 let matnameSelect = document.querySelector('#editmaterialName');
 let reuseMat = document.querySelector('#reuseMat');
let recycMat = document.querySelector('#recycMat');
let recovMat = document.querySelector('#recovMat');
 let selecreuseMat = document.querySelector('#selecreuseMat');
let selecrecycMat = document.querySelector('#selecrecycMat');
let selecrecovMat = document.querySelector('#selecrecovMat');
let selectiveMat = document.querySelector('#selectiveMat')
const addmaterialOptions = document.querySelector('#editmaterialName')
   const editmaterialOptions = document.querySelector('.editmaterialName')
// order and filtering 
let id;



// const renderTest = doc => {
// //   console.log(doc)
// //   const tl = `
// //  <a class="mb-1 " id="usertest" > ${doc.data().productClass}</a>
// //   `
// //     usertest.insertAdjacentHTML('beforeend', tl);
// // }

// Create element and render users
document.querySelector('.loadingtitle').innerHTML = "Data is loading - Please wait... ⌛"
  document.querySelector('.loadingtitle').style.fontWeight = "600"
  document.querySelector('.loadingtitle').style.color = "black"
    document.querySelector('.loadingtitle').style.marginLeft = "43%";
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.id}' style="  border-bottom: 0.5px solid grey;">
        <td>
                                <div class="checkbox d-inline-block">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
     <td>${doc.data().partName}</td>
   
      <td>${doc.data().partCode}</td>
        <td>${doc.data().partWeight}</td>
         <td>${doc.data().partSize}</td>
           <td>${doc.data().reusedPart}</td>
     <td>${doc.data().partRegisteredDate}</td>
           <td>${doc.data().partMemo}</td>


         <td>
    <div class="btngroup">
     <span href="#" id="btnprview" class="button btn-large viewbtn" data-toggle="modal" data-target="#exampleModalScrollable">View Materials</span>
     <div class="button-dropdown">
        <a class="button toggle"></a>
        <ul class="dropdown">
          <li><a href="#" class="dropdown-link btnpr-edit">Edit</a></li>
          <li><a href="#" class="dropdown-link btnpr-addParts" data-id='${doc.id}'>Add New Material</a></li>
          <li><a href="#" class="dropdown-link btnpr-delete">Delete</a></li>
        </ul>
      </div>
    </div>
   
      </td>
    </tr>
  `;
  const parttable = document.querySelector('.parttable')
  parttable.insertAdjacentHTML('beforeend', tr);
   document.querySelector('.loadingtitle').style.display = "none"
  
 const viewbtn = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewbtn.addEventListener('click', ()=> {
      const breadbody = document.querySelector('.breadbody')
      breadbody.innerHTML = ""
    const breadpartname = document.querySelector('.breadpartname')
    breadpartname.innerHTML = `${doc.data().partName}`
  materialtitle.innerHTML = `${doc.data().partName}`
 const materiallist = document.querySelector('.materiallist')
 materiallist.innerHTML = "";
    //click add parts button
 const setupMaterialUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const material = doc.data();

      const li = `
     <tr id='${doc.id}' data-id='${doc.id}'>
    <td>${doc.data().materialGroup}</td>
       <td>${doc.data().materialName}</td>
      <td>${doc.data().materialClassId}</td>
      <td>${doc.data().materialRecycleContent}</td>
      <td>${doc.data().materialRecycleType}</td>
      <td>${doc.data().materialMassg}</td>
        <td>${doc.data().materialMassPerc}</td>
     

  <td>
<div class="btngroup">
  
     <div class="button-dropdown" >
        <a class="button toggle" style="padding: 1.5em 0.3em;"></a>
        <ul class="dropdown">
      
           <li><a href="#" class="dropdown-link btnpmviewSubs" data-id='${doc.id}' data-toggle="modal" data-target="#exampleModalScrollableSubstances">View Substances</a></li>
          <li><a href="#" class="dropdown-link btnpmedit" data-id='${doc.id}'>Edit</a></li>
          <li><a href="#" class="dropdown-link btnpmSubs" data-id='${doc.id}'>Add New Substance</a></li>
    <li><a href="#" class="dropdown-link btnpmdelete" data-id='${doc.id}'>Delete</a></li>
        </ul>
      </div>
    </div>
      </td>
    </tr>
      
      `;
      html+=li
       const bpart = `
       <tr data-id="1" data-parent="0" data-level="1">
                                 <td data-column="name">${doc.data().materialName}</td>
                              </tr>

      `;
        
       breadbody.insertAdjacentHTML('beforeend', bpart)
    }
    )
    materiallist.insertAdjacentHTML('beforeend', html)
  }
  
   db.collection('recycledparts').doc(`${doc.id}`).collection('materials').onSnapshot(snapshot => {
    setupMaterialUI(snapshot.docs)
    let partId = doc.id
    console.log(partId)
    
 
   let btnpmedit = document.querySelectorAll(".btnpmedit");
  let btnpmSubs = document.querySelectorAll(".btnpmSubs");
   let btnpmviewSubs = document.querySelectorAll(".btnpmviewSubs");

    
      
btnpmedit.forEach((eachbtnpmedit)=>{
// edit a material of a specific part
 eachbtnpmedit.addEventListener('click', () => {
editMatmodaly.classList.add('modaly-show');
  let editData = eachbtnpmedit.getAttribute("data-id");
  console.log(editData)
 db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).get().then((doc)=> {
  if (doc.exists) {
        console.log("Document data:", doc.id, doc.data());
         const editMatHeader = document.querySelector('.editMatHeader')
         console.log(doc.data())
    id = doc.id;
    editMatHeader.innerHTML = ' ' + doc.data().materialName
    PMmaterialGroup.value = doc.data().materialGroup;
    PMmaterialName.value = doc.data().materialName;
    PMmaterialClassID.value = doc.data().materialClassId;
    PMmaterialRecycleContent.value = doc.data().materialRecycleContent;
    PMMaterialRecycleType.value = doc.data().materialRecycleType;
    PMmaterialMassg.value = doc.data().materialMassg;
    PMMaterialMassPerc.value = doc.data().materialMassPerc;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
 })
 const editMatPartBtn = document.querySelector('.editMatmodaly .editMatPartForm')
 editMatPartBtn.addEventListener('submit', (e)=> {
  materiallist.innerHTML = ""
e.preventDefault()
  db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).update({
    materialGroup: PMmaterialGroup.value,
    materialName: PMmaterialName.value,
    materialClassId: PMmaterialClassID.value,
    materialRecycleContent: PMmaterialRecycleContent.value,
    materialRecycleType: PMMaterialRecycleType.value,
    materialMassg: PMmaterialMassg.value,
    materialMassPerc: PMMaterialMassPerc.value,
   
  })
  .then(()=> {
    console.log('Document Updated Successfully!')
  });
   
 })
 
  })
})
btnpmSubs.forEach((eachbtnpmSubs)=> {
  //add a new substance to a specific material
 eachbtnpmSubs.addEventListener('click', () => {
  let matId = eachbtnpmSubs.getAttribute("data-id");
  console.log(matId)
addmodalySubssSingle.classList.add('modaly-show');
db.collection("substances")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().subtanceName}</option>
  // `;
  getsubstancelist.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
   
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

 getSubsname.addEventListener('change', ()=> {
 db.collection("substances").where("subtanceName", "==", getsubstancelist.value).where(getsubstancetype.value, "==", "Y").get()
      .then((querySnapshot)=> {
           querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          addcas.value = doc.data().casnumber,
          addrohs.value = doc.data().rohs,
          addcrm.value = doc.data().crm

        });
      })
      })
addSubs.addEventListener('click', (e)=> {

  e.preventDefault();
     let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + s4() 
}
 db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${matId}`).collection('substances').doc(guid()).set({
    substanceName: getsubstancelist.value,
    casnumber: addcas.value,
    crm: addcrm.value,
    rohs: addrohs.value,
    substanceMassg: addsubstanceMassg.value,
    substanceMassPerc: addsubstanceMassPerc.value,
 }, {merge:true})
 .then(()=> {
  console.log('Substance added Successfully');
  addmodalySubssSingle.classList.remove('modaly-show');
 })
}) 
  })

    //Start work here

btnpmviewSubs.forEach((eachbtnpmviewSubs)=>{
   const subsmatId = eachbtnpmviewSubs.getAttribute("data-id");
eachbtnpmviewSubs.addEventListener('click', () => {
substancelisttable.innerHTML = "";
 
  console.log(`${subsmatId}`)
  const setupSubstanceUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const substance = doc.data();
      console.log(substance)
      const sm = `
      <tr id='${doc.id}' data-id='${doc.id}'>
   
    <td>${doc.data().substanceName}</td>
       <td>${doc.data().casnumber}</td>
      <td>${doc.data().crm}</td>
      <td>${doc.data().rohs}</td>
      <td>${doc.data().substanceMassg}</td>
      <td>${doc.data().substanceMassPerc}</td>
  
    </tr>
      `;
      html+=sm
    }


    )

    substancelisttable.insertAdjacentHTML('beforeend', html)
  }
 return (db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${subsmatId}`).collection('substances').onSnapshot(snapshot => {
  setupSubstanceUI(snapshot.docs)
 }))
  })
  
})

//delete material specific to a part
   let btnpmdelete = document.querySelectorAll(".btnpmdelete");
     for (let i = 0; i < btnpmdelete.length; i++) {
      let deleteData = btnpmdelete[i].getAttribute("data-id");
 btnpmdelete[i].addEventListener('click', () => {
console.log(deleteData)
   let tr = document.getElementById(`${deleteData}`);
 
    
      tr.remove(tr);
   db.collection('recycledparts').doc(`${doc.id}`).collection('materials').doc(deleteData).delete().then(() => {
      console.log('Document succesfully deleted!');
    })
 
    .catch(err => {
      console.log('Error removing document', err);
    });
  })
}
})


   }) 

  
   //view substances specific to a material


  
  })

//add parts




//add materials 
 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addParts`);
btnpraddParts.addEventListener('click', (e) => {
  const getPMatRef = btnpraddParts.getAttribute('data-id')
  console.log(getPMatRef)
  e.preventDefault();
  const addmatpartform = document.querySelector('.addmatpartform')
  addmatpartform.reset()
     
     
  addModalyParts.addmaterialName.value = '';
  
  db.collection('recylcedparts').doc(`${doc.id}`).get().then(()=>{
    let partData = doc.data()
    addmodalyPartsSingle.classList.add('modaly-show');
    console.log(partData);
    
     addModalyParts.addmatpartref.value = partData.partName
     addModalyParts.addmatpartWeight.value = partData.partWeight

  })
const editmaterialGroup = document.querySelector('#editmaterialGroup')
const PMmaterialGroup = document.querySelector('#PMmaterialGroup')
db.collection("materialsdb")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().MaterialGroup}</option>
  // `;
  editmaterialGroup.insertAdjacentHTML('beforeend', tm);
    PMmaterialGroup.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
 editmaterialGroup.addEventListener('change', ()=> {
  const addmaterialName = document.querySelector('.addmaterialName')
  addmaterialName.innerHTML = "";
db.collection("materialsdb").where('MaterialGroup', '==', editmaterialGroup.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().재료명}</option>
  // `;
  
  addmaterialOptions.insertAdjacentHTML('beforeend', tm);
    editmaterialOptions.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
 })


db.collection("selectivematerials")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().selectiveMaterials}</option>
  // `;
  const addmaterialOptions = document.querySelector('#selectiveMat')
   const editmaterialOptions = document.querySelector('.selectiveMat')
  addmaterialOptions.insertAdjacentHTML('beforeend', tm);
    editmaterialOptions.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
   
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
     const addPartmaterialMassg = document.querySelector('.addPartmaterialMassg')
 addPartmaterialMassg.addEventListener('change', (e)=>{
  e.preventDefault()
  addModalyParts.addmaterialMassPerc.value = addModalyParts.addmaterialMassg.value / addModalyParts.addmatpartWeight.value * 100
})


 matnameSelect.addEventListener('change', () => {
  console.log(matnameSelect.value);
  db.collection("materialsdb").where('재료명', '==', matnameSelect.value)
    .get()
       .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            recovMat.value = doc.data().Recoverability
            recycMat.value = doc.data().Recyclability
            reuseMat.value = doc.data().Reusabiity
        });
    })
});
 let selectiveMat = document.getElementById("selectiveMat");
let seleccheckbox = document.querySelector('.seleccheckbox');
seleccheckbox.addEventListener('click', ()=> {
  if(seleccheckbox.checked == true) {
selectiveMat.removeAttribute('disabled')
  } else {
    selectiveMat.setAttribute("disabled", "disabled") 
  }
}
      )
 selectiveMat.addEventListener('change', () => {
  console.log(matnameSelect.value);
  db.collection("selectivematerials").where('selectiveMaterials', '==', selectiveMat.value)
    .get()
       .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            selecrecovMat.value = doc.data().recoverability
            selecrecycMat.value = doc.data().recyclability
            selecreuseMat.value = doc.data().reusability
        });
    })
});
 

  const addMatPartBtn = document.querySelector('#addMatPartBtn')
  addMatPartBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + s4() 
}


  // console.log(doc.id, " => ", doc.data());
  db.collection('recycledparts').doc(`${getPMatRef}`).collection('materials').doc(guid()).set({
    partRef: addModalyParts.addmatpartref.value,
    partRefWeight: addModalyParts.addmatpartWeight.value,
    materialName: addModalyParts.addmaterialName.value,
    materialGroup: addModalyParts.addmaterialGroup.value,
    materialClassId: addModalyParts.addmaterialClassID.value,
    materialRecycleContent: addModalyParts.addmaterialRecycleContent.value,
    materialRecycleType: addModalyParts.addmaterialRecycleType.value,
    materialMassg: addModalyParts.addmaterialMassg.value,
    materialMassPerc: addModalyParts.addmaterialMassPerc.value,
    recovMat: recovMat.value,
    recycMat: recycMat.value,
    reuseMat: reuseMat.value,
    selecrecovMat: selecrecovMat.value,
    selecrecycMat: selecrecycMat.value,
    selecreuseMat: selecreuseMat.value,
    matnameSelect: matnameSelect.value,
    selectiveMat: selectiveMat.value,
    
  })
  console.log('Material Added! ')
setTimeout(resetForm, 5000);
 function resetForm() {
addModalyParts.reset();
}
  })



   subsmodalclose.addEventListener('click', () =>{
    addmodalySubssSingle.classList.remove('modaly-show');
    addModalyParts.classList.remove('modaly-show');
    editMatmodaly.classList.remove('modaly-show');
   })

    

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
    editmodalyForm.editsupplierName.value = doc.data().supplierName;
    editmodalyForm.editpartName.value = doc.data().partName;
    editmodalyForm.editpartClass.value = doc.data().partCode;
    editmodalyForm.editpartWeight.value = doc.data().partWeight;
    editmodalyForm.editpartSize.value = doc.data().partSize;
    editmodalyForm.editreusedPart.value = doc.data().reusedPart;
     editmodalyForm.editpartregisteredDate.value = doc.data().partRegisteredDate;
    editmodalyForm.editMemo.value = doc.data().partMemo;
    

    


  });

  // Click delete user
  const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
  btnprDelete.addEventListener('click', (e) => {
    e.preventDefault()
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
  addModalyForm.addpartClass.value = '';
  addModalyForm.addpartWeight.value = '';
  addModalyForm.addpartSize.value = '';
  addModalyForm.addreusedPart.value = '';
    addModalyForm.addpartregisteredDate.value = '';
  addModalyForm.addMemo.value = '';



  
  
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
  
   if(e.target === editMatmodaly) {
    editMatmodaly.classList.remove('modaly-show');
  }
   if(e.target === addmodalySubssSingle) {
    addmodalySubssSingle.classList.remove('modaly-show');
  }
     if(e.target === addmodalyPartsSingle) {
    addmodalyPartsSingle.classList.remove('modaly-show');
  }
 
});


subsmodalclose.addEventListener('click', ()=> {
  addmodalyPartsSingle.style.display = "none";
})

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

   auth.onAuthStateChanged(user => {

    if(user) {
      
 const userRef = db.collection('users').where('userID', '==', user.uid).get()

userRef.then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
const supplierNameData = document.querySelector('#addsupplierName')
supplierNameData.value = doc.data().userCompanyname
   })})}})


// Click submit in add modaly
addPartsForm.addEventListener('click', e => {
  e.preventDefault();
  db.collection('recycledparts').add({
     supplierName: addModalyForm.addsupplierName.value,
   partName: addModalyForm.addpartName.value,
    partCode: document.querySelector('#addClass').value,
    partWeight: addModalyForm.addpartWeight.value,
    partSize: addModalyForm.addpartSize.value,
    reusedPart: addModalyForm.addreusedPart.value,
    partRegisteredDate: addModalyForm.addpartregisteredDate.value,
    partMemo: addModalyForm.addMemo.value
    
  })
  .then(()=>{
  
    alert("A new Part is added! ")
  });
});

// document.querySelector('#addpartName').setAttribute("disabled","disabled")
// Click submit in edit modaly
editmodalyForm.addEventListener('click', e => {
  e.preventDefault();
  db.collection('recycledparts').doc(id).update({
     supplierName: editmodalyForm.editsupplierName.value,
 partName: editmodalyForm.editpartName.value,
  
    partCode: editmodalyForm.editpartClass.value,
    partWeight: parseFloat(editmodalyForm.editpartWeight.value),
    partSize: editmodalyForm.editpartSize.value,
    reusedPart: editmodalyForm.editreusedPart.value,
    partRegisteredDate: editmodalyForm.editpartregisteredDate.value,
    partMemo: editmodalyForm.editMemo.value
  });
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

const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

const count = arr.reduce((accumulator, value) => {
  return {...accumulator, [value]: (accumulator[value] || 0) + 1};
}, {});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);