import type { INodeProperties } from 'n8n-workflow';

export const cardsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					]
				}
			},
			"options": [
				{
					"name": "Get Listof Cards",
					"value": "Get Listof Cards",
					"action": "View List of Cards.",
					"description": "Returns a list of cards related to your fire.com account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/cards"
						}
					}
				},
				{
					"name": "Create New Card",
					"value": "Create New Card",
					"action": "Create a new debit card.",
					"description": "You can create multiple debit cards which can be linked to your fire.com accounts.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/cards"
						}
					}
				},
				{
					"name": "Block Card",
					"value": "Block Card",
					"action": "Block a card",
					"description": "Updates status of an existing card to block which prevents any transactions being carried out with that card.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/cards/{{$parameter[\"cardId\"]}}/block"
						}
					}
				},
				{
					"name": "Get Listof Card Transactions",
					"value": "Get Listof Card Transactions",
					"action": "List Card Transactions.",
					"description": "Returns a list of cards transactions related to your fire.com card.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/cards/{{$parameter[\"cardId\"]}}/transactions"
						}
					}
				},
				{
					"name": "Unblock Card",
					"value": "Unblock Card",
					"action": "Unblock a card",
					"description": "Updates status of an existing card to unblock which means that transactions can be carried out with that card.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/cards/{{$parameter[\"cardId\"]}}/unblock"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Get Listof Cards"
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
						"Cards"
					],
					"operation": [
						"Get Listof Cards"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Create New Card"
					]
				}
			}
		},
		{
			"displayName": "Accept Fees And Charges",
			"name": "acceptFeesAndCharges",
			"type": "boolean",
			"default": true,
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
						"Cards"
					],
					"operation": [
						"Create New Card"
					]
				}
			}
		},
		{
			"displayName": "Address Type",
			"name": "addressType",
			"type": "options",
			"default": "BUSINESS",
			"options": [
				{
					"name": "HOME",
					"value": "HOME"
				},
				{
					"name": "BUSINESS",
					"value": "BUSINESS"
				}
			],
			"routing": {
				"send": {
					"property": "addressType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Create New Card"
					]
				}
			}
		},
		{
			"displayName": "Card Pin",
			"name": "cardPin",
			"type": "string",
			"default": 5345,
			"routing": {
				"send": {
					"property": "cardPin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Create New Card"
					]
				}
			}
		},
		{
			"displayName": "Eur Ican",
			"name": "eurIcan",
			"type": "number",
			"default": 2150,
			"routing": {
				"send": {
					"property": "eurIcan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Create New Card"
					]
				}
			}
		},
		{
			"displayName": "Gbp Ican",
			"name": "gbpIcan",
			"type": "number",
			"default": 2152,
			"routing": {
				"send": {
					"property": "gbpIcan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Create New Card"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"type": "number",
			"default": 3245,
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Create New Card"
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
						"Cards"
					],
					"operation": [
						"Create New Card"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/cards/{cardId}/block",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Block Card"
					]
				}
			}
		},
		{
			"displayName": "Card ID",
			"name": "cardId",
			"required": true,
			"default": 0,
			"type": "number",
			"description": "The cardid of the card to block",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Block Card"
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
						"Cards"
					],
					"operation": [
						"Block Card"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/cards/{cardId}/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Get Listof Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Card ID",
			"name": "cardId",
			"required": true,
			"default": 0,
			"type": "number",
			"description": "The cardid of the card to retrieve the associated transactions",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Get Listof Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 0,
			"type": "number",
			"description": "The number of records to return",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Get Listof Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 0,
			"type": "number",
			"description": "The page of records to return",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Get Listof Card Transactions"
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
						"Cards"
					],
					"operation": [
						"Get Listof Card Transactions"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/cards/{cardId}/unblock",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Unblock Card"
					]
				}
			}
		},
		{
			"displayName": "Card ID",
			"name": "cardId",
			"required": true,
			"default": 0,
			"type": "number",
			"description": "The cardid of the card to unblock",
			"displayOptions": {
				"show": {
					"resource": [
						"Cards"
					],
					"operation": [
						"Unblock Card"
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
						"Cards"
					],
					"operation": [
						"Unblock Card"
					]
				}
			}
		},
];
