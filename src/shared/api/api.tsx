import md5 from "md5"

const password = 'Valantis'; 
const timestamp = new Date().toISOString().slice(0, 10).split('-').join(''); 
const data = `${password}_${timestamp}`;

const authorizationString = md5(data);

export const getStore = async () => { await fetch("http://api.valantis.store:40000/", { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Auth': authorizationString }, body: JSON.stringify( { action: 'get_ids' } ),
    }).then( res => {
       res.json().then(results => 
        {let result = results
            if (result !== undefined) {
                console.log(result)
                return result
            }
         })
    }
        
     );
}