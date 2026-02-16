/**
 * 🧾 GST Calculator - Tax Lagao Bhai!
 *
 * Bunty apni dukaan ke liye GST calculator bana raha hai. Customer ko bill
 * dena hai jisme base price, GST amount, aur total clearly dikhna chahiye.
 * GST rate category ke hisaab se change hota hai.
 *
 * GST Rates (by category string, case-insensitive):
 *   - "essential"   => 0% GST  (dal, chawal, atta, etc.)
 *   - "food"        => 5% GST  (packaged food, restaurant below Rs 7500)
 *   - "standard"    => 12% GST (processed food, business class tickets)
 *   - "electronics" => 18% GST (phones, laptops, etc.)
 *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
 *   - Any other category => return null
 *
 * Rules:
 *   - Calculate: gstAmount = amount * rate / 100
 *   - Calculate: totalAmount = amount + gstAmount
 *   - Round gstAmount aur totalAmount to 2 decimal places using
 *     parseFloat(value.toFixed(2))
 *   - Return object: { baseAmount, gstRate, gstAmount, totalAmount }
 *   - category ko lowercase mein compare karo (case-insensitive)
 *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), toLowerCase()
 *
 * Validation:
 *   - Agar amount positive finite number nahi hai, return null
 *   - Agar category string nahi hai, return null
 *   - Agar category unknown hai, return null
 *
 * @param {number} amount - Base amount before tax
 * @param {string} category - Product category
 * @returns {{ baseAmount: number, gstRate: number, gstAmount: number, totalAmount: number } | null}
 *
 * @example
 *   calculateGST(1000, "electronics")
 *   // => { baseAmount: 1000, gstRate: 18, gstAmount: 180, totalAmount: 1180 }
 *
 *   calculateGST(500, "essential")
 *   // => { baseAmount: 500, gstRate: 0, gstAmount: 0, totalAmount: 500 }
 */
export function calculateGST(amount, category) {
  // Your code here

  let categories = ["essential", "food", "standard", "electronics", "luxury"];
  if (
    amount === null ||
    typeof category !== "string" ||
    Number.isNaN(amount) ||
    !Number.isFinite(amount) ||
    amount <= 0 ||
    category.trim() === "" ||
    !categories.includes(category.toLowerCase())
  ) {
    return null;
  }

  let gstAmount;
  let totalAmount;
  let gstRate;

  if (category.toLowerCase() === "essential") {
    gstAmount = parseFloat(((amount * 0) / 100).toFixed(2));
    totalAmount = parseFloat((amount + gstAmount).toFixed(2));
    gstRate = 0;
  } else if (category.toLowerCase() === "food") {
    gstAmount = parseFloat(((amount * 5) / 100).toFixed(2));
    totalAmount = parseFloat((amount + gstAmount).toFixed(2));
    gstRate = 5;
  } else if (category.toLowerCase() === "standard") {
    gstAmount = parseFloat(((amount * 12) / 100).toFixed(2));
    totalAmount = parseFloat((amount + gstAmount).toFixed(2));
    gstRate = 12;
  } else if (category.toLowerCase() === "electronics") {
    gstAmount = parseFloat(((amount * 18) / 100).toFixed(2));
    totalAmount = parseFloat((amount + gstAmount).toFixed(2));
    gstRate = 18;
  } else if (category.toLowerCase() === "luxury") {
    gstAmount = parseFloat(((amount * 28) / 100).toFixed(2));
    totalAmount = parseFloat((amount + gstAmount).toFixed(2));
    gstRate = 28;
  }

  return {
    baseAmount: amount,
    gstRate: gstRate,
    gstAmount: gstAmount,
    totalAmount: totalAmount,
  };
}
