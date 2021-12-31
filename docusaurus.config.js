// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
	title: "MinehutXYZ",
	tagline: "The leading Minehut support site",
	url: "https://ninehut.xyz",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "TeamMH",
	projectName: "MinehutXYZ",

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/TeamMH/Minehut.xyz/tree/main/docs",
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			hideableSidebar: true,
			navbar: {
				title: "My Site",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "home",
						position: "left",
						label: "Home",
					},
					{
						href: "https://github.com/TeamMH/Minehut.XYZ",
						label: "Edit this site",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Links",
						items: [
							{
								label: "Home",
								to: "/home",
							},
							{
								label: "Contribute",
								to: "/contribute",
							},
							{
								label: "Plugin List",
								to: "/plugins/list",
							},
						],
					},
					{
						title: "Socials",
						items: [
							{
								label: "Discord",
								href: "https://discord.gg/bS6FMMCVyg",
							},
							{
								label: "Github",
								href: "https://github.com/TeamMH/Minehut.xyz",
							},
							{
								label: "Youtube",
								href: "https://youtube.com/c/SkriptingTutorials",
							},
						],
					},
					{
						title: "Minehut",
						items: [
							{
								label: "Website",
								href: "https://minehut.com",
							},
							{
								label: "Forums",
								href: "https://forums.minehut.com",
							},
							{
								label: "Discord",
								href: "https://discord.gg/Minehut",
							},
						],
					},
				],
				copyright:
					"Minehut.xyz is not in any way or form affiliated to Minehut. The Minehut logo is a property of Minehut and we do not own it.",
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};
