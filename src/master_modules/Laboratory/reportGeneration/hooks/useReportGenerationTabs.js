// =========================================
// REPORT GENERATION TABS HOOK
// =========================================

import {
    useCallback,
    useMemo,
    useState,
} from "react";

import tabs
    from "../config/tabs";


// =========================================
// CUSTOM HOOK
// =========================================

const useReportGenerationTabs = () => {

    // =========================================
    // DEFAULT TAB
    // =========================================

    const defaultTab =
        tabs.length > 0
            ? tabs[0].id
            : null;


    // =========================================
    // ACTIVE TAB
    // =========================================

    const [
        activeTab,
        setActiveTab,
    ] = useState(
        defaultTab
    );


    // =========================================
    // VALID TAB CHECK
    // =========================================

    const isValidTab =
        useCallback(
            (tabId) => {

                return tabs.some(
                    (tab) =>
                        tab.id === tabId
                );

            },
            []
        );


    // =========================================
    // CHANGE TAB
    // =========================================

    const changeTab =
        useCallback(
            (tabId) => {

                if (
                    !isValidTab(
                        tabId
                    )
                ) {
                    return;
                }


                setActiveTab(
                    tabId
                );

            },
            [isValidTab]
        );


    // =========================================
    // RESET TAB
    // =========================================

    const resetTab =
        useCallback(
            () => {

                setActiveTab(
                    defaultTab
                );

            },
            [defaultTab]
        );


    // =========================================
    // ACTIVE TAB CONFIG
    // =========================================

    const activeTabConfig =
        useMemo(
            () => {

                return (
                    tabs.find(
                        (tab) =>
                            tab.id ===
                            activeTab
                    ) ||
                    null
                );

            },
            [activeTab]
        );


    // =========================================
    // ACTIVE TAB INDEX
    // =========================================

    const activeTabIndex =
        useMemo(
            () => {

                return tabs.findIndex(
                    (tab) =>
                        tab.id ===
                        activeTab
                );

            },
            [activeTab]
        );


    // =========================================
    // NEXT TAB
    // =========================================

    const goToNextTab =
        useCallback(
            () => {

                if (
                    tabs.length === 0
                ) {
                    return;
                }


                const currentIndex =
                    tabs.findIndex(
                        (tab) =>
                            tab.id ===
                            activeTab
                    );


                const nextIndex =
                    Math.min(
                        currentIndex + 1,
                        tabs.length - 1
                    );


                const nextTab =
                    tabs[nextIndex];


                if (nextTab) {

                    setActiveTab(
                        nextTab.id
                    );

                }

            },
            [activeTab]
        );


    // =========================================
    // PREVIOUS TAB
    // =========================================

    const goToPreviousTab =
        useCallback(
            () => {

                if (
                    tabs.length === 0
                ) {
                    return;
                }


                const currentIndex =
                    tabs.findIndex(
                        (tab) =>
                            tab.id ===
                            activeTab
                    );


                const previousIndex =
                    Math.max(
                        currentIndex - 1,
                        0
                    );


                const previousTab =
                    tabs[
                        previousIndex
                    ];


                if (previousTab) {

                    setActiveTab(
                        previousTab.id
                    );

                }

            },
            [activeTab]
        );


    // =========================================
    // NAVIGATION STATES
    // =========================================

    const canGoPrevious =
        activeTabIndex > 0;


    const canGoNext =
        activeTabIndex >= 0 &&
        activeTabIndex <
            tabs.length - 1;


    // =========================================
    // RETURN
    // =========================================

    return {

        activeTab,

        activeTabConfig,

        activeTabIndex,

        changeTab,

        resetTab,

        goToNextTab,

        goToPreviousTab,

        canGoPrevious,

        canGoNext,

    };

};


export default useReportGenerationTabs;