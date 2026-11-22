import "./ActivityIcon.css";

import {
    AddCircleOutlineOutlined,
    ShoppingCartOutlined,
    PublishedWithChangesOutlined,
    SyncAltOutlined,
    SellOutlined,
    DescriptionOutlined,
    QrCodeOutlined,
    WarningAmberOutlined,
    EditOutlined,
    VisibilityOutlined,
    Inventory2Outlined,
} from "@mui/icons-material";

const ActivityIcon = ({

    type,

}) => {

    const activityMap = {

        "Stock Created": {

            className: "created",

            icon: <AddCircleOutlineOutlined />,

        },

        Purchase: {

            className: "purchase",

            icon: <ShoppingCartOutlined />,

        },

        Adjustment: {

            className: "adjustment",

            icon: <PublishedWithChangesOutlined />,

        },

        Transfer: {

            className: "transfer",

            icon: <SyncAltOutlined />,

        },

        "Price Updated": {

            className: "price",

            icon: <SellOutlined />,

        },

        "Document Uploaded": {

            className: "document",

            icon: <DescriptionOutlined />,

        },

        "Barcode Printed": {

            className: "barcode",

            icon: <QrCodeOutlined />,

        },

        Expired: {

            className: "expired",

            icon: <WarningAmberOutlined />,

        },

        Edited: {

            className: "edited",

            icon: <EditOutlined />,

        },

        Viewed: {

            className: "viewed",

            icon: <VisibilityOutlined />,

        },

    };

    const activity =

        activityMap[type] ||

        {

            className: "default",

            icon: <Inventory2Outlined />,

        };

    return (

        <div

            className={`activity-icon ${activity.className}`}

        >

            {

                activity.icon

            }

        </div>

    );

};

export default ActivityIcon;