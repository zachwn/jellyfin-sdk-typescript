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


import { SearchHint } from './search-hint';

/**
 * Class SearchHintResult.
 * @export
 * @interface SearchHintResult
 */
export interface SearchHintResult {
    /**
     * Gets the search hints.
     * @type {Array<SearchHint>}
     * @memberof SearchHintResult
     */
    SearchHints?: Array<SearchHint>;
    /**
     * Gets the total record count.
     * @type {number}
     * @memberof SearchHintResult
     */
    TotalRecordCount?: number;
}


