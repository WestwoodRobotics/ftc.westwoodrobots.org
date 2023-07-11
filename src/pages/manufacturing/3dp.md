---
title: 3d Printing
description: Everything you need to know about 3d printing!
layout: ../../layouts/MainLayout.astro
---
How to 3D print
3D printing is a very useful technology in robotics. It allows you to make a wide variety of custom parts. This document will serve as a guide on what and what not to do when using the school’s 3D printers.


__Underlines like this one are important. Please make sure to read them.__


## Cad
When cading parts to be printed try to avoid overhangs steeper than 50 degrees. They will not print well or need support. However for some parts supports will be unavoidable. How to use them will be covered in slicing.

## Slicing
### Prusa slicer setup

Download: https://www.prusa3d.com/page/prusaslicer_424/
In order to print you will need to install Prusa Slicer. This is where you turn your STL file (what you cadded) into a file the printer can use. Step one is to install it. Go to the link and download the standalone installer (This is important!) Then run it. Click no when it asks for an admin password and it will still install. Once it is installed you can now set it up.

Click the configuration wizard button to get started. There will be a message asking you to install an update click “Don’t Install”.

Go to “Prusa FFF” and click MK3s/+ for the .4 nozzle size

__Do not add any other printers, they will not work.__




Then go to “Filaments” and un-check all boxes except for “Generic PLA” and “Generic PETG”. These are the 2 main filaments we use. If you need to use a different material then please ask Scott or a Director.

Now click finish and set the layer height to “.2mm Quality”. The only hights you should use are .2 and .3 Draft.

Congrats! Your prusa slicer is not set up and you are ready to Import your file.

### Importing
Click the cube with a + to import a file.
Note: This image looks slightly different than on your installation. I am in advanced mode.

Once you have imported your file and selected the proper material (PLA or PETG) click the “Slice now” button on the bottom right.

[Image]

After that it will be replaced with a view of your file and a Export gcode button to send your file to a SD card.

### Supports
Some models may require supports. To do this go to advanced mode and select the brush Icon on the left hand side.

Note: You have to have the object you want to apply them to selected.

Now use the left button click to brush them on your model.

Now select support enforcers only from the drop-down below the filament selection
(click yes on the message that appears.)

Now you can slice it and print.


## 3D printer
### Materials
We use 2 types of materials here at Westwood. PLA and PETG.

PLA is weaker but has cleaner prints.
PETG is stronger but doesn’t look as nice. It is also more prone to having failed prints.

__Make sure your file is sliced for what material you have loaded.__


### Unloading filament
Push down on the dial on the right of the printer and go to “Unload filament” and then select the material that is in the printer. It will beep loudly when it is done and ask you to remove the filament. 

After you unload it, put the in of the filament into a hole in the side of the roll. If you don’t it could tangle.

### Loading filament
Take the end of the filament and gently put it into the hole in the top of the printer until it won’t go down any more. A menu will appear on the screen asking what filament you are loading. (On this menu use PET if you are loading PETG) It will load it and ask you if it is the right color. If it is not, select “no”. Repeat until it is the right color. If it does not extrude gently push the filament down until while it is trying to load. It will grab it and load. If it still does not extrude click “no” a few times so it loads more.

### Printing
Insert the SD card with your file into the left hand side of the printer with the metal bits facing you. 

Take some Isopropyl Alcohol and pour it onto the bed. (a pool about 1.5 inches in diameter) then use one of the rags to wipe it on the rest of the bed. 

__If you are using Printer #2 push the “x” that is below the knob. After it reboots your file will show up. This is the only time you should need to press it.__

Click your file and wait for it to heat up.

__Do not touch the nozzle or bed. They will be hot.__

Make sure the layer sticks to the bed before you leave the printer.

## Stopping / Pausing a print
Press the knob and go down to Stop or Pause print menus. If you pause it you can resume by doing the same thing and selecting the “Resume print” menu.

