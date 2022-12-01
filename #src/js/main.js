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

addEventListener("DOMContentLoaded", () => {
	openStepHandler();
});
