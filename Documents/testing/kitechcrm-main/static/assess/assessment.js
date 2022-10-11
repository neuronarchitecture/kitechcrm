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

const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();


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


db.collectionGroup('materials').get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
         
            return x;
    })
    console.log(data)
    document.querySelector('.nummat').innerHTML = `Current Number of Materials: ${data.length}`
	buildTable(data)

	function buildTable(data){
		var table = document.querySelector('.renderParts')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].materialName}</td>
							<td>${data[i].materialGroup}</td>
							<td>${data[i].materialClassId}</td>
              	<td>${data[i].materialMassg}</td>
							<td>${data[i].materialRecycleContent}</td>
							<td>${data[i].materialRecycleType}</td>
					  </tr>`
			table.innerHTML += row


		}
	}


})

.catch((error) => {
    console.log("Error getting document:", error);
});

document.querySelector('.refresh').addEventListener('click', (e)=> {
  e.preventDefault()
  
db.collectionGroup('materials').get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
         
            return x;
    })
    console.log(data)
    document.querySelector('.nummat').innerHTML = `Current Number of Materials: ${data.length}`



})

.catch((error) => {
    console.log("Error getting document:", error);
});

})