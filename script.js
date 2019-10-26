const outputHours = () => {
	const minutes = document.getElementById("userInput").value;
	const hours = minutes / 60;

	!isNaN(minutes)
		? alert(`${minutes} minutes = ${hours} hour${minutes === '60' ? '' : 's'}`)
		: alert('Invalid input. Please try again')
}