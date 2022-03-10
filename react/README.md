1. State

- 컴포넌트 안에서 정의한 컴포넌트의 state 오브젝트.
- 컴포넌트 UI를 위한 데이터를 보관하는 오브젝트로, 이 state라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리액트가 자동적으로 내가 구현한 reder 함수를 호출.
- 즉, 컴포넌트 내부에서 바뀔 수 있는 값을 의미
  - 클래스형 컴포넌트가 지니는 state
  - 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state

2. Props

- 컴포넌트 밖에서 주어지는 데이터
- 컴포넌트 안에서 자체적으로 데이터를 저으이해서 사용하는 state와는 다르게, props는 컴포넌트 외부에서 데이터를 제공받는다. 가장 근본적인 이유는 컴포넌트의 재사용을 높이기 위함. 상황에 맞게 주어진 데이터를 받아서 그 데이터에 맞게 UI를 보여주기 위해서 사용됨

```JSX
<LikeButton title={'Like'} onClick={this.handleClick} />
```

- 위 코드에서 LikeButton 컴포넌트를 사용할 때 title, onClick 등 을 인자로 전달해주면 이것들이 props 오브젝트로 묶여서 LikeButton 컴포넌트에 전달됨. 그래서 LikeButton 안에서 this.props.title, this.props.onClick으로 각각 전달된 'Like'와 'this.handleClick'함수에 접근할 수 있다.

```JSX
class App extends Component {
    handleClick = event => {
        console.log(event);
    };

    render() {
        return <LikeButton title={'Like'} onClick={this.handleClick} />;
    }
}
```

App 부모 컴포넌트에서 LikeButton 컴포넌트에 title과 onClick을 인자로 전달해주면

```JSX
class LikeButton extends Component {
    state = {
        numberOfLikes: 0,
    };
    render() {
        console.log(this.props);
        console.log(this.state);
        return <buttons>{this.state.numberOfLikes}</buttons>;
    }
}
```

전달된 인자들이 오브젝트로 묶여져서 LikeButton컴포넌트 안에서 this.props으로 할당됨
