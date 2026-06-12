import type { INodeProperties } from 'n8n-workflow';

export const openBankingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					]
				}
			},
			"options": [
				{
					"name": "Get List Of Aspsps",
					"value": "Get List Of Aspsps",
					"action": "Get list of ASPSPs / Banks",
					"description": "Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.\n***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/aspsps"
						}
					}
				},
				{
					"name": "New Payment Request",
					"value": "New Payment Request",
					"action": "Create a Fire Open Payment request",
					"description": "Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.\n\nTo set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.\n\nConsumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.\n\nThe funds are settled into your fire.com account, fully reconciled, with your specified fields provided.\n\nThere are two implementation options you can use to display payment pages with Fire Open Payments.\n1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.\n2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.\n\n## Hosted Payment Pages Option\n![Image](https://fire.com/docs/images/fop-hosted-flow.png)\n\nThe payer is brought through 5 stages to complete the payment:\n1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.\n2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.\n3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.\n4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.\n5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.\n\nTo implement the hosted Fire Open Payments option you need to do the following:\n1. You can create a new Fire Open Payment request either within Firework Online or via the API.\n2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:\n    - “Create a Payment Request”\n    - “Get Payment Details”\n\n3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.\n4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.\n5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.\n6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.\n7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.\n8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.\n9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.\n\nOnce the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`\n\nThis request creates a new Fire Open Payment Payment. A code is returned that can be shared to your customers as a URL by any channel you wish.\nYou will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/paymentrequests"
						}
					}
				},
				{
					"name": "Get Payment Details",
					"value": "Get Payment Details",
					"action": "Get Payment Details",
					"description": "Returns the details of a specific payment.\n\nAs the customer goes through the process of making the payment the status of the payment will change.\n\n* `AWAITING_AUTHORISATION` -This is the initial status of all your payments.\n* `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.\n* `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.\n* `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.\n* `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.\n* `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.\n\n\nYou will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/payments/{{$parameter[\"paymentUuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/aspsps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"Get List Of Aspsps"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"description": "The three letter code for the currency - either `EUR` or `GBP`. Use this to filter the list for banks that can be used to pay in a certain currency.",
			"default": "EUR",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "currency",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"Get List Of Aspsps"
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
						"Open Banking"
					],
					"operation": [
						"Get List Of Aspsps"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/paymentrequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Additional Fields",
			"name": "additionalFields",
			"type": "string",
			"default": "ORDER_ID|PRODUCT_ID|CUSTOMER_ID|CUSTOMER_NUMBER|COMMENT2",
			"description": "These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer.",
			"routing": {
				"send": {
					"property": "additionalFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 1000,
			"description": "The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100).",
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
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Collect Fields",
			"name": "collectFields",
			"type": "string",
			"default": "ADDRESS|REFERENCE|COMMENT1",
			"description": "For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.",
			"routing": {
				"send": {
					"property": "collectFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "EUR",
			"description": "Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.",
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
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Gym Fees Oct 2020",
			"description": "A public facing description of the request. This will be shown to the user when they tap or scan the request.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Expiry",
			"name": "expiry",
			"type": "string",
			"default": "2020-10-22T07:48:56.460Z",
			"description": "This is the expiry of the payment request. After this time, the payment cannot be paid.",
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
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ican To",
			"name": "icanTo",
			"type": "number",
			"default": 42,
			"description": "The ican of the account to collect the funds into. Must be one of your fire.com Accounts.",
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
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Mandatory Fields",
			"name": "mandatoryFields",
			"type": "string",
			"default": "ADDRESS|REFERENCE|COMMENT1",
			"description": "For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.",
			"routing": {
				"send": {
					"property": "mandatoryFields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Max Number Payments",
			"name": "maxNumberPayments",
			"type": "number",
			"default": 1,
			"description": "The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types.",
			"routing": {
				"send": {
					"property": "maxNumberPayments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "My Ref",
			"name": "myRef",
			"type": "string",
			"default": "Fees",
			"description": "An internal description of the request.",
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
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Order Details",
			"name": "orderDetails",
			"type": "json",
			"default": "{\n  \"comment1\": \"Additional comments about the transaction\",\n  \"comment2\": \"Additional comments about the transaction\",\n  \"customerNumber\": \"123645\",\n  \"deliveryAddressLine1\": \"12 The Street\",\n  \"deliveryAddressLine2\": \"The Way\",\n  \"deliveryCity\": \"London\",\n  \"deliveryCountry\": \"GB\",\n  \"deliveryPostCode\": \"EC15155\",\n  \"merchantCustomerIdentification\": 8303863544,\n  \"merchantNumber\": \"1234567\",\n  \"orderId\": \"6c28a47d-4502-4111\",\n  \"productId\": \"ZFDAA-1221\",\n  \"variableReference\": \"John Doe\"\n}",
			"routing": {
				"send": {
					"property": "orderDetails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "Return URL",
			"name": "returnUrl",
			"type": "string",
			"default": "https://example.com/callback",
			"description": "The merchant return URL where the customer will be re-directed to with the result of the transaction.",
			"routing": {
				"send": {
					"property": "returnUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "OTHER",
			"description": "The type of Fire Open Payment that was created",
			"options": [
				{
					"name": "OTHER",
					"value": "OTHER"
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
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
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
						"Open Banking"
					],
					"operation": [
						"New Payment Request"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/payments/{paymentUuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"Get Payment Details"
					]
				}
			}
		},
		{
			"displayName": "Payment Uuid",
			"name": "paymentUuid",
			"required": true,
			"default": "4ADFB67A-0F5B-4A9A-9D74-34437250045C",
			"type": "string",
			"description": "The unique id for the transaction.",
			"displayOptions": {
				"show": {
					"resource": [
						"Open Banking"
					],
					"operation": [
						"Get Payment Details"
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
						"Open Banking"
					],
					"operation": [
						"Get Payment Details"
					]
				}
			}
		},
];
