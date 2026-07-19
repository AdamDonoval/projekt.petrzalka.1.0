# Dev server pre Petrzalka sportuje.
# Rovnaky ako python3 -m http.server, ale posiela Cache-Control: no-store,
# takze prehliadac nikdy nedrzi staru verziu HTML/CSS/JS v cache.
import http.server
import os

PORT = 8765


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()


if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = http.server.ThreadingHTTPServer(('', PORT), NoCacheHandler)
    print(f'Serving on http://localhost:{PORT} (no-cache)')
    server.serve_forever()
