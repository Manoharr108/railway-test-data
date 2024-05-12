const name = document.getElementById('name')
const phno = document.getElementById('phno')

const postbtn = document.getElementById("post")
const getbtn = document.getElementById("get")
const url = "http://localhost:3000/node"

async function postInfo(e){
    e.preventDefault()
    const res = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name : name.value,
            phno : phno.value
        })
    })
}

postbtn.addEventListener("click",postInfo)


