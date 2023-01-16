var flag=0;
let count=4;
h1_code='<h5 id="abc">Enter an option</h5>';
const table1 = ()=>
{
    /*if(flag==0)
    {
        flag=1;
        var result="<table border=1 id='abc'>";
            result+=`<tr>`;
            result+=`<td>${j}</td>`;
            result+=`<td>${array1[j]}</td>`;
            result+=`</tr>`
            for(let j=0;j<array1.length;j++)
            {
                result+=`<tr>`;
                result+=`<td>${j}</td>`;
                result+=`<td>${array1[j]}</td>`;
                result+=`</tr>`
            }
            
        result+="</table>";
        document.getElementById('abc').innerHTML=result;
    }*/
    
    if(flag==0)
    {
        flag=1;
        var result=`<div class="col-lg-10 customTable">
        <table class="table" id="this">
            <tr>
                <td>University</td>
                <td>Research Name</td>
                <td>Starting Year</td>
                <td>Ending Year</td>
                <td>Grant Provided</td>
                <td>Link</td>
            </tr>
            <tr>
                <td>IIT H</td>
                <td>AI</td>
                <td>2023</td>
                <td>2025</td>
                <td>1000000</td>
                <td><a href="Example.html">IITH-research</a></td>
            </tr>
            <tr>
                <td>IIT B</td>
                <td>Mineral Engineering</td>
                <td>2023</td>
                <td>2026</td>
                <td>1200000</td>
            </tr>
            <tr>
                <td>IIT C</td>
                <td>CSE</td>
                <td>2023</td>
                <td>2026</td>
                <td>4000000</td>
            </tr>
            <tr>
                <td>IIT B</td>
                <td>CSE</td>
                <td>2023</td>
                <td>2024</td>
                <td>250000</td>
            </tr>
        </table>
        <button type="button" class="btn btn-light" id="Add" onclick="AddRow()">Add a row</button>
        <button type="button" class="btn btn-danger" id="Delete" onclick="DeleteRow()">Delete a row</button>`;
        document.getElementById('abc').innerHTML=result;
    }
    else
    {
        flag=0;
        document.getElementById('abc').innerHTML=h1_code;
    }


};

function DisplayTable()
{
    table1();
}

button=document.getElementById('btn');

function AddRow()
{
    let uni=prompt("Enter the university name:");
    let res=prompt("Enter the research name:");
    let start=prompt("Enter the starting year:");
    let end=prompt("Enter the ending year:");
    let grant=prompt("Enter the grant provided:");
    let link=prompt("Enter the link:");


    var table = document.getElementById("this");
    var row = table.insertRow(count);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);


    cell1.innerHTML = uni;
    cell2.innerHTML = res;
    cell3.innerHTML = start;
    cell4.innerHTML = end;
    cell5.innerHTML = grant;
    cell6.innerHTML = link;
    count+=1;
}
function DeleteRow()
{
    document.getElementById("this").deleteRow(count);
    count-=1;
}

function University()
{
    if(flag==0)

    {
        flag=1;
        var result=`<h4>University count</h4>
        <table class='table' id='abc'>
        <tr>
        <td>University/Institute</td>
        <td>Count</td>
        </tr>
        <tr>
        <td>IIT-H</td>
        <td>7</td>
        </tr>
        <tr>
        <td>IIT-B</td>
        <td>4</td>
        </tr>
        <tr>
        <td>IISC-B</td>
        <td>3</td>
        </tr>`;
        document.getElementById('abc').innerHTML=result;
    }
    else
    {
        flag=0;
        var result='<h5 id="abc">Enter an option</h5>';
        document.getElementById('abc').innerHTML=result;
    }
}