# Controller 
## 파드의 갯수를 보장해주는 역할

## Controller 종류
### 1. Replication Controller
- 요구하는 Pod의 개수를 보장하며 파드 집합의 실행을 항상 안정적으로 유지하는 것을 목표
    - 요구하는 Pod의 개수가 부족하면 template을 이용해 Pod를 추가
    - 요구하는 Pod 수 보다 많으면 최근에 생성된 Pod를 삭제
- 기본 구성
    - selector
    - replicas
    - template
### 2. Replicaset
- ReplicationController와 같은 역할을 하는 컨트롤러
- 그러나 보다 더 풍부한 selector
```yaml
selector:
  matchLabels:
   component: redis
  matchExpressions:
    - {key:tier, operator: In, valuesL [cache]}
    - {key: environment, operator: Notln, values: [dev]}
```
- matchExpresstions 연산자
    - In: key와 values를 지정하여 key, value가 일치하는 Pod만 연결
    - Notln: key는 일치하고 value는 일치하지 않는 Pod에 연결
    - Exists: key에 맞는 label의 pod를 연결
    - DoesNotExist: key와 다른 label의 pod를 연결
### 1. Replicaset
### 1. Replicaset
### 1. Replicaset
### 1. Replicaset




