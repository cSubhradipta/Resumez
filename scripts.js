var monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var sections = ["skill", "language", "hobby", "education", "experience", "publication", "project", "certification", "achievement"];
$(document).ready(function(){
    cache = document.getElementById("resume_content").innerHTML;
    $("#col-1,#col-2").sortable({
        connectWith: "#col-1,#col-2",
        delay: 300
    });

    $(".resume_contact_details, .skill_container, .achievement_container, .language_container, .hobby_container, .education_container, .experience_container, .publication_container, .project_container, .certification_container").sortable({
        delay: 300
    });
});

var beginPart = `<div class="form-row mb-4">` 
var endPart = `</div>`;

function contactReset(){   
    
    var $wrap = $(".resume_contact_details");
    $wrap.find(".contact_block").sort(function(a, b) 
    {
        return + a.getAttribute('data-reference') - 
        +b.getAttribute('data-reference');
    })
    .appendTo($wrap);
}

function internalReset(n){   
    var x = "." + n + "_container";
    var y = "." + n + "_block";
    var $wrap = $(x);
    $wrap.find(y).sort(function(a, b) 
    {
        return + a.getAttribute('data-reference') - 
        +b.getAttribute('data-reference');
    })
    .appendTo($wrap);
}

function externalReset(){
    var $wrap1 = $('.resume_col_1');
    var $wrap2 = $('.resume_col_2');
    
    $wrap2.find('.res_col_1').sort(function(a, b) 
    {
        return + a.getAttribute('data-reference') - 
        +b.getAttribute('data-reference');
    })
    .appendTo($wrap1);

    $wrap1.find('.res_col_1').sort(function(a, b) 
    {
        return + a.getAttribute('data-reference') - 
        +b.getAttribute('data-reference');
    })
    .appendTo($wrap1);

    $wrap1.find('.res_col_2').sort(function(a, b) 
    {
        return + a.getAttribute('data-reference') - 
        +b.getAttribute('data-reference');
    })
    .appendTo($wrap2);

    $wrap2.find('.res_col_2').sort(function(a, b) 
    {
        return + a.getAttribute('data-reference') - 
        +b.getAttribute('data-reference');
    })
    .appendTo($wrap2);
}

function masterReset(){
    contactReset();   
    externalReset();
    for (let index = 0; index < sections.length; index++) {
        internalReset(sections[index]);
    }
}

function changeColor(x){
    let clr = document.getElementById("getColor");
    document.documentElement.style.setProperty('--title-color', x);
    clr.value = x;
}

function changeFont(x){
    x = "'" + x + "'";
    document.documentElement.style.setProperty('--font-family', x);
}

document.addEventListener('contextmenu', event => event.preventDefault());



function view(x){
    var leftNav = document.getElementById('left-navbar');
    var leftComp = document.getElementById('left-component');
    var rightComp = document.getElementById('myresume');

    if (x == "preview") {
        leftNav.style.display = "none";
        leftComp.style.display = "none";
        rightComp.style.display = "block";
    }   else {
        leftNav.style.display = "flex";
        leftComp.style.display = "block";
        rightComp.style.display = "none";
    }
}

function dateFormatting(dt){
    var newDate = new Date(dt);
    var monIndex = newDate.getMonth();
    var mon = monthAbbr[monIndex];
    var yr = newDate.getFullYear();
    var formattedDate = mon + " " + yr;
    return formattedDate;
}

function linkFormatting(link){
    var str = link;
    var str_inm1 = str.replace("https://", "");
    var str_inm2 = str_inm1.replace("http://", "");
    var str_final = str_inm2.replace("www.", "");
    return str_final;
}

function activeLayout(x){
    let form_layout = document.getElementById("form-layout");
    let style_layout = document.getElementById("style-layout");
    let reset_layout = document.getElementById("reset-layout");

    if(x == "form-layout"){
        form_layout.style.display = "block";
        style_layout.style.display = "none";
        reset_layout.style.display = "none";
    }  else if (x == "style-layout") {
        form_layout.style.display = "none";
        style_layout.style.display = "block";
        reset_layout.style.display = "none";
    }  else {
        form_layout.style.display = "none";
        style_layout.style.display = "none";
        reset_layout.style.display = "block";
    }
}

