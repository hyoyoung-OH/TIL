## Pod Resource 요청 및 제한
### Resource Requests
- 파드를 실행하기 위한 최소 리소스 양을 요청
### Rssource Limits
- 파드가 사용할 수 있는 최대 리소스 양을 제한
- Memory limit을 초과해서 사용되는 파드는 종료(OOM Kill)되며 다시 스케쥴링된다. 