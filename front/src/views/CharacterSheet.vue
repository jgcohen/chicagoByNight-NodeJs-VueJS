<template>
<div class="container">
  <div class="row">
    <div class="col border border-dark">
      <p class="text-start">Name: {{character.name}}</p>
    </div>
     <div class="col border border-dark">
      <p class="text-start">Concept: {{character.concept}}</p>
    </div>
     <div class="col border border-dark">
      <p class="text-start">Predator: {{character.predator}}</p>
    </div>
  </div>
   <div class="row">
    <div class="col border border-dark">
      <p class="text-start">Chronicle: {{character.chronicle}}</p>
    </div>
     <div class="col border border-dark">
      <p class="text-start">Ambition: {{character.ambition}}</p>
    </div>
     <div class="col border border-dark">
      <p class="text-start">Clan: {{character.clan}}</p>
    </div>
  </div>
   <div class="row">
    <div class="col border border-dark">
      <p class="text-start">Sire: {{character.sire}}</p>
    </div>
     <div class="col border border-dark">
      <p class="text-start">Desire: {{character.desire}}</p>
    </div>
     <div class="col border border-dark">
      <p class="text-start">Generation: {{character.generation}}</p>
    </div>
  </div>
  <div class="text-center text-danger mt-5 border-bottom border-danger">
    <h3>Attributes</h3>
  </div>
  <div class="row">
    <div class="col">
      <p>Strength: {{character.strength}}</p>
    </div>
  </div>
</div>
</template>


