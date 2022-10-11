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
const addedpartslist = document.querySelector('.addedpartslist')
const checkpartdata = document.querySelector('.checkpartdata')
const addPart = document.querySelector('.addPart')
const partsTab = document.querySelector('#pills-contact-tab-fill')

//parts references 
    const supplierinfo = document.querySelector('#supplierinfo')
const partname = document.querySelector('#partname')
const quantity = document.querySelector('#quantity')
const partNumber = document.querySelector('#partNumber')
const partSpecs = document.querySelector('#partSpecs')
const partSize = document.querySelector('#partSize')
const partWeight = document.querySelector('#partWeight')
const partRegisteredDate = document.querySelector('#partRegisteredDate')
const partClass = document.querySelector('#partClass')
const companyName = document.querySelector('#companyName')
const partId = document.querySelector('#partId')
const supplierName = document.querySelector('.supplierName')




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
const renderUser = doc => {
 
  const tr = `
    <tr data-id='${doc.id}' style="  border-bottom: 1px solid grey;">
        <td>
                                <div class="checkbox d-inline-block">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
     <td>${doc.data().productCategory}</td>
      <td>${doc.data().productName}</td>
      <td>${doc.data().productMN}</td>
      <td>${doc.data().productWeight}</td>
      <td>${doc.data().productSize}</td>
        <td>${doc.data().registeredDate}</td>
           <td>${doc.data().productStatus}</td>
             <td>${doc.data().memo}</td>


    <td>
  
    <div class="btngroup" style="width:100%">
      <span><a href="#" class="button btn-large  btnpr-addPP" id='${doc.id}' style="width: 93%;">+</a></span>
     <span href="#" class="button btn-large viewbtn" data-toggle="modal" data-id='${doc.id}' data-PN='${doc.data().productName}' data-target="#exampleModalScrollable">Assessment </span>
     <div class="button-dropdown">
        <a class="button toggle"></a>
        <ul class="dropdown">
          <li><a href="#" class="dropdown-link btnpr-edit">Edit</a></li>
          <li><a href="#" class="dropdown-link btnpr-delete">Delete</a></li>
        
        </ul>
      </div>
    </div>
   
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);
   document.querySelector('.loadingtitle').style.display = "none"





   closebtn.addEventListener('click', () =>{
    addmodalyPartsSingle.classList.remove('modaly-show');
   })

// Click on view product button to view assessment

  const viewassess = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewassess.addEventListener('click', ()=> {
const dataPN = viewassess.getAttribute('data-PN');
console.log(dataPN)
   		var table = document.querySelector('.renderParts')
      var renderEN4555 = document.querySelector('.renderEN4555')
    table.innerHTML = "";
    renderEN4555.innerHTML = "";
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
     
  var partsRef = db.collectionGroup('selectedSubs');
partsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
     let dataPartWeight = query.docs.map(doc=>{
        let x = doc.data().substanceMassg

         
            return x;
    })
  
    console.log(data)
    var obj = data;
    var newArray = obj.filter(function (el)
{
  return el.productRef == dataPN;
}
);
  //  console.log(newArray)

buildTable(newArray)

	function buildTable(newArray){

		for (var i = 0; i < newArray.length; i++){
			var row = `<tr>
							<td>${newArray[i].partRef}</td>
							<td>${newArray[i].substanceName}</td>
							<td>${newArray[i].casnumber}</td>
              	<td>${newArray[i].substanceMassg}</td>
							<td>${newArray[i].substanceMassPerc}</td>
					  </tr>`
			table.innerHTML += row


		}
	}




   let options = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  series: [{
    data: [{
      x: 'Number of Parts',
      y: data.length
    }, {
      x: 'Parts Total Mass',
      y: dataPartWeight.length
    }, {
      x: 'Number of Substances',
      y: 46
    }]
  }]
}
  var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
     
  })

  var matRef = db.collectionGroup('selectedMaterials');
matRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    
    console.log(data)
    var obj = data;
    var materialData = obj.filter(function (el)
{
  return el.productRef == dataPN;
}
);
   console.log(materialData)

buildTable(materialData)

	function buildTable(materialData){

		for (var i = 0; i < materialData.length; i++){
      const recycMat = parseFloat(materialData[i].recycMat)
      const reuseMat = parseFloat(materialData[i].reuseMat)
      const recovMat = parseFloat(materialData[i].recovMat)
      const materialMass = parseFloat(materialData[i].materialMassg)
      const PartMass = parseFloat(materialData[i].partWeight)
      // Reuse Mass (g)
      const reuseMassgAssess = reuseMat * materialMass
      // Reuse Mass (%)
      const reuseMassPerAssess = reuseMassgAssess / PartMass * 100
      // Recycle Mass (g),  Formula: material mass * Recycle factor
      const recycleMassgAssess = materialMass * recycMat
      // Recycle Mass (%),  Formula: (material mass * Recycle factor) / Part Mass * 100
      const recycleMassPercAssess = recycleMassgAssess  / PartMass * 100
       //Recovery Mass (g),  Formula: material mass * Recovery factor
      const recovMassgAssess = materialMass * recovMat 
     //Recovery Mass (%),  Formula: (material mass * Recovery factor) / Part Mass * 100
      const recovMassPercAssess = recovMassgAssess / PartMass * 100 
      //  console.log(recovMassPercAssess.toFixed(2))
      // Disposable Mass (g), Formulat: Material total mass - Recovery mass 
      const disposabaleMassg = materialMass - recovMassgAssess
      // Disposable Mass (g), Formula: (Material total mass - Recovery mass) / Material mass * 100
      const disposabalePercMass = disposabaleMassg / materialMass * 100 
      // Energy Recovery Mass (g), Formula: Recovery mass - Reuse mass - Recycling mass 
      const energyRecoMassgAssess = recovMassgAssess - reuseMassgAssess - recycleMassgAssess
     
      //Energy Recovery Mass (%), Formula: (Recovery mass - Reuse mass - Recycling mass ) / Material mass * 100
      const energyRecoMassPercAssess = energyRecoMassgAssess / materialMass * 100 
      console.log(energyRecoMassPercAssess)

			var row = `<tr>
              <td>${materialData[i].partRef}</td>
							<td>${PartMass}</td>
              <td>${materialData[i].materialName}</td>
              <td>${materialMass}</td>
              <td>${reuseMassgAssess}</td>
              <td>${reuseMassPerAssess.toFixed(2)}</td>
              <td>${recycleMassgAssess}</td>
              <td>${recycleMassPercAssess.toFixed(2)}</td>
              <td>${recovMassgAssess}</td>
              <td>${recovMassPercAssess.toFixed(2)}</td>
              <td>${disposabaleMassg}</td>
              <td>${disposabalePercMass.toFixed(2)}</td>
              <td>${energyRecoMassgAssess}</td>
              <td>${energyRecoMassPercAssess}</td>
              <td>${PartMass}</td>
              <td>100</td>
					  </tr>`
			renderEN4555.innerHTML += row


		}
	}
})

});

     



//add parts tp specific product
 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addPP`);
