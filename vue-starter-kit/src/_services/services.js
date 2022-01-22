import  glovalService  from './global'
function getServices() {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`http://localhost:8000/api/services/`, requestOptions)
  .then(glovalService.handleResponse);
}

export const ServicesService = {
  getServices
};
