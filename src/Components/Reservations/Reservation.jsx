import {useState} from "react";
import styles from "./reservation.module.css";

function Reservation() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [reservation, setReservation] = useState(null);
    const [erreur, setErreur] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    function effacerErreur(champ) {
        setErreur((prev) => {
            const nouvelleErreurs = { ...prev };
            delete nouvelleErreurs[champ];
            return nouvelleErreurs;
        });
}
}

<section className={styles.container}>
    <h2>Réservez vos voyages</h2>
    <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
            <Label> Nom et prénom </Label>
            <input 
                type="text"
                className={erreurNom ? styles.inputError : ""}
                value={nom}
                onChange={(e) => {setNom(e.target.value); effacerErreur("nom");}}
            placeholder="Entrez votre nom et prénom"
            />
            {erreurNom && (<span className={styles.errorMessage}>{erreur.nom}</span>)}
        </div>

        <div className={styles.formGroup}>
            <Label> Email </Label>
            <input 
                type="email"
                className={erreurEmail ? styles.inputError : ""}
                value={email}
                onChange={(e) => {setEmail(e.target.value); effacerErreur("email");}}
            placeholder="Entrez votre email"
            />
            {erreurEmail && (<span className={styles.errorMessage}>{erreur.email}</span>)}
        </div>

                <div className={styles.formGroup}>
            <Label> Telephone </Label>
            <input 
                type="number"
                className={erreurTelephone ? styles.inputError : ""}
                value={telephone}
                onChange={(e) => {setTelephone(e.target.value); effacerErreur("telephone");}}
            placeholder="Entrez votre numéro de téléphone"
            />
            {erreurTelephone && (<span className={styles.errorMessage}>{erreur.telephone}</span>)}
        </div>
    </form>
</section> 