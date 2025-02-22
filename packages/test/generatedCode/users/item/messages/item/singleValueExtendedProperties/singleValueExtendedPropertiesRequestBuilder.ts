import {SingleValueLegacyExtendedPropertyCollectionResponse} from '../../../../../models/';
import {createSingleValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue} from '../../../../../models/createSingleValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from '../../../../../models/createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {deserializeIntoSingleValueLegacyExtendedProperty} from '../../../../../models/deserializeIntoSingleValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from '../../../../../models/serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from '../../../../../models/singleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedPropertyItemRequestBuilder} from './item/singleValueLegacyExtendedPropertyItemRequestBuilder';
import {SingleValueExtendedPropertiesRequestBuilderGetRequestConfiguration} from './singleValueExtendedPropertiesRequestBuilderGetRequestConfiguration';
import {SingleValueExtendedPropertiesRequestBuilderPostRequestConfiguration} from './singleValueExtendedPropertiesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/messages/{message-id}/singleValueExtendedProperties
 */
export class SingleValueExtendedPropertiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.messages.item.singleValueExtendedProperties.item collection
     * @param singleValueLegacyExtendedPropertyId Unique identifier of the item
     * @returns a SingleValueLegacyExtendedPropertyItemRequestBuilder
     */
    public bySingleValueLegacyExtendedPropertyId(singleValueLegacyExtendedPropertyId: string) : SingleValueLegacyExtendedPropertyItemRequestBuilder {
        if(!singleValueLegacyExtendedPropertyId) throw new Error("singleValueLegacyExtendedPropertyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["singleValueLegacyExtendedProperty%2Did"] = singleValueLegacyExtendedPropertyId
        return new SingleValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SingleValueExtendedPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/messages/{message%2Did}/singleValueExtendedProperties{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of single-value extended properties defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SingleValueLegacyExtendedPropertyCollectionResponse
     */
    public get(requestConfiguration?: SingleValueExtendedPropertiesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SingleValueLegacyExtendedPropertyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SingleValueLegacyExtendedPropertyCollectionResponse>(requestInfo, createSingleValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to singleValueExtendedProperties for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SingleValueLegacyExtendedProperty
     */
    public post(body: SingleValueLegacyExtendedProperty | undefined, requestConfiguration?: SingleValueExtendedPropertiesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SingleValueLegacyExtendedProperty | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<SingleValueLegacyExtendedProperty>(requestInfo, createSingleValueLegacyExtendedPropertyFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of single-value extended properties defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SingleValueExtendedPropertiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create new navigation property to singleValueExtendedProperties for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SingleValueLegacyExtendedProperty | undefined, requestConfiguration?: SingleValueExtendedPropertiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSingleValueLegacyExtendedProperty);
        return requestInfo;
    };
}
