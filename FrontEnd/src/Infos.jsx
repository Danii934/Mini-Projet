import { useUser } from "./User";

function Infos()
{
    const { user } = useUser();

    
    if (!user) return <p>Chargement...</p>;

    else if (!user.existe) return <p>Utilisateur inexistant</p>

    else 
        return <ul>
        <li>Id : {user.id}</li>
        <li>Nom : {user.nom}</li>
        <li>Email : {user.email}</li>
        </ul>
}

export default Infos;