import "./SearchHeader.css";

import {

    SearchRounded,

    FlashOnRounded,

    KeyboardCommandKeyRounded,

} from "@mui/icons-material";

const SearchHeader = ({

    searchText = "",

    onSearchChange,

    onQuickAdd,

}) => {

    return (

        <div className="search-header">

            {/* ==========================================
                Search Box
            ========================================== */}

            <div className="search-box">

                <SearchRounded className="search-icon" />

                <input

                    type="text"

                    value={searchText}

                    placeholder="Search medicine by name, barcode, batch, HSN..."

                    onChange={(event) =>

                        onSearchChange?.(

                            event.target.value

                        )

                    }

                />

                <div className="search-shortcut">

                    <KeyboardCommandKeyRounded />

                    <span>

                        Ctrl + K

                    </span>

                </div>

            </div>

            {/* ==========================================
                Quick Add
            ========================================== */}

            <button

                type="button"

                className="quick-add-btn"

                onClick={onQuickAdd}

            >

                <FlashOnRounded />

                Quick Add

            </button>

        </div>

    );

};

export default SearchHeader;