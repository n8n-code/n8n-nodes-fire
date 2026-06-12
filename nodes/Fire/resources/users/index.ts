import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Returns details of a specific fire.com user.",
					"description": "You can retrieve the details of a specific fire.com user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/user/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Get Users",
					"value": "Get Users",
					"action": "Returns list of all users on your fire.com account",
					"description": "You can retrieve the details of all fire.com users on your acount.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/user/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"default": 14059,
			"type": "number",
			"description": "Lists a specific User",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
];
