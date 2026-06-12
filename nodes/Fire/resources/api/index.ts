import type { INodeProperties } from 'n8n-workflow';

export const apiDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					]
				}
			},
			"options": [
				{
					"name": "Create API Application",
					"value": "Create API Application",
					"action": "Create a new API Application",
					"description": "Create a new API Application with specified permissions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/apps"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/apps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
		{
			"displayName": "Application Name",
			"name": "applicationName",
			"type": "string",
			"default": "Batch Processing API",
			"description": "A name for the API Application to help you identify it",
			"routing": {
				"send": {
					"property": "applicationName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this API Application can be used",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
		{
			"displayName": "Expiry",
			"name": "expiry",
			"type": "string",
			"default": "2019-08-22T07:48:56.460Z",
			"description": "The date that this API Application can no longer be used.",
			"routing": {
				"send": {
					"property": "expiry",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
		{
			"displayName": "Ican",
			"name": "ican",
			"type": "number",
			"default": 0,
			"description": "The ICAN of one of your Fire accounts. Restrict this API Application to a certan account.",
			"routing": {
				"send": {
					"property": "ican",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
		{
			"displayName": "Number Of Payee Approvals Required",
			"name": "numberOfPayeeApprovalsRequired",
			"type": "number",
			"default": 1,
			"description": "Number of approvals required to create a payee in a batch",
			"routing": {
				"send": {
					"property": "numberOfPayeeApprovalsRequired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
		{
			"displayName": "Number Of Payment Approvals Required",
			"name": "numberOfPaymentApprovalsRequired",
			"type": "number",
			"default": 1,
			"description": "Number of approvals required to process a payment in a batch",
			"routing": {
				"send": {
					"property": "numberOfPaymentApprovalsRequired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
		{
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "[\n  \"PERM_BUSINESS_POST_PAYMENT_REQUEST\",\n  \"PERM_BUSINESS_GET_ASPSPS\"\n]",
			"description": "The list of permissions required",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API"
					],
					"operation": [
						"Create API Application"
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
						"API"
					],
					"operation": [
						"Create API Application"
					]
				}
			}
		},
];
