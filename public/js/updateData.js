import axios from 'axios';
import { showAlert } from './alerts';
export const updateBlogg = async(name,title,content,id)=>{
    try{
        const res = await axios({
        method:'PATCH',
        url:`http://localhost:3000/update-blog/${id}`,
        data:{
            name:name,
            title:title,         
            content:content
        }
    })
    if(res.data.status =="success"){
        showAlert("Updated Successfully!");
        window.setTimeout(()=>{
            location.assign(`/blog/${id}`)
        })
    }
    }catch(err){
        showAlert(err.response.data.message)
    }
}


// document.querySelector('.form-update').addEventListener('submit',e=>{
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const title = document.getElementById('title').value;
//     // const content = document.getElementById('myTextarea').value;
//     const content = tinymce.get("myTextarea").getContent({ format: "text" });
//     const id = document.getElementById('idf').value
//     updateBlogg(name,title,content,id);
// })
