window.addEventListener('DOMContentLoaded', function() {
    var dw = document.getElementById("dow");
    dw.addEventListener("click", download);
    
    var fileName = document.getElementById("txtHeader");
    var fileContent = document.getElementById("txtContent");
    var feedbackMessage = document.getElementById("feedbackMessage");

    fileName.value = "";
    fileContent.value = "";

    function download() {
        if (fileName.value === "" || fileContent.value === "") {
            window.alert("Please enter file name and content.");
        } else {
            var content = fileContent.value;
            var anchorElement = document.createElement("a");
            anchorElement.download = fileName.value + ".txt";
            var blob = new Blob([content], { type: "text/plain" });

            if (window.navigator.msSaveOrOpenBlob) {
                // For IE and Edge
                window.navigator.msSaveOrOpenBlob(blob, anchorElement.download);
            } else {
                // For other browsers
                anchorElement.href = window.URL.createObjectURL(blob);
                anchorElement.click();
            }

            // Exibir feedback visual
            feedbackMessage.textContent = "Download completed successfully.";

            // Limpar campos após o download
            fileName.value = "";
            fileContent.value = "";
        }
    }
});



