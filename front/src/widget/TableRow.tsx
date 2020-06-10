import React from "react";
import classNames from "classnames";

import "./TableRow.scss";
import { Article } from "../interfaces/Article";

interface TableRowProps {
  a: Article;
  selectedArticles: Article[];
  onClick: ((event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void) | undefined;
}

function TableRow(props: TableRowProps) {
  return (
    <tr
      onClick={props.onClick}
      className={classNames({
        selected: props.selectedArticles.includes(props.a),
      })}
    >
      <td>{props.a.name}</td>
      <td>{props.a.price} €</td>
      <td>{props.a.qty}</td>
    </tr>
  );
}

export default TableRow;
