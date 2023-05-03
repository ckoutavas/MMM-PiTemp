const spawn = require("child_process").spawn
var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "get_temp":
        this.job()
        break
    }
  },
  
  job: function() {
    var process = spawn("python3", [__dirname + "/temp.py"])
    process.stdout.on("data", (data)=>{
      console.log(data)
      this.sendSocketNotification("temperature", data.toString())
    })
  }
})
