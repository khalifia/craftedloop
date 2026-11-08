function toggleStory() {

    var story = document.getElementById("more-story");
    var button = document.getElementById("read-more");

    if (story.style.display == "none") {

        story.style.display = "block";
        button.innerHTML = "Baca Lebih Sedikit";

    } else {

        story.style.display = "none";
        button.innerHTML = "Baca Selengkapnya";

    }

}