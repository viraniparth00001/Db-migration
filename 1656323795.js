module.exports = {
	async up(db, redis) {
		try {
			console.log(db);
			await db
				.collection("albums")
				.updateOne(
					{ artist: "The Beatles" },
					{ $set: { blacklisted: true } },
				);
			await db
				.collection("albums")
				.updateOne({ artist: "The Doors" }, { $set: { stars: 5 } });
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
