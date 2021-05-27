export function validatePermission(permission: boolean) {
	return permission ?
		{ permission: "sim", ruleClass: true }
		: { permission: "não", ruleClass: false }
}