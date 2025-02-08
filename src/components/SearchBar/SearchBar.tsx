import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      toast.error("Please enter a query!");
      return;
    }
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <header className={styles.header_form}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
