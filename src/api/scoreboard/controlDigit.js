import { calculateChk } from './calculateChecksum';
import { SOH, DIGIT, ID0, ID1, ETX } from "../../../src/constants"


export const displayCommand = s =>
{
    var TEMP = '';
    if(isNaN(s) === false){
    TEMP = s;
    var CHK = calculateChk(DIGIT+ID0+ID1+TEMP);
    var VAL = s.toString(16);
    //console.log(SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16));
    return SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16);
    }
}
