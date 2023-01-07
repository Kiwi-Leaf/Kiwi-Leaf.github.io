

let currentBrowser = navigator.userAgent;
console.log("enableTransparentVideo.js is running");
console.log("Current browser is:", currentBrowser);
console.log("the statment returns:", ((currentBrowser.match(/chrome|chromium|crios/i)) || (currentBrowser.match(/firefox|fxios/i)) || (currentBrowser.match(/opr\//i)) || (currentBrowser.match(/edg/i))));

if ((currentBrowser.match(/chrome|chromium|crios/i)) || (currentBrowser.match(/firefox|fxios/i)) || (currentBrowser.match(/opr\//i)) || (currentBrowser.match(/edg/i))) {
    console.log("Animations enabled.")
    // let aboutMeVideo = document.querySelector('#about-me-media');
    // let contactMeVideo = document.querySelector();
}
else {
    alert("Some animations are currently disabled.\nFor the best experience, please use Chrome, FireFox, Edge, or Opera.");
}