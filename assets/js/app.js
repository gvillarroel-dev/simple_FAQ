const questionButtons = document.querySelectorAll(".faq-question button");

questionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const faqQuestion = button.parentElement;
        const faqAnswer = faqQuestion.querySelector(".faq-answer");

        faqQuestion.classList.toggle("active");
        faqAnswer.classList.toggle("show");
    });
})