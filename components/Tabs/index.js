// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    console.log(response);
    response.data.topics.forEach(element => {
        const newTab = response.data.topics;
        tabs.appendChild(newTab);
    });
})
    .catch(error => {
        console.log('The Is An ERROR!', error);
    })

    const tabs = document.querySelector('.tabs')

    function tabsCreator(item) {
        const theElementTab = document.createElement('div');
        const theTabTopic = document.createElement('div');
        const theTabTitle = document.createElement('span');
    }