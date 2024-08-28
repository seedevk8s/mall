import React from 'react';    //React를 불러옵니다.
import { Link } from 'react-router-dom';

function AboutPage(props) {   //AboutPage는 함수형 컴포넌트로, props라는 인자를 받습니다. 
  return (                    //현재 코드에서는 props를 사용하고 있지 않지만, 이는 컴포넌트에 전달되는 속성을 처리할 수 있는 방법을 제공함
    <div className={'text-3xl'}>  

      <div>
        <Link to={'/about'}>About</Link>
      </div>

      <h1>About Page</h1>
    </div>
  );
}             //컴포넌트의 반환값은 JSX입니다. JSX는 JavaScript를 확장한 문법으로 React에서 UI를 표현하는 데 사용됨.

export default AboutPage;     //AboutPage 컴포넌트를 기본값으로 내보내고 있음.