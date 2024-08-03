"use client";
import { useState } from "react";

 // cod para usar server components como parte de client

// server components = componente acessados pelo lado do servidor(nao da para adicionar interatividade)

const Home = () => {
  const [] = useState();

  return <h1 className="text-red-500">Home page</h1>
};

export default Home;