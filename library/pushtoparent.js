//const updaterowcolrange =require('./updaterowcolrange.js');
import {updaterowcolrange} from './updaterowcolrange.js';
//const inspectposition =require('./inspectposition.js');
import {inspectposition} from './inspectposition.js';

function pushtoparent(pair,parent,row,col,rmax){
  let status=''
  if(pair[0].str===' '){console.log('empty string');pair.shift();return status='empty';} 
  let data = {...pair[0]}//spread the value from reference variable into data
  //if(pair[0].str==='MENINGGAL '){debugger;}
  //debugger;
  let {r,c} = inspectposition(data,parent,row,col,rmax);
  //debugger;
  let child = [];
  if(r===0||r===parent.length){
    child[c] = data;
    parent.push(child);
    console.log(`${JSON.stringify(data.str)} has been created in row: ${r} and col: ${c}`);
    pair.shift();//delete item[0]
    status='new row';
  } else if(r>=0&&r<parent.length){
    child=parent[r];
    child[c]= data;
    parent[r] = [...child];
    console.log(`${JSON.stringify(data.str)} has been updated in row: ${r} and col: ${c}`);
    pair.shift();//delete item[0]
    status='new child';
  } // no other conditions
  
  updaterowcolrange(data, parent, row, col, {r:r,c:c},rmax);
  return status;
}

//module.exports =pushtoparent
export {pushtoparent}