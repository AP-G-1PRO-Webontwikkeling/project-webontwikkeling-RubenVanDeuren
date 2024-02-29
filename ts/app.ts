import * as readline from 'readline-sync';
import data from '../json/commander.json';
import guild from '../json/guilds.json';

const commanders = data;
const guilds=guild;

function app(){    
    console.log("Welcome to the JSON data viewer!")
    console.log()
    console.log("1. View all data")
    console.log("2. Filter by ID")
    console.log("3. Exit")
    console.log()
    let choice = Number(readline.question("Please enter your choice: "))
    switch (choice) {
        case 1:
            alldata();
            break;
        case 2:
            chooseid();
            break;
        case 3:
            
            break;
        default:
            console.log("this is not an option")
            break;
    }
}

function alldata(){
    
    for (let i = 0; i < commanders.length; i++) {
        console.log('-'+commanders[i].name+'   ('+commanders[i].id+')') 
    }
    
}

function chooseid(){
    let choice = readline.question("Please enter the ID you want to filter by: ")
    switch (choice) {
        case "MTG-01":
            printout(0)
            break;
        case "MTG-02":
            printout(1)
            break;
        case "MTG-03":
            printout(2)
            break;
        case "MTG-04":
            printout(3)
            break;
        case "MTG-05":
            printout(4)
            break;
        case "MTG-06":
            printout(5)
            break;
        case "MTG-07":
            printout(6)
            break;
        case "MTG-08":
            printout(7)
            break;
        case "MTG-09":
            printout(8)
            break;
        case "MTG-10":
            printout(9)
            break;
        default:
            console.log("this is not an option.")
            break;
    }
}
function printout(num:number){
    
    console.log('-'+commanders[num].name+'   ('+commanders[num].id+')')
    console.log('   -oracle text: '+commanders[num].oracle)
    console.log('   -cmc: '+commanders[num].cmc)
    console.log('   -standardLegal: '+commanders[num].standardLegal)
    console.log('   -releasedate: '+commanders[num].releasedate)
    console.log('   -image: '+commanders[num].image)
    console.log('   -rarity: '+commanders[num].rarity)
    console.log('   -colorIdentity: '+commanders[num].colorIdentity)
    console.log('   -guild: '+commanders[num].guild.name)
    console.log('       -name: '+commanders[num].guild.name)
    console.log('       -colors: '+commanders[num].guild.colors)
    console.log('       -leader: '+commanders[num].guild.leader)
    console.log('       -guildHall: '+commanders[num].guild.guildHall)
    console.log('       -emblem: '+commanders[num].guild.emblem)
    console.log('       -motto: '+commanders[num].guild.motto)
}

app();