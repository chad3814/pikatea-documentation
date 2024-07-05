# Longboi Assembly Guide

<!-- <div style="background-color: yellow; color: black;">If your product is listed under the "Assembly Guides" on the left, disregard this universal guide and follow the specific one instead.</div> -->

# NOTE This guide is a work in progress

## Flash the MCU

It's important to flash the MCU before starting to make sure it works.

1. Download the .uf2 file for the device from the [firmware list](/DownloadsAndFiles/firmware-download-list.html). 
2. While holding the boot button, plug the MCU into the computer. 
3. Drag the .uf2 file into the new drive that shows up. Confirm the device shows up in VIAL after it disconnects and reconnects.

![](/assets/Longboi/PXL_20240625_150556268.jpg)

## Solder the Diodes

1. Bend a diode and insert it into the PCB being careful it is the correct orientation. The black bar on the diode matches with the thicker white bar on the PCB. 

![](/assets/Longboi/PXL_20240625_151611254.jpg)
![](/assets/Longboi/PXL_20240625_151647797.jpg)

2. After the diode is inserted, bend the leads outwards so it stays in place. Repeat steps 1 and 2 for each diode.

![](/assets/Longboi/PXL_20240625_151709610.jpg)

3. With each diode in place, Solder them to be permanently secured.

![](/assets/Longboi/PXL_20240112_212301245.jpg)

4. Bend the diodes legs straight and use flush cuts to them off. Be careful not to scratch the PCB when doing this.

![](/assets/Longboi/PXL_20240625_155744290.jpg)
![](/assets/Longboi/PXL_20240112_212304293.jpg)


## Stabilizers

1. Install PCB mounted stabilizers. 

They usually screw in but some might clip in. Below are a few links that explain keyboard stabilizers and how to install them. You'll need a stabilizer for each key that is 2u or larger.

- [Stabilizers](https://keyboard.university/100-courses/stabilizers-lcjf2)
- [Using Screw-in Stabilizers](https://keyboard.university/guides/using-screw-in-stabilizers-7nxj6)

![](/assets/Longboi/PXL_20240625_160912815.jpg)

## Trim The Headers

The headers need to be trimmed or the backplate will not fit. 

1. Cut the longer side of the headers in half as shown. It doesn't have to be precise.

![](/assets/Longboi/PXL_20240625_150734085.jpg)
![](/assets/Longboi/PXL_20240625_150813253.jpg)

## Solder MCU

1. Insert the trimmed headers into the PCB.

![](/assets/Longboi/PXL_20240625_151039818.jpg)

2. Add the MCU on top. 

![](/assets/Longboi/PXL_20240625_151052133.jpg)

3. Use a rubber band to hold everything in place.

![](/assets/Longboi/PXL_20240625_162844899.jpg)

4. Solder both sides of the headers to perminently hold everything together.

![](/assets/Universal/solderd-mcu.jpg)

## Switches and Plate

The switches and the plate steps go together. It's your preference on the exact way to do it. If you're new to assembling keyboards, we recommend trying the order outlined

1. Install a few switches into the plate.

![](/assets/Longboi/PXL_20240625_162559952.jpg)

2. Install the plate and switches on the PCB, solder one lead of each switch if it's a soldered board.

![](/assets/KP69/PXL_20221015_192609392.jpg)

3. Verify switches are sitting flush.

4. Insert the remaining switches into the plate.

5. finish soldering all the remaining switches.

![](/assets/Longboi/PXL_20240625_163528461.jpg)

## Rotary Encoders

Next up is the rotary encoder. Prep the rotary encoder by snipping the mounting tabs with snips/flush cuts. Cut the set of 3 pins shorter so they are flush with the bottom of the rotary encoder. Lastly, bend the set of 2 pins so they are pointing straight out with a slight angle. 

![](/assets/GB3/gb3-assembly-12-encoder.jpg)
![](/assets/GB3/gb3-assembly-13-encoder.jpg)
![](/assets/GB3/gb3-assembly-14-encoder.jpg)

Place the rotary encoder in the hole of the top plate and hand tighten the washer and nut to hold it in place for soldering. Don't tighten this with any tools just yet. The washer has a slight bend in it so be careful to place the raised part in the center facing towards the front of the macropad. Use the pictures shown to ensure the correct orientation. 

![](/assets/GB3/gb3-assembly-15-encoder-hardware.jpg)



<div style="text-align: center">(the image shows our macropads but the process is the same)</div>

![](/assets/GB3/gb3-assembly-16-encoder-hardware.jpg)
![](/assets/GB3/gb3-assembly-17-encoder-hardware.jpg)

After the rotary encoder is in place, it is time to solder it. The 2 bent pins on the rotary encoder are resting just above the pads were they need to be soldered to, facing toward the switches. The 3 shorter pins on the rotary encoder are placed just to the side of the pads were they need to be soldered to. **They do not go through the small holes.** Take a look at the picture shown for a better explanation. 

![](/assets/longboi/PXL_20240625_151138210.jpg)

## Test the PCB

1. Plug the finished MCU into the computer and open VIAL. Verify that each switch works by using the matrix tester in VIAL.

<div style="text-align: center">(the images show a different keyboard but the process is the same)</div>

![](/assets/KP69/PXL_20221015_201135868.jpg)

<div style="text-align: center">oops I missed a switch!</div>

![](/assets/KP69/PXL_20221015_201218505.jpg)
![](/assets/KP69/PXL_20221015_201227040.jpg)

## Add gaskets

<div style="background-color: yellow; color: black;">This is where the guide deviates with the 26 inch and the 7ft board. <a href="/AssemblyGuides/longboi-7ft">Please follow this guide for the 7ft version</a></div>

If you are assemblying the acrylic version, you'll add the gaskets to the plate. 

TODO images

## Assemble The Case

### Acrylic
1. peal back the plastic on each acrylic peice.

TODO add photo

2. Start with "back layer 3" as shown

3. Add "back layer 2" as shown

4. Add "back layer 1" as shown

5. Insert M3x16mm bolts into each hole

6. Tip assembly on it's side

7. Attach hex standoffs

8. Add remaining hex standoff with M3x10mm bolts

9. Rotate assembly as shown. Add "USB layer 1" (there is a notch which helps to distinguish from another similar layer). You may need to rotate the hex standoffs so it fits. 

10. Add "USB layer 2". 

11. Add "Mid layer 1" and "Mid layer 2" (These peices are the same)

12. Add the PCB/Plate assembly.

13. Add "top plate 1 and 2". These are the same except for one is completely glossy and one has a matte finish. If you'd prefer a glossy finish, you are more than welcome to use that instead.

14. Add final M3x10mm bolts to complete the assembly.

15. Add keyboard feet

## Add keycaps and knobs

todo photo of knobs

# That's it!

1. Celebrate. It's required.

Check out the [programming guide](/programming.html) to learn more about how to use your device.