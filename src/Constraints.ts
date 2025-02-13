export type Book = {
	id?: string;
	title: string;
	authors?: string[];
	imageLinks?: {
		thumbnail: string;
	};
	shelf: string;
};
export type Shelf = {
	name: string;
	value: string;
};
export const initBooks = [
	{
		title: "To Kill a Mockingbird",
		authors: ["Harper Lee"],
		imageLinks: {
			thumbnail:
				"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
		},
		shelf: "currentlyReading",
	},
	{
		title: "Ender's Game",
		authors: ["Orson Scott Card"],
		imageLinks: {
			thumbnail:
				"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
		},
		shelf: "currentlyReading",
	},
	{
		title: "1776",
		authors: ["David McCullough"],
		shelf: "wantToRead",
		imageLinks: {
			thumbnail:
				"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
		},
	},
	{
		title: "Harry Potter and the Sorcerer's Stone",
		authors: ["J.K. Rowling"],
		shelf: "wantToRead",
		imageLinks: {
			thumbnail:
				"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
		},
	},
	{
		title: "The Hobbit",
		authors: ["J.R.R. Tolkien"],
		shelf: "read",
		imageLinks: {
			thumbnail:
				"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
		},
	},
	{
		title: "Oh, the Places You'll Go!",
		authors: ["Seuss"],
		shelf: "read",
		imageLinks: {
			thumbnail:
				"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
		},
	},
	{
		title: "The Adventures of Tom Sawyer",
		authors: ["Mark Twain"],
		shelf: "read",
		imageLinks: {
			thumbnail:
				"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
		},
	},
];
export const bookShelfs: Shelf[] = [
	{
		name: "Currently Reading",
		value: "currentlyReading",
	},
	{
		name: "Want to Read",
		value: "wantToRead",
	},
	{
		name: "Read",
		value: "read",
	},
];
