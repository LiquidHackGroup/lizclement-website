// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="//db.onlinewebfonts.com/c/69f3ba1568ffb4e9d5c050bbcb518dfc?family=AridITC+TT"
					rel="stylesheet"
					type="text/css"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
