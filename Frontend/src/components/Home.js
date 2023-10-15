import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fontSize } from '@mui/system';
import { useLocation } from 'react-router-dom';

const accordionData = [
	{
		id: 'panel1',
		title: 'Feature 1: Prefix-Suffix Separation',
		content: 'Phishing websites frequently employ deceptive prefixes or suffixes to imitate legitimate domains. Detecting the presence of unusual prefixes or suffixes is vital in spotting potential phishing attempts.',
	},
	{
		id: 'panel2',
		title: 'Feature 2: Subdomains',
		content: 'To appear legitimate, phishing sites may incorporate subdomains. Analyzing the number and patterns of subdomains can provide insights into potential phishing activity.',
	},
	{
		id: 'panel3',
		title: 'Feature 3: URL Length',
		content: 'Phishing URLs are often characterized by excessive length, including numerous random characters or subdirectories. Unusually long URLs can raise red flags as possible phishing attempts.',
	},
	{
		id: 'panel4',
		title: 'Feature 4: Domain Age',
		content: 'Legitimate websites typically have a longer history, while phishing domains are often newly created. Examining the age of a domain is a valuable indicator for detection.',
	},
	{
		id: 'panel5',
		title: 'Feature 5: DNS Records',
		content: "The presence or absence of DNS records can hint at a domain's legitimacy. Legitimate websites usually have DNS records, while some phishing domains might not.",
	},
	{
		id: 'panel6',
		title: 'Feature 6: Domain Registration Length',
		content: 'Phishing domains often have short registration periods to evade long-term detection. Analyzing the registration duration of a domain can assist in identifying suspicious activity.',
	},
	{
		id: 'panel7',
		title: 'Feature 7: Statistical Analysis',
		content: 'Incorporating statistical features, such as entropy, character frequencies, or keyword analysis, can reveal irregularities commonly associated with phishing URLs.',
	},
	{
		id: 'panel8',
		title: 'Feature 8: URL Shorteners',
		content: 'The use of URL shorteners like TinyURL can obscure the true destination. Detecting the use of URL shorteners is a valuable feature in identifying potential phishing links.',
	},
	{
		id: 'panel9',
		title: 'Feature 9: Slash Usage',
		content: 'Phishing URLs may contain excessive slashes or unusual path structures. Identifying irregularities in slash placement and frequency can be informative.',
	},
	{
		id: 'panel10',
		title: 'Feature 10: Dot Usage',
		content: 'The presence of extra dots in domain names can be indicative of phishing. For instance, comparing "legit.com" to "l.egit.com" can reveal potential threats.',
	},
];

