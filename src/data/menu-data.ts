 

const menu_data = [
	{
		title: "Home",
		has_dropdown: true,
		link: "#",
		sub_menus: [
			{ link: "/", title: "Demo list" },
			{ link: "/", title: "Demo list" },
			{ link: "/", title: "Demo list" },
		],
	},
	{
		title: "Treatments",
		has_dropdown: true,
		link: "#",
		sub_menus: [
			{ title: "Root Canal", link: "/", has_inner_dropdown: false },
			{ title: "All on 4 Implants", link: "/", has_inner_dropdown: false },
			{ title: "All on 6 Implants", link: "/", has_inner_dropdown: false },
			{ title: "Fixing Dentures With Implants", link: "/", has_inner_dropdown: false },
			{ title: "Multiple Teeth Replcement", link: "/", has_inner_dropdown: false },
			{ title: "Single Missing Tooth Implants", link: "/", has_inner_dropdown: false },
			{ title: "Advantages Of Implants", link: "/", has_inner_dropdown: false },
			{ title: "How An Implants Procedure", link: "/", has_inner_dropdown: false },
			{ title: "AstraTech Implants", link: "/", has_inner_dropdown: false },
			{ title: "Child Dentistry", link: "/", has_inner_dropdown: false },
			{ title: "Gum Treatment", link: "/", has_inner_dropdown: false },
			{ title: "Porcelain Corwn & Bridges", link: "/", has_inner_dropdown: false },
			{ title: "Digital Crown % Bridges", link: "/", has_inner_dropdown: false },
			{ title: "Digital Dental X-Rays", link: "/", has_inner_dropdown: false },
			{ title: "Teeth Braces", link: "/", has_inner_dropdown: false },
			
			
		],
	},

	{
		title: "Awards",
		has_dropdown: false,
		link: "#",
		sub_menus: [
			{ title: "Portfolio", link: "/" },
			{ title: "Portfolio Details", link: "/" },
		],
	},
	{
		title: "Achievements",
		has_dropdown: false,
		link: "#",
		sub_menus: [
			{ title: "Blog", link: "/" }, 
			{ title: "Blog Details", link: "/" },
		],
	},
	{
		title: "Dental Implants",
		has_dropdown: false,
		link: "/",
		sub_menus: [
			{ title: "Page 1", link: "/" }, 
			{ title: "page 2", link: "/" },
		],
	},
];

export default menu_data;
