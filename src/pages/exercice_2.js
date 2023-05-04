import { Navbar } from "../../components/navbar";

export default function Exercice2() {
  const handleSexChange = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <hr />
      <h1>Exercice 2</h1>
      <hr />
      <h1>Formulaire</h1>
      <p>Dans cet exercice, il faut regarder les composantes suivantes :</p>
      <ul>
        <li>L&apos;élément HTML &lt;form&gt;</li>
        <li>L&apos;élément HTML &lt;form&gt;</li>
        <li>L'élément HTML &lt;label&gt;</li>
        <li>L'élément HTML &lt;div&gt;</li>
        <li>Les éléments HTML de type input</li>
      </ul>
      <hr />
      <h3>Remarques</h3>
      <ul>
        <li>
          Remarquer que, pour l'âge le nombre ne doit pas être inférieur à zéro
        </li>
        <li>La valeur femme doit être coché par défaut.</li>
        <li>
          Le bouton "Choisir un fichier" doit ouvrir l'explorateur de fichier
          après un click.
        </li>
        <li>La valeur saisie dans le champ email doit être un email valide.</li>
        <li>
          La valeur saisie dans le champ mots de passe ne dois pas être visibles
        </li>
        <li>
          Après, clique sur le bouton "Effacer la saisie", tout information
          saisie doivent tous être effacé.
        </li>
        <li>
          Après click sur le bouton valider, l'url doit montrer les informations
          saisies dans les champs.
        </li>
        <li>Le nom et l'age sont obligatoires.</li>
      </ul>
      <hr />
      <div>
        <form action="">
          <div>
            <label htmlFor="Nom">Nom</label>
            <input type="text" name="Nom" id="Nom" required />
          </div>
          <br />
          <div>
            <label htmlFor="prenom">Prénom</label>
            <input type="text" name="Nom" id="prenom" />
          </div>
          <br />
          <div>
            <label htmlFor="adress">Adress</label>
            <input type="text" name="adress" id="adress" />
          </div>
          <div>
            <p>Sex :</p>
            <input
              type="radio"
              name="sex"
              id="sex_f"
              value="F"
              checked
              onChange={handleSexChange}
            />
            <label htmlFor="sex">F</label>
            <input type="radio" name="sex" id="sex_m" value="M" />
            <label htmlFor="sex">M</label>
          </div>
          <br />
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" name="Nom" id="age" min="0" required />
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
          </div>
          <br />
          <div>
            <label htmlFor="mdp">Mots de passe</label>
            <input type="password" name="mdp" id="mdp" />
          </div>
          <br />
          <div>
            <label htmlFor="confirm_mdp">Confirmer mots de passe</label>
            <input type="password" name="confirm_mdp" id="confirm_mdp" />
          </div>
          <br />
          <div>
            <label htmlFor="fichier">Imorter une image</label>
            <input type="file" name="fichier" id="fichier" />
          </div>
          <br />
          <div>
            <label htmlFor="comment">Commentaire</label>
            <textarea name="comment" id="comment" cols="30" rows="10" />
          </div>
          <br />
          <div>
            <input type="checkbox" name="verification" id="verification" />
            <label htmlFor="verification">J'ai terminé la vérification.</label>
          </div>
          <br />
          <div>
            <input type="button" value="verifier mes information" />
            <input type="reset" value="Effacer la saisie" />
            <input type="submit" value="valider" />
          </div>
        </form>
      </div>
    </div>
  );
}
