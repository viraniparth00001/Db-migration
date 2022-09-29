module.exports = {
	async up(db, redis, tenantId = "") {
		try {
			let collections = [
				"pause",
				"despose",
				"contactLists",
				"teams",
				"skill",
				"skillType",
				"telephony",
				"flow-name",
				"flow-versions",
				"sound",
				"soundType",
			];

			for (let index = 0; index < collections.length; index++) {
				const element = collections[index];
				try {
					db.createCollection(element);
				} catch (e) {}
			}

			try {
				let sound = await db.collection("sound");
				let soundType = await db.collection("soundType");
				sound.insertMany([
					{
						_id: "e3d20ff3-6b8b-466c-b3b9-dce9d3618145",
						name: "default",
					},
				]);

				sound.insertMany([
					{
						_id: "b832a356-e163-4552-a898-7eb3091af629",
						url: "https://dev-app-tenant.streamspace.ai/tenant/sounds/default_hold.wav",
						filename: "default_hold.wav",
						name: "hold",
						type: "e3d20ff3-6b8b-466c-b3b9-dce9d3618145",
						createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						create_at: {
							$date: "2022-07-27T13:55:44.552Z",
						},
						isDeleted: false,
						tags: [],
					},
					{
						_id: "b832a356-e163-4552-a898-7eb3091af630",
						url: "https://dev-app-tenant.streamspace.ai/tenant/sounds/default_busy_callback.wav",
						filename: "default_busy_callback.wav",
						name: "call-back",
						type: "e3d20ff3-6b8b-466c-b3b9-dce9d3618145",
						createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						create_at: {
							$date: "2022-07-27T13:55:44.552Z",
						},
						isDeleted: false,
						tags: [],
					},
					{
						_id: "b832a356-e163-4552-a898-7eb3091af631",
						url: "https://dev-app-tenant.streamspace.ai/tenant/sounds/default_record_tranning.wav",
						filename: "default_record_tranning.wav",
						name: "default_record_tranning",
						type: "e3d20ff3-6b8b-466c-b3b9-dce9d3618145",
						createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						create_at: {
							$date: "2022-07-27T13:55:44.552Z",
						},
						isDeleted: false,
						tags: [],
					},
					{
						_id: "b832a356-e163-4552-a898-7eb3091af639",
						url: "https://dev-app-tenant.streamspace.ai/tenant/sounds/default_close_holiday.wav",
						filename: "default_close_holiday.wav",
						name: "default_close_holiday",
						type: "e3d20ff3-6b8b-466c-b3b9-dce9d3618145",
						createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						create_at: {
							$date: "2022-07-27T13:55:44.552Z",
						},
						isDeleted: false,
						tags: [],
					},
					{
						_id: "b832a356-e163-4552-a898-7eb3091af649",
						url: "https://dev-app-tenant.streamspace.ai/tenant/sounds/default_close.wav",
						filename: "default_close.wav",
						name: "default_close",
						type: "e3d20ff3-6b8b-466c-b3b9-dce9d3618145",
						createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						create_at: {
							$date: "2022-07-27T13:55:44.552Z",
						},
						isDeleted: false,
						tags: [],
					},
					{
						_id: "b832a356-e163-4552-a898-7eb3091af659",
						url: "https://dev-app-tenant.streamspace.ai/tenant/sounds/default_record.wav",
						filename: "default_record.wav",
						name: "default_record",
						type: "e3d20ff3-6b8b-466c-b3b9-dce9d3618145",
						createdBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						create_at: {
							$date: "2022-07-27T13:55:44.552Z",
						},
						isDeleted: false,
						tags: [],
					},
				]);
			} catch (error) {}

			try {
				let flowName = await db.collection("flow-name");
				let flowVersion = await db.collection("flow-versions");

				flowName.insertMany([
					{
						_id: "817861d6-ecef-4037-8be3-645a17bf5555",
						name: "welcome-flow",
						update_at: {
							$date: "2022-07-27T13:23:40.282Z",
						},
						create_at: {
							$date: "2022-07-27T13:23:40.282Z",
						},
					},
				]);

				flowVersion.insertMany([
					{
						_id: "f74eb8cc-9a2a-4b14-b102-a7fec56b57de",
						flowNameId: "817861d6-ecef-4037-8be3-645a17bf5555",
						actions: {
							collect: {
								name: "IVR",
								integrationType: "Voice",
								integrationSubType: "VOICEBOTFS",
								questions: [
									{
										question: "",
										isNewFlow: true,
										name: "fde33a6b-a73f-467c-baf9-5c33169eb4d7",
										questionType: "START_CALL",
										type: "START",
										isFinal: false,
										nextQuestion: [
											"da25a08b-c367-4d8a-8ef5-422abb3648c2",
										],
									},
									{
										question: "Welocome",
										isNewFlow: true,
										name: "da25a08b-c367-4d8a-8ef5-422abb3648c2",
										say: [],
										playType: "TTS",
										questionType: "SAY_OR_PLAY",
										type: "text",
										isFinal: false,
										nextQuestion: [
											"54290103-d206-4cf0-be59-abca5f775416",
										],
									},
									{
										question: "",
										isNewFlow: true,
										name: "54290103-d206-4cf0-be59-abca5f775416",
										questionType: "DISCONNECT_CALL",
										type: "text",
										isFinal: true,
										nextQuestion: [],
									},
								],
							},
						},
						elements: [
							{
								position: {
									x: 1024.5,
									y: 238.5,
								},
								targetPosition: "left",
								id: "5fcb586b-1ed8-42f7-bae2-7baadff271d9",
								handles: [],
								type: "START_CALL",
								subType: "",
								data: {
									label: "StartCall",
									questionType: "START_CALL",
									questionSubType: "",
									name: "fde33a6b-a73f-467c-baf9-5c33169eb4d7",
									questionId:
										"fde33a6b-a73f-467c-baf9-5c33169eb4d7",
									questionOriginalType: "START_CALL",
									handles: [],
								},
							},
							{
								position: {
									x: 886,
									y: 435,
								},
								targetPosition: "left",
								id: "68245d0f-c046-4569-85a4-b0fb29783b86",
								handles: [],
								type: "NORMAL",
								subType: "",
								data: {
									label: "Text To Speak",
									questionType: "NORMAL",
									questionSubType: "",
									name: "da25a08b-c367-4d8a-8ef5-422abb3648c2",
									questionId:
										"da25a08b-c367-4d8a-8ef5-422abb3648c2",
									questionOriginalType: "SAY_OR_PLAY",
									handles: [],
								},
							},
							{
								source: "5fcb586b-1ed8-42f7-bae2-7baadff271d9",
								sourceHandle: "sucess1",
								target: "68245d0f-c046-4569-85a4-b0fb29783b86",
								targetHandle: "targetTop",
								animated: true,
								arrowHeadType: "arrowclosed",
								type: "buttonedge",
								data: {
									name: "",
									stroke: "green",
									currentQuestion: {
										question: "",
										isNewFlow: true,
										name: "fde33a6b-a73f-467c-baf9-5c33169eb4d7",
										questionType: "START_CALL",
										type: "START",
										isFinal: false,
										nextQuestion: [
											"da25a08b-c367-4d8a-8ef5-422abb3648c2",
										],
									},
									params: {
										source: "5fcb586b-1ed8-42f7-bae2-7baadff271d9",
										sourceHandle: "sucess1",
										target: "68245d0f-c046-4569-85a4-b0fb29783b86",
										targetHandle: "targetTop",
									},
									elemnt: {
										position: {
											x: 1024.5,
											y: 238.5,
										},
										targetPosition: "left",
										id: "5fcb586b-1ed8-42f7-bae2-7baadff271d9",
										handles: [],
										type: "START_CALL",
										subType: "",
										data: {
											label: "StartCall",
											questionType: "START_CALL",
											questionSubType: "",
											name: "fde33a6b-a73f-467c-baf9-5c33169eb4d7",
											questionId:
												"fde33a6b-a73f-467c-baf9-5c33169eb4d7",
											questionOriginalType: "START_CALL",
											handles: [],
										},
									},
									destinationNodeName:
										"da25a08b-c367-4d8a-8ef5-422abb3648c2",
								},
								style: {
									stroke: "green",
									background: "red",
								},
								label: "Success",
								id: "reactflow__edge-5fcb586b-1ed8-42f7-bae2-7baadff271d9sucess1-68245d0f-c046-4569-85a4-b0fb29783b86targetTop",
							},
							{
								position: {
									x: 1126,
									y: 658,
								},
								targetPosition: "left",
								id: "b9ad34bc-2949-4931-b806-485977b6d6ba",
								handles: [],
								type: "DISCONNECT_CALL",
								subType: "",
								data: {
									label: "EndCall",
									questionType: "DISCONNECT_CALL",
									questionSubType: "",
									name: "54290103-d206-4cf0-be59-abca5f775416",
									questionId:
										"54290103-d206-4cf0-be59-abca5f775416",
									questionOriginalType: "DISCONNECT_CALL",
									handles: [],
								},
							},
							{
								source: "68245d0f-c046-4569-85a4-b0fb29783b86",
								sourceHandle: "bottomFail",
								target: "b9ad34bc-2949-4931-b806-485977b6d6ba",
								targetHandle: "targetTop",
								animated: true,
								arrowHeadType: "arrowclosed",
								type: "buttonedge",
								data: {
									name: "",
									stroke: "red",
									currentQuestion: {
										question: "Welocome",
										isNewFlow: true,
										name: "da25a08b-c367-4d8a-8ef5-422abb3648c2",
										say: [],
										playType: "TTS",
										questionType: "SAY_OR_PLAY",
										type: "text",
										isFinal: false,
										nextQuestion: [
											"54290103-d206-4cf0-be59-abca5f775416",
										],
									},
									params: {
										source: "68245d0f-c046-4569-85a4-b0fb29783b86",
										sourceHandle: "bottomFail",
										target: "b9ad34bc-2949-4931-b806-485977b6d6ba",
										targetHandle: "targetTop",
									},
									elemnt: {
										position: {
											x: 886,
											y: 435,
										},
										targetPosition: "left",
										id: "68245d0f-c046-4569-85a4-b0fb29783b86",
										handles: [],
										type: "NORMAL",
										subType: "",
										data: {
											label: "Text To Speak",
											questionType: "NORMAL",
											questionSubType: "",
											name: "da25a08b-c367-4d8a-8ef5-422abb3648c2",
											questionId:
												"da25a08b-c367-4d8a-8ef5-422abb3648c2",
											questionOriginalType: "SAY_OR_PLAY",
											handles: [],
										},
									},
									destinationNodeName:
										"54290103-d206-4cf0-be59-abca5f775416",
								},
								style: {
									stroke: "red",
									background: "red",
								},
								label: "failure",
								id: "reactflow__edge-68245d0f-c046-4569-85a4-b0fb29783b86bottomFail-b9ad34bc-2949-4931-b806-485977b6d6batargetTop",
							},
						],
						version: "b1wiMH",
						status: true,
						updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						update_at: {
							$date: "2022-07-27T13:29:03.538Z",
						},
						create_at: {
							$date: "2022-07-27T13:29:03.538Z",
						},
						tags: [],
						isDeleted: false,
					},
				]);

				redis.hmset(
					`flow:${tenantId}-817861d6-ecef-4037-8be3-645a17bf5555`,
					{
						_id: "f74eb8cc-9a2a-4b14-b102-a7fec56b57de",
						flowNameId: "817861d6-ecef-4037-8be3-645a17bf5555",
						version: "b1wiMH",
						status: "true",
						isDeleted: "false",
						actions:
							'{"collect":{"name":"IVR","integrationType":"Voice","integrationSubType":"VOICEBOTFS","questions":[{"question":"","isNewFlow":true,"name":"fde33a6b-a73f-467c-baf9-5c33169eb4d7","questionType":"START_CALL","type":"START","isFinal":false,"nextQuestion":["da25a08b-c367-4d8a-8ef5-422abb3648c2"]},{"question":"Welocome","isNewFlow":true,"name":"da25a08b-c367-4d8a-8ef5-422abb3648c2","say":[],"playType":"TTS","questionType":"SAY_OR_PLAY","type":"text","isFinal":false,"nextQuestion":["54290103-d206-4cf0-be59-abca5f775416"]},{"question":"","isNewFlow":true,"name":"54290103-d206-4cf0-be59-abca5f775416","questionType":"DISCONNECT_CALL","type":"text","isFinal":true,"nextQuestion":[]}]}}',
					},
				);
			} catch (error) {}

			try {
				let telephony = await db.collection("telephony");

				telephony.insertMany([
					{
						_id: "a7e3c325-9333-4ad5-9e59-b6e12b543e63",
						name: "Default provider",
						isInbound: false,
						isOutBound: true,
						vendor: null,
						outboundDomain: "154.27.88.207",
						outboundProxy: "154.27.88.207",
						outboundPort: "5092",
						outboundUserName: "",
						outboundPassword: "",
						outboundRegister: false,
						outboundPrefix: "",
						status: true,
						isDeleted: false,
						mediaServer: null,
						updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						isVerifyed: true,
						isBilled: false,
						prepaid: true,
						tags: [],
						update_at: {
							$date: "2022-07-27T13:32:37.026Z",
						},
					},
				]);

				redis.hset(
					`gateway:list:${tenantId}`,
					"Default provider",
					"a7e3c325-9333-4ad5-9e59-b6e12b543e63",
				);

				redis.hmset(
					`gateway:${tenantId}-a7e3c325-9333-4ad5-9e59-b6e12b543e63`,
					{
						_id: "a7e3c325-9333-4ad5-9e59-b6e12b543e63",
						name: "Default provider",
						isInbound: false,
						isOutBound: true,
						vendor: null,
						outboundDomain: "154.27.88.207",
						outboundProxy: "154.27.88.207",
						outboundPort: "5092",
						outboundUserName: "",
						outboundPassword: "",
						outboundRegister: false,
						outboundPrefix: "",
						status: true,
						isDeleted: false,
						mediaServer: null,
						updatedBy: "130ea8ce-3f0b-4d9c-b747-1b5ce093875f",
						isVerifyed: true,
						isBilled: false,
						prepaid: true,
						tags: [],
						update_at: {
							$date: "2022-07-27T13:32:37.026Z",
						},
					},
				);
			} catch (error) {}

			try {
				let pause = await db.collection("pause");

				pause.insertMany([
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
			} catch (error) {
				console.log(`[Db-migrate] ::pause :: errorFound`, error);
			}

			try {
				let despose = await db.collection("despose");
				despose.insertMany([
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
			} catch (error) {
				console.log(`[Db-migrate] ::despose :: errorFound`, error);
			}

			try {
				let contactLists = await db.collection("contactLists");
				contactLists.insertMany([
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
			} catch (error) {
				console.log(`[Db-migrate] ::pause :: errorFound`, error);
			}

			try {
				let teams = await db.collection("teams");
				teams.insertMany([
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
						contactLists: ["fa29352a-a238-4b20-bc08-0718d3f5985a"],
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
						contactLists:
							"['fa29352a-a238-4b20-bc08-0718d3f5985a']",
						timeOut: "0",
						ctiUrl: "",
						webhookUrl: "",
						autoAnswer: "false",
					},
				);
			} catch (error) {
				console.log(`[Db-migrate] ::pause :: errorFound`, error);
			}

			try {
				let skill = await db.collection("skill");
				skill.insertMany([
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
			} catch (error) {
				console.log(`[Db-migrate] ::pause :: errorFound`, error);
			}

			try {
				let skillType = await db.collection("skillType");
				skillType.insertMany([
					{
						_id: "5885a978-6c75-4c63-baa0-8d53c03d79fb",
						name: "voice",
					},
				]);
			} catch (error) {
				console.log(`[Db-migrate] ::pause :: errorFound`, error);
			}
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
