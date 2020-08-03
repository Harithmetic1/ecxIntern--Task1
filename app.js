var responses = document.querySelector('#response');

async function apiCall () {
    
    const data =  await fetch(`http://www.boredapi.com/api/activity/`, {
        headers : {
            "Accept" : "application.json"
        }
    })
    const gotData = await data.json();
    console.log(gotData);
    let activity = gotData['activity']
    console.log(activity)
     responses.innerHTML = "You can " + activity;
}





    
