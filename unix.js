// Convert Unix timestamp to datetime object
function unixToDateTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(), 
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
}

// Handle requests
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {

  // Get timestamp from URL query parameter 
  const url = new URL(request.url);
  const timestamp = url.searchParams.get('timestamp');

  // Return response
  const response = unixToDateTime(timestamp);  
  return new Response(JSON.stringify(response), {
    headers: {
      'content-type': 'application/json'
    }
  });

}
