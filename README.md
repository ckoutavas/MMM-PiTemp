# MMM-PiTemp
MMM-PiTemp works in conjunction with MagicMirror2 and tells you the temperature of your raspberry pi's CPU. It runs every 60 seconds and is color coded based on the temperature. If the temperature is ever greater than 85 degrees then the pi shuts down.

![PiTemp_img](https://github.com/ckoutavas/MMM-PiTemp/blob/master/PiTemp2.png)


![PiTemp_img](https://github.com/ckoutavas/MMM-PiTemp/blob/master/PiTemp.png)

# Config.js
<table>
<tr>
<th>Param</th>
<th>Default Value</th>
<th>Definition</th>
</tr>

<tr>
<td>freq</td>
<td>60000</td>
<td>This is how frequently you want to run the temp.py file, which gets the temperature of the cpu</td>
</tr>

<tr>
<td>high</td>
<td>80</td>
<td>This param is used to assign the color to a range: If cpu_temp is greater than high then lowColor</td>
</tr>

<tr>
<td>low</td>
<td>70</td>
<td>This param is used to assign the color to a range: If cpu_temp is less than low then lowColor</td>
</tr>

<tr>
<td>highColor</td>
<td>"red"</td>
<td>This param is used to assign the color for the high param: If cpu_temp is greater than high then highColor</td>
</tr>

<tr>
<td>lowColor</td>
<td>"green"</td>
<td>This param is used to assign the color for the low param: If cpu_temp is greater than high then highColor</td>
</tr>

<tr>
<td>otherColor</td>
<td>"yellow"</td>
<td>This param is used to assign the color for the else condition: If cpu_temp is less than high AND cpu_temp is greater than low then otherColor</td>
</tr>
</table>

Add `{module: "MMM-PiTemp", position: "top_right", config: {}},` to your `config.js` file. Feel free to modify the `config` param based on the chart above.

# temp.py
Make sure python3 is installed on your raspberry pi and that you have the following packages installed: `os` and `gpiozero` you can install both packages using `pip3` in the terminal: `pip3 install os; pip3 install gpiozero`
If you want to change the temperature at which the pi shuts down then modify the if statement in the temp.py file
```
if cpu_temp < 85: # change to whatever temp you want
    print(cpu_temp)

# if temp is greater than 85 shut down the pi
else:
    os.system("sudo shutdown -r now")
```

