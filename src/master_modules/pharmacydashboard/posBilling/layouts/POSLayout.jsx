import "./POSLayout.css";

const POSLayout = ({

    header,

    children,

    footer,

}) => {

    return (

        <div className="pos-layout">

            {/* ================================= */}
            {/* Header */}
            {/* ================================= */}

            {

                header && (

                    <header className="pos-layout-header">

                        {header}

                    </header>

                )

            }

            {/* ================================= */}
            {/* Main Content */}
            {/* ================================= */}

            <main className="pos-layout-content">

                {children}

            </main>

            {/* ================================= */}
            {/* Footer */}
            {/* ================================= */}

            {

                footer && (

                    <footer className="pos-layout-footer">

                        {footer}

                    </footer>

                )

            }

        </div>

    );

};

export default POSLayout;