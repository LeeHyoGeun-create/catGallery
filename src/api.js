const RANDOM_IMG_API_KEY = 'https://api.thecatapi.com/v1/images/search';
const CAT_URL_API_KEY = 'https://api.thecatapi.com/v1/images/';

export const getID = async () =>{
  try{
    const response = await fetch(RANDOM_IMG_API_KEY);

    if(!response.ok){
      throw new Error('네트워크 응답이 올바르지 않습니다' + response.status);
    }
  
    const arr = await response.json();
    return arr[0].id;
  } catch(e){
    throw new Error('fetch에 문제가 있었습니다' + e);
  }
 
}

export const getURL = async (id) =>{
  try{
    const response = await fetch(`${CAT_URL_API_KEY}${id}`);

    if(!response.ok){
      throw new Error('네트워크 응답이 올바르지 않습니다' + response.status);
    }
  
    const obj = await response.json();
    return obj.url;

  } catch(e){
    throw new Error('fetch에 문제가 있었습니다' + e);
  }
 
}