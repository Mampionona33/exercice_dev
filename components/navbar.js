import Link from "next/link";

export const Navbar = () => {
  return (
    <nav class="navbar">
      <div>Logo</div>
      <ul class="navbar__container">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          exercices
          <ul>
            <li>
              <a href="exercice_2">Exo 2: Formulaire</a>
            </li>
            <li>
              <a href="exercice_3">Exo 3: Tableaux</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
