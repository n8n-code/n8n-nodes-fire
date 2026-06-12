import type { INodeProperties } from 'n8n-workflow';

export const transactionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					]
				}
			},
			"options": [
				{
					"name": "Get Transactions By Idv 3",
					"value": "Get Transactions By Idv 3",
					"action": "List transactions for an account (v3)",
					"description": "Retrieve a list of transactions against an account. Initially, use the optional `limit`, `dateRangeFrom` and `dateRangeTo` query params to limit your query, then use the embedded `next` or `prev` links in the response to get newer or older pages.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v3/accounts/{{$parameter[\"ican\"]}}/transactions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v3/accounts/{ican}/transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions By Idv 3"
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
						"Transactions"
					],
					"operation": [
						"Get Transactions By Idv 3"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 0,
			"type": "number",
			"description": "The number of records to return. Defaults to 10 - max is 200.",
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
						"Transactions"
					],
					"operation": [
						"Get Transactions By Idv 3"
					]
				}
			}
		},
		{
			"displayName": "Date Range From",
			"name": "dateRangeFrom",
			"default": 0,
			"type": "number",
			"description": "A millisecond epoch time specifying the date range start date.",
			"routing": {
				"send": {
					"type": "query",
					"property": "dateRangeFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions By Idv 3"
					]
				}
			}
		},
		{
			"displayName": "Date Range To",
			"name": "dateRangeTo",
			"default": 0,
			"type": "number",
			"description": "A millisecond epoch time specifying the date range end date.",
			"routing": {
				"send": {
					"type": "query",
					"property": "dateRangeTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions By Idv 3"
					]
				}
			}
		},
		{
			"displayName": "Start After",
			"name": "startAfter",
			"default": "",
			"type": "string",
			"description": "A pointer to the position in the resultset to start from. Used when paging through results using the linked pages.",
			"routing": {
				"send": {
					"type": "query",
					"property": "startAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions By Idv 3"
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
						"Transactions"
					],
					"operation": [
						"Get Transactions By Idv 3"
					]
				}
			}
		},
];
