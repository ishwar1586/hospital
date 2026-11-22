import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/addCategory.css";

import CategoryForm from "../components/CategoryForm/CategoryForm";

const AddCategory = () => {

    const navigate = useNavigate();

    const initialData = {
        categoryCode:
            `CAT${Date.now()
                .toString()
                .slice(-4)}`,

        categoryName: "",

        description: "",

        status: "Active",
    };

    const [formData, setFormData] =
        useState(initialData);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(
            "New Category",
            formData
        );

        navigate(
            "/module/categorymaster"
        );
    };

    const handleCancel = () => {

        const confirmed =
            window.confirm(
                "Discard changes?"
            );

        if (confirmed) {

            navigate(
                "/module/categorymaster"
            );

        }
    };

    return (
        <div className="add-category-container">

            <div className="page-header">

                <h2>
                    Add Category
                </h2>

                <button
                    className="back-btn"
                    onClick={() =>
                        navigate(
                            "/module/categorymaster"
                        )
                    }
                >

                    <ArrowBackOutlinedIcon />

                    Back To Category List

                </button>

            </div>

            <CategoryForm
                formData={formData}
                setFormData={setFormData}
                mode="add"
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />

        </div>
    );
};

export default AddCategory;