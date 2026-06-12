import type { INodeProperties } from 'n8n-workflow';

export const accountsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Get Accounts",
					"value": "Get Accounts",
					"action": "List all fire.com Accounts",
					"description": "Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/accounts"
						}
					}
				},
				{
					"name": "Add Account",
					"value": "Add Account",
					"action": "Add a new account",
					"description": "Creates a new fire.com account.\n\n**Please note there is a charge associated with creating a new account.**\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/accounts"
						}
					}
				},
				{
					"name": "Get Account By ID",
					"value": "Get Account By ID",
					"action": "Retrieve the details of a fire.com Account",
					"description": "You can retrieve the details of a fire.com Account by its `ican`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/accounts/{{$parameter[\"ican\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Accounts"
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
						"Accounts"
					],
					"operation": [
						"Get Accounts"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Add Account"
					]
				}
			}
		},
		{
			"displayName": "Accept Fees And Charges",
			"name": "acceptFeesAndCharges",
			"type": "boolean",
			"default": true,
			"description": "a field to indicate you accept the fee for a new account",
			"routing": {
				"send": {
					"property": "acceptFeesAndCharges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Add Account"
					]
				}
			}
		},
		{
			"displayName": "Account Name",
			"name": "accountName",
			"type": "string",
			"default": "Operating Account",
			"description": "Name to give the new account",
			"routing": {
				"send": {
					"property": "accountName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Add Account"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "EUR",
			"description": "The currency of the new account",
			"options": [
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "GBP",
					"value": "GBP"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Add Account"
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
						"Accounts"
					],
					"operation": [
						"Add Account"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/accounts/{ican}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Account By ID"
					]
				}
			}
		},
		{
			"displayName": "Ican",
			"name": "ican",
			"required": true,
			"default": 0,
			"type": "number",
			"description": "The ican of the account to retrieve",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Get Account By ID"
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
						"Accounts"
					],
					"operation": [
						"Get Account By ID"
					]
				}
			}
		},
];
