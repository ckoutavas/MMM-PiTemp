from gpiozero import CPUTemperature
import os

# get cpu temp of pi
cpu_temp = round(CPUTemperature().temperature, 1)
# print temp if less than 85 degrees
if cpu_temp < 85:
    print(cpu_temp)

# if temp is greater than 85 shut down the pi
else:
    os.system("sudo shutdown -r now")
    
