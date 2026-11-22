import "./GRNOtherCharges.css";

const GRNOtherCharges = ({
    formData,
    handleChange,
}) => {

    return (

        <div className="grn-other-charges">

            <h3>
                Other Charges
            </h3>

            <div className="grn-other-grid">

                <div className="grn-other-field">

                    <label>
                        Freight Charges
                    </label>

                    <input
                        type="number"
                        name="freightCharges"
                        value={formData.freightCharges || 0}
                        onChange={handleChange}
                    />

                </div>

                <div className="grn-other-field">

                    <label>
                        Loading Charges
                    </label>

                    <input
                        type="number"
                        name="loadingCharges"
                        value={formData.loadingCharges || 0}
                        onChange={handleChange}
                    />

                </div>

                <div className="grn-other-field">

                    <label>
                        Other Charges
                    </label>

                    <input
                        type="number"
                        name="otherCharges"
                        value={formData.otherCharges || 0}
                        onChange={handleChange}
                    />

                </div>

            </div>

        </div>

    );

};

export default GRNOtherCharges;