btnpraddParts.addEventListener('click', () => {
  addPPmodaly.classList.add('modaly-show');
  const addedpartslist = document.querySelector('.addedpartslist')
   const btnpraddRef = btnpraddParts.getAttribute('id');
   
  addedpartslist.innerHTML = "";
 console.log(btnpraddRef)



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

    console.log('Part Number: ', obj.Identifier);
      console.log('Part Department: ', obj.Department);
       db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').add({
     partMN: obj.partMN,
            partname: obj.partname,
            partClass: obj.partClass,
            partWeight: obj.partWeight,
            partSize: obj.partSize,
            partRegisteredDate: obj.partRegisteredDate,
            quantity	: obj.quantity,
            partNumber: obj.partNumber,
            partMemo: obj.partMemo
        
       
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


//click on add new parts
const partname = document.querySelector('.partname');
partname.addEventListener('change', () => {
 
  const partsRef = db.collection("recycledparts")
    // partsRef.where("supplierInfo", "==", supplierinfo.value).where("partName", "==", partname.value)
     partsRef.where("partName", "==", partname.value).where("supplierName", "==", supplierName.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(partname.value)
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            partId.value = doc.id
             partname.value = doc.data().partName
          partMN.value = doc.data().partMN
          partSize.value = doc.data().partSize
          partWeight.value = doc.data().partWeight
          partRegisteredDate.value = doc.data().partRegisteredDate
          partClass.value = doc.data().partClass
          companyName.value = doc.data().partMemo
          supplierName.value = doc.data().supplierName

        });
    })
  
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
})

   addPart.addEventListener('click', e => {
  e.preventDefault();
  // console.log(doc.id, " => ", doc.data());
     db.collection('recycledproducts').doc(btnpraddRef).get().then(()=>{
      let productRef = doc.data()
      console.log(productRef);
       db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partId.value).set({
   productRef: productRef.productName,
    partname: partname.value,
    supplierName: supplierName.value,
    partMN: partMN.value,
    partSize: partSize.value,
    partWeight: partWeight.value,
    partClass: partClass.value,
    partRegisteredDate: partRegisteredDate.value,
    partMemo: companyName.value,
    quantity: quantity.value,
    
  },{merge:true})
  db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            db.collection('recycledparts').where('partName', '==', doc.data().partname).get()
            .then((querySnapshot) => {
              const partproductRef = doc.id 
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(partproductRef)
                      db.collection("recycledparts").doc(doc.id).collection('materials').get().then((querySnapshot) => {
                 
                  querySnapshot.forEach((doc) => {
                           const matRef = doc.id
                    console.log(matRef)
                    db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partproductRef).collection('selectedMaterials').doc(matRef).set({
                            productRef: productRef.productName,
                            partRef: partname.value,
                             partWeight: partWeight.value,
                            materialName: doc.data().materialName,
                            materialGroup:doc.data().materialGroup,
                            materialClassId: doc.data().materialClassId,
                            materialRecycleContent: doc.data().materialRecycleContent,
                            materialRecycleType: doc.data().materialRecycleType,
                            materialMassg:doc.data().materialMassg,
                            materialMassPerc: doc.data().materialMassPerc,
                            recovMat: doc.data().recovMat,
                            recycMat: doc.data().recycMat,
                            reuseMat: doc.data().reuseMat,
                            selecrecovMat: doc.data().selecrecovMat,
                            selecrecycMat: doc.data().selecrecycMat,
                            selecreuseMat: doc.data().selecreuseMat,
                            matnameSelect: doc.data().matnameSelect,
                            selectiveMat: doc.data().selectiveMat
                    }, {merge:true})
                    .then((docRef) => {
    db.collection("recycledparts").doc(partproductRef).collection('materials').doc(matRef).collection('substances').get()
    .then((querySnapshot)=>{
       querySnapshot.forEach((doc) => {
          let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + s4() 
}
        //  const matPPRef = docRef.id;
        //  console.log(doc.id, " => ", doc.data());
         db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partproductRef).collection('selectedMaterials').doc(`${matRef}`).collection('selectedSubs').doc(guid()).set({
          
            productRef: productRef.productName,
            partRef: partname.value,
            substanceName: doc.data().substanceName,
            casnumber: doc.data().casnumber,
            crm: doc.data().crm,
            rohs: doc.data().rohs,
            substanceMassg: doc.data().substanceMassg,
            substanceMassPerc: doc.data().substanceMassPerc,

         }, {merge:true})
       })

    })
    .then(()=>{
      console.log("All substances were added")
    })
     .catch((error) => {
        console.log("Error getting documents: ", error);
    });
})

                  });
        
              });
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
     })
 
   
 
  const addPPForm = document.querySelector('.addPPForm')
