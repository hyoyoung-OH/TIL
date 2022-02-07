## static Pod
- API 서버없이 특정 노드에 있는 kubelet 데몬에 의해 직접 관리
- /etc/kubernetes/manifests/ 디렉토리에 k8s yaml 파일을 저장 시 적용됨
- static pod 디렉토리 구성
```
 # vi /var/lib/kublet/config.yaml
 ...
 staticPodPath: /etc/kubernetes/manifests

 //디렉토리 수정 시 kubelet 데몬 재실행
 # systemctl restart kublet
