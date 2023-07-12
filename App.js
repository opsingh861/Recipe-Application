const applicationID = "c496368a"
const applicationKey = "2933b144eb63370c2c800d17766dc7bb"

const inputField = document.querySelector("#textField")
const searchButton = document.querySelector("#submitButton")
const recipeContainer = document.querySelector("#recipeContainer")



const searchQuery = async () => {
    const query = inputField.value
    // const query = "pizza"
    // console.log(query)
    try {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${applicationID}&app_key=${applicationKey}`)
        const data = await response.json();
        data.hits.map((a) => {
            // console.log(a.recipe)
            const { image } = a.recipe
            // create element image
            const createImage = document.createElement("img")
            createImage.src = image
            recipeContainer.appendChild(createImage)
        })
    } catch (error) {
        console.log(error)
    }
}

// searchQuery()
searchButton.addEventListener("click", searchQuery)