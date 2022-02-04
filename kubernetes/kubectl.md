
### kubectl이란
#### : 쿠버네티스에게 원하는 것을 요청하는 명령어
<br>

 **kubectl 명령어 기본구조**

```kubectl [command] [TYPE] [NAME] [flags]```

*명령어 사이에는 모두 한 칸씩 띄운다.*
<br>
*대괄호 안에 쓴 것들은 생략 가능하다는 뜻*
* command : 자원(object)에 실행할 명령 ex. create. get, delete, edit...
* TYPE: 자원의 타입 ex. node, pod, service
* NAME : 자원의 이름 
* flags: 부가적으로 설정할 옵션 ex. --help, -o options
<br>

**예시**

```kubectl get pod webserver -o wide```

'쿠버네티스애 webserver라는 이름을 가진 pod의 정보를 자세하게 보여줘'라는 의미



