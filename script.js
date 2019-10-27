const outputHours = () => {
	const minutes = document.getElementById("userInput").value;
	const hours = minutes / 60;

	!isNaN(minutes) && minutes > 0
		? alert(`${minutes} minutes = ${hours} hour${minutes === '60' ? '' : 's'}`)
		: null
}