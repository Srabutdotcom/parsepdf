function updaterowcolrange(data, parent, row, col, obj,rmax){
  let {r,c} = obj;

  //By definition, row range position must refer to col 0 only.
  //debugger;
  //if r=0 then row[0]=1e+10 row[1]=data.y
  if(r===0&&!row[r]){row[0]=1e+12;row[1]=data.y};//batas atas 1e+12 dan batas bawah adalah data.y
  if(r>0&&!row[r+1])row[r+1]=data.y;
  if(r>0&&row[r+1])row[r+1]=Math.max(data.y,row[r+1]);
  
  //debugger;
  //if(data.str==="MENINGGAL ")debugger;
  //column space division properties
  if(!col[c]){col[c]={x:data.x, r:data.r};}
  else if(c<=rmax['n']){
    col[c]['r']= Math.min(col[c]['r'],data.r); 
    col[c]['x']= Math.min(col[c]['x'],data.x);
  } 
  else if(c>rmax['n']) {
    col[c]['x'] = Math.min(col[c]['x'],data.x);
    col[c]['r'] = Math.max(col[c]['r'],data.r); 
  }
  console.log(`col: ${col} updated`)
  //debugger;
  if(c>=rmax['n']){rmax['r']=r;rmax['n']=c}
    
}

//module.exports = updaterowcolrange
export {updaterowcolrange}