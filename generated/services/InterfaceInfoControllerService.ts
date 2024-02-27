/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_InterfaceInfo_ } from '../models/BaseResponse_InterfaceInfo_';
import type { BaseResponse_List_InterfaceInfo_ } from '../models/BaseResponse_List_InterfaceInfo_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_object_ } from '../models/BaseResponse_object_';
import type { BaseResponse_Page_InterfaceInfo_ } from '../models/BaseResponse_Page_InterfaceInfo_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { IdRequest } from '../models/IdRequest';
import type { InterfaceInfoAddRequest } from '../models/InterfaceInfoAddRequest';
import type { InterfaceInfoUpdateAvatarRequest } from '../models/InterfaceInfoUpdateAvatarRequest';
import type { InterfaceInfoUpdateRequest } from '../models/InterfaceInfoUpdateRequest';
import type { InvokeRequest } from '../models/InvokeRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InterfaceInfoControllerService {

    /**
     * addInterfaceInfo
     * @param interfaceInfoAddRequest interfaceInfoAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addInterfaceInfoUsingPost(
interfaceInfoAddRequest: InterfaceInfoAddRequest,
): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/add',
            body: interfaceInfoAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteInterfaceInfo
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteInterfaceInfoUsingPost(
deleteRequest: DeleteRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getInterfaceInfoById
     * @param id id
     * @returns BaseResponse_InterfaceInfo_ OK
     * @throws ApiError
     */
    public static getInterfaceInfoByIdUsingGet(
id?: number,
): CancelablePromise<BaseResponse_InterfaceInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/interfaceInfo/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listInterfaceInfoBySearchTextPage
     * @param current 
     * @param pageSize 
     * @param searchText 
     * @param sortField 
     * @param sortOrder 
     * @returns BaseResponse_Page_InterfaceInfo_ OK
     * @throws ApiError
     */
    public static listInterfaceInfoBySearchTextPageUsingGet(
current?: number,
pageSize?: number,
searchText?: string,
sortField?: string,
sortOrder?: string,
): CancelablePromise<BaseResponse_Page_InterfaceInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/interfaceInfo/get/searchText',
            query: {
                'current': current,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * invokeInterface
     * @param invokeRequest invokeRequest
     * @returns BaseResponse_object_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static invokeInterfaceUsingPost(
invokeRequest: InvokeRequest,
): CancelablePromise<BaseResponse_object_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/invoke',
            body: invokeRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listInterfaceInfo
     * @param current 
     * @param description 
     * @param method 
     * @param name 
     * @param pageSize 
     * @param reduceScore 
     * @param responseParams0Desc 
     * @param responseParams0FieldName 
     * @param responseParams0Id 
     * @param responseParams0Type 
     * @param returnFormat 
     * @param sortField 
     * @param sortOrder 
     * @param status 
     * @param url 
     * @param userId 
     * @returns BaseResponse_List_InterfaceInfo_ OK
     * @throws ApiError
     */
    public static listInterfaceInfoUsingGet(
current?: number,
description?: string,
method?: string,
name?: string,
pageSize?: number,
reduceScore?: number,
responseParams0Desc?: string,
responseParams0FieldName?: string,
responseParams0Id?: string,
responseParams0Type?: string,
returnFormat?: string,
sortField?: string,
sortOrder?: string,
status?: number,
url?: string,
userId?: number,
): CancelablePromise<BaseResponse_List_InterfaceInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/interfaceInfo/list',
            query: {
                'current': current,
                'description': description,
                'method': method,
                'name': name,
                'pageSize': pageSize,
                'reduceScore': reduceScore,
                'responseParams[0].desc': responseParams0Desc,
                'responseParams[0].fieldName': responseParams0FieldName,
                'responseParams[0].id': responseParams0Id,
                'responseParams[0].type': responseParams0Type,
                'returnFormat': returnFormat,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'url': url,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listInterfaceInfoByPage
     * @param current 
     * @param description 
     * @param method 
     * @param name 
     * @param pageSize 
     * @param reduceScore 
     * @param responseParams0Desc 
     * @param responseParams0FieldName 
     * @param responseParams0Id 
     * @param responseParams0Type 
     * @param returnFormat 
     * @param sortField 
     * @param sortOrder 
     * @param status 
     * @param url 
     * @param userId 
     * @returns BaseResponse_Page_InterfaceInfo_ OK
     * @throws ApiError
     */
    public static listInterfaceInfoByPageUsingGet(
current?: number,
description?: string,
method?: string,
name?: string,
pageSize?: number,
reduceScore?: number,
responseParams0Desc?: string,
responseParams0FieldName?: string,
responseParams0Id?: string,
responseParams0Type?: string,
returnFormat?: string,
sortField?: string,
sortOrder?: string,
status?: number,
url?: string,
userId?: number,
): CancelablePromise<BaseResponse_Page_InterfaceInfo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/interfaceInfo/list/page',
            query: {
                'current': current,
                'description': description,
                'method': method,
                'name': name,
                'pageSize': pageSize,
                'reduceScore': reduceScore,
                'responseParams[0].desc': responseParams0Desc,
                'responseParams[0].fieldName': responseParams0FieldName,
                'responseParams[0].id': responseParams0Id,
                'responseParams[0].type': responseParams0Type,
                'returnFormat': returnFormat,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'url': url,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * offlineInterfaceInfo
     * @param idRequest idRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static offlineInterfaceInfoUsingPost(
idRequest: IdRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/offline',
            body: idRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * onlineInterfaceInfo
     * @param idRequest idRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static onlineInterfaceInfoUsingPost(
idRequest: IdRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/online',
            body: idRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateInterfaceInfo
     * @param interfaceInfoUpdateRequest interfaceInfoUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateInterfaceInfoUsingPost(
interfaceInfoUpdateRequest: InterfaceInfoUpdateRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/update',
            body: interfaceInfoUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateInterfaceInfoAvatarUrl
     * @param interfaceInfoUpdateAvatarRequest interfaceInfoUpdateAvatarRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateInterfaceInfoAvatarUrlUsingPost(
interfaceInfoUpdateAvatarRequest: InterfaceInfoUpdateAvatarRequest,
): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/interfaceInfo/updateInterfaceInfoAvatar',
            body: interfaceInfoUpdateAvatarRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
