fetch('http://localhost:3000/pups/')
.then(response => response.json())
.then(json => json.forEach(renderPup));

function renderPup(pupInfo){
    
    // let dogFilter = document.querySelector('#good-dog-filter')
    // dogFilter.addEventListener('click', (e) => {
    //     fetch('http://localhost:3000/pups/')
    //     .then(response => response.json())
    //     .then(json => pupfilter(json));
    // })
    
    console.log(pupInfo)
    let spanDog = document.createElement('span')
    spanDog.textContent = pupInfo.name, pupInfo.id;
    spanDog.className = "doggies";
    
    document.querySelector('#dog-bar').append(spanDog);

    // let puppers = document.querySelector('')
      
    spanDog.addEventListener('click', () => {
        let hTwo = document.createElement('h2')
        let dogImage = document.createElement('img')
        let dogBtn = document.createElement('button')
        let dogId = pupInfo.id

        let pup = document.querySelector('#dog-info')
        document.querySelector('#dog-info').innerHTML =''
        hTwo.textContent = pupInfo.name
        dogImage.src = pupInfo.image
        dogBtn.textContent = pupInfo.isGoodDog ? 'Good Dog' : 'Bad Dog'

        pup.append(hTwo)
        pup.append(dogImage)
        pup.append(dogBtn)

        dogBtn.addEventListener('click', () => {
            if(dogBtn.textContent === 'Good Dog'){
                dogBtn.textContent = 'Bad Dog'
            }
            else{
                dogBtn.textContent = 'Good Dog'
            }


        } )

        // console.log(puppers)
        console.log(dogId)

    })

        //     const descBtns = document.querySelectorAll('.desc-btn');

        // descBtns.forEach((btn) => {
        // btn.addEventListener('click', (e) => {

        //     descText = btn.nextElementSibling;
        //     descText.classList.toggle('show');
        // });
        // });











}