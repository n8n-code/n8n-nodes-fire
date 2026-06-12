import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FireApi implements ICredentialType {
        name = 'N8nDevFireApi';

        displayName = 'Fire API';

        icon: Icon = { light: 'file:../nodes/Fire/fire.png', dark: 'file:../nodes/Fire/fire.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.fire.com/business',
                        required: true,
                        placeholder: 'https://api.fire.com/business',
                        description: 'The base URL of your Fire API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
