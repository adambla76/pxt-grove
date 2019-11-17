const initRegisterArray: number[] = [
    0xEF, 0x00, 0x32, 0x29, 0x33, 0x01, 0x34, 0x00, 0x35, 0x01, 0x36, 0x00, 0x37, 0x07, 0x38, 0x17,
    0x39, 0x06, 0x3A, 0x12, 0x3F, 0x00, 0x40, 0x02, 0x41, 0xFF, 0x42, 0x01, 0x46, 0x2D, 0x47, 0x0F,
    0x48, 0x3C, 0x49, 0x00, 0x4A, 0x1E, 0x4B, 0x00, 0x4C, 0x20, 0x4D, 0x00, 0x4E, 0x1A, 0x4F, 0x14,
    0x50, 0x00, 0x51, 0x10, 0x52, 0x00, 0x5C, 0x02, 0x5D, 0x00, 0x5E, 0x10, 0x5F, 0x3F, 0x60, 0x27,
    0x61, 0x28, 0x62, 0x00, 0x63, 0x03, 0x64, 0xF7, 0x65, 0x03, 0x66, 0xD9, 0x67, 0x03, 0x68, 0x01,
    0x69, 0xC8, 0x6A, 0x40, 0x6D, 0x04, 0x6E, 0x00, 0x6F, 0x00, 0x70, 0x80, 0x71, 0x00, 0x72, 0x00,
    0x73, 0x00, 0x74, 0xF0, 0x75, 0x00, 0x80, 0x42, 0x81, 0x44, 0x82, 0x04, 0x83, 0x20, 0x84, 0x20,
    0x85, 0x00, 0x86, 0x10, 0x87, 0x00, 0x88, 0x05, 0x89, 0x18, 0x8A, 0x10, 0x8B, 0x01, 0x8C, 0x37,
    0x8D, 0x00, 0x8E, 0xF0, 0x8F, 0x81, 0x90, 0x06, 0x91, 0x06, 0x92, 0x1E, 0x93, 0x0D, 0x94, 0x0A,
    0x95, 0x0A, 0x96, 0x0C, 0x97, 0x05, 0x98, 0x0A, 0x99, 0x41, 0x9A, 0x14, 0x9B, 0x0A, 0x9C, 0x3F,
    0x9D, 0x33, 0x9E, 0xAE, 0x9F, 0xF9, 0xA0, 0x48, 0xA1, 0x13, 0xA2, 0x10, 0xA3, 0x08, 0xA4, 0x30,
    0xA5, 0x19, 0xA6, 0x10, 0xA7, 0x08, 0xA8, 0x24, 0xA9, 0x04, 0xAA, 0x1E, 0xAB, 0x1E, 0xCC, 0x19,
    0xCD, 0x0B, 0xCE, 0x13, 0xCF, 0x64, 0xD0, 0x21, 0xD1, 0x0F, 0xD2, 0x88, 0xE0, 0x01, 0xE1, 0x04,
    0xE2, 0x41, 0xE3, 0xD6, 0xE4, 0x00, 0xE5, 0x0C, 0xE6, 0x0A, 0xE7, 0x00, 0xE8, 0x00, 0xE9, 0x00,
    0xEE, 0x07, 0xEF, 0x01, 0x00, 0x1E, 0x01, 0x1E, 0x02, 0x0F, 0x03, 0x10, 0x04, 0x02, 0x05, 0x00,
    0x06, 0xB0, 0x07, 0x04, 0x08, 0x0D, 0x09, 0x0E, 0x0A, 0x9C, 0x0B, 0x04, 0x0C, 0x05, 0x0D, 0x0F,
    0x0E, 0x02, 0x0F, 0x12, 0x10, 0x02, 0x11, 0x02, 0x12, 0x00, 0x13, 0x01, 0x14, 0x05, 0x15, 0x07,
    0x16, 0x05, 0x17, 0x07, 0x18, 0x01, 0x19, 0x04, 0x1A, 0x05, 0x1B, 0x0C, 0x1C, 0x2A, 0x1D, 0x01,
    0x1E, 0x00, 0x21, 0x00, 0x22, 0x00, 0x23, 0x00, 0x25, 0x01, 0x26, 0x00, 0x27, 0x39, 0x28, 0x7F,
    0x29, 0x08, 0x30, 0x03, 0x31, 0x00, 0x32, 0x1A, 0x33, 0x1A, 0x34, 0x07, 0x35, 0x07, 0x36, 0x01,
    0x37, 0xFF, 0x38, 0x36, 0x39, 0x07, 0x3A, 0x00, 0x3E, 0xFF, 0x3F, 0x00, 0x40, 0x77, 0x41, 0x40,
    0x42, 0x00, 0x43, 0x30, 0x44, 0xA0, 0x45, 0x5C, 0x46, 0x00, 0x47, 0x00, 0x48, 0x58, 0x4A, 0x1E,
    0x4B, 0x1E, 0x4C, 0x00, 0x4D, 0x00, 0x4E, 0xA0, 0x4F, 0x80, 0x50, 0x00, 0x51, 0x00, 0x52, 0x00,
    0x53, 0x00, 0x54, 0x00, 0x57, 0x80, 0x59, 0x10, 0x5A, 0x08, 0x5B, 0x94, 0x5C, 0xE8, 0x5D, 0x08,
    0x5E, 0x3D, 0x5F, 0x99, 0x60, 0x45, 0x61, 0x40, 0x63, 0x2D, 0x64, 0x02, 0x65, 0x96, 0x66, 0x00,
    0x67, 0x97, 0x68, 0x01, 0x69, 0xCD, 0x6A, 0x01, 0x6B, 0xB0, 0x6C, 0x04, 0x6D, 0x2C, 0x6E, 0x01,
    0x6F, 0x32, 0x71, 0x00, 0x72, 0x01, 0x73, 0x35, 0x74, 0x00, 0x75, 0x33, 0x76, 0x31, 0x77, 0x01,
    0x7C, 0x84, 0x7D, 0x03, 0x7E, 0x01
];

