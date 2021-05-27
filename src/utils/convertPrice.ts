export function convertPrice(dairy: number, cleaningTax: number) {
	const dairyFiveDays = dairy * 5
	const total = dairyFiveDays + cleaningTax
	const discount = total - ((total * 10) / 100)

	return {
		dairyFiveDays,
		total,
		discount
	}
}