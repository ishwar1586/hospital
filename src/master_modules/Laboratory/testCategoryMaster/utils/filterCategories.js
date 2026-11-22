// =========================================
// NORMALIZE VALUE
// =========================================

const normalizeValue = (value = "") => {
    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");
};


// =========================================
// CHECK AUTHORIZATION
// =========================================

const isAuthorized = (value) => {

    if (typeof value === "boolean") {
        return value;
    }

    const normalizedValue =
        normalizeValue(value);

    return (
        normalizedValue === "yes" ||
        normalizedValue === "true"
    );
};


// =========================================
// FILTER CATEGORIES
// =========================================

const filterCategories = (
    categories = [],
    filters = {},
    activeTab = "all"
) => {

    const search = normalizeValue(
        filters.search
    );

    const status =
        normalizeValue(
            filters.status || "all"
        );

    const department =
        normalizeValue(
            filters.department || "all"
        );

    const authorization =
        normalizeValue(
            filters.authorization || "all"
        );


    return categories.filter((category) => {

        // =====================================
        // SEARCH FILTER
        // Category Name OR Category Code
        // =====================================

        const categoryName =
            normalizeValue(
                category.categoryName
            );

        const categoryCode =
            normalizeValue(
                category.categoryCode
            );

        const matchesSearch =
            search === "" ||
            categoryName.includes(search) ||
            categoryCode.includes(search);


        // =====================================
        // STATUS FILTER
        // =====================================

        const categoryStatus =
            normalizeValue(
                category.status
            );

        const matchesStatus =
            status === "all" ||
            categoryStatus === status;


        // =====================================
        // DEPARTMENT FILTER
        // =====================================

        const categoryDepartment =
            normalizeValue(
                category.department
            );

        const matchesDepartment =
            department === "all" ||
            categoryDepartment === department;


        // =====================================
        // AUTO AUTHORIZATION FILTER
        // =====================================

        const categoryAuthorization =
            isAuthorized(
                category.autoAuthorization
            );

        const matchesAuthorization =
            authorization === "all" ||
            (
                authorization === "yes" &&
                categoryAuthorization
            ) ||
            (
                authorization === "no" &&
                !categoryAuthorization
            );


        // =====================================
        // TAB FILTER
        // =====================================

        const matchesTab =
            activeTab === "all" ||
            categoryStatus ===
                normalizeValue(activeTab);


        // =====================================
        // FINAL RESULT
        // =====================================

        return (
            matchesSearch &&
            matchesStatus &&
            matchesDepartment &&
            matchesAuthorization &&
            matchesTab
        );

    });
};


export default filterCategories;