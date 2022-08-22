/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 *
 * Jellyfin API
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PluginInfo } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * PluginsApi - axios parameter creator
 * @export
 */
export const PluginsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Disable a plugin.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disablePlugin: async (pluginId: string, version: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('disablePlugin', 'pluginId', pluginId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('disablePlugin', 'version', version)
            const localVarPath = `/Plugins/{pluginId}/{version}/Disable`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)))
                .replace(`{${"version"}}`, encodeURIComponent(String(version)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Enables a disabled plugin.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enablePlugin: async (pluginId: string, version: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('enablePlugin', 'pluginId', pluginId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('enablePlugin', 'version', version)
            const localVarPath = `/Plugins/{pluginId}/{version}/Enable`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)))
                .replace(`{${"version"}}`, encodeURIComponent(String(version)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets plugin configuration.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginConfiguration: async (pluginId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('getPluginConfiguration', 'pluginId', pluginId)
            const localVarPath = `/Plugins/{pluginId}/Configuration`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a plugin\'s image.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginImage: async (pluginId: string, version: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('getPluginImage', 'pluginId', pluginId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getPluginImage', 'version', version)
            const localVarPath = `/Plugins/{pluginId}/{version}/Image`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)))
                .replace(`{${"version"}}`, encodeURIComponent(String(version)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a plugin\'s manifest.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginManifest: async (pluginId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('getPluginManifest', 'pluginId', pluginId)
            const localVarPath = `/Plugins/{pluginId}/Manifest`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a list of currently installed plugins.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlugins: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Plugins`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Uninstalls a plugin.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        uninstallPlugin: async (pluginId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('uninstallPlugin', 'pluginId', pluginId)
            const localVarPath = `/Plugins/{pluginId}`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Uninstalls a plugin by version.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uninstallPluginByVersion: async (pluginId: string, version: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('uninstallPluginByVersion', 'pluginId', pluginId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('uninstallPluginByVersion', 'version', version)
            const localVarPath = `/Plugins/{pluginId}/{version}`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)))
                .replace(`{${"version"}}`, encodeURIComponent(String(version)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Accepts plugin configuration as JSON body.
         * @summary Updates plugin configuration.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePluginConfiguration: async (pluginId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pluginId' is not null or undefined
            assertParamExists('updatePluginConfiguration', 'pluginId', pluginId)
            const localVarPath = `/Plugins/{pluginId}/Configuration`
                .replace(`{${"pluginId"}}`, encodeURIComponent(String(pluginId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PluginsApi - functional programming interface
 * @export
 */
export const PluginsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PluginsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Disable a plugin.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async disablePlugin(pluginId: string, version: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.disablePlugin(pluginId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Enables a disabled plugin.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enablePlugin(pluginId: string, version: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enablePlugin(pluginId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets plugin configuration.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPluginConfiguration(pluginId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPluginConfiguration(pluginId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a plugin\'s image.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPluginImage(pluginId: string, version: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPluginImage(pluginId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a plugin\'s manifest.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPluginManifest(pluginId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPluginManifest(pluginId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a list of currently installed plugins.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlugins(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PluginInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlugins(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Uninstalls a plugin.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async uninstallPlugin(pluginId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uninstallPlugin(pluginId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Uninstalls a plugin by version.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uninstallPluginByVersion(pluginId: string, version: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uninstallPluginByVersion(pluginId, version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Accepts plugin configuration as JSON body.
         * @summary Updates plugin configuration.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePluginConfiguration(pluginId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePluginConfiguration(pluginId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PluginsApi - factory interface
 * @export
 */
export const PluginsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PluginsApiFp(configuration)
    return {
        /**
         * 
         * @summary Disable a plugin.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disablePlugin(pluginId: string, version: string, options?: any): AxiosPromise<void> {
            return localVarFp.disablePlugin(pluginId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Enables a disabled plugin.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enablePlugin(pluginId: string, version: string, options?: any): AxiosPromise<void> {
            return localVarFp.enablePlugin(pluginId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets plugin configuration.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginConfiguration(pluginId: string, options?: any): AxiosPromise<object> {
            return localVarFp.getPluginConfiguration(pluginId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a plugin\'s image.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginImage(pluginId: string, version: string, options?: any): AxiosPromise<any> {
            return localVarFp.getPluginImage(pluginId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a plugin\'s manifest.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPluginManifest(pluginId: string, options?: any): AxiosPromise<void> {
            return localVarFp.getPluginManifest(pluginId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a list of currently installed plugins.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlugins(options?: any): AxiosPromise<Array<PluginInfo>> {
            return localVarFp.getPlugins(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Uninstalls a plugin.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        uninstallPlugin(pluginId: string, options?: any): AxiosPromise<void> {
            return localVarFp.uninstallPlugin(pluginId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Uninstalls a plugin by version.
         * @param {string} pluginId Plugin id.
         * @param {string} version Plugin version.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uninstallPluginByVersion(pluginId: string, version: string, options?: any): AxiosPromise<void> {
            return localVarFp.uninstallPluginByVersion(pluginId, version, options).then((request) => request(axios, basePath));
        },
        /**
         * Accepts plugin configuration as JSON body.
         * @summary Updates plugin configuration.
         * @param {string} pluginId Plugin id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePluginConfiguration(pluginId: string, options?: any): AxiosPromise<void> {
            return localVarFp.updatePluginConfiguration(pluginId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for disablePlugin operation in PluginsApi.
 * @export
 * @interface PluginsApiDisablePluginRequest
 */
export interface PluginsApiDisablePluginRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiDisablePlugin
     */
    readonly pluginId: string

    /**
     * Plugin version.
     * @type {string}
     * @memberof PluginsApiDisablePlugin
     */
    readonly version: string
}

/**
 * Request parameters for enablePlugin operation in PluginsApi.
 * @export
 * @interface PluginsApiEnablePluginRequest
 */
export interface PluginsApiEnablePluginRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiEnablePlugin
     */
    readonly pluginId: string

    /**
     * Plugin version.
     * @type {string}
     * @memberof PluginsApiEnablePlugin
     */
    readonly version: string
}

/**
 * Request parameters for getPluginConfiguration operation in PluginsApi.
 * @export
 * @interface PluginsApiGetPluginConfigurationRequest
 */
export interface PluginsApiGetPluginConfigurationRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiGetPluginConfiguration
     */
    readonly pluginId: string
}

/**
 * Request parameters for getPluginImage operation in PluginsApi.
 * @export
 * @interface PluginsApiGetPluginImageRequest
 */
export interface PluginsApiGetPluginImageRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiGetPluginImage
     */
    readonly pluginId: string

    /**
     * Plugin version.
     * @type {string}
     * @memberof PluginsApiGetPluginImage
     */
    readonly version: string
}

/**
 * Request parameters for getPluginManifest operation in PluginsApi.
 * @export
 * @interface PluginsApiGetPluginManifestRequest
 */
export interface PluginsApiGetPluginManifestRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiGetPluginManifest
     */
    readonly pluginId: string
}

/**
 * Request parameters for uninstallPlugin operation in PluginsApi.
 * @export
 * @interface PluginsApiUninstallPluginRequest
 */
export interface PluginsApiUninstallPluginRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiUninstallPlugin
     */
    readonly pluginId: string
}

/**
 * Request parameters for uninstallPluginByVersion operation in PluginsApi.
 * @export
 * @interface PluginsApiUninstallPluginByVersionRequest
 */
export interface PluginsApiUninstallPluginByVersionRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiUninstallPluginByVersion
     */
    readonly pluginId: string

    /**
     * Plugin version.
     * @type {string}
     * @memberof PluginsApiUninstallPluginByVersion
     */
    readonly version: string
}

/**
 * Request parameters for updatePluginConfiguration operation in PluginsApi.
 * @export
 * @interface PluginsApiUpdatePluginConfigurationRequest
 */
export interface PluginsApiUpdatePluginConfigurationRequest {
    /**
     * Plugin id.
     * @type {string}
     * @memberof PluginsApiUpdatePluginConfiguration
     */
    readonly pluginId: string
}

/**
 * PluginsApi - object-oriented interface
 * @export
 * @class PluginsApi
 * @extends {BaseAPI}
 */
export class PluginsApi extends BaseAPI {
    /**
     * 
     * @summary Disable a plugin.
     * @param {PluginsApiDisablePluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public disablePlugin(requestParameters: PluginsApiDisablePluginRequest, options?: any) {
        return PluginsApiFp(this.configuration).disablePlugin(requestParameters.pluginId, requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Enables a disabled plugin.
     * @param {PluginsApiEnablePluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public enablePlugin(requestParameters: PluginsApiEnablePluginRequest, options?: any) {
        return PluginsApiFp(this.configuration).enablePlugin(requestParameters.pluginId, requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets plugin configuration.
     * @param {PluginsApiGetPluginConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public getPluginConfiguration(requestParameters: PluginsApiGetPluginConfigurationRequest, options?: any) {
        return PluginsApiFp(this.configuration).getPluginConfiguration(requestParameters.pluginId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a plugin\'s image.
     * @param {PluginsApiGetPluginImageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public getPluginImage(requestParameters: PluginsApiGetPluginImageRequest, options?: any) {
        return PluginsApiFp(this.configuration).getPluginImage(requestParameters.pluginId, requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a plugin\'s manifest.
     * @param {PluginsApiGetPluginManifestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public getPluginManifest(requestParameters: PluginsApiGetPluginManifestRequest, options?: any) {
        return PluginsApiFp(this.configuration).getPluginManifest(requestParameters.pluginId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a list of currently installed plugins.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public getPlugins(options?: any) {
        return PluginsApiFp(this.configuration).getPlugins(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Uninstalls a plugin.
     * @param {PluginsApiUninstallPluginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public uninstallPlugin(requestParameters: PluginsApiUninstallPluginRequest, options?: any) {
        return PluginsApiFp(this.configuration).uninstallPlugin(requestParameters.pluginId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Uninstalls a plugin by version.
     * @param {PluginsApiUninstallPluginByVersionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public uninstallPluginByVersion(requestParameters: PluginsApiUninstallPluginByVersionRequest, options?: any) {
        return PluginsApiFp(this.configuration).uninstallPluginByVersion(requestParameters.pluginId, requestParameters.version, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Accepts plugin configuration as JSON body.
     * @summary Updates plugin configuration.
     * @param {PluginsApiUpdatePluginConfigurationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluginsApi
     */
    public updatePluginConfiguration(requestParameters: PluginsApiUpdatePluginConfigurationRequest, options?: any) {
        return PluginsApiFp(this.configuration).updatePluginConfiguration(requestParameters.pluginId, options).then((request) => request(this.axios, this.basePath));
    }
}
