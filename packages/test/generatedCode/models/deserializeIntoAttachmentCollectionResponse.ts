import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {Attachment, AttachmentCollectionResponse} from './index';
import {AdditionalDataHolder, DeserializeMethod, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttachmentCollectionResponse(attachmentCollectionResponse: AttachmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { attachmentCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { attachmentCollectionResponse.value = n.getCollectionOfObjectValues<Attachment>(deserializeIntoAttachment); },
    }
}
