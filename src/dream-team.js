module.exports = function createDreamTeam(members) {
 
    if(Array.isArray(members)==false)
      return false;
    members.sort();
    let arr=[];
    let membersStr;
    for(let i=0;i<members.length;i++)
    {

      if(typeof(members[i])=="string"){
        members[i]=members[i].replace(/\s+/g, '');
        arr.push(members[i][0].toUpperCase());}
    }
    arr.sort();
    return arr.join("");
};