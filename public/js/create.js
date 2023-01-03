// import axios from 'axios';
// export
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

    alert('Created Successfully')
    window.location.replace('/');
    // if(res.data.status =="success"){
        // res.render('createAlert')
        // alert("created Successfully!");
        // window.setTimeout(()=>{
        //     location.assign('/')
        // })
    // } 
    }catch(err){
        // res.render("error");
        alert("Please fill all the fields..😂")
        console.log(err.response.data.message)
    }
}

document.querySelector('.form').addEventListener('submit',e=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    // const content = document.getElementById('myTextarea').value;
    // var content = content.getContent({ format: "text" });
    var content = tinymce.get("myTextarea").getContent({ format: "text" });
    createBlogg(name,title,content);
})
