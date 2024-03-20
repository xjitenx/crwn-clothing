import './directory.styles.scss';
import CategoryItem from "../category-item/category-item.coponent";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((c) => (
        <CategoryItem key={c.id} category={c} />
      ))}
    </div>
  );
};

export default Directory;
