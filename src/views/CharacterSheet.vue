<template>
  <div class="container">
    <div class="row">
      <div class="col border border-dark">
        <p class="text-start">Name: {{ character.name }}</p>
      </div>
      <div class="col border border-dark">
        <p class="text-start">Concept: {{ character.concept }}</p>
      </div>
      <div class="col border border-dark">
        <p class="text-start">Predator: {{ character.predator }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col border border-dark">
        <p class="text-start">Chronicle: {{ character.chronicle }}</p>
      </div>
      <div class="col border border-dark">
        <p class="text-start">Ambition: {{ character.ambition }}</p>
      </div>
      <div class="col border border-dark">
        <p class="text-start">Clan: {{ character.clan }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col border border-dark">
        <p class="text-start">Sire: {{ character.sire }}</p>
      </div>
      <div class="col border border-dark">
        <p class="text-start">Desire: {{ character.desire }}</p>
      </div>
      <div class="col border border-dark">
        <p class="text-start">Generation: {{ character.generation }}</p>
      </div>
    </div>
    <div class="text-center text-danger mt-5 border-bottom border-danger">
      <h3>Attributes</h3>
    </div>
    <div class="row">
      <div class="col">
        <h5>Physical</h5>
        <p class="text-start">Strength: {{ character.strength }}</p>
        <p class="text-start">Dexterity: {{ character.dexterity }}</p>
        <p class="text-start">Stamina: {{ character.stamina }}</p>
      </div>
      <div class="col">
        <h5>Social</h5>
        <p class="text-start">Charisma: {{ character.charisma }}</p>
        <p class="text-start">Manipulation: {{ character.manipulation }}</p>
        <p class="text-start">Composure: {{ character.composure }}</p>
      </div>
      <div class="col">
        <h5>Mental</h5>
        <p class="text-start">Intelligence: {{ character.intelligence }}</p>
        <p class="text-start">Wits: {{ character.wits }}</p>
        <p class="text-start">Resolve: {{ character.resolve }}</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <p>Health Max: {{ character.health }}</p>
        <p>Superficial damages: {{ character.superficialdamage }}</p>
        <button v-on:click="lowersuperficialdamage">-</button>
        <button v-on:click="addsuperficialdamage">+</button>
        <p>Aggravated damages: {{ character.aggravateddamage }}</p>
        <button v-on:click="loweraggravateddamage">-</button>
        <button v-on:click="addaggravateddamage">+</button>
      </div>
      <div class="col">
        <p>Willpower Max: {{ character.willpower }}</p>
        <p>Damaged Willpower: {{ character.damagewillpower }}</p>
        <button v-on:click="lowerdamagedwillpower">-</button>
        <button v-on:click="adddamagedwillpower">+</button>
      </div>
    </div>
    <div class="row border-bottom border-danger">
      <h3 class="text-danger border-bottom border-danger">Skills</h3>
      <div class="col">
      <p>Athletics: {{character.athletics}}</p>
      <p v-if="athleticsspe">{{character.athleticsspe}}</p>
      <p>Brawl: {{character.brawl}}</p>
      <p v-if="brawlspe">( {{character.brawlspe}} )</p>
     <p>Craft: {{character.craft}}</p>
      <p v-if="craftspe">( {{character.craftspe}} )</p>
      <p>Drive: {{character.drive}}</p>
      <p v-if="drivespe">( {{character.drivespe}} )</p>
      <p>Firearms: {{character.firearms}}</p>
      <p v-if="firearmsspe">( {{character.firearmsspe}} )</p>
      <p>Larceny: {{character.larceny}}</p>
      <p v-if="larcenyspe">( {{character.larcenyspe}} )</p>
      <p>Melee: {{character.melee}}</p>
      <p v-if="meleespe">( {{character.meleespe}} )</p>
      <p>Stealth: {{character.stealth}}</p>
      <p v-if="stealthspe">( {{character.stealthspe}} )</p>
      <p>Survival: {{character.survival}}</p>
      <p v-if="survivalspe">( {{character.survivalspe}} )</p>
      </div>
      <div class="col">
        <p>Animal Ken: {{character.animalken}}</p>
      <p v-if="animalkenspe">{{character.animalkenspe}}</p>
      <p>Etiquette: {{character.etiquette}}</p>
      <p v-if="etiquettespe">( {{character.etiquettespe}} )</p>
     <p>Insight: {{character.insight}}</p>
      <p v-if="insightspe">( {{character.insightspe}} )</p>
      <p>Intimidation: {{character.intimidation}}</p>
      <p v-if="intimidationspe">( {{character.intimidationspe}} )</p>
      <p>Leadership: {{character.leadership}}</p>
      <p v-if="leadershipspe">( {{character.leadershipspe}} )</p>
      <p>Performance: {{character.performance}}</p>
      <p v-if="performancespe">( {{character.performancespe}} )</p>
      <p>Persuasion: {{character.persuasion}}</p>
      <p v-if="persuasionspe">( {{character.persuasionspe}} )</p>
      <p>Streetwise: {{character.streetwise}}</p>
      <p v-if="streetwisespe">( {{character.streetwisespe}} )</p>
      <p>Subterfuge: {{character.subterfuge}}</p>
      <p v-if="subterfugespe">( {{character.subterfugespe}} )</p>
      </div>
      <div class="col">
        <p>Academics: {{character.academics}}</p>
      <p v-if="academicsspe">{{character.academicsspe}}</p>
      <p>Awareness: {{character.awareness}}</p>
      <p v-if="awarenessspe">( {{character.awarenessspe}} )</p>
     <p>Finance: {{character.finance}}</p>
      <p v-if="financespe">( {{character.financespe}} )</p>
      <p>Investigation: {{character.investigation}}</p>
      <p v-if="investigationspe">( {{character.investigationspe}} )</p>
      <p>Medicine: {{character.medicine}}</p>
      <p v-if="medicinespe">( {{character.medicinespe}} )</p>
      <p>Occult: {{character.occult}}</p>
      <p v-if="occultspe">( {{character.occultspe}} )</p>
      <p>Politics: {{character.politics}}</p>
      <p v-if="politicsspe">( {{character.politicsspe}} )</p>
      <p>Science: {{character.science}}</p>
      <p v-if="sciencespe">( {{character.sciencespe}} )</p>
      <p>Technology: {{character.technology}}</p>
      <p v-if="technologyspe">( {{character.technologyspe}} )</p>
      </div>
    </div>
     <div class="row border-bottom border-danger">
      <h3 class="text-danger border-bottom border-danger">Disciplines</h3>
      <div class="col">
            <p>{{character.discipline1}}</p>
            <p>{{character.discipline1value}}</p>
      </div>
      <div class="col"><p>{{character.discipline2}}</p>
            <p>{{character.discipline2value}}</p></div>
      <div class="col"><p>{{character.discipline3}}</p>
            <p>{{character.discipline3value}}</p></div>
    </div>
    <div class="row">
      <div class="col">
      Hunger: {{character.hunger}}
        <button v-on:click="lowerhunger">-</button>
        <button v-on:click="addhunger">+</button>
      </div>
    </div>
    <div class="row">
    <div v-if="advantages" class="col">
      <p>Advantages:</p>
      <p>{{character.advantages}}</p>
    </div>
    <div  v-if="flaws" class="col">
      <p>Flaws:</p>
      <p>{{character.flaws}}</p>
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
      advantages:"",
      flaws:"",
      notes:""
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
      this.discipline2 = this.character.discipline2;
      this.discipline3 = this.character.discipline3;
      this.superficialdamage = this.character.superficialdamage;
      this.aggravateddamage = this.character.aggravateddamage;
      this.damagewillpower = this.character.damagewillpower;
      this.taintedhumanity = this.character.taintedhumanity;
      this.discipline1value = this.character.discipline1value;
      this.discipline2value = this.character.discipline2value;
      this.discipline3value = this.character.discipline3value;
      this.advantages = this.character.advantages;
       this.flaws = this.character.flaws;
       this.notes = this.character.notes;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async addsuperficialdamage() {
      if(this.superficialdamage < 10 && this.superficialdamage < this.health ){
      this.superficialdamage = this.superficialdamage + 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value,
        
      )
     
    location.reload()
      } else {
        this.addaggravateddamage()
      }
    },
    async lowersuperficialdamage() {
      if(this.superficialdamage > 0){
      this.superficialdamage = this.superficialdamage - 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
      location.reload()
      }
    },
    async addaggravateddamage() {
      if(this.aggravateddamage < this.health){
      this.aggravateddamage = this.aggravateddamage + 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
      location.reload()
      }
    },
    async loweraggravateddamage() {
      if(this.aggravateddamage > 0 ) {
      this.aggravateddamage = this.aggravateddamage - 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
      location.reload()
      }
    },
    ////////WILLPOWER////////////////////////////////////////////////////////////////
async adddamagedwillpower() {
  if(this.damagewillpower < this.willpower){
      this.damagewillpower = this.damagewillpower + 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
location.reload()
  }
    },
    async lowerdamagedwillpower() {
      if(this.damagewillpower > 0) {
      this.damagewillpower = this.damagewillpower - 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
location.reload()
      }
    },
    /////////////HUNBGER////////////////////////////////////////////
    async addhunger() {
      if(this.hunger < 5){
      this.hunger = this.hunger + 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
location.reload()
      }
    },
    async lowerhunger() {
      if(this.hunger >0){
      this.hunger = this.hunger - 1;
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
        this.hunger,
        this.humanity,
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage,
        this.aggravateddamage,
        this.damagewillpower,
        this.taintedhumanity,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
      location.reload()
      }
    },
  },
};
</script>

<style scoped>
</style>
