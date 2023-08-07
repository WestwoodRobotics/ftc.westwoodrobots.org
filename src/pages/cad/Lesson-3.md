---
title: Lesson 3 - Assemblies
description: Lesson 3 is the introduction to assemblies, importing parts, and basic mates.
layout: ../../layouts/MainLayout.astro
---

## Inserting Parts and Assemblies
  To access the same parts we have in the ftc closet, we have the FTC Parts List. This section will explain how to insert parts from that folder or from any of your other documents.  

  To insert a part, first click the "Insert" button at the top left of the screen. Alternately, you can press the "s" key and click the top left image on the panel that pops up.

![Insert Button Being Pressed](https://raw.githubusercontent.com/WestwoodRobotics/wwroboftc/a7afa2cfaa397785d1d404d625a2f96546ec7051/src/images/CAD/Lesson-3/insert-button-pressed.png)

  The "Inserting Parts and Assemblies" window starts on the "Current Document" tab by default, so if you are only trying to import a part or assembly from the document you are currently on, you can skip to [Inserting the Part](#inserting-the-part). Otherwise, if you are trying to insert a part or assembly from the FTC Parts List, go to the "Other Documents" tab.
![Insert Button Being Pressed](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/insert-parts-and-assemblies.jpg?raw=true)

 From the Other Documents tab, navigate to "FTC Robotics Parts Users", which has most of the ftc parts supplied by major FTC part vendors such as goBILDA and REV Robotics.
![Other Documents tab with FTC Robotics Parts Users selected](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/other-documents.jpg?raw=true)

From here, you can navigate through these folders to find the part you want to insert. I am going to show the way to insert a 5203 Series Yellow Jacket Planetary Gear Motor &mdash; a motor often used in our robot designs &mdash; and the exact path will be different for inserting different parts.  
![FTC Robotics Parts Users with goBILDA selected](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/Insert-FTC-Parts-List.jpg?raw=true)
![goBILDA folder with MOTION selected](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/goBILDA.jpg?raw=true)
![MOTION folder with Motors selected](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/motion.jpg?raw=true)
![Motors folder with the 5203 yadda yadda Motor selected](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/le-motor.jpg?raw=true)


### Inserting the Part
  Once you have found the part you want to insert, click on it and move your cursor onto your assembly. A yellow preview of the item will appear on your cursor which can be inserted with a left click. When you have inserted the part, hit the check mark to confirm the insertion. Clicking the X or hitting the Esc key will result in the insertion being canceled, though a popup will allow you 30 seconds to restore the insertion and revert any accidental cancels.
![Inserting Assembly step-by-step Diagram](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/Inserting%20Assembly.jpg?raw=true)

## Mates/Constraints
Mates are geometric constraints that define an object's position and the ways it can move in relation to faces, edges, or vertices.

As you hover over an entity, a circle indicator will appear to indicate the actual position and alignment of the connector.  
![Centered Indicator](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/centered-indicator.jpg?raw=true)
![Edge Connector](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/edge-indicator.jpg?raw=true)
![Corner Connector](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/corner-indicator.jpg?raw=true)

### Fasten Mate
Fasten Mates are the simplest mates conceptually, and rigidly connects 2 entities with 0 degrees of freedom. When the connectors are fastened, the first connector moves to the second connector, unless the first connector is fixed in place or connected to piece that is fixed in place. To use a fasten mate, click on the icon that looks like two cylinder puzzle pieces connecting, which will make open a fasten mate window.
![Fasten Mate Icon](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/fasten-mate-icon.jpg.png?raw=true)
![Fasten Mate Window](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/fasten-tab.jpg?raw=true)

Click on the first connector you want to fasten, then find and select the second connector. The fasten mate will apply on the screen, and to finalize it, just click the check mark.  
![First Fasten Mate Connector](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/first-mate-connector.jpg?raw=true)
![Second Fasten Mate Connector](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/second-mate-connector.jpg?raw=true)

### Revolute Mate
Revolute Mates are essential to adding motion to your assemblies, and they only allow 1 degree of freedom: rotation around the z axis. The first connector is considered the rotational point and the second is considered the stationary point. To create a revolute mate, first click the icon of a cylinder with 2 arrows curving around its sides, which opens the revolute mate window.   
![Revolute Mate Icon](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/revolute-icon.jpg?raw=true)
![Revolute Mate Menu](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/Revolute-tab.jpg?raw=true)

Select the first connector, making sure the indicator is in the center of the circular face you are applying the mate to. For the second connector do the same, remembering to make sure the indicator is on the right plane of the stationary point, and still in the center of the circular face. Once the 2 parts have connected, hit the check mark to confirm the mate. 
![First Revolute Mate Connector](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/first-revolute-connector.jpg?raw=true)
![Second Revolute Mate Connector](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/second-revolute-connector.jpg?raw=true)
![Final Revolute Mate Preview](https://github.com/WestwoodRobotics/wwroboftc/blob/main/src/images/CAD/Lesson-3/final-revolute-mate.jpg?raw=true)
