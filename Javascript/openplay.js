let array1 = []
// let substrings = [];
let Enter_Number1 = document.getElementById("Play1").value;

function play_number1() {
  let Enter_Number1 = document.getElementById("Play1").value;
  let regx1 = /^[A-Za-z]+$/;
  if (regx1.test(Enter_Number1)) {
    // console.log(true);
    document.getElementById("Play1").value = ''
  }
  let even = []
  let odd = []
  for (i = 0; i <= 100; i++) {

    // console.log(i)
    if (i % 2 === 0) {
      even.push(i)
      // console.log(i)

    }
    else {
      odd.push(i)
      // console.log(odd)
    }

  }
  // console.log(even)
  // console.log(even)
  let substrings = [];

  // Determine the end index for the loop based on whether the input number is odd or even
  if (Enter_Number1.length % 2 !== 0) {
    Enter_Number1 = Enter_Number1.slice(0, -1);
  }

  // Loop through the string and extract substrings of length 2
  for (let i = 0; i < Enter_Number1.length; i += 2) {
    // Push each substring to the array
    substrings.push(Enter_Number1.slice(i, i + 2));

  }

  // console.log(substrings)
  let storage2 = localStorage.setItem("array6", JSON.stringify(substrings))
  // console.log(storage2)

  console.log(substrings)



  // Construct HTML table rows for displaying pairs
  let jodacollection14 = substrings.map((item, index) => ({
    text: item,
    equal: "=",
    zero: "0",
    cross: "x" // If it's the last pair, display "x"
  }));
  // console.log(jodacollection14)

  // Display pairs in HTML table
  let firsttable = jodacollection14.map((item, index) => `
    <tr>
        <td class="text1">${item.text}</td>
        <td class="equal2">${item.equal}</td>
        <td class="zero1" id="zero1">${item.zero}</td>     
        <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    </tr>
`).join('');
  // console.log(firsttable)
  document.getElementById("without_palti").innerHTML = firsttable;
  let store1 = localStorage.setItem("array4", JSON.stringify(jodacollection14));


  let uniqueEntries = [];
  jodacollection14.forEach(item => {
    if (!uniqueEntries.some(entry => entry.text === item.text)) {
      uniqueEntries.push(item);
    }
  });

  // Generate HTML for the table rows
  let tableRowsHTML = uniqueEntries.map((item, index) => `
      <tr class="table1">
          <td class="text1">${item.text}</td>
          <td class="equal2">${item.equal}</td>
          <td class="zero1">${item.zero}</td>     
          <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
      </tr>
  `).join("");

  console.log(tableRowsHTML);

  // Append table rows HTML to the table body
  document.getElementById('without_palti').innerHTML = tableRowsHTML;
  if (document.getElementById('check1').checked) {
    let amount56 = document.getElementById("amount14").value;
    let store4 = localStorage.getItem("array4");
    let new_array24 = JSON.parse(store4);
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)
    console.log(get_storage1)
    let set_item = JSON.parse(get_storage1);
    let set_item1 = set_item.join('');
    let set_item2 = set_item1.split('').reverse().join('');
    let pairs = set_item2.match(/\d{2}/g);
    let resultArray = pairs.map(pair => pair);
    console.log(resultArray)

    let palti1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti1)

    if (amount56 === "") {
      palti1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))
    }


    let jodacollection15 = resultArray.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }));

    console.log(jodacollection15)

    // Create objects with the formatted pairs
    if (amount56 === "") {
      console.log(amount56 === "")
      jodacollection15 = resultArray.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }));
    }

    // Concatenate new_array24 and jodacollection15
    let concat = palti1.concat(jodacollection15);
    console.log(concat)

    // Filter out duplicate entries based on 'text'
    let uniqueEntries = [];
    concat.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;
  }
  else {
    let amount56 = document.getElementById("amount14").value;
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)

    let palti_joda1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti_joda1)

    if (amount56 === "") {
      palti_joda1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))


    }

    let uniqueEntries = [];
    palti_joda1.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;

    console.log(tableRowsHTML)
  }

}
function reverse1() {
  let amount56 = document.getElementById("amount14").value;
  let Enter_Number1 = document.getElementById("Play1").value;
 
  if (document.getElementById('check1').checked) {
    if(Enter_Number1 === ""){
      localStorage.removeItem("array6")
    }
    let store4 = localStorage.getItem("array4");
    let new_array24 = JSON.parse(store4);
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)
    console.log(get_storage1)
    let set_item = JSON.parse(get_storage1);
    let set_item1 = set_item.join('');
    let set_item2 = set_item1.split('').reverse().join('');
    let pairs = set_item2.match(/\d{2}/g);
    let resultArray = pairs.map(pair => pair);
    console.log(resultArray)

    let palti1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti1)

    if (amount56 === "") {
      palti1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))
    }


    let jodacollection15 = resultArray.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }));

    console.log(jodacollection15)

    // Create objects with the formatted pairs
    if (amount56 === "") {
      console.log(amount56 === "")
      jodacollection15 = resultArray.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }));
    }

    // Concatenate new_array24 and jodacollection15
    let concat = palti1.concat(jodacollection15);
    console.log(concat)

    // Filter out duplicate entries based on 'text'
    let uniqueEntries = [];
    concat.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;
  }

  else {
    let amount56 = document.getElementById("amount14").value;
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)

    let palti_joda1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti_joda1)

    if (amount56 === "") {
      palti_joda1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))


    }

    let uniqueEntries = [];
    palti_joda1.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;




    //     let jodi1 = palti_joda1.map((item, index) => `
    //     <tr>
    //         <td class="text1">${item.text}</td>
    //         <td class="equal2">${item.equal}</td>
    //         <td class="zero1" id="zero1">${item.zero}</td>     
    //         <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    //     </tr>
    // `).join("");

    console.log(tableRowsHTML)
  }
}