setTimeout(resetForm, 15000);
 function resetForm() {
addPPForm.reset();
}})

   const setupPartsProducts = (data) => {
    let html = '';
    data.forEach(doc=> {
       const addedparts = doc.data();
      console.log(addedparts)
      const pp = `
      <tr id='${doc.id}' data-id='${doc.id}'>

        <td>${doc.data().partname}</td>
        <td>${doc.data().partNumber}</td>
        <td>${doc.data().partMN}</td>
        <td>${doc.data().partClass}</td>
        <td>${doc.data().partWeight}</td>
        <td>${doc.data().partSize}</td>
        <td>${doc.data().partRegisteredDate}</td>
           <td>${doc.data().quantity}</td>
        <td>${doc.data().partMemo}</td>

          <td>
    <div class="btngroup">
     <span href="#" class="viewpartmat button btn-large" data-toggle="modal" data-target="#partproductmaterial" data-id='${doc.id}'>View Material</span>
     <div class="button-dropdown">
        <a class="button toggle"></a>
        <ul class="dropdown">
          <li><a href="#" class="dropdown-link btnpr-delete" id='${doc.id}'>Delete</a></li>
      
        </ul>
      </div>
    </div>
   
      </td>
  
    </tr>
      `;
      html+=pp
    }

)

    addedpartslist.insertAdjacentHTML('beforeend', html)
  }

 db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').onSnapshot(snapshot => {
  addedpartslist.innerHTML = " "
  setupPartsProducts(snapshot.docs)
   const viewpartmat = document.querySelectorAll('.viewpartmat')
    for (let i = 0; i < viewpartmat.length; i++) {
    
 viewpartmat[i].addEventListener('click', ()=>{
   const partmatRef = viewpartmat[i].getAttribute('data-id');
   console.log(partmatRef)
    const setupMaterialUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const material = doc.data();
      console.log(material)
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
     <span href="#" class="viewmatsub button btn-large" data-toggle="modal" data-target="#partproductmaterialsubs" data-id='${doc.id}'>View Substances</span>
     <div class="button-dropdown" >
        <a class="button toggle" style="padding: 1.5em 0.3em;"></a>
        <ul class="dropdown">
    <li><a href="#" class="dropdown-link btnpmdelete" data-id='${doc.id}'>Delete</a></li>
          
        </ul>
      </div>
    </div>
      </td>
    </tr>
      
      `;
      html+=li
    }


    )

    document.querySelector('.materiallist').insertAdjacentHTML('beforeend', html)
  }
  
  db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${partmatRef}`).collection('selectedMaterials').onSnapshot(snapshot => {
      document.querySelector('.materiallist').innerHTML = '';
    console.log(doc.data())
    setupMaterialUI(snapshot.docs)
      const viewmatsub = document.querySelectorAll('.viewmatsub')
    for (let i = 0; i < viewmatsub.length; i++) {
    
 viewmatsub[i].addEventListener('click', ()=>{
   const matsubRef = viewmatsub[i].getAttribute('data-id');
  
   console.log(matsubRef)

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

  <td>
<div class="btngroup">
     <span href="#" class="viewmatsub button btn-large" data-toggle="modal" data-target="#partproductmaterialsubs" data-id='${doc.id}'>Edit</span>
     <div class="button-dropdown" >
        <a class="button toggle" style="padding: 1.5em 0.3em;"></a>
        <ul class="dropdown">
    <li><a href="#" class="dropdown-link btnpmdelete" data-id='${doc.id}'>Delete</a></li>
          
        </ul>
      </div>
    </div>
      </td>
    </tr>
      `;
      html+=sm
    }
    )

    document.querySelector('.substancelist').insertAdjacentHTML('beforeend', html)
  }
  db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${partmatRef}`).collection('selectedMaterials').doc(`${matsubRef}`).collection('selectedSubs').onSnapshot(snapshot => {
 console.log(doc.data())
  setupSubstanceUI(snapshot.docs)
 })
 
  })
  
  }
  })

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
const multiParts = document.querySelector('.multiParts')


  






// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
  var productsRef = db.collectionGroup('recycledproducts');
productsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data().productWeight
         
            return x;
    })
  
    console.log(data)
    const sum = data.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);
