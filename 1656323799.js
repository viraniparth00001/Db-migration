module.exports = {
	async up(db, redis) {
		try {
			await db
				.collection("1albums")
				.updateOne(
					{ artist: "The Beatles 222222" },
					{ $set: { blacklisted: false } },
				);
			await db
				.collection("1albums")
				.updateOne(
					{ artist: "The Doors2222222" },
					{ $set: { stars: 6 } },
				);
		} finally {
			//await session.endSession();
		}
	},

	async down(db, client) {
		//const session = client.startSession();
		try {
			//await session.withTransaction(async () => {
			await db
				.collection("albums")
				.updateOne(
					{ artist: "The Beatles" },
					{ $set: { blacklisted: false } },
				);
			await db
				.collection("albums")
				.updateOne({ artist: "The Doors" }, { $set: { stars: 0 } });
			//});
		} finally {
			//await session.endSession();
		}
	},
};
