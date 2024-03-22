const tabs = document.querySelectorAll('ul[role="tablist"]a');
var tabpanel;
console.log(tabs);

tabcontent = document.getElementsByClassName("tabpanel")
for(i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
}

tabs = document.getElementsByClassName("tabs");
for(i = 0; i< tabs.length; i++){
    tablinks[i].classname = tabs[i].classname.replace("active", "");

}

DocumentTimeline.getElementsById(tab).style.display = "block";
EventTarget.currentTarget.className += "active";