function destructor(name, block, sect){
    var flag = 0;
    var i = 0;
    let nm = document.getElementsByClassName(name);
    let bl = document.getElementsByClassName(block);
    for(let e of nm){
        if(e.innerHTML == ""){
            e.style.display = "none";
            bl[i].style.margin = 0;
        } else {
            e.style.display = "block";
            bl[i].style.margin = "0.5rem 0";
            flag = 1;
        }
        i++;
    }
    var cn = document.getElementById(sect);
    cn.style.display = (flag == 0 ? "none" : "block");
}

var skillCount = 1;
var eduCount = 1;
var expCount = 1;
var pubCount = 1;
var projCount = 1;
var certCount = 1;
var awardCount = 1;
var langCount = 1;
var hobbyCount = 1;

function skillNewField(){
    var newNode = document.getElementById("skill-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;
    var h = document.getElementById("skillAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);
    skillCount++;
    if (skillCount == 12){
        var btn = document.getElementById("skillBtn");
        btn.setAttribute("disabled", true);  
    }
}

function eduNewField(){
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

function publicationNewField(){
    var newNode = document.getElementById("publication-row").children[1].innerHTML; 
    var content = beginPart + newNode + endPart;
    var h = document.getElementById("publicationAddBtn");
    h.insertAdjacentHTML("beforeBegin", content);
    pubCount++;
    if (pubCount == 5){
        var btn = document.getElementById("pubBtn");
        btn.setAttribute("disabled", true);  
    }
}

function projectNewField(){
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

$(document).ready( setInterval( function(){
    
    var leftNav = document.getElementById('left-navbar');
    var leftComp = document.getElementById('left-component');
    var rightComp = document.getElementById('myresume');
    
    if(window.innerWidth >= 768){
        leftNav.style.display = "flex";
        leftComp.style.display = "block";
        rightComp.style.display = "block";
    } 

    let name = document.getElementById("getName").value;
    document.getElementById("putName").innerText = name;
    document.getElementById("myTitle").innerText = name;    

    if ( name == ""){
        document.getElementById("myTitle").innerText = "Resumez";
    }

    let role = document.getElementById("getRole").value;
    document.getElementById("putRole").innerText = role;

    let currOrg = document.getElementById("getCurrOrg").value;
    document.getElementById("putCurrOrg").innerText = currOrg;

    let address = document.getElementById("getAddress").value;
    let city = document.getElementById("getCity").value;
    let pin = document.getElementById("getPin").value;
    let state = document.getElementById("getState").value;
    let country = document.getElementById("getCountry").value;

    if (city != ""){
        city = ", " + city;
    }
    if (pin != ""){
        pin = " - " + pin;
    }
    if (country != ""){
        if(state != ""){
            country = " - " + country;
        }
    }

    var fullAddress = address + city + pin + "\n" + state + country;
    document.getElementById("putAddress").innerText = fullAddress;

    let contact = document.getElementById("getContact").value;
    var contact_link = document.getElementById("putContact");
    contact_link.innerHTML = contact;
    contact_link.setAttribute("href", "tel:" + contact);

    let email = document.getElementById("getEmailID").value;
    var email_link = document.getElementById("putEmailID");
    email_link.innerHTML = email;
    email_link.setAttribute("href", "mailto:" + email);

    let website = document.getElementById("getWebsite").value;
    var website_view = linkFormatting(website);
    var website_link = document.getElementById("putWebsite");
    website_link.innerHTML = website_view;
    website_link.setAttribute("href", website);

    let github = document.getElementById("getGithub").value;
    var github_view = linkFormatting(github);
    var github_link = document.getElementById("putGithub");
    github_link.innerHTML = github_view;
    github_link.setAttribute("href", github);

    let linkedIn = document.getElementById("getLinkedIn").value;
    var linkedIn_view = linkFormatting(linkedIn);
    var linkedIn_link = document.getElementById("putLinkedIn");
    linkedIn_link.innerHTML = linkedIn_view;
    linkedIn_link.setAttribute("href", linkedIn);

    let objective = document.getElementById("getObjective").value;
    document.getElementById("putObjective").innerHTML = objective;

    let institute = document.getElementsByClassName("getInstitute");
    var i = 0;

    for(let e of institute){
        var instituteID = "putInstitute" + i;
        document.getElementById(instituteID).innerHTML = e.value;
        i++;
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

    let percentage = document.getElementsByClassName("getPercentage");
    i = 0;
    for(let e of percentage){
        var percentageID = "putPercentage" + i;  
        document.getElementById(percentageID).innerHTML = e.value;
        i++;
    }

    let courseEndDate = document.getElementsByClassName("getCourseEndDate");
    i = 0;
    for(let e of courseEndDate){
        var eDateID = "putCourseEndDate" + i;
        var institutec = "getInstitute";
        var coursec = "getCourse";
        var streamc = "getStream";
        var startc = "getCourseStartDate";
        var percentagec = "getPercentage";
        var input1 = document.getElementsByClassName(institutec)[i].value;
        var input2 = document.getElementsByClassName(coursec)[i].value;
        var input3 = document.getElementsByClassName(streamc)[i].value;
        var input4 = document.getElementsByClassName(startc)[i].value;
        var input5 = document.getElementsByClassName(percentagec)[i].value;
        if(e.value != ""){
            var dateValue = dateFormatting(e.value);
            document.getElementById(eDateID).innerHTML = dateValue;
        } else if(input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
            document.getElementById(eDateID).innerHTML = "";
        } else if(e.value == "" && (input1 != "" || input2 != "" || input3 != "" || input4 != "" || input5 != "")){
            document.getElementById(eDateID).innerHTML = "Present";
        } 
        i++;
    }

    let expOrganization = document.getElementsByClassName("getExpOrganization");
    var i = 0;

    for(let e of expOrganization){
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
        var orgc = "getExpOrganization";
        var rolec = "getExpRole";
        var startc = "getExpStartDate";
        var input1 = document.getElementsByClassName(orgc)[i].value;
        var input2 = document.getElementsByClassName(rolec)[i].value;
        var input3 = document.getElementsByClassName(startc)[i].value;
        if(e.value != ""){
            var dateValue = dateFormatting(e.value);
            document.getElementById(ID).innerHTML = dateValue;
        } else if(input1 == "" && input2 == "" && input3 == ""){
            document.getElementById(ID).innerHTML = "";
        } else if(e.value == "" && (input1 != "" || input2 != "" || input3 != "")){
            document.getElementById(ID).innerHTML = "Present";
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

    let pubTitle = document.getElementsByClassName("getPubTitle");
    var i = 0;

    for(let e of pubTitle){
        var ID = "putPubTitle" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let pubLink = document.getElementsByClassName("getPubLink");
    var i = 0;

    for(let e of pubLink){
        var ID = "putPubLink" + i;
        document.getElementById(ID).innerHTML = e.value;
        document.getElementById(ID).setAttribute("href", e.value);
        i++;
    }


    let publisher = document.getElementsByClassName("getPublisher");
    i = 0;
    for(let e of publisher){
        var ID = "putPublisher" + i;
        document.getElementById(ID).innerHTML = e.value;
        
        i++;
    }

    let pubDate = document.getElementsByClassName("getPubDate");
    i = 0;
    for(let e of pubDate){
        var ID = "putPubDate" + i;
        if(e.value == ""){
            document.getElementById(ID).innerHTML = "";
        } else {
            var dateValue = dateFormatting(e.value);
            document.getElementById(ID).innerHTML = dateValue;
        }   
        i++;
    }

    let pubDescription = document.getElementsByClassName("getPubDescription");
    i = 0;
    for(let e of pubDescription){
        var ID = "putPubDescription" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let projectTitle = document.getElementsByClassName("getProjectTitle");
    var i = 0;

    for(let e of projectTitle){
        var ID = "putProjectTitle" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let projectLink = document.getElementsByClassName("getProjectLink");
    var i = 0;

    for(let e of projectLink){
        var ID = "putProjectLink" + i;
        document.getElementById(ID).innerHTML = e.value;
        document.getElementById(ID).setAttribute("href", e.value);
        i++;
    }

    let projectTechnology = document.getElementsByClassName("getProjectTechnology");
    i = 0;
    for(let e of projectTechnology){
        var ID = "putProjectTechnology" + i;
        if(e.value != ""){
            document.getElementById(ID).innerHTML = "Tech stack: " + e.value;
        } else {
            document.getElementById(ID).innerHTML = "";
        }
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

    let certificateTitle = document.getElementsByClassName("getCertificateTitle");
    var i = 0;

    for(let e of certificateTitle){
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
        var ID = "putSkill" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let level = document.getElementsByClassName("getLevel");
    var i = 0;

    for(let e of level){
        var ID = "putLevel" + i;
        var check = "putSkill" + i;
        if( document.getElementById(check).innerHTML == "" || e.value == "Select"){
            document.getElementById(ID).innerHTML = "";
        } else {
            document.getElementById(ID).innerHTML = e.value;
        }
        i++;
    }

    let language = document.getElementsByClassName("getLanguage");
    var i = 0;

    for(let e of language){
        var ID = "putLanguage" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    let fluency = document.getElementsByClassName("getFluency");
    var i = 0;

    for(let e of fluency){
        var ID = "putFluency" + i;
        var check = "putLanguage" + i;
        if(document.getElementById(check).innerHTML == "" || e.value == "Select"){
            document.getElementById(ID).innerHTML = "";
        } else {
            document.getElementById(ID).innerHTML = e.value;
        }
        i++;
    }

    let hobby = document.getElementsByClassName("getHobby");
    var i = 0;

    for(let e of hobby){
        var ID = "putHobby" + i;
        document.getElementById(ID).innerHTML = e.value;
        i++;
    }

    var flagHeader = 0;
    if(name != "" || role != "" || currOrg != ""){
        flagHeader = 1;
    }

    var addressWrapper = document.getElementById("addressWrapper");
    if ( address == "" &&  city == "" &&  pin == "" &&  state == "" &&  country == "" ) {
        addressWrapper.style.display = "none";
    } else {
        addressWrapper.style.display = "block";
        flagHeader = 1;
    }

    let contacts = document.getElementsByClassName("contact_links");
    var contactBlock = document.getElementsByClassName("contact_block");
    var i = 0;
    for(let e of contacts){
        if( e.innerHTML == ""){
            contactBlock[i].style.display = "none";
        } else {
            contactBlock[i].style.display = "block";
            flagHeader = 1;
        }
        i++;
    }

    var head = document.getElementById("resume-head");
    if(flagHeader == 0){   
        head.style.display = "none";
    } else {
        head.style.display = "flex";
    }

    var ruler = document.getElementById("rule");
    ruler.style.display = (flagHeader == 0 ? "none" : "block");

    let abt = document.getElementById("putObjective").innerHTML;
    var abt_block = document.getElementById("resume-objective");
    abt_block.style.display =  (abt == "" ? "none" : "block");
    
    for (let index = 0; index < sections.length; index++) {
        var n = sections[index] + "_name";
        var b = sections[index] + "_block";
        var c = "resume-" + sections[index];
        destructor(n, b, c);
    }

    var flagOverall = 0;
    for (let index = 0; index <= sections.length; index++) {        
        if (index < sections.length ){
            var c = "resume-" + sections[index];
            var id = document.getElementById(c);
            if(id.style.display != "none"){
                flagOverall = 1;
            }
        } else {
            if(head.style.display != "none"){
                flagOverall = 1;
            }
            if(abt_block.style.display != "none"){
                flagOverall = 1;
            }
        }
    }

    var temp = document.getElementById("resume-layout");
    var wel = document.getElementById("welcome-screen");
    let printBtn1 = document.getElementById("printBtn1");
    let printBtn2 = document.getElementById("printBtn2");

    if( flagOverall == 0){
        temp.style.display = "none";
        wel.style.display = "flex";
        printBtn1.setAttribute("disabled", true);
        printBtn1.style.cursor = "default";
        printBtn2.setAttribute("disabled", true);
        printBtn2.style.cursor = "default";

    } else {
        temp.style.display = "block";
        wel.style.display = "none";
        printBtn1.removeAttribute("disabled", true);
        printBtn1.style.cursor = "pointer";
        printBtn2.removeAttribute("disabled", true);
        printBtn2.style.cursor = "pointer";
    }

    var el = document.getElementsByClassName("el");
    for (let e of el) {
        if(e.classList.contains("focus")){
            e.classList.remove("focus");
        }
    }

    let clr = document.getElementById("getColor").value;
    if(clr.length == 7){
        changeColor(clr);
    } else if( clr.length == 0){
        document.documentElement.style.setProperty('--title-color', '#2196F3');
    }

    const slider1 = document.getElementById("slider1");
    const slider2 = document.getElementById("slider2");
    const slider3 = document.getElementById("slider3");
    const slider4 = document.getElementById("slider4");
    const root = document.documentElement;

    slider1.addEventListener("input", (e) => {
        root.style.setProperty("--title-font", e.target.value + "rem");
    });

    slider2.addEventListener("input", (e) => {
        root.style.setProperty("--heading-font", e.target.value + "rem");
    });

    slider3.addEventListener("input", (e) => {
        root.style.setProperty("--normal-font", e.target.value + "rem");
    });

    slider4.addEventListener("input", (e) => {
        root.style.setProperty("--small-font", e.target.value + "rem");
    });

}, 100));
