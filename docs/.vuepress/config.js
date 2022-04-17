module.exports = {
	title: "l博客",
	description: "Just playing around",
	themeConfig: {
		nav: [
			{ text: "主页", link: "/" },
			{
				text: "其他",
				link: "/others/",
			},
            {
				text: "技术栈",
				items: [
					{ text: "Flutter", link: "/techStack/flutter/" },
					{ text: "Node", link: "/techStack/node/" },
					{ text: "Web", link: "/techStack/web/" },
				],
			},
            {
				text: "无关",
                link:"/irrelevant/"
			},
			{
				text: "GitHub",
                link:"https://github.com/"
			},
		],
	},
};
