export function getToken(){
  return localStorage.getItem('token')
  // alert(123)
   
}
export function setToken(token){
  localStorage.setItem('token',token)
}

export function removeToken(){
  localStorage.removeItem('token')
}
