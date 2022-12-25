import swal from 'sweetalert';

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
        swal("created Successfully!","success");
        window.setTimeout(()=>{
            location.assign('/')
        })
    }
    }catch(err){
        swal("please fill all the fields...🙏🙏","error",err.response.data.message)
        console.log(err.response.data.message)
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
