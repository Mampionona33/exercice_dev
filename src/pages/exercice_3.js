import React from "react";
import { Navbar } from "../../components/navbar";

export default function Exercice3() {
  return (
    <React.Fragment>
      <Navbar />
      <hr />
      <h1>Les tableaux</h1>
      <table align="center" border={1} width={"40%"}>
        <thead>
          <tr>
            <td>
              <h5>Titre 1</h5>
            </td>
            <td>
              <h5>Titre 3</h5>
            </td>
            <td>
              <h5>Titre 4</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cellule simple</td>
            <td>cellule simple</td>
            <td>cellule simple</td>
          </tr>
          <tr>
            <td colSpan={2}>Cellule avec deux colonnes</td>
            <td>cellule simple</td>
          </tr>
          <tr>
            <td>cellule simple</td>
            <td>cellule simple</td>
            <td rowSpan={2}>cellule deux lignes</td>
          </tr>
          <tr>
            <td>cellule simple</td>
            <td>cellule simple</td>
          </tr>
          <tr>
            <td>cellule simple</td>
            <td colSpan={2} rowSpan={2}>
              cellule deux colonnes et deux lignes
            </td>
          </tr>
          <tr>
            <td>cellule simple</td>
          </tr>
          <tr>
            <td colSpan={3}>cellule avec trois colonnes</td>
          </tr>
        </tbody>
        <caption>My first table</caption>
      </table>
    </React.Fragment>
  );
}
