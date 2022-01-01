//import processing.sound.*;
//SoundFile rain;
let elementCount1 = 0;
let elementCount2 = 0;
let elementCount3 = 0;
let elementCount4 = 0;
let elementCount5 = 0;
let modeCount = 0;
let textcheck=0;
let bx;
let by;
let boxSize;
let overBox = false;
let locked = false;
let sunshine = false;
let xOffset = 0.0;
let yOffset = 0.0;
let rainV;
let circleCount = 365;
let circleCount2 = 52;
let circleCount3 = 12;
let r1, r2, r3, r4;
let centerX;
let centerY;
let fullangle = 360;
let angleCount = fullangle / circleCount;
let angleCount2 = fullangle / circleCount2;
let angleCount3 = fullangle / circleCount3;
let angle;
let angle2;
let angle3;
//PImage raindrop;
//PImage filter;
//PImage background2;
//PImage texture1;
//PImage texture2;
//PImage c;
let startline;
let secondline;
let mouse;
//data
let rainData = [0,0,0,0,0,0,0,5.1,2.4,3.4,6.5,0,0,31.3,1.9,0.7,0,0.8,8.4,3.9,5.6,11.3,0.6,0,3.4,3.8,0,2.7,0,0,1.7,16.5,3.1,24.6,20.2,2.8,27.3,2,0,0,0,0,0,6.6,0,0,47.8,52.5,19.9,1,13.3,0.3,15.2,0.6,6.2,3.8,4.9,15.7,10.7,10.8,6.6,0,0,0,18.7,0.3,4.4,1.9,3.5,0.6,4.8,3.8,7.7,0,0,7.2,43.3,30.1,1.1,2.7,1.8,0,0,11.6,0,0,0,4.5,0,0.4,0,0,14.1,11.3,6.8,6.3,21.4,0,0,0,1.5,0,0,2.2,8.6,50.9,0,0,11.6,0,0.7,5.3,0,0,0.8,0,0,0,13.5,0,0,0,1.8,0,0,0,7,3.1,0,0,0.3,0,0,1.6,0,0,0.2,0,0,0,0,0,0,0,0,0.6,22.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.6,1.6,12.5,0.6,6.3,0,1.2,0,5.2,5,0.8,1.4,0,0,0,0,0,0,0.8,8.2,0,0,3.1,0,0,0,0,0,5,7,0,0,0,0,3.6,0,0,0,0,0,0.3,0,0,2.2,0,0,13.5,0.3,1.4,0,0,7.7,10.9,0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0.9,0,1.8,0,0,0,1.2,0,0,0,0,0,4.2,0,0,0,6,0.4,0,5.9,1.8,0.9,2.7,1,0,0,1.2,0,0,0,0,0,0,1.5,0.7,3.7,4,0,0,0,3.3,0.6,1.6,4.6,0,0.2,1.5,1.9,1.1,1.4,1.7,0,0.2,13.4,0.2,0,0,0,0,0,0,0,1.9,1.1,7.6,0,13.5,19.2,7.3,1.7,0,1.4,0.4,0,10.7,9,0,0,0.5,0,0,0,0.7,2.5,2.1,0,3.9,22.1,15.2,4.4,0,9.3,0,0.2,29.5,18.1,6.4,12.7,17.6];
let snowData = [0,2,0.2,0,1,4,2.2,6.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.8,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let cloudData = [4.5,4.5,4,4,4,4.5,5,4.5,6,7.5,4,3,2.5,5,5,4.5,7.5,4.5,7.5,6.5,5,5.5,5,5,8,6.5,4,4,4,4,8,8,7.5,7,8,7.5,8,5.5,5,4.5,5.5,5.5,4.5,8,4.5,3.5,4,8,6.5,4.5,8,5.5,6.5,6.5,6.5,7.5,6,6,8,5,4,0,1,4,7.5,6,6,7.5,5.5,7.5,4,7,7.5,5.5,5.5,5,8,8,8,5.5,5.5,4,4.5,4.5,4,4.5,4.5,5,7,6,7.5,4.5,4.5,8,6.5,5.5,6,4.5,4,4.5,5,4,4.5,6.5,6,8,4,4,5.5,4.5,4.5,7.5,4.5,4.5,5.5,4,4,4.5,4,4,2,2.5,5.5,6.5,3,4,4,7,5,3,4,5.5,5.5,5,4.5,4,5,7,4.5,3.5,0.5,3.5,3.5,4.5,5.5,4.5,4.5,7.5,4,2,2,4,5.5,4,1.5,1,3,3.5,3,1,1,4.5,5,4,3.5,2.5,4,5,5.5,4,3.5,2,3.5,2,2.5,4,5.5,4.5,3,4,3.5,3.5,4,5,3,0.5,0.5,0,0.5,3.5,4,4,1.5,4,4,4.5,5,4,4.5,5.5,5.5,8,6.5,7.5,5,4.5,4.5,4.5,7,5.5,4,4.5,3,3,4.5,4.5,4,4.5,7,8,6.5,7.5,7.5,3.5,3,3.5,4.5,5,6,3.5,3,4,4,5,4,4,4.5,7,5,5.5,4,4.5,7.5,4.5,4.5,7,7.5,7.5,6.5,5,7,8,4,3,4,1,1.5,1,0.5,0.5,0.5,0.5,1,2,3.5,3.5,5.5,4.5,6.5,4,3,4,7.5,6,6,4,4,2.5,4.5,6.5,5,4.5,7,4,4,8,8,7.5,6,6,4,2.5,6,5.5,5.5,4,4,5.5,7,7,7,6,6.5,4,6,6,8,4,4,6,4,4,4,8,4.5,4.5,7.5,5,4,7.5,8,6,4,4,7.5,4.5,4.5,4,4,6,7.5,4,7.5,8,8,8,7.5,7.5,7.5,5.5,6,7.5,4,1.5,4,7.5,6.5,4,6.5,5,4,4,4.5,8,8,7.5,4.5,4.5,5,4.5,5,5,4.5,7.5,6.5];
let windData = [9.5,15,14,10,12.5,15.5,22,15,19.5,20.5,10.5,8,12.5,19.5,16.5,18.5,14,14,19,18.5,23,17.5,10.5,25,14.5,8,8,16.5,13,24,21,20.5,11.5,13,18,8,24.5,14,23.5,17,6.5,11.5,19,16,6,19,39.5,15,19.5,12.5,16,12,28.5,19,21,25,25,24,17,19,9.5,9.5,15.5,20.5,16,20,18.5,31.5,23,18.5,15,26,13,8,11,13.5,16.5,23,15,9,18.5,13,29,18,7,8,13.5,21,12,16,13.5,8.5,21.5,18.5,16.5,17,19,10,9.5,7.5,13,8.5,11.5,13,18.5,22.5,9,26,10.5,9,14.5,16.5,15.5,8.5,17,11,11,6.5,14,7.5,10.5,10,11,17,9,7,10,16.5,11.5,10.5,10,15.5,13,12.5,11,9,18,12,13,16.5,7.5,18,13.5,9,10.5,18.5,26,17.5,12.5,11.5,13,9,14,8.5,8.5,9,10.5,11,12.5,11,8.5,12.5,10.5,16,19.5,11,12,11.5,16.5,20.5,15,13,11,12.5,13.5,10,13,21.5,9.5,13.5,14.5,14,15,14.5,21.5,15.5,14,13.5,9.5,16.5,13.5,17.5,11,15.5,16,11.5,9,10.5,11,12,13,12,13.5,21,14.5,12,9.5,13,15,17.5,16,13.5,10,8,10.5,13,10.5,17,20.5,14,11,15,14,14.5,11.5,9.5,17,21,15.5,11,16,14,10.5,9,9,9.5,9.5,14,12,15,13,8,13,12.5,17,14,7.5,10,13,8.5,10.5,9,17,17.5,19.5,7,12,7.5,7.5,7.5,9.5,16.5,17.5,17.5,10,27,22,28.5,18,8,8,31,14.5,10,10.5,9.5,9.5,20,38,15,10.5,17.5,11.5,10.5,24,16,21.5,25,15,7.5,6.5,19,32,9,9,8,10.5,10,14,24.5,20.5,27,15.5,9,10.5,16.5,15.5,9,31,14,12,24.5,22,21,10,15.5,20.5,8.5,24,16.5,12.5,13,14,13,17,9,12.5,28,27.5,24.5,11,9.5,17,13.5,14.5,20.5,15.5,10,11.5,22,14.5,15,9.5,13,14,8,10.5,9,10.5,10,18,13,27,25,18.5,17.5,15.5,11.5,13,14.5,21.5,20.5,19,23,24];
let temData = [-6.7,-4.39,-7.9,-8.6,-11.55,-8.25,-2.6,1.85,4.4,4.9,-2.4,-1.05,1.65,4.25,0.05,3,4.9,2.55,3.95,3.09,4.85,2.75,3,4.35,4.75,1.95,0.95,3.45,2.2,6.1,10.65,10.25,11.25,10.55,9.15,8.4,6.25,5,6.75,4.15,5.7,5,4.84,3.95,2.5,4.45,8.85,9,6.45,9.9,8,6.55,9.25,7.35,6.35,6.85,9.14,10.85,11.25,8.25,4.65,4.5,4.7,7.35,8.69,10.35,10.35,11.95,11.2,10.35,10.6,14.05,10.1,8.25,9.3,10.95,12.7,10.75,8.6,7.25,6.1,7.3,10.7,8.6,9.05,9.1,9.05,10.7,11.45,12.1,11.5,11.3,13.2,11.6,14.3,14.2,13.8,16.25,13.45,14.05,15.1,13.05,13.7,13.3,15.3,12.55,10.9,14.55,13.35,14.3,15.5,15.85,19.25,20.3,19.39,16.95,17.04,17.14,16.1,17.64,15.7,13.8,15.7,15.8,16.85,15.45,17.14,16.3,18.25,15.8,16.55,18.64,18.35,16.25,18.39,16.89,17.8,18.7,20.35,22.4,22.75,23.2,20.75,19.75,18.95,18.75,18.1,20.65,22.95,20.25,20.55,19.5,21.95,21.85,21.65,20.65,20.35,19.45,19.7,19.89,19.7,19.85,17.25,17.54,19.35,20.3,17.95,19.55,17.14,17.14,19.14,19.25,18.64,18.45,19.55,20.1,17.95,18.35,18.1,19.75,20.35,19.6,19.6,20.6,20.95,26.4,26,25.25,24.9,21.8,18.95,17.7,18.85,19.45,18.05,16.64,14.6,16.64,16.39,16.5,17.14,16.2,16.55,13.95,15.7,14.35,11.7,11.95,11.1,14.25,14.5,18.14,20.5,17.6,16.55,14.5,12.6,13.6,12.9,13.64,14.85,11.95,13.85,13.1,12,10.5,10.5,11.3,13.55,14.05,14.9,13,12.85,13.9,11.3,11,11.1,11.2,9.75,13.7,10.35,11.95,10.25,10.8,11.85,14.2,13.64,12.2,11.1,10.1,10.05,9.94,11.3,10.85,9.69,11.15,13.05,11.45,11.89,11.35,10.55,7.9,8.45,5.85,4.2,5.69,5.4,7.4,6.2,8.3,4.55,7.8,8.55,8.8,8.85,5.35,4.5,4.84,6.6,6.8,6.5,7.4,6.05,5.3,7.05,5.65,7.55,8.6,7.7,5.35,3.8,3.9,6.95,8.19,6.45,3,4.35,7,5.85,6.69,7.95,8.8,6.35,6.6,4.8,7.8,5.09,2.4,5.8,5.65,1.9,4.45,8.1,7.9,2.9,4.64,3.95,3.25,5.65,2.35,0.05,-1.75,-3.5,-1.8,-1.6,-0.75,0.7,5.5,6.8,6.35,4.9,4.55,5.4,6.19,6.5,5.8,4.75,4.55,3.2,4.4,3.15,2.29,0,1.45,3.84,5.09,3.85,4,5.8,5.4,7.5,4.95,7.75,9.69,8.94,6.85,3.2,4.3,5.6,6.7,5.19,5.75,5.8,7.85,8.5];
let dateData = [" 2021.01.01  Friday " ," 2021.01.02  Saturday " ," 2021.01.03  Sunday " ," 2021.01.04  Monday " ," 2021.01.05  Tuesday " ," 2021.01.06  Wednesday " ," 2021.01.07  Thursday " ," 2021.01.08  Friday " ," 2021.01.09  Saturday " ," 2021.01.10  Sunday " ," 2021.01.11  Monday " ," 2021.01.12  Tuesday " ," 2021.01.13  Wednesday " ," 2021.01.14  Thursday " ," 2021.01.15  Friday " ," 2021.01.16  Saturday " ," 2021.01.17  Sunday " ," 2021.01.18  Monday " ," 2021.01.19  Tuesday " ," 2021.01.20  Wednesday " ," 2021.01.21  Thursday " ," 2021.01.22  Friday " ," 2021.01.23  Saturday " ," 2021.01.24  Sunday " ," 2021.01.25  Monday " ," 2021.01.26  Tuesday " ," 2021.01.27  Wednesday " ," 2021.01.28  Thursday " ," 2021.01.29  Friday " ," 2021.01.30  Saturday " ," 2021.01.31  Sunday " ," 2021.02.01  Monday " ," 2021.02.02  Tuesday " ," 2021.02.03  Wednesday " ," 2021.02.04  Thursday " ," 2021.02.05  Friday " ," 2021.02.06  Saturday " ," 2021.02.07  Sunday " ," 2021.02.08  Monday " ," 2021.02.09  Tuesday " ," 2021.02.10  Wednesday " ," 2021.02.11  Thursday " ," 2021.02.12  Friday " ," 2021.02.13  Saturday " ," 2021.02.14  Sunday " ," 2021.02.15  Monday " ," 2021.02.16  Tuesday " ," 2021.02.17  Wednesday " ," 2021.02.18  Thursday " ," 2021.02.19  Friday " ," 2021.02.20  Saturday " ," 2021.02.21  Sunday " ," 2021.02.22  Monday " ," 2021.02.23  Tuesday " ," 2021.02.24  Wednesday " ," 2021.02.25  Thursday " ," 2021.02.26  Friday " ," 2021.02.27  Saturday " ," 2021.02.28  Sunday " ," 2021.03.01  Monday " ," 2021.03.02  Tuesday " ," 2021.03.03  Wednesday " ," 2021.03.04  Thursday " ," 2021.03.05  Friday " ," 2021.03.06  Saturday " ," 2021.03.07  Sunday " ," 2021.03.08  Monday " ," 2021.03.09  Tuesday " ," 2021.03.10  Wednesday " ," 2021.03.11  Thursday " ," 2021.03.12  Friday " ," 2021.03.13  Saturday " ," 2021.03.14  Sunday " ," 2021.03.15  Monday " ," 2021.03.16  Tuesday " ," 2021.03.17  Wednesday " ," 2021.03.18  Thursday " ," 2021.03.19  Friday " ," 2021.03.20  Saturday " ," 2021.03.21  Sunday " ," 2021.03.22  Monday " ," 2021.03.23  Tuesday " ," 2021.03.24  Wednesday " ," 2021.03.25  Thursday " ," 2021.03.26  Friday " ," 2021.03.27  Saturday " ," 2021.03.28  Sunday " ," 2021.03.29  Monday " ," 2021.03.30  Tuesday " ," 2021.03.31  Wednesday " ," 2021.04.01  Thursday " ," 2021.04.02  Friday " ," 2021.04.03  Saturday " ," 2021.04.04  Sunday " ," 2021.04.05  Monday " ," 2021.04.06  Tuesday " ," 2021.04.07  Wednesday " ," 2021.04.08  Thursday " ," 2021.04.09  Friday " ," 2021.04.10  Saturday " ," 2021.04.11  Sunday " ," 2021.04.12  Monday " ," 2021.04.13  Tuesday " ," 2021.04.14  Wednesday " ," 2021.04.15  Thursday " ," 2021.04.16  Friday " ," 2021.04.17  Saturday " ," 2021.04.18  Sunday " ," 2021.04.19  Monday " ," 2021.04.20  Tuesday " ," 2021.04.21  Wednesday " ," 2021.04.22  Thursday " ," 2021.04.23  Friday " ," 2021.04.24  Saturday " ," 2021.04.25  Sunday " ," 2021.04.26  Monday " ," 2021.04.27  Tuesday " ," 2021.04.28  Wednesday " ," 2021.04.29  Thursday " ," 2021.04.30  Friday " ," 2021.05.01  Saturday " ," 2021.05.02  Sunday " ," 2021.05.03  Monday " ," 2021.05.04  Tuesday " ," 2021.05.05  Wednesday " ," 2021.05.06  Thursday " ," 2021.05.07  Friday " ," 2021.05.08  Saturday " ," 2021.05.09  Sunday " ," 2021.05.10  Monday " ," 2021.05.11  Tuesday " ," 2021.05.12  Wednesday " ," 2021.05.13  Thursday " ," 2021.05.14  Friday " ," 2021.05.15  Saturday " ," 2021.05.16  Sunday " ," 2021.05.17  Monday " ," 2021.05.18  Tuesday " ," 2021.05.19  Wednesday " ," 2021.05.20  Thursday " ," 2021.05.21  Friday " ," 2021.05.22  Saturday " ," 2021.05.23  Sunday " ," 2021.05.24  Monday " ," 2021.05.25  Tuesday " ," 2021.05.26  Wednesday " ," 2021.05.27  Thursday " ," 2021.05.28  Friday " ," 2021.05.29  Saturday " ," 2021.05.30  Sunday " ," 2021.05.31  Monday " ," 2021.06.01  Tuesday " ," 2021.06.02  Wednesday " ," 2021.06.03  Thursday " ," 2021.06.04  Friday " ," 2021.06.05  Saturday " ," 2021.06.06  Sunday " ," 2021.06.07  Monday " ," 2021.06.08  Tuesday " ," 2021.06.09  Wednesday " ," 2021.06.10  Thursday " ," 2021.06.11  Friday " ," 2021.06.12  Saturday " ," 2021.06.13  Sunday " ," 2021.06.14  Monday " ," 2021.06.15  Tuesday " ," 2021.06.16  Wednesday " ," 2021.06.17  Thursday " ," 2021.06.18  Friday " ," 2021.06.19  Saturday " ," 2021.06.20  Sunday " ," 2021.06.21  Monday " ," 2021.06.22  Tuesday " ," 2021.06.23  Wednesday " ," 2021.06.24  Thursday " ," 2021.06.25  Friday " ," 2021.06.26  Saturday " ," 2021.06.27  Sunday " ," 2021.06.28  Monday " ," 2021.06.29  Tuesday " ," 2021.06.30  Wednesday " ," 2021.07.01  Thursday " ," 2021.07.02  Friday " ," 2021.07.03  Saturday " ," 2021.07.04  Sunday " ," 2021.07.05  Monday " ," 2021.07.06  Tuesday " ," 2021.07.07  Wednesday " ," 2021.07.08  Thursday " ," 2021.07.09  Friday " ," 2021.07.10  Saturday " ," 2021.07.11  Sunday " ," 2021.07.12  Monday " ," 2021.07.13  Tuesday " ," 2021.07.14  Wednesday " ," 2021.07.15  Thursday " ," 2021.07.16  Friday " ," 2021.07.17  Saturday " ," 2021.07.18  Sunday " ," 2021.07.19  Monday " ," 2021.07.20  Tuesday " ," 2021.07.21  Wednesday " ," 2021.07.22  Thursday " ," 2021.07.23  Friday " ," 2021.07.24  Saturday " ," 2021.07.25  Sunday " ," 2021.07.26  Monday " ," 2021.07.27  Tuesday " ," 2021.07.28  Wednesday " ," 2021.07.29  Thursday " ," 2021.07.30  Friday " ," 2021.07.31  Saturday " ," 2021.08.01  Sunday " ," 2021.08.02  Monday " ," 2021.08.03  Tuesday " ," 2021.08.04  Wednesday " ," 2021.08.05  Thursday " ," 2021.08.06  Friday " ," 2021.08.07  Saturday " ," 2021.08.08  Sunday " ," 2021.08.09  Monday " ," 2021.08.10  Tuesday " ," 2021.08.11  Wednesday " ," 2021.08.12  Thursday " ," 2021.08.13  Friday " ," 2021.08.14  Saturday " ," 2021.08.15  Sunday " ," 2021.08.16  Monday " ," 2021.08.17  Tuesday " ," 2021.08.18  Wednesday " ," 2021.08.19  Thursday " ," 2021.08.20  Friday " ," 2021.08.21  Saturday " ," 2021.08.22  Sunday " ," 2021.08.23  Monday " ," 2021.08.24  Tuesday " ," 2021.08.25  Wednesday " ," 2021.08.26  Thursday " ," 2021.08.27  Friday " ," 2021.08.28  Saturday " ," 2021.08.29  Sunday " ," 2021.08.30  Monday " ," 2021.08.31  Tuesday " ," 2021.09.01  Wednesday " ," 2021.09.02  Thursday " ," 2021.09.03  Friday " ," 2021.09.04  Saturday " ," 2021.09.05  Sunday " ," 2021.09.06  Monday " ," 2021.09.07  Tuesday " ," 2021.09.08  Wednesday " ," 2021.09.09  Thursday " ," 2021.09.10  Friday " ," 2021.09.11  Saturday " ," 2021.09.12  Sunday " ," 2021.09.13  Monday " ," 2021.09.14  Tuesday " ," 2021.09.15  Wednesday " ," 2021.09.16  Thursday " ," 2021.09.17  Friday " ," 2021.09.18  Saturday " ," 2021.09.19  Sunday " ," 2021.09.20  Monday " ," 2021.09.21  Tuesday " ," 2021.09.22  Wednesday " ," 2021.09.23  Thursday " ," 2021.09.24  Friday " ," 2021.09.25  Saturday " ," 2021.09.26  Sunday " ," 2021.09.27  Monday " ," 2021.09.28  Tuesday " ," 2021.09.29  Wednesday " ," 2021.09.30  Thursday " ," 2021.10.01  Friday " ," 2021.10.02  Saturday " ," 2021.10.03  Sunday " ," 2021.10.04  Monday " ," 2021.10.05  Tuesday " ," 2021.10.06  Wednesday " ," 2021.10.07  Thursday " ," 2021.10.08  Friday " ," 2021.10.09  Saturday " ," 2021.10.10  Sunday " ," 2021.10.11  Monday " ," 2021.10.12  Tuesday " ," 2021.10.13  Wednesday " ," 2021.10.14  Thursday " ," 2021.10.15  Friday " ," 2021.10.16  Saturday " ," 2021.10.17  Sunday " ," 2021.10.18  Monday " ," 2021.10.19  Tuesday " ," 2021.10.20  Wednesday " ," 2021.10.21  Thursday " ," 2021.10.22  Friday " ," 2021.10.23  Saturday " ," 2021.10.24  Sunday " ," 2021.10.25  Monday " ," 2021.10.26  Tuesday " ," 2021.10.27  Wednesday " ," 2021.10.28  Thursday " ," 2021.10.29  Friday " ," 2021.10.30  Saturday " ," 2021.10.31  Sunday " ," 2021.11.01  Monday " ," 2021.11.02  Tuesday " ," 2021.11.03  Wednesday " ," 2021.11.04  Thursday " ," 2021.11.05  Friday " ," 2021.11.06  Saturday " ," 2021.11.07  Sunday " ," 2021.11.08  Monday " ," 2021.11.09  Tuesday " ," 2021.11.10  Wednesday " ," 2021.11.11  Thursday " ," 2021.11.12  Friday " ," 2021.11.13  Saturday " ," 2021.11.14  Sunday " ," 2021.11.15  Monday " ," 2021.11.16  Tuesday " ," 2021.11.17  Wednesday " ," 2021.11.18  Thursday " ," 2021.11.19  Friday " ," 2021.11.20  Saturday " ," 2021.11.21  Sunday " ," 2021.11.22  Monday " ," 2021.11.23  Tuesday " ," 2021.11.24  Wednesday " ," 2021.11.25  Thursday " ," 2021.11.26  Friday " ," 2021.11.27  Saturday " ," 2021.11.28  Sunday " ," 2021.11.29  Monday " ," 2021.11.30  Tuesday " ," 2021.12.01  Wednesday " ," 2021.12.02  Thursday " ," 2021.12.03  Friday " ," 2021.12.04  Saturday " ," 2021.12.05  Sunday " ," 2021.12.06  Monday " ," 2021.12.07  Tuesday " ," 2021.12.08  Wednesday " ," 2021.12.09  Thursday " ," 2021.12.10  Friday " ," 2021.12.11  Saturday " ," 2021.12.12  Sunday " ," 2021.12.13  Monday " ," 2021.12.14  Tuesday " ," 2021.12.15  Wednesday " ," 2021.12.16  Thursday " ," 2021.12.17  Friday " ," 2021.12.18  Saturday " ," 2021.12.19  Sunday " ," 2021.12.20  Monday " ," 2021.12.21  Tuesday " ," 2021.12.22  Wednesday " ," 2021.12.23  Thursday " ," 2021.12.24  Friday " ," 2021.12.25  Saturday " ," 2021.12.26  Sunday " ," 2021.12.27  Monday " ," 2021.12.28  Tuesday " ," 2021.12.29  Wednesday " ," 2021.12.30  Thursday " ," 2021.12.31  Friday "];
let dateData2 = [" 2021.01.01 " ," 2021.01.02 " ," 2021.01.03 " ," 2021.01.04 " ," 2021.01.05 " ," 2021.01.06 " ," 2021.01.07 " ," 2021.01.08 " ," 2021.01.09 " ," 2021.01.10 " ," 2021.01.11 " ," 2021.01.12 " ," 2021.01.13 " ," 2021.01.14 " ," 2021.01.15 " ," 2021.01.16 " ," 2021.01.17 " ," 2021.01.18 " ," 2021.01.19 " ," 2021.01.20 " ," 2021.01.21 " ," 2021.01.22 " ," 2021.01.23 " ," 2021.01.24 " ," 2021.01.25 " ," 2021.01.26 " ," 2021.01.27 " ," 2021.01.28 " ," 2021.01.29 " ," 2021.01.30 " ," 2021.01.31 " ," 2021.02.01 " ," 2021.02.02 " ," 2021.02.03 " ," 2021.02.04 " ," 2021.02.05 " ," 2021.02.06 " ," 2021.02.07 " ," 2021.02.08 " ," 2021.02.09 " ," 2021.02.10 " ," 2021.02.11 " ," 2021.02.12 " ," 2021.02.13 " ," 2021.02.14 " ," 2021.02.15 " ," 2021.02.16 " ," 2021.02.17 " ," 2021.02.18 " ," 2021.02.19 " ," 2021.02.20 " ," 2021.02.21 " ," 2021.02.22 " ," 2021.02.23 " ," 2021.02.24 " ," 2021.02.25 " ," 2021.02.26 " ," 2021.02.27 " ," 2021.02.28 " ," 2021.03.01 " ," 2021.03.02 " ," 2021.03.03 " ," 2021.03.04 " ," 2021.03.05 " ," 2021.03.06 " ," 2021.03.07 " ," 2021.03.08 " ," 2021.03.09 " ," 2021.03.10 " ," 2021.03.11 " ," 2021.03.12 " ," 2021.03.13 " ," 2021.03.14 " ," 2021.03.15 " ," 2021.03.16 " ," 2021.03.17 " ," 2021.03.18 " ," 2021.03.19 " ," 2021.03.20 " ," 2021.03.21 " ," 2021.03.22 " ," 2021.03.23 " ," 2021.03.24 " ," 2021.03.25 " ," 2021.03.26 " ," 2021.03.27 " ," 2021.03.28 " ," 2021.03.29 " ," 2021.03.30 " ," 2021.03.31 " ," 2021.04.01 " ," 2021.04.02 " ," 2021.04.03 " ," 2021.04.04 " ," 2021.04.05 " ," 2021.04.06 " ," 2021.04.07 " ," 2021.04.08 " ," 2021.04.09 " ," 2021.04.10 " ," 2021.04.11 " ," 2021.04.12 " ," 2021.04.13 " ," 2021.04.14 " ," 2021.04.15 " ," 2021.04.16 " ," 2021.04.17 " ," 2021.04.18 " ," 2021.04.19 " ," 2021.04.20 " ," 2021.04.21 " ," 2021.04.22 " ," 2021.04.23 " ," 2021.04.24 " ," 2021.04.25 " ," 2021.04.26 " ," 2021.04.27 " ," 2021.04.28 " ," 2021.04.29 " ," 2021.04.30 " ," 2021.05.01 " ," 2021.05.02 " ," 2021.05.03 " ," 2021.05.04 " ," 2021.05.05 " ," 2021.05.06 " ," 2021.05.07 " ," 2021.05.08 " ," 2021.05.09 " ," 2021.05.10 " ," 2021.05.11 " ," 2021.05.12 " ," 2021.05.13 " ," 2021.05.14 " ," 2021.05.15 " ," 2021.05.16 " ," 2021.05.17 " ," 2021.05.18 " ," 2021.05.19 " ," 2021.05.20 " ," 2021.05.21 " ," 2021.05.22 " ," 2021.05.23 " ," 2021.05.24 " ," 2021.05.25 " ," 2021.05.26 " ," 2021.05.27 " ," 2021.05.28 " ," 2021.05.29 " ," 2021.05.30 " ," 2021.05.31 " ," 2021.06.01 " ," 2021.06.02 " ," 2021.06.03 " ," 2021.06.04 " ," 2021.06.05 " ," 2021.06.06 " ," 2021.06.07 " ," 2021.06.08 " ," 2021.06.09 " ," 2021.06.10 " ," 2021.06.11 " ," 2021.06.12 " ," 2021.06.13 " ," 2021.06.14 " ," 2021.06.15 " ," 2021.06.16 " ," 2021.06.17 " ," 2021.06.18 " ," 2021.06.19 " ," 2021.06.20 " ," 2021.06.21 " ," 2021.06.22 " ," 2021.06.23 " ," 2021.06.24 " ," 2021.06.25 " ," 2021.06.26 " ," 2021.06.27 " ," 2021.06.28 " ," 2021.06.29 " ," 2021.06.30 " ," 2021.07.01 " ," 2021.07.02 " ," 2021.07.03 " ," 2021.07.04 " ," 2021.07.05 " ," 2021.07.06 " ," 2021.07.07 " ," 2021.07.08 " ," 2021.07.09 " ," 2021.07.10 " ," 2021.07.11 " ," 2021.07.12 " ," 2021.07.13 " ," 2021.07.14 " ," 2021.07.15 " ," 2021.07.16 " ," 2021.07.17 " ," 2021.07.18 " ," 2021.07.19 " ," 2021.07.20 " ," 2021.07.21 " ," 2021.07.22 " ," 2021.07.23 " ," 2021.07.24 " ," 2021.07.25 " ," 2021.07.26 " ," 2021.07.27 " ," 2021.07.28 " ," 2021.07.29 " ," 2021.07.30 " ," 2021.07.31 " ," 2021.08.01 " ," 2021.08.02 " ," 2021.08.03 " ," 2021.08.04 " ," 2021.08.05 " ," 2021.08.06 " ," 2021.08.07 " ," 2021.08.08 " ," 2021.08.09 " ," 2021.08.10 " ," 2021.08.11 " ," 2021.08.12 " ," 2021.08.13 " ," 2021.08.14 " ," 2021.08.15 " ," 2021.08.16 " ," 2021.08.17 " ," 2021.08.18 " ," 2021.08.19 " ," 2021.08.20 " ," 2021.08.21 " ," 2021.08.22 " ," 2021.08.23 " ," 2021.08.24 " ," 2021.08.25 " ," 2021.08.26 " ," 2021.08.27 " ," 2021.08.28 " ," 2021.08.29 " ," 2021.08.30 " ," 2021.08.31 " ," 2021.09.01 " ," 2021.09.02 " ," 2021.09.03 " ," 2021.09.04 " ," 2021.09.05 " ," 2021.09.06 " ," 2021.09.07 " ," 2021.09.08 " ," 2021.09.09 " ," 2021.09.10 " ," 2021.09.11 " ," 2021.09.12 " ," 2021.09.13 " ," 2021.09.14 " ," 2021.09.15 " ," 2021.09.16 " ," 2021.09.17 " ," 2021.09.18 " ," 2021.09.19 " ," 2021.09.20 " ," 2021.09.21 " ," 2021.09.22 " ," 2021.09.23 " ," 2021.09.24 " ," 2021.09.25 " ," 2021.09.26 " ," 2021.09.27 " ," 2021.09.28 " ," 2021.09.29 " ," 2021.09.30 " ," 2021.10.01 " ," 2021.10.02 " ," 2021.10.03 " ," 2021.10.04 " ," 2021.10.05 " ," 2021.10.06 " ," 2021.10.07 " ," 2021.10.08 " ," 2021.10.09 " ," 2021.10.10 " ," 2021.10.11 " ," 2021.10.12 " ," 2021.10.13 " ," 2021.10.14 " ," 2021.10.15 " ," 2021.10.16 " ," 2021.10.17 " ," 2021.10.18 " ," 2021.10.19 " ," 2021.10.20 " ," 2021.10.21 " ," 2021.10.22 " ," 2021.10.23 " ," 2021.10.24 " ," 2021.10.25 " ," 2021.10.26 " ," 2021.10.27 " ," 2021.10.28 " ," 2021.10.29 " ," 2021.10.30 " ," 2021.10.31 " ," 2021.11.01 " ," 2021.11.02 " ," 2021.11.03 " ," 2021.11.04 " ," 2021.11.05 " ," 2021.11.06 " ," 2021.11.07 " ," 2021.11.08 " ," 2021.11.09 " ," 2021.11.10 " ," 2021.11.11 " ," 2021.11.12 " ," 2021.11.13 " ," 2021.11.14 " ," 2021.11.15 " ," 2021.11.16 " ," 2021.11.17 " ," 2021.11.18 " ," 2021.11.19 " ," 2021.11.20 " ," 2021.11.21 " ," 2021.11.22 " ," 2021.11.23 " ," 2021.11.24 " ," 2021.11.25 " ," 2021.11.26 " ," 2021.11.27 " ," 2021.11.28 " ," 2021.11.29 " ," 2021.11.30 " ," 2021.12.01 " ," 2021.12.02 " ," 2021.12.03 " ," 2021.12.04 " ," 2021.12.05 " ," 2021.12.06 " ," 2021.12.07 " ," 2021.12.08 " ," 2021.12.09 " ," 2021.12.10 " ," 2021.12.11 " ," 2021.12.12 " ," 2021.12.13 " ," 2021.12.14 " ," 2021.12.15 " ," 2021.12.16 " ," 2021.12.17 " ," 2021.12.18 " ," 2021.12.19 " ," 2021.12.20 " ," 2021.12.21 " ," 2021.12.22 " ," 2021.12.23 " ," 2021.12.24 " ," 2021.12.25 " ," 2021.12.26 " ," 2021.12.27 " ," 2021.12.28 " ," 2021.12.29 " ," 2021.12.30 " ," 2021.12.31 " ];
//String[] months={"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let weeks = ["WEEK1", "WEEK2", "WEEK3", "WEEK4", "WEEK5", "WEEK6", "WEEK7", "WEEK8", "WEEK9", "WEEK10", "WEEK11", "WEEK12", "WEEK13", "WEEK14", "WEEK15", "WEEK16", "WEEK17", "WEEK18", "WEEK19", "WEEK20", "WEEK21", "WEEK22", "WEEK23", "WEEK24", "WEEK25", "WEEK26", "WEEK27", "WEEK28", "WEEK29", "WEEK30", "WEEK31", "WEEK32", "WEEK33", "WEEK34", "WEEK35", "WEEK36", "WEEK37", "WEEK38", "WEEK39", "WEEK40", "WEEK41", "WEEK42", "WEEK43", "WEEK44", "WEEK45", "WEEK46", "WEEK47", "WEEK48", "WEEK49", "WEEK50", "WEEK51", "WEEK52"];
let rainX = new Array(circleCount);
let rainspeedX = new Array(circleCount);
let rainLength = new Array(circleCount);
let rainheight = new Array(circleCount);
let timeCount = new Array(circleCount);

let selectStartX = new Array(circleCount);
let selectStartY = new Array(circleCount);
let selectEndX = new Array(circleCount);
let selectEndY = new Array(circleCount);

let circleX2 = 1;
let rainX2;
let mouseAngle;
let mouseDist;
let fAngle;
//PFont bahnschrift;
let randomSize = Array(circleCount);
let bahnschrift;

function preload() {
  bahnschrift = loadFont("bahnschrift.ttf");
  filterr = loadImage("filter.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  angle = radians(angleCount);
  angle2 = radians(angleCount2);
  angle3 = radians(angleCount3);

  //rain=new SoundFile(this, "rain.wav");
  //rain.play();
  //rain.loop();
  //rain.amp(0.0);
  translate(height / 2, height / 2);
  r1 = height * 0.385;
  r2 = height * 0.22;
  r3 = height * 0.15;
  r4 = height * 0.13;

  bx = -height * 0.3;
  by = height * 0.2;
  boxSize = height * 0.03;
  //rectMode(RADIUS);

  centerX = height / 2;
  centerY = height / 2;
  colorMode(HSB, 360, 100, 100, 100);

  //raindrop = loadImage("raindrop.png");

  //background2 = loadImage("background2.jpg");
  //texture1 = loadImage("texture1.jpg");
  //texture2 = loadImage("texture2.jpg");

  textFont(bahnschrift);
  //image(background2, -height/2, -height/2, height, height);
  //c=get();
  //selectedline data
  for (let circleX = 0; circleX < circleCount; circleX++) {
    let startX = sin(angle * circleX) * r1;
    let startY = -cos(angle * circleX) * r1;
    let endX = sin(angle * circleX) * r3;
    let endY = -cos(angle * circleX) * r3;
    selectStartX[circleX] = startX;
    selectStartY[circleX] = startY;
    selectEndX[circleX] = endX;
    selectEndY[circleX] = endY;
    //for rain
    timeCount[circleX] = 0;
  }


  //raindrop animation data
  for (let circleX = 0; circleX < circleCount; circleX++) {
    let rainDataCount = map(circleX, 0, 364, 364, 0);
    rainX[circleX] = r1;

    rainspeedX[circleX] = map(rainData[rainDataCount], 0, 20, 0, height * 0.018);
   
    rainLength[circleX] = map(rainData[rainDataCount], 0, 20, height * 0.001, height * 0.0075);
    rainheight[circleX] = map(rainData[rainDataCount], 0, 20, height * 0.001, height * 0.0012);
  }


  //date the largest circle
  //for (let circleX=0; circleX<circleCount; circleX++) {
  //  let rainangle=radians(-90);
  //  push();
  //  rotate(rainangle+(angle*circleX));
  //  noStroke();
  //  rectMode(RADIUS);
  //  textSize(height*0.0045);
  //  fill(140);
  //  //textFont(bahnschrift);
  //  textAlign(RIGHT, CENTER);
  //  text(dateData[circleX], height*0.45, 0);
  //  ;
  //  popMatrix();dds
  //}
}

function draw() {

  translate(height / 2, height / 2);
  background(21);

  //image(c,-height/2,-height/2);
  //leteraction-mouse position  
  startline = createVector(0, -height / 2);
  secondline = createVector(0, -height / 2);
  mouse = createVector(mouseX - height / 2, mouseY - height / 2);
  mouseDist = mouse.mag();
  let mouseAngletemp = startline.angleBetween(mouse);

  if (mouse.x >= 0) {
    mouseAngle = mouseAngletemp;
  } else {
    mouseAngle = 2 * PI + mouseAngletemp;
  }



  //prletln(degrees(mouseAngle));
  //rotate function
  if (modeCount == 0) {
    let rotateangle = map(bx, height * 0.3, -height * 0.3, -360, 0);
    rotate(radians(rotateangle));
  }






  //drawgrid
  fill(25);
  noStroke();
  ellipse(0, 0, r1 * 2, r1 * 2);
  noFill();
  stroke(50);

  ellipse(0, 0, r3 * 2, r3 * 2);
  ellipse(0, 0, r2 * 2, r2 * 2);


  //cent0123er image  
  fill(25);
  ellipse(0, 0, r4 * 2, r4 * 2);
  noFill();
  fill(360);

  textAlign(CENTER, CENTER);


  //daily data in the center
  if ((modeCount == 1) && (mouseDist > r1)) {

    fill(360);
    textSize(height * 0.028);
    text("Vancouver", 0, -height * 0.05);
    textSize(height * 0.035);
    text("Weather", 0, -height * 0.02);
    textSize(height * 0.008);
    text("letD 210 Project1 DataVisulization", 0, height * 0.01);
    text("Jingzhou Li", 0, height * 0.04);
  }

  if ((modeCount == 1) && (mouseDist < r2)) {

    fill(360);
    textSize(height * 0.028);
    text("Vancouver", 0, -height * 0.05);
    textSize(height * 0.035);
    text("Weather", 0, -height * 0.02);
    textSize(height * 0.008);
    text("letD 210 Project1 DataVisulization", 0, height * 0.01);
    text("Jingzhou Li", 0, height * 0.04);
  }


  //daily info 
  if (modeCount == 1) {
    for (let circleX = 0; circleX < circleCount; circleX++) {
      let rainDataCount = map(circleX, 0, 364, 364, 0);
      let mouseDist = mouse.mag();
      if ((mouseAngle < (angle * (circleX + 0.5))) && (mouseAngle > (angle * (circleX - 0.5))) && (mouseDist > r2) && (mouseDist < r1)) {
        noStroke();
        textSize(height * 0.037);
        fill(360);
        text(dateData2[circleX], 0, -height * 0.08);
        textSize(height * 0.015);
        //cloud
        fill(40, 10, 100);
        text("CloudCover(Oktas):  " + cloudData[rainDataCount], 0, -height * 0.03);
        //temp
        fill(0, 50, 80);
        text("Temperature(°C):  " + temData[rainDataCount], 0, -height * 0.00);

        //Wind
        fill(160, 50, 80);
        text("WindSpeed(km/h):  " + windData[rainDataCount], 0, height * 0.03);


        //rainfall
        fill(230, 50, 80);
        text("Rainfall(mm):  " + rainData[rainDataCount], 0, height * 0.06);
      }
    }
  }






  //Highlight selectedWeek 
  if (modeCount == 1) {
    for (let circleX = 0; circleX < 52; circleX++) {
      let mouseDist = mouse.mag();
      for (let circleX3 = 0; circleX3 < 7; circleX3++)
        if ((mouseAngle < (angle2 * (circleX + 1)) && (mouseAngle > (angle2 * circleX)) && (mouseDist > r3) && (mouseDist < r2))) {
          strokeWeight(height * 0.004);
          //blendMode(DIFFERENCE);
          stroke(0);
          //stroke(0, 50, 90);
          line(selectStartX[circleX * 7 + circleX3], selectStartY[circleX * 7 + circleX3], selectEndX[circleX * 7 + circleX3], selectEndY[circleX * 7 + circleX3]);
        }

      strokeWeight(height * 0.001);
    }
  }


  //draw lines(cicles) DAYS
  for (let circleX = 0; circleX < circleCount; circleX++) {
    let startX = sin(angle * circleX) * r1;
    let startY = -cos(angle * circleX) * r1;
    let endX = sin(angle * circleX) * r2;
    let endY = -cos(angle * circleX) * r2;
    //Get the start line
    if (circleX == 0) {
      stroke(255, 90, 80);
    } else {
      stroke(40);
    }

    line(startX, startY, endX, endY);
  }


  //Draw line weeks
  for (let circleX = 0; circleX < circleCount2; circleX++) {
    let startX = sin(angle2 * circleX) * r2;
    let startY = -cos(angle2 * circleX) * r2;
    let endX = sin(angle2 * circleX) * r3;
    let endY = -cos(angle2 * circleX) * r3;
    if (circleX == 0) {
      stroke(255, 90, 80);
    } else {
      stroke(40);
    }
    line(startX, startY, endX, endY);
  }

  //Draw line Months
  for (let circleX = 0; circleX < circleCount3; circleX++) {
    let startX = sin(angle3 * circleX) * r3;
    let startY = -cos(angle3 * circleX) * r3;
    let endX = sin(angle3 * circleX) * r4;
    let endY = -cos(angle3 * circleX) * r4;
    if (circleX == 0) {
      stroke(255, 90, 80);
    } else {
      stroke(40);
    }
    line(startX, startY, endX, endY);
  }





  //draw text
  for (let circleX = 0; circleX < 12; circleX++) {
    let monthsangle = radians(30);
    let monthStart = radians(15);
    push();
    rotate(monthStart + (monthsangle * circleX));
    noStroke();

    fill(70);
    //textFont(bahnschrift);
    textSize(height * 0.013); //0.009
    textAlign(CENTER, CENTER);
    text(months[circleX], 0, -r4 * 1.10);
    pop();
  }

  for (let circleX = 0; circleX < 52; circleX++) {

    let weeksangle = radians(-90);
    push();
    rotate(weeksangle + (angle2 * circleX) + (angle2 * 0.38));
    noStroke();

    fill(70);
    //textFont(bahnschrift);
    textSize(height * 0.008);
    textAlign(CENTER, CENTER);
    text(weeks[circleX], r3 * 1.15, 0);
    pop();
  }


  //sunshine turn on/off
  if (keyPressed) {
    if (key == '5') {
      sunshine = true;
    }
    if (key == 'd') {
      sunshine = false;
    }
  }






  //draw data
  for (let circleX = 0; circleX < circleCount; circleX++) {
    let startX = sin(angle * circleX) * r1;
    let startY = -cos(angle * circleX) * r1;
    let endX = sin(angle * circleX) * r2;
    let endY = -cos(angle * circleX) * r2;
    let rainDataCount = map(circleX, 0, 364, 364, 0);
    //noStroke();
    stroke(360);
    fill(150, 50, 80);
    ellipse(startX * 0.95, startY * 0.95, randomSize[circleX], randomSize[circleX]);


    //sunshine



    if (sunshine) {
      if (cloudData[rainDataCount] <= 2) {
        stroke(48, 70, 110);
        strokeCap(PROJECT);
        strokeWeight(1);
        line(startX, startY, endX, endY);
        strokeWeight(1);
      }
    }

    ////wind
    if (elementCount3 == 1) {
      let windStrength = map(windData[rainDataCount], 0, 40, 0, height * 0.083);
      let windRandomSt = map(windData[rainDataCount], 0, 40, 0, height * 0.0185);
      let windLength = map(windData[rainDataCount], 0, 40, height * 0.001, height * 0.05);
      let windheight = map(windData[rainDataCount], 0, 40, height * 0.0001, height * 0.003);
      let windangle = radians(windStrength);
      let windangle2 = random(0, windangle);
      push();
      translate(endX, endY);
      rotate(angle * circleX);
      let windRandom = random(0, 100);
      if (windRandom < windRandomSt) {
        rotate(windangle2);
      }
      stroke(160, 50, 80);
      strokeWeight(windheight);
      line(0, 0, 0, -windLength);
      pop();
    }



    //temperature
    if (elementCount2 == 1) {
      push();
      let temHeight = map(temData[rainDataCount], 0, 30, r2 * 1.3, r2 * 1.8);
      fill(0, 50, 80);
      noStroke();
      rotate(angle * circleX);
      ellipse(0, -temHeight, 3, 3);
      pop();
    }

    //rainfall
    if (elementCount4 == 1) {
      stroke(360);
      strokeWeight(height * 0.001);
      fill(230, 50, 80);
      let rainSize = map(rainData[rainDataCount], 0, 40, 0, height * 0.039);
      ellipse(endX * 0.93, endY * 0.93, rainSize, rainSize);

      if (rainData[rainDataCount] > 1) {
        rainX[circleX] = rainX[circleX] - rainspeedX[circleX];
        let rainangle = radians(-90);

        if (key == 'i') {
          push();
          rotate(rainangle + (angle * circleX));
          noStroke();
          //rectMode(RADIUS);
          imageMode(CENTER);
          //image(raindrop, rainX[circleX], 0, rainLength[circleX], rainLength[circleX]);
          //rect(rainX[circleX], 0, rainLength[circleX], rainheight[circleX]);
          popMatrix();
        } else {
          push();
          rotate(rainangle + (angle * circleX));
          noStroke();
          rectMode(RADIUS);
          rect(rainX[circleX], 0, rainLength[circleX], rainheight[circleX]);
          pop();
        }

        if (rainX[circleX] <= r2) {
          rainX[circleX] = r1;
        }
      }
    }
    //prletln(endX);




    //snow and cloud
    if (elementCount4 == 1) {
      stroke(230, 50, 80);
      fill(120, 0, 100);
      let snowSize = map(snowData[rainDataCount], 0, 10, 0, height * 0.0185);
      ellipse(endX * 0.93, endY * 0.93, snowSize, snowSize);
    }
    if (elementCount1 == 1) {
      let cloudSize = map(cloudData[rainDataCount], 0, 8, 0, height * 0.0324);
      fill(40, 10, 100);
      stroke(360);
      ellipse(startX, startY, cloudSize, cloudSize);
    }
  }

  if (modeCount == 0) {
    push();
    tint(360, 75);
    let rotateangle = map(bx, height * 0.3, -height * 0.3, -360, 0);
    rotate(radians(-rotateangle));
    rectMode(CENTER);
    fill(0, 75);
    noStroke();
    beginShape();
    vertex(-height * 0.5, -height * 0.5);
    vertex(-height * 0.3, -height * 0.5);
    vertex(0, 0);
    vertex(height * 0.3, -height * 0.5);
    vertex(height * 0.5, -height * 0.5);
    vertex(height * 0.5, height * 0.5);
    vertex(-height * 0.5, height * 0.5);
    endShape(CLOSE);
    //image(filterr, 0, 0, height, height);
    pop();
  }

  //Highlight selecteddays
  if (modeCount == 1) {
    for (let circleX = 0; circleX < circleCount; circleX++) {
      let mouseDist = mouse.mag();
      let rainDataCount = map(circleX, 0, 364, 364, 0);
      if ((mouseAngle < (angle * (circleX + 0.5))) && (mouseAngle > (angle * (circleX - 0.5))) && (mouseDist > r2) && (mouseDist < r1)) {
        strokeWeight(height * 0.002);
        //blendMode(DIFFERENCE);
        stroke(360);
        //stroke(0, 50, 90);
        line(selectStartX[circleX], selectStartY[circleX], selectEndX[circleX], selectEndY[circleX]);
        rainV = map(rainData[rainDataCount], 0, 60, 0, 1);
        timeCount[circleX]++;
      } else {
        timeCount[circleX] = 0;
      }

      if (timeCount[circleX] > 4) {
        //rain.amp(rainV);
      }
      strokeWeight(height * 0.001);
      //blendMode(REPLACE);
    }
  }


  //fMode Highlight selecteddays
  if (modeCount == 0) {
    //rotate secondline
    let rotateangle = map(bx, height * 0.3, -height * 0.3, -360.1, 0);
    secondline.rotate(radians(-rotateangle));
    //get angle
    let lAngletemp = startline.angleBetween(secondline);
    if (secondline.x >= 0) {
      fAngle = lAngletemp;
    } else {
      fAngle =  2 * PI + lAngletemp;
    }

    //draw the line  
    for (let circleX = 0; circleX < circleCount; circleX++) {
      let rainDataCount = map(circleX, 0, 364, 364, 0);
      if ((fAngle < (angle * (circleX + 0.5))) && (fAngle > (angle * (circleX - 0.5)))) {
        strokeWeight(height * 0.002);
        //blendMode(DIFFERENCE);
        stroke(360);
        //stroke(0, 50, 90);
        line(selectStartX[circleX], selectStartY[circleX], selectEndX[circleX], selectEndY[circleX]);
        rainV = map(rainData[rainDataCount], 0, 60, 0, 1);
        timeCount[circleX]++;
      } else {
        timeCount[circleX] = 0;
      }

      if (timeCount[circleX] > 4) {
        //rain.amp(rainV);
      }
      strokeWeight(height * 0.001);
      //blendMode(REPLACE);
    }
  }

  //fMode data
  if (modeCount == 0) {
    push();
    fill(25);
    noStroke();
    ellipse(0, 0, r4 * 2, r4 * 2);
    let rotateangle = map(bx, height * 0.3, -height * 0.3, -360, 0);
    rotate(radians(-rotateangle));
    for (let circleX = 0; circleX < circleCount; circleX++) {
      let rainDataCount = map(circleX, 0, 364, 364, 0);
      if ((fAngle < (angle * (circleX + 0.5))) && (fAngle > (angle * (circleX - 0.5)))) {
        textSize(height * 0.037);
        fill(360);
        text(dateData2[circleX], 0, -height * 0.08);
        textSize(height * 0.015);
        noStroke();
        //cloud
        if (elementCount1 == 1) {
          fill(40, 10, 100);
          text("CloudCover(Oktas):  " + cloudData[rainDataCount], 0, -height * 0.03);
        }
        //temp
        if (elementCount2 == 1) {
          fill(0, 50, 80);
          text("Temperature(°C):  " + temData[rainDataCount], 0, -height * 0.00);
        }

        //Wind
        if (elementCount3 == 1) {
          fill(160, 50, 80);
          text("WindSpeed(km/h):  " + windData[rainDataCount], 0, height * 0.03);
        }


        //rainfall
        if (elementCount4 == 1) {
          fill(230, 50, 80);
          text("Rainfall(mm):  " + rainData[rainDataCount], 0, height * 0.06);
        }
      }
    }
    //Navigation BarPart1 line
    if (elementCount5 == 1) {
      fill(300);
      text("January", -height * 0.3, height * 0.23);
      text("December", height * 0.3, height * 0.23);
      text("July", height * 0.0, height * 0.23);
      fill(200);
      ellipse(-height * 0.3, by, height * 0.01, height * 0.01);
      ellipse(height * 0.3, by, height * 0.01, height * 0.01);
      ellipse(height * 0.0, by, height * 0.006, height * 0.006);
      fill(230, 50, 80);
      stroke(200);
      strokeWeight(height * 0.002);
      line(-height * 0.3, by, height * 0.3, by);
      fill(300);
      textSize(height * 0.032);
      noStroke();
      text("Press f to switch mode", -height * 0.00, height * 0.38);
      stroke(230, 50, 80);
    }

    pop();
  }



  //Navigation BarPart2 circle 
  let mouseX2 = map(mouseX, 0, height, -height / 2, height / 2);
  let mouseY2 = map(mouseY, 0, height, -height / 2, height / 2);
  if (mouseX2 > bx - boxSize && mouseX2 < bx + boxSize &&
    mouseY2 > by - boxSize && mouseY2 < by + boxSize) {
    overBox = true;
    if (!locked) {
      stroke(230, 50, 80);
      //strokeWeight(height*0.003);
      fill(300);
    }
  } else {
    stroke(300);
    fill(300);
    overBox = false;
  }


  // Draw the box
  if (modeCount == 0) {
    if (elementCount5 == 1) {
      push();
      let rotateangle = map(bx, height * 0.3, -height * 0.3, -360, 0);
      rotate(radians(-rotateangle));

      ellipse(bx, by, boxSize, boxSize);

      pop();
    }
  }



  // Fmode Draw the instruction
  if (modeCount == 0) {
    push();
    let rotateangle = map(bx, height * 0.3, -height * 0.3, -360, 0);
    rotate(radians(-rotateangle));

    if (textcheck == 0) {
      textSize(height * 0.02);
      fill(330);
      //noFill();
      text("Press 1 to show CloudCoverage data", 0, height * 0.25);
      stroke(330);
      ellipse(-height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      noFill();
      ellipse(-height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      noFill();
    }
    if (key == '1') {
      
      textSize(height * 0.02);
      fill(330);
      text("Press 2 to show Temperature data", 0, height * 0.25);
      stroke(330);
      ellipse(-height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      noFill();
      ellipse(-height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      noFill();
      textcheck=1;
    }
    if (key == '2') {
      textSize(height * 0.02);
      fill(330);
      text("Press 3 to show WindSpeed data", 0, height * 0.25);
      stroke(330);
      ellipse(-height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      noFill();
      ellipse(-height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.10, height * 0.29, height * 0.01, height * 0.01);
    }
    if (key == '3') {
      textSize(height * 0.02);
      fill(330);
      text("Press 4 to show Rainfall data", 0, height * 0.25);
      stroke(330);
      ellipse(-height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      noFill();
      ellipse(height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      noFill();
    }
    if (key == '4') {
      textSize(height * 0.02);
      fill(330);
      text("Press 5 to show Sunny days", 0, height * 0.25);
      stroke(330);
      ellipse(-height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      noFill();
      ellipse(height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      noFill();
    }
    if (key == '5') {
      textSize(height * 0.02);
      fill(330);
      text("Press 6 to show the control bar", 0, height * 0.25);
      stroke(330);
      ellipse(-height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      ellipse(-height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.02, height * 0.29, height * 0.01, height * 0.01);
      ellipse(height * 0.06, height * 0.29, height * 0.01, height * 0.01);
      noFill();
      ellipse(height * 0.10, height * 0.29, height * 0.01, height * 0.01);
      noFill();
    }





    //fill(0);

    //text("CloudCoverage",-height*0.15,-height*0.43);
    //text("Temperature",-height*0.05,-height*0.43);
    //text("WindSpeed",height*0.05,-height*0.43);
    //text("Rainfall",height*0.15,-height*0.43);
    //noFill();
    noStroke();
    textSize(height * 0.01);
    //cloud
    if (elementCount1 == 1) {

      fill(40, 10, 100);
      ellipse(-height * 0.15, -height * 0.45, height * 0.02, height * 0.02);
      text("CloudCoverage", -height * 0.15, -height * 0.43);
    }
    //temp
    if (elementCount2 == 1) {
      fill(0, 50, 80);
      ellipse(-height * 0.05, -height * 0.45, height * 0.01, height * 0.01);
      text("Temperature", -height * 0.05, -height * 0.43);
    }

    //Wind
    if (elementCount3 == 1) {
      fill(160, 50, 80);
      rect(height * 0.05, -height * 0.46, height * 0.003, height * 0.02);
      text("WindSpeed", height * 0.05, -height * 0.43);
    }
    //rainfall
    if (elementCount4 == 1) {
      stroke(360);
      strokeWeight(1);
      noStroke();
      fill(230, 50, 80);
      ellipse(height * 0.15, -height * 0.45, height * 0.02, height * 0.02);
      text("Rainfall", height * 0.15, -height * 0.43);
    }
    noFill();
    noStroke();


    pop();
  }


  //Instructions     
  if (modeCount == 1) {
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(height * 0.014);
    //cloud
    fill(40, 10, 100);
    ellipse(-height * 0.46, -height * 0.45, height * 0.02, height * 0.02);
    text("CloudCoverage", -height * 0.43, -height * 0.45);
    //temp
    fill(0, 50, 80);
    ellipse(-height * 0.46, -height * 0.40, height * 0.01, height * 0.01);
    text("Temperature", -height * 0.43, -height * 0.40);
    //Wind
    fill(160, 50, 80);
    noStroke();
    rect(-height * 0.46, -height * 0.36, height * 0.002, height * 0.02);
    text("WindSpeed", -height * 0.43, -height * 0.35);
    //rainfall
    stroke(360);
    strokeWeight(1);
    fill(230, 50, 80);
    noStroke();
    ellipse(-height * 0.46, -height * 0.30, height * 0.02, height * 0.02);
    text("Rainfall", -height * 0.43, -height * 0.30);
    noFill();
    textAlign(CENTER, CENTER);
    noStroke();
  }

  //DO YOU KNOW?
  if (modeCount == 1) {
    fill(300);
    textSize(height * 0.012);
    text("Press f to switch mode", -height * 0.4, height * 0.38);
    if (mouseX > height * 0.75 && mouseY > height * 0.822 && mouseY < height * 0.862) {
      rectMode(CORNER);
      fill(10, 80);
      rect(height * 0.255, -height * 0.013, height * 0.25, height * 0.375, height * 0.005);
      textSize(height * 0.020);
      textAlign(CENTER);
      fill(300);
      text("DO YOU KNOW?", height * 0.35, height * 0.34);
      textSize(height * 0.01);
      textAlign(LEFT);
      fill(230, 50,80);
      text("If the mouse stay on a day for two seconds, you will hear the rain. The volume is depended on how heavy the rain was.", height * 0.282, height * -0.16, height * 0.20, height * 0.8);
      text("Vancouver had 144 rainy days in 2019.", height * 0.282, height * -0.20, height * 0.20, height * 0.8);
      fill(160, 50, 80);
      text("The visulization of WindSpeed is a stimulation of grass blowed by the wind.", height * 0.282, height * -0.235, height * 0.20, height * 0.8);
      fill(0, 50, 80);
      text("The highest temperature in 2019 was 29.9°C. The lowest was -8.8°C. ", height * 0.282, height * -0.278, height * 0.20, height * 0.8);
      fill(48, 70, 110);
      text("Sunny days highlighted here refer to days that had averagely cloud coverage lower than 4 okts, including night time.", height * 0.282, height * -0.32, height * 0.20, height * 0.8);
      fill(40, 10, 100);
      text("In meteorology, an okta is a unit of measurement used to describe the amount of cloud cover at any given location such as a weather station. (0-8).", height * 0.282, height * -0.375, height * 0.20, height * 0.8);
    } else {
      fill(10);
      rectMode(CORNER);
      rect(height * 0.255, height * 0.322, height * 0.25, height * 0.04, height * 0.005);
      textSize(height * 0.020);
      textAlign(CENTER);
      fill(300);
      text("DO YOU KNOW?", height * 0.35, height * 0.34);

    }
  }
  //blendMode(MULTIPLY);
  //image(texture2,-height/2,-height/2,height,height);
  //blendMode(REPLACE);

}


function mousePressed() {
  let mouseX2 = map(mouseX, 0, height, -height / 2, height / 2);
  if (overBox) {
    locked = true;
    fill(255, 100, 100);
  } else {
    locked = false;
  }
  xOffset = mouseX2 - bx;
}

function mouseDragged() {
  let mouseX2 = map(mouseX, 0, height, -height / 2, height / 2);
  if (locked) {
    bx = mouseX2 - xOffset;
    if (bx > height * 0.3) {
      bx = height * 0.3;
    }
    if (bx < -height * 0.3) {
      bx = -height * 0.3;
    }
  }
}

function mouseReleased() {
  locked = false;
}

//to get different Mode
function keyPressed() {

  if (key == '1') {
    elementCount1 = 1;
  }
  if (key == '2') {
    elementCount2 = 1;
  }
  if (key == '3') {
    elementCount3 = 1;
  }
  if (key == '4') {
    elementCount4 = 1;
  }
  if (key == '6') {
    elementCount5 = 1;
  }
  if (key == 'f') {
    if (modeCount == 0) {
      modeCount = 1;
    } else {
      modeCount = 0;
    }
  }
}