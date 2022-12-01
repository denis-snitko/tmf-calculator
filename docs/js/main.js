const openStepHandler = () => {
	const EL_stepBlock = document.querySelectorAll(".js-step");

	if (EL_stepBlock) {
		EL_stepBlock.forEach((element) => {
			element.addEventListener("click", (event) => {
				if (event.target.classList.contains("js-step-button-open")) {
					element.classList.toggle("close");
				}
			});
		});
	}
};

const activeTab = () => {
	const EL_tabs = document.querySelectorAll(".tabs__input");

	if (EL_tabs) {
		EL_tabs.forEach((currentElement) => {
			currentElement.addEventListener("click", () => {
				currentElement
					.closest(".tabs")
					.querySelectorAll(".js-tabs-label")
					.forEach((el) => el.classList.remove("active"));

				document
					.querySelector(`[for="${currentElement.id}"]`)
					.classList.toggle("active");
			});
		});
	}
};

addEventListener("DOMContentLoaded", () => {
	openStepHandler();
	activeTab();
});
