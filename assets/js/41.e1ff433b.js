(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{320:function(t,e,a){"use strict";a.r(e);var s=a(14),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"pikatea-macropad-r26-desktop-kit-assembly-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pikatea-macropad-r26-desktop-kit-assembly-guide"}},[t._v("#")]),t._v(" Pikatea Macropad R26 Desktop Kit Assembly Guide")]),t._v(" "),e("p",[t._v("Congratulations on receiving your Pikatea Macropad R26 Desktop Kit. This guide will walk you through the assembly process. Please email support or ask on Discord if you have any questions.")]),t._v(" "),e("p",[t._v("Here is a video for those that prefer it. (This is for the round 1 version but the concepts still apply!)")]),t._v(" "),e("center",[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/H_TdUE3AGE4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),e("h2",{attrs:{id:"looking-for-the-round-1-assembly-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#looking-for-the-round-1-assembly-guide"}},[t._v("#")]),t._v(" Looking for the Round 1 Assembly Guide?")]),t._v(" "),e("p",[t._v("This assembly guide is for round 2 macropad (shipped in August 2022). If you are looking for round 1 (the R26 without LED support), you can find it here.\n"),e("RouterLink",{attrs:{to:"/AssemblyGuides/pikatea-macropad-r26-desktop-kit-assembly-guide.html"}},[t._v("R26 round 1 guide")])],1),t._v(" "),e("h2",{attrs:{id:"what-s-in-the-box"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-s-in-the-box"}},[t._v("#")]),t._v(" What's in the Box")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_221258475.jpg",alt:"Image of items"}})]),t._v(" "),e("h3",{attrs:{id:"all-orders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-orders"}},[t._v("#")]),t._v(" All Orders")]),t._v(" "),e("ul",[e("li",[t._v("(1) FR4 Top plate")]),t._v(" "),e("li",[t._v("(1) Circuit board")]),t._v(" "),e("li",[t._v("(1) Acrylic Backplate")]),t._v(" "),e("li",[t._v("(1) Arduino Pro Micro with headers")]),t._v(" "),e("li",[t._v("(1) Rotary encoder with hardware (washer and nut)")]),t._v(" "),e("li",[t._v("(1) 1/16th inch Allen wrench")]),t._v(" "),e("li",[t._v("(1) Hardware")]),t._v(" "),e("li",[t._v("(2) Rubber feet")])]),t._v(" "),e("h3",{attrs:{id:"some-orders-optional-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#some-orders-optional-items"}},[t._v("#")]),t._v(" Some Orders/Optional Items")]),t._v(" "),e("ul",[e("li",[t._v("(8) Mechanical keyboard switches")]),t._v(" "),e("li",[t._v("(8) Keycaps")]),t._v(" "),e("li",[t._v("(1) Knob")])]),t._v(" "),e("h3",{attrs:{id:"_3d-printed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3d-printed"}},[t._v("#")]),t._v(" 3D printed")]),t._v(" "),e("ul",[e("li",[t._v("(1) Shard or Flat style case")]),t._v(" "),e("li",[t._v("(1) Set of brackets")])]),t._v(" "),e("h2",{attrs:{id:"_3d-print-parts-if-necessary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3d-print-parts-if-necessary"}},[t._v("#")]),t._v(" 3D Print Parts If Necessary")]),t._v(" "),e("p",[t._v("You may have opted to 3D print the case yourself. "),e("RouterLink",{attrs:{to:"/DownloadsAndFiles/downloadable-files.html#firmware-files"}},[t._v("Here are files")]),t._v(" under R26. You'll need to print a case (either flat or shard) and a set of brackets.")],1),t._v(" "),e("p",[t._v("CAD files are provided so feel free to modify and make your own designs.")]),t._v(" "),e("h2",{attrs:{id:"gather-required-materials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gather-required-materials"}},[t._v("#")]),t._v(" Gather Required Materials")]),t._v(" "),e("p",[t._v("You will need everything that comes with the kit as well as a few other items. Those additional items include:")]),t._v(" "),e("ul",[e("li",[t._v("Soldering iron and solder")]),t._v(" "),e("li",[t._v("2mm allen wrench")]),t._v(" "),e("li",[t._v("Flush cut snips")]),t._v(" "),e("li",[t._v("wire cutters")]),t._v(" "),e("li",[t._v("Pliers, adjustable wrench or 10mm size socket/wrench for the rotary encoder hardware.")]),t._v(" "),e("li",[t._v("Roll of tape (any kind will do)")])]),t._v(" "),e("p",[t._v("Now that you have everything you need, lets get started!")]),t._v(" "),e("h2",{attrs:{id:"flash-the-pro-micro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flash-the-pro-micro"}},[t._v("#")]),t._v(" Flash the Pro Micro")]),t._v(" "),e("p",[t._v("You will want to flash the Pro Micro before any soldering to make sure that it works. Plug it into your computer using a USB-C cable.")]),t._v(" "),e("p",[t._v("We already have a "),e("RouterLink",{attrs:{to:"/guide/hex-firmware.html"}},[t._v("generic guide for flashing .hex firmware")]),t._v(". Follow that guide and use the R26 Desktop (round 2) firmware which can be downloaded from the "),e("RouterLink",{attrs:{to:"/DownloadsAndFiles/firmware-download-list.html"}},[t._v("Firmware download list")]),t._v(". Since there is no reset button on the Pro Micro, reset the device by connecting the pins RESET and GND with a metal object (a bent paper clip works well). "),e("a",{attrs:{href:"https://get.vial.today",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install Vial"),e("OutboundLink")],1),t._v(" and make sure your computer recognizes the device as a R26 Desktop before moving on.")],1),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26/DSC08955.JPG",alt:""}})]),t._v(" "),e("p",[t._v("While "),e("strong",[t._v("technically")]),t._v(" this step can be done later, it's highly recommended to test the pro micro before soldering it with the kit. It will save lots of time while assembling. Contact support or ask in our Discord if you are having issues with this step.")]),t._v(" "),e("h2",{attrs:{id:"prepare-the-circuit-board"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-circuit-board"}},[t._v("#")]),t._v(" Prepare the Circuit Board")]),t._v(" "),e("p",[t._v("Heres a quick video of this step!\n"),e("center",[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/TcwzeGnfsL4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),t._v(" "),e("p",[t._v("Let's begin by preparing the PCB or Circuit Board. Please pay attention to the orientation of components.")]),t._v(" "),e("h3",{attrs:{id:"trim-the-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trim-the-headers"}},[t._v("#")]),t._v(" Trim The Headers")]),t._v(" "),e("p",[t._v("The headers need to be trimmed or the backplate will not fit. Cut the longer side of the headers in half as shown. It doesn't have to be precise. Cut one of the headers into 2 sets of 5 so that you have one 12pin header and two 5pin headers.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26/DSC00124.JPG",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26/DSC00126.JPG",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_221456438.jpg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"solder-the-pro-micro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solder-the-pro-micro"}},[t._v("#")]),t._v(" Solder The Pro Micro")]),t._v(" "),e("p",[t._v('With the Pro Micro confirmed to be working, let\'s go ahead and install it. Please pay special attention to the orientation of the Pro Micro. Insert the headers with the "cut" side facing you. Place the Pro Micro on top as shown.')]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_221531399.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_221602391.jpg",alt:""}})]),t._v(" "),e("p",[t._v("Use a rubber band to hold it in place and solder the 4 corners of each side.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_221809087.jpg",alt:""}})]),t._v(" "),e("p",[t._v("Remove the rubber band and finish soldering the headers. With that, the PCB is done! Verify with the pictures below.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_221957121.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222000402.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"install-the-switches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-switches"}},[t._v("#")]),t._v(" Install The Switches")]),t._v(" "),e("p",[t._v("Press the switches into the FR4 plate. Make sure they all face the same direction. Ensure each switch pin is a straight as possible.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222203175.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222207008.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222239980.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"attach-the-pcb-to-the-plate-switches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attach-the-pcb-to-the-plate-switches"}},[t._v("#")]),t._v(" Attach The PCB To The Plate/Switches")]),t._v(" "),e("p",[t._v("Place the PCB on the switches. It may actually be easier to remove the switches and install them one at a time if you prefer.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222256301.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222300442.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"prep-and-install-the-encoder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prep-and-install-the-encoder"}},[t._v("#")]),t._v(" Prep And Install The Encoder")]),t._v(" "),e("p",[t._v("It's a lot easier to install the encoder if parts of it are trimmed off. While this is not strictly necessary, it's recommended. Cut and bend the encoder as shown.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26/DSC00149.JPG",alt:""}})]),t._v(" "),e("p",[t._v("Place the encoder in the plate/PCB and secure it with the included hardware. Do not fully tighten the encoder until AFTER soldering it in place. Adjust the encoder so that it is centered and straight.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222536405.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222746371.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R2r2/PXL_20220824_222819245.jpg",alt:""}}),t._v("\n6\nUse the case to hold the PCB assembly so that it does not wobble while soldering. Start with the 2 button pins and move to the A, GND, and B pins. You can bend the A, GND, and B pins if you feel it is necessary.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_222920896.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223004152.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223027441.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223047696.jpg",alt:""}})]),t._v(" "),e("p",[t._v("Fully tighten the encoder. We recommend hand tightening with a 10mm socket.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223121253.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"verify-the-pcb-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-pcb-works"}},[t._v("#")]),t._v(" Verify The PCB Works")]),t._v(" "),e("p",[t._v("Open Vial again. The R26 should show up. Go to matrix tester and test each button. (The matrix tester will not show the knob actions but you can verify it works because it's mapped to volume control by default)")]),t._v(" "),e("h2",{attrs:{id:"add-the-knob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-the-knob"}},[t._v("#")]),t._v(" Add The Knob")]),t._v(" "),e("p",[t._v("In our opinion, it's best to add the knob now. The knob sits lower if added now but please keep in mind the setscrew will be covered by the case so if you plan on removing the knob, you'll have to remove the case. This doesn't take too long and we think it's worth the effort. You can add the knob later if you like.")]),t._v(" "),e("p",[t._v("Attach the knob to the flat part of the shaft if the knob you are using has a setscrew. Screw it into place.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223133470.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223149460.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223206399.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"add-the-case"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-the-case"}},[t._v("#")]),t._v(" Add The Case")]),t._v(" "),e("p",[t._v("With the Plate and PCB together, it's time to install the case. Use the included M2.5x10mm bolts and printed brackets to secure the plate to the case. We recommend using a roll of tape to prevent the device from wobbling. Start with the two side brackets and loosely put them in place. Adjust the PCB/plate so the knob and switches are as close to center as possible. Fully tighten the side brackets when you are satisfied with the alignment. "),e("strong",[t._v("Be sure not to over tighten, error on the side of too loose")]),t._v(". Add the remaining top and bottom brackets.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223232507.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223240804.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223254159.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223501207.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223517358.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223537333.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"install-the-keycaps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-keycaps"}},[t._v("#")]),t._v(" Install The Keycaps")]),t._v(" "),e("p",[t._v("Install the keycaps onto the switches. Verify everything is lined up how you like. If you need to make an adjustment, loosen the brackets, make the adjustment and tighten them back down.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223711311.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"add-the-backplate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-the-backplate"}},[t._v("#")]),t._v(" Add The Backplate")]),t._v(" "),e("p",[t._v("Install the acrylic or 3D printed backplate using the M3x8mm button head screws. Get each screw started before tightening them down. "),e("strong",[t._v("Again, Error on the side of too loose (the acrylic can crack!)")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223839257.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_223911280.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_224022686.jpg",alt:""}})]),t._v(" "),e("p",[t._v("Add the rubber feet where you'd like.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets/R26r2/PXL_20220824_224052399.jpg",alt:""}}),t._v(" "),e("img",{attrs:{src:"/assets/R26/DSC00181.JPG",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"done"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[t._v("#")]),t._v(" Done")]),t._v(" "),e("p",[t._v("That's it! You've built the Pikatea Macropad R26. Head over to the "),e("RouterLink",{attrs:{to:"/programming.html"}},[t._v("programming guide")]),t._v(" for instructions on programming and usage")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);