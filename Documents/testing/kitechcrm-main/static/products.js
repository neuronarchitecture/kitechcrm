"use strict"

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
const closebtn = document.querySelectorAll('.action-button-close')
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
const partCode = document.querySelector('#partCode')
const partNumber = document.querySelector('#partNumber')
const partSpecs = document.querySelector('#partSpecs')
const partSize = document.querySelector('#partSize')
const partWeight = document.querySelector('#partWeight')
const partRegisteredDate = document.querySelector('#partRegisteredDate')
const companyName = document.querySelector('#companyName')
const partId = document.querySelector('#partId')
const supplierName = document.querySelector('.supplierName')
const renderEN4557 = document.querySelector('.renderEN4557')


const sumTotalWeightPerc = document.querySelectorAll('.sumTotalWeightPerc')

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
    <tr data-id='${doc.id}' style="  border-bottom: 0.5px solid grey;">
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



closebtn.forEach((eachClose)=> {
  eachClose.addEventListener('click', () =>{
    addmodalyPartsSingle.classList.remove('modaly-show');
    addPPmodaly.classList.remove('modaly-show');
   })
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
      const productCategory = document.querySelectorAll('.productCategory')
       const productStatus = document.querySelectorAll('.productStatus')
       const productName = document.querySelectorAll('.productName')
     const productClass = document.querySelectorAll('.productClass')
     const productSpecs = document.querySelectorAll('.productSpecs')
     const productWeight = document.querySelectorAll('.productWeight')
     const productNumber = document.querySelectorAll('.productNumber')
     
    // inject data from firebase document to the tree element and display them
     id = doc.id;
     
     treeproducttitle.innerHTML = 'View ' + doc.data().productName
     productCategory.forEach((el)=>{
      el.value = doc.data().productCategory;
     })
      productName.forEach((el)=>{
      el.value = doc.data().productName;
     })
      productClass.forEach((el)=>{
      el.value = doc.data().productClass;
     })
      productSpecs.forEach((el)=>{
      el.value = doc.data().productSpecs;
     })
      productWeight.forEach((el)=>{
      el.value = doc.data().productWeight;
     })
      productNumber.forEach((el)=>{
      el.value = doc.data().productNumber;
     })
      productStatus.forEach((el)=>{
      el.value = doc.data().productStatus;
     })

     
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
   console.log(newArray)



  let optionsthree = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

  //Chart for 1st assessement
  series: [{
    data: [{
      x: 'No. of CRMs',
      y: newArray.length
    }, {
      x: 'CRM Weight(g)',
      y: 0
    }]
  }]
}
const chartsthree = document.querySelectorAll(".chartsthree")
chartsthree.forEach((eachChart)=>{
  var chartthree = new ApexCharts(eachChart, optionsthree);
        chartthree.render();
     
})
buildTable(newArray)
	function buildTable(newArray){

		for (var i = 0; i < newArray.length; i++){
			var row = `<tr>
							<td>${newArray[i].partRef}</td>
              <td>${newArray[i].partWeight}</td>
                <td>${newArray[i].materialNameRef}</td>
                    <td>${newArray[i].materialWeightgRef}</td>
							<td>${newArray[i].substanceName}</td>
							<td>${newArray[i].casnumber}</td>
              	<td>${newArray[i].substanceMassg}</td>
							<td>${newArray[i].substanceMassPerc}</td>
              	<td>${newArray[i].crm}</td>
                	<td>${newArray[i].rohs}</td>
					  </tr>`
			table.innerHTML += row


		}
	}
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
         const recycleRate = parseFloat(materialData[i].materialRecycleContent)
      // Reuse Mass (g)
      const reuseMassgAssess = reuseMat * materialMass
      // Reuse Mass (%)
      const reuseMassPerAssess = reuseMassgAssess / PartMass
      // Recycle Mass (g),  Formula: material mass * Recycle factor
      const recycleMassgAssess = materialMass * recycMat
      // Recycle Mass (%),  Formula: (material mass * Recycle factor) / Part Mass
      const recycleMassPercAssess = recycleMassgAssess  / PartMass
       //Recovery Mass (g),  Formula: material mass * Recovery factor
      const recovMassgAssess = materialMass * recovMat 
     //Recovery Mass (%),  Formula: (material mass * Recovery factor) / Part Mass
      const recovMassPercAssess = recovMassgAssess / PartMass
      //  console.log(recovMassPercAssess.toFixed(2))
      // Disposable Mass (g), Formulat: Material total mass - Recovery mass 
      const disposabaleMassg = (materialMass - recovMassgAssess).toFixed(2)
      // Disposable Mass (%), Formula: (Material total mass - Recovery mass) / Material mass
      const disposabalePercMass = disposabaleMassg / materialMass
      // Energy Recovery Mass (g), Formula: Recovery mass - Reuse mass - Recycling mass 
      const energyRecoMassgAssess = recovMassgAssess - reuseMassgAssess - recycleMassgAssess
     
      //Energy Recovery Mass (%), Formula: (Recovery mass - Reuse mass - Recycling mass ) / Material mass
      const energyRecoMassPercAssess = energyRecoMassgAssess / materialMass 
 console.log(energyRecoMassPercAssess)
      // Recycled Material Mass (g), Formula: PartA's material mass * Recycled rate
     const RecycMatg = materialMass * recycleRate
        // Recycled Material Mass (g), Formula: PartA's material mass * Recycled rate
     const RecycMatPer = (RecycMatg / materialMass)

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

        

      var rowMat = `
         <tr> 
         <td>${materialData[i].materialGroup}</td>
         <td>${materialData[i].materialName}</td>
         <td>${materialData[i].materialMassg}</td>
         <td>${RecycMatg}</td>
         <td>${RecycMatPer}</td>
               </tr>
      `
      	renderEN4557.innerHTML += rowMat
		}
	}



    // let dataSum = query.docs.map(doc=>{
    //     let x = doc.data().productWeight
         
    //         return x;
    // })
  
