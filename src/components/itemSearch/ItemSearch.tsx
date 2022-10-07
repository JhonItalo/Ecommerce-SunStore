import React from "react";
import Link from "next/link";
interface props {
  title: string;
  id: number;
  resetSearch: (n: string) => void;
}

const ItemSearch = ({ title, id, resetSearch }: props) => {
  return (
    <Link href={`/produtos/${id}`}>
      <a onClick={() => resetSearch("")}>
        <li>{title}</li>
      </a>
    </Link>
  );
};

export default ItemSearch;

