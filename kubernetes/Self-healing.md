# livenessProbe를 이용해 self-healing Pod (kubelet으로 컨테이너 진단하기)
### Pod의 자동 복구 기술을 self-healing이라고 한다. 제대로 작동하지 않는 컨테이너를 다시 시작하거나 교체하여 Pod가 정상적으로 작동하게 한다. 

## Liveness Probe(1)
- Pod가 계속 실행할 수 있음을 보장
- Pod의 spec에 정의
```yaml
# Pod-definition
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx-container
    image: nginx:1.14
```

```yaml
# livenessProbe definirion
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx-container
    image: nginx:1.14
    livenessProbe:
      httpGet:
        path: /
        port: 80
```

## Liveness Probe(2)
### livenessProbe mechanism
- **httpGet** probe: 지정한 IP주소, port, path에 HTTP GET 요청을 보내 해당 컨테이너가 응답하는 지를 확인함. 반환코드가 200이 아닌 값이 나오면 오류로 보고 컨테이너를 다시 시작한다.
```yaml
livenessProve:
  httpGet:
    path: /
    port: 80
```

- **tcpSocket** probe: 지정된 포트에 TCP연결을 시도, 연결되지 않으면 컨테이너를 다시 시작한다. 
```yaml
livenessProbe:
  tcpSocket:
    port: 22
```

- **exec** probe: exec 명령을 전달하고 명령의 종료코드가 0이 아니면 컨테이너를 다시 시작한다.
```yaml
livenessProve:
  exec:
    command:
    - ls
    - /data/file
```
<br>
<hr>
<br>

> ***오늘 알게 된 것***
<br>
cat > filename은 그 다음으로 입력하는 것들을 파일에 넣겠다는 명령어. 그냥 file의 내용을 터미널에서 바로 출력하고 싶다면 > 제외하고 cat filename으로 입력해야함.
