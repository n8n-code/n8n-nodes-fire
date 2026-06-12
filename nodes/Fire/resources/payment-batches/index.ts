import type { INodeProperties } from 'n8n-workflow';

export const paymentBatchesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					]
				}
			},
			"options": [
				{
					"name": "Get Batches",
					"value": "Get Batches",
					"action": "List batches",
					"description": "Returns the list of batch with the specified types and statuses.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/batches"
						}
					}
				},
				{
					"name": "Create Batch Payment",
					"value": "Create Batch Payment",
					"action": "Create a new batch of payments",
					"description": "The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.\n\nFor added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.\n\n\nThe process is as follows:\n\n**1.**Create a new batch\n\n**2.**Add payments to the batch\n\n**3.**Submit the batch for approval\n\nOnce the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.\n\n**Batch Life Cycle Events**\n\nA batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.\n\nThe following events are triggered during a batch:\n\n**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.\n\n**batch.item-added:** Details of the item added to the batch\n\n**batch.item-removed:** Details of the item removed from the batch\n\n**batch.cancelled:** Notifies that the batch was cancelled.\n\n**batch.submitted:** Notifes that the batch was submitted\n\n**batch.approved:** Notifies that the batch was approved.\n\n**batch.rejected:** Notifies that the batch was rejected.\n\n**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)\n\n**batch.completed:** Notifies that the batch completed successfully. Includes a summary.\n\nPush notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.\n\nThis is the first step in creating a batch payment.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/batches"
						}
					}
				},
				{
					"name": "Cancel Batch Payment",
					"value": "Cancel Batch Payment",
					"action": "Cancel a batch",
					"description": "Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}"
						}
					}
				},
				{
					"name": "Get Details Single Batch",
					"value": "Get Details Single Batch",
					"action": "Get details of a single Batch",
					"description": "Returns the details of the batch specified in the API endpoint - {batchUuid}.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}"
						}
					}
				},
				{
					"name": "Submit Batch",
					"value": "Submit Batch",
					"action": "Submit a batch for approval",
					"description": "Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.\n\nYou can only submit a batch while it is in the OPEN state.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}"
						}
					}
				},
				{
					"name": "Get Listof Approvers For Batch",
					"value": "Get Listof Approvers For Batch",
					"action": "List Approvers for a Batch",
					"description": "Returns a list of approvers for this batch.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}/approvals"
						}
					}
				},
				{
					"name": "Get Items Batch Bank Transfer",
					"value": "Get Items Batch Bank Transfer",
					"action": "List items in a Batch",
					"description": "Returns a paginated list of items in the specified batch.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}/banktransfers"
						}
					}
				},
				{
					"name": "Add Bank Transfer Batch Payment",
					"value": "Add Bank Transfer Batch Payment",
					"action": "Add a bank transfer payment to the batch.",
					"description": "There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).\n\n**Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.\n\n**Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}/banktransfers"
						}
					}
				},
				{
					"name": "Delete Bank Transfer Batch Payment",
					"value": "Delete Bank Transfer Batch Payment",
					"action": "Remove a Payment from the Batch (Bank Transfers)",
					"description": "Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}/banktransfers/{{$parameter[\"itemUuid\"]}}"
						}
					}
				},
				{
					"name": "Get Items Batch Internal Trasnfer",
					"value": "Get Items Batch Internal Trasnfer",
					"action": "List items in a Batch",
					"description": "Returns a paginated list of items in the specified batch.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}/internaltransfers"
						}
					}
				},
				{
					"name": "Add Internal Transfer Batch Payment",
					"value": "Add Internal Transfer Batch Payment",
					"action": "Add an internal transfer payment to the batch",
					"description": "Simply specify the source account, destination account, amount and a reference.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}/internaltransfers"
						}
					}
				},
				{
					"name": "Delete Internal Transfer Batch Payment",
					"value": "Delete Internal Transfer Batch Payment",
					"action": "Remove a Payment from the Batch (Internal Transfer)",
					"description": "Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/batches/{{$parameter[\"batchUuid\"]}}/internaltransfers/{{$parameter[\"itemUuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/batches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Batches"
					]
				}
			}
		},
		{
			"displayName": "Batch Status",
			"name": "batchStatus",
			"default": "SUBMITTED",
			"type": "options",
			"description": "The status of the batch if internal transfer.",
			"options": [
				{
					"name": "SUBMITTED",
					"value": "SUBMITTED"
				},
				{
					"name": "REMOVED",
					"value": "REMOVED"
				},
				{
					"name": "SUCCEEDED",
					"value": "SUCCEEDED"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "batchStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Batches"
					]
				}
			}
		},
		{
			"displayName": "Batch Types",
			"name": "batchTypes",
			"default": "INTERNAL_TRANSFER",
			"type": "options",
			"description": "The type of the batch. Can be one of the 3 listed enums.",
			"options": [
				{
					"name": "INTERNAL TRANSFER",
					"value": "INTERNAL_TRANSFER"
				},
				{
					"name": "BANK TRANSFER",
					"value": "BANK_TRANSFER"
				},
				{
					"name": "NEW PAYEE",
					"value": "NEW_PAYEE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "batchTypes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Batches"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"default": "DATE",
			"type": "options",
			"description": "You can order the batches by date. No other options at this time",
			"options": [
				{
					"name": "DATE",
					"value": "DATE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Batches"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"default": "DESC",
			"type": "options",
			"description": "You can order the batches by ascending or descending order.",
			"options": [
				{
					"name": "DESC",
					"value": "DESC"
				},
				{
					"name": "ASC",
					"value": "ASC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Batches"
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
						"Payment Batches"
					],
					"operation": [
						"Get Batches"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/batches",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Create Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Batch Name",
			"name": "batchName",
			"type": "string",
			"default": "January 2018 Payroll",
			"description": "An optional name you give to the batch at creation time.",
			"routing": {
				"send": {
					"property": "batchName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Create Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Callback URL",
			"name": "callbackUrl",
			"type": "string",
			"default": "https://my.webserver.com/cb/payroll",
			"description": "An optional POST URL that all events for this batch will be sent to.",
			"routing": {
				"send": {
					"property": "callbackUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Create Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "EUR",
			"description": "GBP or EUR",
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
						"Payment Batches"
					],
					"operation": [
						"Create Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Job Number",
			"name": "jobNumber",
			"type": "string",
			"default": "2022-01-PR",
			"description": "An optional job number you can give to the batch to help link it to your own system.",
			"routing": {
				"send": {
					"property": "jobNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Create Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "BANK_TRANSFER",
			"description": "The type of the batch - can be one of the listed 3",
			"options": [
				{
					"name": "BANK TRANSFER",
					"value": "BANK_TRANSFER"
				},
				{
					"name": "INTERNAL TRANSFER",
					"value": "INTERNAL_TRANSFER"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Create Batch Payment"
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
						"Payment Batches"
					],
					"operation": [
						"Create Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/batches/{batchUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Cancel Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Cancel Batch Payment"
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
						"Payment Batches"
					],
					"operation": [
						"Cancel Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/batches/{batchUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Details Single Batch"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Details Single Batch"
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
						"Payment Batches"
					],
					"operation": [
						"Get Details Single Batch"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/batches/{batchUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Submit Batch"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Submit Batch"
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
						"Payment Batches"
					],
					"operation": [
						"Submit Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/batches/{batchUuid}/approvals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Listof Approvers For Batch"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Listof Approvers For Batch"
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
						"Payment Batches"
					],
					"operation": [
						"Get Listof Approvers For Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/batches/{batchUuid}/banktransfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Bank Transfer"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Bank Transfer"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": "0",
			"type": "number",
			"description": "The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.",
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
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Bank Transfer"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": "10",
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
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Bank Transfer"
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
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Bank Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/batches/{batchUuid}/banktransfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 500,
			"description": "The value of the transaction",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Dest Account Holder Name",
			"name": "destAccountHolderName",
			"type": "string",
			"default": "John Smith",
			"description": "The destination account holder name",
			"routing": {
				"send": {
					"property": "destAccountHolderName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Dest Account Number",
			"name": "destAccountNumber",
			"type": "string",
			"default": "12345678",
			"description": "The destination Account Number if a GBP bank transfer",
			"routing": {
				"send": {
					"property": "destAccountNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Dest Iban",
			"name": "destIban",
			"type": "string",
			"default": "IE00AIBK93123412341234",
			"description": "The destination IBAN if a Euro Bank transfer",
			"routing": {
				"send": {
					"property": "destIban",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Dest Nsc",
			"name": "destNsc",
			"type": "string",
			"default": "123456",
			"description": "The destination Nsc if a GBP bank transfer",
			"routing": {
				"send": {
					"property": "destNsc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Ican From",
			"name": "icanFrom",
			"type": "number",
			"default": 2001,
			"description": "The Fire account ID for the fire.com account the funds are taken from.",
			"routing": {
				"send": {
					"property": "icanFrom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "My Ref",
			"name": "myRef",
			"type": "string",
			"default": "Payment to John Smith for Consultancy in device.",
			"description": "The reference on the transaction for your records - not shown to the beneficiary.",
			"routing": {
				"send": {
					"property": "myRef",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Payee Type",
			"name": "payeeType",
			"type": "options",
			"default": "ACCOUNT_DETAILS",
			"description": "Use ACCOUNT_DETAILS if you are providing account numbers/sort codes/IBANs (Mode 2). Specify the account details in the destIban, destAccountHolderName, destNsc or destAccountNumber fields as appropriate.",
			"options": [
				{
					"name": "ACCOUNT DETAILS",
					"value": "ACCOUNT_DETAILS"
				}
			],
			"routing": {
				"send": {
					"property": "payeeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Your Ref",
			"name": "yourRef",
			"type": "string",
			"default": "ACME LTD - INV 23434",
			"description": "The reference on the transaction - displayed on the beneficiary bank statement.",
			"routing": {
				"send": {
					"property": "yourRef",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
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
						"Payment Batches"
					],
					"operation": [
						"Add Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/batches/{batchUuid}/banktransfers/{itemUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Delete Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Delete Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Item Uuid",
			"name": "itemUuid",
			"required": true,
			"default": "",
			"type": "string",
			"description": "The uuid of the item to remove.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Delete Bank Transfer Batch Payment"
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
						"Payment Batches"
					],
					"operation": [
						"Delete Bank Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/batches/{batchUuid}/internaltransfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Internal Trasnfer"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Internal Trasnfer"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": "0",
			"type": "number",
			"description": "The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.",
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
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Internal Trasnfer"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": "10",
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
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Internal Trasnfer"
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
						"Payment Batches"
					],
					"operation": [
						"Get Items Batch Internal Trasnfer"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/batches/{batchUuid}/internaltransfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 10000,
			"description": "amount of funds to be transfered",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Ican From",
			"name": "icanFrom",
			"type": "number",
			"default": 2001,
			"description": "The account ID for the fire.com account the funds are taken from",
			"routing": {
				"send": {
					"property": "icanFrom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Ican To",
			"name": "icanTo",
			"type": "number",
			"default": 3221,
			"description": "The account ID for the fire.com account the funds are directed to",
			"routing": {
				"send": {
					"property": "icanTo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Ref",
			"name": "ref",
			"type": "string",
			"default": "Moving funds to Operating Account",
			"description": "The reference on the transaction",
			"routing": {
				"send": {
					"property": "ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Add Internal Transfer Batch Payment"
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
						"Payment Batches"
					],
					"operation": [
						"Add Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/batches/{batchUuid}/internaltransfers/{itemUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Delete Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Batch Uuid",
			"name": "batchUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the batch.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Delete Internal Transfer Batch Payment"
					]
				}
			}
		},
		{
			"displayName": "Item Uuid",
			"name": "itemUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The uuid of the item to remove.",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Batches"
					],
					"operation": [
						"Delete Internal Transfer Batch Payment"
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
						"Payment Batches"
					],
					"operation": [
						"Delete Internal Transfer Batch Payment"
					]
				}
			}
		},
];
