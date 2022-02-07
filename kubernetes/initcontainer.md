## init container를 적용한 Pod
*메인 컨테이너를 실행하는 데 필요한 환경세팅(초기화 구성)을 지원해주는 컨테이너*
> init container를 담고 있는 Pod에서는 init container가 성공해야 main container를 구동시킨다.

- 앱(메인) 컨테이너 실행 전에 미리 동작시킬 컨테이너
- 본 Container가 실행되기 전에 사전 작업이 필요한 경우 사용

##### 관련 src
##### - [init-container-exam.yaml](./src/init-container-exam.yaml)
##### - [init-container-exam-svc.yaml](./src/init-container-exam-svc.yaml)