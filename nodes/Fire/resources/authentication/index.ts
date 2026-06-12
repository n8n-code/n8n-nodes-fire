import type { INodeProperties } from 'n8n-workflow';

export const authenticationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					]
				}
			},
			"options": [
				{
					"name": "Authenticate",
					"value": "Authenticate",
					"action": "Authenticate with the API.",
					"description": "Access to the API is by Bearer Tokens. The process is somewhat similar to OAuth2.0, but with some changes to improve security.\n\n  1. You must first log into the firework online application and create a new Application in the Profile > API page. (You will need your PIN digits and 2-Factor Authentication device).\n  \n  2. Give your application a Name and select the scope/permissions you need the application to have (more on Scopes below).\n  \n  3. You will be provided with three pieces of information - the App Refresh Token, Client ID and Client Key. You need to take note of the Client Key when it is displayed - it will not be shown again.\n  \n  \n  You now use these pieces of data to retrieve a short-term Access Token which you can use to access the API. The Access Token expires within a relatively short time, so even if it is compromised, the attacker will not have long to use it. The Client Key is the most important piece of information to keep secret. This should only ever be stored on a backend server, and never in a front end client or mobile app.\n\n\n  **If you ever accidentally reveal the Client Key (or accidentally commit it to Github for instance) it is vital that you log into firework online and delete/recreate the App Tokens as soon as possible. Anyone who has these three pieces of data can access the API to view your data and set up payments from your account (depending on the scope of the tokens).**\n  \n  \n  Once you have the access token, pass it as a header for every call, like so:\n\n  `Authorization: Bearer $ACCESS_TOKEN`\n\n  Whenever it expires, create a new nonce and get a new access token again.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/apps/accesstokens"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/apps/accesstokens",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate"
					]
				}
			}
		},
		{
			"displayName": "Client ID",
			"name": "clientId",
			"type": "string",
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"description": "The Client ID for this API Application",
			"routing": {
				"send": {
					"property": "clientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate"
					]
				}
			}
		},
		{
			"displayName": "Client Secret",
			"name": "clientSecret",
			"type": "string",
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"description": "The SHA256 hash of the nonce above and the app’s Client Key. The Client Key will only be shown to you when you create the app, so don’t forget to save it somewhere safe. SECRET=( `/bin/echo -n $NONCE$CLIENT_KEY | sha256sum` ).",
			"routing": {
				"send": {
					"property": "clientSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate"
					]
				}
			}
		},
		{
			"displayName": "Grant Type",
			"name": "grantType",
			"type": "options",
			"default": "AccessToken",
			"description": "Always `AccessToken`. (This will change to `refresh_token` in a future release.)",
			"options": [
				{
					"name": "Access Token",
					"value": "AccessToken"
				}
			],
			"routing": {
				"send": {
					"property": "grantType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate"
					]
				}
			}
		},
		{
			"displayName": "Nonce",
			"name": "nonce",
			"type": "number",
			"default": 728345638475,
			"description": "A random non-repeating number used as a salt for the `clientSecret` below. The simplest nonce is a unix time.",
			"routing": {
				"send": {
					"property": "nonce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate"
					]
				}
			}
		},
		{
			"displayName": "Refresh Token",
			"name": "refreshToken",
			"type": "string",
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"description": "The Refresh Token for this API Application",
			"routing": {
				"send": {
					"property": "refreshToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate"
					]
				}
			}
		},
];
