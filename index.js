//let videoSourceElement = document.querySelector("#video-source");
var sourceDOM = document.querySelector('source');

function setThemePreference() {
    var d = new Date();
    var currentHour = d.getHours();

    if(currentHour >= 19 || currentHour <= 6){
        return "nightcloud.mp4";
    }else{
        return "bgvideo.mp4";
    }
}

sourceDOM.setAttribute("src", setThemePreference());
console.log(sourceDOM.getAttribute("src"));