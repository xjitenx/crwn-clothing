import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.coponent";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((c) => (
        <DirectoryItem key={c.id} category={c} />
      ))}
    </div>
  );
};

export default Directory;
