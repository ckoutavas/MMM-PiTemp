const spawn = require("child_process").spawn
var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "GIVE_ME_DATA":
        this.job()
        break
    }
  },
  
  job: function() {
    var process = spawn("python3", ["/home/pi/MagicMirror/modules/PiTemp/temp.py"])
    process.stdout.on("data", (data)=>{
      console.log(data)
      this.sendSocketNotification("HERE_IS_DATA", data.toString())
    })
  }
})
