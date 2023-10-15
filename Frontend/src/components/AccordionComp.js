import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const accordionData = [
	{
		id: 'panel1',
		title: 'Scenario 1',
		content: `One of the Biggest Data Breaches from Phishing: \n\nJohn Podesta’s Email\nThere was a lot of controversy surrounding the November 2016 election on both sides of the political spectrum. One of the most notable was the hack of John Podesta’s Gmail account. Podesta, chairman of presidential candidate Hillary Clinton’s democratic election campaign, found himself as one of the country’s top phishing attack examples when his account was victimized by a Russian hacker group known as Fancy Bear. The phishers, pretending to be Google, sent an email saying that he needed to change his email after an attempted hack occurred. However, in true phishing attack fashion, the email linked to a malicious website. When someone with access to Podesta’s email used the compromised link, the hackers gained access to his account. This led to the eventual release of thousands of Podesta’s emails via WikiLeaks in the weeks leading up to the November election.`,
	},
	{
		id: 'panel2',
		title: 'Scenario 2',
		content: `One of the Biggest Data Breaches from Phishing: \n\nBenefitMall\nAmong the most recent phishing attacks reported by the media is one that affected BenefitMall, a human resource, employee benefits, and payroll administration solutions company. Between June 2018 and October 2018, the company’s website was accessed via employee email login credentials that were exposed during an email phishing attack, according to a press release. The types of consumer information left exposed in the affected mailboxes are thought to include names, email addresses, birth dates, bank account information, Insurance premium payment information. Although the full extent of the attack is not yet known, BenefitMall works with “a network of more than 20,000 Trusted Advisors” to serve more than “200,000 small and medium-sized businesses.” This leaves a potentially enormous group of employees and businesses at risk.`,
	},
	{
		id: 'panel3',
		title: 'Scenario 3',
		content: `Methodist Hospitals – Gary, Indiana\nIn August of 2019, investigators confirmed Methodist Hospitals’ worst fear. A phishing attack compromised more than 68,000 patients’ information. The hospital did not discover the breach until June when an employee reported suspicious activity in their email account. The investigation revealed that at least two email accounts had been compromised.\n\nThe data obtained from each affected patient varied but included the following: names, addresses, health insurance information, Social Security numbers, passport numbers, bank account numbers, electronic signatures, login credentials, dates of birth, treatment information, and insurance information.`,
	},
	{
		id: 'panel4',
		title: 'Scenario 4',
		content: `The University of Wisconsin-Parkside – Kenosha, Wisconsin\nIn June of 2019, the University of Wisconsin-Parkside was notified of a new bank account. This new account was a result of a phishing attack where an employee was prompted to change the routing numbers of two UW system vendors. Before discovering the issues, the university lost $315,000 in fraudulent bank transfers.`,
	},
];

export default function AccordionComponent() {
	const [expanded, setExpanded] = useState(null);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : null);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px', marginTop: "100px", marginBottom: "125px", height: "65%" }}>
			<h2 style={{ fontFamily: "Georgia", fontStyle: "normal", fontSize: "25px", paddingLeft: "11vw", paddingRight: "11vw" }}>Scenarios of Phishing Attack(Data breach due to Phishing Attack)</h2>
			{accordionData.map((item) => (
				<Accordion
					key={item.id}
					expanded={expanded === item.id}
					onChange={handleChange(item.id)}
					sx={{ width: '80%', marginBottom: '16px', boxShadow: '4px 4px 8px rgba(173, 216, 230, 0.6)' }}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`${item.id}bh-content`}
						id={`${item.id}bh-header`}
					>
						<Typography sx={{ fontStyle: "initial", fontSize: "18px", fontFamily: "Georgia" }}>{item.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography sx={{ alignContent: "left", fontStyle: "initial", fontSize: "16px", fontFamily: "cursive" }}>{item.content}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}