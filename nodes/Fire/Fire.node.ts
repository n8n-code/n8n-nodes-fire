import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authenticationDescription } from './resources/authentication';
import { accountsDescription } from './resources/accounts';
import { openBankingDescription } from './resources/open-banking';
import { apiDescription } from './resources/api';
import { transactionsDescription } from './resources/transactions';
import { directDebitsDescription } from './resources/direct-debits';
import { paymentBatchesDescription } from './resources/payment-batches';
import { cardsDescription } from './resources/cards';
import { payeeBankAccountsDescription } from './resources/payee-bank-accounts';
import { usersDescription } from './resources/users';

export class Fire implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fire',
                name: 'N8nDevFire',
                icon: { light: 'file:./fire.png', dark: 'file:./fire.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Fire.com API integrates Business Account features into applications or back-office systems.',
                defaults: { name: 'Fire' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFireApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Authentication",
					"value": "Authentication",
					"description": "Access to the API is by Bearer Tokens. The process is somewhat similar to OAuth2.0, but with some changes to improve security.\n1. You must first log into the firework online application and create a new Application in the Profile > API page. (You will need your PIN digits and 2-Factor Authentication device).\n2. Give your application a Name and select the scope/permissions you need the application to have (more on Scopes below).\n3. You will be provided with three pieces of information - the App Refresh Token, Client ID and Client Key. You need to take note of the Client Key when it is displayed - it will not be shown again.\n\nYou now use these pieces of data to retrieve a short-term Access Token which you can use to access the API. The Access Token expires within a relatively short time, so even if it is compromised, the attacker will not have long to use it. The Client Key is the most important piece of information to keep secret. This should only ever be stored on a backend server, and never in a front end client or mobile app.\n\n**If you ever accidentally reveal the Client Key (or accidentally commit it to Github for instance) it is vital that you log into firework online and delete/recreate the App Tokens as soon as possible. Anyone who has these three pieces of data can access the API to view your data and set up payments from your account (depending on the scope of the tokens).**\n\nOnce you have the access token, pass it as a header for every call, like so:\n`Authorization: Bearer $ACCESS_TOKEN`\nWhenever it expires, create a new nonce and get a new access token again.\n"
				},
				{
					"name": "Accounts",
					"value": "Accounts",
					"description": "fire.com Accounts are the equivalent of a bank account from bank."
				},
				{
					"name": "Open Banking",
					"value": "Open Banking",
					"description": "Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.\n\nTo set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.\n\nConsumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.\n\nThe funds are settled into your fire.com account, fully reconciled, with your specified fields provided.\n\nThere are two implementation options you can use to display payment pages with Fire Open Payments.\n1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.\n2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.\n\n## Hosted Payment Pages Option\n![Image](https://fire.com/docs/images/fop-hosted-flow.png)\n\nThe payer is brought through 5 stages to complete the payment:\n1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.\n2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.\n3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.\n4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.\n5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.\n\nTo implement the hosted Fire Open Payments option you need to do the following:\n1. You can create a new Fire Open Payment request either within Firework Online or via the API.\n2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:\n    - “Create a Payment Request”\n    - “Get Payment Details”\n\n3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.\n4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.\n5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.\n6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.\n7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.\n8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.\n9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.\n\nOnce the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`\n"
				},
				{
					"name": "API",
					"value": "API",
					"description": "Manage your API Applications and Webhooks"
				},
				{
					"name": "Transactions",
					"value": "Transactions",
					"description": "While there are many types of transactions, they are all represented by the same JSON object with a different txnType."
				},
				{
					"name": "Direct Debits",
					"value": "Direct Debits",
					"description": "The fire.com api allows businesses to automate direct debit payment actions on their fire.com business accounts.\n\nYou can retrieve details of your direct debit payments, direct debit mandates and also take actions on both your direct debit payments and mandates.\n"
				},
				{
					"name": "Payment Batches",
					"value": "Payment Batches",
					"description": "The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.\n\nFor added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.\n\n\nThe process is as follows:\n\n**1.**Create a new batch\n\n**2.**Add payments to the batch\n\n**3.**Submit the batch for approval\n\nOnce the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.\n\n**Batch Life Cycle Events**\n\nA batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.\n\nThe following events are triggered during a batch:\n\n**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.\n\n**batch.item-added:** Details of the item added to the batch\n\n**batch.item-removed:** Details of the item removed from the batch\n\n**batch.cancelled:** Notifies that the batch was cancelled.\n\n**batch.submitted:** Notifes that the batch was submitted\n\n**batch.approved:** Notifies that the batch was approved.\n\n**batch.rejected:** Notifies that the batch was rejected.\n\n**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)\n\n**batch.completed:** Notifies that the batch completed successfully. Includes a summary.\n\nPush notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.\n"
				},
				{
					"name": "Cards",
					"value": "Cards",
					"description": ""
				},
				{
					"name": "Payee Bank Accounts",
					"value": "Payee Bank Accounts",
					"description": ""
				},
				{
					"name": "Users",
					"value": "Users",
					"description": ""
				}
			],
			"default": ""
		},
		...authenticationDescription,
		...accountsDescription,
		...openBankingDescription,
		...apiDescription,
		...transactionsDescription,
		...directDebitsDescription,
		...paymentBatchesDescription,
		...cardsDescription,
		...payeeBankAccountsDescription,
		...usersDescription
                ],
        };
}
