import React from "react";

import { Cover, SearchBar } from "../style/Styles.modules";
interface CoverProps {
  title: string;
  description: string;
  catchPhrase: string;
  headerImage: string;
  showSearch: boolean;
  showHeaderImage: boolean;
}

const CoverPage: React.FC<CoverProps> = ({
  title,
  description,
  catchPhrase,
  headerImage,
  showHeaderImage,
  showSearch,
}) => {
  return (
    <Cover>
      <div className="coverText">
        <h1>{title}</h1>
        <p>{description}</p>
        <em>{catchPhrase}</em>
      </div>
      {showHeaderImage && <img src={headerImage} alt="img" />}

      {showSearch && (
        <SearchBar>
          <input type="search" placeholder="Search Movies....." />
          <button>Search</button>
        </SearchBar>
      )}
    </Cover>
  );
};

export default CoverPage;
