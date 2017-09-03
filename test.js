var elvAc_roster = {
    address: “WeWork Hazerem”,
    cohort: 6,
    names:{
        girls:[“lana”,“lise”,“anna”,“andrea”,“sarai”],
        boys:[“shy”,“yitzchak”,“amitay”,“dan”,“ivgeny”,“daniel”,“olin”,“ahron”,“avi”]
    }
}

elvAc_roster.numOfStudents = function(){
    return elvAc_roster.names.girls.length + elvAc_roster.names.boys.length;
}
elvAc_roster.numOfStudents();

var brandonsFunction = function(){
  console.log('hey')
}