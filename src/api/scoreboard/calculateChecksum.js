import { toHex } from '../tools/convertHex';

export const calculateChk = s =>
{
    var TEMP = [];
    //console.log(s);
    TEMP = s.toString(16).split('',2)
    TEMP[0] = TEMP[0].toUpperCase();
    TEMP[1] = TEMP[1].toUpperCase();
    //console.log(TEMP);
    return toHex(TEMP[0])+toHex(TEMP[1]) ;
}