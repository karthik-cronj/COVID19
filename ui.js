class UI{
    constructor(){
        this.confirmed = document.querySelector('#confirmed');
        this.recovered = document.querySelector('#recovered');
        this.deaths = document.querySelector('#deaths');
        this.recoverydate = document.querySelector('#recovery-rate');
        
    }



    displaybox(country){

        this.confirmed.textContent = country.cases;
        this.recovered.textContent = country.recovered;
        this.deaths.textContent = country.deaths;
        this.recoverydate.textContent = ((country.deaths/country.cases)*100).toFixed(2) + '%';
    }


    displaystat(data){
        data.forEach(element => {

            // console.log(element.country);
            let row = document.createElement('tr');
            row.className ='table-row';

            row.innerHTML = `<td>${element.country}</td>
            <td>${element.cases}</td>
            <td>${element.recovered}</td> 
            <td>${element.deaths}</td>`;

            document.querySelector('#stat-list').insertAdjacentElement("beforeend", row);

        });
        

    }

    displayindia(data){
        data.forEach(element => {

            // console.log(element.country);
            let row = document.createElement('tr');
            row.className ='table-row';

            row.innerHTML = `<td>${element.state}</td>
            <td>${element.confirmed}</td>
            <td>${element.recovered}</td> 
            <td>${element.deaths}</td>`;

            document.querySelector('#stat-list').insertAdjacentElement("beforeend", row);

        });
        

    }


    displaycountry(data){
        data.forEach(element => {

            // console.log(element.country);
            let row = document.createElement('tr');
            row.className ='table-row';

            row.innerHTML = `<td>${element.state}</td>
            <td>${element.cases}</td>
            <td>${element.active}</td> 
            <td>${element.deaths}</td>`;

            document.querySelector('#stat-list').insertAdjacentElement("beforeend", row);

        });
        

    }

}