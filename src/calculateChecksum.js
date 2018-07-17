import { toHex } from './convertHex.js';

export const calculateChk = s =>
{
    var TEMP = [];
    //console.log(s);
    TEMP = s.toString(16).split('',2)
    //console.log(TEMP);
    //console.log(toHex(TEMP[0]));
    //console.log(toHex(TEMP[1]));
    return toHex(TEMP[0])+toHex(TEMP[1]) ;
}