import type { INodeProperties } from 'n8n-workflow';

export const directDebitsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					]
				}
			},
			"options": [
				{
					"name": "Get Direct Debits For Mandate Uuid",
					"value": "Get Direct Debits For Mandate Uuid",
					"action": "Get all DD payments associated with a direct debit mandate",
					"description": "Retrieve all direct debit payments associated with a direct debit mandate.\nThe permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/directdebits"
						}
					}
				},
				{
					"name": "Get Direct Debit By Uuid",
					"value": "Get Direct Debit By Uuid",
					"action": "Get the details of a direct debit",
					"description": "Retrieve all details of a single direct debit collection/payment, whether successful or not.\nThe permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/directdebits/{{$parameter[\"directDebitUuid\"]}}"
						}
					}
				},
				{
					"name": "Reject Direct Debit",
					"value": "Reject Direct Debit",
					"action": "Reject a direct debit payment",
					"description": "This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.\nPermission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/directdebits/{{$parameter[\"directDebitUuid\"]}}/reject"
						}
					}
				},
				{
					"name": "Get Direct Debit Mandates",
					"value": "Get Direct Debit Mandates",
					"action": "List all direct debit mandates",
					"description": "The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/mandates"
						}
					}
				},
				{
					"name": "Get Mandate",
					"value": "Get Mandate",
					"action": "Get direct debit mandate details",
					"description": "Retrieve all details for a direct debit mandate.\nThe permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/mandates/{{$parameter[\"mandateUuid\"]}}"
						}
					}
				},
				{
					"name": "Update Mandate Alias",
					"value": "Update Mandate Alias",
					"action": "Update a direct debit mandate alias",
					"description": "Update Direct Debit Mandate Alias\nThe permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/mandates/{{$parameter[\"mandateUuid\"]}}"
						}
					}
				},
				{
					"name": "Activate Mandate",
					"value": "Activate Mandate",
					"action": "Activate a direct debit mandate",
					"description": "This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.\nThe permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/mandates/{{$parameter[\"mandateUuid\"]}}/activate"
						}
					}
				},
				{
					"name": "Cancel Mandate By Uuid",
					"value": "Cancel Mandate By Uuid",
					"action": "Cancel a direct debit mandate",
					"description": "This endpoint allows you to cancel a direct debit mandate.\nThe permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/mandates/{{$parameter[\"mandateUuid\"]}}/cancel"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/directdebits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debits For Mandate Uuid"
					]
				}
			}
		},
		{
			"displayName": "Mandate Uuid",
			"name": "mandateUuid",
			"required": true,
			"description": "The mandate UUID to retrieve",
			"default": "1A07774B-1461-4595-BC4B-423B739712AF",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mandateUuid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debits For Mandate Uuid"
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
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debits For Mandate Uuid"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/directdebits/{directDebitUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debit By Uuid"
					]
				}
			}
		},
		{
			"displayName": "Direct Debit Uuid",
			"name": "directDebitUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the direct debit to retrieve.",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debit By Uuid"
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
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debit By Uuid"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/directdebits/{directDebitUuid}/reject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Reject Direct Debit"
					]
				}
			}
		},
		{
			"displayName": "Direct Debit Uuid",
			"name": "directDebitUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the direct debit to retrieve.",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Reject Direct Debit"
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
						"Direct Debits"
					],
					"operation": [
						"Reject Direct Debit"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/mandates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debit Mandates"
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
						"Direct Debits"
					],
					"operation": [
						"Get Direct Debit Mandates"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/mandates/{mandateUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Get Mandate"
					]
				}
			}
		},
		{
			"displayName": "Mandate Uuid",
			"name": "mandateUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the mandate to retrieve.",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Get Mandate"
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
						"Direct Debits"
					],
					"operation": [
						"Get Mandate"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/mandates/{mandateUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Update Mandate Alias"
					]
				}
			}
		},
		{
			"displayName": "Mandate Uuid",
			"name": "mandateUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the mandate to update.",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Update Mandate Alias"
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
						"Direct Debits"
					],
					"operation": [
						"Update Mandate Alias"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/mandates/{mandateUuid}/activate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Activate Mandate"
					]
				}
			}
		},
		{
			"displayName": "Mandate Uuid",
			"name": "mandateUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the mandate to activate.",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Activate Mandate"
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
						"Direct Debits"
					],
					"operation": [
						"Activate Mandate"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/mandates/{mandateUuid}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Cancel Mandate By Uuid"
					]
				}
			}
		},
		{
			"displayName": "Mandate Uuid",
			"name": "mandateUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the mandate to cancel.",
			"displayOptions": {
				"show": {
					"resource": [
						"Direct Debits"
					],
					"operation": [
						"Cancel Mandate By Uuid"
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
						"Direct Debits"
					],
					"operation": [
						"Cancel Mandate By Uuid"
					]
				}
			}
		},
];
