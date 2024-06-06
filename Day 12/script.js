function convertToArray() {
    var inputArray = document.getElementById("arrayInput").value.split(",");
    var obj = {};
    Object.assign(obj, inputArray);
    var jsonString = JSON.stringify(obj);
    console.debug(jsonString);
    document.getElementById("result").innerHTML = "<pre>" + jsonString + "</pre>";
}