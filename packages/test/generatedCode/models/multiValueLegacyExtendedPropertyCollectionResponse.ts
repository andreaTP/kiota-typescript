import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MultiValueLegacyExtendedPropertyCollectionResponse extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataNextLink property */
    odataNextLink?: string | undefined;
    /** The value property */
    value?: MultiValueLegacyExtendedProperty[] | undefined;
}
