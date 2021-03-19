var $btn1=document.getElementById("first");
var $btn2=document.getElementById("second");
$btn1.addEventListener("click",myfun1);
$btn2.addEventListener("click",myfun2);
function myfun1(){
    var $res1=document.getElementById("result_1");
    $res1.innerHTML="";
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response=>{
        console.log(response)
        $res1.innerHTML=getResult(response)
    }).catch(error=>{
        $res1.innerHTML=getError(error)
    })
}

function myfun2(event){
    var $res2=document.getElementById("result_2");
    var val=document.forms["fom"]["para"].value;
    console.log(val)
    $res2.innerHTML="";
    axios.get(`https://jsonplaceholder.typicode.com/todos/${val}`)
    .then(response=>{
        $res2.innerHTML=getResult(response)
    }).catch(error=>{
        $res2.innerHTML=getError(error)
    })
    event.preventDefault()
}

document.getElementById("forms").addEventListener("submit",myfun3);
function myfun3(event){
    var para=document.forms["forms"]["params"].value;
    console.log(para)
    var $res3=document.getElementById("result_3");
    $res3.innerHTML="";
    axios.post("https://jsonplaceholder.typicode.com/todos",{
        title:para,
        completed:true
        
    })
    .then(response=>{
        console.log(response)
        $res3.innerHTML=getResult(response)
    }).catch(error=>{
        $res3.innerHTML=getError(error)
    })
    event.preventDefault()
}


function getResult(response){
    return "<h4>Result</h4>"+
    "<h5>Status:</h5>"+
    "<pre>" +response.status +" "+response.statusText +"</pre>"+
    "<h5>Headers:</h5>"+
    "<pre>"+JSON.stringify(response.headers,null,"\t")+"<pre>"+
    "<h5>Data:</h5>"+
    "<pre>"+JSON.stringify(response.data,null,"\t")+"<pre>"
}

function getError(error){
    return "<h4>Result</h4>"+
    "<h5>Message:</h5>"+
    "<pre>"+error.message+"<pre>"+
    "<h5>Status:</h5>"+
    "<pre>" +error.response.status +" "+error.response.statusText +"</pre>"+
    "<h5>Headers:</h5>"+
    "<pre>"+JSON.stringify(error.response.headers,null,"\t")+"<pre>"+
    "<h5>Data:</h5>"+
    "<pre>"+JSON.stringify(error.response.data,null,"\t")+"<pre>"
}
