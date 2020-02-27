module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let teamName = '';
    members.forEach(el => {
      if (typeof el === 'string'){
        el = el.trim();
        teamName += el[0].toUpperCase();
      };
    });
    return teamName.split('').sort().join('');
  }
  else{
    return false;
  }
  
  
};