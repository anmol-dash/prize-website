import type { Competition } from '$lib/types/competition';
import { Prize, Tier } from '$lib/types/enums';

export const data: Competition = {
	name: 'Prize 2022',
	desc: 'description',
	winners: [
		{
			prize: Prize.First,
			name: 'Gurami',
			summary:
				'Gurami is an Indonesian-based company that aims to close the loop of the current Indonesian food system by upcycling food waste as one of the highest greenhouse gas contributors. We generate value in the Circular Economy by developing the potential of the Black Soldier Fly by bio-converting food waste into protein-rich fish feed. We aim to prosper the welfare of fish farmers by providing high-quality, safe, affordable, and environmentally friendly products by producing high-quality fish feed locally and empowering rural communities in Indonesia.'
		},
		{
			prize: Prize.Second,
			name: 'Rethink Symbio',
			summary:
				'Currently nitrogen fertilizer alone contributes to 2.4% of global emissions, and excess application of N-fertilizer causes nitrous oxide emissions equivalent to 6.8M tons of CO2 annually. Rethink Symbio delivers a microbe-based fertilizer designed to prevent excess fertilizer application and carbon intensive synthetic fertilizer manufacturing processes. We study high yielding healthy plants and identify strains that are beneficial to the plant and resistant to being outcompeted by others in soil, create base formulations for broad crop categories (ie legumes, citrus, etc.), and then deliver custom formulations accounting for the specific crop type, soil sample that farmers send us, and local seasonal weather patterns.'
		},
		{
			prize: Prize.Third,
			name: 'Aloe Points',
			summary:
				'Aloe Points is the social app that empowers users to be their most sustainable selves. Aloe Points hosts personalized and actionable sustainability missions, embedded with social features and sustainable rewards. Missions consist of a mix of native challenges and customized business-partner challenges to promote local engagement (e.g. zero-waste stores, plant-based cafes). Learn about the impact of your choices, reduce your carbon footprint, engage your friends, and unlock sustainable rewards! Being sustainable has never been this motivating and engaging!'
		},
		{
			prize: Prize.HM,
			name: 'Pollinator, Waxworm Generator!',
			summary:
				"We are seeking new ways to solve long-standing problems through harnessing the power of bugs to make the world a better place. This project is even more important nowadays as insect populations have declined due to habitat loss and the widespread use of pesticides. Our goal is to preserve the amazing biological diversity that nature has provided by finding ways that unique abilities among Earth's organisms can help us break down plastic and food waste and convert them into useful products that will further reduce our ecological impact and promote continued sustainability."
		},
		{
			prize: Prize.HM,
			name: 'Hydrovia',
			summary: ''
		}
	],
	finalists: [
		{
			category: 'Energy and Transportation',
			teams: [
				{
					name: 'Dehdoh Travel',
					members: [
						{
							name: 'Ishaaq Shafi',
							school: 'University of Pennsylvania'
						}
					]
				},
				{
					name: 'Powerhouse',
					members: [
						{
							name: 'Blessed Kutyauripo',
							school: 'Prince Edward School'
						},
						{
							name: 'Atupele Phiri',
							school: 'Prince Edward School'
						}
					]
				}
			]
		},
		{
			category: 'Food and Agriculture',
			teams: [
				{
					name: 'Rethink Symbio',
					members: [
						{
							name: 'Yi-An Hsieh',
							school: 'University of Pennsylvania'
						},
						{
							name: 'Parth Mody',
							school: 'University of Pennsylvania'
						}
					]
				},
				{
					name: 'Hydrovia',
					members: [
						{
							name: 'Chase Leffers',
							school: 'Northeastern University'
						}
					]
				}
			]
		},
		{
			category: 'Waste and Circularity',
			teams: [
				{
					name: 'Gurami',
					members: [
						{
							name: 'Moch Graha',
							school: 'University of Pennsylvania'
						}
					]
				},
				{
					name: 'e-Savlage',
					members: [
						{
							name: 'Matthias Choi',
							school: 'Northern Valley Regional High School'
						}
					]
				}
			]
		},
		{
			category: 'Wild Card',
			teams: [
				{
					name: 'Aloe Points',
					members: [
						{
							name: 'Adarsh Kumar',
							school: 'University of Chicago'
						},
						{
							name: 'Saloni Mundhra',
							school: 'University of Chicago'
						}
					]
				},
				{
					name: 'Pollinator, Waxworm Generator!',
					members: [
						{
							name: 'Sharon Eastburn',
							school: 'Pennsbury High School'
						},
						{
							name: 'George Kopf',
							school: 'Princeton High School'
						},
						{
							name: 'Julie Liu',
							school: 'Princeton High School'
						},
						{
							name: 'Katherine Monroe',
							school: 'Princeton High School'
						}
					]
				}
			]
		},
		{
			category: 'High School',
			teams: [
				{
					name: 'Algology',
					members: [
						{
							name: 'Christopher Kwok',
							school: 'Sequoia High School'
						},
						{
							name: 'Nicholas Kwok',
							school: 'Sequoia High School'
						}
					]
				},
				{
					name: 'Amazon Drone',
					members: [
						{
							name: 'Lucas Tejedor da Silva',
							school: 'Centro Tecnológico Federal Celso Suckow da Fonseca'
						}
					]
				}
			]
		}
	],
	affiliates: [
		{
			category: 'Keynote Speakers',
			people: [
				{
					name: 'Andrew Beebe',
					headline: 'Managing Director @ Obvious Ventures',
					linkedin: 'https://www.linkedin.com/in/andrewbeebe/'
				},
				{
					name: 'Elaine Hsieh',
					headline: 'Co-Founder and Chief Marketing Officer @ Third Derivative',
					linkedin: 'https://www.linkedin.com/in/elaineishere/',
					bio: "Bringing 25 years of industry experience leading, managing, and consulting on a wide range of sustainability, green building, clean energy, and technology issues, Elaine is passionate about the power of multi-stakeholder alignment and helping people understand and respect the interconnectedness of our world.\
					Elaine is currently focused on scaling up Third Derivative (D3) — a vertically-integrated global climate tech accelerator program founded by RMI and New Energy Nexus. D3 has been building an inclusive ecosystem to rapidly find, fund and scale climate tech innovation globally. By uniting and aligning committed investors, global corporates, and RMI's market, regulatory, and policy experts — all the stakeholders needed to bridge gaps faster — supported by financing and insights along the way, D3 increases the rate at which climate innovations can help us achieve a prosperous, equitable, and inclusive 1.5-degrees C world.\
					Prior to joining the D3 leadership team, Elaine was widely recognized as the program director for VERGE at GreenBiz — the premier global event series focused on scaling solutions that bridge technology, sustainability, and systems-thinking across cities and industries. She has also had careers as a green building consultant, utility business strategist, engineer, and technologist. Elaine graduated from Duke University with a Master’s degree in engineering management and a Bachelor’s in biomedical engineering."
				}
			]
		},
		{
			category: 'Judges',
			people: [
				{
					name: 'Vasiliki Papanikolopoulos',
					headline: 'Founder and Creative Director @ Coimatan',
					linkedin: 'https://www.linkedin.com/in/vasilikipapanikolopoulos/',
					bio: 'Vasiliki founded Coimatan, a think tank for local retail, with a passion for disrupting the status quo to bring about positive change at the intersection of social, environmental, and economic impact. Prior to starting Coimatan, Vasiliki was a part of startups, corporations, and venture capital firms leading marketing, procurement, strategy, and business development projects. Vasiliki is a B Leader certified by B Lab, the leading social organization for business and holds a B.S. in Chemical and Biomolecular Engineering from the University of Pennsylvania.'
				},
				{
					name: 'Katie Gardner',
					headline: 'Product Manager @ Banyan Infrastructure',
					linkedin: 'https://www.linkedin.com/in/kathryndgardner/',
					bio: 'Katie is passionate about climate solutions, primarily clean technology, renewable energy, and sustainability, which stems from her lifelong love of the outdoors and desire to leave the world a better place. Currently she is working in cleantech as a product manager and legal counsel for Banyan Infrastructure, where she has been since completing the Wharton and Penn Law JD/MBA program in May 2020. Prior to graduate school, she was an underground mining engineer for Newmont in Northeast Nevada and is a 2013 Mining Engineering graduate of the University of Kentucky College of Engineering.'
				},
				{
					name: 'Raghav Poddar',
					headline: 'CEO @ Forward Kitchens',
					linkedin: 'https://www.linkedin.com/in/bypoddar',
					bio: "Raghav is the CEO and co-founder of Forward Kitchens, a ghost kitchen startup backed by Y Combinator, Floodgate, Slow Ventures, SV Angel. Raghav studied Computer Science at Columbia University and graduated in 2019 after which he joined Y Combinator's Summer 2019 batch. Raghav aims to better allocate underutilized kitchens and help mom and pop restaurants earn additional revenue through their kitchens."
				},
				{
					name: 'Jack Policar',
					headline: 'Co-Director @ The Climate Wiki',
					linkedin: 'https://www.linkedin.com/in/jack-policar/',
					bio: 'Jack Policar is a multi-time founder originally from the Bay Area and now living in beautiful Colorado. He is a Product Manager at Toucan Protocol where he leads the Builder Hub helping companies build with programmable carbon. He is also the Co-Director of The Climate Wiki, a crowdsourced database for climate resources and information. developer.toucan.earth / theclimate.wiki'
				},
				{
					name: 'Ryan Jeffrey',
					headline: 'Managing Director of Sustainability @ gener8tor',
					linkedin: 'https://www.linkedin.com/in/rcjeffery/',
					bio: 'Ryan Jeffery is an experienced entrepreneur, investor and advisor who helps leaders and organizations do their best work. With over a decade of experience founding and building high-growth organizations, Ryan is focused on supporting early-stage companies at the forefront of our climate and environmental crisis as the Managing Director of sustainability at gener8tor. Ryan is a three-time founder (one acquired), investor, board member, and advisor to numerous startups.'
				},
				{
					name: 'David Izikowitz',
					headline: 'CEO @ Carbon Infinity',
					linkedin: 'https://www.linkedin.com/in/david-izikowitz/',
					bio: 'I co-founded MYEO (an EdTech social business based in Yangon, Myanmar) while at the University of Hong Kong in 2015 and ran the company for over two years alongside my studies. I have an academic background in both engineering and finance and my work has spanned roles across technology, product, strategy and growth for social impact oriented startups in Greater China, South-East Asia, and the UK. I have been engaged in an advisory capacity by both government agencies in the Philippines and some of the biggest startups in China.\
					In 2018 I transitioned to a focus on clean technology and carbon removal, later enrolling in a Masters in Environmental Engineering program in Shanghai. Alongside starting a Direct Air Capture company (Carbon Infinity - www.carboninfinity.com) - capturing and sequestering CO2 directly from the air and closing the carbon cycle with products for hard-to-abate industries, I am also researching economic de-fossilisation pathways and avenues to commercialise carbon removal solutions.\
					I am always keen to meet new people with an interest in all things clean/climate tech, carbon removal and policy. Feel free to drop me a message!'
				},
				{
					name: 'Amber Luong',
					headline: '',
					linkedin: 'https://www.linkedin.com/in/ambercluong/',
					bio: 'Amber has nearly 20 years of experience across the financial sector, policy, international development, and a range of climate change mitigation and adaptation efforts. In her last role, Amber was the Head of Partnerships for Blue Sky Analytics, a climate tech startup focused on environmental data products combining satellite data and AI.'
				}
			]
		},
		{
			category: 'Final Judges',
			people: [
				{
					name: 'Dr. Michael Campos',
					headline: 'Principle @ Azolla Ventures'
				},
				{
					name: 'Lydia Li',
					headline: 'VP of Investments @ AREVON'
				},
				{
					name: 'Ben Thomas',
					headline: 'Associate Consultant @ Bain & Company'
				},
				{
					name: 'Asher Goldman',
					headline: 'The Wharton School, @ Generate Capital'
				}
			]
		},
		{
			category: 'Mentors',
			people: [
				{
					name: 'Justin Heyman',
					headline: 'Managing Director @ Spring Growth Partners',
					linkedin: 'https://www.linkedin.com/in/justin-heyman/',
					bio: 'Investor with over 15 years of experience in the energy and environmental sustainability space. Currently work as a Managing Director for Spring Growth Partners, where I make private equity investments in companies that both positively impact environmental sustainability and deliver strong financial returns.'
				},
				{
					name: 'Eric Lee',
					headline: 'Vice President @ Aligned Climate Capital',
					linkedin: 'https://www.linkedin.com/in/elee1593/',
					bio: 'Eric Lee is a Vice President with Aligned Climate Capital, an asset manager that invests exclusively in the companies and real assets that are decarbonizing the global economy and its infrastructure. In this role, Eric leads Aligned’s Environmental, Social, and Governance (ESG) analysis of climate infrastructure and venture capital investment opportunities.\
					Previously, Eric was an investment professional at TriLinc Global, a global impact investing fund manager. Prior to TriLinc, he worked at Sustainable Insight Capital Management, an ESG public equities fund. Eric holds a B.S. from Cornell University and an M.S. in Sustainability Management with a concentration in Sustainable Finance from Columbia University.'
				},
				{
					name: 'Daniel Kriozere',
					headline: 'Principal @ C3',
					linkedin: 'https://www.linkedin.com/in/danielkriozere/',
					bio: 'Daniel is a Principal at C3, Tech Scout at For ClimateTech, and Venture Scout at Prithvi - and has an extensive network within the broader climate investment and startup community.\
					https://danielkr.io/'
				},
				{
					name: 'Raghav Poddar',
					headline: 'CEO @ Forward Kitchens',
					linkedin: 'https://www.linkedin.com/in/bypoddar',
					bio: "Raghav is the CEO and co-founder of Forward Kitchens, a ghost kitchen startup backed by Y Combinator, Floodgate, Slow Ventures, SV Angel. Raghav studied Computer Science at Columbia University and graduated in 2019 after which he joined Y Combinator's Summer 2019 batch. Raghav aims to better allocate underutilized kitchens and help mom and pop restaurants earn additional revenue through their kitchens."
				},
				{
					name: 'Pooja Tilvawala',
					headline:
						'Founder @ Youth Climate Collaborativei Youth Engagement Manager @ The Climate Initiative',
					linkedin: 'https://www.linkedin.com/in/pooja-tilvawala/',
					bio: 'Pooja was born in India but raised near Philadelphia. In 2018, she graduated from American University with degrees in Economics and International Studies, specializing in justice, ethics, and human rights, and South Asia. After graduating, Pooja worked as a Project Associate for the Meridian Institute, committed to collaborative problem-solving on environmental issues.\
					In January 2022, she began her role as Youth Engagement Manager of The Climate Initiative. She also works part-time as the Executive Director of Youth Climate Collaborative, which she founded in November 2020. Her latest project is a podcast, Dare to Envision.\
					She is active in networks and programs including YOUNGO (the official UNFCCC youth constituency), Coalition WILD, and Aspen Institute’s Future Leaders Climate Summit. Her purpose in life is to nurture her curiosity and creativity, encourage herself and others to challenge the status quo, and unite people to improve the quality of life for all.'
				},
				{
					name: 'Nicholas Yiu',
					headline: 'Co-Founder @ Intercalation',
					linkedin: 'https://www.linkedin.com/in/nicholasyiu/',
					bio: 'Nicholas is currently at UCL Business commercialising early-stage research from UCL, Co-Founder & Author at Intercalation where he writes and advises about battery tech, and advisor for various organizations and companies.'
				},
				{
					name: 'Roland Scott',
					headline: 'Principal and Co-Founder @ Clean Energy Analytics',
					linkedin: 'https://www.linkedin.com/in/roland-scott-7937751/',
					bio: 'A semi-retired business executive and management consultant with a long history in energy markets and renewables. He currently is a NYSERDA entrepreneur in residence, lead mentor at the CleanTech Open, NSF I-Corps industry mentor, Praxis Center for Venture Development mentor, as well as other organizations. He advises on entrepreneurship, business development execution, financing, and strategy. Prior experience includes B2B markets for energy technology, business software, industrial products, communications, sensors, biotech and med sciences.'
				}
			]
		}
	],
	sponsor_tiers: [
		{
			tier: Tier.Gold,
			sponsors: [
				{
					name: 'Banyan Infastructure'
				}
			]
		},
		{
			tier: Tier.Silver,
			sponsors: [
				{
					name: 'Wharton Risk Management and Decision Process Center'
				},
				{
					name: 'Penn Social Policy & Practice'
				},
				{
					name: 'Kleinman Center for Energy Policy'
				},
				{
					name: 'Blackhorn Ventures'
				}
			]
		},
		{
			tier: Tier.Bronze,
			sponsors: [
				{
					name: 'LSPower'
				},
				{
					name: 'Penn LPS'
				},
				{
					name: 'The Yield Lab'
				},
				{
					name: 'Jerome Fisher Program in Management & Technology'
				}
			]
		},
		{
			tier: Tier.Alum,
			sponsors: [
				{
					name: 'David Wierz',
					desc: 'G89 G02'
				}
			]
		}
	]
};
