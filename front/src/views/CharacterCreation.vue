<template>
  <div class="container m-5">
    <div class="row">
      <div class="col">
        <div class="form-floating">
          <input
            type="text"
            v-model="name"
            class="form-control"
            id="name"
            placeholder="Character's name"
          />
          <label for="name">Character's name</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input
            type="text"
            v-model="concept"
            class="form-control"
            id="concept"
            placeholder="Concept"
          />
          <label for="concept">Concept</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input
            type="text"
            v-model="predator"
            class="form-control"
            id="predator"
            placeholder="Predator"
          />
          <label for="predator">Predator</label>
        </div>
      </div>
    </div>
    <!-- Ligne 2 -->
    <div class="row">
      <div class="col">
        <div class="form-floating">
          <input
            type="text"
            v-model="chronicle"
            class="form-control"
            id="chronicle"
            placeholder="Chronicle"
          />
          <label for="chronicle">Chronicle</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input
            type="text"
            v-model="ambition"
            class="form-control"
            id="ambition"
            placeholder="Ambition"
          />
          <label for="ambition">Ambition</label>
        </div>
      </div>
      <div class="col">
        <select
          class="form-select form-select-lg"
          aria-label="clan"
          id="clan"
          v-model="clan"
        >
          <option selected>Clan</option>
          <option value="Lasombra">Lasombra</option>
          <option value="Brujah">Brujah</option>
          <option value="Tremere">Tremere</option>
        </select>
      </div>
    </div>
    <!-- Ligne 3 -->
    <div class="row">
      <div class="col">
        <div class="form-floating">
          <input
            type="text"
            v-model="sire"
            class="form-control"
            id="sire"
            placeholder="Sire"
          />
          <label for="sire">Sire</label>
        </div>
      </div>
      <div class="col">
        <div class="form-floating">
          <input
            type="text"
            v-model="desire"
            class="form-control"
            id="desire"
            placeholder="desire"
          />
          <label for="desire">Desire</label>
        </div>
      </div>
      <div class="col">
        <select
          class="form-select form-select-lg"
          aria-label="generation"
          id="generation"
          v-model="generation"
        >
          <option selected>Generation</option>
          <option value="14">14</option>
          <option value="13">13</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
    <div class="mt-3">
      <h3 class="text-danger">Attributes</h3>
      <div class="row">
        <div class="col">
          <p>Strength</p>
          <select
            class="form-select form-select-lg"
            aria-label="strength"
            id="strength"
            v-model="strength"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="col">
          <p>Charisma</p>
          <select
            class="form-select form-select-lg"
            aria-label="charisma"
            id="charisma"
            v-model="charisma"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div class="col">
          <p>Intelligence</p>
          <select
            class="form-select form-select-lg"
            aria-label="intelligence"
            id="intelligence"
            v-model="intelligence"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <!-- ligne2  -->
      <div class="row">
        <div class="col">
          <p>Dexterity</p>
          <select
            class="form-select form-select-lg"
            aria-label="dexterity"
            id="dexterity"
            v-model="dexterity"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="col">
          <p>Manipulation</p>
          <select
            class="form-select form-select-lg"
            aria-label="manipulation"
            id="manipulation"
            v-model="manipulation"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="col">
          <p>Wits</p>
          <select
            class="form-select form-select-lg"
            aria-label="wits"
            id="wits"
            v-model="wits"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <!-- ligne 3 -->
      <div class="row">
        <div class="col">
          <p>Stamina</p>
          <select
            class="form-select form-select-lg"
            aria-label="stamina"
            id="stamina"
            v-model="stamina"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="col">
          <p>Composure</p>
          <select
            class="form-select form-select-lg"
            aria-label="composure"
            id="composure"
            v-model="composure"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="col">
          <p>Resolve</p>
          <select
            class="form-select form-select-lg"
            aria-label="resolve"
            id="resolve"
            v-model="resolve"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <!-- SKILLS/////////////////////////////////////////////////////////////////// -->
      <h3 class="text-danger">Skills</h3>
      <div class="row">
        <div class="col">
          <p>Athletics</p>
          <select
            class="form-select form-select-lg"
            aria-label="athletics"
            id="athletics"
            v-model="athletics"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="athleticsspe"
              class="form-control"
              id="atleticspe"
              placeholder="atleticspe"
            />
            <label for="atleticspe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Animal Ken</p>
          <select
            class="form-select form-select-lg"
            aria-label="animalken"
            id="animalken"
            v-model="animalken"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="animalkenspe"
              class="form-control"
              id="animalkenspe"
              placeholder="animalkenspe"
            />
            <label for="animalkenspe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Academics</p>
          <select
            class="form-select form-select-lg"
            aria-label="academics"
            id="academics"
            v-model="academics"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="academicsspe"
              class="form-control"
              id="academicsspe"
              placeholder="academicsspe"
            />
            <label for="academicsspe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- ligne2  ////////////////////////////////////////////////////////////////////////////-->
      <div class="row">
        <div class="col">
          <p>Brawl</p>
          <select
            class="form-select form-select-lg"
            aria-label="brawl"
            id="brawl"
            v-model="brawl"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="brawlspe"
              class="form-control"
              id="brawlspe"
              placeholder="brawlspe"
            />
            <label for="brawlspe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Etiquette</p>
          <select
            class="form-select form-select-lg"
            aria-label="etiquette"
            id="etiquette"
            v-model="etiquette"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="etiquettespe"
              class="form-control"
              id="etiquettespe"
              placeholder="etiquettespe"
            />
            <label for="etiquettespe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Awareness</p>
          <select
            class="form-select form-select-lg"
            aria-label="awareness"
            id="awareness"
            v-model="awareness"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="awarenessspe"
              class="form-control"
              id="awarenessspe"
              placeholder="awarenessspe"
            />
            <label for="awarenessspe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- ligne 3 ///////////////////////////////////////////////////////////////////////////////-->
      <div class="row">
        <div class="col">
          <p>Craft</p>
          <select
            class="form-select form-select-lg"
            aria-label="craft"
            id="craft"
            v-model="craft"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="craftspe"
              class="form-control"
              id="craftspe"
              placeholder="craftspe"
            />
            <label for="craftspe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Insight</p>
          <select
            class="form-select form-select-lg"
            aria-label="insight"
            id="insight"
            v-model="insight"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="insightspe"
              class="form-control"
              id="insightspe"
              placeholder="insightspe"
            />
            <label for="insightspe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Finance</p>
          <select
            class="form-select form-select-lg"
            aria-label="finance"
            id="finance"
            v-model="finance"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="financespe"
              class="form-control"
              id="financespe"
              placeholder="financespe"
            />
            <label for="financespe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- LIGNE 4///////////////////////////////////////////// -->
      <div class="row">
        <div class="col">
          <p>Drive</p>
          <select
            class="form-select form-select-lg"
            aria-label="drive"
            id="drive"
            v-model="drive"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="drivespe"
              class="form-control"
              id="drivespe"
              placeholder="drivespe"
            />
            <label for="drivespe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Intimidation</p>
          <select
            class="form-select form-select-lg"
            aria-label="intimidation"
            id="intimidation"
            v-model="intimidation"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="intimidationspe"
              class="form-control"
              id="intimidationspe"
              placeholder="intimidationspe"
            />
            <label for="intimidationspe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Investigation</p>
          <select
            class="form-select form-select-lg"
            aria-label="investigation"
            id="investigation"
            v-model="investigation"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="investigationspe"
              class="form-control"
              id="investigationspe"
              placeholder="investigationspe"
            />
            <label for="investigationspe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- LIGNE 5////////////////////////////////////////////// -->
      <div class="row">
        <div class="col">
          <p>Firearms</p>
          <select
            class="form-select form-select-lg"
            aria-label="firearms"
            id="firearms"
            v-model="firearms"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="firearmsspe"
              class="form-control"
              id="firearmsspe"
              placeholder="firearmsspe"
            />
            <label for="firearmsspe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Leadership</p>
          <select
            class="form-select form-select-lg"
            aria-label="leadership"
            id="leadership"
            v-model="leadership"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="leadershipspe"
              class="form-control"
              id="leadershipspe"
              placeholder="leadershipspe"
            />
            <label for="leadershipspe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Medicine</p>
          <select
            class="form-select form-select-lg"
            aria-label="medicine"
            id="medicine"
            v-model="medicine"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="medicinespe"
              class="form-control"
              id="medicinespe"
              placeholder="medicinespe"
            />
            <label for="medicinespe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- LIGNE 6//////////////////////////////////////////////////////////////// -->
      <div class="row">
        <div class="col">
          <p>larceny</p>
          <select
            class="form-select form-select-lg"
            aria-label="larceny"
            id="larceny"
            v-model="larceny"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="larcenyspe"
              class="form-control"
              id="larcenyspe"
              placeholder="larcenyspe"
            />
            <label for="larcenyspe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Performance</p>
          <select
            class="form-select form-select-lg"
            aria-label="performance"
            id="performance"
            v-model="performance"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="performancespe"
              class="form-control"
              id="performancespe"
              placeholder="performancespe"
            />
            <label for="performancespe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Occult</p>
          <select
            class="form-select form-select-lg"
            aria-label="occult"
            id="occult"
            v-model="occult"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="occultspe"
              class="form-control"
              id="occultspe"
              placeholder="occultspe"
            />
            <label for="occultspe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- LIGNE 7/////////////////////////////////////////////////// -->
      <div class="row">
        <div class="col">
          <p>Melee</p>
          <select
            class="form-select form-select-lg"
            aria-label="melee"
            id="melee"
            v-model="melee"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="meleespe"
              class="form-control"
              id="meleespe"
              placeholder="meleespe"
            />
            <label for="meleespe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Persuasion</p>
          <select
            class="form-select form-select-lg"
            aria-label="persuasion"
            id="persuasion"
            v-model="persuasion"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="persuasionspe"
              class="form-control"
              id="persuasionspe"
              placeholder="persuasionspe"
            />
            <label for="persuasionspe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Politics</p>
          <select
            class="form-select form-select-lg"
            aria-label="politics"
            id="politics"
            v-model="politics"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="politicsspe"
              class="form-control"
              id="politicsspe"
              placeholder="politicsspe"
            />
            <label for="politicsspe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- LIGNE8///////////////////////////////////////////////////////////// -->
      <div class="row">
        <div class="col">
          <p>Stealth</p>
          <select
            class="form-select form-select-lg"
            aria-label="stealth"
            id="stealth"
            v-model="stealth"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="stealthspe"
              class="form-control"
              id="stealthspe"
              placeholder="stealthspe"
            />
            <label for="stealthspe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Streetwise</p>
          <select
            class="form-select form-select-lg"
            aria-label="streetwise"
            id="streetwise"
            v-model="streetwise"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="streetwisespe"
              class="form-control"
              id="streetwisespe"
              placeholder="streetwisespe"
            />
            <label for="streetwisespe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Science</p>
          <select
            class="form-select form-select-lg"
            aria-label="science"
            id="science"
            v-model="science"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="sciencespe"
              class="form-control"
              id="sciencespe"
              placeholder="sciencespe"
            />
            <label for="sciencespe">Speciality if any</label>
          </div>
        </div>
      </div>
      <!-- LIGNE 9 -->
      <div class="row">
        <div class="col">
          <p>Survival</p>
          <select
            class="form-select form-select-lg"
            aria-label="survival"
            id="survival"
            v-model="survival"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="survivalspe"
              class="form-control"
              id="survivalspe"
              placeholder="survivalspe"
            />
            <label for="survivalspe">Speciality if any</label>
          </div>
        </div>
        <div class="col">
          <p>Subterfuge</p>
          <select
            class="form-select form-select-lg"
            aria-label="subterfuge"
            id="subterfuge"
            v-model="subterfuge"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="subterfugespe"
              class="form-control"
              id="subterfugespe"
              placeholder="subterfugespe"
            />
            <label for="subterfugespe">Speciality if any</label>
          </div>
        </div>

        <div class="col">
          <p>Technology</p>
          <select
            class="form-select form-select-lg"
            aria-label="technology"
            id="technology"
            v-model="technology"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="technologyspe"
              class="form-control"
              id="technologyspe"
              placeholder="technologyspe"
            />
            <label for="technologyspe">Speciality if any</label>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-danger">Disciplines</h3>
      </div>
      <!-- DISCIPLINES///////////////////////////////////////////////////////////////////////// -->
      <div class="row">
        <div class="col">
          <p>First Discipline</p>
          <select
            class="form-select form-select-lg"
            aria-label="discipline1value"
            id="discipline1value"
            v-model="discipline1value"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="discipline1"
              class="form-control"
              id="discipline1"
              placeholder="discipline1"
            />
            <label for="discipline1">Discipline's Name</label>
          </div>
        </div>
        <div class="col">
          <p>Second Discipline</p>
          <select
            class="form-select form-select-lg"
            aria-label="discipline2value"
            id="discipline2value"
            v-model="discipline2value"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="discipline2"
              class="form-control"
              id="discipline2"
              placeholder="discipline2"
            />
            <label for="discipline2">Discipline's Name</label>
          </div>
        </div>

        <div class="col">
          <p>Third Discipline</p>
          <select
            class="form-select form-select-lg"
            aria-label="discipline3value"
            id="discipline3value"
            v-model="discipline3value"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="form-floating">
            <input
              type="text"
              v-model="discipline3"
              class="form-control"
              id="discipline3"
              placeholder="discipline3"
            />
            <label for="discipline3">Discipline's Name</label>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- END///////////////////////////////////////////////////////////////////////// -->
        <div class="col">
          <p>Health</p>
          <select
            class="form-select form-select-lg"
            aria-label="health"
            id="health"
            v-model="health"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div class="form-floating"></div>
        </div>
        <div class="col">
          <p>Willpower</p>
          <select
            class="form-select form-select-lg"
            aria-label="willpower"
            id="willpower"
            v-model="willpower"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div class="form-floating"></div>
        </div>
      </div>
    </div>
  
    <button v-on:click="createCharacter">Create!</button>
  </div>
