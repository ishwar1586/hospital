import "./CategoryTabs.css";

import categoryTabs from "../../config/categoryTabs.config";

const CategoryTabs = ({

    activeCategory,

    onCategoryChange,

}) => {

    return (

        <div className="category-tabs">

            {

                categoryTabs.map((category) => (

                    <button

                        key={category.id}

                        type="button"

                        className={`category-tab

                            ${

                                activeCategory === category.id

                                    ? "active"

                                    : ""

                            }`}

                        onClick={() =>

                            onCategoryChange?.(

                                category.id

                            )

                        }

                    >

                        {category.label}

                    </button>

                ))

            }

        </div>

    );

};

export default CategoryTabs;