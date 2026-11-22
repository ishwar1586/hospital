import { createRoot } from "react-dom/client";

import ThermalInvoice from "@/master_modules/pharmacydashboard/posBilling/print/thermal/ThermalInvoice";
import A4Invoice from "@/master_modules/pharmacydashboard/posBilling/print/a4/A4Invoice";

const DEFAULT_PRINT_DELAY = 700;

const wait = (ms) =>

    new Promise((resolve) => {

        setTimeout(resolve, ms);

    });

/* ===========================================================
   Create Hidden Print Container
=========================================================== */

const createPrintContainer = () => {

    const container = document.createElement("div");

    container.id = "invoice-print-root";

    container.style.position = "fixed";
    container.style.left = "0";
    container.style.top = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.background = "#ffffff";
    container.style.zIndex = "999999";
    container.style.overflow = "auto";

    document.body.appendChild(container);

    return container;

};

/* ===========================================================
   Remove Container
=========================================================== */

const destroyContainer = (

    root,

    container

) => {

    if (root) {

        root.unmount();

    }

    if (

        container &&

        document.body.contains(container)

    ) {

        document.body.removeChild(container);

    }

};

/* ===========================================================
   Validation
=========================================================== */

const validatePayload = (

    saleData

) => {

    if (!saleData) {

        throw new Error("Sale payload missing.");

    }

    if (!saleData.invoice) {

        throw new Error("Invoice information missing.");

    }

    if (

        !saleData.medicines ||

        saleData.medicines.length === 0

    ) {

        throw new Error("Medicine list is empty.");

    }

};

/* ===========================================================
   Select Invoice Component
=========================================================== */

const getInvoiceComponent = (

    type,

    saleData

) => {

    switch (type) {

        case "a4":

            return (

                <A4Invoice

                    saleData={saleData}

                />

            );

        case "thermal":

        break

        default:

            return (

                <ThermalInvoice

                    saleData={saleData}

                />

            );

    }

};

/* ===========================================================
   Print Invoice
=========================================================== */

const printInvoice = async ({

    saleData,

    type = "thermal",

    delay = DEFAULT_PRINT_DELAY,

}) => {

    validatePayload(saleData);

    let root = null;

    let container = null;

    try {

        container =

            createPrintContainer();

        root =

            createRoot(container);

        root.render(

            getInvoiceComponent(

                type,

                saleData

            )

        );

        await wait(delay);

        window.print();

        await wait(800);

    } finally {

        destroyContainer(

            root,

            container

        );

    }

};

export default printInvoice;