import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="exercice_2">Exercice 2: Formulaire</a>
        </li>
        <li>
          <a href="exercice_3">Exercice 3: Tableaux</a>
        </li>
      </ul>
    </nav>
  );
};
