// import { createBlogg } from './create';
// import {updateBlogg} from './updateData'

// // DOM ELEMENTS

// const create = document.querySelector('.form');
// const update = document.querySelector('.form-update')

// // DELEGATION
// if(create){
//     create.addEventListener('submit',e=>{
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const title = document.getElementById('title').value;
//     const content = tinymce.get("myTextarea").getContent({ format: "text" });
//     createBlogg(name,title,content);
// })
// }

// if(update){
//     update.addEventListener('submit',e=>{
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const title = document.getElementById('title').value;
//     const content = tinymce.get("myTextarea").getContent({ format: "text" });
//     const id = document.getElementById('idf').value
//     updateBlogg(name,title,content,id);
// })
// }