document.querySelectorAll('#nav').forEach((e) => {
    e.innerHTML = `<div class="topnav">
    <a href="../index.html">Home</a>
    <a href="./exoplanets.html">Exoplanets</a>
    <a href="./hubblespacetelescope.html">Hubble Space Telescope</a>
    <a href="./haleboppcomet.html">Hale Bopp Commet</a>
    <a href="./dwarfplanet.html">Dwarf Planet</a>
    <a href="./constellation.html">Consetellation</a>
    <a href="./galaxy.html">Galaxies</a>  
    <a href="./iss.html">ISS</a>
    <a href="./rover.html">Rover</a>
    <a href="./asteroidbelt.html">Asteroid Belt</a>
    <a href="./NAVIC-satellite.html">NavIC</a>
    <a href="./quiz.html">Quiz</a>
    <a href="./facts.html">Facts</a>


    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
    </div>
    `
})


function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
