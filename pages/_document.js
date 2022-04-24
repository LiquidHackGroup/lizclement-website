// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://db.onlinewebfonts.com/c/69f3ba1568ffb4e9d5c050bbcb518dfc?family=AridITC+TT"
					rel="stylesheet"
					type="text/css"
				/>
				<link
					href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
					rel="stylesheet"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
