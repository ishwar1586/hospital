const AuditInformation = () => {

    return (

        <div className="stock-form-section">

            <div className="stock-form-section-header">

                <h3>

                    Audit Information

                </h3>

            </div>

            <div className="stock-form-section-body">

                <div className="form-grid">

                    <div className="form-group">

                        <label>

                            Created By

                        </label>

                        <input

                            value="Admin"

                            readOnly

                        />

                    </div>

                    <div className="form-group">

                        <label>

                            Created On

                        </label>

                        <input

                            value="03 Jul 2026"

                            readOnly

                        />

                    </div>

                    <div className="form-group">

                        <label>

                            Last Updated By

                        </label>

                        <input

                            value="Store Manager"

                            readOnly

                        />

                    </div>

                    <div className="form-group">

                        <label>

                            Last Updated On

                        </label>

                        <input

                            value="08 Jul 2026"

                            readOnly

                        />

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AuditInformation;