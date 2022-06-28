module.exports = {
	async up(db, redis) {
		try {
			db.pause.insertMany([
				{
					_id: "3b0f5bfd-b2e8-4c12-833e-0f329dabb7ed",
					name: "tea-break",
					isDeleted: false,
					tags: [],
				},
				{
					_id: "3b0f5bfd-b2e8-4c12-833e-0f329dabb7ed",
					name: "lunch-break",
					isDeleted: false,
					tags: [],
				},
			]);

			db.tag.insertMany([
				{
					_id: "12bf1400-2255-4595-af46-971cb97044be",
					name: "sales",
					moduleName: "users",
					moduleIds: [],
					colourCode: "#2c34e8",
				},
				{
					_id: "12bf1400-2255-4595-af46-971cb97044be",
					name: "marketing",
					moduleName: "users",
					moduleIds: [],
					colourCode: "#2c34e8",
				},
			]);

			db.contactLists.insertMany([
				{
					_id: "a73c8bdc-e8ef-4da8-a534-ccc7417f67fb",
					name: "publicInfo",
					fields: ["email", "name"],
					create_at: {
						$date: "2022-04-09T13:49:25.282Z",
					},
					campaigns: ["d07d9cdd-bceb-4929-b085-ce3572ff97a9"],
				},
			]);

			db.teams.insertMany([
				{
					_id: "ed6a11d2-65db-4d10-bf28-4f00b1184b49",
					teamLeads: [],
					name: "Sales",
					isDeleted: false,
					status: false,
					member: [],
					createdBy: "",
					callerIds: [],
					inbound: {
						name: "Sales",
						recording: true,
						holdMusic: "",
						csatId: "",
						acdTimeout: 0,
						queueStartFile: "GenericResturant-aede.mp3",
						queueMusicFile: "sample-3s-c63c.mp3",
						queueTimeout: "300",
						timeoutActionType: "",
						timeoutActionEntity: "",
						stickyAgent: "",
						repeatAnnouncement: "",
						announcementAfter: 0,
						announceFile: "",
						agentRingTimeout: 0,
						agentTimeoutState: "",
					},
					outbound: {
						name: "Sales",
						callerId: [],
						recording: true,
						acd: false,
						acdTimeout: "",
						acdOnFailedCalls: false,
						csat: "",
						csatId: "",
					},
					provider: ["90cf13b2-c331-42fd-bda8-02eceaf42116"],
					update_at: {
						$date: "2022-06-27T06:53:12.524Z",
					},
					updatedBy: "",
					tags: [],
					contactLists: ["a73c8bdc-e8ef-4da8-a534-ccc7417f67fb"],
					campaigns: ["d07d9cdd-bceb-4929-b085-ce3572ff97a9"],
				},
			]);

			db.campaign.insertMany([
				{
					_id: "d07d9cdd-bceb-4929-b085-ce3572ff97a9",
					name: "Voice-broadcast-Campaign",
					callerIds: [],
					status: true,
					subType: "Progressive",
					team: "ed6a11d2-65db-4d10-bf28-4f00b1184b49",
					type: "voice",
					isDeleted: false,
					ratio: 1,
					ringTime: 34,
					callingHours: {
						weekDays: ["MON", "WED", "FRI", "SAT"],
						time: [
							{
								startTime: "11:00",
								endTime: "12:12",
							},
						],
					},
					callingStatus: "stop",
					contactList: ["a73c8bdc-e8ef-4da8-a534-ccc7417f67fb"],
					createBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
					create_at: {
						$date: "2022-02-25T12:45:09.629Z",
					},
					updateBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
					update_at: {
						$date: "2022-05-11T13:41:01.988Z",
					},
					processStatus: "pause",
					answeringMachineDetection: false,
					flow: "662c7fb8-219d-405d-bc36-105932b4d9ba",
					telephonyProviders: [
						"90cf13b2-c331-42fd-bda8-02eceaf42116",
					],
					currentStatus: "pause",
					currentStatusChangeAt: {
						$date: "2022-06-24T15:49:53.413Z",
					},
				},
			]);

			db.telephony.insertMany([
				{
					_id: "90cf13b2-c331-42fd-bda8-02eceaf42116",
					name: "IndiaProvider",
					isInbound: true,
					isOutBound: true,
					vendor: "1ef6ead0-e0cb-44d5-ab09-52cd2a93e0b0",
					outboundDomain: "103.209.99.9",
					outboundProxy: "103.209.99.9",
					outboundPort: "5060",
					outboundUserName: "",
					outboundPassword: "",
					outboundRegister: false,
					status: true,
					isDeleted: false,
					mediaServer: null,
					updatedBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
					isVerifyed: true,
					isBilled: false,
					prepaid: true,
					tags: [],
					update_at: {
						$date: "2022-06-21T12:55:05.620Z",
					},
					isDefaultProvider: true,
					outboundPrefix: "0",
				},
			]);

			db.users.insertMany([
				{
					_id: "53d1b200-88fe-4a54-befd-6bd9d899b331",
					userId: "53d1b200-88fe-4a54-befd-6bd9d899b331",
					name: "sample-user",
					role: 6,
					email: "sampleuser.doe@gmail.com",
					salt: "$2b$10$0nFGyHQ6G34cfkjy6gEjvO",
					isVerified: true,
					user_name: "Jon",
					status: false,
					isDeleted: true,
					accessCriteria: "61a08b2ea6e59cc359b5dd04",
					phoneType: "web",
					mobile_number: "8989757459",
					country_code: "Jondoe123@",
					create_at: {
						$date: "2022-02-24T06:19:49.372Z",
					},
					update_at: {
						$date: "2022-04-07T10:30:56.323Z",
					},
					password:
						"$2b$10$0nFGyHQ6G34cfkjy6gEjvOphp.aBRPcYfTsoyhOYAJQPHP.8SwAru",
					createdBy: "",
					updatedBy: "",
					teams: ["ed6a11d2-65db-4d10-bf28-4f00b1184b49"],
				},
			]);

			db.sounds.insertMany([
				{
					_id: "c4c34ff4-7b91-4b07-8ad1-9355333d0bdc",
					url: "agentBusy-6583.wav",
					name: "Music File Name",
					type: "Hold Music",
					createdBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
					create_at: {
						$date: "2022-02-11T22:04:19.045Z",
					},
					isDeleted: true,
					soundGroup: ["b2de4efa-6bf4-4908-b16f-62e4ebcf404d"],
					tags: [
						"2c93150c-dc86-400d-8859-b8551faf99bf",
						"6b10d487-578c-4f97-bfb4-fe8ce2339146",
					],
					update_at: {
						$date: "2022-03-11T10:16:33.904Z",
					},
					updatedBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
				},
			]);

			let vFlow = db.collection("flow-versions");

			vFlow.insertMany([
				{
					_id: "e05034dc-b4d5-46ea-ab3a-1cdef8b4f935",
					flowNameId: "295cd3f8-48e0-4c37-bd21-9087efe2b332",
					actions: {
						collect: {
							name: "IVR",
							integrationType: "Voice",
							integrationSubType: "VOICEBOTFS",
							questions: [
								{
									question: "",
									isNewFlow: true,
									name: "9db37631-191a-4dc5-b49c-b1cca5da9aa2",
									questionType: "START_CALL",
									type: "START",
									isFinal: false,
									nextQuestion: [
										"26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
									],
								},
								{
									question:
										"Hello {{name}},\n\nThis call is from Streamspace. Thank you for applying June 2022 walk-in interviews. We would like to get a confirmation of your scheduled interview on 17 June 2022 at {{time}}\n\nTo confirm your interview, please press one. \nIf you are not willing to come, please press two.",
									isNewFlow: true,
									name: "26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
									captureType: "DTMF",
									timeout: "10",
									isNewQType: "STANDARD_SINGLE_DTMF",
									handlers: [
										{
											id: "default",
											name: "User Press Or Say Something.",
											label: "default",
											customType: "default",
											value: "default",
											type: "source",
											position: "bottom",
											color: "rgb(144, 89, 186)",
										},
										{
											id: "148e1b24-e318-40c0-a29c-8629a75815ce",
											name: "1",
											label: "1",
											value: "1",
											type: "source",
											customType: "customAction",
											position: "bottom",
											customIntent: false,
											color: "rgb(112, 213, 216)",
										},
										{
											id: "5d86891a-53e8-4041-95ae-4b67dca98f50",
											name: "2",
											label: "2",
											value: "2",
											type: "source",
											customType: "customAction",
											position: "bottom",
											customIntent: false,
											color: "rgb(194, 244, 129)",
										},
									],
									questionType: "STANDARD",
									noOfDTMFNeedToCollect: 1,
									type: "text",
									entityExtraction: "",
									selectedDTMFType: "SINGLE DIGIT",
									intentExtract: {
										intent: ["1", "2"],
									},
									slot: "CandidateResponse",
									needToWaitForForCollectAllText: false,
									failOver: {
										say: [],
										nextQuestion: [],
									},
									validate: {
										on_failure: {
											retryCount: 2,
											nextQuestion: [],
											say: [{}],
										},
										on_success: {
											nextQuestion: [],
											say: [],
											customAction: [
												{
													_id: "76c76cda-088f-4075-b799-fde6be0517e6",
													payload: "1",
													nextQuestion: [
														"b4227322-8e31-43de-9a08-e5290912ca15",
													],
												},
												{
													_id: "f5a45bf9-2ff1-4d1b-9237-69c539ced346",
													payload: "2",
													nextQuestion: [
														"1e6e8403-6d53-4895-88dc-2a1420123b9e",
													],
												},
											],
										},
									},
									playType: "TTS",
									languageId: "en-IN",
									language: {
										language: "English (India)",
										language_code: "en-IN",
										value: "en-IN",
										label: "English (India)",
									},
									voiceId: "en-IN-Standard-B",
									voice: {
										language: "English (India)",
										voice_type: "Standard",
										language_code: "en-IN",
										voice_name: "en-IN-Standard-B",
										gender: "MALE",
										type: "google-tts",
										value: "en-IN-Standard-B",
									},
									isNeedToPutTranscriptToSlot: true,
									combineDigits: true,
									speechRate: 0.8,
								},
								{
									question: "",
									isNewFlow: true,
									name: "b4227322-8e31-43de-9a08-e5290912ca15",
									questionType: "ADD_SLOTS",
									type: "text",
									isFinal: false,
									nextQuestion: [
										"49adc8dd-5797-401c-9eec-04d64b1dff94",
									],
									hardCodedSlots: [
										{
											_id: "0.8105032205913951",
											key: "CandidateIntrested",
											value: "Yes",
											global: false,
										},
									],
									handlers: [],
								},
								{
									question: "",
									isNewFlow: true,
									name: "1e6e8403-6d53-4895-88dc-2a1420123b9e",
									questionType: "ADD_SLOTS",
									type: "text",
									isFinal: false,
									nextQuestion: [
										"49adc8dd-5797-401c-9eec-04d64b1dff94",
									],
									hardCodedSlots: [
										{
											_id: "0.5343595503599066",
											key: "CandidateIntrested",
											value: "No",
											global: false,
										},
									],
									handlers: [],
								},
								{
									question: "",
									isNewFlow: true,
									name: "49adc8dd-5797-401c-9eec-04d64b1dff94",
									questionType: "DISCONNECT_CALL",
									type: "text",
									isFinal: true,
									nextQuestion: [],
								},
							],
							slots: [
								{
									id: "26dfcdc9-98e8-4ffa-b8d6-754c870e827aslot",
									value: "{{CandidateResponse}}",
									name: "{{CandidateResponse}}",
									key: "{{CandidateResponse}}",
									char: "{{CandidateResponse}}",
								},
								{
									id: "b4227322-8e31-43de-9a08-e5290912ca15_0.8105032205913951",
									value: "{{CandidateIntrested}}",
									name: "{{CandidateIntrested}}",
									key: "{{CandidateIntrested}}",
									char: "{{CandidateIntrested}}",
								},
								{
									id: "1e6e8403-6d53-4895-88dc-2a1420123b9e_0.5343595503599066",
									value: "{{CandidateIntrested}}",
									name: "{{CandidateIntrested}}",
									key: "{{CandidateIntrested}}",
									char: "{{CandidateIntrested}}",
								},
							],
						},
					},
					elements: [
						{
							position: {
								x: 710,
								y: 303,
							},
							targetPosition: "left",
							id: "56108ddb-69ea-4251-ba68-9c1a34e991c3",
							handles: [],
							type: "START_CALL",
							subType: "",
							data: {
								label: "StartCall",
								questionType: "START_CALL",
								questionSubType: "",
								name: "9db37631-191a-4dc5-b49c-b1cca5da9aa2",
								questionId:
									"9db37631-191a-4dc5-b49c-b1cca5da9aa2",
								questionOriginalType: "START_CALL",
								handles: [],
							},
						},
						{
							position: {
								x: 824,
								y: 421,
							},
							targetPosition: "left",
							id: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
							handles: [],
							type: "STANDARD_SINGLE_DTMF",
							subType: "",
							data: {
								label: "Gather DTMF",
								questionType: "STANDARD_SINGLE_DTMF",
								questionSubType: "",
								name: "26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
								questionId:
									"26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
								questionOriginalType: "STANDARD",
								handles: [],
							},
						},
						{
							source: "56108ddb-69ea-4251-ba68-9c1a34e991c3",
							sourceHandle: "sucess1",
							target: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
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
									name: "9db37631-191a-4dc5-b49c-b1cca5da9aa2",
									questionType: "START_CALL",
									type: "START",
									isFinal: false,
									nextQuestion: [
										"26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
									],
								},
								params: {
									source: "56108ddb-69ea-4251-ba68-9c1a34e991c3",
									sourceHandle: "sucess1",
									target: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
									targetHandle: "targetTop",
								},
								elemnt: {
									position: {
										x: 710,
										y: 303,
									},
									targetPosition: "left",
									id: "56108ddb-69ea-4251-ba68-9c1a34e991c3",
									handles: [],
									type: "START_CALL",
									subType: "",
									data: {
										label: "StartCall",
										questionType: "START_CALL",
										questionSubType: "",
										name: "9db37631-191a-4dc5-b49c-b1cca5da9aa2",
										questionId:
											"9db37631-191a-4dc5-b49c-b1cca5da9aa2",
										questionOriginalType: "START_CALL",
										handles: [],
									},
								},
								destinationNodeName:
									"26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
							},
							style: {
								stroke: "green",
								background: "red",
							},
							label: "Success",
							id: "reactflow__edge-56108ddb-69ea-4251-ba68-9c1a34e991c3sucess1-f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3ctargetTop",
						},
						{
							position: {
								x: 780,
								y: 630,
							},
							targetPosition: "left",
							id: "a9c322f3-f8c1-4213-b9c0-42d34fdda7f6",
							handles: [],
							type: "ADD_SLOTS",
							subType: "",
							data: {
								label: "Set Variables",
								questionType: "ADD_SLOTS",
								questionSubType: "",
								name: "b4227322-8e31-43de-9a08-e5290912ca15",
								questionId:
									"b4227322-8e31-43de-9a08-e5290912ca15",
								questionOriginalType: "ADD_SLOTS",
								handles: [],
							},
						},
						{
							position: {
								x: 935,
								y: 618,
							},
							targetPosition: "left",
							id: "07d9f931-99a6-4955-90a2-e7c0b7f9c855",
							handles: [],
							type: "ADD_SLOTS",
							subType: "",
							data: {
								label: "Set Variables",
								questionType: "ADD_SLOTS",
								questionSubType: "",
								name: "1e6e8403-6d53-4895-88dc-2a1420123b9e",
								questionId:
									"1e6e8403-6d53-4895-88dc-2a1420123b9e",
								questionOriginalType: "ADD_SLOTS",
								handles: [],
							},
						},
						{
							source: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
							sourceHandle:
								"148e1b24-e318-40c0-a29c-8629a75815ce",
							target: "a9c322f3-f8c1-4213-b9c0-42d34fdda7f6",
							targetHandle: "targetTop",
							animated: true,
							arrowHeadType: "arrowclosed",
							type: "buttonedge",
							data: {
								name: "",
								stroke: "black",
								currentQuestion: {
									question:
										"Hello {{name}},\n\nThis call is from Streamspace. Thank you for applying June 2022 walk-in interviews. We would like to get a confirmation of your scheduled interview on 17 June 2022 at {{time}}\n\nTo confirm your interview, please press one. \nIf you are not willing to come, please press two.",
									isNewFlow: true,
									name: "26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
									captureType: "DTMF",
									timeout: "10",
									isNewQType: "STANDARD_SINGLE_DTMF",
									handlers: [
										{
											id: "default",
											name: "User Press Or Say Something.",
											label: "default",
											customType: "default",
											value: "default",
											type: "source",
											position: "bottom",
											color: "rgb(144, 89, 186)",
										},
										{
											id: "148e1b24-e318-40c0-a29c-8629a75815ce",
											name: "1",
											label: "1",
											value: "1",
											type: "source",
											customType: "customAction",
											position: "bottom",
											customIntent: false,
											color: "rgb(112, 213, 216)",
										},
										{
											id: "5d86891a-53e8-4041-95ae-4b67dca98f50",
											name: "2",
											label: "2",
											value: "2",
											type: "source",
											customType: "customAction",
											position: "bottom",
											customIntent: false,
											color: "rgb(194, 244, 129)",
										},
									],
									questionType: "STANDARD",
									noOfDTMFNeedToCollect: 1,
									type: "text",
									entityExtraction: "",
									selectedDTMFType: "SINGLE DIGIT",
									intentExtract: {
										intent: ["1", "2"],
									},
									slot: "CandidateResponse",
									needToWaitForForCollectAllText: false,
									failOver: {
										say: [],
										nextQuestion: [],
									},
									validate: {
										on_failure: {
											retryCount: 2,
											nextQuestion: [],
											say: [{}],
										},
										on_success: {
											nextQuestion: [],
											say: [],
											customAction: [
												{
													_id: "76c76cda-088f-4075-b799-fde6be0517e6",
													payload: "1",
													nextQuestion: [
														"b4227322-8e31-43de-9a08-e5290912ca15",
													],
												},
												{
													_id: "f5a45bf9-2ff1-4d1b-9237-69c539ced346",
													payload: "2",
													nextQuestion: [
														"1e6e8403-6d53-4895-88dc-2a1420123b9e",
													],
												},
											],
										},
									},
									playType: "TTS",
									languageId: "en-IN",
									language: {
										language: "English (India)",
										language_code: "en-IN",
										value: "en-IN",
										label: "English (India)",
									},
									voiceId: "en-IN-Standard-B",
									voice: {
										language: "English (India)",
										voice_type: "Standard",
										language_code: "en-IN",
										voice_name: "en-IN-Standard-B",
										gender: "MALE",
										type: "google-tts",
										value: "en-IN-Standard-B",
									},
									isNeedToPutTranscriptToSlot: true,
								},
								params: {
									source: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
									sourceHandle:
										"148e1b24-e318-40c0-a29c-8629a75815ce",
									target: "a9c322f3-f8c1-4213-b9c0-42d34fdda7f6",
									targetHandle: "targetTop",
								},
								elemnt: {
									position: {
										x: 824,
										y: 421,
									},
									targetPosition: "left",
									id: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
									handles: [],
									type: "STANDARD_SINGLE_DTMF",
									subType: "",
									data: {
										label: "Gather DTMF",
										questionType: "STANDARD_SINGLE_DTMF",
										questionSubType: "",
										name: "26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
										questionId:
											"26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
										questionOriginalType: "STANDARD",
										handles: [],
									},
								},
								destinationNodeName:
									"b4227322-8e31-43de-9a08-e5290912ca15",
							},
							style: {
								stroke: "black",
								background: "red",
							},
							label: "",
							id: "reactflow__edge-f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c148e1b24-e318-40c0-a29c-8629a75815ce-a9c322f3-f8c1-4213-b9c0-42d34fdda7f6targetTop",
						},
						{
							source: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
							sourceHandle:
								"5d86891a-53e8-4041-95ae-4b67dca98f50",
							target: "07d9f931-99a6-4955-90a2-e7c0b7f9c855",
							targetHandle: "targetTop",
							animated: true,
							arrowHeadType: "arrowclosed",
							type: "buttonedge",
							data: {
								name: "",
								stroke: "black",
								currentQuestion: {
									question:
										"Hello {{name}},\n\nThis call is from Streamspace. Thank you for applying June 2022 walk-in interviews. We would like to get a confirmation of your scheduled interview on 17 June 2022 at {{time}}\n\nTo confirm your interview, please press one. \nIf you are not willing to come, please press two.",
									isNewFlow: true,
									name: "26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
									captureType: "DTMF",
									timeout: "10",
									isNewQType: "STANDARD_SINGLE_DTMF",
									handlers: [
										{
											id: "default",
											name: "User Press Or Say Something.",
											label: "default",
											customType: "default",
											value: "default",
											type: "source",
											position: "bottom",
											color: "rgb(144, 89, 186)",
										},
										{
											id: "148e1b24-e318-40c0-a29c-8629a75815ce",
											name: "1",
											label: "1",
											value: "1",
											type: "source",
											customType: "customAction",
											position: "bottom",
											customIntent: false,
											color: "rgb(112, 213, 216)",
										},
										{
											id: "5d86891a-53e8-4041-95ae-4b67dca98f50",
											name: "2",
											label: "2",
											value: "2",
											type: "source",
											customType: "customAction",
											position: "bottom",
											customIntent: false,
											color: "rgb(194, 244, 129)",
										},
									],
									questionType: "STANDARD",
									noOfDTMFNeedToCollect: 1,
									type: "text",
									entityExtraction: "",
									selectedDTMFType: "SINGLE DIGIT",
									intentExtract: {
										intent: ["1", "2"],
									},
									slot: "CandidateResponse",
									needToWaitForForCollectAllText: false,
									failOver: {
										say: [],
										nextQuestion: [],
									},
									validate: {
										on_failure: {
											retryCount: 2,
											nextQuestion: [],
											say: [{}],
										},
										on_success: {
											nextQuestion: [],
											say: [],
											customAction: [
												{
													_id: "76c76cda-088f-4075-b799-fde6be0517e6",
													payload: "1",
													nextQuestion: [
														"b4227322-8e31-43de-9a08-e5290912ca15",
													],
												},
												{
													_id: "f5a45bf9-2ff1-4d1b-9237-69c539ced346",
													payload: "2",
													nextQuestion: [
														"1e6e8403-6d53-4895-88dc-2a1420123b9e",
													],
												},
											],
										},
									},
									playType: "TTS",
									languageId: "en-IN",
									language: {
										language: "English (India)",
										language_code: "en-IN",
										value: "en-IN",
										label: "English (India)",
									},
									voiceId: "en-IN-Standard-B",
									voice: {
										language: "English (India)",
										voice_type: "Standard",
										language_code: "en-IN",
										voice_name: "en-IN-Standard-B",
										gender: "MALE",
										type: "google-tts",
										value: "en-IN-Standard-B",
									},
									isNeedToPutTranscriptToSlot: true,
								},
								params: {
									source: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
									sourceHandle:
										"5d86891a-53e8-4041-95ae-4b67dca98f50",
									target: "07d9f931-99a6-4955-90a2-e7c0b7f9c855",
									targetHandle: "targetTop",
								},
								elemnt: {
									position: {
										x: 824,
										y: 421,
									},
									targetPosition: "left",
									id: "f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c",
									handles: [],
									type: "STANDARD_SINGLE_DTMF",
									subType: "",
									data: {
										label: "Gather DTMF",
										questionType: "STANDARD_SINGLE_DTMF",
										questionSubType: "",
										name: "26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
										questionId:
											"26dfcdc9-98e8-4ffa-b8d6-754c870e827a",
										questionOriginalType: "STANDARD",
										handles: [],
									},
								},
								destinationNodeName:
									"1e6e8403-6d53-4895-88dc-2a1420123b9e",
							},
							style: {
								stroke: "black",
								background: "red",
							},
							label: "",
							id: "reactflow__edge-f6c7d86f-66fa-4932-9a0d-fbd3ffe3fb3c5d86891a-53e8-4041-95ae-4b67dca98f50-07d9f931-99a6-4955-90a2-e7c0b7f9c855targetTop",
						},
						{
							position: {
								x: 739,
								y: 608,
							},
							targetPosition: "left",
							id: "9954c02c-250a-4d32-b986-9a460d4febf6",
							handles: [],
							type: "DISCONNECT_CALL",
							subType: "",
							data: {
								label: "EndCall",
								questionType: "DISCONNECT_CALL",
								questionSubType: "",
								name: "49adc8dd-5797-401c-9eec-04d64b1dff94",
								questionId:
									"49adc8dd-5797-401c-9eec-04d64b1dff94",
								questionOriginalType: "DISCONNECT_CALL",
								handles: [],
							},
						},
						{
							source: "a9c322f3-f8c1-4213-b9c0-42d34fdda7f6",
							sourceHandle: "sourceBottom",
							target: "9954c02c-250a-4d32-b986-9a460d4febf6",
							targetHandle: "targetTop",
							animated: true,
							arrowHeadType: "arrowclosed",
							type: "buttonedge",
							data: {
								name: "",
								stroke: "black",
								currentQuestion: {
									question: "",
									isNewFlow: true,
									name: "b4227322-8e31-43de-9a08-e5290912ca15",
									questionType: "ADD_SLOTS",
									type: "text",
									isFinal: false,
									nextQuestion: [
										"49adc8dd-5797-401c-9eec-04d64b1dff94",
									],
									hardCodedSlots: [
										{
											_id: "0.8105032205913951",
											key: "CandidateIntrested",
											value: "Yes",
											global: false,
										},
									],
									handlers: [],
								},
								params: {
									source: "a9c322f3-f8c1-4213-b9c0-42d34fdda7f6",
									sourceHandle: "sourceBottom",
									target: "9954c02c-250a-4d32-b986-9a460d4febf6",
									targetHandle: "targetTop",
								},
								elemnt: {
									position: {
										x: 780,
										y: 630,
									},
									targetPosition: "left",
									id: "a9c322f3-f8c1-4213-b9c0-42d34fdda7f6",
									handles: [],
									type: "ADD_SLOTS",
									subType: "",
									data: {
										label: "Set Variables",
										questionType: "ADD_SLOTS",
										questionSubType: "",
										name: "b4227322-8e31-43de-9a08-e5290912ca15",
										questionId:
											"b4227322-8e31-43de-9a08-e5290912ca15",
										questionOriginalType: "ADD_SLOTS",
										handles: [],
									},
								},
								destinationNodeName:
									"49adc8dd-5797-401c-9eec-04d64b1dff94",
							},
							style: {
								stroke: "black",
								background: "red",
							},
							label: "",
							id: "reactflow__edge-a9c322f3-f8c1-4213-b9c0-42d34fdda7f6sourceBottom-9954c02c-250a-4d32-b986-9a460d4febf6targetTop",
						},
						{
							source: "07d9f931-99a6-4955-90a2-e7c0b7f9c855",
							sourceHandle: "sourceBottom",
							target: "9954c02c-250a-4d32-b986-9a460d4febf6",
							targetHandle: "targetTop",
							animated: true,
							arrowHeadType: "arrowclosed",
							type: "buttonedge",
							data: {
								name: "",
								stroke: "black",
								currentQuestion: {
									question: "",
									isNewFlow: true,
									name: "1e6e8403-6d53-4895-88dc-2a1420123b9e",
									questionType: "ADD_SLOTS",
									type: "text",
									isFinal: false,
									nextQuestion: [
										"49adc8dd-5797-401c-9eec-04d64b1dff94",
									],
									hardCodedSlots: [
										{
											_id: "0.5343595503599066",
											key: "CandidateIntrested",
											value: "No",
											global: false,
										},
									],
									handlers: [],
								},
								params: {
									source: "07d9f931-99a6-4955-90a2-e7c0b7f9c855",
									sourceHandle: "sourceBottom",
									target: "9954c02c-250a-4d32-b986-9a460d4febf6",
									targetHandle: "targetTop",
								},
								elemnt: {
									position: {
										x: 935,
										y: 618,
									},
									targetPosition: "left",
									id: "07d9f931-99a6-4955-90a2-e7c0b7f9c855",
									handles: [],
									type: "ADD_SLOTS",
									subType: "",
									data: {
										label: "Set Variables",
										questionType: "ADD_SLOTS",
										questionSubType: "",
										name: "1e6e8403-6d53-4895-88dc-2a1420123b9e",
										questionId:
											"1e6e8403-6d53-4895-88dc-2a1420123b9e",
										questionOriginalType: "ADD_SLOTS",
										handles: [],
									},
								},
								destinationNodeName:
									"49adc8dd-5797-401c-9eec-04d64b1dff94",
							},
							style: {
								stroke: "black",
								background: "red",
							},
							label: "",
							id: "reactflow__edge-07d9f931-99a6-4955-90a2-e7c0b7f9c855sourceBottom-9954c02c-250a-4d32-b986-9a460d4febf6targetTop",
						},
					],
					version: "X6dxZW",
					status: false,
					updatedBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
					update_at: {
						$date: "2022-06-15T14:35:48.972Z",
					},
					tags: [],
					isDeleted: false,
				},
			]);

			let nFlow = db.collection("flow-name");

			db.csat.insertMany([
				{
					_id: "ef064a18-80a2-4e21-9910-1c5d0cbe3ac1",
					name: "CSAT Samples",
					description: "",
					intro: {
						fileId: "abc-abc-abc-abc",
						file: "abc.wav",
					},
					method: "TRANSFER_ON_AGENT_HANGUP",
					questions: {
						config: {
							keypad: true,
							speech: false,
							allowIntruption: false,
						},
						list: [
							{
								title: "First questions",
								fileId: "abc-abc-abc-abc",
								file: "xskksl.wav",
								next: "NEXT_QUESTION",
							},
							{
								title: "Second questions",
								fileId: "abc-abc-abc-abc",
								file: "xskksl.wav",
								next: "HUNGUP",
							},
						],
					},
					end: {
						fileName: "",
						fileId: "",
						type: "string",
					},
					tags: ["sales", "marketing"],
					status: true,
					updatedBy: "5854c4ae-1559-4487-909d-b093f3f8c106",
					update_at: {
						$date: "2022-04-18T08:25:34.759Z",
					},
					isDeleted: true,
				},
			]);

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