//     console.log(sum)
//     const sum = data.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);
// document.querySelector('.totalWeight').innerHTML = sum
// document.querySelector('.totalWeightPerc').innerHTML = parseFloat((sum / 3000000)/100000000000)  .toFixed(2) + "%" 
// console.log(sum); // 👉️ 65

})
.then(()=>{
    
     // CRM Weight (%)
    var subsAssess = document.querySelector(".subsAssess"),
  sumVal = 0;
  let matVal = 0;
for (var i = 1; i < subsAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(subsAssess.rows[i].cells[7].innerHTML);
  matVal = matVal + parseFloat(subsAssess.rows[i].cells[3].innerHTML);
}
const crmweightPerc = document.querySelectorAll('.crmweightPerc')
crmweightPerc.forEach((el)=> {
  el.innerHTML = (sumVal / matVal * 100).toFixed(2)
})
   // CRM Weight (g)
    var subsAssess = document.querySelector(".subsAssess"),
  sumVal = 0;
for (var i = 1; i < subsAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(subsAssess.rows[i].cells[6].innerHTML);
}
const crmweightg = document.querySelectorAll('.crmweightg')
crmweightg.forEach((el)=> {
  el.innerHTML = sumVal
})
  // Summary Reuse Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[4].innerHTML);
}
const sumReuseWeight = document.querySelectorAll('.sumReuseWeight')
sumReuseWeight.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Reuse Weigth (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[5].innerHTML);
}
const sumReuseWeightPerc = document.querySelectorAll('.sumReuseWeightPerc')
sumReuseWeightPerc.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Recycling Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[6].innerHTML);
}
const sumRecycWeightg = document.querySelectorAll('.sumRecycWeightg')
sumRecycWeightg.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Recycling Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[7].innerHTML);
}
const sumRecycWeightPerc = document.querySelectorAll('.sumRecycWeightPerc')
sumRecycWeightPerc.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Recovering Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[8].innerHTML);
}
const sumRecovWeightg = document.querySelectorAll('.sumRecovWeightg')
sumRecovWeightg.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Recovering Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[9].innerHTML);
}
const sumRecovWeightPerc = document.querySelectorAll('.sumRecovWeightPerc')
sumRecovWeightPerc.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Total Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[14].innerHTML);
}
const sumTotalWeightg = document.querySelectorAll('.sumTotalWeightg')
sumTotalWeightg.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Total Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[15].innerHTML);
}

