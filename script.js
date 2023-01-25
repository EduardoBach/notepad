var dw = document.getElementById("dow")

dw.addEventListener("click", download)


var fileName = document.getElementById("txtHeader")
var fileContent = document.getElementById("txtContent")

fileName.value = ""
fileContent.value = ""

function download(){
    if(fileName.value === "" || fileContent.value === "")
        window.alert("Please enter file name and contend")
        else{
            var e = fileContent.value;
            var c = document.createElement("a");
            c.download = fileName.value + ".txt";
            var t = new Blob([e],{
                type: "text/plain"
            });
            c.href = window.URL.createObjectURL(t)
            c.click();
        }
}


