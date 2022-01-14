# REACT + TYPESCRIPT

## How to start
CRA Typescript template

```
yarn create react-app . --template typescript
```

Eslint+ Prettier

```
npm i -D eslint prettier
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i -D eslint-config-airbnb
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D eslint-plugin-react eslint-plugin-react-hooks
npm i -D eslint-plugin-jsx-a11y eslint-plugin-import
```
- eslint : 코드의 문법 검사를 하며, rules속성에 prettier를 추가하여 동시에 사용할 수 있다.
- prettier : 코드의 스타일을 잡아주는 포맷팅 기능을 한다.
- @typescript-eslint/eslint-plugin : 타입스크립트 관련 코드규칙을 설정하는 플러그인이다.
- @typescript-eslint/parser : 타입슼립트를 파싱하기 위해 사용한다.
- eslint-config-airbnb : airbnb 코딩규칙을 사용한다.(리액트 코딩규칙 포함)
- eslint-config-prettier : prettier와 충돌을 일으키는 ESLint 규칙들을 비활성화 시키는 config이다.
- eslint-plugin-prettier : Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력한다.
- eslint-plugin-react : React에 관한 린트설정을 지원해준다.
- eslint-plugin-react-hooks : React Hooks의 규칙을 강제하도록 하는 플러그인이다.
- eslint-plugin-jsx-a11y : JSX 내의 접근성 문제에 대해 즉각적인 AST 린팅 피드백을 제공한다.
- eslint-plugin-import : ES2015+의 import/export 구문을 지원하도록 한다.

[절대경로 설정](https://create-react-app.dev/docs/importing-a-component/#absolute-imports) tsconfig.json 

```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

React Router

```
npm install react-router @types/react-router react-router-dom @types/react-router-dom
```

styled-components
```
npm i styled-components @types/styled-components
```

<br/>
<br/>
<br/>

## References

본 자료는 아래 강의를 바탕으로 공부한 내용입니다.

- basic: [강의 링크](https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=1)
- quiz: [강의 링크](https://www.youtube.com/watch?v=F2JCjVSZlG0)
- crashcourse: [강의 링크](https://www.youtube.com/watch?v=jrKcJxF0lAU)
- Eslint설정 참고 출처: [참고 링크](https://velog.io/@kmlee95/React-Typescript-eslint-prettier%EC%84%A4%EC%A0%95)
