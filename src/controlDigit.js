import { calculateChk } from './calculateChecksum.js';
import { SOH, DIGIT, ID0, ID1, ETX } from "./constants.js";


displayCommand = s =>
{
    var TEMP = parseInt(s.charCodeAt(0),10);
    var CHK = calculateChk(DIGIT+ID0+ID1+TEMP);
    
    console.log(SOH+DIGIT+ID0+ID1+CHK+ETX);

    return SOH+DIGIT+ID0+ID1+CHK+ETX;
    
}