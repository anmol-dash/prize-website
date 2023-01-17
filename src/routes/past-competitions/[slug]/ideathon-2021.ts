import type { Competition } from '$lib/types/competition';
import { Prize, Tier } from '$lib/types/enums';

export const data: Competition = {
	name: 'Ideathon 2022',
	desc: 'description',
	winners: [
		{
			prize: Prize.First,
			name: 'Nathan Chen',
			summary:
				'Biodegradable IoT moisture sensors can give us large quantities of data, allowing us to make better decisions on when/where to water crops.'
		},
		{
			prize: Prize.Second,
			name: 'Nusantara',
			summary: 'Highly-efficient, Vaseline-based, Solar Panel Cooling System'
		},
		{
			prize: Prize.Third,
			name: 'Cattalyze',
			summary:
				'A platform that empowers and enables growers to implement carbon-offsetting feed management practices and generate revenue through blockchain.'
		},
		{
			prize: Prize.Fourth,
			name: 'Pluck',
			summary:
				'Pluck is a software platform for businesses to redirect their excess food to consumers before it becomes food waste.'
		},
		{
			prize: Prize.Fifth,
			name: 'Economicalgae',
			summary:
				'To meet the growing demand for fuels, algae biofuels can be made a reality by streamlining and circularizing the algae biofuel production process via multi-outputs.'
		}
	],
	finalists: [
		{
			category: '',
			teams: [
				{
					name: 'Nathan Chen',
					members: [
						{
							name: 'Nathen Chen'
						}
					]
				},
				{
					name: '',
					members: [
						{
							name: 'Fauzia Rahmah'
						},
						{
							name: 'Firdausa Amilia'
						},
						{
							name: 'Josiah Syefatiawan'
						},
						{
							name: 'Nailah Shabirah'
						}
					]
				},
				{
					name: 'Cattalyze',
					members: [
						{
							name: 'Adam Shi'
						},
						{
							name: 'Ashwin Balaji'
						},
						{
							name: 'Grace Dai'
						},
						{
							name: 'Linda Wu'
						}
					]
				},
				{
					name: 'Pluck',
					members: [
						{
							name: 'Daniel Tao'
						}
					]
				},
				{
					name: 'Economicalgae',
					members: [
						{
							name: 'Krystal Li'
						},
						{
							name: 'Kayla Patel'
						}
					]
				}
			]
		}
	],
	affiliates: [
		{
			category: 'Judges',
			people: [
				{
					name: 'Brett Lasher',
					headline: 'Executive Director of Cox Communications’ New Growth & Development Group',
					bio: 'Brett Lasher is an innovation leader who heads innovation in the Energy vertical for Cox Communications’ New Growth & Development (NG&D) group. In this role, he is responsible for ideating around new opportunities (both B2B and B2C) in electricity, water, gas and oil and then working to de-risk and commercialize these initiatives. He is very active in the Atlanta entrepreneurial community having served as a mentor on multiple occasions in both the TechStars and Boomtown accelerators. In addition to his work at Cox, Brett currently serves as an advisor to nVenue (AI/ML data analytics company for sports content) and as a Limited Partner Ambassador for Energy Impact Partners helping to evaluate investment theses and start-up companies in the Energy space.'
				},
				{
					name: 'Hayley McCurdy',
					headline: 'Equity Analyst at Terra Alpha Investments',
					bio: "Hayley is an investment professional with experience in sustainability-focused strategies within public equities and venture capital. As an equity analyst at Terra Alpha Investments, Hayley is responsible for idea generation, sustainability analysis, and fundamental research of global companies within the utilities and healthcare industries. While pursuing her Master's degree at the University of Pennsylvania, Hayley also worked for Energy Impact Partners, an energy innovation venture firm, where she helped with investment diligence and co-authored the firm's inaugural Environmental Metrics Report."
				},
				{
					name: 'John Michael Lasalle',
					headline: 'Urban Climate Action Consultant, World Bank and Climate Policy Initiative',
					bio: "John Michael is an urban planner focused on preparing urban infrastructure for climate change globally. He has a master of City Planning from the University of Pennsylvania and a bachelor's in international development and architecture from Calvin University. Previously, he worked as an architect on projects in Egypt, Morocco, and the US and at a startup using aerial imagery from drones for building inspections and mapping."
				},
				{
					name: 'Kyle Welborn',
					headline: 'Co-founder and General Partner at Cultivation Capital',
					bio: 'Kyle is a co-founder and General Partner at Cultivation Capital, an early stage focused venture capital firm. He focuses on making investments across food and agriculture.'
				},
				{
					name: 'Lauren Hartle',
					headline: 'Associate at Prime Impact Fund',
					bio: 'Dr. Lauren Hartle is an Associate at Prime Impact Fund, with responsibility to source investment opportunities broadly, manage the Fund’s investment pipeline, and support investment diligence. Lauren’s professional background includes basic and applied R&D, spanning academic and start-up settings, as well as venture investing.'
				},
				{
					name: 'Mackenzie Marcotte',
					headline: 'Analyst at EcoAct',
					bio: 'Mackenzie Marcotte is an analyst with EcoAct North America’s Advisory team. Prior to joining EcoAct in 2021, she held a variety of sustainability consulting roles with nonprofits, large corporations, and industry coalitions in the natural foods, clean energy, and telecom sectors. She is a graduate of the University of Pennsylvania (Master of Environmental Studies, Corporate Sustainability & Food Systems), MINES ParisTech in France (Master of International Environmental Management), and Boston University (Bachelor of Arts, Political Science). She’s currently based in New York.'
				},
				{
					name: 'Matthew Cohen',
					headline: 'Director of Technology at Pangaea Ventures Ltd.',
					bio: 'Matt joined Pangaea Ventures in 2012. Prior to joining Pangaea Ventures, Matt was part of a start-up in printed electronics utilizing nanotechnology and has experience with companies in biotechnology and environmental bioremediation. He performed various functions ranging from R&D to business development to devising international launch strategies while gaining valuable start-up understanding. He works closely with TruTag Technologies and is on the NREL Investor Advisory Board. Matt holds an MPhil in Micro- & Nanotechnology Enterprise from the University of Cambridge and graduated summa cum laude from the University of Pennsylvania with a BSE in Materials Science & Engineering.'
				},
				{
					name: 'Suzanne Shaw',
					headline: 'Investment Operations at Asian Infrastructure Investment Bank',
					bio: '15 years’ international experience, focused on integrating sustainability and climate resilience with profitability in energy and infrastructure related investments'
				}
			]
		},
		{
			category: 'Mentors',
			people: [
				{
					name: 'Amber Luong',
					headline: 'Head of Partnerships at Blue Sky Analytics',
					bio: 'Amber is currently the Head of Partnerships for Blue Sky Analytics. She has over 15 years of experience across the financial sector, policy, international development, and a range of climate change mitigation and adaptation efforts.'
				},
				{
					name: 'Cynthia Wang',
					headline:
						"Master's student in Climate Change, Management, and Finance at Imperial College Business School, Researcher at Imperial College Grantham Institute",
					bio: 'Cynthia Wang has a BA in Environmental Studies and Political Science from Penn and is pursuing an MSc in Climate Change, Management, and Finance from Imperial College Business School in London. She is currently a Researcher with the Grantham Institute, as well as a Graduate Intern with the Asian Development Bank, specializing in private-public partnerships and climate adaptation finance. Prior to London, she was a Princeton in Asia Sustainable Cities Fellow at the Natural Resources Defense Council (NRDC) in Beijing.'
				},
				{
					name: 'Jack Policar',
					headline: 'COO of Phood',
					bio: 'Jack Policar is a Denver - NY based entrepreneur. He is currently the COO of Phood, a startup that allows college students to use dining dollars to order from DoorDash with free delivery (you can find more information at Phood.co) Outside of Phood, Jack teaches an entrepreneurship course, mentors a number of early-stage college student lead startups and is building a virtual sustainability community. '
				},
				{
					name: 'Joseph Moser',
					headline: 'Partner at Petri',
					bio: 'Josh is an entrepreneur and investor in sustainability. Currently, he is a partner at Petri, and previously, he worked on several early-stage ventures in sustainability, food, and agriculture.'
				},
				{
					name: 'Ted Netland',
					headline: 'Director of Business Development & New Ventures at Lever Advisers',
					bio: 'Ted Netland is the Director of New Ventures at a venture studio co-managed by the head of a prominent alt protein venture capital firm. He holds an MBA from MIT Sloan and was previously a senior associate at Cambridge Associates. '
				}
			]
		}
	],
	sponsor_tiers: [
		{
			tier: Tier.Null,
			sponsors: [
				{
					name: 'Amasia',
					desc: 'Amasia is a thesis-driven VC firm that invests in companies building a safer and more sustainable planet. Using a nuanced framework designed around behavior change, we invest in founders with global ambitions, at the Seed to Series B stages, across the United States, Southeast Asia, India, Europe and Latin America. We facilitate their growth with access to global markets, global best practices, and global knowledge.',
					website: 'https://www.amasia.vc/',
					linkedin: 'https://www.linkedin.com/company/amasia/about/',
					twitter: 'https://twitter.com/amasiavc'
				},
				{
					name: 'SJF Ventures',
					desc: 'SJF Ventures is a venture capital fund focused on delivering superior financial returns through investments in high growth, positive impact companies that are creating a healthier, smarter and cleaner future. SJF has a 22-year successful record of assisting visionary and talented management teams in building industry leading businesses. SJF provides strong expertise and networks in many sectors, including clean energy and mobility, supply chain and circular economy, sustainable food, health and wellness, and education and workforce technologies. SJF Ventures I, II, III, IV, and V have invested in over 75 portfolio companies to date.',
					website: 'https://sjfventures.com/',
					linkedin: 'https://twitter.com/sjfventures',
					facebook: 'https://www.facebook.com/sjfventures',
					twitter: 'https://www.linkedin.com/company/sjf-ventures/mycompany/'
				}
			]
		}
	]
};
