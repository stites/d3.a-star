/* UTIL FUNCTIONS */
function rand (n){
  return Math.random() * n;
};

function wallFlag (wallPercent){
  return ~~rand(wallPercent) === 0;
};


