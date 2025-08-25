 

const menu_data = [
	{
		title: "Home",
		// has_dropdown: true,
		link: "#",
		// sub_menus: [
		// 	{ link: "/", title: "Home Page 01" },
		// 	{ link: "/home-2", title: "Home Page 02" },
		// 	{ link: "/home-3", title: "Home Page 03" },
		// ],
	},
	{
		title: "Treatments",
		has_dropdown: true,
		link: "#",
		sub_menus: [
			{ title: "Root Canal", link: "/about-us", has_inner_dropdown: false },
			{ title: "All on 4 Implants", link: "/pricing", has_inner_dropdown: false },
			{ title: "All on 6 Implants", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Fixing Dentures With Implants", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Multiple Teeth Replcement", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Single Missing Tooth Implants", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Advantages Of Implants", link: "/testimonial", has_inner_dropdown: false },
			{ title: "How An Implants Procedure", link: "/testimonial", has_inner_dropdown: false },
			{ title: "AstraTech Implants", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Child Dentistry", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Gum Treatment", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Porcelain Corwn & Bridges", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Digital Crown % Bridges", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Digital Dental X-Rays", link: "/testimonial", has_inner_dropdown: false },
			{ title: "Teeth Braces", link: "/testimonial", has_inner_dropdown: false },
			
			
		],
	},
	// {
	// 	title: "Treatments",
	// 	has_dropdown: true,
	// 	link: "#",
	// 	sub_menus: [
	// 		{ title: "About Us", link: "/about-us", has_inner_dropdown: false },
	// 		{ title: "Pricing", link: "/pricing", has_inner_dropdown: false },
	// 		{ title: "Testimonial", link: "/testimonial", has_inner_dropdown: false },
	// 		{
	// 			title: "Team",
	// 			has_inner_dropdown: true,
	// 			link: "#",
	// 			sub_menus: [
	// 				{ title: "Team", link: "/team" }, 
	// 				{ title: "Team Details", link: "/single-team" },
	// 			],
	// 		},
	// 		{
	// 			title: "Service",
	// 			has_inner_dropdown: true,
	// 			link: "#",
	// 			sub_menus: [
	// 				{ title: "Service", link: "/service" }, 
	// 				{ title: "Service Details", link: "/single-service" },
	// 			],
	// 		},
	// 		{
	// 			title: "Career",
	// 			has_inner_dropdown: true,
	// 			link: "#",
	// 			sub_menus: [
	// 				{ title: "Career", link: "/career" }, 
	// 				{ title: "Career Details", link: "/single-career" },
	// 			],
	// 		}, 
	// 		{
	// 			title: "Utility",
	// 			has_inner_dropdown: true,
	// 			link: "#",
	// 			sub_menus: [
	// 				{ title: "FAQ", link: "/faq" },
	// 				{ title: "Error 404", link: "/errors-404" },
	// 				{ title: "Cooming Soon", link: "/cooming-soon" },
	// 				{ title: "Term & Condition", link: "/term-condition" },
	// 			],
	// 		},
	// 	],
	// },
	{
		title: "Awards",
		has_dropdown: false,
		link: "#",
		sub_menus: [
			{ title: "Portfolio", link: "/portfolio" },
			{ title: "Portfolio Details", link: "/single-portfolio" },
		],
	},
	{
		title: "Achievements",
		has_dropdown: false,
		link: "#",
		sub_menus: [
			{ title: "Blog", link: "/blog" }, 
			{ title: "Blog Details", link: "/single-blog" },
		],
	},
	{
		title: "Dental Implants",
		has_dropdown: false,
		link: "/contact-us",
	},
];

export default menu_data;
