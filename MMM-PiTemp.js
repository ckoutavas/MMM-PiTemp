Module.register("PiTemp", {

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

        }, 60000)

        break

    }

  },

  socketNotificationReceived: function(notification, payload) {


    switch(notification) {

      case "HERE_IS_DATA":

        var e = document.getElementById("DISPLAY")
	if (parseFloat(payload) <= 70) {e.style.color = "green";}
	else if (parseFloat(payload) >= 80) {e.style.color = "red"}
	else {e.style.color = "yellow"}

        e.innerHTML = "CPU: " + payload.toString() + "°C";
        break;

    }

  },

})