let TubeTab: number[] = [
    0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07,
    0x7f, 0x6f, 0x77, 0x7c, 0x39, 0x5e, 0x79, 0x71
];

/**
 * Grove Gestures
 */
enum GroveGesture {
    //% block=None
    None = 0,
    //% block=Right
    Right = 1,
    //% block=Left
    Left = 2,
    //% block=Up
    Up = 3,
    //% block=Down
    Down = 4,
    //% block=Forward
    Forward = 5,
    //% block=Backward
    Backward = 6,
    //% block=Clockwise
    Clockwise = 7,
    //% block=Anticlockwise
    Anticlockwise = 8,
    //% block=Wave
    Wave = 9
}

enum GroveJoystickKey {
    //% block=None
    None = 0,
    //% block=Right
    Right = 1,
    //% block=Left
    Left = 2,
    //% block=Up
    Up = 3,
    //% block=Down
    Down = 4,
    //% block=Upper-Left
    UL = 5,
    //% block=Upper-Right
    UR = 6,
    //% block=Lower-Left
    LL = 7,
    //% block=Lower-Right
    LR = 8,
    //% block=Press
    Press = 9,
    //% block=Any
    Any = 10
}


declare const enum FanStatus {
    //% block=open
    High = 1,
    //% block=close
    Low = 2,
}

declare const enum LedButtonMode {
    //% block=light
    Light = 1,
    //% block=blink
    Blink = 2,
}

declare const enum LedButtonPin {
    //% block=P14
    P14 = DigitalPin.P14,
    //% block=P15
    P15 = DigitalPin.P15,
    //% block=P16
    P16 = DigitalPin.P16,
}


enum DHTtype {
    //% block="DHT11"
    DHT11,
    //% block="DHT22"
    DHT22,
}

enum DHTdataType {
    //% block="humidity"
    humidity,
    //% block="temperature"
    temperature,
}

/**
 * Functions to operate Grove module.
 */
//% weight=10 color=#9F79EE icon="\uf108" block="Grove"
namespace grove {
    /**
     * 
     */
    export class PAJ7620 {
        private paj7620WriteReg(addr: number, cmd: number) {
            let buf: Buffer = pins.createBuffer(2);

            buf[0] = addr;
            buf[1] = cmd;

            pins.i2cWriteBuffer(0x73, buf, false);
        }

        private paj7620ReadReg(addr: number): number {
            let buf: Buffer = pins.createBuffer(1);

            buf[0] = addr;

            pins.i2cWriteBuffer(0x73, buf, false);

            buf = pins.i2cReadBuffer(0x73, 1, false);

            return buf[0];
        }