</template>

<script>
import CharacterService from "../services/CharacterService";
import VueJwtDecode from "vue-jwt-decode";
import UserService from "../services/UserService";
export default {
  name: "CharacterCreationComponent",
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
      superficialdamage:"",
    aggravateddamage:"",
    damagewillpower:"",
    taintedhumanity:"",
      discipline1value: "",
      discipline2value: "",
      discipline3value: "",
    };
  },

  methods: {
    async createCharacter() {
      if (localStorage.getItem("token") === null) {
        this.$router.push("/login");
      } else {
        // fetch("http://localhost:3000/user",{
        //   method:'GET',
        //   header:{
        //     'Authorization':localStorage.getItem('token')
        //   }
        // }).then(res=>res.json())
        console.log("pas de token");
      }
      const token = localStorage.getItem("token");
      const decoded = VueJwtDecode.decode(token);

      const user = await UserService.getUser(decoded.user._id);
      this.user = user;

      await CharacterService.insertCharacter(
        (this.owner = user._id),
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
        (this.humanity = 7),
        this.discipline1,
        this.discipline2,
        this.discipline3,
        this.superficialdamage=0,
    this.aggravateddamage=0,
    this.damagewillpower=0,
    this.taintedhumanity=0,
        this.discipline1value,
        this.discipline2value,
        this.discipline3value
      );
      this.$router.push("/");
    },
  },
};
</script>


