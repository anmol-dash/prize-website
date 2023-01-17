import type { Competition } from '$lib/types/competition';
import { Prize, Tier } from '$lib/types/enums';

export const data: Competition = {
	name: 'Prize 2021',
	desc: 'description',
	winners: [
		{
			prize: Prize.First,
			name: 'ReneCycle',
			summary:
				"Using proprietary smart-lock technology, ReneCycle transforms everyday bikes into easily manageable dockless bikeshare. Their fleet management system's integrated hardware and software creates bikeshare that is secure, accessible, and cost-efficient."
		},
		{
			prize: Prize.Second,
			name: 'Folia',
			summary:
				'Folia is a B2B Philadelphia-based company dedicated to diverting all food waste from the landfill. Through an online platform, they ensure quality matches between producers of food waste and food upcycling companies.'
		},
		{
			prize: Prize.Third,
			name: 'Team Chaeto',
			summary:
				'Team Chaeto pioneers an ecological, sustainable, and feasible solution to the existential crisis of ocean acidification. By modifying the activity of hydrogenase and carbonic anhydrase enzymes in chaetomorpha, the team invented chaeto biofilters to implement their novel strain of algae in marine ecosystems.'
		},
		{
			prize: Prize.HM,
			name: 'NASADYA',
			summary:
				'NASADYA solves the growing problem of variability management in the energy grid for power plants by converting a money-losing by-product (excess energy) into valuable co-products (green hydrogen & oxygen).'
		}
	],
	finalists: [
		{
			category: 'Energy and Transportation',
			teams: [
				{
					name: 'ReneCycle',
					members: [
						{
							name: 'Hunter Lee'
						},
						{
							name: 'Mina Liang'
						},
						{
							name: 'Henry Lei'
						},
						{
							name: 'David Chang'
						},
						{
							name: 'Ian Gordon'
						}
					]
				},
				{
					name: 'NASADYA',
					members: [
						{
							name: 'Chaitanya Gulati'
						},
						{
							name: 'Praneeth Nagarjuna'
						},
						{
							name: 'Devansh Sethia'
						},
						{
							name: 'Khadeeja Malik'
						},
						{
							name: 'Dan Duffy'
						},
						{
							name: 'Nate Kraemer'
						},
						{
							name: 'Madhu Devi'
						}
					]
				}
			]
		},
		{
			category: 'Food and Agriculture',
			teams: [
				{
					name: 'Axo',
					members: []
				},
				{
					name: 'Folia',
					members: [
						{
							name: 'Rosanna Jiang'
						},
						{
							name: 'Zachary Huang-Ogata'
						},
						{
							name: 'Caroline Li'
						},
						{
							name: 'Ryoma Harris'
						},
						{
							name: 'Stephanie Bi'
						}
					]
				}
			]
		},
		{
			category: 'Waste and Circularity',
			teams: [
				{
					name: 'Happy Earth Company',
					members: []
				},
				{
					name: 'College Thrifts',
					members: []
				}
			]
		},
		{
			category: 'Wild Card',
			teams: [
				{
					name: 'Beyond Capacity',
					members: []
				},
				{
					name: 'GarboCarbo',
					members: []
				}
			]
		},
		{
			category: 'High School',
			teams: [
				{
					name: 'Team Chaeto',
					members: [
						{
							name: 'Christopher Kwok'
						},
						{
							name: 'Nicholas Kwok'
						}
					]
				},
				{
					name: 'Promethean Energy',
					members: []
				}
			]
		}
	],
	affiliates: [
		{
			category: 'Keynote Speakers',
			people: [
				{
					name: 'Arun Majumdar',
					headline:
						'Jay Precourt Professor of Mechanical Engineering and Photon Science and by courtesy, of Materials Science and Engineering, Stanford University'
				},
				{
					name: 'Dennis Woodside',
					headline: 'President of Impossible Foods'
				}
			]
		},
		{
			category: 'Panelists',
			people: [
				{
					name: 'Dr. Zhengxia Dou',
					headline:
						'Professor, Agricultural Systems, University of Pennsylvania School of Veterinary Medicine, Department of Clinical Studies, New Bolton Center'
				},
				{
					name: 'Dr. David T Galligan',
					headline:
						'Professor of Animal Health Economics, University of Pennsylvania, School of Veterinary Medicine'
				},
				{
					name: 'Dr. James R Hagan',
					headline:
						'Graduate Student Advisor in the Sustainability and Environmental Policy concentrations, Former Vice President of Sustainability & Environment at GlaxoSmithKline'
				},
				{
					name: 'Dr. Peter Psarras',
					headline: 'Research Assistant Professor, Chemical and Biomolecular Engineering'
				},
				{
					name: 'Dr. Arthur van Benthem',
					headline: 'Associate Professor of Business Economics and Public Policy'
				},
				{
					name: 'E. Mitchell Swann',
					headline:
						'Managing Director at Resolution Management Consultants, Philadelphia Energy Authority Board'
				},
				{
					name: 'Alex Behar',
					headline: 'Vice President at Cultivian Sandbox'
				},
				{
					name: 'Shuo Yang',
					headline: 'Principal at Fifty Years'
				},
				{
					name: 'Ally Warson',
					headline: 'Senior Associate at UP Partners'
				},
				{
					name: 'Kimberly Zou',
					headline: 'Founder of Climate Tech VC and Analyst at Energy Impact Partners'
				},
				{
					name: 'Ry Storey-Fisher',
					headline: 'Senior Partnership Associate at Powerhouse'
				},
				{
					name: 'Franz Hochstrasser',
					headline:
						'CEO and Co-founder of Raise Green and New Haven Community Solar, Former Senior Advisor to the Special Envoy for Climate Change @ the US State Dept'
				}
			]
		},
		{
			category: 'Moderators',
			people: [
				{
					name: 'Caitlyn McCloskey',
					headline: 'Executive member of the Penn Environmental Group'
				},
				{
					name: 'Ben May',
					headline:
						'Founder of ThinkOcean, Former Co-Chair of SSAP, Former UA Director of Sustainability and Community Impact'
				},
				{
					name: 'Akaash Padmanabha',
					headline: 'Chair of Penn Dining Advisory Board'
				}
			]
		},
		{
			category: 'Judges',
			people: [
				{
					name: 'Dennis Woodside',
					headline: 'President @ Impossible Foods'
				},
				{
					name: 'Dr. Arun Majumdar',
					headline: 'Founding Director @ ARPA-E, Former VP of Energy @ Google'
				},
				{
					name: 'Marisa Sweeney',
					headline: 'Director @ Generate Capital'
				},
				{
					name: 'Lidiya Dervisheva',
					headline: 'Partner @ Next47'
				}
			]
		},
		{
			category: 'Final Judges',
			people: [
				{
					name: 'Lidiya Dervisheva',
					headline: 'Partner @ Next47'
				},
				{
					name: 'Seth Bannon',
					headline: 'Founding Partner @ Fifty Years'
				},
				{
					name: 'Marisa Sweeney',
					headline: 'Director @ Generate Capital'
				},
				{
					name: 'Sam Bursten',
					headline: 'Vice President @ Energy Impact Partners'
				}
			]
		}
	],
	sponsor_tiers: [
		{
			tier: Tier.Null,
			sponsors: [
				{
					name: 'Penn Social Policy & Practice'
				},
				{
					name: 'Kleinman Center for Energy Policy'
				},
				{
					name: 'Wharton Global Youth Program'
				},
				{
					name: 'Jerome Fisher Program in Management & Technology'
				}
			]
		}
	]
};
