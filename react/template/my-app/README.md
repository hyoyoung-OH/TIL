## State and LifeCycle

### State : 리액트 컴포넌트의 상태 = 데이터

- 컴포넌트에 대한 변경 가능한 데이터
- state는 사용자가 정의한다.
- 렌더링할 때 또는 데이터 흐름에 사용되는 값들만 state로 지정
- state는 javaScript의 객체임

```javascript
class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }
}
```

- state는 직접 수정할 수 없고 하면 안됨
- setState로만 수정해야함

```javascript
render() {
    if(this.state.liked){
        return 'You liked this.';
    }

    return e(
        'button',
        {onClick: ()=> this.setState({ liked:true})},
        'Like'
    );
}
```

### LifeCycle: react component의 생명주기
