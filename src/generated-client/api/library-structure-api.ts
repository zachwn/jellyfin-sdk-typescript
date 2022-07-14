/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AddVirtualFolderDto } from '../models';
// @ts-ignore
import { CollectionTypeOptions } from '../models';
// @ts-ignore
import { MediaPathDto } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
// @ts-ignore
import { UpdateLibraryOptionsDto } from '../models';
// @ts-ignore
import { UpdateMediaPathRequestDto } from '../models';
// @ts-ignore
import { VirtualFolderInfo } from '../models';
/**
 * LibraryStructureApi - axios parameter creator
 * @export
 */
export const LibraryStructureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a media path to a library.
         * @param {MediaPathDto} mediaPathDto The media path dto.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMediaPath: async (mediaPathDto: MediaPathDto, refreshLibrary?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'mediaPathDto' is not null or undefined
            assertParamExists('addMediaPath', 'mediaPathDto', mediaPathDto)
            const localVarPath = `/Library/VirtualFolders/Paths`;
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

            if (refreshLibrary !== undefined) {
                localVarQueryParameter['refreshLibrary'] = refreshLibrary;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(mediaPathDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Adds a virtual folder.
         * @param {string} [name] The name of the virtual folder.
         * @param {CollectionTypeOptions} [collectionType] The type of the collection.
         * @param {Array<string>} [paths] The paths of the virtual folder.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {AddVirtualFolderDto} [addVirtualFolderDto] The library options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addVirtualFolder: async (name?: string, collectionType?: CollectionTypeOptions, paths?: Array<string>, refreshLibrary?: boolean, addVirtualFolderDto?: AddVirtualFolderDto, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Library/VirtualFolders`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (collectionType !== undefined) {
                localVarQueryParameter['collectionType'] = collectionType;
            }

            if (paths) {
                localVarQueryParameter['paths'] = paths;
            }

            if (refreshLibrary !== undefined) {
                localVarQueryParameter['refreshLibrary'] = refreshLibrary;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addVirtualFolderDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets all virtual folders.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVirtualFolders: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Library/VirtualFolders`;
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
         * @summary Remove a media path.
         * @param {string} [name] The name of the library.
         * @param {string} [path] The path to remove.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeMediaPath: async (name?: string, path?: string, refreshLibrary?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Library/VirtualFolders/Paths`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            if (refreshLibrary !== undefined) {
                localVarQueryParameter['refreshLibrary'] = refreshLibrary;
            }


    
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
         * @summary Removes a virtual folder.
         * @param {string} [name] The name of the folder.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeVirtualFolder: async (name?: string, refreshLibrary?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Library/VirtualFolders`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (refreshLibrary !== undefined) {
                localVarQueryParameter['refreshLibrary'] = refreshLibrary;
            }


    
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
         * @summary Renames a virtual folder.
         * @param {string} [name] The name of the virtual folder.
         * @param {string} [newName] The new name.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renameVirtualFolder: async (name?: string, newName?: string, refreshLibrary?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Library/VirtualFolders/Name`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (newName !== undefined) {
                localVarQueryParameter['newName'] = newName;
            }

            if (refreshLibrary !== undefined) {
                localVarQueryParameter['refreshLibrary'] = refreshLibrary;
            }


    
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
         * @summary Update library options.
         * @param {UpdateLibraryOptionsDto} [updateLibraryOptionsDto] The library name and options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLibraryOptions: async (updateLibraryOptionsDto?: UpdateLibraryOptionsDto, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Library/VirtualFolders/LibraryOptions`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateLibraryOptionsDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates a media path.
         * @param {UpdateMediaPathRequestDto} updateMediaPathRequestDto The name of the library and path infos.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMediaPath: async (updateMediaPathRequestDto: UpdateMediaPathRequestDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateMediaPathRequestDto' is not null or undefined
            assertParamExists('updateMediaPath', 'updateMediaPathRequestDto', updateMediaPathRequestDto)
            const localVarPath = `/Library/VirtualFolders/Paths/Update`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateMediaPathRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LibraryStructureApi - functional programming interface
 * @export
 */
export const LibraryStructureApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LibraryStructureApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add a media path to a library.
         * @param {MediaPathDto} mediaPathDto The media path dto.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addMediaPath(mediaPathDto: MediaPathDto, refreshLibrary?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addMediaPath(mediaPathDto, refreshLibrary, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Adds a virtual folder.
         * @param {string} [name] The name of the virtual folder.
         * @param {CollectionTypeOptions} [collectionType] The type of the collection.
         * @param {Array<string>} [paths] The paths of the virtual folder.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {AddVirtualFolderDto} [addVirtualFolderDto] The library options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addVirtualFolder(name?: string, collectionType?: CollectionTypeOptions, paths?: Array<string>, refreshLibrary?: boolean, addVirtualFolderDto?: AddVirtualFolderDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addVirtualFolder(name, collectionType, paths, refreshLibrary, addVirtualFolderDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all virtual folders.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVirtualFolders(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<VirtualFolderInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVirtualFolders(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Remove a media path.
         * @param {string} [name] The name of the library.
         * @param {string} [path] The path to remove.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeMediaPath(name?: string, path?: string, refreshLibrary?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeMediaPath(name, path, refreshLibrary, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Removes a virtual folder.
         * @param {string} [name] The name of the folder.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeVirtualFolder(name?: string, refreshLibrary?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeVirtualFolder(name, refreshLibrary, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Renames a virtual folder.
         * @param {string} [name] The name of the virtual folder.
         * @param {string} [newName] The new name.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renameVirtualFolder(name?: string, newName?: string, refreshLibrary?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renameVirtualFolder(name, newName, refreshLibrary, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update library options.
         * @param {UpdateLibraryOptionsDto} [updateLibraryOptionsDto] The library name and options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLibraryOptions(updateLibraryOptionsDto?: UpdateLibraryOptionsDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLibraryOptions(updateLibraryOptionsDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates a media path.
         * @param {UpdateMediaPathRequestDto} updateMediaPathRequestDto The name of the library and path infos.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMediaPath(updateMediaPathRequestDto: UpdateMediaPathRequestDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMediaPath(updateMediaPathRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LibraryStructureApi - factory interface
 * @export
 */
export const LibraryStructureApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LibraryStructureApiFp(configuration)
    return {
        /**
         * 
         * @summary Add a media path to a library.
         * @param {MediaPathDto} mediaPathDto The media path dto.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMediaPath(mediaPathDto: MediaPathDto, refreshLibrary?: boolean, options?: any): AxiosPromise<void> {
            return localVarFp.addMediaPath(mediaPathDto, refreshLibrary, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Adds a virtual folder.
         * @param {string} [name] The name of the virtual folder.
         * @param {CollectionTypeOptions} [collectionType] The type of the collection.
         * @param {Array<string>} [paths] The paths of the virtual folder.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {AddVirtualFolderDto} [addVirtualFolderDto] The library options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addVirtualFolder(name?: string, collectionType?: CollectionTypeOptions, paths?: Array<string>, refreshLibrary?: boolean, addVirtualFolderDto?: AddVirtualFolderDto, options?: any): AxiosPromise<void> {
            return localVarFp.addVirtualFolder(name, collectionType, paths, refreshLibrary, addVirtualFolderDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all virtual folders.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVirtualFolders(options?: any): AxiosPromise<Array<VirtualFolderInfo>> {
            return localVarFp.getVirtualFolders(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove a media path.
         * @param {string} [name] The name of the library.
         * @param {string} [path] The path to remove.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeMediaPath(name?: string, path?: string, refreshLibrary?: boolean, options?: any): AxiosPromise<void> {
            return localVarFp.removeMediaPath(name, path, refreshLibrary, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Removes a virtual folder.
         * @param {string} [name] The name of the folder.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeVirtualFolder(name?: string, refreshLibrary?: boolean, options?: any): AxiosPromise<void> {
            return localVarFp.removeVirtualFolder(name, refreshLibrary, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Renames a virtual folder.
         * @param {string} [name] The name of the virtual folder.
         * @param {string} [newName] The new name.
         * @param {boolean} [refreshLibrary] Whether to refresh the library.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renameVirtualFolder(name?: string, newName?: string, refreshLibrary?: boolean, options?: any): AxiosPromise<void> {
            return localVarFp.renameVirtualFolder(name, newName, refreshLibrary, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update library options.
         * @param {UpdateLibraryOptionsDto} [updateLibraryOptionsDto] The library name and options.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLibraryOptions(updateLibraryOptionsDto?: UpdateLibraryOptionsDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateLibraryOptions(updateLibraryOptionsDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates a media path.
         * @param {UpdateMediaPathRequestDto} updateMediaPathRequestDto The name of the library and path infos.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMediaPath(updateMediaPathRequestDto: UpdateMediaPathRequestDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateMediaPath(updateMediaPathRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addMediaPath operation in LibraryStructureApi.
 * @export
 * @interface LibraryStructureApiAddMediaPathRequest
 */
export interface LibraryStructureApiAddMediaPathRequest {
    /**
     * The media path dto.
     * @type {MediaPathDto}
     * @memberof LibraryStructureApiAddMediaPath
     */
    readonly mediaPathDto: MediaPathDto

    /**
     * Whether to refresh the library.
     * @type {boolean}
     * @memberof LibraryStructureApiAddMediaPath
     */
    readonly refreshLibrary?: boolean
}

/**
 * Request parameters for addVirtualFolder operation in LibraryStructureApi.
 * @export
 * @interface LibraryStructureApiAddVirtualFolderRequest
 */
export interface LibraryStructureApiAddVirtualFolderRequest {
    /**
     * The name of the virtual folder.
     * @type {string}
     * @memberof LibraryStructureApiAddVirtualFolder
     */
    readonly name?: string

    /**
     * The type of the collection.
     * @type {CollectionTypeOptions}
     * @memberof LibraryStructureApiAddVirtualFolder
     */
    readonly collectionType?: CollectionTypeOptions

    /**
     * The paths of the virtual folder.
     * @type {Array<string>}
     * @memberof LibraryStructureApiAddVirtualFolder
     */
    readonly paths?: Array<string>

    /**
     * Whether to refresh the library.
     * @type {boolean}
     * @memberof LibraryStructureApiAddVirtualFolder
     */
    readonly refreshLibrary?: boolean

    /**
     * The library options.
     * @type {AddVirtualFolderDto}
     * @memberof LibraryStructureApiAddVirtualFolder
     */
    readonly addVirtualFolderDto?: AddVirtualFolderDto
}

/**
 * Request parameters for removeMediaPath operation in LibraryStructureApi.
 * @export
 * @interface LibraryStructureApiRemoveMediaPathRequest
 */
export interface LibraryStructureApiRemoveMediaPathRequest {
    /**
     * The name of the library.
     * @type {string}
     * @memberof LibraryStructureApiRemoveMediaPath
     */
    readonly name?: string

    /**
     * The path to remove.
     * @type {string}
     * @memberof LibraryStructureApiRemoveMediaPath
     */
    readonly path?: string

    /**
     * Whether to refresh the library.
     * @type {boolean}
     * @memberof LibraryStructureApiRemoveMediaPath
     */
    readonly refreshLibrary?: boolean
}

/**
 * Request parameters for removeVirtualFolder operation in LibraryStructureApi.
 * @export
 * @interface LibraryStructureApiRemoveVirtualFolderRequest
 */
export interface LibraryStructureApiRemoveVirtualFolderRequest {
    /**
     * The name of the folder.
     * @type {string}
     * @memberof LibraryStructureApiRemoveVirtualFolder
     */
    readonly name?: string

    /**
     * Whether to refresh the library.
     * @type {boolean}
     * @memberof LibraryStructureApiRemoveVirtualFolder
     */
    readonly refreshLibrary?: boolean
}

/**
 * Request parameters for renameVirtualFolder operation in LibraryStructureApi.
 * @export
 * @interface LibraryStructureApiRenameVirtualFolderRequest
 */
export interface LibraryStructureApiRenameVirtualFolderRequest {
    /**
     * The name of the virtual folder.
     * @type {string}
     * @memberof LibraryStructureApiRenameVirtualFolder
     */
    readonly name?: string

    /**
     * The new name.
     * @type {string}
     * @memberof LibraryStructureApiRenameVirtualFolder
     */
    readonly newName?: string

    /**
     * Whether to refresh the library.
     * @type {boolean}
     * @memberof LibraryStructureApiRenameVirtualFolder
     */
    readonly refreshLibrary?: boolean
}

/**
 * Request parameters for updateLibraryOptions operation in LibraryStructureApi.
 * @export
 * @interface LibraryStructureApiUpdateLibraryOptionsRequest
 */
export interface LibraryStructureApiUpdateLibraryOptionsRequest {
    /**
     * The library name and options.
     * @type {UpdateLibraryOptionsDto}
     * @memberof LibraryStructureApiUpdateLibraryOptions
     */
    readonly updateLibraryOptionsDto?: UpdateLibraryOptionsDto
}

/**
 * Request parameters for updateMediaPath operation in LibraryStructureApi.
 * @export
 * @interface LibraryStructureApiUpdateMediaPathRequest
 */
export interface LibraryStructureApiUpdateMediaPathRequest {
    /**
     * The name of the library and path infos.
     * @type {UpdateMediaPathRequestDto}
     * @memberof LibraryStructureApiUpdateMediaPath
     */
    readonly updateMediaPathRequestDto: UpdateMediaPathRequestDto
}

/**
 * LibraryStructureApi - object-oriented interface
 * @export
 * @class LibraryStructureApi
 * @extends {BaseAPI}
 */
export class LibraryStructureApi extends BaseAPI {
    /**
     * 
     * @summary Add a media path to a library.
     * @param {LibraryStructureApiAddMediaPathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public addMediaPath(requestParameters: LibraryStructureApiAddMediaPathRequest, options?: any) {
        return LibraryStructureApiFp(this.configuration).addMediaPath(requestParameters.mediaPathDto, requestParameters.refreshLibrary, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Adds a virtual folder.
     * @param {LibraryStructureApiAddVirtualFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public addVirtualFolder(requestParameters: LibraryStructureApiAddVirtualFolderRequest = {}, options?: any) {
        return LibraryStructureApiFp(this.configuration).addVirtualFolder(requestParameters.name, requestParameters.collectionType, requestParameters.paths, requestParameters.refreshLibrary, requestParameters.addVirtualFolderDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all virtual folders.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public getVirtualFolders(options?: any) {
        return LibraryStructureApiFp(this.configuration).getVirtualFolders(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove a media path.
     * @param {LibraryStructureApiRemoveMediaPathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public removeMediaPath(requestParameters: LibraryStructureApiRemoveMediaPathRequest = {}, options?: any) {
        return LibraryStructureApiFp(this.configuration).removeMediaPath(requestParameters.name, requestParameters.path, requestParameters.refreshLibrary, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Removes a virtual folder.
     * @param {LibraryStructureApiRemoveVirtualFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public removeVirtualFolder(requestParameters: LibraryStructureApiRemoveVirtualFolderRequest = {}, options?: any) {
        return LibraryStructureApiFp(this.configuration).removeVirtualFolder(requestParameters.name, requestParameters.refreshLibrary, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Renames a virtual folder.
     * @param {LibraryStructureApiRenameVirtualFolderRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public renameVirtualFolder(requestParameters: LibraryStructureApiRenameVirtualFolderRequest = {}, options?: any) {
        return LibraryStructureApiFp(this.configuration).renameVirtualFolder(requestParameters.name, requestParameters.newName, requestParameters.refreshLibrary, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update library options.
     * @param {LibraryStructureApiUpdateLibraryOptionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public updateLibraryOptions(requestParameters: LibraryStructureApiUpdateLibraryOptionsRequest = {}, options?: any) {
        return LibraryStructureApiFp(this.configuration).updateLibraryOptions(requestParameters.updateLibraryOptionsDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates a media path.
     * @param {LibraryStructureApiUpdateMediaPathRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LibraryStructureApi
     */
    public updateMediaPath(requestParameters: LibraryStructureApiUpdateMediaPathRequest, options?: any) {
        return LibraryStructureApiFp(this.configuration).updateMediaPath(requestParameters.updateMediaPathRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}
