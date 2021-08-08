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
     owner,
    name,
    sire,
    concept,
    ambition,
    chronicle,
    desire,
    predator,
    clan,
    generation,
    strength,
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
    athletics,
    athleticsspe,
    brawl,
    brawlspe,
    craft,
    craftspe,
    drive,
    drivespe,
    firearms,
    firearmsspe,
    larceny,
    larcenyspe,
    melee,
    meleespe,
    stealt,
    stealthspe,
    survival,
    survivalspe,
    animalken,
    animalkenspe,
    etiquette,
    etiquettespe,
    insight,
    insightspe,
    intimidation,
    intimidationspe,
    leadership,
    leadershipspe,
    performance,
    performancespe,
    persuasion,
    persuasionspe,
    streetwise,
    streetwisespe,
    subterfuge,
    subterfugespe,
    academics,
    academicsspe,
    awarness,
    awarnessspe,
    finance,
    financespe,
    investigation,
    investigationspe,
    medicine,
    medicinespe,
    occult,
    occultspe,
    politics,
    politicsspe,
    science,
    sciencespe,
    technology,
    technologyspe,
    // { athleticsvalue, athleticsspecialitie },
    // { brawlvalue, brawlspecialitie },
    // { craftvalue, craftspecialitie },
    // { drivevalue, drivespecialitie },
    // { firearmsvalue, firearmsspecialitie },
    // { larcenyvalue, larcenyspeciality },
    // { meleevalue, meleespecialitie },
    // { stealthvalue, stealthspecialitie },
    // { survivalvalue, survivalspecialitie },
    // { animalkenvalue, animalkenspecialitie },
    // {etiquettevalue,etiquettespecialitie},
    // {insightvalue,insightspecialitie},
    // {intimidationvalue,intimidationspecialitie},
    // {leadershipvalue, leadershipspecialitie},
    // {performancevalue,performancespecialitie},
    // {persuasionvalue,persuasionspecialitie},
    // {streetwisevalue,streetwisespecialitie},
    // {subterfugevalue, subterfugespecialitie},
    // {academicsvalue, academicsspecialitie},
    // {awarnessvalue, awarnessspecialitie},
    // {financevalue, financespecialitie},
    // {investigationvalue, investigationspecialitie},
    // {medicinevalue, medicinespecialitie},
    // {occultvalue, occultspecialitie},
    // {politicsvalue, politicsspecialitie},
    // {sciencevalue, sciencespecialitie},
    // {technologyvalue, technologyspecialitie},
    resonance,
    hunger,
    humanity,
    
  ) {
    return axios.post(url, {
       owner,
      name,
      sire,
      concept,
      ambition,
      chronicle,
      desire,
      predator,
      clan,
      generation,
      strength,
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
      athletics,
      athleticsspe,
      brawl,
      brawlspe,
      craft,
      craftspe,
      drive,
      drivespe,
      firearms,
      firearmsspe,
      larceny,
      larcenyspe,
      melee,
      meleespe,
      stealt,
      stealthspe,
      survival,
      survivalspe,
      animalken,
      animalkenspe,
      etiquette,
      etiquettespe,
      insight,
      insightspe,
      intimidation,
      intimidationspe,
      leadership,
      leadershipspe,
      performance,
      performancespe,
      persuasion,
      persuasionspe,
      streetwise,
      streetwisespe,
      subterfuge,
      subterfugespe,
      academics,
      academicsspe,
      awarness,
      awarnessspe,
      finance,
      financespe,
      investigation,
      investigationspe,
      medicine,
      medicinespe,
      occult,
      occultspe,
      politics,
      politicsspe,
      science,
      sciencespe,
      technology,
      technologyspe,
      // { athleticsvalue, athleticsspecialitie },
      // { brawlvalue, brawlspecialitie },
      // { craftvalue, craftspecialitie },
      // { drivevalue, drivespecialitie },
      // { firearmsvalue, firearmsspecialitie },
      // { larcenyvalue, larcenyspeciality },
      // { meleevalue, meleespecialitie },
      // { stealthvalue, stealthspecialitie },
      // { survivalvalue, survivalspecialitie },
      // { animalkenvalue, animalkenspecialitie },
      // {etiquettevalue,etiquettespecialitie},
      // {insightvalue,insightspecialitie},
      // {intimidationvalue,intimidationspecialitie},
      // {leadershipvalue, leadershipspecialitie},
      // {performancevalue,performancespecialitie},
      // {persuasionvalue,persuasionspecialitie},
      // {streetwisevalue,streetwisespecialitie},
      // {subterfugevalue, subterfugespecialitie},
      // {academicsvalue, academicsspecialitie},
      // {awarnessvalue, awarnessspecialitie},
      // {financevalue, financespecialitie},
      // {investigationvalue, investigationspecialitie},
      // {medicinevalue, medicinespecialitie},
      // {occultvalue, occultspecialitie},
      // {politicsvalue, politicsspecialitie},
      // {sciencevalue, sciencespecialitie},
      // {technologyvalue, technologyspecialitie},
      resonance,
      hunger,
      humanity,
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
