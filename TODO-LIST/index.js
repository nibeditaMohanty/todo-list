
// CRUD - Create, Read, Update, Delete

// INSERT THE TABLE AND DATA Dynamically

function insertData(name, job, experience) {
    if (!name || !job || !experience) {
        return;
    }

    let table = document.getElementById('table');
    let tr = document.createElement("tr")
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let actions = document.createElement('td');
    th.textContent = name;
    td1.textContent = job;
    td2.textContent = experience;

    let modifiedName = name.split(" ").join("").toLowerCase()
    // console.log(modifiedName)
    tr.setAttribute('id', modifiedName);
    // console.log(tr);
    actions.innerHTML = `<button class = "edit">Edit</button> <button class='delete'>Delete</button>`;

    table.appendChild(tr);
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(actions);


    actions.addEventListener('click',
    function(){
    //    let dlt = e.target
       tr.remove()
    }
    )
}

// RETRIVE THE DATA
document.getElementById('btn').onclick = function nameData() {
    let name = document.getElementById("name").value;
    let job = document.getElementById('job').value;
    let exp = document.getElementById('exp').value;

    if (!name) {
        document.getElementById('msg').innerHTML = "*Enter your Name."
        return;
    } else if (!job) {
        document.getElementById('msg').innerHTML = "*Enter your job."
        return;
    } else if (!exp) {
        document.getElementById('msg').innerHTML = "*Enter your experience."
        return;
    } else {
        insertData(name, job, exp)
    }
}



const OnEvent = (doc) => {
    
    return {
        on: (type, selector, callback) => {

            doc.addEventListener(type, (e) => {
                
                if (!e.target.matches(selector)) 
                return;
                
                callback.call(e.target, e);
            },
             false);
        }
    }
};


OnEvent(document).on('click', '.delete', function (e) {
    // console.log("elememtni..",e)
    e.target.parentNode.parentNode.remove()

});


OnEvent(document).on('click', '.edit', function (e) {
    var rowId = e.target.parentNode.parentNode.id;

    console.log("the.. id is..", rowId)
});












