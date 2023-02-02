```
kubectl get pods
kubectl get replicasets
kubectl get services
```

```
kubectl create -f k8s/namespace.yml
```

```
kubectl config set-context --current --namespace=federation
```

```
docker-compose -f docker-compose.prod.yml build auth
docker tag nxsdvlpr/federation_auth:latest localhost:5000/nxsdvlpr/federation_auth:latest
docker push localhost:5000/nxsdvlpr/federation_auth:latest
kubectl delete all -l service=auth
kubectl create -f k8s/auth
```


```
docker-compose -f docker-compose.prod.yml build post
docker tag nxsdvlpr/federation_post:latest localhost:5000/nxsdvlpr/federation_post:latest
docker push localhost:5000/nxsdvlpr/federation_post:latest
kubectl delete all -l service=post
kubectl create -f k8s/post
```

```
docker-compose -f docker-compose.prod.yml build catalog
docker tag nxsdvlpr/federation_catalog:latest localhost:5000/nxsdvlpr/federation_catalog:latest
docker push localhost:5000/nxsdvlpr/federation_catalog:latest
kubectl delete all -l service=catalog
kubectl create -f k8s/catalog
```

```
docker-compose -f docker-compose.prod.yml build base
docker tag nxsdvlpr/federation_base:latest localhost:5000/nxsdvlpr/federation_base:latest
docker push localhost:5000/nxsdvlpr/federation_base:latest
kubectl delete all -l service=base
kubectl create -f k8s/base
```

```
docker-compose -f docker-compose.prod.yml build gateway
docker tag nxsdvlpr/federation_gateway:latest localhost:5000/nxsdvlpr/federation_gateway:latest
docker push localhost:5000/nxsdvlpr/federation_gateway:latest
kubectl delete all -l service=gateway
kubectl create -f k8s/gateway
```


```
docker-compose -f docker-compose.prod.yml build nginx
docker tag nxsdvlpr/federation_nginx:latest localhost:5000/nxsdvlpr/federation_nginx:latest
docker push localhost:5000/nxsdvlpr/federation_nginx:latest
kubectl delete all -l service=nginx
kubectl create -f k8s/nginx
```

```
kubectl get pods
```