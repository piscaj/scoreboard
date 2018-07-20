import { calculateChk } from './calculateChecksum.js';
import { SOH, DIGIT, ID0, ID1, ETX } from "./constants.js";

export const displayCommand = s =>
{
    var TEMP = parseInt(s.target.value.charCodeAt(0),10);
    var CHK = calculateChk(DIGIT+ID0+ID1+TEMP);
    var VAL = s.target.value.charCodeAt(0).toString(16);
    //console.log(SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16));
    return SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16);
}

