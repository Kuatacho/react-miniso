import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  const categoriesChunks = [];
  const chunkSize = 5;

  // Dividir el array de categorías en grupos de tamaño chunkSize
  for (let i = 0; i < categories.length; i += chunkSize) {
    categoriesChunks.push(categories.slice(i, i + chunkSize));
  }

  return (
    <div>
      {categoriesChunks.map((chunk, index) => (
        <Container key={index}>
          {chunk.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Container>
      ))}
    </div>
  );
};

export default Categories;
