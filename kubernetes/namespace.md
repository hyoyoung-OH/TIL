## namespace란 무엇인가?
- k8s API 종류 중 하나
- 쿠버네티스 클러스터에서 사용되는 리소스들을 구분해 관리하는 그룹이다. 
    - 클러스터 하나를 여러 개의 논리적인 단위로 나눠서 사용: *API를 여러개인 것 처럼 사용하는 것*
    - 쿠버네티스 클러스터 하나를 여러 팀이나 사용자가 함꼐 공유
    - 용도에 따라 실행해야하는 앱을 구분할 때 사용

*장점: 수 많은 동작 중인 파드 중에서 원하는 네임스페이스의 파드들만 따로 관리하기 편함*
<br>
<br>


## namespace 생성하기
### 1. Use CLI 

``` 
$ kubectl create namespace good
$ kubectl get namespaces
```
![cli이용](./imgs/네임스페이스생성-CLI이용.png)

### 2. Use yaml

``` 
$ kubectl create namespace best --dry-run -o yaml>best-ns.yaml 
// --dry-run: 실제로 실행하지 않고 실행 가능 여부만 확인
// -o yaml: 실행결과를 yaml 파일로 출력 
$ vi best-ns.yaml
$ kubectl create -f best-ns.yaml
```
![yaml이용1](./imgs/네임스페이스생성-yaml이용.png)
![2](./imgs/네임스페이스생성확인yaml.png)
![3](./imgs/namespace-yaml수정.png)
![4](./imgs/네임스페이스생성-yaml이용2.png)
![최종](./imgs/네임스페이스생성전체확인.png)

## Base namespace switch
### 기본으로 사용하는 namespace를 default가 아닌 다른 이름의 namespace로 switch

<br>

1. namespace를 포함한 context를 등록

``` 
$ kubectl config --help //도움말 확인
$ kubectl config set-context NAME --cluster=kubernetes...
$ kubectl config view
```
![switch1](./imgs/namespace-switch-context생성.png)

2. 등록된 namespace로 context 변경

``` 
$ kubectl config use-context NAME
```
![switch2](./imgs/namespace-switch-완료.png)
