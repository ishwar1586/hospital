/* =========================================
   RESULT VALIDATION UTILITY
========================================= */


/**
 * Validate all result rows.
 *
 * This utility is intended for UI/application
 * validation only.
 *
 * Clinical reference ranges must come from
 * the configured laboratory/test data.
 *
 * @param {Array} results
 * @param {Object} resultValues
 *
 * @returns {{
 *     isValid: boolean,
 *     hasErrors: boolean,
 *     hasWarnings: boolean,
 *     results: Array,
 *     errors: Array,
 *     warnings: Array
 * }}
 */
const validateResult = (
    results = [],
    resultValues = {}
) => {

    // =========================================
    // SAFETY
    // =========================================

    const safeResults =
        Array.isArray(results)
            ? results
            : [];


    const safeValues =
        resultValues &&
        typeof resultValues === "object"
            ? resultValues
            : {};


    const validationResults = [];

    const errors = [];

    const warnings = [];


    // =========================================
    // VALIDATE EACH RESULT
    // =========================================

    safeResults.forEach(
        (item, index) => {

            const resultId =
                item.id ??
                item.testId ??
                item.testCode ??
                index;


            const enteredValue =
                safeValues[resultId] ??
                item.result ??
                "";


            const value =
                String(
                    enteredValue
                ).trim();


            const testName =
                item.testName ||
                item.name ||
                `Test ${index + 1}`;


            const referenceRange =
                item.referenceRange ||
                "";


            // =====================================
            // EMPTY RESULT
            // =====================================

            if (!value) {

                const validation = {

                    id:
                        resultId,

                    testName,

                    value,

                    status:
                        "error",

                    flag:
                        "Missing",

                    message:
                        `${testName} result is required.`,

                };


                validationResults.push(
                    validation
                );


                errors.push(
                    validation
                );


                return;

            }


            // =====================================
            // QUALITATIVE RESULT
            // =====================================

            /*
             * Examples:
             *
             * Negative
             * Positive
             * Clear
             * Pale Yellow
             *
             * These cannot be safely evaluated
             * using a numeric range parser.
             */

            if (
                !isNumericValue(
                    value
                )
            ) {

                const validation = {

                    id:
                        resultId,

                    testName,

                    value,

                    status:
                        "valid",

                    flag:
                        item.flag ||
                        "Normal",

                    message:
                        "",

                };


                validationResults.push(
                    validation
                );


                return;

            }


            // =====================================
            // NUMERIC VALUE
            // =====================================

            const numericValue =
                Number(
                    value
                );


            // =====================================
            // INVALID NUMBER
            // =====================================

            if (
                !Number.isFinite(
                    numericValue
                )
            ) {

                const validation = {

                    id:
                        resultId,

                    testName,

                    value,

                    status:
                        "error",

                    flag:
                        "Invalid",

                    message:
                        `${testName} contains an invalid numeric value.`,

                };


                validationResults.push(
                    validation
                );


                errors.push(
                    validation
                );


                return;

            }


            // =====================================
            // NO REFERENCE RANGE
            // =====================================

            if (!referenceRange) {

                const validation = {

                    id:
                        resultId,

                    testName,

                    value,

                    status:
                        "warning",

                    flag:
                        "Unverified",

                    message:
                        `${testName} has no reference range configured.`,

                };


                validationResults.push(
                    validation
                );


                warnings.push(
                    validation
                );


                return;

            }


            // =====================================
            // PARSE RANGE
            // =====================================

            const parsedRange =
                parseReferenceRange(
                    referenceRange
                );


            // =====================================
            // RANGE COULD NOT BE PARSED
            // =====================================

            if (
                !parsedRange
            ) {

                const validation = {

                    id:
                        resultId,

                    testName,

                    value,

                    status:
                        "warning",

                    flag:
                        "Unverified",

                    message:
                        `${testName} reference range could not be evaluated automatically.`,

                };


                validationResults.push(
                    validation
                );


                warnings.push(
                    validation
                );


                return;

            }


            // =====================================
            // BELOW RANGE
            // =====================================

            if (
                parsedRange.min !== null &&
                numericValue <
                    parsedRange.min
            ) {

                const validation = {

                    id:
                        resultId,

                    testName,

                    value,

                    status:
                        "warning",

                    flag:
                        "Low",

                    message:
                        `${testName} is below the configured reference range.`,

                };


                validationResults.push(
                    validation
                );


                warnings.push(
                    validation
                );


                return;

            }


            // =====================================
            // ABOVE RANGE
            // =====================================

            if (
                parsedRange.max !== null &&
                numericValue >
                    parsedRange.max
            ) {

                const validation = {

                    id:
                        resultId,

                    testName,

                    value,

                    status:
                        "warning",

                    flag:
                        "High",

                    message:
                        `${testName} is above the configured reference range.`,

                };


                validationResults.push(
                    validation
                );


                warnings.push(
                    validation
                );


                return;

            }


            // =====================================
            // NORMAL
            // =====================================

            const validation = {

                id:
                    resultId,

                testName,

                value,

                status:
                    "valid",

                flag:
                    "Normal",

                message:
                    "",

            };


            validationResults.push(
                validation
            );

        }
    );


    // =========================================
    // FINAL RESULT
    // =========================================

    return {

        isValid:
            errors.length === 0,

        hasErrors:
            errors.length > 0,

        hasWarnings:
            warnings.length > 0,

        results:
            validationResults,

        errors,

        warnings,

    };

};


