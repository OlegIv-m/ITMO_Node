

function sendAjaxReq(){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'ajax.html');
	xhr.send();
	xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let tag = document.getElementById('container');
            tag.innerHTML = xhr.responseText;
        }
    }
}

