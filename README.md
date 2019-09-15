# mockapi
Dockerized express microservice that exposes a simple endpoint and health checks

```
http://localhost:3005/app
http://localhost:9005/ready
http://localhost:9005/live
http://localhost:9005/health
```

```
$: docker build -t mockapi/mockapi .
$: docker run -p 3005:3005 -p 9005:9005 mockapi/mockapi
```