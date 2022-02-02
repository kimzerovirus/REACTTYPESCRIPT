### How to Start
```
yarn add react-router-dom@6   
```

### BrowserRouter wrap entire app
```
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### NavLink
Link와 기능은 같지만 추가로 active클래스를 제공한다.
```
NavBar.js
<nav>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/about">About</NavLink>
</nav>

NavBar.css
nav a.active{
    ...
}
```

### Navigating Prommatically
```
useNavigate();
```

### Nested Routes
/products/new
```
<Route path="products">
  <Route path="new"/>
</Route>
```
`<Outlet/>`을 상속받아서 넣어주면 이걸 통해서 렌더링함

### Dynamic Routes


<br/>
<br/>
<br/>

[v5와 v6 비교](https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC)