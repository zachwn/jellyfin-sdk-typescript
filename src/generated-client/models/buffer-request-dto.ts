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



/**
 * Class BufferRequestDto.
 * @export
 * @interface BufferRequestDto
 */
export interface BufferRequestDto {
    /**
     * Gets or sets when the request has been made by the client.
     * @type {string}
     * @memberof BufferRequestDto
     */
    When?: string;
    /**
     * Gets or sets the position ticks.
     * @type {number}
     * @memberof BufferRequestDto
     */
    PositionTicks?: number;
    /**
     * Gets or sets a value indicating whether the client playback is unpaused.
     * @type {boolean}
     * @memberof BufferRequestDto
     */
    IsPlaying?: boolean;
    /**
     * Gets or sets the playlist item identifier of the playing item.
     * @type {string}
     * @memberof BufferRequestDto
     */
    PlaylistItemId?: string;
}