// =========================================
// NUMERIC CHECK
// =========================================

const isNumericValue = (
    value
) => {

    if (
        typeof value !==
        "string"
    ) {

        return false;

    }


    const normalized =
        value
            .trim()
            .replace(
                /,/g,
                ""
            );


    if (
        normalized === ""
    ) {

        return false;

    }


    return Number.isFinite(
        Number(
            normalized
        )
    );

};


// =========================================
// REFERENCE RANGE PARSER
// =========================================

const parseReferenceRange = (
    referenceRange
) => {

    const range =
        String(
            referenceRange
        )
            .trim();


    if (!range) {

        return null;

    }


    // =========================================
    // RANGE
    // Example:
    //
    // 13.0 - 17.0
    // 4.5 - 5.5
    // =========================================

    const rangeMatch =
        range.match(
            /^\s*(-?\d+(?:\.\d+)?)\s*[-–]\s*(-?\d+(?:\.\d+)?)\s*$/
        );


    if (
        rangeMatch
    ) {

        return {

            min:
                Number(
                    rangeMatch[1]
                ),

            max:
                Number(
                    rangeMatch[2]
                ),

        };

    }


    // =========================================
    // LESS THAN
    //
    // Example:
    //
    // < 6.0
    // =========================================

    const lessThanMatch =
        range.match(
            /^\s*<\s*(-?\d+(?:\.\d+)?)\s*$/
        );


    if (
        lessThanMatch
    ) {

        return {

            min:
                null,

            max:
                Number(
                    lessThanMatch[1]
                ),

        };

    }


    // =========================================
    // LESS THAN OR EQUAL
    //
    // Example:
    //
    // <= 6.0
    // =========================================

    const lessThanOrEqualMatch =
        range.match(
            /^\s*<=\s*(-?\d+(?:\.\d+)?)\s*$/
        );


    if (
        lessThanOrEqualMatch
    ) {

        return {

            min:
                null,

            max:
                Number(
                    lessThanOrEqualMatch[1]
                ),

        };

    }


    // =========================================
    // GREATER THAN
    //
    // Example:
    //
    // > 40
    // =========================================

    const greaterThanMatch =
        range.match(
            /^\s*>\s*(-?\d+(?:\.\d+)?)\s*$/
        );


    if (
        greaterThanMatch
    ) {

        return {

            min:
                Number(
                    greaterThanMatch[1]
                ),

            max:
                null,

        };

    }


    // =========================================
    // GREATER THAN OR EQUAL
    // =========================================

    const greaterThanOrEqualMatch =
        range.match(
            /^\s*>=\s*(-?\d+(?:\.\d+)?)\s*$/
        );


    if (
        greaterThanOrEqualMatch
    ) {

        return {

            min:
                Number(
                    greaterThanOrEqualMatch[1]
                ),

            max:
                null,

        };

    }


    // =========================================
    // UNPARSEABLE
    // =========================================

    return null;

};


// =========================================
// EXPORT
// =========================================

export default validateResult;