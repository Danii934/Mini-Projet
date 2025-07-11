import Infos from "./Infos"

async function getInfos(req)
{
    const res = await fetch('http://localhost:3000/getInfo?nom='+req.nom+'&email='+req.email)
    const data = await res.json()
    console.log(data)
    if(data[0] == undefined)
        return {existe : false}
    return {nom : data[0].nom, email : data[0].email, id :data[0].id, existe :true}

}

async function addInfo(req)
{
    const res = await fetch('http://localhost:3000/addInfo?nom='+req.nom+'&email='+req.email)
    const data = await res.json()
    if(data[0] == undefined)
        return {existe : false}
    return {nom : data[0].nom, email : data[0].email, id :data[0].id, existe :true}

}

export {getInfos,addInfo}