import "../pages/pages.css"
import Header from "../pages/Header";

function Error404() {
    return <div><div className="BodyError">
        <Header />
        <div className="blocError">
            <strong>404</strong>
            <p className="phraseError">Oups! La page que vous demandez n'existe pas.</p>
            <p className="paragError" >Retourner sur la page d'accueil </p>
        </div>
    </div></div>
}

export default Error404 