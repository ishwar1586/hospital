const getCategoryStats = (categories = []) => {

    const totalCategories = categories.length;

    const activeCategories = categories.filter(
        (category) =>
            category.status?.toLowerCase() === "active"
    ).length;

    const inactiveCategories = categories.filter(
        (category) =>
            category.status?.toLowerCase() === "inactive"
    ).length;

    const totalTests = categories.reduce(
        (total, category) =>
            total + Number(category.totalTests || 0),
        0
    );

    const totalProfiles = categories.reduce(
        (total, category) =>
            total + Number(category.totalProfiles || 0),
        0
    );

    return {
        totalCategories,
        activeCategories,
        inactiveCategories,
        totalTests,
        totalProfiles,
    };
};

export default getCategoryStats;