function openplay_amount() {
  let amount56 = document.getElementById("amount14").value;
  console.log(amount56)
  // let regx1 = /^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i
  // if (regx1.test( document.getElementById("amount14").value)) {
  //   console.log(true);
  //   document.getElementById("amount14").value = '';
  // }


  document.getElementById("amount14").addEventListener("keypress", function (event) {
    // Check if the pressed key is a number (0-9)
    if (event.key < '0' || event.key > '9') {
      // Prevent the default behavior (typing the character)
      event.preventDefault();
    }
  });
  if (document.getElementById('check1').checked) {
    let store4 = localStorage.getItem("array4");
    let new_array24 = JSON.parse(store4);
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)
    console.log(get_storage1)
    let set_item = JSON.parse(get_storage1);
    let set_item1 = set_item.join('');
    let set_item2 = set_item1.split('').reverse().join('');
    let pairs = set_item2.match(/\d{2}/g);
    let resultArray = pairs.map(pair => pair);
    console.log(resultArray)

    let palti1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti1)

    if (amount56 === "") {
      palti1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))
    }


    let jodacollection15 = resultArray.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }));

    console.log(jodacollection15)

    // Create objects with the formatted pairs
    if (amount56 === "") {
      console.log(amount56 === "")
      jodacollection15 = resultArray.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }));
    }

    // Concatenate new_array24 and jodacollection15
    let concat = palti1.concat(jodacollection15);
    console.log(concat)

    // Filter out duplicate entries based on 'text'
    let uniqueEntries = [];
    concat.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;
  }

  else {
    let amount56 = document.getElementById("amount14").value;
    let get_storage1 = localStorage.getItem("array6");
    let storage3 = JSON.parse(get_storage1)
    console.log(storage3)

    let palti_joda1 = storage3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: amount56,
      cross: "x"
    }))
    console.log(palti_joda1)

    if (amount56 === "") {
      palti_joda1 = storage3.map((item, index) => ({
        text: item,
        equal: "=",
        zero: "0",
        cross: "x"
      }))


    }

    let uniqueEntries = [];
    palti_joda1.forEach(item => {

      if (!uniqueEntries.some(entry => entry.text === item.text)) {
        uniqueEntries.push(item);
      }
    });
    console.log(uniqueEntries)

    // Generate HTML for the table rows
    let tableRowsHTML = uniqueEntries.map((item, index) => `
        <tr class="table1">
            <td class="text1">${item.text}</td>
            <td class="equal2">${item.equal}</td>
            <td class="zero1">${item.zero}</td>     
            <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
        </tr>
    `).join("");

    console.log(tableRowsHTML);

    // Append table rows HTML to the table body
    document.getElementById('without_palti').innerHTML = tableRowsHTML;




    //     let jodi1 = palti_joda1.map((item, index) => `
    //     <tr>
    //         <td class="text1">${item.text}</td>
    //         <td class="equal2">${item.equal}</td>
    //         <td class="zero1" id="zero1">${item.zero}</td>     
    //         <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    //     </tr>
    // `).join("");

    console.log(tableRowsHTML)
  }


}
function place_bet1(){


  let selectElement = document.getElementById("select12");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 === "SELECT GAME") {
    // alert("hello"); 
    window.scrollTo(0, 0);
    selectElement.classList.add("pink-border");
  }
}

