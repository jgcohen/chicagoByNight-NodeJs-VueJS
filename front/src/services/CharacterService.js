import axios from "axios";

const url = "http://localhost:3000/character";

class CharacterService {
  static async getCharacters() {
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);
  }

  static insertCharacter(
    name,
    sire,
    concept,
    ambition,
    chronicle,
    desire,
    predator,
    clan,
    generation,
    strengh,
    dexterity,
    stamina,
    charisma,
    manipulation,
    composure,
    intelligence,
    wits,
    resolve,
    health,
    willpower,
    { athleticsvalue, athleticsspecialitie },
    { brawlvalue, brawlspecialitie },
    { craftvalue, craftspecialitie },
    { drivevalue, drivespecialitie },
    { firearmsvalue, firearmsspecialitie },
    { larcenyvalue, larcenyspeciality },
    { meleevalue, meleespecialitie },
    { stealthvalue, stealthspecialitie },
    { survivalvalue, survivalspecialitie },
    { animalkenvalue, animalkenspecialitie },
    {etiquettevalue,etiquettespecialitie},
    {insightvalue,insightspecialitie},
    {intimidationvalue,intimidationspecialitie},
    {leadershipvalue, leadershipspecialitie},
    {performancevalue,performancespecialitie},
    {persuasionvalue,persuasionspecialitie},
    {streetwisevalue,streetwisespecialitie},
    {subterfugevalue, subterfugespecialitie},
    {academicsvalue, academicsspecialitie},
    {awernessvalue, awernessspecialitie},
    {financevalue, financespecialitie},
    {investigationvalue, investigationspecialitie},
    {medicinevalue, medicinespecialitie},
    {occultvalue, occultspecialitie},
    {politicsvalue, politicsspecialitie},
    {sciencevalue, sciencespecialitie},
    {technologyvalue, technologyspecialitie},
    resonance,
    hunger,
    humanity,
    disciplines
  ) {
    return axios.post(url, {
        name,
        sire,
        concept,
        ambition,
        chronicle,
        desire,
        predator,
        clan,
        generation,
        strengh,
        dexterity,
        stamina,
        charisma,
        manipulation,
        composure,
        intelligence,
        wits,
        resolve,
        health,
        willpower,
        { athleticsvalue, athleticsspecialitie },
        { brawlvalue, brawlspecialitie },
        { craftvalue, craftspecialitie },
        { drivevalue, drivespecialitie },
        { firearmsvalue, firearmsspecialitie },
        { larcenyvalue, larcenyspeciality },
        { meleevalue, meleespecialitie },
        { stealthvalue, stealthspecialitie },
        { survivalvalue, survivalspecialitie },
        { animalkenvalue, animalkenspecialitie },
        {etiquettevalue,etiquettespecialitie},
        {insightvalue,insightspecialitie},
        {intimidationvalue,intimidationspecialitie},
        {leadershipvalue, leadershipspecialitie},
        {performancevalue,performancespecialitie},
        {persuasionvalue,persuasionspecialitie},
        {streetwisevalue,streetwisespecialitie},
        {subterfugevalue, subterfugespecialitie},
        {academicsvalue, academicsspecialitie},
        {awernessvalue, awernessspecialitie},
        {financevalue, financespecialitie},
        {investigationvalue, investigationspecialitie},
        {medicinevalue, medicinespecialitie},
        {occultvalue, occultspecialitie},
        {politicsvalue, politicsspecialitie},
        {sciencevalue, sciencespecialitie},
        {technologyvalue, technologyspecialitie},
        resonance,
        hunger,
        humanity,
        disciplines
    });
  }

  static deleteCharacter(id) {
    return axios.delete(`${url}/${id}`);
  }

  static getCharacter(id) {
    return axios
      .get(`${url}/${id}`)
      .then((res) => res.data[0])
      .catch((err) => err);
  }

  //    static updateCharacter(id,name,description){
  //        return axios.patch(`${url}/${id}`, { name, description })
  //    }
}

export default CharacterService;
