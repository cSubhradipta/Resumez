var beginPart = `<div class="form-row mb-4">` 
var endPart = `</div>`;

var monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dateFormatting(dt){
    var newDate = new Date(dt);
    var monIndex = newDate.getMonth();
    var mon = monthAbbr[monIndex];
    var yr = newDate.getFullYear();
    var formattedDate = mon + " " + yr;
    return formattedDate;
}

var skillCount = 1;
var eduCount = 1;
var expCount = 1;
var projCount = 1;
var certCount = 1;
var awardCount = 1;
var langCount = 1;
var hobbyCount = 1;

function skillNewField(){
    // console.log("Working OK !!!");

    var newNode = document.getElementById("skill-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("skillAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    skillCount++;

    if (skillCount == 10){
        var btn = document.getElementById("skillBtn");
        btn.setAttribute("disabled", true);  
    }
}

function eduNewField(){
    // console.log("Working OK !!!");

    var newNode = document.getElementById("institute-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("eduAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    eduCount++;

    if (eduCount == 5){
        var btn = document.getElementById("eduBtn");
        btn.setAttribute("disabled", true);
        
    }
}

function expNewField(){
    // console.log("Working OK !!!");

    var newNode = document.getElementById("experience-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("expAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    expCount++;

    if (expCount == 5){
        var btn = document.getElementById("expBtn");
        btn.setAttribute("disabled", true);  
    }
}

function projectNewField(){
    // console.log("Working OK !!!");

    var newNode = document.getElementById("project-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("projectAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    projCount++;

    if (projCount == 5){
        var btn = document.getElementById("projBtn");
        btn.setAttribute("disabled", true);  
    }
}

function awardNewField(){
    // console.log("Working OK !!!");

    var newNode = document.getElementById("award-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("awardAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    awardCount++;

    if (awardCount == 5){
        var btn = document.getElementById("awardBtn");
        btn.setAttribute("disabled", true);  
    }
}

function certificationNewField(){

    var newNode = document.getElementById("certification-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("certificationAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    certCount++;

    if (certCount == 5){
        var btn = document.getElementById("certBtn");
        btn.setAttribute("disabled", true);  
    }
}

function languageNewField(){
    // console.log("Working OK !!!");

    var newNode = document.getElementById("language-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("languageAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    langCount++;

    if (langCount == 6){
        var btn = document.getElementById("langBtn");
        btn.setAttribute("disabled", true);  
    }
}

function hobbyNewField(){
    // console.log("Working OK !!!");

    var newNode = document.getElementById("hobby-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;

    var h = document.getElementById("hobbyAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);

    hobbyCount++;

    if (hobbyCount == 6){
        var btn = document.getElementById("hobbyBtn");
        btn.setAttribute("disabled", true);  
    }
}


function generateResume(){

    let name = document.getElementById("getName").value;
    document.getElementById("putName").innerText = name;
    document.getElementById("myTitle").innerText = name;    

    if ( name == ""){
        document.getElementById("myTitle").innerText = "Resumez";
    }

    let role = document.getElementById("getRole").value;
    document.getElementById("putRole").innerText = role;

    let addrOne = document.getElementById("getAddress").value;
    document.getElementById("putAddressLineOne").innerText = addrOne;

    let city = document.getElementById("getCity").value;
    let pin = document.getElementById("getPin").value;
    var addrTwo = city + " - " + pin;
    document.getElementById("putAddressLineTwo").innerText = addrTwo;

    let state = document.getElementById("getState").value;
    let country = document.getElementById("getCountry").value;
    var addrThree = state + ", " + country;
    document.getElementById("putAddressLineThree").innerText = addrThree;

    let contact = document.getElementById("getContact").value;
    document.getElementById("putContact").innerHTML = `<a href="tel:` + contact + `">` + contact + `</a>`;

    let email = document.getElementById("getEmailID").value;
    document.getElementById("putEmailID").innerHTML = `<a href="mailto:` + email + `">` + email + `</a>`;

    let website = document.getElementById("getWebsite").value;

    if(website == ""){
        document.getElementById("webBlock").style.display = "none";
    } else {
        document.getElementById("putWebsite").innerHTML = `<a href="` + website + `">` + website + `</a>`;
    }

    let github = document.getElementById("getGithub").value;
    document.getElementById("putGithub").innerHTML = `<a href="` + github + `">` + github + `</a>`;

    let linkedIn = document.getElementById("getLinkedIn").value;
    document.getElementById("putLinkedIn").innerHTML = `<a href="` + linkedIn + `">` + linkedIn + `</a>`;

    let objective = document.getElementById("getObjective").value;
    document.getElementById("putObjective").innerHTML = objective;


    let institute = document.getElementsByClassName("getInstitute");
    var i = 0;

    for(let e of institute){
        // console.log(e.value);
        var instituteID = "putInstitute" + i;
        document.getElementById(instituteID).innerHTML = e.value;
        i++;
    }

    if(document.getElementById("putInstitute3").innerText == ""){
        document.getElementById("instituteBlock3").style.display = "none";
    }

    if(document.getElementById("putInstitute4").innerText == ""){
        document.getElementById("instituteBlock4").style.display = "none";
    }


    let course = document.getElementsByClassName("getCourse");
    i = 0;
    for(let e of course){
        var courseID = "putCourse" + i;
        document.getElementById(courseID).innerHTML = e.value;
        i++;
    }

    let stream = document.getElementsByClassName("getStream");
    i = 0;
    for(let e of stream){
        var streamID = "putStream" + i;
        document.getElementById(streamID).innerHTML = e.value;
        i++;
    }

    let courseStartDate = document.getElementsByClassName("getCourseStartDate");
    i = 0;
    for(let e of courseStartDate){
        var sDateID = "putCourseStartDate" + i;
        if(e.value == ""){
            document.getElementById(sDateID).innerHTML = "";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(sDateID).innerHTML = dateValue + " - ";
        } 
        i++;
    }

    let courseEndDate = document.getElementsByClassName("getCourseEndDate");
    i = 0;
    for(let e of courseEndDate){
        var eDateID = "putCourseEndDate" + i;
        if(e.value == ""){
            document.getElementById(eDateID).innerHTML = "Present";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(eDateID).innerHTML = dateValue;
        } 
        i++;
    }

    let percentage = document.getElementsByClassName("getPercentage");
    i = 0;
    for(let e of percentage){
        var percentageID = "putPercentage" + i;  
        document.getElementById(percentageID).innerHTML = e.value;
        i++;
    }




    let expOrganization = document.getElementsByClassName("getExpOrganization");
    var i = 0;

    for(let e of expOrganization){
        // console.log(e.value);
        var ID = "putExpOrganization" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }


    let expRole = document.getElementsByClassName("getExpRole");
    i = 0;
    for(let e of expRole){
        var ID = "putExpRole" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let expStartDate = document.getElementsByClassName("getExpStartDate");
    i = 0;
    for(let e of expStartDate){
        var ID = "putExpStartDate" + i;
        if(e.value == ""){
            document.getElementById(ID).innerHTML = "";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(ID).innerHTML = dateValue + " - ";
        } 
        i++;
    }

    let expEndDate = document.getElementsByClassName("getExpEndDate");
    i = 0;
    for(let e of expEndDate){
        var ID = "putExpEndDate" + i;
        if(e.value == ""){
            document.getElementById(ID).innerHTML = "Present";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(ID).innerHTML = dateValue;
        } 
        i++;
    }

    let expDescription = document.getElementsByClassName("getExpDescription");
    i = 0;
    for(let e of expDescription){
        var ID = "putExpDescription" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }





    let projectTitle = document.getElementsByClassName("getProjectTitle");
    var i = 0;

    for(let e of projectTitle){
        // console.log(e.value);
        var ID = "putProjectTitle" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }


    let projectTechnology = document.getElementsByClassName("getProjectTechnology");
    i = 0;
    for(let e of projectTechnology){
        var ID = "putProjectTechnology" + i;
        document.getElementById(ID).innerHTML = "Technology used: " + e.value;
        i++;
    }

    let projectDate = document.getElementsByClassName("getProjectDate");
    i = 0;
    for(let e of projectDate){
        var ID = "putProjectDate" + i;
        if(e.value == ""){
            document.getElementById(ID).innerHTML = "";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(ID).innerHTML = dateValue;
        }   
        i++;
    }

    let projectDescription = document.getElementsByClassName("getProjectDescription");
    i = 0;
    for(let e of projectDescription){
        var ID = "putProjectDescription" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }






    let awardTitle = document.getElementsByClassName("getAwardTitle");
    i = 0;

    for(let e of awardTitle){
        // console.log(e.value);
        var ID = "putAwardTitle" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }


    let awarder = document.getElementsByClassName("getAwarder");
    i = 0;
    for(let e of awarder){
        var ID = "putAwarder" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let awardDate = document.getElementsByClassName("getAwardDate");
    i = 0;
    for(let e of awardDate){
        var ID = "putAwardDate" + i;
        if(e.value == ""){
            document.getElementById(ID).innerHTML = "";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(ID).innerHTML = dateValue;
        }   
        i++;
    }

    let awardDescription = document.getElementsByClassName("getAwardDescription");
    i = 0;
    for(let e of awardDescription){
        var ID = "putAwardDescription" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }






    let certificateTitle = document.getElementsByClassName("getCertificateTitle");
    var i = 0;

    for(let e of certificateTitle){
        // console.log(e.value);
        var ID = "putCertificateTitle" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }


    let issuer = document.getElementsByClassName("getIssuer");
    i = 0;
    for(let e of issuer){
        var ID = "putIssuer" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let certificateDate = document.getElementsByClassName("getCertificateDate");
    i = 0;
    for(let e of certificateDate){
        var ID = "putCertificateDate" + i;
        if(e.value == ""){
            document.getElementById(ID).innerHTML = "";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(ID).innerHTML = dateValue;
        }     
        i++;
    }





    let skill = document.getElementsByClassName("getSkill");
    var i = 0;

    for(let e of skill){
        // console.log(e.value);
        var ID = "putSkill" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let level = document.getElementsByClassName("getLevel");
    var i = 0;

    for(let e of level){
        // console.log(e.value);
        var ID = "putLevel" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }






    let language = document.getElementsByClassName("getLanguage");
    var i = 0;

    for(let e of language){
        // console.log(e.value);
        var ID = "putLanguage" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let fluency = document.getElementsByClassName("getFluency");
    var i = 0;

    for(let e of fluency){
        // console.log(e.value);
        var ID = "putFluency" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }




    let hobby = document.getElementsByClassName("getHobby");
    var i = 0;

    for(let e of hobby){
        var ID = "putHobby" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    
    destructor();
    
    document.getElementById("resume-layout").style.display = "block";
    document.getElementById("form-layout").style.display = "none";

}


function back(){
    document.getElementById("resume-layout").style.display = "none";
    document.getElementById("form-layout").style.display = "block";
}


function destructor(){

    var checkField = document.getElementsByClassName("isEmpty");
    var i = 0;

    for(let e of checkField){
        var elem;
        elem = document.getElementsByClassName('fieldBlock')[i];
        if(e.innerText == ""){
            elem.style.display = "none";
        } else {
            elem.style.display = "block";
            // console.log("Kept", i);
        }
        i++;
    }


    var checkOptionals = document.getElementsByClassName("firstField");
    var i = 0;
    for(let e of checkOptionals){
        var elem;
        elem = document.getElementsByClassName('optional')[i];
        if(e.innerHTML == ""){
            elem.style.display = "none";
        } else {
            elem.style.display = "block";
            // console.log("Kept", i);
        }
        i++;
    }
}