// document.querySelector('.totalWeight').innerHTML = sum
// document.querySelector('.totalWeightPerc').innerHTML = parseFloat((sum / 3000000)/100000000000)  .toFixed(2) + "%" 
// console.log(sum); // 👉️ 65
})

.catch((error) => {
    console.log("Error getting document:", error);
});



// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
  var partsRef = db.collectionGroup('recycledparts');
partsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
         
            return x;
    })
    console.log(data.length)

// document.querySelector('.nbrparts').innerHTML = data.length
// document.querySelector('.totalWeightPerc').innerHTML = (sum / 30000) * 100 + "%" 

})



// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
  var partsRef = db.collectionGroup('materials');
partsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
         
            return x;
    })
    console.log(data.length)

// document.querySelector('.nbrmaterials').innerHTML = data.length
// document.querySelector('.nbrmaterialsperc').innerHTML = parseFloat((data.length / 70) * 100 ).toFixed(2) + "%" 

})

.catch((error) => {
    console.log("Error getting document:", error);
});





  
     db.collection("recycledparts")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option value="${doc.data().partName}">${doc.data().partName}</option>
  `;

   partname.insertAdjacentHTML('beforeend', tm);
 
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
      <option value="${doc.data().supplierName}">${doc.data().supplierName}</option>
  `;

   supplierName.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


      var substances = db.collection('recycledparts').doc('9A2nEjh8Bkxi1PeahOf6').collection('materials');
