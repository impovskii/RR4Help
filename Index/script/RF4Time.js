const hoursEL = document.getElementById("hours");
const minEL = document.getElementById("minutes");
const dtEL = document.getElementById("dt");
const DayEL = document.getElementById("Day");
let RRminutes = 0;

const setTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let mintosec = minutes * 60 + seconds;
  let RRhours;

  if ((mintosec >= 0) & (mintosec <= 150)) {
    RRhours = 0;
  }

  if ((mintosec >= 150) & (mintosec <= 300)) {
    RRhours = 1;
  }

  if ((mintosec >= 300) & (mintosec <= 450)) {
    RRhours = 2;
  }

  if ((mintosec >= 450) & (mintosec <= 600)) {
    RRhours = 3;
  }

  if ((mintosec >= 600) & (mintosec <= 750)) {
    RRhours = 4;
  }

  if ((mintosec >= 750) & (mintosec <= 900)) {
    RRhours = 5;
  }

  if ((mintosec >= 900) & (mintosec <= 1050)) {
    RRhours = 6;
  }

  if ((mintosec >= 1050) & (mintosec <= 1200)) {
    RRhours = 7;
  }

  if ((mintosec >= 1200) & (mintosec <= 1350)) {
    RRhours = 8;
  }

  if ((mintosec >= 1350) & (mintosec <= 1500)) {
    RRhours = 9;
  }

  if ((mintosec >= 1500) & (mintosec <= 1650)) {
    RRhours = 10;
  }

  if ((mintosec >= 1650) & (mintosec <= 1800)) {
    RRhours = 11;
  }

  if ((mintosec >= 1800) & (mintosec <= 1950)) {
    RRhours = 12;
  }

  if ((mintosec >= 1950) & (mintosec <= 2100)) {
    RRhours = 13;
  }

  if ((mintosec >= 2100) & (mintosec <= 2250)) {
    RRhours = 14;
  }

  if ((mintosec >= 2250) & (mintosec <= 2400)) {
    RRhours = 15;
  }

  if ((mintosec >= 2400) & (mintosec <= 2550)) {
    RRhours = 16;
  }

  if ((mintosec >= 2550) & (mintosec <= 2700)) {
    RRhours = 17;
  }

  if ((mintosec >= 2700) & (mintosec <= 2850)) {
    RRhours = 18;
  }

  if ((mintosec >= 2850) & (mintosec <= 3000)) {
    RRhours = 19;
  }

  if ((mintosec >= 3000) & (mintosec <= 3150)) {
    RRhours = 20;
  }

  if ((mintosec >= 3150) & (mintosec <= 3300)) {
    RRhours = 21;
  }

  if ((mintosec >= 3300) & (mintosec <= 3450)) {
    RRhours = 22;
  }

  if ((mintosec >= 3450) & (mintosec <= 3600)) {
    RRhours = 23;
  }

  if (
    mintosec == 0 ||
    mintosec == 150 ||
    mintosec == 300 ||
    mintosec == 450 ||
    mintosec == 600 ||
    mintosec == 750 ||
    mintosec == 900 ||
    mintosec == 1050 ||
    mintosec == 1200 ||
    mintosec == 1350 ||
    mintosec == 1500 ||
    mintosec == 1650 ||
    mintosec == 1800 ||
    mintosec == 1950 ||
    mintosec == 2100 ||
    mintosec == 2250 ||
    mintosec == 2400 ||
    mintosec == 2550 ||
    mintosec == 2700 ||
    mintosec == 2850 ||
    mintosec == 3000 ||
    mintosec == 3150 ||
    mintosec == 3300 ||
    mintosec == 3450
  ) {
    RRminutes = 0;
  }

  if (RRhours <= 8) {
    DayEL.src = "img/Day_Logo.svg";
  }

  if (RRhours >= 20) {
    DayEL.src = "img/Moon_Logo.svg";
  }

  // 01:01
  if ((RRhours >= 0) & (RRminutes >= 0)) {
    hoursEL.innerHTML = `0${RRhours}:0${RRminutes}`;
  }
  // 01:10
  if ((RRhours >= 0) & (RRminutes >= 10)) {
    hoursEL.innerHTML = `0${RRhours}:${RRminutes}`;
  }
  // 10:01
  if ((RRhours >= 10) & (RRminutes < 10)) {
    hoursEL.innerHTML = `${RRhours}:0${RRminutes}`;
  }
  // 10:10
  if ((RRhours >= 10) & (RRminutes >= 10)) {
    hoursEL.innerHTML = `${RRhours}:${RRminutes}`;
  }
};

setInterval(setTime, 1000);

let RRminId = setInterval(function () {
  ++RRminutes;
  console.log(RRminutes);
}, 2500);
