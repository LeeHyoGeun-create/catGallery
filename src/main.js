import {getID, getURL} from './api.js';

// 레이아웃은 정해져 있고 .
// url을 받아와서 src에 넣어줌.
// 버튼을 누르면 다시 url을 받아와서 src에 넣어줌
const imges = document.querySelectorAll('img');
const button = document.querySelector('.reset');
console.log(imges, typeof imges);

async function addURL(){
    const urls = await getURLs();
    for(let i = 0; i < 9; i++){
        imges[i].setAttribute('src',urls[i]);
    }
};

button.addEventListener('click', ()=>{
    addURL();
})

async function getURLs () {
    try{
        const urls = [];
        for(let i = 0 ; i < 9; i++){
            const id = await getID();
            const url = await getURL(id);
            urls.push(url);
        }
        return urls;
    } catch(e){
        console.log(e);
    }
}

addURL();



// class CatPhoto{
//     constructor(){
//         this.makePhoto();
//     }

//     makePhoto(){
//         this.body = document.querySelector('body');
//         const img = document.createElement('img');
//         this.setInfo(img,RANDOM_IMG_API_KEY);
//         this.body.append(img);
//         img.setAttribute('alt','cat');
//     }

//     getID(url){
//         return fetch(url).then(responce => responce.json()).then(value => {
//             console.log(value);
//             return value[0].id;});
//     }

//     setInfo(tag,url){
//         this.getID(url)
//         .then(value => fetch(`${CAT_INFO_API_KEY}${value}`))
//         .then(response => response.json())
//         .then(value => this.inputURL(tag, value.url));     
//     }

//     inputURL(tag ,url){
//         tag.setAttribute('src',url);
//     }