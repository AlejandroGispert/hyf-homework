//url
const pokeApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
//declarations
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weightTxt = document.getElementById("weight");
const heightTxt = document.getElementById("height");
const types = document.getElementById("types");
/*
const hpTxt = document.getElementById("hp");
const attackTxt = document.getElementById("attack");
const defenseTxt = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speedTxt = document.getElementById("speed");
*/
//STATS
const hpStat = document.getElementById("hp");
const attackStat = document.getElementById("attack");
const defenseStat = document.getElementById("defense");
const specialAttackStat = document.getElementById("special-attack");
const specialDefenseStat = document.getElementById("special-defense");
const speedStat = document.getElementById("speed");

const screenContainer = document.getElementById("screen");

//FETCH ALL DATA

const fetchAllData = async () => {
  try {
    const res = await fetch(pokeApi);
    const data = await res.json();
  } catch (err) {
    console.log(err);
  }
};
fetchAllData();

const clearAll = () => {
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  weightTxt.textContent = "";
  heightTxt.textContent = "";
  hpStat.textContent = "";
  attackStat.textContent = "";
  defenseStat.textContent = "";
  specialAttackStat.textContent = "";
  specialDefenseStat.textContent = "";
  speedStat.textContent = "";

  types.textContent = "";

  const imgExists = screenContainer.querySelector("img") !== null;
  if (imgExists) {
    screenContainer.removeChild(screenContainer.lastChild);
  }

  //Then call the function that makes all happen
  pokemonFinder();
};

const pokemonFinder = () => {
  //check if pokemon exist
  //fetch
  const fetchPokeDatabase = async () => {
    try {
      const res = await fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`
      );
      const data = await res.json();
      dataPrintFunction(data);
    } catch (err) {
      console.log(err);
      alert("Pokémon not found");
    }
  };
  fetchPokeDatabase();

  //
  const dataPrintFunction = (data) => {
    const { base_experience, height, id, name } = data;

    //function tath get a stats.stat nameand returns value at "base_stat" key
    const statsValueFetcher = (statToSearch) => {
      if (statToSearch === "weight") {
        return data.weight;
      } else {
        for (let i = 0; i < data.stats.length; i++) {
          let foundStatLoop = data.stats[i];
          let foundStatNames = foundStatLoop.stat.name;

          //console.log(foundStatNames)
          if (foundStatNames === statToSearch) {
            return foundStatLoop.base_stat;
          }
        }
      }
    };

    //console.log(statsValueFetcher("attack"))

    pokemonName.textContent += name.toUpperCase();
    pokemonId.textContent += id;
    weightTxt.textContent += statsValueFetcher("weight");
    heightTxt.textContent += height;

    hpStat.textContent += statsValueFetcher("hp");
    attackStat.textContent += statsValueFetcher("attack");
    defenseStat.textContent += statsValueFetcher("defense");
    specialAttackStat.textContent += statsValueFetcher("special-attack");
    specialDefenseStat.textContent += statsValueFetcher("special-defense");
    speedStat.textContent += statsValueFetcher("speed");

    //types
    if (data.types.length > 1) {
      types.innerHTML += `<h4>${data.types[0].type.name.toUpperCase()}</h4>`;
      types.innerHTML += `<h4>${data.types[1].type.name.toUpperCase()}</h4>`;
    } else {
      types.innerHTML += `<h4>${data.types[0].type.name.toUpperCase()}</h4>`;
      //console.log(data.types[0].type.name)
    }
    /*   screenContainer.innerHTML += `<img src="${
      data.sprites.front_default
    }" width="50px" id="sprite"/>`; */

    //screenContainer.appendChild(document.createElement("img")this didnt work, new method works
    let finalImg = document.createElement("img");
    finalImg.src = `${data.sprites.front_default}`;
    finalImg.id = "sprite";
    finalImg.width = "50";
    screenContainer.appendChild(finalImg);
  };
};

//----------last-------
searchButton.addEventListener("click", clearAll);
