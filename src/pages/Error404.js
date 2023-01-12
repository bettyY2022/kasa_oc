import "../pages/pages.css"

function Error404() {
    return <div><div className="BodyError">

        <div className="blocError">
            <strong>404</strong>
            <p className="phraseError">Oups! La page que vous demandez n'existe pas.</p>
            <p className="paragError" >Retourner sur la page d'accueil </p>
        </div>
    </div></div>
}

export default Error404 