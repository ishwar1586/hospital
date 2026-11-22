import React from "react";

import CustomerTypeCard from "./CustomerTypeCard";

const CustomerTypeGrid = ({
  customerTypes = [],
  config = {},
  selectedCustomerType = null,
  onCustomerTypeSelect,
}) => {
  /*
   * =========================================================
   * EMPTY STATE
   * =========================================================
   */

  if (
    !Array.isArray(customerTypes) ||
    customerTypes.length === 0
  ) {
    return null;
  }


  /*
   * =========================================================
   * CUSTOMER TYPE SELECT
   * =========================================================
   */

  const handleCustomerTypeSelect = (
    customerType
  ) => {
    if (
      typeof onCustomerTypeSelect !==
      "function"
    ) {
      return;
    }

    onCustomerTypeSelect(
      customerType
    );
  };


  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <div className="customer-type-grid">
      {customerTypes.map(
        (customerType) => {
          if (!customerType?.id) {
            return null;
          }

          const isSelected =
            selectedCustomerType?.id ===
            customerType.id;

          return (
            <CustomerTypeCard
              key={customerType.id}
              customerType={
                customerType
              }
              config={config}
              selected={isSelected}
              onSelect={
                handleCustomerTypeSelect
              }
            />
          );
        }
      )}
    </div>
  );
};

export default CustomerTypeGrid;