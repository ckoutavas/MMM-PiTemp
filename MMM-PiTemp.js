Module.register("MMM-PiTemp", {
	defaults: {
		tempUnit: "C",
    		freq: 60000,
    		high: 80,
    		low: 70,
    		highColor: "red",
    		lowColor: "green",
    		otherColor: "yellow",
		label: "CPU:"
	},
	
	start: function() {
   		this.sendSocketNotification("get_temp");
  	},

  	getDom: function() {
		var e = document.createElement("div")
   		e.id = "pi_temp"
		return e
	},

 	 notificationReceived: function(notification, payload, sender) {
	 	switch(notification) {
      			case "DOM_OBJECTS_CREATED":
        		var timer = setInterval(()=>{
				this.sendSocketNotification("get_temp")
        		}, this.config.freq)
        		break
    		}
	},

  	socketNotificationReceived: function(notification, payload) {
		switch (notification) {
			case "temperature":
				var e = document.getElementById("pi_temp");
				if (parseFloat(payload) <= this.config.low) {
					e.style.color = this.config.lowColor;
				} else if (parseFloat(payload) >= this.config.high) {
					e.style.color = this.config.highColor;
				} else {
					e.style.color = this.config.otherColor;
				}

				var temp;
				if (this.config.tempUnit === "C") {
					temp = payload.toString() + "°C";
				} else {
					temp = (payload * (9 / 5) + 32).toFixed(1).toString() + "°F";
				}
				e.innerHTML = this.config.label + " " + temp;
				break;
		}
  	},
})
