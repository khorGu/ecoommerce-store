import CategoryItem from "../category-item/category-item.component";
import "./main-directory.styles.scss";

const MainPage = ({ categories }) => {
  return (
    <div className="main-directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default MainPage;
