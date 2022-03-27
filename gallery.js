; function Gallery(selector, options = {}) {

    this.selector = selector;
    this.options = options;
    const jsGalleryOpeners = document.querySelectorAll(`${this.selector}`);

    if (jsGalleryOpeners.length == 0) {
        return;
    }

    const thumbNails = document.querySelectorAll(".image-column img");
    const arrows = document.querySelectorAll(".prev, .next");


    // ADD EVENT LISTENERS 

    for (let opener of jsGalleryOpeners) {
        opener.addEventListener("click", openGallery);
    }
    document.querySelector(".modal .close").addEventListener("click", closeGallery);

    for (let thumb of thumbNails) {
        thumb.addEventListener("click", showSlides);
    }

    for (let arrow of arrows) {
        arrow.addEventListener("click", (e) => showSlides(e, true));
    }


    // Functions 
    function openGallery() {
        const firstThumbnail = document.querySelector(".modal .image-column img");
        firstThumbnail.classList.add("active");
        document.querySelector(".modal .gallery-main-image img").src = firstThumbnail.src;
        document.querySelector("#myModal").classList.remove("hidden");
    }

    function closeGallery() {
        document.querySelector("#myModal").classList.add("hidden");

    }

    function showSlides(e, slideNumber = false) {
        const trigger = e.currentTarget;
        const aciveThumb = document.querySelector(".gallery-image.active");
        aciveThumb.classList.remove("active");
        if (!slideNumber) {

            trigger.classList.add("active");
            document.querySelector(".modal .gallery-main-image img").src = trigger.src;

            return;
        }

        let activeThumbIndex = [...aciveThumb.closest(".columns-container").children].indexOf(aciveThumb.parentElement);
        let thumbElementsLength = aciveThumb.closest(".columns-container").childElementCount;

        if (trigger.classList.contains("prev")) {
            activeThumbIndex--;
        } else {
            activeThumbIndex++;
        }

        if (activeThumbIndex < 0) {
            activeThumbIndex = 0;
        }

        if (activeThumbIndex > thumbElementsLength - 1) {
            activeThumbIndex = thumbElementsLength - 1;
        }

        const thumbNailToShow = document.querySelectorAll(".gallery-image")[activeThumbIndex];
        document.querySelector(".modal .gallery-main-image img").src = thumbNailToShow.src;
        thumbNailToShow.classList.add("active");


    }
};



