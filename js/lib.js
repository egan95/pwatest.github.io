

$(document).ready(function(){

    //pwa
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/pwatest.github.io/serviceW.js')
        .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function(error) {
          console.log('Service worker registration failed, error:', error);
        });
      }
})