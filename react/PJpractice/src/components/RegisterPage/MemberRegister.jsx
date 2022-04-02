import React from 'react';
import { useRef } from 'react';

const MemberRegister = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nicknameInputRef = useRef();
  const phonenumberInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enterEmail = emailInputRef.current.value;
    const enterNickname = nicknameInputRef.current.value;
    const enterPassword = passwordInputRef.current.value;
    const enterPhonenumber = phonenumberInputRef.current.value;

    fetch(
      'https://foodtruckaroundme.gitbook.io/api-reference/user-service/users.join',
      {
        method: 'POST',
        body: JSON.stringify({
          email: enterEmail,
          password: enterPassword,
          nickname: enterNickname,
          phone_number: enterPhonenumber,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      if (res.ok) {
        //...
      } else {
        return res.json().then((data) => {
          //에러창
          console.log(data);
        });
      }
    });
    // TODO.유효성 검증 추가
  };

  return (
    <section>
      <h1>개인 회원가입</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>이메일</label>
        <input type='email' id='email' required ref={emailInputRef} />
        <button>중복확인</button>
        <label htmlFor='nickname'>닉네임</label>
        <input type='nickname' id='nickname' required ref={nicknameInputRef} />
        <button>중복확인</button>
        <label htmlFor='password'>비밀번호</label>
        <input type='password' id='password' required ref={passwordInputRef} />
        <label htmlFor='passwordConfirm'>비밀번호 확인</label>
        <input
          type='password'
          id='passwordConfirm'
          placeholder='비밀번호 확인'
        />
        <label htmlFor='phonenumber'>전화번호</label>
        <input
          type='phonenumber'
          id='phonenumber'
          required
          ref={phonenumberInputRef}
        />
        <button>회원가입</button>
      </form>
    </section>
  );
};

export default MemberRegister;
