fetch('dataset_new.json'     ).then(response => response.json()).then(data => {
//fetch('dataset_original.json').then(response => response.json()).then(data => {
  const container = document.querySelector('#container');
  //BarChartRace is a class within lib_index.js (formerly ../lib/index.js)
  //speed controlled by const FRAMES_PER_PERIOD in lib_index.js
  const stats = new BarChartRace(container, data);

  stats.start();
  window.addEventListener('resize', () => stats.resize());
});
