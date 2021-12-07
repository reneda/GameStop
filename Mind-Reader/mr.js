
//var mcu = [

//document.getElementById("q").innerHTML=database.wanda.snap.value;

var database = {
   iron_man:{name:"Iron Man",snap:false,female:false,dead:true,gg:false,og_avg:true,powers:false,titular:true,human_look:true,plant:false,ans:true},
   
   black_widow:{name:"Black Widow", snap:false, female:true, dead:true, gg:false, og_avg:true, powers:false, titular:true, human_look:true, plant:false, ans:true},
    
   capt_america:{name:"Captain America", snap:false, female:false, dead:false, gg:false, og_avg:true, powers:true, titular:true, human_look:true, plant:false, ans:true},
   
   hawkeye:{name:"Hawkeye", snap:false, female:false, dead:false, gg:false, og_avg:true, powers:false, titular:false, human_look:true, plant:false, ans:true},
   
   thor:{name:"Thor", snap:false, female:false, dead:false, gg:true, og_avg:true, powers:true, titular:true, human_look:true, plant:false, ans:true},
   
   hulk:{name:"The Incredible Hulk", snap:false, female:false, dead:false, gg:false, og_avg:true, powers:true, titular:true, human_look:false, plant:false, ans:true},
   
   bucky:{name:"Winter Soldier", snap:true, female:false, dead:false, gg:false, og_avg:false, powers:false, titular:true, human_look:true, plant:false, ans:true},
   
   quicksilver:{name:"QuickSilver", snap:false, female:false, dead:true, gg:false, og_avg:false, powers:true, titular:false, human_look:true, plant:false, ans:true},
   
   wanda:{name:"Scarlet Witch",snap:true,female:true,dead:false,gg:false,og_avg:false,powers:true,titular:false,human_look:true,plant:false,ans:true},
   
   vision:{name:"Vision",snap:false,dead:true,female:false,gg:false,og_avg:false,powers:true,titular:false,human_look:false,plant:false,ans:true},
   
   spiderman:{name:"Spider Man", snap:true, female:false, dead:false, gg:false, og_avg:false, powers:true, titular:true, human_look:true, plant:true, ans:true},
   
   dr_strange:{name:"Doctor Strange", snap:true, female:false, dead:false, gg:false, og_avg:false, powers:true, titular:true, human_look:true, plant:false, ans:true},
   
   ant_man:{name:"Ant Man", snap:false, female:false, dead:false, gg:false, og_avg:false, powers:false, titular:true, human_look:true, plant:false, ans:true},
   
   wasp:{name:"Wasp", snap:true, female:true, dead:false, gg:false, og_avg:false, powers:false, titular:true, human_look:true, plant:false, ans:true},
   
   black_panther:{name:"Black Panther", snap:true, female:false, dead:true, gg:false, og_avg:false, powers:true, titular:true, human_look:true, plant:false, ans:true},
   
   capt_marvel:{name:"Cpatain Marvel", snap:false, female:true, dead:false, gg:false, og_avg:false, powers:true, titular:true, human_look:true, plant:false, ans:true},
   
   falcon:{name:"Falcon", snap:true, female:false, dead:false, gg:false, og_avg:false, powers:false, titular:false, human_look:true, plant:false, ans:true},
   
   war_machine:{name:"War Machine", snap:false, female:false, dead:false, gg:false, og_avg:false, powers:false, titular:false, human_look:true, plant:false, ans:true},
   
   starlord:{name:"Star Lord", snap:true, female:false, dead:false, gg:true, og_avg:false, powers:true, titular:false, human_look:true, plant:false, ans:true},
   
   mantis:{name:"Mantis", snap:true, female:true, dead:false, gg:true, og_avg:false, powers:true, titular:false, human_look:false, plant:false, ans:true},
   
   gamora:{name:"Gamora", snap:false, female:true, dead:true, gg:true, og_avg:false, powers:true, titular:false, human_look:false, plant:false, ans:true},
   
   drax:{name:"Drax", snap:true, female:false, dead:false, gg:true, og_avg:false, powers:true, titular:false, human_look:false, plant:false, ans:true},
   
   rocket:{name:"Rocket", snap:false, female:false, dead:false, gg:true, og_avg:false, powers:true, titular:false, human_look:false, plant:false, ans:true},
   
   groot:{name:"Groot", snap:true, female:false, dead:false, gg:true, og_avg:false, powers:true, titular:false, human_look:false, plant:true, ans:true},
   
   nebula:{name:"Nebula", snap:false, female:true, dead:false, gg:true, og_avg:false, powers:true, titular:false, human_look:false, plant:false, ans:true},

};

