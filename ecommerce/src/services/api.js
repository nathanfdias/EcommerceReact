// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://ecommerce-api-react-serratec.herokuapp.com/'
// })

// export default api;

import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://ecommerce-api-react-serratec.herokuapp.com/produto",
});

export function ProdutoAPI(url) {
  const [isFetching, setIsFetching] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { produtos, isFetching, error };
}