export default function handleResponseFromAPI(promise) {
  
  promise.then((data)=>{return(data)})
  .catch((err)=>{return(new Error())})
  .finally(console.log('Got a response from the API'));
}