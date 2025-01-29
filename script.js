function updateTime() {
    const utcTime = new Date().toUTCString();
    document.getElementById("utc-time").innerText = `Current UTC Time: ${utcTime}`;
}

updateTime();
