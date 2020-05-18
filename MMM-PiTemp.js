Module.register("PiTemp", {
	
  defaults: {
    freq: 60000,
    high: 80,
    low: 70,
    highColor: "red",
    lowColor: "green",
    otherColor: "yellow"
  },

  getDom: function() {

    var e = document.createElement("div")

    e.id = "DISPLAY"

    return e

  },

  notificationReceived: function(notification, payload, sender) {

    switch(notification) {

      case "DOM_OBJECTS_CREATED":

        var timer = setInterval(()=>{

          this.sendSocketNotification("GIVE_ME_DATA")

        }, this.config.freq)

        break

    }

  },

  socketNotificationReceived: function(notification, payload) {


    switch(notification) {

      case "HERE_IS_DATA":

        var e = document.getElementById("DISPLAY")
	if (parseFloat(payload) <= this.config.low) {e.style.color = this.config.lowColor;}
	else if (parseFloat(payload) >= this.config.high) {e.style.color = this.config.HighColor}
	else {e.style.color = this.config.otherColor}

        e.innerHTML = "CPU: " + payload.toString() + "°C";
        break;

    }

  },

})
