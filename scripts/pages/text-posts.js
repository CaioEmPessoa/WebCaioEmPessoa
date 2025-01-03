fetch('./text-posts.json')
.then(response => response.json())
.then(allPostsData => {

    let textPostsList = Object.keys(allPostsData)
    const textPostsContainer = document.getElementById("text-posts-containter")

    textPostsList.forEach(el => {
        let postData = allPostsData[el]

        const textPostDiv = document.createElement("div")
        textPostsContainer.append(textPostDiv)
        
        // if json has custom code for post
        if (postData["code"] !== "") {
            textPostDiv.innerHTML = postData["code"]
            return
        }

        textPostDiv.classList = "text-post"

        const leftContent = document.createElement("div")
        leftContent.classList = "text-post-left-content"
        
        const profilePicture = document.createElement("img")
        profilePicture.alt = "pfp of my current mood"
        profilePicture.src = postData["pfp"]
        profilePicture.classList = "text-post-pfp"

        const date = document.createElement("p");
        date.classList = "text-post-date";
        date.innerHTML = postData["date"]

        leftContent.append(profilePicture, date)

        const rightContent = document.createElement("div")
        rightContent.classList = "text-post-right-content"
    
        const postTitleDiv = document.createElement("div")
        postTitleDiv.classList = "post-title"

        const postMood = document.createElement("span")
        postMood.classList = "post-emote"
        postMood.innerHTML = "Mood:" + postData["mood"]

        const titleSeparator = document.createElement("hr")
        titleSeparator.classList = "post-title-separator"

        const postTitle = document.createElement("span")
        postTitle.classList = "post-title"
        postTitle.innerHTML = postData["title"]

        postTitleDiv.append(postMood, titleSeparator, postTitle)

        const postSeparator = document.createElement("hr")
        postSeparator.classList = "post-separator"

        const postText = document.createElement("P")
        postText.classList = "post-text"
        postText.innerHTML = postData["content"]
        
        rightContent.append(postTitleDiv, postSeparator, postText)
        textPostDiv.append(leftContent, rightContent)


    });

});