const timeZones = {
    newyork: "America/New_York",
    london: "Europe/London",
    tokyo: "Asia/Tokyo",
    sydney: "Australia/Sydney",
  };
  
  function updateClock(id, timeZone) {
    const now = new Date().toLocaleString("en-US", { timeZone });
    const date = new Date(now);
  
    const day = date.toLocaleString("en-US", { weekday: "long" });
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    document.querySelector(`#${id} .clock-day`).textContent = day;
    document.querySelector(`#${id} .clock-hours`).textContent = hours;
    document.querySelector(`#${id} .clock-minutes`).textContent = minutes;
    document.querySelector(`#${id} .clock-seconds`).textContent = seconds;
  }
  
  function updateClocks() {
    Object.keys(timeZones).forEach((id) => {
      updateClock(id, timeZones[id]);
    });
  }
  
  setInterval(updateClocks, 1000);
  updateClocks();
  