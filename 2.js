module.exports = {
	async up(db, redis, tenantId = "") {
		try {
			db.pause.insertMany([
				{
					_id: "65e4bbf0-3022-4aea-9051-b707a8202f01",
					name: "Tea Break",
					isDeleted: false,
					updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
					update_at: {
						$date: "2022-07-26T07:50:49.150Z",
					},
					tags: [],
				},
				{
					_id: "d939bfa5-1c82-4224-b41c-6e4abb3e1a9e",
					name: "Lunch break",
					isDeleted: false,
					updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
					update_at: {
						$date: "2022-07-26T07:51:02.222Z",
					},
					tags: [],
				},
				{
					_id: "4af8101f-6eb1-4682-b3ef-ee1ab74214f2",
					name: "Training",
					isDeleted: false,
					updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
					update_at: {
						$date: "2022-07-26T07:51:54.620Z",
					},
					tags: [],
				},
				{
					_id: "abee2666-7d9e-4102-9702-798d8373b410",
					name: "Toilet break",
					isDeleted: false,
					updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
					update_at: {
						$date: "2022-07-26T07:52:03.516Z",
					},
					tags: [],
				},
				{
					_id: "d98d59bb-3a29-4749-9453-de9047473b4f",
					name: "Escalations",
					isDeleted: false,
					updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
					update_at: {
						$date: "2022-07-26T07:52:13.575Z",
					},
					tags: [],
				},
			]);

			db.despose.insertMany([
				{
					_id: "62093f48-b058-466f-adc3-5f6db2501534",
					name: "Interested",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:53:07.800Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "30fe003d-49e5-4740-b685-670f2aaea66f",
					name: "Not interested",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:53:17.696Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "45decd4e-d4e0-412c-8be8-dbd4f9bb9aef",
					name: "Left message",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:53:26.493Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "adcf8e9d-4299-4bff-8a61-f4b159e810df",
					name: "No response",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:53:46.301Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "7076e488-f343-44ad-82fb-9aa3416c81e4",
					name: "Callback",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:53:53.427Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "efd31e1e-b479-4f95-8719-f92c00308780",
					name: "Invalid number",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:54:00.106Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "5a575e66-dfe3-4cff-8507-225692b2f7c5",
					name: "Do no call",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:54:06.978Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "8fd44415-3383-43ff-b239-d2927cc82a6d",
					name: "Complaint",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:54:12.677Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "c4202673-c904-41dd-8012-bd12d9372baa",
					name: "Call transfer",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:54:19.227Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "a13efa64-406e-454f-8004-f733c83ae288",
					name: "Caller hung up",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:54:25.653Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
				{
					_id: "5e47b128-7c7b-4845-afde-6e96f84098c6",
					name: "Wrong number",
					parent: "",
					level: 0,
					create_at: {
						$date: "2022-07-26T07:54:32.083Z",
					},
					createBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
				},
			]);

			db.contactLists.insertMany([
				{
					_id: "fa29352a-a238-4b20-bc08-0718d3f5985a",
					name: "Sample-list",
					fields: [],
					campaigns: [],
					create_at: {
						$date: "2022-07-26T07:55:21.600Z",
					},
				},
			]);

			db.teams.insertMany([
				{
					_id: "e96a6dbd-b562-48b1-a3a2-78daa7ac2e7c",
					isDefault: false,
					teamLeads: ["130ea8ce-3f0b-4d9c-b747-1b5ce093875f"],
					name: "My Team",
					isDeleted: false,
					status: true,
					member: [],
					createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
					externalNumbers: null,
					create_at: {
						$date: "2022-07-26T07:56:11.008Z",
					},
					update_at: {
						$date: "2022-07-26T07:56:11.008Z",
					},
					config: {},
					externalTeams: [],
					contactLists: [],
					timeOut: 0,
					ctiUrl: null,
					webhookUrl: null,
					autoAnswer: "false",
				},
			]);

			redis.hmset(
				`team:config:tenant:${tenantId}:team:e96a6dbd-b562-48b1-a3a2-78daa7ac2e7c:config`,
				{
					isDefault: "false",
					_id: "e96a6dbd-b562-48b1-a3a2-78daa7ac2e7c",
					teamLeads: '["130ea8ce-3f0b-4d9c-b747-1b5ce093875f"]',
					name: "My Team",
					isDeleted: "false",
					status: "true",
					member: "[]",
					createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
					externalNumbers: "",
					create_at: '"2022-07-26T07:56:11.008Z"',
					update_at: '"2022-07-26T07:56:11.008Z"',
					config: "{}",
					externalTeams: "[]",
					contactLists: "[]",
					timeOut: "0",
					ctiUrl: "",
					webhookUrl: "",
					autoAnswer: "false",
				},
			);

			db.skill.insertMany([
				{
					_id: "00ea3596-77c3-4374-a4ef-15fd450167c5",
					name: "Car_Service_Form_New_Flow",
					tags: [],
					skillType: ["5885a978-6c75-4c63-baa0-8d53c03d79fb"],
					score: "0.2",
					isDeleted: false,
					update_at: {
						$date: "2022-04-07T11:50:18.564Z",
					},
					updatedBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
				},
			]);

			db.skillType.insertMany([
				{
					_id: "5885a978-6c75-4c63-baa0-8d53c03d79fb",
					name: "voice",
				},
			]);
		} catch (e) {
			console.log(`[Db-migration] error::-`, e);
		} finally {
			//await session.endSession();
		}
	},

	async down(db, client) {
		//const session = client.startSession();
		try {
			//await session.withTransaction(async () => {
			// await db
			// 	.collection("albums")
			// 	.updateOne(
			// 		{ artist: "The Beatles" },
			// 		{ $set: { blacklisted: false } },
			// 	);
			// await db
			// 	.collection("albums")
			// 	.updateOne({ artist: "The Doors" }, { $set: { stars: 0 } });
			//});
		} finally {
			//await session.endSession();
		}
	},
};