sumTotalWeightPerc.forEach((el)=> {
  el.innerHTML = "100";
})
const chartReuseWeight = document.querySelector('.sumReuseWeight').textContent
const chartRecycWeight = document.querySelector('.sumRecycWeightg').textContent
const chartRecovWeight = document.querySelector('.sumRecovWeightg').textContent

   let options = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

  //Chart for 1st assessement
  series: [{
    data: [{
      x: 'Reuse Weight(g)',
      y: chartReuseWeight
    }, {
      x: 'Recycled Weight(g)',
      y: chartRecycWeight
    }, {
      x: 'Recovery Weight(g)',
      y: chartRecovWeight
    }]
  }]
}
const charts = document.querySelectorAll(".chart")
charts.forEach((eachChart)=>{
  var chart = new ApexCharts(eachChart, options);
        chart.render();
     
})

const materialChart = document.querySelector('.materialChart');
   // Recycled Material (%)
  
  sumVal = 0;
for (var i = 1; i < materialChart.rows.length; i++) {
  sumVal = sumVal + parseFloat(materialChart.rows[i].cells[4].innerHTML);
}
const sumRecycWeightPer = document.querySelectorAll('.sumRecycWeightPer')
sumRecycWeightPer.forEach((el)=> {
  el.innerHTML = sumVal
})
     // Recycled Material (g)
  sumVal = 0;
for (var i = 1; i < materialChart.rows.length; i++) {
  sumVal = sumVal + parseFloat(materialChart.rows[i].cells[3].innerHTML);
}
const sumRecycWeight = document.querySelectorAll('.sumRecycWeight')
sumRecycWeight.forEach((el)=> {
  el.innerHTML = sumVal
})
let materialnum = materialChart.rows.length
   let optionstwo = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

 //Chart for 2nd assessement
series: [{
  data: [{
    x: 'No. of Recycled Materials',
    y: materialnum - 1
  }, {
    x: 'Recycled Material(g)',
    y: chartRecycWeight
  }]
}]


}
const chartsecond = document.querySelectorAll(".chartsecond")
chartsecond.forEach((eachChart)=>{
  var chartsecond = new ApexCharts(eachChart, optionstwo);
        chartsecond.render();
     
})


})





});


btnprAdd.addEventListener('click', ()=>{
   const buttony = document.querySelectorAll('.addProduct');
  buttony.forEach(eachBtny => {
  eachBtny.classList.remove('loading')
  })
})

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
   
            partname: obj.partname,
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
const getPPdata = document.querySelector('.getPPdata')
getPPdata.addEventListener('click', (e) => {
 e.preventDefault()
  const partsRef = db.collection("recycledparts")
     partsRef.where("partName", "==", partname.value).where("supplierName", "==", supplierName.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(partname.value)
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            partId.value = doc.id
             partname.value = doc.data().partName
          partSize.value = doc.data().partSize
          partWeight.value = doc.data().partWeight
          partRegisteredDate.value = doc.data().partRegisteredDate
          companyName.value = doc.data().partMemo
          supplierName.value = doc.data().supplierName

        });
    })
  
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
})

