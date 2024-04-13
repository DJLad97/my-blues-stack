// import { Theme } from "@radix-ui/themes";
// import redixCss from "@radix-ui/themes/styles.css?url";
import carouselCss from "@mantine/carousel/styles.css?url";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import coreCss from "@mantine/core/styles.css?url";
import datesCss from "@mantine/dates/styles.css?url";
import dropzoneCss from "@mantine/dropzone/styles.css?url";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "@radix-ui/themes/styles.css";

import { getUser } from "~/session.server";

import stylesheet from "./tailwind.css?url";

const theme = createTheme({
	colors: {
		primary: [
			"#fbeffa",
			"#f2dbf1",
			"#e6b2e4",
			"#da89d7",
			"#d065cd",
			"#ca4fc6",
			"#c744c2",
			"#af37ac",
			"#9d2e99",
			"#892486",
		],
	},
});

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "stylesheet", href: coreCss },
	{ rel: "stylesheet", href: carouselCss },
	{ rel: "stylesheet", href: datesCss },
	{ rel: "stylesheet", href: dropzoneCss },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
	return json({ user: await getUser(request) });
};

export default function App() {
	return (
		<html lang="en" className="h-full">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<Meta />
				<Links />
				<ColorSchemeScript />
			</head>
			<body className="h-full">
				<MantineProvider theme={theme}>
					<Outlet />
				</MantineProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
