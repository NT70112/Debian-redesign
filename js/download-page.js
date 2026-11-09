$(function () {
    $(document).on("click", ".download-page__download-button, .prev-releases__download-button", function () {
        $(".ModuleWindow").removeClass("invisible");
        $(".backround").removeClass("invisible");
    });
    $(".ModuleWindow__button").on("click", function () {
        $(".ModuleWindow").addClass("invisible");
        $(".backround").addClass("invisible");
    });
});

const downloadPage = document.querySelector(".download-page__inner");

// downloadPage.addEventListener("click", (event) => {
//     const link = event.target.closest(".download-page__download-button");
//     if (!link) return;
//     event.preventDefault();
// });