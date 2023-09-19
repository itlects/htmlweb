// CRUD :  creaet read update delete

function Submit(){
    //alert('This is Submit Function');
    var dataEntered = retrieveData();
    console.log(dataEntered);
    var readData = readingDataFromLocalStorage(dataEntered);
}

function retrieveData(){
    var name1 = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var exp = document.getElementById("exp").value;

    var arr = [name1, job, exp];
    return (name1, job ,exp)
    
}

function readingDataFromLocalStorage(dataEntered){
    var n = localStorage.setItem("Name", dataEntered[0] );
    var j = localStorage.setItem("Job", dataEntered[0] );
    var e = localStorage.setItem("Experiment", dataEntered[0] );
}