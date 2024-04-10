const handleProtectedRoute = ((req, res) => {
    // Get the session ID from the cookie
    const cookie = req.headers.cookie;

    if (cookie && cookie.startsWith('sessionId=')) {
        const sessionId = cookie.split('=')[1];

        if (sessions[sessionId]) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the protected route!');
        } else {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.end('Unauthorized access');
        }
    } else {
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end('Unauthorized access');
    }
});

export { handleProtectedRoute };