module.exports = {
	title: "博客",
	description: "Just playing around",
	themeConfig: {
		nav: [
			{ text: "主页", link: "/" },
			{
				text: "随机博客",
				link: "/guide",
				items: [
					{ text: "Chinese", link: "/language/chinese/" },
					{ text: "Japanese", link: "/language/japanese/" },
				],
			},
            {
				text: "我的技术栈",
				link: "/techStack",
				items: [
					{ text: "Flutter", link: "/flutter/" },
					{ text: "Japanese", link: "/japanese/" },
				],
			},
			{
				text: "External",
                link:"https://github.com/"
			},
		],
	},
};
