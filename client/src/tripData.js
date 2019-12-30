const tripData = [
	{
		id: 1,
		title: 'Vietnam',
		date: 'November 2018',
		imgName: 'vietnamSunrise_opt.jpg',
		photoUrls: ['glassBeach.jpg', 'lostCoast.jpg', 'glassBeach.jpg'],
		textFile: 'vietnam2018.md',
		summaryText: 'Hiked around Sapa and sunbathed in Halong Bay',
		expenseImage: 'vietnamExpenses.png',
		videoId: 'A3K3jh7cK4k',
		enableComments: true
	},
	{
		id: 2,
		title: 'Hawaii',
		date: 'May 2019',
		imgName: 'HawaiianMilkyway_opt.jpg',
		photoUrls: ['hawaiianMilkyway.jpg', 'nz2.jpg', 'glassBeach.jpg'],
		textFile: 'hawaii2019.md',
		summaryText: 'Camped under the Milky Way listening to the waves',
		expenseImage: 'hawaiiExpenses.png',
		videoId: 'Ty6G2P732NY',
		enableComments: true
	},
	{
		id: 3,
		title: 'Glacier National Park',
		date: 'July 2019',
		imgName: 'glacier_opt.jpg',
		photoUrls: ['glacier.jpg', 'lostCoast.jpg', 'glassBeach.jpg'],
		textFile: 'glacier2019.md',
		summaryText: 'Set out to find the coolest alpine lakes',
		expenseImage: 'glacierExpenses.png',
		videoId: null,
		enableComments: true
	},
		{
		id: 4,
		title: 'Alaska',
		date: 'July 2018',
		imgName: 'DenaliBackpacking.jpg',
		photoUrls: ['glassBeach.jpg', 'DenaliBackpacking.jpg', 'glassBeach.jpg'],
		textFile: 'alaska2018.md',
		summaryText: 'Bushwacked for miles through Denali National Park',
		expenseImage: 'alaskaExpenses.png',
		videoId: null,
		enableComments: true
	},
	{
		id: 5,
		title: 'Laos',
		date: 'November 2018',
		imgName: 'waterfall.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'laos2018.md',
		summaryText: 'Explored the many waterfalls, rivers and cave systems',
		expenseImage: 'laosExpenses.png',
		videoId: 'B2rwjKPPilE',
		enableComments: true
	},
	{
		id: 6,
		title: 'Philippines',
		date: 'May 2016',
		imgName: 'puertoPrincesa_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'philippines2016.md',
		summaryText: 'Slurped up mango shakes every day',
		expenseImage: null,
		videoId: 'HgFbGkHrtk0',
		enableComments: true
	},
	{
		id: 7,
		title: 'Baja California, Mexico',
		date: 'October 1, 2019 - October 7, 2019',
		imgName: 'bajaCalifornia_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'bajaCaliforniaMexico.md',
		summaryText: 'Relaxed on beautiful beaches and devoured delicious tacos',
		expenseImage: null,
		videoId: 'T_ziz7DzG2A',
		enableComments: true
	},
	{
		id: 8,
		title: 'Mexico City, Mexico',
		date: 'October 8, 2019 - October 14, 2019',
		imgName: 'teotihuacan_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'mexicoCity.md',
		summaryText: 'Walked through  museums, cathedrals, and even ancient pyramids',
		expenseImage: null,
		videoId: 'T_ziz7DzG2A',
		enableComments: true
	},
	{
		id: 9,
		title: 'Oaxaca, Mexico',
		date: 'October 15, 2019 - October 23, 2019',
		imgName: 'oaxacaSunset_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'oaxacaMexico.md',
		summaryText: 'Ate our way around this beautiful, mountainous region',
		expenseImage: null,
		videoId: 'T_ziz7DzG2A',
		enableComments: true
	},
	{
		id: 10,
		title: 'Cuba',
		date: 'November 6, 2019 - November 12, 2019',
		imgName: 'cuba_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'cuba.md',
		summaryText: 'Toured cobblestone streets, lush tobacco farms, and 1950s automobiles',
		expenseImage: null,
		videoId: null,
		enableComments: true
	},
	{
		id: 11,
		title: 'Yucatan, Mexico',
		date: 'October 23, 2019 - November 16, 2019',
		imgName: 'chichenItza_us_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'yucatan.md',
		summaryText: 'Splashed into a number of lagoons, cenotes, and oceans',
		expenseImage: null,
		videoId: 'T_ziz7DzG2A',
		enableComments: true
	},
	{
		id: 12,
		title: 'Belize',
		date: 'November 16, 2019 - November 24, 2019',
		imgName: 'belizeTurtle_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'belize.md',
		summaryText: 'Snorkeled alongside turtles, sharks, and manatees',
		expenseImage: null,
		videoId: 'ZN8QzMAgQcc',
		enableComments: true
	},
	{
		id: 13,
		title: 'Guatemala',
		date: 'November 24, 2019 - December 9, 2019',
		imgName: 'guatemala_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'guatemala.md',
		summaryText: 'Fulfilled our adventurous nature with caves, rivers, lakes and erupting volcanos',
		expenseImage: null,
		videoId: 'ZN8QzMAgQcc',
		enableComments: true
	},
	{
		id: 14,
		title: 'El Salvador',
		date: 'December 9, 2019 - December 12, 2019',
		imgName: 'salvador_opt.jpg',
		photoUrls: ['waterfall.jpg', 'waterfall.jpg'],
		textFile: 'elSalvador.md',
		summaryText: 'Surfed the Pacific waves and stuffed our faces with many pupusas',
		expenseImage: null,
		videoId: null,
		enableComments: true
	}
	// {
	// 	id: 2,
	// 	title: 'Icelandic Roadtrip',
	// 	date: 'August 2017',
	// 	imgName: 'glassBeach.jpg',
	// 	photoUrls: ['glassBeach.jpg', 'glassBeach.jpg', 'glassBeach.jpg'],
	// 	textFile: 'iceland2017.txt',
	// 	summaryText: 'Drove around the entire country chasing waterfalls, volcanos, and fjords',
	// 	videoId: 'Ut2OZq7C9zk'
	// },
	// {
	// 	id: 3,
	// 	title: 'New Zealand',
	// 	date: 'November 2016',
	// 	imgName: 'MilfordSound.jpg',
	// 	photoUrls: ['MilfordSound.jpg', 'nz2.jpg', 'glassBeach.jpg'],
	// 	textFile: 'iceland2017.txt',
	// 	summaryText: 'A kiwi roadtrip with a friend named Ashwin',
	// 	videoId: '1UrqsHhnRT8'
	// },

	// {
	// 	id: 5,
	// 	title: 'Japan',
	// 	date: 'November 2016',
	// 	imgName: 'MtFuji.jpg',
	// 	photoUrls: ['MilfordSound.jpg', 'nz2.jpg', 'glassBeach.jpg'],
	// 	textFile: 'iceland2017.txt',
	// 	summaryText: 'Indulged in many cultural experiences',
	// 	videoId: 'Dr6ebJRngaQ'
	// },
	// {
	// 	id: 6,
	// 	title: 'Vail',
	// 	date: 'July 2015',
	// 	imgName: 'Vail.JPG',
	// 	photoUrls: ['glassBeach.jpg', 'lostCoast.jpg', 'glassBeach.jpg'],
	// 	textFile: 'iceland2017.txt',
	// 	summaryText: 'Skiied acres of fresh powda.',
	// },


	// {
	// 	id: 9,
	// 	title: 'Havasupai',
	// 	date: 'June 2017',
	// 	imgName: 'HavasuBackpacking.jpg',
	// 	photoUrls: ['HavasuBackpacking.jpg', 'lostCoast.jpg', 'glassBeach.jpg'],
	// 	textFile: 'havasupai2017.txt',
	// 	summaryText: 'Backpacked into paradise',
	// 	videoId: null
	// },
];

export default tripData;
