//const pushtoparent =require('./pushtoparent.js');
import {pushtoparent} from './pushtoparent.js';

function inspectcouple(pair,parent,row,col,rmax){
  var str='';
  var width=0;
  if(pair.length<2){console.log('pair less than 2');return;}
  if(pair.length>2){return 'pair more than 2';}
  let x0 = _getX(pair[0]);//left position of 1st string
  let x01 = x0+pair[0].width;//right position of 1st string
  let x1 = _getX(pair[1])//left position of the next string
  let y0 = _getY(pair[0]);//vertical position of 1st string
  let y1 = _getY(pair[1]);//vertival position of the next string
  
  if(y0===y1&&Math.abs(x01-x1)<0.25){
    //if both string are in the same row or line and
    //both separated only one space, then join both string (can be space string)
    str = pair.map(e=>{
      width+=e.width;
      return e.str;
    }).join('');
    pair.pop();// delete pair[1] are joined
    //add data to pair[0]
    pair[0].str = str;
    pair[0].width = width;
    pair[0].x = x0;
    pair[0].y = y0;
    pair[0].r = x01;
    pair[0].t = y0 + pair[0].height;
    //debugger;
    console.log(`string ${str||'space'} pair combined`);
    return 'pair combined';
  } else {
    //if different row then put pair[0] to parent using this function
    pair[0].x = x0;
    pair[0].y = y0;
    pair[0].r = x01;
    pair[0].t = y0 + pair[0].height;
    //if(pair[0].str==='JUMLAH KASUS '){debugger;}
    return pushtoparent(pair,parent,row,col,rmax);
  }
}

//module.exports = inspectcouple
export {inspectcouple} 