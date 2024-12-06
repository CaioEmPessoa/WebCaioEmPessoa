

const addRefImg = () => {

    const imagesRowList = document.getElementsByClassName("imgs-row");

    for (const imgsRow of imagesRowList) {

        const imgsInRow = imgsRow.getElementsByTagName("img");

        for (const img of imgsInRow) {
            const imgTitle = img.src.split("/imgs/")[1]

            const imgUrl = document.createElement("a");
    
            imgUrl.href = "#?img=" + imgTitle;
            
            img.parentNode.insertBefore(imgUrl, img)
            imgUrl.appendChild(img);
        }

    }
}

addRefImg()