<script>
import CharacterService from "../services/CharacterService";
export default {
  name: "SinglecharacterComponent",
  data() {
    return {
      owner: "",
      character: "",
      name: "",
      sire: "",
      concept: "",
      ambition: "",
      chronicle: "",
      desire: "",
      predator: "",
      clan: "",
      generation: "",
      strength: "",
      dexterity: "",
      stamina: "",
      charisma: "",
      manipulation: "",
      composure: "",
      intelligence: "",
      wits: "",
      resolve: "",
      health: "",
      willpower: "",
      athletics: "",
      athleticsspe: "",
      brawl: "",
      brawlspe: "",
      craft: "",
      craftspe: "",
      drive: "",
      drivespe: "",
      firearms: "",
      firearmsspe: "",
      larceny: "",
      larcenyspe: "",
      melee: "",
      meleespe: "",
      stealth: "",
      stealthspe: "",
      survival: "",
      survivalspe: "",
      animalken: "",
      animalkenspe: "",
      etiquette: "",
      etiquettespe: "",
      insight: "",
      insightspe: "",
      intimidation: "",
      intimidationspe: "",
      leadership: "",
      leadershipspe: "",
      performance: "",
      performancespe: "",
      persuasion: "",
      persuasionspe: "",
      streetwise: "",
      streetwisespe: "",
      subterfuge: "",
      subterfugespe: "",
      academics: "",
      academicsspe: "",
      awareness: "",
      awarenessspe: "",
      finance: "",
      financespe: "",
      investigation: "",
      investigationspe: "",
      medicine: "",
      medicinespe: "",
      occult: "",
      occultspe: "",
      politics: "",
      politicsspe: "",
      science: "",
      sciencespe: "",
      technology: "",
      technologyspe: "",
      resonance: "",
      hunger: "",
      humanity: "",
      discipline1: "",
      discipline2: "",
      discipline3: "",
      superficialdamage: "",
      aggravateddamage: "",
      damagewillpower: "",
      taintedhumanity: "",
      discipline1value: "",
      discipline2value: "",
      discipline3value: "",
    };
  },

  async created() {
    try {
      this.character = await CharacterService.getCharacter(
        this.$route.params.id
      );
      this.name = this.character.name;
      this.sire = this.character.sire;
      this.concept = this.character.concept;
      this.ambition = this.character.ambition;
      this.chronicle = this.character.chronicle;
      this.desire = this.character.desire;
      this.predator = this.character.predator;
      this.clan = this.character.clan;
      this.generation = this.character.generation;
      this.strength = this.character.strength;
      this.dexterity = this.character.dexterity;
      this.stamina = this.character.stamina;
      this.charisma = this.character.charisma;
      this.manipulation = this.character.manipulation;
      this.composure = this.character.composure;
      this.intelligence = this.character.intelligence;
      this.wits = this.character.wits;
      this.resolve = this.character.resolve;
      this.health = this.character.health;
      this.willpower = this.character.willpower;
      this.athletics = this.character.athletics;
      this.athleticsspe = this.character.athleticsspe;
      this.brawl = this.character.brawl;
      this.brawlspe = this.character.brawlspe;
      this.craft = this.character.craft;
      this.craftspe = this.character.craftspe;
      this.drive = this.character.drive;
      this.drivespe = this.character.drivespe;
      this.firearms = this.character.firearms;
      this.firearmsspe = this.character.firearmsspe;
      this.larceny = this.character.larceny;
      this.larcenyspe = this.character.larcenyspe;
      this.melee = this.character.melee;
      this.meleespe = this.character.meleespe;
      this.stealth = this.character.stealth;
      this.stealthspe = this.character.stealthspe;
      this.survival = this.character.survival;
      this.survivalspe = this.character.survivalspe;
      this.animalken = this.character.animalken;
      this.animalkenspe = this.character.animalkenspe;
      this.etiquette = this.character.etiquette;
      this.etiquettespe = this.character.etiquettespe;
      this.insight = this.character.insight;
      this.insightspe = this.character.insightspe;
      this.intimidation = this.character.intimidation;
      this.intimidationspe = this.character.intimidationspe;
      this.leadership = this.character.leadership;
      this.leadershipspe = this.character.leadershipspe;
      this.performance = this.character.performance;
      this.performancespe = this.character.performancespe;
      this.persuasion = this.character.persuasion;
      this.persuasionspe = this.character.persuasionspe;
      this.streetwise = this.character.streetwise;
      this.streetwisespe = this.character.streetwisespe;
      this.subterfuge = this.character.subterfuge;
      this.subterfugespe = this.character.subterfugespe;
      this.academics = this.character.academics;
      this.academicsspe = this.character.academicsspe;
      this.awareness = this.character.awareness;
      this.awarenessspe = this.character.awarenessspe;
      this.finance = this.character.finance;
      this.financespe = this.character.financespe;
      this.investigation = this.character.investigation;
      this.investigationspe = this.character.investigationspe;
      this.medicine = this.character.medicine;
      this.medicinespe = this.character.medicinespe;
      this.occult = this.character.occult;
      this.occultspe = this.character.occultspe;
      this.politics = this.character.politics;
      this.politicsspe = this.character.politicsspe;
      this.science = this.character.science;
      this.sciencespe = this.character.sciencespe;
      this.technology = this.character.technology;
      this.technologyspe = this.character.technologyspe;
      this.resonance = this.character.resonance;
      this.hunger = this.character.hunger;
      this.humanity = this.character.humanity;
      this.discipline1 = this.character.discipline1;
      this.discipline2  = this.character.discipline2;
      this.discipline3  = this.character.discipline3;
      this.superficialdamage  = this.character.superficialdamage;
      this.aggravateddamage  = this.character.aggravateddamage;
      this.damagewillpower  = this.character.damagewillpower;
      this.taintedhumanity  = this.character.taintedhumanity;
      this.discipline1value  = this.character.discipline1value;
      this.discipline2value  = this.character.discipline2value;
      this.discipline3value  = this.character.discipline3value;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async updateCharacter() {
      console.log(this.$route.params.id);
      if (confirm("Do you really want to update?")) {
        await CharacterService.updateCharacter(
          this.$route.params.id,
          this.name,
          this.sire,
          this.concept,
          this.ambition,
          this.chronicle,
          this.desire,
          this.predator,
          this.clan,
          this.generation,
          this.strength,
          this.dexterity,
          this.stamina,
          this.charisma,
          this.manipulation,
          this.composure,
          this.intelligence,
          this.wits,
          this.resolve,
          this.health,
          this.willpower,
          this.athletics,
          this.athleticsspe,
          this.brawl,
          this.brawlspe,
          this.craft,
          this.craftspe,
          this.drive,
          this.drivespe,
          this.firearms,
          this.firearmsspe,
          this.larceny,
          this.larcenyspe,
          this.melee,
          this.meleespe,
          this.stealth,
          this.stealthspe,
          this.survival,
          this.survivalspe,
          this.animalken,
          this.animalkenspe,
          this.etiquette,
          this.etiquettespe,
          this.insight,
          this.insightspe,
          this.intimidation,
          this.intimidationspe,
          this.leadership,
          this.leadershipspe,
          this.performance,
          this.performancespe,
          this.persuasion,
          this.persuasionspe,
          this.streetwise,
          this.streetwisespe,
          this.subterfuge,
          this.subterfugespe,
          this.academics,
          this.academicsspe,
          this.awareness,
          this.awarenessspe,
          this.finance,
          this.financespe,
          this.investigation,
          this.investigationspe,
          this.medicine,
          this.medicinespe,
          this.occult,
          this.occultspe,
          this.politics,
          this.politicsspe,
          this.science,
          this.sciencespe,
          this.technology,
          this.technologyspe,
          this.resonance,
          this.hunger
        );
        this.characters = await CharacterService.getCharacters();
      }
    },
  },
};
</script>

<style scoped>

</style>
