let inp = document.getElementById("inp")
let root = document.getElementById("root")

let data
let fetchApi = async () => {
    let url = "https://fakestoreapi.com/products"
    let response = await fetch(url)
    data = await response.json()
    console.log(data)

    let storeMain = document.getElementById("storeMain")
    //    for(let i=0;i<data.length;i++){
    //      let item1 = data[i]
    //          let item = document.createElement('p')
    //          let img = document.createElement('img')
    //          let itemText = document.createTextNode(item1.title)
    //          img.src=item1.image
    //          img.classList.add("apiimages")
    //          console.log(data)
    //          item.appendChild(itemText)
    //          item.appendChild(img)
    //          storeMain.appendChild(item)
    //    }
    storeMain.innerHTML = `<div class="cards">${data.map(x=>{
             return `
             <div class="carditems"> 
                 <p class="title">
                  ${x.title}
                   </p>
              <img class="apiimages" src=${x.image}>
              <p>Price: ${x.price}$</p>
              </div>`
    })}</div>`




}
fetchApi()




const add = () => {
    if (inp.value === "") {
        alert("😡😡Please Write Your Todo")
    } else {
        let list = document.createElement("li")
        list.classList.add("listItem")
        let listText = document.createTextNode(inp.value)
        list.append(listText)

        let span = document.createElement("span")
        span.classList.add("crossicon")
        span.innerHTML = "❌"

        list.append(span)


        root.append(list)

        inp.value = ""

    }

}


root.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
})


const menu = () => {
    let element = document.getElementById("sidebarDefault")
    element.classList.toggle("sidebar")
}


const drop = () => {
    let element = document.getElementById("dropstyleDefault")
    element.classList.toggle("dropstyle")
}


