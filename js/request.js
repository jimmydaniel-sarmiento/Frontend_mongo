//const url = "http://localhost:5000/api/" 
const url = "https://backend-mongo-ha44.onrender.com/api/"

// Se coloca está dirección ya que son pruebas locales "http://localhost:5000/api/", en  caso de hacer pruebas con backen en la nube se debe colocar la que nos asigna el render "https://backend-mongo-ha44.onrender.com/api/"

function sendRequest (endPoint, method, data) {
    let request = new XMLHttpRequest();
    request.open(method, url+endPoint);
    request.responseType = "json";
    request.setRequestHeader("Content-Type", "application/json");
    request.send(data ? JSON.stringify(data):data);
    return request
}