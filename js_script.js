// Eerst maken we een div aan
let div = document.createElement('div');
// div krijgt een id
div.id = 'tel-niet-geldig-js';
// div krijgt html voor IN het element
div.innerHTML = 'Geen geldig telefoonnummer!';

// We zoeken het element waar het achter moet op
let billingPhoneJs = document.getElementById('billing_phone_js');
// We plaatsen de zojuist gemaakte div achter het gevonden element
billingPhoneJs.after(div);

//Hieronder kan je jouw oplossing doen