function restore_choices()
{
	for(x in database)
		database[x].ans=true;
}
q_number=0;
function decide(choice)
{
	var q=document.getElementById("q");
	var count=0;
	var superhero="";
	document.getElementById('no').style.display="inline-block";
	switch(q_number)
	{

		case 0: q.innerHTML="Did your superhero die due to The Snap?";
		        break;
        case 1: 
                for( x in database)
                {
                	console.log(choice+" "+database[x].snap+" "+database[x].snap);
                	if(choice!=database[x].snap)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Is your superhero a female?";
                break;
        case 2: 
                for( x in database)
                {
                	console.log(choice+" "+database[x].female+" "+database[x].female);
                	if(choice!=database[x].female)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero+=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Is your Superhero or the actor that played him dead in the MCU?";
                break;
         case 3:
                for( x in database)
                {
                	
                	if(choice!=database[x].dead)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;

                		superhero+=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Is your Superhero a member of the Guardians of the Galaxy?";
                break;
         case 4:
                for( x in database)
                {
                	
                	if(choice!=database[x].gg)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero+=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Is your superhero one of the orginal/founding members of the Avengers?";
                break;
         case 5:
                for( x in database)
                {
                	//console.log(choice+" "+database[x].dead+" "+database[x].dead);
                	if(choice!=database[x].og_avg)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero+=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Does your superhero have supernatural/special powers without their suit?";
                break;
         case 6:
                for( x in database)
                {
                	console.log(choice+" "+database[x].dead+" "+database[x].dead);
                	if(choice!=database[x].powers)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero+=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Does your superhero appear in the title of an MCU movie?";
                break;
         case 7:
                for( x in database)
                {
                	console.log(choice+" "+database[x].dead+" "+database[x].dead);
                	if(choice!=database[x].titular)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero+=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Does your character look like a human at all times?";
                break;
         case 8:
                for( x in database)
                {
                	console.log(choice+" "+database[x].dead+" "+database[x].dead);
                	if(choice!=database[x].human_look)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero+=database[x].name;
                	}
                	console.log(count);
                }
                q.innerHTML="Are you thinking of a plant or a spider?";
                break;
          case 9:
                for( x in database)
                {
                	console.log(choice+" "+database[x].dead+" "+database[x].dead);
                	if(choice!=database[x].plant)
                		database[x].ans=false;
                }
                for( x in database)
                {
                	if(database[x].ans==true)
                	{
                		count++;
                		console.log(count);
                		superhero+=database[x].name;
                	}
                	console.log(count);
                }     
                break;            
         case 10:document.getElementById('no').style.display='none'; 
                 if(choice) q.innerHTML="Try Me again!";
                 else
                 	{
                 		q.innerHTML="Oops! Guess you've got some facts wrong.\n How bout we try again?";
                 		restore_choices();
                 		q_number=-1;
                 	}

               break;

        default: 
                 if(choice) location.reload();
                
               break;
	}
	if (count==1){ superhero=superhero.toUpperCase();q.innerHTML="<p>I know that you were thinking of... <br><br><b>"+superhero+'</b></p>'; q_number=9;}
	if (q_number>0 && q_number<9 && count==0){q.innerHTML="The spirits tell me you've lost your way. Lets try again.";restore_choices();q_number=-1;}
	q_number++;
   //if(choice=='yes') document.getElementById("q").innerHTML=database.iron_man.snap;
}



function test()
{
	console.log('test begins-');
   var flag=true;
   //var cp_db = JSON.parse(JSON.stringify(database));
   for(x in database)
   {

   	console.log('next');
   //x='iron_man';
   	for(y in database)
   	{
   		flag=true;
   		if(database[x].name==database[y].name)
   			continue;
   		//console.log(database[x].name+ ' and '+database[y].name);
        if(database[x].snap!=database[y].snap)
        { flag=false;}
        if(database[x].female!=database[y].female)
        { flag=false;}
        if(database[x].dead!=database[y].dead)
        { flag=false;}
        if(database[x].gg!=database[y].gg)
        { flag=false;}
        if(database[x].og_avg!=database[y].og_avg)
        { flag=false;}
        if(database[x].powers!=database[y].powers)
        { flag=false;}
        if(database[x].titular!=database[y].titular)
        { flag=false;}
        if(database[x].human_look!=database[y].human_look)
        { flag=false;}
        if(database[x].plant!=database[y].plant)
        { flag=false;}

   	if(flag==true)
   	   console.log (database[x].name+ 'and ' + database[y].name +' have the same properties');
   	}

   }
}

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age:"5",
//   eyecolor: "blue"
// };

// delete person.age;
// var a="";
// for (var key in person) {
//     if (person.hasOwnProperty(key)) {
//         a=a+key;
//     }
// }

// document.getElementById("demo").innerHTML = a;