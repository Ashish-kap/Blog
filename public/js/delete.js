const deleteBlogg = async(id)=>{
    try{
        const res = await axios({
        method:'DELETE',
        url:`http://localhost:3000/delete-blog/${id}`,
        data:null
    })
    }catch(err){
        console.log(err.response.data)
    }
}


document.querySelector('.form-update').addEventListener('submit',e=>{
    e.preventDefault();
    const id = document.getElementById('delete').value
    updateBlogg(id);
})