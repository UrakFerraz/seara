{
	let steps = document.querySelectorAll('.FerramentasImprensaFormSteps');

	steps = [...steps];

	function toStep2() {
		steps.forEach(elem => elem.style.transform = 'translateX(-100%)');
		document.querySelector('.step2').classList.add('stepActive');
		document.querySelector('.step3').classList.remove('stepActive');
		document.querySelector('.stepsLine1').classList.add('stepsLineActive');
		document.querySelector('.stepsLine2').classList.add('stepsLineGradient');
	}

	function toStep3() {
		steps.forEach(elem => elem.style.transform = 'translateX(-200%)');
		document.querySelector('.step2').classList.add('stepActive');
		document.querySelector('.step3').classList.add('stepActive');
		document.querySelector('.stepsLine1').classList.add('stepsLineActive');
		document.querySelector('.stepsLine2').classList.add('stepsLineActive');
		document.querySelector('.stepsLine2').classList.remove('stepsLineGradient');
	}

	function voltar() {
		steps.forEach(elem => elem.style.transform = 'translateX(0%)');
		document.querySelector('.step2').classList.remove('stepActive');
		document.querySelector('.step3').classList.remove('stepActive');
		document.querySelector('.stepsLine1').classList.remove('stepsLineActive');
		document.querySelector('.stepsLine2').classList.remove('stepsLineActive');
		document.querySelector('.stepsLine2').classList.remove('stepsLineGradient');		
	}

	document.querySelector('.step1ContinueBtn').addEventListener('click', el => {
		return toStep2();
	});

	document.querySelector('.step2ContinueBtn').addEventListener('click', el => {
		return toStep3();
	});

	document.querySelector('.step3VoltarBtn').addEventListener('click', el => {
		return voltar();
	});
	
	document.querySelector('.step2').addEventListener('click', el => {
		return toStep2();
	});

	document.querySelector('.step3').addEventListener('click', el => {
		return toStep3();
	});

	document.querySelector('.step1').addEventListener('click', el => {
		return voltar();
	});
}