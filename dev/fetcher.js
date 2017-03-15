import fetchJsonp from 'fetch-jsonp';

var result = fetchJsonp('http://www.flickr.com/services/feeds/photos_public.gne?format=json', {
    jsonpCallback: 'jsoncallback',
    timeout: 3000
});
result.then(response => {
    return response.json()
}).then(json => {
    document.body.innerHTML = JSON.stringify(json);
}).catch(ex => {
    document.body.innerHTML = 'failed:' + ex;
});