import React from 'react'

function About() {
	return (
		<div style={{ backgroundColor: "#ADD8E6", paddingLeft: "12vw", paddingRight: "12vw", color: "black", fontFamily: "cursive", paddingTop: "110px", paddingBottom: "120px" }}>
			<h1 style={{ alignContent: 'center', }}>About</h1>
			SecurePhish is a cutting-edge AI and Machine Learning-powered phishing detection system designed to safeguard individuals and organizations against the ever-evolving threat of phishing attacks. With cybercriminals becoming increasingly sophisticated in their methods, SecurePhish offers a robust and proactive solution to identify and thwart phishing attempts before they can cause harm.
			<br /><br />
			At the core of SecurePhish lies an advanced AI and ML algorithm that utilizes an extensive dataset containing both legitimate and phishing websites. From this dataset, we extract various features based on URL addresses, domains, HTML, and JavaScript code. These features are then used to train a model using the Random Forest Algorithm. This approach forms the bedrock of our system's accuracy, ensuring it delivers reliable results with a notably low false positive rate.
			<br /><br />
			Our commitment to enhancing online safety extends beyond just powerful algorithms. SecurePhish offers an intuitive browser extension that seamlessly integrates with your web experience, making secure browsing a hassle-free reality. Whether you're an individual concerned about securing your personal and financial data or a business seeking to fortify your digital defenses, SecurePhish provides the protection you need in an increasingly vulnerable online landscape.
			<br />
		</div>
	)
}

export default About