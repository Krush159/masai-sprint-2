//On clicking the Submit button

var rolln = document.getElementById("roll4").value
console.log(rolln)
function addData(e){
    var examtype = document.getElementById("exam4").value
    var gradetype = document.getElementById("grade4").value
    var sectype = document.getElementById("sec4").value
    var rolln = document.getElementById("roll4").value
    var studentn =document.getElementById("name4").value
    var engn = document.getElementById("eng4").value
    var matn = document.getElementById("mat4").value
    var scin = document.getElementById("sci4").value
    var sstn = document.getElementById("sst4").value
    var miln = document.getElementById("mil4").value
    
    var tblBody = document.getElementById("tbl")
    
        var row =document.createElement("tr")
        
        var cell1 = document.createElement("td");
        cell1.innerHTML = rolln
        row.appendChild(cell1)
        var cell2 = document.createElement("td");
        cell2.innerHTML = studentn
        row.appendChild(cell2)
        var cell3 = document.createElement("td");
        cell3.innerHTML = engn
        row.appendChild(cell3)
        var cell4 = document.createElement("td");
        cell4.innerHTML = matn
        row.appendChild(cell4)
        var cell5= document.createElement("td");
        cell5.innerHTML = scin
        row.appendChild(cell5)
        var cell6 = document.createElement("td");
        cell6.innerHTML = sstn
        row.appendChild(cell6)
        var cell7 = document.createElement("td");
        cell7.innerHTML = miln
        row.appendChild(cell7)
            
        // tbl.setAttribute("border", "1")
        
        tblBody.appendChild(row)
    

}
function rstData(){
    document.getElementById("exam4").value = ""
    document.getElementById("grade4").value = ""
    document.getElementById("sec4").value = ""
    document.getElementById("roll4").value = ""
    document.getElementById("name4").value = ""
    document.getElementById("eng4").value = ""
    document.getElementById("mat4").value = ""
    document.getElementById("sci4").value = ""
    document.getElementById("sst4").value = ""
    document.getElementById("mil4").value = ""  
}