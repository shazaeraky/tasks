
const btn = document.querySelectorAll("button")

function btnText () {
    alert("I wish to be a florist someday ^_^")
}

btn[0].addEventListener("click" , btnText);
btn[1].addEventListener("click" , changeText)



const title = document.querySelector("h1")

function changeText () {
    title.innerText = "‧₊˚❀༉‧₊˚.‧₊˚❀༉‧₊˚.‧₊˚❀༉‧₊˚.‧₊˚❀༉‧₊˚.‧₊˚❀༉‧₊˚.‧₊˚❀༉‧₊˚."
}
    title.addEventListener("click", changeText)


    const headers = document.querySelectorAll("h2")

    function changeHeaderColor (){
        for(i = 0 ; i < headers.length ; i++) {
            headers[i].style.backgroundColor = "lightblue"
        }
    }

    for (i = 0 ; i < headers.length; i++) {
        headers[i].addEventListener("mouseover" , changeHeaderColor)
    }

    function changeTitleColor () {

        title.style.backgroundColor = "lightblue"
    }

    title.addEventListener("mouseover" , changeTitleColor);



    const paragraph = document.querySelectorAll("p")

    function changeTextColor () {
        for(i=0; i < paragraph.length ; i++) {
            paragraph[i].style.color = "#673147"
        }
    }
    for(i = 0; i < paragraph.length ; i++) {
        paragraph[i].addEventListener("mouseover", changeTextColor)
    }

    

