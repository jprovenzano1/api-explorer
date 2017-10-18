/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const APP_TITLE = 'VMware API Explorer';

export const config = {
    apiListHeaderText: "Available APIs",
    enableLocal: true,
    enableRemote: true,
    defaultKeywordsFilter: '',
    defaultProductsFilter: [],
    defaultLanguagesFilter: [],
    defaultSourcesFilter: [],
    hideFilters: false,
    hideProductFilter: false,
    hideLanguageFilter: false,
    hideSourceFilter: false,
    sso: [
    {   "id": "basic",
        "swaggerAuthName": "BasicAuth",
        "displayName": "BasicAuth",
        "authUrl": "http://mp-test-app1.eng.vmware.com:8080/api/v1"
    },
    {   "id": "vcenter_sso",
        "swaggerAuthName": "ApiKeyAuth",
        "displayName": "vCenter SSO",
        "authUrl": "http://mp-test-app1.eng.vmware.com:8080/api/v1"
    },
    {   "id": "vra_sso",
        "swaggerAuthName": "ApiKeyAuth",
        "displayName": "vRealize Automation SSO",
        "authUrl": "http://mp-test-app1.eng.vmware.com:8080/api/v1"
    }
    ]

  };
