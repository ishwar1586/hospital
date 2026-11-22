import React, {
    useState,
} from "react";

import SearchIcon from "@mui/icons-material/Search";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./PatientSearch.css";


const PatientSearch = ({
    onSearch,
    onNewPatient,
}) => {

    // =====================================================
    // Search State
    // =====================================================

    const [
        searchBy,
        setSearchBy,
    ] = useState("uhid");


    const [
        searchValue,
        setSearchValue,
    ] = useState("");


    // =====================================================
    // Search Handler
    // =====================================================

    const handleSearch = () => {

        const trimmedValue =
            searchValue.trim();


        if (
            typeof onSearch === "function"
        ) {

            onSearch({
                searchBy,
                searchValue:
                    trimmedValue,
            });

        }

    };


    // =====================================================
    // Search Input Handler
    // =====================================================

    const handleSearchValueChange = (
        event
    ) => {

        setSearchValue(
            event.target.value
        );

    };


    // =====================================================
    // Search By Handler
    // =====================================================

    const handleSearchByChange = (
        event
    ) => {

        setSearchBy(
            event.target.value
        );

    };


    // =====================================================
    // Enter Key Search
    // =====================================================

    const handleSearchKeyDown = (
        event
    ) => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            handleSearch();

        }

    };


    // =====================================================
    // New Patient Handler
    // =====================================================

    const handleNewPatient = () => {

        if (
            typeof onNewPatient === "function"
        ) {

            onNewPatient();

        }

    };


    // =====================================================
    // Render
    // =====================================================

    return (

        <div className="patient-search">

            {/* =============================================
                Search Mode Actions
            ============================================= */}

            <div className="patient-search__mode-actions">

                <button
                    type="button"
                    className="
                        patient-search__mode-button
                        patient-search__mode-button--active
                    "
                >
                    Search Existing Patient
                </button>


                <button
                    type="button"
                    className="
                        patient-search__mode-button
                        patient-search__mode-button--secondary
                    "
                    onClick={
                        handleNewPatient
                    }
                >
                    New Patient Registration
                </button>

            </div>


            {/* =============================================
                Search Controls
            ============================================= */}

            <div className="patient-search__controls">

                {/* =========================================
                    Search By
                ========================================= */}

                <div className="patient-search__field">

                    <label
                        htmlFor="patient-search-by"
                        className="patient-search__label"
                    >
                        Search By
                    </label>


                    <div className="patient-search__select-wrapper">

                        <select
                            id="patient-search-by"
                            className="patient-search__select"
                            value={searchBy}
                            onChange={
                                handleSearchByChange
                            }
                        >

                            <option value="uhid">
                                UHID
                            </option>

                            <option value="mobile">
                                Mobile Number
                            </option>

                            <option value="patientName">
                                Patient Name
                            </option>

                        </select>


                        <ExpandMoreIcon
                            className="
                                patient-search__select-icon
                            "
                        />

                    </div>

                </div>


                {/* =========================================
                    Search Input
                ========================================= */}

                <div className="patient-search__input-wrapper">

                    <input
                        type="text"
                        className="patient-search__input"
                        value={searchValue}
                        onChange={
                            handleSearchValueChange
                        }
                        onKeyDown={
                            handleSearchKeyDown
                        }
                        placeholder="
                            Enter UHID / Mobile No. / Patient Name
                        "
                        aria-label="Patient search"
                    />


                    <button
                        type="button"
                        className="
                            patient-search__input-search-button
                        "
                        onClick={
                            handleSearch
                        }
                        aria-label="Search patient"
                    >
                        <SearchIcon
                            fontSize="small"
                        />
                    </button>

                </div>


                {/* =========================================
                    Search Button
                ========================================= */}

                <button
                    type="button"
                    className="patient-search__search-button"
                    onClick={
                        handleSearch
                    }
                >

                    <SearchIcon
                        fontSize="small"
                    />

                    <span>
                        Search
                    </span>

                </button>

            </div>

        </div>

    );

};


export default PatientSearch;