        private paj7620SelectBank(bank: number) {
            if (bank == 0) this.paj7620WriteReg(0xEF, 0);
            else if (bank == 1) this.paj7620WriteReg(0xEF, 1);
        }

        private paj7620Init() {
            let temp = 0;

            this.paj7620SelectBank(0);

            temp = this.paj7620ReadReg(0);
            if (temp == 0x20) {
                for (let i = 0; i < 438; i += 2) {
                    this.paj7620WriteReg(initRegisterArray[i], initRegisterArray[i + 1]);
                }
            }

            this.paj7620SelectBank(0);
        }

        /**
         * Create a new driver of Grove - Gesture
         */
        //% blockId=grove_gesture_init block="%gest|initiate the Grove - Gesture"
        //% advanced=true
        //% group=Gesture
        init() {
            this.paj7620Init();
            basic.pause(200);
        }

        /**
         * Detect and recognize the gestures from Grove - Gesture
         */
        //% blockId=grove_gesture_read block="%gest|get gesture"
        //% group=Gesture
        //% advanced=true

        read(): number {
            let data = 0, result = 0;

            data = this.paj7620ReadReg(0x43);
            switch (data) {
                case 0x01:
                    result = GroveGesture.Right;
                    break;

                case 0x02:
                    result = GroveGesture.Left;
                    break;

                case 0x04:
                    result = GroveGesture.Up;
                    break;

                case 0x08:
                    result = GroveGesture.Down;
                    break;

                case 0x10:
                    result = GroveGesture.Forward;
                    break;

                case 0x20:
                    result = GroveGesture.Backward;
                    break;

                case 0x40:
                    result = GroveGesture.Clockwise;
                    break;

                case 0x80:
                    result = GroveGesture.Anticlockwise;
                    break;

                default:
                    data = this.paj7620ReadReg(0x44);
                    if (data == 0x01)
                        result = GroveGesture.Wave;
                    break;
            }

            return result;
        }
    }

    /**
     * 
     */
    export class TM1637 {
        clkPin: DigitalPin;
        dataPin: DigitalPin;
        brightnessLevel: number;
        pointFlag: boolean;
        buf: Buffer;

        private writeByte(wrData: number) {
            for (let i = 0; i < 8; i++) {
                pins.digitalWritePin(this.clkPin, 0);
                if (wrData & 0x01) pins.digitalWritePin(this.dataPin, 1);
                else pins.digitalWritePin(this.dataPin, 0);
                wrData >>= 1;
                pins.digitalWritePin(this.clkPin, 1);
            }

            pins.digitalWritePin(this.clkPin, 0); // Wait for ACK
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.clkPin, 1);
        }

