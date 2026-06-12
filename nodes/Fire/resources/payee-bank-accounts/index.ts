import type { INodeProperties } from 'n8n-workflow';

export const payeeBankAccountsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payee Bank Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Get Payees",
					"value": "Get Payees",
					"action": "List all Payee Bank Accounts",
					"description": "Returns all your payee bank accounts. \n\nOrdered by payee name ascending. \n\nCan be paginated.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/payees"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/payees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payee Bank Accounts"
					],
					"operation": [
						"Get Payees"
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
						"Payee Bank Accounts"
					],
					"operation": [
						"Get Payees"
					]
				}
			}
		},
];
