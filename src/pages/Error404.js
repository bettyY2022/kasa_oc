import "../pages/Error404.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <div className="BodyError">
        <div className="blocError">
          <strong>404</strong>
          <p className="phraseError">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="paragError"> Retourner sur la page d'accueil </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
