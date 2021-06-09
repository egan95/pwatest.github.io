

$(document).ready(function(){

    //pwa
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../serviceW.js')
        .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function(error) {
          console.log('Service worker registration failed, error:', error);
        });
      }
})