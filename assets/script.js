document.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        startSearch();
    }
});
function clock(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    if(m < 10){
        m = "0" + m;
    }
    var timestring = h + ":" + m;
    document.getElementById("time").innerHTML = timestring;
}
function startSearch(){
    let query = document.getElementById("search").value;
    window.location.replace("https://duckduckgo.com/?q=" + query);
}