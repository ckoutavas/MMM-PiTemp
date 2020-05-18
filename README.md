MMM-PiTemp works in conjunction with MagicMirror2 and tells you the temperature of your raspberry pi's CPU. It runs every 60 seconds and is color coded based on the temperature. If the temperature is ever greater than 85 degrees then the pi shuts down.

You can change the color coding for the temperature ranges in the MMM-PiTemp.js file:
```
if (parseFloat(payload) <= 70) {e.style.color = "green";}
	else if (parseFloat(payload) >= 80) {e.style.color = "red";}
	else {e.style.color = "yellow";}
```

Add `{module: "MMM-PiTemp", position: "top_right"},` to your config.js file.

If you want to change the temperature at which the pi shuts down then modify the if statement in the temp.py file
```
if cpu_temp < 85: # change to whatever temp you want
    print(cpu_temp)

# if temp is greater than 85 shut down the pi
else:
    os.system("sudo shutdown -r now")
```

