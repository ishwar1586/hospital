import { ipdChargesMock } from "../mock/ipdCharges.mock";

const calculateAmount = (charge) => {
  const quantity = Number(charge.quantity) || 0;
  const rate = Number(charge.rate) || 0;
  const discount = Number(charge.discount) || 0;

  return Math.max(0, quantity * rate - discount);
};

export const ipdChargesService = {
  async getCharges() {
    return ipdChargesMock.map((charge) => ({
      ...charge,
      amount: calculateAmount(charge),
    }));
  },

  async addCharge(charges, newCharge) {
    const charge = {
      ...newCharge,
      id: `CHG-${Date.now()}`,
      quantity: Number(newCharge.quantity),
      rate: Number(newCharge.rate),
      discount: Number(newCharge.discount),
    };

    return [
      ...charges,
      {
        ...charge,
        amount: calculateAmount(charge),
      },
    ];
  },

  async deleteCharge(charges, chargeId) {
    return charges.filter((charge) => charge.id !== chargeId);
  },

  calculateAmount,
};