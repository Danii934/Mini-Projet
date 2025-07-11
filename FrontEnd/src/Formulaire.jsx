import { useNavigate } from "react-router-dom";
import { addInfo, getInfos } from "./fetch.jsx";
import Infos from "./Infos.jsx";
import { useUser } from "./User.jsx";
function Formulaire()
{
    const { connexion,inscription } = useUser();
    const navigate = useNavigate();
    const handleConnexion = async (e) =>
    {
       e.preventDefault();
       const elts = document.getElementById('formulaire').elements;

       const data = await getInfos({nom : elts.nom.value,email : elts.mail.value})
       connexion(data)
       navigate('/infos')
    }

    const handleInscription = async (e) =>
    {
       e.preventDefault();
       const elts = document.getElementById('formulaire').elements;
       const data = await addInfo({nom : elts.nom.value,email : elts.mail.value})
       inscription(data)
       navigate('/infos')
    }
    return (
        <form id="formulaire">
            <label htmlFor="nom">Nom:</label>
            <input type="text" id="nom" name="nom" required/><br/>
            <label htmlFor="mail">E-Mail:</label>
            <input type="email" id="mail" name="mail" required/><br/>
            <button id="connexion" onClick={handleConnexion} >connexion</button>
            <button id="inscription" onClick={handleInscription} >inscription</button>
        </form>
    )
}
export default Formulaire;