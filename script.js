const corona = new Coronaapi;
const ui = new UI;
let rdata;

let switchnumber = 0;

let mainswitch = true;
corona.getdata(location).then(data => { 

    
    ui.displaybox(data.country);
    ui.displaystat(data.gstat);
    rdata = data.gstat;
    


    // if(location === 'india'){
    //     ui.displaybox(data.india);
    //     ui.displaystat(data.indiastat);
    //     rdata = data.gstat;
    //     }

    // if(location === 'usa'){
    //     ui.displaybox(data.usa);
    //     ui.displaystat(data.usastat);
    //     rdata = data.gstat;
    //     }

});

// corona.getdata('global');


document.querySelector('#searchbar').addEventListener('keyup',getresult);

document.querySelector('#global').addEventListener('click',global);

document.querySelector('#usa').addEventListener('click',usabox);

document.querySelector('#india').addEventListener('click',india);

// document.querySelector('#mainbtn').addEventListener('click',function(){

//     if(mainswitch){
//     document.querySelector('#hide').style.display = 'none';
//     }

//     else{
//      document.querySelector('#hide').style.display = 'grid';
//     }

//     mainswitch = !mainswitch;

// });




function global(e){

    document.querySelector('#usa').className = 'hiders';
    document.querySelector('#india').className = 'hiders';
    document.querySelector('#global').className = 'hiders current';

    switchnumber = 0;
    
    corona.getdata(location).then(data => { 
        document.querySelector('#stat-list').innerHTML = '';

    
        ui.displaybox(data.country);
        ui.displaystat(data.gstat);
        rdata = data.gstat;
    });


    e.preventDefault();
}



function usabox(e){

    document.querySelector('#usa').className = 'hiders current';
    document.querySelector('#india').className = 'hiders';
    document.querySelector('#global').className = 'hiders';

    switchnumber = 1;
    
    corona.getdata(location).then(data => { 

        document.querySelector('#stat-list').innerHTML = '';
        
        ui.displaybox(data.usa);
        ui.displaycountry(data.usastat);
        rdata = data.usastat;
    });


    e.preventDefault();
}



function india(e){

    document.querySelector('#usa').className = 'hiders';
    document.querySelector('#india').className = 'hiders current';
    document.querySelector('#global').className = 'hiders';

    switchnumber = 2;
    
    corona.getdata(location).then(data => { 

        document.querySelector('#stat-list').innerHTML = '';
    
        ui.displaybox(data.india);
        ui.displayindia(data.indiastat.statewise);
        // console.log(data.indiastat.statewise);
        rdata = data.indiastat;
    });


    e.preventDefault();
}






function getresult(e){

    

    

    let textinput = document.querySelector('#searchbar').value;
    if(textinput !== ''){

    document.querySelector('#stat-list').innerHTML = '';

    if(switchnumber === 0){

    let temp = [];

    corona.getspecific(textinput).then(data => { 

        if(data.specific.country !== undefined){

        temp.push(data.specific);
        console.log(temp);
        ui.displaystat(temp);
        }
    
    });
}

else if(switchnumber === 1){

    corona.getdata(location).then(data => { 

        document.querySelector('#stat-list').innerHTML = '';
        
        let statearr = [];
        data.usastat.forEach(element => {
            
                statearr.push(element);
            
        });

        

        statearr.forEach(element => {
            console.log(JSON.stringify(element.state) === "New York");
            console.log(JSON.stringify(element.state));
        });

        ui.displaycountry(statearr);


    });
}
else{


}


}
else{
    ui.displaystat(rdata);
}

    //     rdata.forEach(element => {
    //         let strcountry = JSON.stringify(element.country);
            


    //         if(strcountry == textinput){
    //             console.log(element);
    //         }
        
    
    //     // ui.displaystat(data.specific);
    
    // });


}

