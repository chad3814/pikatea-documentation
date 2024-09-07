(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{358:function(e,t,o){"use strict";o.r(t);var a=o(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"software-audio-mixing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-audio-mixing"}},[e._v("#")]),e._v(" Software Audio Mixing")]),e._v(" "),t("p",[e._v("Control the volume of programs independent of each other to get the perfect sound mix.")]),e._v(" "),t("h2",{attrs:{id:"method-1-actual-solution-power-mixer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-1-actual-solution-power-mixer"}},[e._v("#")]),e._v(" Method 1 - Actual Solution Power Mixer")]),e._v(" "),t("p",[e._v("Use the software from "),t("a",{attrs:{href:"https://actualsolution.com/power-mixer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("actualsolution called power mixer"),t("OutboundLink")],1),e._v(". It's a paid program ($17.95) but includes a free trial and is definitely worth the price. Setup your macropad to switch between layers with buttons so that the knob activates different hotkeys which then controls different program volumes.")]),e._v(" "),t("h2",{attrs:{id:"method-2-midi-mixer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-2-midi-mixer"}},[e._v("#")]),e._v(" Method 2 - Midi-Mixer")]),e._v(" "),t("p",[e._v('Use the Midi firmware and "Midi-mixer" together to control software audio independently. Control up to 8 sources with each encoder. Midi firmware can be found on the '),t("RouterLink",{attrs:{to:"/DownloadsAndFiles/firmware-download-list.html"}},[e._v("Firmware page")]),e._v(" for your macropad or device.")],1),e._v(" "),t("center",[t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/wpA1vrWgPRY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h2",{attrs:{id:"method-3-volume-squard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-3-volume-squard"}},[e._v("#")]),e._v(" Method 3 - Volume Squard")]),e._v(" "),t("p",[e._v("Download Volume Squared "),t("a",{attrs:{href:"https://github.com/irzyxa/Volume2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Volume²"),t("OutboundLink")],1),e._v(', downloading the right one for install. Download and follow the installation instructions. Once you do that, load up the settings of the app. In the main window, to get the most accurate volume control set the "Control Method" to Logarithmic, with the steps being 100. On top it will have a selection for the audio device you want to use, setting that to whatever you decide to control the volume from. That will be set to Windows Default as default. There is a selection you can do for "Change Volume For", which if set to application list, you press the gear, and add programs either via the process that is running or by navigating to the file location. This will then change the default windows volume changing over to the program you have selected. Once you do that, to change windows volume as a whole, hold down shift + use the volume knob. This will now allow you to control the volume off apps separate when they are opened up.')]),e._v(" "),t("h2",{attrs:{id:"method-4-ahk-and-nircmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-4-ahk-and-nircmd"}},[e._v("#")]),e._v(" Method 4 - AHK and NirCmd")]),e._v(" "),t("p",[e._v("You'll need to install two programs to do this, "),t("strong",[e._v("AutoHotKey")]),e._v(", and "),t("strong",[e._v("NirCmd")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"download-nircmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-nircmd"}},[e._v("#")]),e._v(" Download NirCmd")]),e._v(" "),t("p",[e._v("Download the 64-bit version of NirCmd from "),t("a",{attrs:{href:"https://www.nirsoft.net/utils/nircmd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.nirsoft.net/utils/nircmd.html"),t("OutboundLink")],1),e._v(". The download is at the bottom of the page.")]),e._v(" "),t("p",[e._v("(Note: Like all good Windows utilities, the website looks like something from 1995...)")]),e._v(" "),t("p",[e._v('Copy the "NirCmd.exe" executable in the zip file you downloaded to your C:/Windows directory. You\'ll need admin permissions')]),e._v(" "),t("h4",{attrs:{id:"setup-autohotkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-autohotkey"}},[e._v("#")]),e._v(" Setup AutoHotKey")]),e._v(" "),t("p",[e._v("Install autohotkey and create a script. "),t("a",{attrs:{href:"#installing-and-using-autohotkey"}},[e._v("View the guide for getting started with AHK")]),e._v(". Give it a meaningful title. Let's configure the macropad before editing the script.")]),e._v(" "),t("h4",{attrs:{id:"configure-the-macropad"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-macropad"}},[e._v("#")]),e._v(" Configure the Macropad")]),e._v(" "),t("p",[e._v("The setup for the pad is simple. Map every key to something you won't ever use. I like setting the five keys on my macropad to F13, F14... and so on. These are essentially dummy keystrokes, and their only function is to be caught by our AutoHotKey script.")]),e._v(" "),t("p",[e._v("As for the knob, you can either map it to volume up/down or dummy keystrokes, depending on whether you want the knob to control system volume when you don't have anything pressed or not. I'm going to go with volume up/down for this script.")]),e._v(" "),t("h4",{attrs:{id:"edit-autohotkey-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edit-autohotkey-script"}},[e._v("#")]),e._v(" Edit AutoHotKey Script")]),e._v(" "),t("p",[e._v("Right click and edit the script you created earlier. Go ahead and remove everything that is already there.")]),e._v(" "),t("p",[e._v("First place this at the top of the file.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#NoEnv\n#Warn\n#SingleInstance, Force\n#MaxHotkeysPerInterval 2000\n")])])]),t("p",[e._v("And then the useful bit.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("F13 & Volume_Down:: Run, nircmd changeappvolume firefox.exe -0.05\nF13 & Volume_Up::Run, nircmd changeappvolume firefox.exe +0.05\n")])])]),t("p",[e._v("In the above script, holding the F13 key (i.e. whichever key we mapped on the pad to send F13) and turning the knob (volume down or up, again, like we've set it on the pad), will trigger a the nircmd command to change the application volume for firefox.exe by an interval of 0.05.")]),e._v(" "),t("p",[e._v("Copy and paste for each key, changing the application name each time to suit. You can also do multiple apps at once. The 'return' at the end just closes off the command, so don't forget to include it!")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("F15 & Volume_Down::\n\tRun, nircmd changeappvolume spotify.exe -0.05\n\tRun, nircmd changeappvolume winamp.exe -0.05\n\tRun, nircmd changeappvolume itunes.exe -0.05\nreturn\nF15 & Volume_Up::\n\tRun, nircmd changeappvolume spotify.exe +0.05\n\tRun, nircmd changeappvolume winamp.exe +0.05\n\tRun, nircmd changeappvolume itunes.exe +0.05\nreturn\n")])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);