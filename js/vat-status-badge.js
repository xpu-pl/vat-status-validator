
let nip = '5542844688';

/* ===================== END OF CONFIGURATION ================================== */

function addImageWithVATStatusBadge(verified){
  let status = 'NIEZWERYFIKOWANY';
  let statusColor = 'red';
  if(verified){
    status = 'ZWERYFIKOWANY';
    statusColor = 'green';
  }
  let imageElement = document.createElement("img");
  imageElement.src = "https://img.shields.io/badge/VAT status-" + status + "-white?labelColor=" + statusColor + "&style=flat";
  imageElement.alt = "VAT status: " + status;
  imageElement.classList.add( "vat-status-" + statusColor);
  let sourceElement = document.getElementById("vat-status-badge");
  sourceElement.appendChild(imageElement);
}

function handleResponse(data){
  if(data.result){
    let verifiedStatus = (data.result.subject && data.result.subject.statusVat == 'Czynny' ? true : false);
    addImageWithVATStatusBadge(verifiedStatus);
  }
}

let currentDate = new Date().toISOString().slice(0, 10);
fetch('https://wl-api.mf.gov.pl/api/search/nip/' + nip + '?date=' + currentDate)
  .then(response => response.json())
  .then(data => handleResponse(data));