// Add Parts/Materials/Substances to a product
const buttonaddParts = document.querySelector('.buttonaddParts')
   addPart.addEventListener('click', e => {
  e.preventDefault();
   buttonaddParts.classList.add("active");
  // console.log(doc.id, " => ", doc.data());
  setTimeout(()=>{
       db.collection('recycledproducts').doc(btnpraddRef).get().then(()=>{
      let productRef = doc.data()
      console.log(productRef);
       db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partId.value).set({
   productRef: productRef.productName,
    partname: partname.value,
    supplierName: supplierName.value,
    partSize: partSize.value,
    partWeight: parseFloat(partWeight.value),
    partRegisteredDate: partRegisteredDate.value,
    partMemo: companyName.value,
    quantity: quantity.value,
     partCode: partCode.value,
    
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
                             const matRefData = doc.data()
                    console.log(matRefData)
                    db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partproductRef).collection('selectedMaterials').doc(matRef).set({
                            productRef: productRef.productName,
                            partRef: partname.value,
                             partWeight: parseFloat(partWeight.value),
                            materialName: doc.data().materialName,
                            materialGroup:doc.data().materialGroup,
                            materialClassId: doc.data().materialClassId,
                            materialRecycleContent: doc.data().materialRecycleContent,
                            materialRecycleType: doc.data().materialRecycleType,
                            materialMassg:parseFloat(doc.data().materialMassg),
                            materialMassPerc: parseFloat(doc.data().materialMassPerc),
                            recovMat: parseFloat(doc.data().recovMat),
                            recycMat: parseFloat(doc.data().recycMat),
                            reuseMat: parseFloat(doc.data().reuseMat),
                            matnameSelect: doc.data().matnameSelect,
                            selectiveMat: parseFloat(doc.data().selectiveMat)
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
            partWeight: parseFloat(partWeight.value),
            materialWeightgRef: parseFloat(matRefData.materialMassg),
              materialNameRef: matRefData.materialName,
            substanceName: doc.data().substanceName,
            casnumber: doc.data().casnumber,
            crm: doc.data().crm,
            rohs: doc.data().rohs,
            substanceMassg: parseFloat(doc.data().substanceMassg),
            substanceMassPerc: parseFloat(doc.data().substanceMassPerc),

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
          

   buttonaddParts.classList.remove("active");
        buttonaddParts.querySelector("i").classList.replace( "bxs-edit", "bx-check-circle")
        buttonaddParts.querySelector("span").innerText = "Completed";
   setTimeout(()=>{
     buttonaddParts.classList.remove("active");
        buttonaddParts.querySelector("i").classList.replace( "bx-check-circle", "bxs-edit")
        buttonaddParts.querySelector("span").innerText = "Add Part to Product";
   }, 3500)
   

  }, 2000)
 
 
   
 
  const addPPForm = document.querySelector('.addPPForm')
setTimeout(resetForm, 15000);
 function resetForm() {
addPPForm.reset();
}})

   const setupPartsProducts = (data) => {
    let html = '';
    data.forEach(doc=> {
       const addedparts = doc.data();
       const breadproductname = document.querySelector('.breadproductname')
       breadproductname.innerHTML = doc.data().productRef
      console.log(addedparts)
      const pp = `
      <tr id='${doc.id}' data-id='${doc.id}'>

        <td>${doc.data().partname}</td>
        <td>${doc.data().partCode}</td>
        <td>${doc.data().partWeight}</td>
        <td>${doc.data().partSize}</td>
        <td>${doc.data().partRegisteredDate}</td>
           <td>${doc.data().quantity}</td>
        <td>${doc.data().partMemo}</td>

          <td>
    <div class="btngroup">
     <span href="#" class="viewpartmat button btn-large" data-toggle="modal" data-target="#partproductmaterial" data-PN= '${doc.data().partname}' data-id='${doc.id}'>View Material</span>
   
    </div>
   
      </td>
  
    </tr>
      `;
      html+=pp
       const bpart = `
       <tr data-id="1" data-parent="0" data-level="1">
                                 <td data-column="name">${doc.data().partname}</td>
                              </tr>

      `;
          const breadbody = document.querySelector('.breadbody')
       breadbody.insertAdjacentHTML('beforeend', bpart)
    })

    addedpartslist.insertAdjacentHTML('beforeend', html)
  }
 db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').onSnapshot(snapshot => {
  addedpartslist.innerHTML = " "
  setupPartsProducts(snapshot.docs)
   const viewpartmat = document.querySelectorAll('.viewpartmat')
    for (let i = 0; i < viewpartmat.length; i++) {
    
 viewpartmat[i].addEventListener('click', ()=>{
   const partmatRef = viewpartmat[i].getAttribute('data-id');
    const breadpartName = viewpartmat[i].getAttribute('data-PN');
   console.log(partmatRef)
      const breadpartname = document.querySelector('.breadpartname')
       breadpartname.innerHTML = breadpartName
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
  
    </div>
      </td>
    </tr>
      
      `;
           html+=li
    //   const partmat = `
    //      <tr data-id="1" data-parent="0" data-level="1">
    //                              <td data-column="name">${doc.data().materialGroup}</td>
    //                           </tr>
    //                           <tr data-id="2" data-parent="2" data-level="2">
    //                              <td data-column="name">${doc.data().materialName}</td>
    //                           </tr>
    //   `
    //    const breadpartmat = document.querySelector('.breadpartmat')
    // breadpartmat.insertAdjacentHTML('beforeend', partmat)
    })
  
    document.querySelector('.materiallist').insertAdjacentHTML('beforeend', html)
  }
  
  db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${partmatRef}`).collection('selectedMaterials').onSnapshot(snapshot => {
      document.querySelector('.materiallist').innerHTML = '';
    console.log(doc.data())
    setupMaterialUI(snapshot.docs)
      const viewmatsub = document.querySelectorAll('.viewmatsub')
    for (let i = 0; i < viewmatsub.length; i++) {
    
 viewmatsub[i].addEventListener('click', ()=>{
  document.querySelector('.substancelist').innerHTML = ""
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
const buttonaddProducts = document.querySelector('.buttonaddProducts')    
  addProduct.addEventListener('click', e => {
    buttonaddProducts.classList.add("active");
  e.preventDefault();
    setTimeout(()=>{
  db.collection('recycledproducts').add({
    productCategory: addModalyForm.productCategory.value,
    productName: addModalyForm.productName.value,
    productMN: addModalyForm.productMN.value,
    productWeight: addModalyForm.productWeight.value,
    productSize: addModalyForm.productSize.value,
    registeredDate: addModalyForm.registeredDate.value,
    productStatus: addModalyForm.productStatus.value,
    memo: addModalyForm.memo.value
  })
   buttonaddProducts.classList.remove("active");
        buttonaddProducts.querySelector("i").classList.replace( "bxs-edit", "bx-check-circle")
        buttonaddProducts.querySelector("span").innerText = "Completed";
   setTimeout(()=>{
     buttonaddProducts.classList.remove("active");
        buttonaddProducts.querySelector("i").classList.replace( "bx-check-circle", "bxs-edit")
        buttonaddProducts.querySelector("span").innerText = "Add Part to Product";
   }, 3500)

//   setTimeout(closeForm, 3000);
//  function closeForm() {
//  modalyWrapper.classList.remove('modaly-show');
// }

 
},3000);
})

// Click submit in add modaly
  const buttoni = document.querySelector(".buttoni");
 
// Click submit in edit modaly
editForm.addEventListener('click', e => {
       buttoni.classList.add("active");
  e.preventDefault();
setTimeout(()=>{
    db.collection('recycledproducts').doc(id).update({
    productCategory: editmodalyForm.productCategory.value,
    productName: editmodalyForm.productName.value,
    productMN: editmodalyForm.editmodelName.value,
    productWeight: editmodalyForm.productWeight.value,
    productSize: editmodalyForm.editproductSize.value,
    registeredDate: editmodalyForm.editregisteredDate.value,
   productStatus: editmodalyForm.editproductStatus.value,
   memo: editmodalyForm.editMemo.value
     
  })

   .then(()=>{

   buttoni.classList.remove("active");
        buttoni.querySelector("i").classList.replace( "bxs-edit", "bx-check-circle")
        buttoni.querySelector("span").innerText = "Completed";
   setTimeout(()=>{
     buttoni.classList.remove("active");
        buttoni.querySelector("i").classList.replace( "bx-check-circle", "bxs-edit")
        buttoni.querySelector("span").innerText = "Edit Product";
   }, 3500)
   
  })
}, 2000)

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


//   var addpartsRef = db.collectionGroup('recycledparts');
// addpartsRef
// .get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data()
//             return x;
//     })
//      let dataPartWeight = query.docs.map(doc=>{
//         let x = doc.data().substanceMassg

         
//             return x;
//     })
  
//     console.log(data)
//   })

// buildTable(newArray)
// 	function buildTable(newArray){

// 		for (var i = 0; i < newArray.length; i++){
// 			var row = `<tr>
// 							<td>${newArray[i].partRef}</td>
//               <td>${newArray[i].partWeight}</td>
//                 <td>${newArray[i].materialNameRef}</td>
//                     <td>${newArray[i].materialWeightgRef}</td>
// 							<td>${newArray[i].substanceName}</td>
// 							<td>${newArray[i].casnumber}</td>
//               	<td>${newArray[i].substanceMassg}</td>
// 							<td>${newArray[i].substanceMassPerc}</td>
//               	<td>${newArray[i].crm}</td>
//                 	<td>${newArray[i].rohs}</td>
// 					  </tr>`
// 			table.innerHTML += row


// 		}
// 	}

      
db.collection("recycledparts")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option value="${doc.data().supplierName}">${doc.data().supplierName}</option>
  `;

   supplierName.innerHTML += tm;
 
        });
    })


 supplierName.addEventListener('change', ()=>{
   partname.innerHTML = "";
db.collection("recycledparts").where("supplierName", "==", supplierName.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option value="${doc.data().partName}">${doc.data().partName}</option>
  `;

   partname.innerHTML += tm;
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
 })

  




  
    



  partname.addEventListener('change', (e)=>{
    e.preventDefault()
  partCode.innerHTML = "";
db.collection("recycledparts").where("partName", "==", partname.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option value="${doc.data().partCode}">${doc.data().partCode}</option>
  `;

   partCode.innerHTML += tm;
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })





