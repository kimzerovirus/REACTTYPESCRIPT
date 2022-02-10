import { cats } from "../../../data";

export default function handler(req, res) {
  const {id} = req.query;

  const cat = cats.find(cat=> cat.id===Number(id))
  res.status(200).json(cat);
}

//[id]파일을 통해 다이나믹 라우팅 기능을 구현 할 수 있다.
// http://localhost:3000/api/cats/1