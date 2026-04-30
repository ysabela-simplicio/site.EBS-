from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    os.chdir(Path(__file__).resolve().parent)
    server = ThreadingHTTPServer(("127.0.0.1", 5500), QuietHandler)
    server.serve_forever()
