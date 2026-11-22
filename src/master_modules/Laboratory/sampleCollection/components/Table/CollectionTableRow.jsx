import PatientDetailsCell
    from "./PatientDetailsCell";

import SampleTypeChip
    from "./SampleTypeChip";

import StatusChip
    from "./StatusChip";

import ActionMenu
    from "./ActionMenu";


const CollectionTableRow = ({
    collection,
    onAction,
}) => {

    return (
        <tr>

            {/* ACCESSION NO. */}

            <td>

                <span className="collection-accession">
                    {collection.accessionNo}
                </span>

            </td>


            {/* PATIENT */}

            <td>

                <PatientDetailsCell
                    patient={
                        collection.patient
                    }
                />

            </td>


            {/* SAMPLE TYPE */}

            <td>

                <SampleTypeChip
                    type={
                        collection.sampleType
                    }
                />

            </td>


            {/* COLLECTION CENTER */}

            <td>

                <span className="collection-center">

                    {collection.collectionCenter}

                </span>

            </td>


            {/* COLLECTED BY */}

            <td>

                <span className="collection-collected-by">

                    {collection.collectedBy}

                </span>

            </td>


            {/* COLLECTION TIME */}

            <td>

                <span className="collection-time">

                    {collection.collectionTime}

                </span>

            </td>


            {/* STATUS */}

            <td>

                <StatusChip
                    status={
                        collection.status
                    }
                />

            </td>


            {/* ACTION */}

            <td className="collection-table__action-cell">

                <ActionMenu
                    collection={collection}
                    onAction={onAction}
                />

            </td>

        </tr>
    );
};


export default CollectionTableRow;