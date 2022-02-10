import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import DefaultLayout from "../../layouts/Default";

function Cat() {
  const router = useRouter();

  const { id } = router.query;

  const [cat, setCat] = useState(null);

  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    console.log({ data: data });
    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <DefaultLayout>
      {cat && (
        <div className="container mt-5" style={{ display: "flex" }}>
          <img src={cat.image.url} />
          <div className="mx-5">
            <h1>{cat.name}</h1>
            <p>{cat.description} </p>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
}

export default Cat;
