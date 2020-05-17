MMM-PiTemp tells you the temperature of your raspberry pi's CPU. It runs every 60 seconds and is color coded based on the temperature. If the temperature is ever greater than 85 degrees then the pi shuts down.

You can change the temperature ranges in the MMM-PiTemp.js file:
```
if (parseFloat(payload) <= 70) {e.style.color = "green";}
	else if (parseFloat(payload) >= 80) {e.style.color = "red";}
	else {e.style.color = "yellow";}
```

Add `{module: "MMM-PiTemp", position: "top_right"},` to your config.js file.