substances
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
         
            return x;
    })
     console.log(data)
    console.log(data.length)


})

.catch((error) => {
    console.log("Error getting document:", error);
});


// db.collectionGroup('selectedMaterials').get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data()
         
//             return x;
//     })
//     let filteredData = data.filter(el => el.productRef === "SAMSUNG" && el.partRef === "ACB" );
//     console.log(filteredData)
//     document.querySelector('.nummat').innerHTML = `Current Number of Materials: ${data.length}`
// 	buildTable(filteredData)

// 	function buildTable(filteredData){
// 		var table = document.querySelector('.renderParts')

// 		for (var i = 0; i < filteredData.length; i++){
// 			var row = `<tr>
// 							<td>${filteredData[i].materialName}</td>
// 							<td>${filteredData[i].materialGroup}</td>
// 							<td>${filteredData[i].materialClassId}</td>
//               	<td>${filteredData[i].materialMassg}</td>
// 							<td>${filteredData[i].materialRecycleContent}</td>
// 							<td>${filteredData[i].materialRecycleType}</td>
// 					  </tr>`
// 			table.innerHTML += row


// 		}
// 	}


// })

// .catch((error) => {
//     console.log("Error getting document:", error);
// });


// Refresh Data Function !!
// document.querySelector('.refresh').addEventListener('click', (e)=> {
//   e.preventDefault()
  
// db.collectionGroup('materials').get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data()
         
//             return x;
//     })
//     console.log(data)
//     document.querySelector('.nummat').innerHTML = `Current Number of Materials: ${data.length}`
// 	buildTable(data)

// 	function buildTable(data){
// 		var table = document.querySelector('.renderParts')
// table.innerHTML = " "
// 		for (var i = 0; i < data.length; i++){
// 			var row = `<tr>
// 							<td>${data[i].materialName}</td>
// 							<td>${data[i].materialGroup}</td>
// 							<td>${data[i].materialClassId}</td>
//               	<td>${data[i].materialMassg}</td>
// 							<td>${data[i].materialRecycleContent}</td>
// 							<td>${data[i].materialRecycleType}</td>
// 					  </tr>`
// 			table.innerHTML += row


// 		}
// 	}


// })

// .catch((error) => {
//     console.log("Error getting document:", error);
// });

// })




