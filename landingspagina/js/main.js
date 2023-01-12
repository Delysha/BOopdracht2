const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");
console.log("hello");

button.onclick = function(){
    navigation.style.visibility = "visible";
    navigation.style.opacity = 1;
    body.style.overflow = "hidden";
}