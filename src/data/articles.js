import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "What is Machine Learning?",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: ["What is Machine Learning?", "Atharva V"],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<h1>Article coming soon...</h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "11 July 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: ["Artificial Intelligence in Healthcare", "Atharva V"],
		body: (
			<React.Fragment>
				<h1>Article coming soon...</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
