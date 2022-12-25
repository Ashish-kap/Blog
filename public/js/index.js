const createBlogg = async(name,title,content)=>{
    try{
        const res = await axios({
        method:'POST',
        url:"http://localhost:3000/upload",
        data:{
            name:name,
            title:title,         
            content:content
        },
    })
    if(res.data.status =="success"){
        window.alert("created Successfully!");
        window.setTimeout(()=>{
            location.assign('/')
        })
    }
    }catch(err){
        window.alert("please fill all the fields...🙏🙏",err.response.data.message)
    }
}

document.querySelector('.form').addEventListener('submit',e=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    // const content = document.getElementById('textarea').value;
    // var content = content1.getContent({ format: "text" });
    const content = tinymce.get("myTextarea").getContent({ format: "text" });
    createBlogg(name,title,content);
})
