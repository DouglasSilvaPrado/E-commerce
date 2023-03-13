import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/login" element={<p>Login</p>} />
        <Route path="/sign-up" element={<p>Cadastro</p>} />
        <Route
          path="/category/:categoryName"
          element={<p>Produtos por Categoria</p>}
        />
        <Route path="/product/:id" element={<p>Produtos por id</p>} />
        <Route path="/cart" element={<p>Carrinho</p>} />
        <Route path="/checkout" element={<p>checkout</p>} />
      </Routes>
    </BrowserRouter>
  );
};
