import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	viewportFit: "cover",
};

export const metadata: Metadata = {
	title: "Frosthaven Ability Cards",
	description: "Manage your Frosthaven Ability Cards",
	keywords: [
		"Frosthaven",
		"Frosthaven Ability Cards",
		"Frosthaven Cards",
		"Frosthaven Cards Manager",
	],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en">
			<body className="bg-gray-950 text-primary font-sans antialiased">
				<SpeedInsights />
				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
