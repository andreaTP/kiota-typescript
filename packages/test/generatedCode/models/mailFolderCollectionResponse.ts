import {MailFolder} from './mailFolder';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MailFolderCollectionResponse extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataNextLink property */
    odataNextLink?: string | undefined;
    /** The value property */
    value?: MailFolder[] | undefined;
}