function change14(){
  document.getElementById("select12").style.color = "green";
  document.getElementById("select12").style.textTransform = "Uppercase";
  document.getElementById("select12").style.fontSize = "19px";
  // let selectElement = document.getElementById("select12");
  // let value12 = selectElement.value;
  // console.log(value12)

  let selectElement = document.getElementById("select12");
  let value12 = selectElement.value;
  console.log(value12)

  if (value12 !== "SELECT GAME") {
    selectElement.classList.remove("pink-border");
    selectElement.classList.add("blue-border");
  }



}
function harupside(){
  let harup2=[]
  let harup3=[]
  let harup_data=document.getElementById("harup1").value;
  harup2.push(harup_data)
  console.log(harup2)
  console.log(harup_data)
  // if(document.getElementById("check12").checked || document.getElementById("check2").checked){
  //   document.getElementById("alert1").innerHTML=""
  // }
  // else{
  //   document.getElementById("alert1").innerHTML="Please select Harup Side"
  //   document.getElementById("alert1").style.color="red"
  //   document.getElementById("alert1").style.fontSize="15px"
  //   document.getElementById("alert1").style.fontWeight="bold"
  // }


  if (document.getElementById("check12").checked) {
    let harup3 = []; // Initialize the array here
    // Assuming harup_data is an array
    for (let i = 0; i < harup_data.length; i++) {
        let new1 = harup_data[i] + "A";
        console.log(new1);
        harup3.push(new1);
        console.log(harup3);
    }

    // Mapping to a new structure
    let harup_collection12 = harup3.map((item, index) => ({
      text: item,
      equal: "=",
      zero: "0",
      cross: "x"
    }));
    console.log(harup_collection12);

    // Generating HTML table rows
    let firsttable = harup_collection12.map((item, index) => `
    <tr>
        <td class="text1">${item.text}</td>
        <td class="equal2">${item.equal}</td>
        <td class="zero1" id="zero1">${item.zero}</td>     
        <td><button class="delete-btn" onclick="deleteRow(${index})">${item.cross}</button></td>
    </tr>
    `).join('');
  
    // Displaying the HTML table
    document.getElementById('without_palti').innerHTML = firsttable;
} else {
    // document.getElementById('without_palti').innerHTML = "";
    document.getElementById("table1").innerHTML ="Please Select Harup Side"
}




}



function harup_Aside(){

  if(document.getElementById("check12").checked || document.getElementById("check2").checked){
    document.getElementById("alert1").innerHTML=""
  }
  else{
    document.getElementById("alert1").innerHTML="Please select Harup Side"
    document.getElementById("alert1").style.color="red"
    document.getElementById("alert1").style.fontSize="15px"
    document.getElementById("alert1").style.fontWeight="bold"
  }


}

function harup_B(){
  if(document.getElementById("check12").checked || document.getElementById("check2").checked){
    document.getElementById("alert1").innerHTML=""
  }
  else{
    document.getElementById("alert1").innerHTML="Please select Harup Side"
    document.getElementById("alert1").style.color="red"
    document.getElementById("alert1").style.fontSize="15px"
    document.getElementById("alert1").style.fontWeight="bold"
  }
}

