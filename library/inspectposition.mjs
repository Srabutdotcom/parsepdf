export function inspectposition(data,parent,yr,xr,rmax){
  //cell position are determined by its x and t position within yr and xr range
  if(!parent.length){console.log('parent has no child');return {c:0, r:0}}
  let {x,t,str} = data;
  //if(str==='JUMLAH KASUS '){debugger;}
  let r=parent.length-1;
  let c=parent[r].length;
  //debugger;
  for(let j=r;j>=0;j-=1) {
    //ri = rowrange.get(j)
    if(t>yr[j]&&t<yr[j+1]){r=j;break};//if in between then row in current row
    if(t<yr[j+1]){r=j+1;break};//if below current row then create new row
  } //while(!done)
  if(r<0)r=parent.length;
  
  //find the proper col
  //debugger;  
  //if(str==='1 ')debugger;
  //if(r===parent.length){c=0}
  if(r===parent.length&&xr.length<=2){c=0}
  else {                     
    for (let i = xr.length-1;i>0; i-=1){
      if(x>xr[i]['r']){c=i+1;break}
      else if(x>xr[i-1]['r']&&x<xr[i]['x']){c=i;break}
      else if(x<xr[i]['x']){c=i-1;}}
   }
 
  //if the cell/coll are already filled the move 1 row down
  let notdone = true;
  do{
    if(parent[r]&&parent[r][c]){r+=1;}
    else {notdone = false}
  }while(notdone)
  //debugger;
  return {c:c, r:r }                     
}