        private start() {
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 0);
        }

        private stop() {
            pins.digitalWritePin(this.clkPin, 0);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
        }

        private coding(dispData: number): number {
            let pointData = 0;

            if (this.pointFlag == true) pointData = 0x80;
            else if (this.pointFlag == false) pointData = 0;

            if (dispData == 0x7f) dispData = 0x00 + pointData;
            else dispData = TubeTab[dispData] + pointData;

            return dispData;
        }

        /**
         * Show a 4 digits number on display
         * @param dispData value of number
         */
        //% blockId=grove_tm1637_display_number block="%disp|show number|%dispData"
        //% group="4-Digit Display"
        show(dispData: number) {
            if (dispData < 10) {
                this.bit(dispData, 3);
                this.bit(0x7f, 2);
                this.bit(0x7f, 1);
                this.bit(0x7f, 0);
            }
            else if (dispData < 100) {
                this.bit(dispData % 10, 3);
                this.bit(Math.floor(dispData / 10) % 10, 2);
                this.bit(0x7f, 1);
                this.bit(0x7f, 0);
            }
            else if (dispData < 1000) {
                this.bit(dispData % 10, 3);
                this.bit(Math.floor(dispData / 10) % 10, 2);
                this.bit(Math.floor(dispData / 100) % 10, 1);
                this.bit(0x7f, 0);
            }
            else {
                this.bit(dispData % 10, 3);
                this.bit(Math.floor(dispData / 10) % 10, 2);
                this.bit(Math.floor(dispData / 100) % 10, 1);
                this.bit(Math.floor(dispData / 1000) % 10, 0);
            }
        }

        /**
         * Set the brightness level of display at from 0 to 7
         * @param level value of brightness light level
         */
        //% blockId=grove_tm1637_set_display_level block="%disp|brightness level to|%level"
        //% level.min=0 level.max=7
        //% group="4-Digit Display"
        set(level: number) {
            this.brightnessLevel = level;

            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }

        /**
         * Show a single number from 0 to 9 at a specified digit of Grove - 4-Digit Display
         * @param dispData value of number
         * @param bitAddr value of bit number
         */
        //% blockId=grove_tm1637_display_bit block="%disp|show single number|%dispData|at digit|%bitAddr"
        //% dispData.min=0 dispData.max=9
        //% bitAddr.min=0 bitAddr.max=3
        //% group="4-Digit Display"
        //% advanced=true
        bit(dispData: number, bitAddr: number) {
            if ((dispData == 0x7f) || ((dispData <= 9) && (bitAddr <= 3))) {
                let segData = 0;

                segData = this.coding(dispData);
                this.start();
                this.writeByte(0x44);
                this.stop();
                this.start();
                this.writeByte(bitAddr | 0xc0);
                this.writeByte(segData);
                this.stop();
                this.start();
                this.writeByte(0x88 + this.brightnessLevel);
                this.stop();

                this.buf[bitAddr] = dispData;
            }
        }

        /**
         * Turn on or off the colon point on Grove - 4-Digit Display
         * @param point value of point switch
         */
        //% blockId=grove_tm1637_display_point block="%disp|turn|%point|colon point"
        //% group="4-Digit Display"
        //% advanced=true
        point(point: boolean) {
            this.pointFlag = point;

            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }

        /**
         * Clear the display
         */
        //% blockId=grove_tm1637_display_clear block="%disp|clear"
        //% group="4-Digit Display"
        //% advanced=true
        clear() {
            this.bit(0x7f, 0x00);
            this.bit(0x7f, 0x01);
            this.bit(0x7f, 0x02);
            this.bit(0x7f, 0x03);
        }
    }


    export class GroveJoystick {
        xPin: AnalogPin;
        yPin: AnalogPin;

        read(): number {
            let xdata = 0, ydata = 0, result = 0;
            if (this.xPin && this.yPin) {
                xdata = pins.analogReadPin(this.xPin);
                ydata = pins.analogReadPin(this.yPin);
                if (xdata > 1000) {
                    result = GroveJoystickKey.Press;
                }
                else if (xdata > 600) {
                    if (ydata > 600) result = GroveJoystickKey.UR;
                    else if (ydata < 400) result = GroveJoystickKey.LR;
                    else result = GroveJoystickKey.Right;
                }
                else if (xdata < 400) {
                    if (ydata > 600) result = GroveJoystickKey.UL;
                    else if (ydata < 400) result = GroveJoystickKey.LL;
                    else result = GroveJoystickKey.Left;
                }
                else {
                    if (ydata > 600) result = GroveJoystickKey.Up;
                    else if (ydata < 400) result = GroveJoystickKey.Down;
                    else result = GroveJoystickKey.None;
                }
            }
            else {
                result = GroveJoystickKey.None;
            }
            return result;
        }
    }

    export class GroveRotary {
        Pin: AnalogPin;

        read(): number {
            let value = pins.analogReadPin(this.Pin);
            return value;
        }

        percent(): number {
            let value = this.read();
            return Math.round(100 * (value / 1023));
        }
    }

    export class GroveLedButton {
        ButtonPin: DigitalPin;
        LedPin: DigitalPin;
        _mode: number;
        _state: boolean;

        constructor() {
            this._state = false;
            this._mode = 0;
        }

        State(): boolean {
            let vol = pins.digitalReadPin(this.ButtonPin);

            if (vol == 0) {
                this._state = !this._state;
                if (this._state) {
                    pins.digitalWritePin(this.LedPin, 1)
                }
                else {
                    pins.digitalWritePin(this.LedPin, 0)
                }
                basic.pause(250);
            }
            return this._state;
        }

    }


    const gestureEventId = 3100;
    const joystickEventID = 3101;
    const rotaryEventID = 3102;
    const ledbuttonEventID = 3103;

    let lastGesture = GroveGesture.None;
    let lastJoystick = GroveJoystickKey.None;
    let lastRotary: number = 0;
    let lastLedButton: boolean = false;
    let distanceBackup: number = 0;
    let joystick = new GroveJoystick();
    let rotary = new GroveRotary();
    let ledbutton = new GroveLedButton();
    let paj7620 = new PAJ7620();


    /**
         * Create a new driver Grove Rotary & get rotary value
         * @param PinIn 
    */
    //% blockId=grove_rotary_raw block="Rotary at|%PinIn Value"
    //% PinIn.defl = P0
    //% group=Rotary
    export function RotaryValue(PinIn: AnalogPin): number {
        rotary.Pin = PinIn;
        return rotary.read();
    }

    /**
         * Create a new driver Grove Rotary & get rotary percentage value
         * @param PinIn 
    */
    //% blockId=grove_rotary_percent block="Rotary at|%PinIn Percent"
    //% PinIn.defl = P0
    //% group=Rotary
    export function RotaryPercent(PinIn: AnalogPin): number {
        rotary.Pin = PinIn;
        return rotary.percent();
    }


    /**
     * Do something when a key is detected by Grove - Thumb Joystick
     * @param key type of joystick to detect
     * @param handler code to run
     */
    //% blockId=grove_rotary_create_event block="on Rotary |%PinIn | trigger"
    //% PinIn.defl = P1
    //% group=Rotary
    export function onRotary(PinIn: AnalogPin, handler: () => void) {
        rotary.Pin = PinIn;
        control.onEvent(rotaryEventID, PinIn, handler);
        control.inBackground(() => {
            while (true) {
                const value = rotary.read();
                if (Math.abs(value - lastRotary) > 10) {
                    lastRotary = value;
                    control.raiseEvent(rotaryEventID, PinIn);
                }
                basic.pause(30);
            }

        })

    }

    /**
             * Create a new driver Grove LedButton
             * @param ButtonPin
             * @param LedPin 
             * @param Mode
    */
    //% blockId=grove_init_button block="LedButton at| %ButtonPin"
    //% group="Led Button"
    export function InitButton(ButtonPin: LedButtonPin): void {
        if (ButtonPin == LedButtonPin.P14) {
            ledbutton.ButtonPin = DigitalPin.P14;
            ledbutton.LedPin = DigitalPin.P0;
        }
        else if (ButtonPin == LedButtonPin.P15) {
            ledbutton.ButtonPin = DigitalPin.P15;
            ledbutton.LedPin = DigitalPin.P1;
        }
        else if (ButtonPin == LedButtonPin.P16) {
            ledbutton.ButtonPin = DigitalPin.P16;
            ledbutton.LedPin = DigitalPin.P2;
        }
    }



    /**
     * Get state of Grove LedButton
     */
    //% blockId=grove_IsButton_state block="Is Button Pressed"
    //% group="Led Button"
    export function IsButtonPressed(): boolean {
        return ledbutton.State();
    }

    /**
         * Do something when a button was pressed by Grove LedButton
         * @param handler code to run
         * @param flashing
         */
    //% blockId=grove_ledbutton_create_event block="on LedButton Blinking|$blink"
    //% blink.shadow="toggleYesNo"
    //% group="Led Button"
    export function onLedButton(blink: boolean, handler: () => void) {
        control.onEvent(ledbuttonEventID, 0, handler);
        control.inBackground(() => {
            while (true) {
                const vol = ledbutton.State();
                if (vol != lastLedButton) {
                    lastLedButton = vol;
                    //basic.pause(200);
                    control.raiseEvent(ledbuttonEventID, 0);
                }
                if(blink) {
                    let v = pins.digitalReadPin(ledbutton.LedPin);
                    v==1 ? v=0 : v=1;
                    pins.digitalWritePin(ledbutton.LedPin,v)
                }
                basic.pause(250);
            }
        })

    }


    /**
     * Create a new driver Grove - Thumb Joystick
     * @param xPin value of x-axis pin 
     * @param yPin value of y-axis pin
     */
    //% blockId=grove_joystick_create block="Thumb Joystick at|%xPin|and|%yPin"
    //% xPin.defl = P1
    //% yPin.defl = P2
    //% group=Joystick
    export function createJoystick(xPin: AnalogPin, yPin: AnalogPin): void {
        //let joystick = new GroveJoystick();
        joystick.xPin = xPin;
        joystick.yPin = yPin;
    }

    /**
     * get Joystick key
     * 
     */
    //% blockId=grove_getjoystick block="get joystick key at|%xpin|and|%ypin"
    //% group=Joystick
    export function getJoystick(): number {
        return joystick.read();
    }

    /**
         * Do something when a key is detected by Grove - Thumb Joystick
         * @param key type of joystick to detect
         * @param handler code to run
         */
    //% blockId=grove_joystick_create_event block="on |%key"
    //% group=Joystick
    export function onJoystick(key: GroveJoystickKey, handler: () => void) {
        control.onEvent(joystickEventID, key, handler);
        control.inBackground(() => {
            while (true) {
                const ckey = joystick.read();
                if (ckey != lastJoystick) {
                    lastJoystick = ckey;
                    if (key != 10) {
                        control.raiseEvent(joystickEventID, lastJoystick);
                    }
                    else {
                        control.raiseEvent(joystickEventID, 10);
                    }
                }
                basic.pause(30);
            }
        })

    }

    /**
     * Create a new driver of Grove - Ultrasonic Sensor to measure distances in cm
     * @param pin signal pin of ultrasonic ranger module
     */
    //% blockId=grove_ultrasonic_centimeters block="Ultrasonic Sensor (in cm) at|%pin"
    //% group=UltraSonic
    export function measureInCentimeters(pin: DigitalPin): number {
        let duration = 0;
        let RangeInCentimeters = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 50000); // Max duration 50 ms

        RangeInCentimeters = duration * 153 / 29 / 2 / 100;

        if (RangeInCentimeters > 0) distanceBackup = RangeInCentimeters;
        else RangeInCentimeters = distanceBackup;

        basic.pause(50);

        return RangeInCentimeters;
    }

    /**
     * Create a new driver Grove - Ultrasonic Sensor to measure distances in inch
     * @param pin signal pin of ultrasonic ranger module
     */
    //% blockId=grove_ultrasonic_inches block="Ultrasonic Sensor (in inch) at|%pin"
    //% group=UltraSonic
    export function measureInInches(pin: DigitalPin): number {
        let duration = 0;
        let RangeInInches = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 100000); // Max duration 100 ms

        RangeInInches = duration * 153 / 74 / 2 / 100;

        if (RangeInInches > 0) distanceBackup = RangeInInches;
        else RangeInInches = distanceBackup;

        basic.pause(50);

        return RangeInInches;
    }

    /**
     * Create a new driver Grove - 4-Digit Display
     * @param clkPin value of clk pin number
     * @param dataPin value of data pin number
     */
    //% blockId=grove_tm1637_create block="4-Digit Display at|%clkPin|and|%dataPin"
    //% clkPin.defl = P2
    //% dataPin.defl = P16
    //% group="4-Digit Display"
    export function createDisplay(clkPin: DigitalPin, dataPin: DigitalPin): TM1637 {
        let display = new TM1637();

        display.buf = pins.createBuffer(4);
        display.clkPin = clkPin;
        display.dataPin = dataPin;
        display.brightnessLevel = 1;
        display.pointFlag = false;
        display.clear();

        return display;
    }

    /**
     * init Grove Gesture modules
     * 
     */
    //% blockId=grove_initgesture block="init gesture"
    //% group=Gesture
    export function initGesture() {
        if (!paj7620) {
            paj7620.init();
        }
    }

    /**
     * get Grove Gesture modle
     * 
     */
    //% blockId=grove_getgesture block="get gesture model"
    //% group=Gesture
    export function getGestureModel(): number {
        return paj7620.read();
    }

    /**
     * Do something when a gesture is detected by Grove - Gesture
     * @param gesture type of gesture to detect
     * @param handler code to run
     */
    //% blockId=grove_gesture_create_event block="on Gesture|%gesture"
    //% group=Gesture
    export function onGesture(gesture: GroveGesture, handler: () => void) {
        control.onEvent(gestureEventId, gesture, handler);
        paj7620.init();
        control.inBackground(() => {
            while (true) {
                const gesture = paj7620.read();
                if (gesture != lastGesture) {
                    lastGesture = gesture;
                    control.raiseEvent(gestureEventId, lastGesture);
                }
                basic.pause(50);
            }
        })
    }



    /**
    * relay control(open / close)
    */
    //% blockId=relay_control block="relay %relaypin| set %status"
    //% group=Relay
    export function RelayControl(relaypin: DigitalPin, status: FanStatus): void {
        switch (status) {
            case 1:
                pins.digitalWritePin(relaypin, 1);
                break;
            case 2:
                pins.digitalWritePin(relaypin, 0);
                break;
        }


    }

    let _temperature: number = 0.0
    let _humidity: number = 0.0
    let _readSuccessful: boolean = false

    /**
    * Query data from DHT11/DHT22 sensor. If you are using 4 pins/no PCB board versions, you'll need to pull up the data pin. 
    * It is also recommended to wait 1 (DHT11) or 2 (DHT22) seconds between each query.
    */
    //% block="Init Sensor DHT11|Data pin $dataPin|Wait 2 sec after query $wait|Serial output $serialOtput"
    //% group="Sensor DHT11"
    //% serialOtput.defl=false
    //% wait.defl=true
    //% blockExternalInputs=true
    export function queryData(dataPin: DigitalPin, wait: boolean, serialOtput: boolean) {

        //initialize
        let startTime: number = 0
        let endTime: number = 0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)
        _humidity = -999.0
        _temperature = -999.0
        _readSuccessful = false
        let DHT: DHTtype = DHTtype.DHT11
        let pullUp: boolean = true

        startTime = input.runningTimeMicros()

        //request data
        pins.digitalWritePin(dataPin, 0) //begin protocol
        basic.pause(18)
        if (pullUp) pins.setPull(dataPin, PinPullMode.PullUp) //pull up data pin if needed
        pins.digitalReadPin(dataPin)
        while (pins.digitalReadPin(dataPin) == 1);
        while (pins.digitalReadPin(dataPin) == 0); //sensor response
        while (pins.digitalReadPin(dataPin) == 1); //sensor response

        //read data (5 bytes)
        for (let index = 0; index < 40; index++) {
            while (pins.digitalReadPin(dataPin) == 1);
            while (pins.digitalReadPin(dataPin) == 0);
            control.waitMicros(28)
            //if sensor pull up data pin for more than 28 us it means 1, otherwise 0
            if (pins.digitalReadPin(dataPin) == 1) dataArray[index] = true
        }

        endTime = input.runningTimeMicros()

        //convert byte number array to integer
        for (let index = 0; index < 5; index++)
            for (let index2 = 0; index2 < 8; index2++)
                if (dataArray[8 * index + index2]) resultArray[index] += 2 ** (7 - index2)

        //verify checksum
        checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
        checksum = resultArray[4]
        if (checksumTmp >= 512) checksumTmp -= 512
        if (checksumTmp >= 256) checksumTmp -= 256
        if (checksum == checksumTmp) _readSuccessful = true

        //read data if checksum ok
        if (_readSuccessful) {
            if (DHT == DHTtype.DHT11) {
                //DHT11
                _humidity = resultArray[0] + resultArray[1] / 100
                _temperature = resultArray[2] + resultArray[3] / 100
            } else {
                //DHT22
                let DHT22_dataArray: number[] = [0, 0]
                let tmpData: number = 1
                for (let index = 0; index <= 1; index++) {
                    for (let index2 = 0; index2 < 16; index2++) {
                        if (dataArray[16 * index + index2]) {
                            if (index == 1 && index2 == 0) tmpData = -1 //positive or negative temperature indicator
                            else DHT22_dataArray[index] += 2 ** (15 - index2)
                        }
                    }
                }
                _humidity = DHT22_dataArray[0] / 10
                _temperature = DHT22_dataArray[1] / 10 * tmpData
            }
        }

        //serial output
        if (serialOtput) {
            let DHTstr: string = ""
            if (DHT == DHTtype.DHT11) DHTstr = "DHT11"
            else DHTstr = "DHT22"
            serial.writeLine(DHTstr + " query completed in " + (endTime - startTime) + " microseconds")
            if (_readSuccessful) {
                serial.writeLine("Checksum ok")
                serial.writeLine("Humidity: " + _humidity + " %")
                serial.writeLine("Temperature: " + _temperature + " *C")
            } else {
                serial.writeLine("Checksum error")
            }

            serial.writeLine("----------------------------------------")
        }

        //wait 2 sec after query if needed
        if (wait) basic.pause(2000)

    }

    /**
    * Read humidity/temperature data from lastest query of DHT11/DHT22
    */
    //% block="Read $data"
    //% group="Sensor DHT11"
    export function readData(data: DHTdataType): number {
        if (_readSuccessful) return data == DHTdataType.humidity ? _humidity : _temperature
        else return -999
    }

    /**
    * Determind if last query is successful (checksum ok)
    */
    //% block="Last query successful?"
    //% group="Sensor DHT11"
    export function readDataSuccessful(): boolean {
        return _readSuccessful
    }



}
