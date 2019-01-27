# chat-test
localhost:8090 - rest;
localhost:3000 - frontend;
localhost:6001 - socket.

  Before check this app you need install chrome application to disallow "Access-Control-Allow-Origin" header:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi.
Remove default pattern from app settings and add pattern http://localhost:8090/*. 
  Follow instructions:
1. git clone https://github.com/akimmaksimov85/chat-test.git && cd chat-test
2. docker-compose up -d --build
3. docker-compose exec rest composer install
4. docker-compose exec -d rest php artisan queue:work

Open http://localhost:3000.

