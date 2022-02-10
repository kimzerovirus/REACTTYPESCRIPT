import { useEffect, useState } from "react";
import Card from "../../components/Pets/Card/Card";
import Nav from "../../components/Nav/Nav";
import DefaultLayout from "../../layouts/Default";

export default function Home() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const res = await fetch("/api/cats");
    const data = await res.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <DefaultLayout>
      <div className="mt-5 container">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cats.map((cat, i) => (
            <Card
              key={i}
              name={cat.name}
              id={cat.id}
              phone={cat.phone}
              emai={cat.email}
              image={cat.image}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

//폴더명이 라우팅 주소이며 폴더안에 파일명은 index로 해야됨
