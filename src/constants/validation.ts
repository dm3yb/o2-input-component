import { z } from 'zod'

const USERNAME_MIN_LENGTH = 3
const USERNAME_MAX_LENGTH = 15

export const baseInputValidationSchema = z.object({
	username: z
		.string()
		.min(USERNAME_MIN_LENGTH, {
			message: `Must have at least ${USERNAME_MIN_LENGTH} character.`,
		})
		.max(USERNAME_MAX_LENGTH, {
			message: `There should be no more than ${USERNAME_MAX_LENGTH} characters.`,
		}),
})
