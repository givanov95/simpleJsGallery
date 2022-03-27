<div class="images js-gallery-opener">
    <img src="../img.jpg">
</div>

<div class="gallery-modal">
    <!-- The Modal/Lightbox -->
    <div id="myModal" class="modal hidden">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div class="modal-content">

            <div class="gallery-main-image text-center">
                <img src="/">
            </div>

            <!-- Next/previous controls -->
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
    

            <!-- Thumbnail image controls -->
            <div class="columns-container">

                <?php
                    foreach ($images_array ?? [] as $img) {
                        echo "<div class='image-column'>
                            <img class='gallery-image' src='$img->url'>
                        </div>";
                    }
                ?>

            </div>
        </div>
    </div>
</div>

<script> 
new Gallery(".js-gallery-opener");
</script>