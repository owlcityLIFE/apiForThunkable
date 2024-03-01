function unixToDateTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);

    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
}

function handleRequest(timestamp) {
    const response = unixToDateTime(timestamp);

    return new Response(JSON.stringify(response), {
        headers: {
            'content-type': 'application/json'
        }
    });
}

addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const timestamp = url.searchParams.get('unix');

    if (timestamp) {
        const response = handleRequest(parseInt(timestamp));
        event.respondWith(response);
    } else {
        event.respondWith(new Response('Invalid request', { status: 400 }));
    }
});