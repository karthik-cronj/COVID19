class Coronaapi {
    constructor(){}

    async getdata(location){
        const countryresponse = await fetch('https://corona.lmao.ninja/all');
        const countrydata = await countryresponse.json();

        
        const indiaresponse = await fetch('https://corona.lmao.ninja/countries/India');        
        const indiadata = await indiaresponse.json();
        
        const usaresponse = await fetch('https://corona.lmao.ninja/countries/USA');        
        const usadata = await usaresponse.json();
        
        const gstatresponse = await fetch('https://corona.lmao.ninja/countries');
        const gstatdata = await gstatresponse.json();

        const usastatresponse = await fetch('https://corona.lmao.ninja/states');
        const usastatdata = await usastatresponse.json();

        const indstatresponse = await fetch('https://api.covid19india.org/data.json');
        const indstatdata = await indstatresponse.json();

        return {
        country : countrydata,
        india : indiadata,
        usa : usadata,
        gstat : gstatdata,
        usastat : usastatdata,
        indiastat : indstatdata
        }

    }

    async getspecific(text){
    let re = text
        
    const specresponse = await fetch(`https://corona.lmao.ninja/countries/${text}`);

        const specdata = await specresponse.json();

        return {
        specific : specdata
        }

    }
}