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


import { DeviceInfo } from './device-info';

/**
 * 
 * @export
 * @interface DeviceInfoQueryResult
 */
export interface DeviceInfoQueryResult {
    /**
     * Gets or sets the items.
     * @type {Array<DeviceInfo>}
     * @memberof DeviceInfoQueryResult
     */
    Items?: Array<DeviceInfo> | null;
    /**
     * Gets or sets the total number of records available.
     * @type {number}
     * @memberof DeviceInfoQueryResult
     */
    TotalRecordCount?: number;
    /**
     * Gets or sets the index of the first record in Items.
     * @type {number}
     * @memberof DeviceInfoQueryResult
     */
    StartIndex?: number;
}


