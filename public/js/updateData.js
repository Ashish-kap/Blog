// import axios from 'axios';
// export
const updateBlogg = async(name,title,content,id)=>{
    try{
        const res = await axios({
        method:'PATCH',
        url:`http://localhost:3000/update-blog/${id}`,
        data:{
            status:"success",
            name:name,
            title:title,         
            content:content,
            _id:id
        }
    })
    alert('Updated Successfully')
    window.location.replace(`http://localhost:3000/blog/${id}`);
    // if(res.data.status =="success"){
    //     res.render('updateAlert')
        // showAlert("Updated Successfully!");
        // window.setTimeout(()=>{
        //     location.assign(`/blog/${id}`)
        // })
    // }
    }catch(err){
        // res.render("error");
        alert("Something went wrong, try it again! 😂", err)
        // console.log(err.response.data.message)
    }
}


document.querySelector('.form-update').addEventListener('submit',e=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    // const content = document.getElementById('myTextarea').value;
    const content = tinymce.get("myTextarea").getContent({ format: "text" });
    const id = document.getElementById('idf').value
    updateBlogg(name,title,content,id);
})
