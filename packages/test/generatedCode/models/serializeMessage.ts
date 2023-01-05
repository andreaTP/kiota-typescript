import {Importance} from './importance';
import {Attachment, Extension, FollowupFlag, InternetMessageHeader, ItemBody, Message, MultiValueLegacyExtendedProperty, Recipient, SingleValueLegacyExtendedProperty} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {serializeAttachment} from './serializeAttachment';
import {serializeExtension} from './serializeExtension';
import {serializeFollowupFlag} from './serializeFollowupFlag';
import {serializeInternetMessageHeader} from './serializeInternetMessageHeader';
import {serializeItemBody} from './serializeItemBody';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeOutlookItem} from './serializeOutlookItem';
import {serializeRecipient} from './serializeRecipient';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {DeserializeMethod, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessage(writer: SerializationWriter, message: Message | undefined = {}) : void {
        serializeOutlookItem(writer, message)
            writer.writeCollectionOfObjectValues<Attachment>("attachments", message.attachments, serializeAttachment);
            writer.writeCollectionOfObjectValues<Recipient>("bccRecipients", message.bccRecipients, serializeRecipient);
            writer.writeObjectValue<ItemBody>("body", message.body, serializeItemBody);
            writer.writeStringValue("bodyPreview", message.bodyPreview);
            writer.writeCollectionOfObjectValues<Recipient>("ccRecipients", message.ccRecipients, serializeRecipient);
            writer.writeStringValue("conversationId", message.conversationId);
            writer.writeStringValue("conversationIndex", message.conversationIndex);
            writer.writeCollectionOfObjectValues<Extension>("extensions", message.extensions, serializeExtension);
            writer.writeObjectValue<FollowupFlag>("flag", message.flag, serializeFollowupFlag);
            writer.writeObjectValue<Recipient>("from", message.from, serializeRecipient);
            writer.writeBooleanValue("hasAttachments", message.hasAttachments);
            writer.writeEnumValue<Importance>("importance", message.importance);
            writer.writeEnumValue<InferenceClassificationType>("inferenceClassification", message.inferenceClassification);
            writer.writeCollectionOfObjectValues<InternetMessageHeader>("internetMessageHeaders", message.internetMessageHeaders, serializeInternetMessageHeader);
            writer.writeStringValue("internetMessageId", message.internetMessageId);
            writer.writeBooleanValue("isDeliveryReceiptRequested", message.isDeliveryReceiptRequested);
            writer.writeBooleanValue("isDraft", message.isDraft);
            writer.writeBooleanValue("isRead", message.isRead);
            writer.writeBooleanValue("isReadReceiptRequested", message.isReadReceiptRequested);
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", message.multiValueExtendedProperties, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("parentFolderId", message.parentFolderId);
            writer.writeDateValue("receivedDateTime", message.receivedDateTime);
            writer.writeCollectionOfObjectValues<Recipient>("replyTo", message.replyTo, serializeRecipient);
            writer.writeObjectValue<Recipient>("sender", message.sender, serializeRecipient);
            writer.writeDateValue("sentDateTime", message.sentDateTime);
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", message.singleValueExtendedProperties, serializeSingleValueLegacyExtendedProperty);
            writer.writeStringValue("subject", message.subject);
            writer.writeCollectionOfObjectValues<Recipient>("toRecipients", message.toRecipients, serializeRecipient);
            writer.writeObjectValue<ItemBody>("uniqueBody", message.uniqueBody, serializeItemBody);
            writer.writeStringValue("webLink", message.webLink);
}
