// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const heads = document.querySelector('.header-container');

function Header() {
    const 
        head = document.createElement('div'),
        forDate = document.createElement('span'),
        theTitle = document.createElement('h1'),
        theHeadTemp = document.createElement('span')

        head.classList.add('header');
        forDate.classList.add('date');
        theHeadTemp.classList.add('temp');

        head.appendChild(forDate);
        head.appendChild(theTitle);
        head.append(theHeadTemp);

        forDate.textContent = 'SMARCH 28, 2019';
        theTitle.textContent = 'Lambda Times';
        theHeadTemp.textContent = '98°';

        return head;
}

heads.appendChild(Header())
