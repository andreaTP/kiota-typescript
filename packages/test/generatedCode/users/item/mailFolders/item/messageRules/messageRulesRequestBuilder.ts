import {MessageRuleCollectionResponse} from '../../../../../models/';
import {createMessageRuleCollectionResponseFromDiscriminatorValue} from '../../../../../models/createMessageRuleCollectionResponseFromDiscriminatorValue';
import {createMessageRuleFromDiscriminatorValue} from '../../../../../models/createMessageRuleFromDiscriminatorValue';
import {deserializeIntoMessageRule} from '../../../../../models/deserializeIntoMessageRule';
import {MessageRule} from '../../../../../models/messageRule';
import {serializeMessageRule} from '../../../../../models/serializeMessageRule';
import {MessageRuleItemRequestBuilder} from './item/messageRuleItemRequestBuilder';
import {MessageRulesRequestBuilderGetRequestConfiguration} from './messageRulesRequestBuilderGetRequestConfiguration';
import {MessageRulesRequestBuilderPostRequestConfiguration} from './messageRulesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messageRules
 */
export class MessageRulesRequestBuilder extends BaseRequestBuilder {
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.mailFolders.item.messageRules.item collection
     * @param messageRuleId Unique identifier of the item
     * @returns a MessageRuleItemRequestBuilder
     */
    public byMessageRuleId(messageRuleId: string) : MessageRuleItemRequestBuilder {
        if(!messageRuleId) throw new Error("messageRuleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["messageRule%2Did"] = messageRuleId
        return new MessageRuleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MessageRulesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/messageRules{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get all the messageRule objects defined for the user's inbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MessageRuleCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/mailfolder-list-messagerules?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MessageRulesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MessageRuleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MessageRuleCollectionResponse>(requestInfo, createMessageRuleCollectionResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a messageRule object by specifying a set of conditions and actions.  Outlook carries out those actions if an incoming message in the user's Inbox meets the specified conditions.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MessageRule
     * @see {@link https://docs.microsoft.com/graph/api/mailfolder-post-messagerules?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MessageRule | undefined, requestConfiguration?: MessageRulesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MessageRule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MessageRule>(requestInfo, createMessageRuleFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get all the messageRule objects defined for the user's inbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MessageRulesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a messageRule object by specifying a set of conditions and actions.  Outlook carries out those actions if an incoming message in the user's Inbox meets the specified conditions.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MessageRule | undefined, requestConfiguration?: MessageRulesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMessageRule);
        return requestInfo;
    };
}
