# tailwind-tutorial

CRA 생성 이후 설정

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js
```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


[링크 참조](https://tailwindcss.com/docs/guides/create-react-app)