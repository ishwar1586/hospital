import { useState } from "react";

import {
    useParams,
    useNavigate,
} from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/editCategory.css";

import {
    categoryMock,
} from "../mock/category.mock";

import CategoryForm from "../components/CategoryForm/CategoryForm";

const EditCategory = () => {

    const navigate = useNavigate();

    const { categoryId } =
        useParams();

    const selectedCategory =
        categoryMock.find(
            (category) =>
                category.id ===
                Number(categoryId)
        );

    const initialData = {

        categoryCode:
            selectedCategory?.categoryCode || "",

        categoryName:
            selectedCategory?.categoryName || "",

        description:
            selectedCategory?.description || "",

        status:
            selectedCategory?.status || "",
    };

    const [formData, setFormData] =
        useState(initialData);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(
            "Updated Category",
            formData
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
        <div className="edit-category-container">

            <div className="page-header">

                <h2>
                    Edit Category
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
                mode="edit"
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />

        </div>
    );
};

export default EditCategory;