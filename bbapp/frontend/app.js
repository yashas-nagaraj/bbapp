const API_BASE='/api'; async function loadSeasons(){let r=await fetch(API_BASE+'/seasons');let d=await r.json();console.log(d);} if(document.getElementById('seasons-list')) loadSeasons();
