 

const menu_data = [
	{
		title: "Home",
		has_dropdown: false,
		link: "/",
		// sub_menus: [
			// { link: "/", title: "Demo list" },
			// { link: "/", title: "Demo list" },
			// { link: "/", title: "Demo list" },
		// ],
	},
		{
		title: "Who we are",
		has_dropdown: false,
		link: "/about-us",
		
	},
	{
		title: "Treatments",
		has_dropdown: true,
		link: "/service",
		sub_menus: [
			{ title: "Implant", link: "/service", has_inner_dropdown: true,
				sub_menus: [
					{ title: "Single Missing Tooth Implants", link: "/service/Single%20Missing%20Tooth%20Implant" },
					{ title: "Fixing Dentures With Implants", link: "/service/Fixing%20Dentures%20With%20Implants" },
					{ title: "All on 4 Implants", link: "/service/All%20on%204%20Implants" },
					{ title: "All on 6 Implants", link: "/service/All%20On%206%20Implants" },
					{ title: "Advantages Of Implants", link: "/service/Advantages%20of%20Implants	" },
					{ title: "AstraTech Implants", link: "/service/Astra%20Tech%20Implants" },
					{ title: "How An Implants Procedure?", link: "/service/How%20An%20Implant%20Procedure",}
				]},
			{ title: "Braces", link: "/", has_inner_dropdown: true,
				sub_menus: [
					{ title: "Metal", link: "/service/Teeth%20Braces" },
					{ title: "Ceramic", link: "/cooming-soon" },
					{ title: "Self-ligating metal", link: "/cooming-soon" },
					{ title: "Self-ligating ceramic", link: "/cooming-soon" },
					{ title: "Aligners (Invasilign)", link: "/cooming-soon" }
				]},
			
			{ title: "Root Canal", link: "/", has_inner_dropdown: false },
			{ title: "Multiple Teeth Replacement", link: "/service/Multiple%20Teeth%20Replacement", has_inner_dropdown: false },
			{ title: "Porcelain Crown & Bridges", link: "/service/Porcelain%20Crown%20&%20Bridges", has_inner_dropdown: false },
			{ title: "Child Dentistry", link: "/service/Child%20Dentistry", has_inner_dropdown: false },
			{ title: "Gum Treatment", link: "/service/Gum%20Treatment", has_inner_dropdown: false },
			{ title: "Porcelain Corwn & Bridges", link: "/service/Porcelain%20Crown%20&%20Bridges", has_inner_dropdown: false },
			{ title: "Digital Dental X-Rays", link: "/service/Digital%20Dental%20X-Rays", has_inner_dropdown: false },
			
			
			
		],
	},

	{
		title: "Awards",
		has_dropdown: false,
		link: "/certificates",
		// sub_menus: [
		// 	{ title: "Portfolio", link: "/" },
		// 	{ title: "Portfolio Details", link: "/" },
		// ],
	},
	{
		title: "Achievements",
		has_dropdown: false,
		link: "/research",
		// sub_menus: [
		// 	{ title: "Blog", link: "/" }, 
		// 	{ title: "Blog Details", link: "/" },
		// ],
	},
	{
		title: "Dental Implants",
		has_dropdown: false,
		link: "/service/Dental%20Implants",
		sub_menus: [
			{ title: "Page 1", link: "/" }, 
			{ title: "page 2", link: "/" },
		],
	},
	{
		title: "Contact Us",
		has_dropdown: false,
		link: "/contact-us",
		
	},
	{
		title: "Blogs",
		has_dropdown: false,
		link: "/blog",
		
	}
];

export default menu_data;
