import styled from "styled-components";

const BotonCompra = styled.button`
  background-color: #f4f0efff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #8e1235ff;
  }
`;

function Producto({ text }) {
  return <BotonCompra>{text}</BotonCompra>;
}

export default Producto