export default function Hero() {
	const [urlInput, setUrlInput] = useState(''); // Default text in the input box
	const [prediction, setPrediction] = useState('');
	const [score, setScore] = useState([]);
	const [detectionFeatures, setDetectionFeatures] = useState([]);
	const [expanded, setExpanded] = useState(null);

	// fetch query parameter 
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const url = queryParams.get('url');

	useEffect(() => {
		// Code to run as the effect
		setUrlInput(url)
	}, []);

	const handleInputChange = (e) => {
		setUrlInput(e.target.value);
	};
	const [isPredictClicked, setIsPredictClicked] = useState(false);
	const handlePredictClick = () => {
		// Check if the input URL starts with "www," "http," or "https"

		setIsPredictClicked(true);
		// Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
		const API_ENDPOINT = 'https://securephish.onrender.com/Predict';

		axios
			.post(API_ENDPOINT, { url: urlInput }, { headers: { 'Content-Type': 'application/json' } })
			.then((response) => {
				// Assuming your API returns the prediction result in 'response.data.detection'
				const detection = response.data.detectionResult;
				setPrediction(detection == 1 ? 'Phishing' : 'Safe');
				// setScore(detection[2]);
				// setDetectionFeatures(detection.slice(3)); // Get features starting from index 2
				setExpanded('panel1'); // Open the first Accordion when data is received
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	const [isClicked, setIsClicked] = useState(false);

	const predictButtonStyle = {
		marginLeft: '5px',
		marginTop: '20px',
		width: '100px',
		height: '45px', // Increase the height of the button text
		backgroundColor: isPredictClicked ? '#4B9CC5' : '#ADD8E6',
		color: 'black',
		fontFamily: "Georgia",
		transition: 'background-color 0.3s', // Add a smooth transition for color change
		fontSize: "18px",
		fontStyle: "normal",
		marginRight: '10px',
	};

	const predictButtonHoverStyle = {
		backgroundColor: '#4B9CC5',
		marginLeft: '5px',
		marginTop: '20px',
		width: '100px',
		height: '45px', // Increase the height of the button text
		color: 'black',
		fontFamily: "Georgia",
		fontSize: "18px",
		fontStyle: "normal",
		marginRight: '10px',
	};

	const handleResetClick = () => {
		setUrlInput(''); // Reset the default text in the input box
		setPrediction('');
		setScore('');
		setDetectionFeatures([]);
		setExpanded(null); // Close all accordions on reset
		setIsClicked(true);
	};

	const buttonStyle = {
		marginLeft: '5px',
		marginTop: '20px',
		width: '100px',
		height: '45px', // Increase the height of the button text
		backgroundColor: isClicked ? '#4B9CC5' : '#ADD8E6',
		color: 'black',
		fontFamily: "Georgia",
		transition: 'background-color 0.3s', // Add a smooth transition for color change
		fontSize: "18px",
		fontStyle: "normal",
	};

	// Define a style for the button when hovering
	const buttonHoverStyle = {
		backgroundColor: '#4B9CC5',
		marginLeft: '5px',
		marginTop: '20px',
		width: '100px',
		height: '45px', // Increase the height of the button text
		color: 'black',
		fontFamily: "Georgia",
		fontSize: "18px",
		fontStyle: "normal",
	};

	return (
		<div style={{ textAlign: 'center', marginTop: '125px', color: 'black', marginBottom: "125px", fontFamily: "Georgia", fontStyle: "normal", fontWeight: "30px" }}>
			<h1>SecurePhish</h1>
			<input
				type="text"
				placeholder="Enter URL"
				value={urlInput}
				onChange={handleInputChange}
				style={{ width: '50vw', height: '40px', fontFamily: "serif", fontSize: "18px", boxShadow: '4px 4px 8px rgba(173, 216, 230, 0.6)', borderColor: "#4B9CC5" }}
			/><br />
			<button onClick={handlePredictClick} style={isPredictClicked ? predictButtonHoverStyle : predictButtonStyle}>Predict</button>
			<button onClick={handleResetClick} style={isClicked ? buttonHoverStyle : buttonStyle}>Reset</button>
			{prediction && (
				<div>
					<p>Prediction Result: {prediction}</p>
					<p style={{ marginLeft: "15vw", marginRight: "15vw" }}>This URL is detected as {prediction} </p>
				</div>
			)}
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '15px' }}>
				<br />
				<h2>Extraction Features</h2>
				{accordionData.map((item, index) => (
					<Accordion
						key={item.id}
						expanded={expanded === item.id}
						onChange={() => setExpanded(expanded === item.id ? null : item.id)}
						sx={{ width: '60%', marginBottom: '16px', boxShadow: '4px 4px 8px rgba(173, 216, 230, 0.6)' }}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`${item.id}bh-content`}
							id={`${item.id}bh-header`}
						>
							<Typography sx={{ fontStyle: "initial", fontSize: "18px", fontFamily: "Georgia" }}>{item.title}</Typography>
						</AccordionSummary>
						<AccordionDetails style={{ textAlign: 'left' }}>
							<Typography sx={{ alignContent: "left", fontStyle: "initial", fontSize: "16px", fontFamily: "cursive" }}>{item.content}</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</div>
	);
}